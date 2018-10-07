<template>
	<div class="businessIndexList">
    <ul>
      <li v-for="(item,index) in dataList" :key="index" @click="pageView(item.uuid)">
        {{item.title}}
        <i class="fa fa-angle-right"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import { articlesQueryAll } from "src/api/classification/index";
export default {
  name: "businessIndexList",
  data(){
    return {
      dataList: []
    }
  },
  mounted: function() {
    document.title = this.$route.query.title;
    this.circleQuery();
  },
  methods: {
    //分页查询圈子
    circleQuery(){
      let params = {
        classify: this.$route.query.uuid,
        type: 3
      }
      articlesQueryAll(params).then(data => {
        if (data.data.code == 200) {
          this.dataList = data.data.data.list
        }
      })
    },
    pageView(obj){
      this.$router.push({path: '/businessIndexDetails', query: { uuid: obj } })
    }
  }
}
</script>

<style>

</style>
