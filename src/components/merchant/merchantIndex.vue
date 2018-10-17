<template>
  <div class="merchantIndex">
    <div class="iconList" style="background: #fff; padding-bottom: 10px;">
      <ul>
        <li v-for="(item,index) in dataList" :key="index" @click="pageView(item.uuid)">
          <img v-if="item.pic" :src="item.pic" alt="">
          <img v-else src="" style="border: 1px solid #ccc;" alt="">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div>
      <img src="../../assets/img/no.png" /></div>
  </div>
</template>

<script>
import { classificationQueryAll } from "src/api/classification/index";
export default {
  name: "merchantIndex",
  data(){
    return {
      dataList: []
    }
  },
  mounted(){
    this.circleQuery();
  },
  methods: {
    //分页查询圈子
    circleQuery(){
      let params = {
        type: 6,
      }
      classificationQueryAll(params).then(data => {
        if (data.data.code == 200) {
          this.dataList = data.data.data.list
        }
      })
    },
    pageView(obj){
      //this.$router.push({path: '/merchantIndexDetails', query: { uuid: obj } })
    }
  }
}
</script>

<style scoped>

</style>
