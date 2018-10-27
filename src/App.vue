<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
import { Indicator } from 'mint-ui';
import axiosToken from '@/util/axiosToken'
import axiosTokenGet from '@/util/axiosTokenGet'
import mutipartAxios from '@/util/mutipartAxios'
import { Toast, MessageBox } from 'mint-ui';
export default {
  data(){
    return {

    }
  },
  mounted(){

  },
  created() {
    axiosTokenGet.interceptors.request.use(
      config => {
        if (sessionStorage.getItem('tooken')) {
          config.headers["access-token"] = sessionStorage.getItem('tooken');
        }
        return config;
      },
      err => {
        return Promise.reject(err);
      });
    axiosToken.interceptors.request.use(
      config => {
        if (sessionStorage.getItem('tooken')) {
          config.headers["access-token"] = sessionStorage.getItem('tooken');
        }
        return config;
      },
      err => {
        return Promise.reject(err);
      });
    mutipartAxios.interceptors.request.use(
      config => {
        if (sessionStorage.getItem('tooken')) {
          config.headers["access-token"] = sessionStorage.getItem('tooken');
        }
        return config;
      },
      err => {
        return Promise.reject(err);
      });


    //普通校验
    axiosToken.interceptors.response.use((respone) => {
      let _this = this;
      let source = respone.data;
      if(source.code==2004){
        this.$messagebox({
          title: '温馨提示',
          message: '请先登录该平台？',
          showCancelButton: true,
          confirmButtonText:"去登录",
          cancelButtonText:"再浏览下"
        }).then(action => {
          if(action == 'confirm'){
            _this.$router.push({ path:'/login'})
          }else{
            console.log('否')
          }
        })
      }else if(source.code!=200){
        this.$messagebox({
          title: '温馨提示',
          message: source.msg,
          showCancelButton: true,
          confirmButtonText:"确认",
        }).then(action => {
          if(action == 'confirm'){
            _this.$router.push({ path:'/login'})
          }else{
            console.log('否')
          }
        })
      }
      return respone
    }, err => {

    })
    //get方法校验
    axiosTokenGet.interceptors.request.use((respone) => {
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
