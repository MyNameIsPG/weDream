<template>
	<div class="tabbar1">
    <div class="banner">
      <img src="../../assets/img/banner.png" alt="">
      <div class="orgName">
        <span>八方小区</span>
      </div>
    </div>
    <div class="iconList">
      <ul>
        <li v-for="(item,index) in dataList" :key="index" @click="pageView(item.link)">
          <img :src="item.url" alt=""> {{item.name}}
        </li>
      </ul>
    </div>
    <noticeList :prizeList="prizeList"></noticeList>
    <div class="homeList">
      <h2 class="homeListTitle">活动直通车</h2>
      <ul>
        <li v-for="(item,index) in activityData" :key="index">
          <router-link :to="{path: '/activityIndexDetails', query: { uuid: item.uuid }}">
            <div class="homeListImg">
              <img v-if="item.coverpicList && item.coverpicList>0" :src="item.coverpicList[0]" alt="">
              <img v-else src="../../assets/img/banner.png" alt="">
            </div>
            <h2 class="homeListName">{{item.name}}</h2>
            <div class="homeListTip">
              <div class="fl">
                <img src="../../assets/img/other/otherUser.png" alt="">{{item.createName}}
              </div>
              <div class="fr">
                <img src="../../assets/img/other/otherView.png" alt="">{{friendlyTimeFormat(item.createTime)}}
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="homeList">
      <h2 class="homeListTitle">社区风采</h2>
      <ul>
        <li v-for="(item,index) in articlesList" :key="index">
          <router-link :to="{path: '/postDetails', query: { uuid: item.uuid }}">
            <div class="homeListImg">
              <img v-if="item.pic" :src="item.pic.split(',')[0]" alt="">
              <img v-else src="../../assets/img/banner.png" alt="">
            </div>
            <h2 class="homeListName">{{item.title}}</h2>
            <div class="homeListTip">
              <div class="fl">
                <img src="../../assets/img/other/otherUser.png" alt="">{{item.createName}}
              </div>
              <div class="fr">
                <img src="../../assets/img/other/otherView.png" alt="">{{friendlyTimeFormat(item.createTime)}}
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import noticeList from 'src/components/index/tabbar1/noticeList';
import { articlesQueryAll } from "src/api/classification/index";
import { query } from "src/api/activity/index";
import { gzhLogin } from "src/api/login/index";
import { noticesQuery } from "src/api/notices/index";
import friendlyTimeFormat from 'src/util/timeUtils';
export default {
  name: "tabbar1",
  components: {
    noticeList
  },
  data(){
    return {
      dataList: [
        { url: require('../../assets/img/index/icon1.png'), name: '社区党建', link: '/partyIndex' },
        { url: require('../../assets/img/index/icon2.png'), name: '政务咨询', link: '/businessIndex' },
        { url: require('../../assets/img/index/icon3.png'), name: '活动中心', link: '/activityIndex' },
        { url: require('../../assets/img/index/icon4.png'), name: '便捷服务', link: '' },
        { url: require('../../assets/img/index/icon5.png'), name: '邻里圈子', link: '/circleIndex' },
        { url: require('../../assets/img/index/icon6.png'), name: '社区信箱', link: '/complaintIndex' },
        { url: require('../../assets/img/index/icon7.png'), name: '社区网格', link: '/gridIndex' },
        { url: require('../../assets/img/index/icon8.png'), name: '社区直达', link: '/merchantIndex' },
      ],
      articlesList: {},
      activityData: {},
      prizeList: {}
    }
  },
  mounted(){
    /*Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });*/
    if(this.GetRequest().code){
      let params = {
        appid: this.GetRequest().appid,
        openid: this.GetRequest().openid
      }
      gzhLogin(params).then(data => {
        if (data.data.code == 200) {
          sessionStorage.setItem("appId", data.data.data.appId);
          sessionStorage.setItem("openId", data.data.data.openId);
          sessionStorage.setItem("sessionId", data.data.data.sessionId);
          sessionStorage.setItem("uuid", data.data.data.uuid);
          sessionStorage.setItem("isRealName", data.data.data.isRealName);
          sessionStorage.setItem("communityId", data.data.data.communityId);
          this.circleQuery();
          this.queryPost();
          Indicator.close();
        }
      })
    }


    this.circleQuery();
    this.queryPost();
    this.queryNoticesPost();
  },
  methods: {
    GetRequest() {
      let url = location.href;
      let theRequest = new Object();
      if(url.indexOf("?") != -1) {
        let str = url.substr(1);
        let strs = str.split("?")[1];
        let strs1 = strs.split("&");
        for(let i = 0; i < strs1.length; i++) {
          theRequest[strs1[i].split("=")[0]] = unescape(strs1[i].split("=")[1]);
        }
      }
      return theRequest;
    },
    pageView(obj){
      if(obj!=''){
        this.$router.push({path: obj})
      }
    },
    //分页查询圈子
    circleQuery(){
      let params = {
        pageNum: 1,
        pageSize: 3,
        communityId: sessionStorage.getItem("communityId"),
        status: ''
      }
      articlesQueryAll(params).then(data => {
        if (data.data.code == 200) {
          this.articlesList = data.data.data.list
        }
      })
    },
    //分页查询活动
    queryPost() {
      let params = {
        pageNum: 1,
        pageSize: 3,
        communityId: sessionStorage.getItem("communityId"),
      }
      query(params).then(data => {
        if (data.data.code == 200) {
          this.activityData = data.data.data.list
        }
      })
    },
    //分页查询公告
    queryNoticesPost(){
      let params = {
        pageNum: 1,
        pageSize: 5,
        communityId: sessionStorage.getItem("communityId"),
        type: 1
      }
      noticesQuery(params).then(data => {
        if (data.data.code == 200) {
          this.prizeList = data.data.data.list
        }
      })
    },
    friendlyTimeFormat(time) {
      if(time){
        let d = new Date(time.replace(new RegExp(/-/gm), "/"))
        return friendlyTimeFormat(d)
      }
    },
  }
}
</script>

<style>

</style>
