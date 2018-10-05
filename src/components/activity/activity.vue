<template>
	<div class="activety">
    <div @click="pageView()" class="">
      <img src="../../assets/img/banner.png" alt="">
      <h2>【活动报名】下周一，让我们共赴一场精美宫灯之约吧</h2>
      <p><span>时间：</span>08-20 14：30 至 08-20 15：30</p>
      <p><span>地点：</span>金桂社区三楼手工DIY活动室</p>
      <div class="cler">
        <span class="fl">人数：<span style="color: #ffdf4c;">25/25</span> 人</span>
        <span class="fr" style="color:#999999;">已结束</span>
        <!--<span class="fr" style="color:#5185eb;">未开始</span>-->
        <!--<span class="fr" style="color:#ff4c4c;">进行中</span>-->
      </div>
    </div>
    <div @click="pageView()" class="">
      <img src="../../assets/img/banner.png" alt="">
      <h2>【活动报名】下周一，让我们共赴一场精美宫灯之约吧</h2>
      <p><span>时间：</span>08-20 14：30 至 08-20 15：30</p>
      <p><span>地点：</span>金桂社区三楼手工DIY活动室</p>
      <div class="cler">
        <span class="fl">人数：<span style="color: #ffdf4c;">25/25</span> 人</span>
        <span class="fr" style="color:#999999;">已结束</span>
        <!--<span class="fr" style="color:#5185eb;">未开始</span>-->
        <!--<span class="fr" style="color:#ff4c4c;">进行中</span>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "activety",
  methods: {
    pageView(){
      this.$router.push({path: '/activityIndexDetails'})
    }
  }
}
</script>

<style scoped>

</style>
