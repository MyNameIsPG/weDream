<template>
	<div class="ninePalace">
    <ul>
      <li v-for="(item,index) in dataList" :key="index" @click="pageView(item.name)">
        <img :src="item.url" alt="">
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "businessIndex",
  data(){
    return {
      dataList: [
        { url: require('../../assets/img/zhengwufuwu/icon1.png'), name: '证件办理' },
        { url: require('../../assets/img/zhengwufuwu/icon2.png'), name: '计生流动' },
        { url: require('../../assets/img/zhengwufuwu/icon3.png'), name: '社保就业' },
        { url: require('../../assets/img/zhengwufuwu/icon4.png'), name: '综治安全' },
        { url: require('../../assets/img/zhengwufuwu/icon5.png'), name: '文明教育' },
        { url: require('../../assets/img/zhengwufuwu/icon6.png'), name: '民政助残' },
        { url: require('../../assets/img/zhengwufuwu/icon7.png'), name: '医疗救助' },
        { url: require('../../assets/img/zhengwufuwu/icon8.png'), name: '帮办服务' },
        { url: require('../../assets/img/zhengwufuwu/icon9.png'), name: '其他服务' },
      ]
    }
  },
  methods: {
    pageView(obj){
      this.$router.push({path: '/businessIndexList', query: { title: obj } })
    }
  }
}
</script>

<style scoped>

</style>
