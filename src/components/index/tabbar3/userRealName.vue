<template>
  <div class="circleIndexAdd">
    <div class="title">请填写相关资料进行身份认证</div>
    <mt-field label="姓名" placeholder="请输入真实姓名" v-model="from.truename"></mt-field>
    <mt-cell title="性别">
      <span class="dataClass" @click="actionSex">{{from.sex}}</span>
    </mt-cell>
    <mt-field label="手机号码" placeholder="请输入手机号码" v-model="from.mobile" @keyup="mobileCode()"></mt-field>
    <mt-cell title="是否党员">
      <span class="dataClass" @click="actionRole">{{from.role}}</span>
    </mt-cell>
    <mt-field label="地址" placeholder="请输入地址" v-model="from.address"></mt-field>
    <mt-field label="验证码" v-model="from.code">
      <span class="codeImg" @click="codeInfo()">{{content}}</span>
    </mt-field>
    <div class="addBtn">
      <a href="javascript: void(0);" @click="add()">修改</a>
    </div>
    <!-- 性别 -->
    <mt-actionsheet
      :actions="sexData"
      v-model="sexVisible"
      cancelText="">
    </mt-actionsheet>
    <!-- 党员 -->
    <mt-actionsheet
      :actions="roleData"
      v-model="roleVisible">
    </mt-actionsheet>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { verify } from "src/api/user/index";
import { update } from "src/api/user/index";
import { queryOne } from "src/api/user/index";
export default {
  name: "userRealName",
  data(){
    return {
      sexVisible: false,//性别
      roleVisible: false,//是否党员
      sexData: [{
        name: '男',
        method : this.getCamera	// 调用methods中的函数
      }, {
        name: '女',
        method : this.getLibrary	// 调用methods中的函数
      }],
      roleData: [{
        name: '居民群众',
        method : this.role1	// 调用methods中的函数
      }, {
        name: '直管党员',
        method : this.role2	// 调用methods中的函数
      }, {
        name: '在职党员',
        method : this.role3	// 调用methods中的函数
      }, {
        name: '退休党员',
        method : this.role4	// 调用methods中的函数
      }],
      from: {
        uuid: '',
        truename: '',
        sex: '男',
        mobile: '',
        role: '居民群众',
        address: '',
        code: '',
        idCard: ''
      },
      content: '发送验证码',
      totalTime: 60,
      canClick: true
    }
  },
  mounted(){
    this.queryOnePost();
  },
  watch: {
    mobileCode(obj){
      alert(obj)
    }
  },
  methods: {
    //发送短信
    codeInfo(){
      if (!this.canClick) {
        return
      }else {
        this.canClick = false
        this.content = this.totalTime + 's后重新发送'
        this.codePost();
        let clock = window.setInterval(() => {
          this.totalTime--
          this.content = this.totalTime + 's后重新发送'
          if (this.totalTime < 0) {
            window.clearInterval(clock)
            this.content = '重新发送验证码'
            this.totalTime = 60
            this.canClick = true  //这里重新开启
          }
        },1000)
      }
    },
    codePost(){
      let params = {
        mobile: this.from.mobile
      }
      verify(params).then(data => {
        if (data.data.code == 200) {
          //this.from.code = data.data.data
          let instance = Toast('发送成功！');
          setTimeout(() => {
            instance.close();
          }, 1000);
        }
      })
    },
    queryOnePost(){
      let params = {
        peopleId: sessionStorage.getItem("createId")
      }
      queryOne(params).then(data => {
        if (data.data.code == 200) {
          let sex = '';
          if(data.data.data.sex==1){
            sex = '男'
          }else if(data.data.data.sex==2) {
            sex = '女'
          }else {
            sex = '男'
          }
          let role = '';
          if(data.data.data.role==1){
            role = '居民群众'
          }else if(data.data.data.role==2){
            role = '直管党员'
          }else if(data.data.data.role==3){
            role = '在职党员'
          }else if(data.data.data.role==4){
            role = '退休党员'
          }
          this.from.uuid = data.data.data.uuid
          this.from.sex = sex
          this.from.role = role
          this.from.idCard = data.data.data.idCard
          this.from.mobile = data.data.data.mobile
          this.from.truename = data.data.data.truename
          this.from.address = data.data.data.address
        }
      })
    },
    //修改按钮事件
    add(){
      if(this.from.truename==''){
        Toast({
          message: '请输入真实姓名',
          position: 'bottom',
        });
      }else if(this.from.mobile==''){
        Toast({
          message: '请输入手机号码',
          position: 'bottom',
        });
      }else if(this.from.mobile.length!=11){
        Toast({
          message: '请输入正确的手机号码',
          position: 'bottom',
        });
      }else if(this.from.code.length!=6){
        Toast({
          message: '请输入验证码',
          position: 'bottom',
        });
      }else {
        let sex = '';
        if(this.from.sex=='男'){
          sex = 1
        }else if(this.from.sex=='女') {
          sex = 2
        }
        let role = '';
        if(this.from.role=='居民群众'){
          role = 1
        }else if(this.from.role=='直管党员'){
          role = 2
        }else if(this.from.role=='在职党员'){
          role = 3
        }else if(this.from.role=='退休党员'){
          role = 4
        }
        let params = {
          uuid: this.from.uuid,
          truename: this.from.truename,
          sex: sex,
          mobile: this.from.mobile,
          role: role,
          address: this.from.address,
          code: this.from.code,
          idCard: this.from.idCard
        }
        let that = this;
        update(params).then(data => {
          if(data.data.code == 200) {
            let instance = Toast('修改成功');
            sessionStorage.setItem("mobile",that.from.mobile);
            setTimeout(() => {
              instance.close();
              window.location.reload()
            }, 1000);
          }
        })
      }
    },
    //打开性别弹窗
    actionSex(){
      this.sexVisible = true;
    },
    //打开党员弹窗
    actionRole(){
      this.roleVisible = true;
    },
    //男
    getCamera(){
      this.from.sex = "男"
    },
    //女
    getLibrary(){
      this.from.sex = "女"
    },
    //不是党员
    role1(){
      this.from.role = "居民群众"
    },
    //直管党员
    role2(){
      this.from.role = "直管党员"
    },
    //在职党员
    role3(){
      this.from.role = "在职党员"
    },
    //退休党员
    role4(){
      this.from.role = "退休党员"
    },
  }
}
</script>

<style lang="stylus">
.mint-cell-title {
  -webkit-box-flex: none !important;
  -ms-flex: none !important;
  flex: none !important;
  width: 105px;
}
.mint-cell-value {
  flex 1;
  .dataClass {
    display block;
    color: #000;
    flex: 1;
    outline: 0;
    line-height: 1.6;
    font-size: inherit;
    width: 100%;
  }
}
.codeImg {
  height: 48px;
  background: red;
  text-align: center;
  color: rgb(255, 255, 255);
  font-size: 14px;
  line-height: 48px;
  display: inline-block;
  width 120px
}
</style>
