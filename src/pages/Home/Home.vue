<template>
  <div id="homeContainer">
    <!-- <HeaderImages/> -->
    <div class="search">
      <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp" alt="">
      <div class="inp">
        <i></i>
        <span>搜索商品, 共20267款好物</span>
      </div>
      <mt-button size="normal" type="default">登录</mt-button>
    </div>
    <div class="nav">
      <ul class="navContainer">
        <li class="active">
          推荐
        </li>
        <li class="active">
          居家生活
        </li>
        <li class="active">
          服饰鞋包
        </li>
        <li class="active">
          美食酒水
        </li>
        <li class="active">
          个护清洁
        </li>
        <li class="active">
          母婴亲子
        </li>
        <li class="active">
          运动旅行
        </li>
        <li class="active">
          数码家电
        </li>
        <li class="active">
          全球特色
        </li>
      </ul>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <img class="swiper-slide" src="https://yanxuan.nosdn.127.net/f247ad2cb1d02624e72248c91af4a4b2.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        <img class="swiper-slide" src="https://yanxuan.nosdn.127.net/f247ad2cb1d02624e72248c91af4a4b2.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        <img class="swiper-slide" src="https://yanxuan.nosdn.127.net/f247ad2cb1d02624e72248c91af4a4b2.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        <img class="swiper-slide" src="https://yanxuan.nosdn.127.net/f247ad2cb1d02624e72248c91af4a4b2.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        <img class="swiper-slide" src="https://yanxuan.nosdn.127.net/f247ad2cb1d02624e72248c91af4a4b2.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        <img class="swiper-slide" src="https://yanxuan.nosdn.127.net/f247ad2cb1d02624e72248c91af4a4b2.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        <img class="swiper-slide" src="https://yanxuan.nosdn.127.net/f247ad2cb1d02624e72248c91af4a4b2.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
        <img class="swiper-slide" src="https://yanxuan.nosdn.127.net/f247ad2cb1d02624e72248c91af4a4b2.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
      </div>
      
    </div>
    <div class="text">
      <span>网易自营品牌</span>
      <span>30天无忧退货</span>
      <span>48小时快速退款</span>
    </div>
    <ShopList/>
    <ImageList/>
    <PagesList/>
  </div>
</template>

<script type="text/ecmascript-6">
  // import HeaderImages from '../../components/HeaderImage/HeaderImage'
  import ShopList from '../../components/ShopList/ShopList'
  import ImageList from '../../components/ImageList/ImageList'
  import PagesList from '../../components/PagesList/PagesList'
  //引入滑动插件
  import BScroll from "better-scroll";
  // 引入轮播图库
  import Swiper from "swiper";
  //样式(只能在这引入)
  import "swiper/css/swiper.min.css";
  export default {
    components:{
      ShopList,
      ImageList,
      PagesList
    },
    // data(){
    //   return{
       
    //   }
    // },
    mounted(){
      new BScroll(".nav",{
        scrollX: true,
        probeType: 3
      }),
      new Swiper(".swiper-container", {
        autoplay: true,
        speed: 300,
        loop: true
      })
    },
    // computed:{

    // },
    // methods:{
      
    // }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #homeContainer
    width 100%
    
    .search
      display flex
      margin 13px 0 20px 30px
      align-items center
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
        color #666
        i 
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp)
        span 
          font-size 26px
      button
        vertical-align middle
        color red
        background-color #fff
        border 2px solid red
        border-radius 5px

    .nav
      width 100%
      height 48px
      overflow hidden
      padding-top 10px
      .navContainer
        width 1296px
        height 48px
        display flex
        li
          width 144px
          height 47px
          text-align center
          font-size 26px
          &.active
            color red
            border-bottom: 1px solid red
    .swiper-container
      overflow hidden
      width 100%
      height 370px
      .swiper-wrapper
        width 800%
        height 370px
        img 
          height 370px
    .text
      margin 20px 0 10px 0
      span 
        width 33%
        height 32px
        margin-left 1rem
        line-height 32px



</style>
