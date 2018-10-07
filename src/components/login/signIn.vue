<template>
  <div class="formBox">
    <div class="inputs">
      <span>手机号</span>
      <div>
        <input type="number" placeholder="请输入您的手机号" v-model="userName" >
      </div>
    </div>
    <div class="inputs">
      <span>密&nbsp;&nbsp;码</span>
      <div>
        <input type="password" placeholder="请输入您的密码" v-model="passWord" >
      </div>
    </div>
    <div>
      <button @click="submitForm()">登&nbsp;陆</button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { wxlogin } from "src/api/login/index";
export default {
  data(){
    return {
      userName: '',
      passWord: '',
    }
  },
  mounted() {

  },
  methods: {
    submitForm() {
      if(this.userName==''){
        Toast({
          message: '请输入您的手机号',
          position: 'bottom',
        });
        return false
      }else if(this.passWord==''){
        Toast({
          message: '请输入您的密码',
          position: 'bottom',
        });
        return false
      }else{
        let params = {
          mobile:this.userName,
          password:this.passWord,
          loginType: 4
        };
        wxlogin(params).then(response => {
          if (response.data.code == 200) {
            setTimeout(() => {
              sessionStorage.setItem("userData", JSON.stringify(response.data.data));
              sessionStorage.setItem("communityId", response.data.data.communityId);
              sessionStorage.setItem("createId", response.data.data.uuid);
              this.$router.push({ path: '/index' });
            }, 1000);
          }
        })
      }
    },
    userNameVali(val){
      if(val==''){
        Toast({
          message: '请输入您的手机号',
          position: 'bottom',
        });
      }
    },
    passWordVali(val){
      if(val==''){
        Toast({
          message: '请输入您的密码',
          position: 'bottom',
        });
      }
    }
  },
  watch: {
    userName(val){
      this.userNameVali(val)
    },
    passWord(val){
      this.passWordVali(val)
    }
  }
}
</script>

<style>

</style>
