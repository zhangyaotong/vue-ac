<template>
  <div id="navContainer">
      <div :class="{active: $route.path === '/home'}" class="footerItem" @click="goPage('/home')">
          <i class="iconfont icon-shouyekongxinjiacu"></i>
          <span>首页</span>
      </div>
      <div :class="{active: $route.path === '/class'}" class="footerItem" @click="goPage('/class')">
          <i class=" iconfont icon-feneli"></i>
          <span>分类</span>
      </div>
      <div :class="{active: $route.path === '/money'}" class="footerItem" @click="goPage('/money')">
          <i class=" iconfont icon-shimozhidemai-copy"></i>
          <span>值得买</span>
      </div>
      <div :class="{active: $route.path === '/shop'}" class="footerItem" @click="goPage('/shop')">
          <i class=" iconfont icon-zhidemai"></i>
          <span>购物车</span>
      </div>
      <div :class="{active: $route.path === '/person'}" class="footerItem" @click="goPage('/person')">
          <i class=" iconfont icon-ren"></i>
          <span>个人</span>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      methods:{
          goPage(path){
              if(this.$route.path === path){
                  return
              }
              this.$router.push(path)
          }
          
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #navContainer
        width 100%
        display flex
        position fixed
        left 0
        bottom 0
        background #fff
        border-top 1px solid #eee
        
        .footerItem
            width 20%
            text-align center
            line-height 1.5
            display flex
            flex-direction column
            &.active
                color red
            .iconfont
                font-size 36px
            span 
                font-size 26px

</style>
