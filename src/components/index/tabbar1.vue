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
    <noticeList></noticeList>
    <div class="homeList">
      <h2 class="homeListTitle">活动直通车</h2>
      <ul>
        <li v-for="(item,index) in activityData" :key="index">
          <a href="javascript:void(0);">
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
          </a>
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
import friendlyTimeFormat from 'src/util/timeUtils'
export default {
  name: "tabbar1",
  components: {
    noticeList
  },
  data(){
    return {
      dataList: [
        { url: require('../../assets/img/index/icon1.png'), name: '社区党建', link: '' },
        { url: require('../../assets/img/index/icon2.png'), name: '政务咨询', link: '/businessIndex' },
        { url: require('../../assets/img/index/icon3.png'), name: '活动中心', link: '/activityIndex' },
        { url: require('../../assets/img/index/icon4.png'), name: '便捷服务', link: '' },
        { url: require('../../assets/img/index/icon5.png'), name: '邻里圈子', link: '/circleIndex' },
        { url: require('../../assets/img/index/icon6.png'), name: '社区信箱', link: '/complaintIndex' },
        { url: require('../../assets/img/index/icon7.png'), name: '社区网格', link: '/gridIndex' },
        { url: require('../../assets/img/index/icon8.png'), name: '社区直达', link: '/merchantIndex' },
      ],
      articlesList: {
        pic: ''
      },
      activityData: {

      }
    }
  },
  mounted(){
    this.circleQuery();
    this.queryPost();
  },
  methods: {
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
    friendlyTimeFormat(time) {
      let d = new Date(time.replace(new RegExp(/-/gm), "/"))
      return friendlyTimeFormat(d)
    },
  }
}
</script>

<style>

</style>
