<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
import axiosToken from '@/util/axiosToken'
import axiosTokenGet from '@/util/axiosTokenGet'
import mutipartAxios from '@/util/mutipartAxios'
import { Toast, MessageBox } from 'mint-ui';
export default {
  data(){
    return {

    }
  },
  created() {
    //普通校验
    axiosToken.interceptors.response.use((respone) => {
      var _this = this;
      let source = respone.data;
      if(source.code!=200){
        MessageBox.alert(source.msg, '温馨提示').then(action => {

        });
      }
      return respone
    }, err => {

    })
    //get方法校验
    axiosTokenGet.interceptors.response.use((respone) => {
      var _this = this;
      let source = respone.data;

      return respone
    }, err => {

    })
    //上传校验
    mutipartAxios.interceptors.response.use((respone) => {
      let source = respone.data;
      if(source.code!=200){
        this.$alert(source.msg, '温馨提示',
          { confirmButtonText: '确定', callback: action => { }
          });
      }
      return respone
    }, err => {

    })
  }
};
</script>

<style>
</style>
