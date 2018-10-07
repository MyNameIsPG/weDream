<template>
	<div class="tabbar1">
    <div class="banner">
      <img src="../../assets/img/banner.png" alt="">
    </div>
    <div class="iconList">
      <ul>
        <li v-for="(item,index) in dataList" :key="index" @click="pageView(item.link)">
          <img :src="item.url" alt=""> {{item.name}}
        </li>
      </ul>
    </div>
    <noticeList></noticeList>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import noticeList from 'src/components/index/tabbar1/noticeList';
export default {
  name: "tabbar1",
  components: {
    noticeList
  },
  data(){
    return {
      dataList: [
        { url: require('../../assets/img/index/icon1.png'), name: '社区党建', link: '' },
        { url: require('../../assets/img/index/icon2.png'), name: '政务咨询', link: '/businessIndex' },
        { url: require('../../assets/img/index/icon3.png'), name: '活动中心', link: '/activityIndex' },
        { url: require('../../assets/img/index/icon4.png'), name: '便捷服务', link: '' },
        { url: require('../../assets/img/index/icon5.png'), name: '邻里圈子', link: '/circleIndex' },
        { url: require('../../assets/img/index/icon6.png'), name: '社区信箱', link: '/complaintIndex' },
        { url: require('../../assets/img/index/icon7.png'), name: '社区网格', link: '/gridIndex' },
        { url: require('../../assets/img/index/icon8.png'), name: '社区直达', link: '' },
      ]
    }
  },
  methods: {
    pageView(obj){
      if(obj!=''){
        this.$router.push({path: obj})
      }
    }
  }
}
</script>

<style>

</style>
