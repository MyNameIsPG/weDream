<template>
  <div class="complaintMyIndex">
    <postCom :dataList="dataList"></postCom>
  </div>
</template>

<script>
  import { complaintQuery } from "src/api/complaint/index";
  import postCom from 'src/components/complaint/postCom'
	export default {
		name: "complaintMyIndex",
    components: { postCom },
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
          pageNum: 1,
          pageSize: 20,
          communityId: sessionStorage.getItem("communityId"),
          createId: sessionStorage.getItem("createId"),
        }
        complaintQuery(params).then(data => {
          if (data.data.code == 200) {
            this.dataList = data.data.data.list
          }
        })
      },
    }
	}
</script>

<style scoped>

</style>
