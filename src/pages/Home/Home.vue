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
        <li >
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
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(focus, index) in kingKongLists.focusList" :key="index">
          <img :src="focus.picUrl" alt="">
        </div>
        <!-- <div class="swiper-pagination"></div> -->
      </div>
      
    </div>
    <div class="text" v-for="(policy, index) in kingKongLists.policyDescList" :key="index">
      <span>
        <img :src="policy.icon" alt="">
        {{policy.desc}} 
      </span>
      
    </div>
    <ShopList :kingKongLists="kingKongLists"/>
    <ImageList/>
    <PagesList :kingKongLists="kingKongLists"/>
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


  import {mapState} from 'vuex'
  import {getkingKongList} from '../../api/index'
  export default {
    components:{
      ShopList,
      ImageList,
      PagesList
    },
    mounted(){
      this.$store.dispatch("getkingKongListAction");
      new BScroll(".nav",{
        scrollX: true,
        probeType: 2
      })
    },
    computed: {
      ...mapState({
        kingKongLists: state => state.kingKongList
      })
    },
    watch: {
      kingKongLists(){
        this.$nextTick(() => {
          new Swiper(".swiper-container", {
            pagination: {
              el: '.swiper-pagination',
            },
            autoplay: true,
            // speed: 500,
            loop: true
          })
        })
      }
    }
  }
</script>

