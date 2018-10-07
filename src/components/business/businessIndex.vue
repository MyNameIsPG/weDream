<template>
	<div class="ninePalace">
    <ul>
      <li v-for="(item,index) in dataList" :key="index" @click="pageView(item.name, item.uuid)">
        <img :src="item.pic" alt="">
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { classificationQueryAll } from "src/api/classification/index";
export default {
  name: "businessIndex",
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
        type: 3,
      }
      classificationQueryAll(params).then(data => {
        if (data.data.code == 200) {
          this.dataList = data.data.data.list
        }
      })
    },
    pageView(name, uuid){
      this.$router.push({path: '/businessIndexList', query: { title: name, uuid: uuid } })
    }
  }
}
</script>

<style scoped>

</style>
