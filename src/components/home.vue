<template>
	<div class="home">
    <div class="banner">
      <img src="../assets/img/banner.png" alt="">
    </div>
    <div class="iconList">
      <ul>
        <li v-for="(item,index) in dataList" :key="index">
          <img :src="item.url" alt=""> {{item.name}}
        </li>
      </ul>
    </div>
	</div>
</template>

<script>
export default {
	data(){
	  return {
	    dataList: [
        { url: require('../assets/img/index/icon1.png'), name: '社区党建' },
        { url: require('../assets/img/index/icon2.png'), name: '政务咨询' },
        { url: require('../assets/img/index/icon3.png'), name: '活动中心' },
        { url: require('../assets/img/index/icon4.png'), name: '便捷服务' },
        { url: require('../assets/img/index/icon5.png'), name: '邻里圈子' },
        { url: require('../assets/img/index/icon6.png'), name: '社区信箱' },
        { url: require('../assets/img/index/icon7.png'), name: '社区网格' },
        { url: require('../assets/img/index/icon8.png'), name: '社区直达' },
      ]
    }
  }
}
</script>

<style lang="stylus">

</style>
