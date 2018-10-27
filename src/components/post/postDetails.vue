<template>
  <div class="noticeIndexDetails">
    <h2>{{dataList.title}}</h2>
    <div class="cler info">
      <span class="fl">创建人：{{dataList.createName}}</span>
      <span class="fr">创建时间：{{dataList.createTime}}</span>
    </div>
    <div class="content" v-html="dataList.content"></div>
  </div>
</template>

<script>
  import { articlesQuertOne } from "src/api/classification/index";
  export default {
    name: "noticeIndexDetails",
    data(){
      return {
        dataList: [],
      }
    },
    methods: {
      queryPost(){
        let params = {
          uuid: this.$route.query.uuid
        }
        articlesQuertOne(params).then(data => {
          if (data.data.code == 200) {
            this.dataList = data.data.data
          }
        })
      }
    },
    mounted(){
      this.queryPost();
    }
  }
</script>

<style scoped lang="stylus">
html, body {
  height: 100% !important;
  background #fff;
}
</style>
