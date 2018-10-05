<template>
  <!--
      @Author chendm
      无限滚动的基础组件
      依赖: vue-infinite-scroll
  -->
  <div class="infinite__scroll">
    <!--
      包含3个自定义参数
      v-infinite-scroll  无限滚动触发的函数
      infinite-scroll-disabled  值为true则不会继续加载
      infinite-scroll-distance  触发的间距
    -->
    <div
      v-infinite-scroll="loadMore"
      :infinite-scroll-disabled="busy"
      :infinite-scroll-distance="distance"
    >
      <!-- 自定义插槽 -->
      <slot></slot>

      <!-- 尾部loading插槽 -->
      <slot name="icon">
        <p style="text-align: center" v-show="show" class="__loading__">
          <img src="" alt="">
          加载中....
        </p>
      </slot>
    </div>
  </div>
</template>

<script>
  /**
   * 组件共有以下参数
   * 1. @loading:  下拉触发事件
   * 2. busy:  是否禁用插件
   * 3. distance: 触发加载的间距
   * 4. isOk  是否执行完毕（如果为true，则会监测无限滚动是否充满屏幕，是：则调用loadMore。）
   */

  export default {
    name: 'infiniteScroll',
    data() {
      return {
        show: true,
      };
    },
    props: {
      busy: {
        type: Boolean,
        default: () => false,
      },
      distance: {
        type: Number,
        default: () => 10,
      },
      isOk: {
        type: Boolean,
        default: () => false,
      },
    },
    watch: {
      isOk(val) {
        if (val) {
          // 如果执行完毕
          this.checkHeight();
          this.show = false;
        } else {
          // 没有执行完成
          this.show = true;
        }
      },
    },
    methods: {
      loadMore() {
        if (this.busy) {
          return;
        }
        this.$emit('loading');
      },
      /* 检测高度情况 */
      checkHeight() {
        this.$nextTick(() => {
          const scrollHeight = document.querySelector('.infinite__scroll').clientHeight;
          const bodyHeight = document.body.clientHeight;

          const loadingHeight = document.querySelector('.__loading__').clientHeight;

          if (scrollHeight < bodyHeight - this.distance + loadingHeight) {
            this.loadMore();
          }
        });
      },
    },
  };
</script>

<style lang="stylus" scoped>
p{
  font-size: 0.221rem;
  height: 0.392rem;
}
</style>
