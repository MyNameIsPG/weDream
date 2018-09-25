<template>
  <div class="__noticeList">
    <router-link :to="{path:'/noticeList'}">
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
export default {
  name: "noticeList",
  data(){
    return {
      prizeList: [
        {title:'这里是社区历史公告的展示列。这里是社区历史公告的展示列。',status: '1'},
        {title:'这里是社区历史公告的展示列表页展示列表页。',status: '0'},
        {title:'这里是社区历史公告的展示列表页展示列。',status: '0'},
        {title:'这里是社区历史公告的展示列表页展示列表页。',status: '0'},
      ],
      activeIndex: 0,
    }
  },
  computed: {
    top() {
      return - this.activeIndex * 30 + 'px';
    }
  },
  mounted() {
    setInterval(_ => {
      if (this.activeIndex < this.prizeList.length) {
        this.activeIndex += 1;
      } else {
        this.activeIndex = 0;
      }
    }, 3000);
  }
}
</script>

<style scoped>

</style>
