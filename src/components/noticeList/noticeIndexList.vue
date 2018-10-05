<template>
	<div class="__businessIndexList__">
    <div class="businessIndexList">
      <ul :style="'height:'+ height.height + ';background: ' + height.background">
        <infinite-scroll class="box" @loading="loadBottom" :busy="busy" :isOk="isOk">
          <li v-if="list && list.length > 0" v-for="(item,index) in list" :key="index" @click="pageView(item.uuid)" style="font-weight: bold;">
            {{item.title}}
            <i class="fa fa-angle-right"></i>
          </li>
        </infinite-scroll>
      </ul>
    </div>
  </div>
</template>

<script>
import { query } from "src/api/notices/index";
import friendlyTimeFormat from 'src/util/timeUtils'
import infiniteScroll from 'src/components/base/infiniteScroll';
import infiniteScrollMix from 'src/components/base/infiniteScrollMix';
export default {
  name: "noticeIndexList",
  mixins: [infiniteScrollMix],
  components: {
    infiniteScroll,
  },
  data(){
    return {
      dataList: [],
      height:{
        height:'',
        background: '#fff'
      },
    }
  },
  mounted() {
    let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.height.height = h+'px';
  },
  methods: {
    obtain() {
      return new Promise((resolve, reject) => {
        query({
          communityId: sessionStorage.getItem("communityId"),
          type: 1,
          pageSize: this.pageSize,
          pageNum: this.pageNum,
        }).then((res) => {
          resolve(res);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    pageView(obj){
      this.$router.push({path: '/noticeIndexDetails', query: { uuid: obj } })
    },
    friendlyTimeFormat(time) {
      let d = new Date(time.replace(new RegExp(/-/gm), "/"))
      return friendlyTimeFormat(d)
    },
  },
}
</script>

<style>
.__businessIndexList__ {
  height: 100vh;
}
</style>
