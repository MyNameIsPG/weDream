<template>
	<div class="complaintIndex">
    <div>
      <mt-cell title="我的建议投诉" is-link @click.native="myPage"></mt-cell>
    </div>

    <div>
      <postCom :dataList="dataList"></postCom>
    </div>

    <div class="complaintBtn">
      <a @click="add()" href="javascript: void(0);">投诉建议</a>
    </div>
  </div>
</template>

<script>
  import { complaintQuery } from "src/api/complaint/index";
  import postCom from 'src/components/complaint/postCom'
export default {
  name: "complaintIndex",
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
      }
      complaintQuery(params).then(data => {
        if (data.data.code == 200) {
          this.dataList = data.data.data.list
        }
      })
    },
    //新增跳转
    add(){
      this.$router.push({path: '/complaintAdd'})
    },
    myPage(){
      this.$router.push({path: '/complaintMyIndex'})
    }
  }
}
</script>

<style scoped>

</style>
