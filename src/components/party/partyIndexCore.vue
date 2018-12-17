<template>
	<div class="partyIndexCore">
    <div class="activityIndex" style="margin-bottom: 10px;">
      <div class="activity-head-box">
        <img class="headImg" :src="userInfo.headPic" alt="">
        <div class="headText" style="margin-top: 24px;">
          <div style="float: left;">
            <h2 style="margin-top: -7px;">{{userInfo.nickname}}  <img v-if="userInfo.sex==1" src="../../assets/img/sex_men.png" alt=""><img v-else-if="2" src="../../assets/img/sex_woman.png" alt=""></h2>
            <p style="margin-top: 5px; font-size: 12px;">积分：<span v-if="userInfo.integral">{{userInfo.integral}}分</span><span v-else>0分</span></p>
          </div>
          <div style="float: right;">
            <!--<span v-if="userInfo.isRealName==1" style="color: #ffdf4c; font-size: 13px;">已认证</span>
            <span v-else-if="userInfo.isRealName==2" style="color: #999; font-size: 13px;">未认证</span>
            <i style="font-size: 20px; color: #ccc;" class="fa fa-angle-right"></i>-->
          </div>
        </div>
      </div>
    </div>

    <div class="iconList" style="background: #fff">
      <ul style=" padding-bottom: 8px;">
        <li>
          <a href="http://weixin.hxw.gov.cn/redStar/pages/fingerPartySchool/video/videoList.html?canshare=1&datetime=20171128" style=" color: #333;">
            <img style="width: 50px; height: 50px;" src="../../assets/img/dangjian/icon1.png" />
            红星云
          </a>
        </li>
        <li>
          <img style="width: 50px; height: 50px;" src="../../assets/img/dangjian/icon2.png" />
          支部信息
        </li>
        <li>
          <a href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx020d85a0aef80286&redirect_uri=http%3A%2F%2Fbbs1.people.com.cn%2Fwb%2Fdzxx2017H5Auth.action&response_type=code&scope=snsapi_userinfo#wechat_redirect" style=" color: #333;">
            <img style="width: 50px; height: 50px;" src="../../assets/img/dangjian/icon3.png" />
            制度学习
          </a>
        </li>
        <li>
          <img style="width: 50px; height: 50px;" src="../../assets/img/dangjian/icon8.png" />
          党员信息
        </li>
        <li v-for="(item,index) in dataList" :key="index" @click="pageView(item.uuid, item.name)">
          <img style="width: 50px; height: 50px;" v-if="item.pic" :src="item.pic" alt="">
          <img v-else src="" style="border: 1px solid #ccc;" alt="">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div>
      <h2 class="homeListTitle">{{titles}}</h2>
      <div v-if="dataListPost && dataListPost.length>0" style="padding: 10px 10px 0; background: #fff;">
        <post style="margin-top: 0px;" :data="dataListPost"></post>
      </div>
      <div v-else class="noData">
        暂无数据
      </div>
    </div>
  </div>
</template>

<script>
  import { classificationQueryAll } from "src/api/classification/index";
  import { articlesQueryAll } from "src/api/classification/index";
  import post from 'src/components/post/post';
	export default {
		name: "partyIndexCore",
    components: {
      post
    },
    data(){
      return {
        dataList: {},
        dataListPost: {},
        titles: '组织动态',
        userInfo: JSON.parse(sessionStorage.getItem("userInfo"))
      }
    },
    mounted(){
      this.circleQuery();
    },
    methods: {
      //分页查询圈子
      circleQuery(){
        let params = {
          type: 5,
          flag: 1,
          communityId: sessionStorage.getItem("communityId"),
        }
        classificationQueryAll(params).then(data => {
          if (data.data.code == 200) {
            this.dataList = data.data.data.list
            this.circleQueryPost(data.data.data.list[0].uuid)
            this.titles = data.data.data.list[0].name
          }
        })
      },
      circleQueryPost(uuid){
        let params = {
          classify: uuid,
          type: 5,
          flag: 1,
          communityId: sessionStorage.getItem("communityId"),
        }
        articlesQueryAll(params).then(data => {
          if (data.data.code == 200) {
            this.dataListPost = data.data.data.list
          }
        })
      },
      pageView(uuid, name){
        this.circleQueryPost(uuid)
        this.titles = name
      }
    }
	}
</script>

<style scoped>

</style>
