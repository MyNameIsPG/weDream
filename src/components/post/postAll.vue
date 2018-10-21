<template>
	<div style="padding: 0 10px; background: #fff;">
    <post :data="dataList"></post>
  </div>
</template>

<script>
  import { articlesQueryAll } from "src/api/classification/index";
  import post from 'src/components/post/post';
	export default {
		name: "postAll",
    components: {
		  post
    },
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
          communityId: sessionStorage.getItem("communityId"),
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

<style scoped>

</style>
