<template>
  <div class="formBox">
    <div class="inputs">
      <span>手机号</span>
      <div>
        <input type="text" placeholder="请输入您的手机号" v-model="userId" >
      </div>
    </div>
    <div class="inputBans">
      <a href="javascript:void(0);" @click="verifyCodeBtn()">获取验证码</a>
      <div>
        <input type="number" placeholder="请输入您收到的验证码" maxlength="6" minlength="6" v-model="mobileCode" >
      </div>
    </div>
    <div class="inputs">
      <span>密&nbsp;&nbsp;码</span>
      <div>
        <input type="password" placeholder="请设置您的密码" v-model="password1" >
      </div>
    </div>
    <div class="inputs">
      <span>密&nbsp;&nbsp;码</span>
      <div>
        <input type="password" placeholder="请确认您的密码" v-model="password2" >
      </div>
    </div>
    <div>
      <button @click="submitForm()">注&nbsp;册</button>
    </div>
  </div>
</template>

<script>
import { Toast, MessageBox } from 'mint-ui';
export default {
  data(){
    return {
      userId: '',
      mobileCode: '',
      password1: '',
      password2: ''
    }
  },
  methods: {
    verifyCodeBtn(){
      if(this.userId==''){
        Toast({
          message: '请输入您的手机号',
          position: 'bottom',
        });
      }else if(this.userId.length!=11){
        Toast({
          message: '请输入正确的手机号',
          position: 'bottom',
        });
      }else {
        let params = {mobile:this.userId,businessType:'REGISTER'};
        verifyCode({params: params}).then(data => {
          if(data.data.status==200){
            MessageBox('温馨提示', '发送成功！');
          }
        })
      }
    },
    userIdVali(val){
      if(val==''){
        Toast({
          message: '请输入您的手机号',
          position: 'bottom',
        });
      }
    },
    password1Vali(val){
      if(val==''){
        Toast({
          message: '请设置您的密码',
          position: 'bottom',
        });
      }
    },
    password2Vali(val){
      if(val==''){
        Toast({
          message: '请确认您的密码',
          position: 'bottom',
        });
      }
    }
  },
  watch: {
    userId(val){
      this.userIdVali(val)
    },
    password1(val){
      this.password1Vali(val)
    },
    password2(val){
      this.password2Vali(val)
    },
  }
}
</script>

<style>

</style>
