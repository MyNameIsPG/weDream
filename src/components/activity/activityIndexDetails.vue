<template>
  <div class="activityIndexDetails">
    <div class="activety">
      <div class="activetyBox" style="background: #ffffff">
        <img v-if="dataList.coverpic" :src="JSON.parse(dataList.coverpic)[0]" alt="" alt="">
        <img v-else src="../../assets/img/banner.png" alt="">
        <h2>{{dataList.name}}</h2>
        <p><span>活动时间：</span>{{dataList.startTime}} 至 {{dataList.endTime}}</p>
        <p><span>报名时间：</span>{{dataList.joinEndTime}} 至 {{dataList.joinStartTime}}</p>
        <p><span>地点：</span>{{dataList.location}}</p>
        <div class="cler">
          <span class="fl">人数：<span style="color: #ffdf4c;"><span v-if="dataList.joinPeople">{{dataList.joinPeople}}</span><span v-else>0</span>/{{dataList.limitPeople}}</span> 人</span>
        </div>
      </div>
    </div>
    <div class="fixedBottomBtn">
      <a href="javascript: void(0);" @click="joinActBtn(dataList.flag)"><span>+</span> 活动申请</a>
      <a v-if="dataList.flag==1" href="javascript: void(0);" style="background: #ff4c4c; color: #fff;">报名未开始</a>
      <a v-if="dataList.flag==2" href="javascript: void(0);" style="background: #5185eb; color: #fff;">报名进行中</a>
      <a v-if="dataList.flag==3" href="javascript: void(0);" style="background: #999999; color: #fff;">报名已结束</a>
      <a v-if="dataList.flag==4" href="javascript: void(0);" style="background: #5185eb; color: #fff;">活动进行中</a>
      <a v-if="dataList.flag==5" href="javascript: void(0);" style="background: #999999; color: #fff;">活动已结束</a>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import { queryOne } from "src/api/activity/index";
  import { joinAct } from "src/api/activity/index";
  import { queryActPeople } from "src/api/activity/index";
	export default {
		name: "activityIndexDetails",
    data(){
		  return {
		    dataList: {},
        PeopleDataList: {}
      }
    },
    mounted(){
      this.queryPost();
      this.queryActPeoplePost();
    },
    methods: {
      //活动详情
      queryPost() {
        let params = {
          uuid: this.$route.query.uuid
        }
        queryOne(params).then(data => {
          if (data.data.code == 200) {
            this.dataList = data.data.data
          }
        })
      },
      //报名人员
      queryActPeoplePost() {
        let params = {
          uuid: this.$route.query.uuid
        }
        queryActPeople(params).then(data => {
          if (data.data.code == 200) {
            this.PeopleDataList = data.data.data.list
          }
        })
      },
      //报名
      joinActBtn(flag) {
        if(flag==2){
          this.$messagebox({
            title: '温馨提示',
            message: '是否报名该活动？',
            showCancelButton: true,
            confirmButtonText:"是",
            cancelButtonText:"否"
          }).then(action => {
            if(action == 'confirm'){
              let params = {
                actId: this.$route.query.uuid
              }
              joinAct(params).then(data => {
                if (data.data.code == 200) {
                  let instance = Toast('报名成功！感谢您的参与。');
                  setTimeout(() => {
                    instance.close();
                    this.queryPost();
                    this.queryActPeoplePost();
                  }, 2000);
                }
              })
            }else{
              console.log('否')
            }
          })
        }else if(flag==1) {
          this.$messagebox('温馨提示', '报名时间还没开始，请耐心等候');
        }else if(flag==3) {
          this.$messagebox('温馨提示', '报名已结束');
        }else if(flag==4) {
          this.$messagebox('温馨提示', '活动正在进行中');
        }else if(flag==5) {
          this.$messagebox('温馨提示', '活动已结束');
        }
      },
    }
	}
</script>

<style scoped>

</style>
