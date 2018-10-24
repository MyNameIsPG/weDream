<template>
	<div class="tabbar3">
    <div class="activityIndex">
      <div class="activity-head-box">
        <img class="headImg" src="../../assets/img/userImg.png" alt="">
        <div class="headText" style="margin-top: 24px;">
          <h2 style="float: left;">姓名 <img src="../../assets/img/sex_men.png" alt=""></h2>
          <div style="float: right;">
            <span style="color: #ffdf4c;">已认证</span>
            <i style="font-size: 20px; color: #ccc;" class="fa fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="businessIndexList" style="margin-top: 10px;">
      <ul>
        <li v-for="(item,index) in dataList" :key="index" @click="pageView(item.name)" style="font-weight: bold;">
          <img style="width: 22px; height: 22px; vertical-align: middle; margin-top: -4px;" :src="item.url" alt="">
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
        {"name":"身份认证", url: require('../../assets/img/user/icon1.png') },
        {"name":"我的活动", url: require('../../assets/img/user/icon2.png') },
        {"name":"我的积分", url: require('../../assets/img/user/icon3.png') },
        {"name":"我的卡券", url: require('../../assets/img/user/icon4.png') },
      ]
    }
  },
  mounted: function() {
    document.title = this.$route.query.title;
  },
  methods: {
    pageView(obj){
      alert("正在建设")
      //this.$router.push({path: '/businessIndexDetails', query: { title: obj } })
    }
  }
}
</script>

<style>

</style>
