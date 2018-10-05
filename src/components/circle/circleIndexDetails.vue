<template>
	<div class="circleIndexDetails">
    <div class="postHead">
      <h2>{{dataList.title}}</h2>
      <p>{{dataList.createTime}}</p>
      <p>{{dataList.content}}</p>
      <div>
        <img v-for="(items,indexs) in JSON.parse(dataList.picture)" :key="indexs" :src="items" alt="">
      </div>
    </div>
    <div class="postCommon">
      <h2>评论</h2>
    </div>
  </div>
</template>

<script>
import { postQueryOne } from "src/api/circle/index";
export default {
  name: "circleIndexDetails",
  data(){
    return {
      dataList: [],
    }
  },
  mounted(){
    this.postCircleQueryOne();
  },
  methods: {
    //圈子详情
    postCircleQueryOne(){
      let params = {
        uuid: this.$route.query.uuid
      }
      postQueryOne(params).then(data => {
        if (data.data.code == 200) {
          this.dataList = data.data.data
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
