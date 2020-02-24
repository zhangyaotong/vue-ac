<template>
  <div id="classContainer">
    <div class="topContainer">
      <div class="in">
        <!-- <i class="iconfont icon-xingtaiduICON_sousuo--"></i> -->
        <span>搜索商品,共21926款好物</span>
      </div>
    </div>
    <div class="contentContainer">
      <!-- 左侧 -->
      <div class="leftContainer">
        <ul class="listLi">
          <li class="lis" v-for="(cate, index) in category.categoryL1List" :key="index" 
            @click="changeNav(index)" 
            :class="{active:newIndex === index}">
            {{cate.name}}
          </li>
        </ul>
        <!-- cate.id -->
      </div>
      <!-- 右侧 -->
      <div class="rightContainer" v-if="catelists[newIndex]">
        <img src="https://yanxuan.nosdn.127.net/868844d3288f130c1aa808312dbbd1d8.png?quality=75&type=webp&imageView&thumbnail=0x196" alt="">
        <div class="detail">
          <div class="detail-s" v-for="(cates, index) in catelists[newIndex].categoryList" :key="index">
            <img :src="cates.bannerUrl" alt="">
            <span>{{cates.name}}</span>
          </div>
        </div>

        <div class="detail">
          <div class="detail-s" v-for="(cates, index) in catelists[newIndex].subCateList" :key="index">
            <img :src="cates.wapBannerUrl" alt="">
            <span>{{cates.name}}</span>
          </div>
        </div>
      </div>
      
    </div>
      
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import {getcategory,getcatelists} from '../../api/index'
    //引入滑动插件
  import BScroll from "better-scroll";
  export default {
    components:{
    },
    data() {
      return {
        newIndex: 0,
        catelist: [],
        // cateObj: {}
      }
    },
    computed: {
      ...mapState({
        category: state => state.category,
        catelists: state => state.catelists
      }),
      
    },
    mounted() {
      // new BScroll(".leftContainer",{
      //   scrollY: true,
      //   // probeType: 3
      // })
      this.$store.dispatch('getcategoryAction')
      this.$store.dispatch('getcatelistsAction')

    },
    
    methods:{
      changeNav(index){
        this.newIndex = index
      },
    },
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #classContainer
    width 100%
    height 100%
    
    .topContainer
      width 690px
      height 56px
      background-color rgb(237, 237, 237)
      border-radius 10px
      margin 0 auto 
      margin-top 10px
      margin-bottom 15px
      text-align center
      line-height 56px
      span 
        color #666
        font-size 28px
    .contentContainer
      width 750px
      height 1133px
      border-top 1px solid #eee
      display flex
      // overflow hidden
      .leftContainer
        width 162px
        height 1120px
        overflow hidden
        border-right 1px solid #eee
        // overflow auto
        .listLi
          width 162px
          height 1148px
          .lis
            width 162px
            height 50px
            line-height 50px
            text-align center
            color #333
            font-size 28px
            padding-top 17px
            padding-bottom 17px
            &.active
              color #ab2b2b
      .rightContainer
        width 588px
        padding 30px
        box-sizing border-box
        overflow auto
        img 
          width 528px
          height 192px
        .detail
          width 528px
          .detail-s
            width 144px
            height 216px
            display inline-block
            text-align center
            vertical-align middle
            margin 30px 32px 0 0
            img 
              width 144px
              height 144px
              vertical-align middle
            span 
              color #333
              width 144px
              height 72px
              vertical-align middle
</style>
