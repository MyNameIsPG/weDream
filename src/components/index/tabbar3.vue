<template>
	<div class="tabbar3">
    <div class="activityIndex">
      <div class="activity-head-box">
        <img class="headImg" :src="userInfo.headPic" alt="">
        <div class="headText" style="margin-top: 24px;">
          <h2 style="float: left;">{{userInfo.nickname}}  <img v-if="userInfo.sex==1" src="../../assets/img/sex_men.png" alt=""><img v-else-if="2" src="../../assets/img/sex_woman.png" alt=""></h2>
          <div style="float: right;">
            <!--<span v-if="userInfo.isRealName==1" style="color: #ffdf4c; font-size: 13px;">已认证</span>
            <span v-else-if="userInfo.isRealName==2" style="color: #999; font-size: 13px;">未认证</span>-->
            <!--<i style="font-size: 20px; color: #ccc;" class="fa fa-angle-right"></i>-->
          </div>
        </div>
      </div>
    </div>
    <div class="businessIndexList" style="margin-top: 10px;">
      <ul>
        <li v-for="(item,index) in dataList" :key="index" @click="pageView(item.url)" style="font-weight: bold;">
          <img style="width: 22px; height: 22px; vertical-align: middle; margin-top: -4px;" :src="item.urlImg" alt="">
          {{item.name}}
          <i class="fa fa-angle-right"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar3",
  data(){
    return {
      dataList: [
        {"name":"完善信息", urlImg: require('../../assets/img/user/icon1.png'), url: "/userRealName" },
        {"name":"我的活动", urlImg: require('../../assets/img/user/icon2.png'), url: '/myActive' },
        {"name":"我的积分", urlImg: require('../../assets/img/user/icon3.png') },
        {"name":"我的卡券", urlImg: require('../../assets/img/user/icon4.png') },
      ],
      userInfo: JSON.parse(sessionStorage.getItem("userInfo"))
    }
  },
  mounted: function() {

  },
  methods: {
    pageView(obj){
      if(obj==''){
        alert("正在建设")
      }else {
        this.$router.push({path: obj })
      }
    }
  }
}
</script>

<style>

</style>
