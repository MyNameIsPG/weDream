<template>
	<div class="__businessIndexList__">
    <div class="businessIndexList">
      <ul>
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
import { noticesQuery } from "src/api/notices/index";
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
    }
  },
  methods: {
    obtain() {
      return new Promise((resolve, reject) => {
        noticesQuery({
          communityId: sessionStorage.getItem("communityId"),
          type: 1,
          pageSize: this.pageSize,
          pageNum: this.pageNum,
          flag: 1,
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
