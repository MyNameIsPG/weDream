<template>
  <div class="circleIndex">
    <div class="iconList">
      <ul>
        <li v-for="(item,index) in dataList" :key="index" @click="pageView(item.uuid)">
          <img v-if="item.headPic" :src="item.headPic" alt="">
          <img v-else src="" style="border: 1px solid #ccc;" alt="">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { circleQuery } from "src/api/circle/index";
import postList from '@/components/circle/postList';
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
  },
  methods: {
    //分页查询圈子
    circleQuery(){
      let params = {
        pageNum: 1,
        pageSize: 100,
        orgid: sessionStorage.getItem("communityId"),
      }
      circleQuery(params).then(data => {
        if (data.data.code == 200) {
          this.dataList = data.data.data.list
        }
      })
    },
    //跳转到圈子列表
    pageView(obj){
      this.$router.push({path: '/circlePostIndex', query: { uuid: obj }})
    },
  }
}
</script>

<style>

</style>
