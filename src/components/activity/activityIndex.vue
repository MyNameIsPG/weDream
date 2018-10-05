<template>
	<div class="activityIndex">
    <div class="activity-head-box">
      <img class="headImg" src="../../assets/img/userImg.png" alt="">
      <div class="headText">
        <h2>姓名 <img src="../../assets/img/sex_men.png" alt=""></h2>
        <p>积分：0</p>
      </div>
    </div>
    <div class="tab" style="margin-top: 10px">
      <ul>
        <li class="active">活动列表</li>
        <li>活动风采</li>
        <li>我的参与</li>
      </ul>
      <div>
        <activity></activity>
      </div>
    </div>
  </div>
</template>

<script>
import activity from '@/components/activity/activity';
export default {
  name: "activityIndex",
  components: {
    activity
  }
}
</script>

<style>

</style>
