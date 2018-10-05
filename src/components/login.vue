<template>
  <div class="__login" :style="'height:'+ height.height + ';background: ' + height.background">
    <div class="tab">
      <router-link v-for="(tab,index) in tabsName" :key="index" :class="{active:tab.isActive}" @click="tabsSwitch(index)" :to="{path:tab.path}">{{tab.name}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return {
      height:{
        height:'',
        background: '#fff'
      },
      tabsName: [{
        path: '/login/signIn',
        name: '登录',
        isActive: true
      }, {
        path: '/login/register',
        name: '注册',
        isActive: false
      }],
      active: false
    }
  },
  mounted() {
    let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.height.height = h+'px';
  },
}
</script>

<style lang="stylus">
  .__login {
    .logo {
      width  140px
      margin 0 auto
      display block
      padding 70px 0;
    }
    .tab {
      text-align center
      margin-bottom 20px
      padding-top 20%
      a {
        color #969ca1
        font-size 15px
        display inline-block
        padding-bottom 10px
        width 120px
        border-bottom: 1px solid #ffffff;
      }
      a.router-link-active {
        color #3aaff6
        border-bottom: 1px solid #3aaff6;
      }
    }
    .formBox {
      padding 10px;
      .inputs {
        background #edf4fa;
        height 44px;
        line-height 44px;
        border-radius 5px;
        margin-bottom 10px;
        span {
          width 75px
          height 44px;
          text-align center
          display inline-block
          color #131415
          font-size 15px
          float: left;
          line-height: 44px;
        }
        > div {
          padding-left: 75px;
          input {
            height 44px
            border none
            border-left 1px solid #fff
            background: transparent
            padding-left: 10px
            color: #b0c2cf
            font-size: 15px
            line-height: 44px
          }
        }
      }
      .inputBans {
        background #edf4fa;
        height 44px;
        line-height 44px;
        border-radius 5px;
        margin-bottom 10px;
        overflow: hidden;
        a {
          text-align: center;
          display: inline-block;
          color: #131415;
          font-size: 15px;
          float: right;
          background: #f63a3a;
          padding: 0 10px;
          color: #fff;
          font-size: 12px;
        }
        > div {
          padding-right 80px;
        }
        input {
          height 44px
          border none
          border-left 1px solid #fff
          background: transparent
          padding-left: 10px
          color: #b0c2cf
          font-size: 15px
          line-height: 44px
        }
      }
      button {
        width 100%
        height 44px
        line-height 44px
        text-align center
        background #3aaff6
        border none
        border-radius 5px
        color #ffffff
        font-size 15px
        margin-top 20px
      }
    }
  }
</style>
