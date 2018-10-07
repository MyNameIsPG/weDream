<template>
  <div class="postList">
    <div class="box" style="background: #ffffff; ">
      <div class="box-head">
        <span class="time">{{dataList.createTime}}</span>
        <img v-if="dataList.headpic" class="userImg" :src="dataList.headpic" alt="">
        <img v-else class="userImg" src="../../assets/img/userImg.png" alt="">
        <span class="userName">{{dataList.createName}}</span>
      </div>
      <div class="box-body">
        <p class="box-body-text">{{dataList.content}}</p>
        <div v-if="dataList.files!='[]' && dataList.files">
          <img v-for="(item,index) in JSON.parse(dataList.files)" :src="item" alt="" style="width: 100%">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { complaintQueryOne } from "src/api/complaint/index";
	export default {
		name: "complaintDetails",
    data(){
      return {
        dataList: {}
      }
    },
    mounted(){
      this.circleQuery();
    },
    methods: {
      //分页查询
      circleQuery(){
        let params = {
          uuid: this.$route.query.uuid
        }
        complaintQueryOne(params).then(data => {
          if (data.data.code == 200) {
            this.dataList = data.data.data
          }
        })
      },
    }
	}
</script>

<style scoped>

</style>
