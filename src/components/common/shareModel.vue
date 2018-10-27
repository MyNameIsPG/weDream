<template>
  <div>
  </div>
</template>

<script>
	export default {
		name: "shareModel",
    mounted() {
      this.wxData.appId = data.data.data.appId
      this.wxData.nonceStr = data.data.data.nonceStr
      this.wxData.signature = data.data.data.signature
      this.wxData.timestamp = data.data.data.timestamp
      wx.config({
        debug: false,
        appId: data.data.data.appId,
        timestamp: data.data.data.timestamp,
        nonceStr: data.data.data.nonceStr,
        signature: data.data.data.signature,
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
      });

      var obj = {
        title: '1111111', // 分享标题
        link: 'www.baidu.com',
        imgUrl: '../../assets/img/shareLogo.jpg', // 分享图标
        desc: 'miaoshu',
        type: 'link',
      }
      wx.ready(function () {
        // 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
        wx.onMenuShareTimeline(obj);
        // 获取“分享给朋友”按钮点击状态及自定义分享内容接口
        wx.onMenuShareAppMessage(obj);
        // 获取“分享到QQ”按钮点击状态及自定义分享内容接口
        wx.onMenuShareQQ(obj);
        // 获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
        wx.onMenuShareWeibo(obj);
        // 获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
        wx.onMenuShareQZone(obj);
      });
    }
	}
</script>

<style scoped>

</style>
