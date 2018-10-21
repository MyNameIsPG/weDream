<template>
	<div class="activety">
    <div v-if="dataList && dataList.length>0">
      <div class="activetyBox" v-for="(item,index) in dataList" :key="index" @click="pageView(item.uuid)">
        <img v-if="item.coverpicList && item.coverpicList.length>0" :src="item.coverpicList[0]" alt="">
        <img v-else src="../../assets/img/banner.png" alt="">
        <h2>{{item.name}}</h2>
        <p><span>时间：</span>{{item.startTime}} 至 {{item.endTime}}</p>
        <p><span>地点：</span>{{item.location}}</p>
        <div class="cler">
        <span class="fl">人数：
          <span style="color: #ffdf4c;"><span v-if="item.joinPeople">{{item.joinPeople}}</span><span v-else>0</span>/{{item.limitPeople}}</span> 人</span>
          <span v-if="item.flag==1" class="fr" style="color:#ff4c4c;">报名未开始</span>
          <span v-if="item.flag==2" class="fr" style="color:#5185eb;">报名进行中</span>
          <span v-if="item.flag==3" class="fr" style="color:#999999;">报名已结束</span>
          <span v-if="item.flag==4" class="fr" style="color:#5185eb;">活动进行中</span>
          <span v-if="item.flag==5" class="fr" style="color:#999999;">活动已结束</span>
          <!--<span class="fr" style="color:#5185eb;">未开始</span>-->
          <!--<span class="fr" style="color:#ff4c4c;">进行中</span>-->
        </div>
      </div>
    </div>
    <div v-else class="noData">
      暂无数据
    </div>
  </div>
</template>

<script>
export default {
  name: "activety",
  props: ["dataList"],
  methods: {
    pageView(obj){
      this.$router.push({path: '/activityIndexDetails', query: {uuid: obj}})
    }
  }
}
</script>

<style scoped>

</style>
