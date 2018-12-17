<template>
  <div class="circleIndex">
    <div class="iconList">
      <ul>
        <li v-for="(item,index) in dataList" :key="index" @click="pageView(item.uuid)">
          <img v-if="item.headPic" :src="item.headPic" alt="">
          <img v-else src="" style="border: 1px solid #ccc;" alt="">
          {{item.name}}
        </li>
        <li @click="pageView('all')">
          <img src="../../assets/img/quanzi/icon88.png" />
          更多圈子
        </li>
      </ul>
    </div>
    <postList :dataList="postQueryData"></postList>
    <div class="fixedBtn">
      <a @click="pageViewAdd()" href="javascript:void(0);"><i class="fa fa-plus"></i></a>
    </div>
  </div>
</template>

<script>
import { circleQuery } from "src/api/circle/index";
import { postQuery } from "src/api/circle/index";
import postList from 'src/components/circle/postList';
export default {
  name: "circleIndex",
  components: {
    postList
  },
  data(){
    return {
      dataList: [],
      postQueryData: [],
    }
  },
  mounted(){
    this.circleQuery();
    this.postQuery();
  },
  methods: {
    //分页查询圈子
    circleQuery(){
      let params = {
        pageNum: 1,
        pageSize: 7,
        orgid: sessionStorage.getItem("communityId"),
      }
      circleQuery(params).then(data => {
        if (data.data.code == 200) {
          this.dataList = data.data.data.list
        }
      })
    },
    //分页查询帖子
    postQuery(){
      let params = {
        pageNum: 1,
        pageSize: 100,
        communityId: sessionStorage.getItem("communityId"),
        status: '4,2',
      }
      postQuery(params).then(data => {
        if (data.data.code == 200) {
          this.postQueryData = data.data.data.list
        }
      })
    },
    //跳转到圈子列表
    pageView(obj){
      if(obj=='all'){
        this.$router.push({path: '/circleIndexAll'})
      }else {
        this.$router.push({path: '/circlePostIndex', query: { uuid: obj }})
      }
    },
    //发帖
    pageViewAdd(){
      this.$router.push({path: '/circleIndexAdd', query: { type: 1}})
    }
  }
}
</script>

<style>

</style>
