<template>
	<div class="noticeIndexDetails" :style="'height:'+ height.height + ';background: ' + height.background">
    <h2>{{dataList.title}}</h2>
    <div class="cler info">
      <span class="fl">创建人：{{dataList.createName}}</span>
      <span class="fr">创建时间：{{dataList.createTime}}</span>
    </div>
    <div class="content" v-html="dataList.content"></div>
  </div>
</template>

<script>
import { queryOne } from "src/api/notices/index";
export default {
  name: "noticeIndexDetails",
  data(){
    return {
      dataList: [],
      height:{
        height:'',
        background: '#fff'
      },
    }
  },
  methods: {
    queryPost(){
      let params = {
        uuid: this.$route.query.uuid
      }
      queryOne(params).then(data => {
        if (data.data.code == 200) {
          this.dataList = data.data.data
        }
      })
    }
  },
  mounted(){
    this.queryPost();
    let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.height.height = h+'px';
  }
}
</script>

<style scoped>

</style>
