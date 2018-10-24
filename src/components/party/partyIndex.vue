<template>
	<div class="partyIndex">
    <div class="list">
      <div @click="$router.push({path:'/partyIndexCore'});">
        <a href="javascript:void(0);">
          <div>党</div>
          <p>党员之家</p>
        </a>
      </div>
      <div @click="page()">
        <a href="javascript:void(0);">
          <div>网</div>
          <p>网格支部</p>
        </a>
      </div>
      <div>
        <a href="http://weixin.hxw.gov.cn/redStar/pages/fingerPartySchool/video/videoList.html?canshare=1&datetime=20171128">
          <div>云</div>
          <p>红星云</p>
        </a>
      </div>
      <div>
        <a href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx020d85a0aef80286&redirect_uri=http%3A%2F%2Fbbs1.people.com.cn%2Fwb%2Fdzxx2017H5Auth.action&response_type=code&scope=snsapi_userinfo#wechat_redirect">
          <div>制</div>
          <p>党建制度</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "partyIndex",
    methods: {
      page(){
        alert("正在建设")
      }
    }
	}
</script>

<style scoped>

</style>
