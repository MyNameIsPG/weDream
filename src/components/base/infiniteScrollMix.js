/**
 * @Author chendm
 * 混合无限滚动组件
 * 1.被混合组件只需要写obtain方法获取数据就可以实现无限滚动
 * 2.obtain方法必须返回promise,obtain可用参数有pageSize,pageNum
 * 3.被混合组件在data作用域可以重写参数
 */
export default {
  data() {
    return {
      list: [],
      pageSize: 20,
      pageNum: 0,
      busy: false,
      isOk: false,
    };
  },
  beforeDestroy() {
    if (this.timeer) {
      clearTimeout(this.timeer);
    }
  },
  methods: {
    loadBottom() {
      // if (this.datePoint && new Date().getTime() - this.datePoint <= 1000) {
      //   /* 接口调用间隔必须在1s以上 */
      //   console.error('[wxapp:warn]: Interfaces do not allow frequent calls..');
      //   return;
      // }
      /* 定一个时间戳点 */
      this.datePoint = new Date().getTime();
      /* eslint: 不能使用this.pageNum++ */
      this.isOk = false;
      this.pageNum += 1;
      this.obtain().then((res) => {
        if (this.pageNum >= res.data.data.pages) {
          this.busy = true;
        }
        this.timeer = setTimeout(() => {
          this.list = this.list.concat(res.data.data.list);
          this.isOk = true;
        }, 500);
      });
    },
  },
};
