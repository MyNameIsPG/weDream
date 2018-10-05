<template>
  <div class="noticeList">
    <router-link :to="{ path:'/noticeIndexList' }">
      <div class="scroll-wrap">
        <ul class="scroll-content" :style="{ top }">
          <li v-for="(item,index) in prizeList" :key="index"><span v-if="item.status==1">热门</span>{{item.title}}</li>
        </ul>
      </div>
    </router-link>
    <img class="noticeHead" src="../../../assets/img/noticeHead.png" alt="">
    <img class="noticeAdd" src="../../../assets/img/noticeAdd.png" alt="">
  </div>
</template>

<script>
import { query } from "src/api/notices/index";
export default {
  name: "noticeList",
  data(){
    return {
      prizeList: [],
      activeIndex: 0,
    }
  },
  methods: {
    queryPost(){
      let params = {
        pageNum: 1,
        pageSize: 5,
        communityId: sessionStorage.getItem("communityId"),
        type: 1
      }
      query(params).then(data => {
        if (data.data.code == 200) {
          this.prizeList = data.data.data.list
        }
      })
    }
  },
  computed: {
    top() {
      return - this.activeIndex * 30 + 'px';
    },
  },
  mounted() {
    setInterval(_ => {
      if (this.activeIndex < this.prizeList.length) {
        this.activeIndex += 1;
      } else {
        this.activeIndex = 0;
      }
    }, 3000);
    this.queryPost();
  }
}
</script>

<style scoped>

</style>
