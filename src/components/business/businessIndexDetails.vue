<template>
  <div class="businessIndexDetails">
    <h2>{{dataList.title}}</h2>
    <div v-html="dataList.content"></div>
  </div>
</template>

<script>
  import { articlesQuertOne } from "src/api/classification/index";
  export default {
    name: "businessIndexDetails",
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

<style scoped>

</style>
