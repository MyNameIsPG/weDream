<template>
	<div class="activityIndex">
    <!--<div class="activity-head-box">
      <img class="headImg" src="../../assets/img/userImg.png" alt="">
      <div class="headText">
        <h2>姓名 <img src="../../assets/img/sex_men.png" alt=""></h2>
        <p>积分：0</p>
      </div>
    </div>-->
    <div class="tab">
      <ul>
        <li @click="optionBtn(1)" :class="{ 'active' : 1 == activeIndex}">活动列表</li>
        <li @click="optionBtn(2)" :class="{ 'active' : 2 == activeIndex}">活动风采</li>
        <li @click="optionBtn(3)" :class="{ 'active' : 3 == activeIndex}">我的参与</li>
      </ul>
      <div>
        <activity v-if="activeIndex==1||activeIndex==3" :dataList="dataList"></activity>
        <div style="padding: 0 15px;" v-if="activeIndex==2">
          <div v-if="activityData && activityData.length> 0">
            <post :data="activityData[0].articlesList"></post>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import activity from 'src/components/activity/activity';
import post from 'src/components/post/post';
import { query } from "src/api/activity/index";
import { queryMyAct } from "src/api/activity/index";
import { classificationQueryAndArticle } from "src/api/classification/index";

export default {
  name: "activityIndex",
  components: {
    activity,
    post
  },
  data(){
    return {
      dataList: {},
      activeIndex: 1,
      activityData: {
        articlesList: []
      }
    }
  },
  mounted(){
    this.queryPost();

  },
  methods: {
    //分页查询活动
    queryPost() {
      let params = {
        pageNum: 1,
        pageSize: 100,
        communityId: sessionStorage.getItem("communityId"),
      }
      query(params).then(data => {
        if (data.data.code == 200) {
          this.dataList = data.data.data.list
        }
      })
    },
    //分页查询我的活动
    queryMyActPost() {
      let params = {
        pageNum: 1,
        pageSize: 100,
        communityId: sessionStorage.getItem("communityId"),
      }
      queryMyAct(params).then(data => {
        if (data.data.code == 200) {
          this.dataList = data.data.data.list
        }
      })
    },
    optionBtn(obj){
      this.activeIndex = obj
      this.dataList = ''
      this.activityData = ''
      if(obj==1){
        this.queryPost();
      }else if(obj==3){
        this.queryMyActPost();
      }else if(obj==2){
        this.circleQuery();
      }
    },
    //分页查询圈子
    circleQuery(){
      let params = {
        pageNum: 1,
        pageSize: 100,
        type: 2,
        communityId: sessionStorage.getItem("communityId"),
      }
      classificationQueryAndArticle(params).then(data => {
        if (data.data.code == 200) {
          this.activityData = data.data.data
        }
      })
    },
  }
}
</script>

<style>

</style>
