<template>
  <div class="page-tabbar">
    <div>
      <router-view></router-view>
    </div>
    <div class="navLink">
      <ul>
        <li v-for="(item, index) in navListArr" :key="index">
          <router-link :to="{path: item.path}" active-class="active">
            <span></span> {{item.title}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
	data() {
    return {
      navListArr: [
        {"title": "首页", "path": "tabbar1"},
        {"title": "积分实惠", "path": "tabbar2"},
        {"title": "我的", "path": "tabbar3"}
      ],
    }
  }
}
</script>

<style lang="stylus">
.navLink {
  position fixed
  bottom 0px
  left 0px
  width 100%
  height 48px
  background #fff
  border-top 1px solid #cccccc
  ul {
    overflow hidden
    height 100%
    li {
      float left
      width 33%
      height 100%
      text-align center
      a {
        display block
        background #fff
        width 100%
        height 100%
        color #666666
        font-size 12px
        span {
          width 24px
          height 24px
          margin 5px auto 1px
          display block
        }
      }
    }
    li:nth-child(1) a span {
      background url('../assets/img/menu/menuIcon1.png') no-repeat
      background-size 100%
    }
    li:nth-child(2) a span {
      background url('../assets/img/menu/menuIcon2.png') no-repeat
      background-size 100%
    }
    li:nth-child(3) a span {
      background url('../assets/img/menu/menuIcon3.png') no-repeat
      background-size 100%
    }
    li:nth-child(1) .active span {
      background url('../assets/img/menu/menuIcon1A.png') no-repeat
      background-size 100%
    }
    li:nth-child(2) .active span {
      background url('../assets/img/menu/menuIcon2A.png') no-repeat
      background-size 100%
    }
    li:nth-child(3) .active span {
      background url('../assets/img/menu/menuIcon3A.png') no-repeat
      background-size 100%
    }
  }
}
</style>
