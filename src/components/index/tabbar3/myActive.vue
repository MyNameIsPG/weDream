<template>
  <div class="activityIndex">
    <div class="tab">
      <div>
        <activity :dataList="dataList"></activity>
      </div>
    </div>
  </div>
</template>

<script>
  import activity from 'src/components/activity/activity';
  import { queryMyAct } from "src/api/activity/index";

  export default {
    name: "activityIndex",
    components: {
      activity,
    },
    data(){
      return {
        dataList: {},
      }
    },
    mounted(){
      this.queryMyActPost();
    },
    methods: {
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
    }
  }
</script>

<style>

</style>
