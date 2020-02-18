<template>
  <div id="homeContainer">
    <div class="i">
      <img src="https://yanxuan.nosdn.127.net/3137220cc522a8fbb0b7520637a61469.png?type=webp&imageView&thumbnail=750x0&quality=75" alt="">
    </div>
    <div class="search">
      <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp" alt="">
      <div class="inp">
        <i></i>
        <span>搜索商品, 共20267款好物</span>
      </div>
      <button>登录</button>
    </div>
    <div class="nav">
      <ul>
        <li>
          推荐
        </li>
        <li>
          居家生活
        </li>
        <li>
          服饰鞋包
        </li>
        <li>
          美食酒水
        </li>
        <li>
          个护清洁
        </li>
        <li>
          母婴亲子
        </li>
        <li>
          运动旅行
        </li>
        <li>
          数码家电
        </li>
        <li>
          全球特色
        </li>
      </ul>
    </div>
    <div class="swiper">
      <div>
        <img src="" alt="">
      </div>
      <div>
        <img src="" alt="">
      </div>
      <div>
        <img src="" alt="">
      </div>
    </div>
    <div>
      <span>网易自营品牌</span>
      <span>30天无忧退货</span>
      <span>48小时快速退款</span>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #homeContainer
    width 100%
    .i
      img 
        width 100%
        height 104px
    .search
      display flex
      margin 20px
      
      img 
        width 138px
        height 40px
        vertical-align middle
      .inp 
        display block
        text-align center
        width 442px
        height 56px
        background #eee
        margin 0 20px 0 20px
        border-radius 10px
        line-height 56px
        
        i 
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp)
        span 
          font-size 26px
      button
        vertical-align middle

    .nav
      width 100%
      height 60px
      overflow hidden
      padding-top 20px
      ul
        width 1460px
        height 60px
        display flex
        height 60px
        li
          width 144px
          height 60px
          text-align center
          font-size 26px

</style>
