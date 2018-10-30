<template>
	<div class="gridIndexItem">
    <div v-if="dataList.length>0">
      <div class="gridBox" v-for="(item, index) in dataList" :key="index">
        <div class="gridBox-head"><h2>{{item.name}} <span v-if="index!=0" @click="pageAll(item.uuid,item.name)">更多></span></h2></div>
        <div class="gridBox-body">
          <div v-if="item.articlesList && item.articlesList.length>0">
            <div v-if="index==0" class="" style="padding: 10px 0;">
              <div v-html="item.articlesList[0].content"></div>
            </div>
          </div>
          <div v-if="item.articlesList && item.articlesList.length>0">
            <post v-if="index==1 || index==2" :data="item.articlesList"></post>
          </div>
        </div>
      </div>
    </div>
    <div class="noData" v-else>暂无数据</div>
  </div>
</template>

<script>
import post from 'src/components/post/post';
import { classificationQueryAndArticle } from "src/api/classification/index";
export default {
  name: "gridIndexItem",
  components: {
    post
  },
  data(){
    return {
      dataList: {
        articlesList: []
      },
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
        pageSize: 4,
        type: 1,
        flag: 1,
        communityId: sessionStorage.getItem("communityId"),
        upId: this.$route.query.uuid
      }
      classificationQueryAndArticle(params).then(data => {
        if (data.data.code == 200) {
          this.dataList = data.data.data
        }
      })
    },
    pageAll(obj,title){
      this.$router.push({ path: "/postAll", query: {uuid: obj, title: title}})
    }
  }
}
</script>

<style scoped>

</style>
