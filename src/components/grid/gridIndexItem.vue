<template>
	<div class="gridIndexItem">
    <div class="gridBox">
      <div class="gridBox-head"><h2>网格点概况</h2></div>
      <div class="gridBox-body">

      </div>
    </div>
    <div class="gridBox">
      <div class="gridBox-head"><h2>网格点动态 <span>更多></span></h2></div>
      <div class="gridBox-body">
        <post></post>
      </div>
    </div>
    <div class="gridBox">
      <div class="gridBox-head"><h2>网格点红黑榜 <span>更多></span></h2></div>
      <div class="gridBox-body">
        <post></post>
      </div>
    </div>
  </div>
</template>

<script>
import post from '@/components/post/post';
export default {
  name: "gridIndexItem",
  components: {
    post
  },
  data(){
    return {
      dataList: [],
      postQueryData: [],
    }
  },
  mounted(){
    //this.circleQuery();
  },
  methods: {
    //分页查询圈子
    circleQuery(){
      let params = {
        pageNum: 1,
        pageSize: 7,
        communityId: sessionStorage.getItem("communityId"),
      }
      circleQuery(params).then(data => {
        if (data.data.code == 200) {
          this.dataList = data.data.data.list
        }
      })
    },
  }
}
</script>

<style scoped>

</style>
