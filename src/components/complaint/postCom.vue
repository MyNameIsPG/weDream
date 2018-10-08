<template>
  <div class="postList">
    <div class="box" v-for="(item,index) in dataList" :key="index" style="background: #ffffff; margin-top: 10px;">
      <img class="replyImg" v-if="item.status==2" src="../../assets/img/reply.png" alt="">
      <div class="box-head" @click="pageView(item.uuid)">
        <span class="time">{{friendlyTimeFormat(item.createTime)}}</span>
        <img v-if="item.headpic" class="userImg" :src="item.headpic" alt="">
        <img v-else class="userImg" src="../../assets/img/userImg.png" alt="">
        <span class="userName">{{item.createName}}</span>
      </div>
      <div class="box-body" @click="pageView(item.uuid)">
        <p class="box-body-text">{{item.content}}</p>
        <img v-if="JSON.parse(item.files)" :src="JSON.parse(item.files)[0]" alt="" style="width: 100%">
      </div>
    </div>
  </div>
</template>

<script>
  import friendlyTimeFormat from 'src/util/timeUtils'
	export default {
		name: "postCom",
    props: ["dataList"],
    methods: {
      pageView(obj) {
        this.$router.push({path: '/complaintDetails', query: {uuid: obj}})
      },
      friendlyTimeFormat(time) {
        let d = new Date(time.replace(new RegExp(/-/gm), "/"))
        return friendlyTimeFormat(d)
      },
    }
	}
</script>

<style scoped>

</style>
