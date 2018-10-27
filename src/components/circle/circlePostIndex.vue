<template>
  <div class="circlePostIndex">
    <div class="infosBox">
        <img src="../../assets/img/circleLogo.png" alt="">
        <h2>{{postCircleQueryOneData.name}}</h2>
      <p>成员：1  |  帖子：12</p>
      <a href="javascript:void(0);" class="bansA">加入</a>
    </div>
    <postList style="background: #ffffff;" :dataList="postQueryData"></postList>
    <div class="fixedBtn">
      <a @click="pageViewAdd()" href="javascript:void(0);">发帖</a>
    </div>
  </div>
</template>

<script>
import { postQuery } from "src/api/circle/index";
import { circleQueryOne } from "src/api/circle/index";
import postList from '@/components/circle/postList';
export default {
  name: "circlePostIndex",
  components: {
    postList
  },
  data(){
    return {
      postQueryData: [],
      postCircleQueryOneData: [],
    }
  },
  mounted(){
    this.postQuery();
    this.postCircleQueryOne();
  },
  methods: {
    //发帖
    pageViewAdd(){
      this.$router.push({path: '/circleIndexAdd', query: { type: 2, uuid: this.$route.query.uuid }})
    },
    //分页查询帖子
    postQuery(){
      let params = {
        pageNum: 1,
        pageSize: 100,
        communityId: sessionStorage.getItem("communityId"),
        status: 2,
        circleId: this.$route.query.uuid
      }
      postQuery(params).then(data => {
        if (data.data.code == 200) {
          this.postQueryData = data.data.data.list
        }
      })
    },
    //圈子详情
    postCircleQueryOne(){
      let params = {
        uuid: this.$route.query.uuid
      }
      circleQueryOne(params).then(data => {
        if (data.data.code == 200) {
          this.postCircleQueryOneData = data.data.data
        }
      })
    }
  }
}
</script>

<style>

</style>
