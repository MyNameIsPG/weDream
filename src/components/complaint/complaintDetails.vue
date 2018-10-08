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
    <div class="complaintDetailsReply">
      <h2>回复内容</h2>
      <div>
        <p style="text-align: right; color: #888; margin: 10px 0 5px;">2018-7-18 10:00</p>
        <p>尊敬的先生/女士：您好！您反映的乒乓球场地问题，我街道已联系相关社区，现已纳入社区整体规划。感谢您的关注！祝您生活愉快！</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { complaintQueryOne } from "src/api/complaint/index";
  import { complaintCommentQueryAll } from "src/api/complaint/index";
	export default {
		name: "complaintDetails",
    data(){
      return {
        dataList: {},
        commentDataList: {}
      }
    },
    mounted(){
      this.circleQuery();
      this.postComplaintCommentQueryAll();
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
      //分页查询
      postComplaintCommentQueryAll(){
        let params = {
          complaintUuid: this.$route.query.uuid
        }
        complaintCommentQueryAll(params).then(data => {
          if (data.data.code == 200) {
            this.commentDataList = data.data.data
          }
        })
      },
    }
	}
</script>

<style scoped>

</style>
