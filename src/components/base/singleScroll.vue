<template>
  <!--
    @author chendm
    类似公告等原地滚动基础组件
  -->
  <div class="single_scroll">
    <div class="a">
      <div class="noticeBoxText fl scroll-wrap">
        <ul class="scroll-content" :style="{ top }">
          <li v-for="(item,index) in list" :key="index">{{item.title}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * 组件共有以下参数
   * 1. @lsit:  数据源
   */
  export default {
    name: 'singleScroll',
    props: {
      list: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        activeIndex: 0,
      };
    },
    computed: {
      top() {
        /* 0.512rem 是li的高度  */
        return `${-this.activeIndex * 0.512}rem`;
      },
    },
    mounted() {
      this.$nextTick(() => {
        this.interVal = setInterval(() => {
          if (this.activeIndex < this.list.length - 1) {
            this.activeIndex += 1;
          } else {
            this.activeIndex = 0;
          }
        }, 3000);
      });
    },
    beforeDestroy() {
      if (this.interVal) {
        clearInterval(this.interVal);
      }
    },
  };
</script>

<style lang="less" scoped>
  .single_scroll {
    height: 0.853rem;
    background: #fff;
    .a {
      width: 100%;
      height: 100%;
      display: flex;
      padding: 0 0.3rem;
      align-items: center;
    }
    .noticeBoxText {
      width: 86%;
      height: 0.375rem;
      overflow: hidden;
    }
    .scroll-content {
      position: relative;
      transition: top 0.5s;
      li {
        color: #666666;
        font-size: 0.256rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        display: block;
        height: 0.512rem;
        overflow: hidden;
      }
    }
  }
</style>
