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
export default {
  name: "noticeList",
  props: ["prizeList"],
  data(){
    return {
      activeIndex: 0,
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
  }
}
</script>

<style scoped>

</style>
