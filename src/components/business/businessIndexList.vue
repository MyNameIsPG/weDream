<template>
	<div class="businessIndexList">
    <ul>
      <li v-for="(item,index) in dataList" :key="index" @click="pageView(item.name)">
        {{item.name}}
        <i class="fa fa-angle-right"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "businessIndexList",
  data(){
    return {
      dataList: [
        {"name":"产前筛查报销实施方案"},
        {"name":"国家免费孕前优生健康检查程序"},
        {"name":"高危人群免费出生缺陷干预检测程序"},
        {"name":"免费产前筛查抽血方案"},
        {"name":"节育手术并发症医学鉴定程序"},
        {"name":"再生育审批流程"},
        {"name":"一、二孩生育服务证登记流程"},
        {"name":"病残儿医学鉴定程序"},
        {"name":"领取保健手册须知"}
      ]
    }
  },
  mounted: function() {
    document.title = this.$route.query.title;
  },
  methods: {
    pageView(obj){
      this.$router.push({path: '/businessIndexDetails', query: { title: obj } })
    }
  }
}
</script>

<style>

</style>
