<template>
	<div class="partyIndexCore">
    <div class="iconList" style="background: #fff">
      <ul style=" padding-bottom: 8px;">
        <li v-for="(item,index) in dataList" :key="index" @click="pageView(item.uuid)">
          <img style="width: 50px; height: 50px;" v-if="item.pic" :src="item.pic" alt="">
          <img v-else src="" style="border: 1px solid #ccc;" alt="">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div>
      <div v-if="dataListPost && dataListPost.length>0">
        <post :data="dataListPost"></post>
      </div>
      <div v-else class="noData">
        暂无数据
      </div>
    </div>
  </div>
</template>

<script>
  import { classificationQueryAll } from "src/api/classification/index";
  import { articlesQueryAll } from "src/api/classification/index";
  import post from 'src/components/post/post';
	export default {
		name: "partyIndexCore",
    components: {
      post
    },
    data(){
      return {
        dataList: {},
        dataListPost: {}
      }
    },
    mounted(){
      this.circleQuery();
    },
    methods: {
      //分页查询圈子
      circleQuery(){
        let params = {
          type: 5,
        }
        classificationQueryAll(params).then(data => {
          if (data.data.code == 200) {
            this.dataList = data.data.data.list
            this.circleQueryPost(data.data.data.list[0].uuid)
          }
        })
      },
      circleQueryPost(uuid){
        let params = {
          classify: uuid,
          type: 5,
          communityId: sessionStorage.getItem("communityId"),
        }
        articlesQueryAll(params).then(data => {
          if (data.data.code == 200) {
            this.dataListPost = data.data.data.list
          }
        })
      },
      pageView(uuid){
        this.circleQueryPost(uuid)
      }
    }
	}
</script>

<style scoped>

</style>
