
<template>
  <div id="monContainer">
      <div class="imgContainer">
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-if="navLists.data">
            <li v-for="(nav, index) in navLists.data.navList" :key="index">
              <img :src="nav.picUrl" alt="">
                <span>{{nav.mainTitle}}</span>
                <p>{{nav.viceTitle}}</p>
            </li>
          </div>
        </div>
      </div>
      <!-- 瀑布 -->
      <div class="container-water-fall">
        <waterfall :col='col' :width="width" :gutterWidth="gutterWidth"  :data="topics"  @loadmore="loadmore"  @scroll="scroll" :isTransition="true">
          <template >
            <div class="cell-item" v-for="(item,index) in topics" :key="index">
              <img v-if="item.picUrl" :lazy-src="item.picUrl" alt="加载错误" :src="item.picUrl"  class="itemImg"/>
              <div class="p" >
                {{item.title}}
              </div>
              <div class="bott">
                <div class="cbottoml">
                  <img :src="item.avatar" alt="" class="avt">
                  <span class="name">{{item.nickname}}</span>
                </div>
                <div class="cbottomr">
                  <img class="seeImg" src="data:image/png;base64,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" alt="">
                  <span class="seeText">{{item.readCount}}</span>
                </div>
              </div>
            </div>
          </template>
        </waterfall>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  // 引入轮播图库
  import Swiper from "swiper";
  //样式(只能在这引入)
  import "swiper/css/swiper.min.css";

  import {mapState} from 'vuex'
  import {getnav, getpubu, getljz} from '../../api/index'
  export default {
    data() {
      return {
        width: 170,
        gutterWidth:10,
        topics:[],
        col: 2,
        index: 0,
        isTransition:true
      }
    },
    methods:{
      scroll(scrollData){
      //   console.log(scrollData)
      },
      // switchCol(col){
      //   this.col = col
      //   // console.log(this.col)
      // },
      loadmore(index){
        if(index < 10){
          this.topics = this.topics.concat(this.database.data.result[index].topics)
        }else{
          console.log('没有数据了')
        }
      }
    },

    mounted() {
      new Swiper(".swiper-container", {
        autoplay: true,
        speed: 500,
      })
      this.$store.dispatch("getnavAction")
      this.$store.dispatch("getpubuAction")
      this.$store.dispatch("getljzAction")

      var that = this;
      window.addEventListener('scroll', function(){
				var scr = document.documentElement.scrollTop || document.body.scrollTop; // 向上滚动的那一部分高度
				var clientHeight = document.documentElement.clientHeight; // 屏幕高度也就是当前设备静态下你所看到的视觉高度
				var scrHeight = document.documentElement.scrollHeight || document.body.scrollHeight; // 整个网页的实际高度，兼容Pc端
				if(scr + clientHeight + 10 >= scrHeight){
					// if(_this.isMoreLoad){ //this.isMoreLoad控制滚动是否加载更多
					//     _this.definePageNum = _this.definePageNum + 1; // 加载更多是definePageNum+1
					// }else{
					//     return;
					// }
          let index = that.index++
					that.loadmore(index);
				}
			})
    },
    computed: {
      ...mapState({
        navLists: state => state.nav,
        pubus: state => state.pubu,
        database: state => state.ljz,
      }),
      // itemWidth(){  
      //   return (138*0.5*(document.documentElement.clientWidth/375)) 
      // },
      // gutterWidth(){
      //   return (9*0.5*(document.documentElement.clientWidth/375))  
      // }
    },
    // watch: {
    //   navLists(){
    //     this.$nextTick(() => {
    //       new Swiper(".swiper-container", {
    //         pagination: {
    //           el: '.swiper-pagination',
    //         },
    //         autoplay: true,
    //         speed: 500,
    //         // loop: true
    //       })
    //     })
    //   }
    // }
    // watch:{
		// 	database(newShuju){
		// 		this.topics = newShuju[0].topics
		// 	}
    // }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #monContainer
    width 100%
    // height 10000px
    background-color rgb(238, 238, 238)
    position relative
    .imgContainer
      width 750px
      height 520px
      background-color rgb(205, 171, 112)
      margin-bottom 200px
    .swiper-container
      width 710px
      height 540px
      overflow hidden
      background-color #ffffff
      border-radius 20px
      position absolute
      left 20px
      top 150px
      .swiper-wrapper
        width 710px
        height 540px
        .swiper-slide
          width 200% 
          height 540px
          padding-top 40px
          box-sizing border-box
          display flex
          flex-wrap wrap
          li
            // float left  
            margin 0 auto
            text-align center
            // display inline-block
            img 
              width 120px
              height 120px
              display inline-block
              margin-bottom 5px
            span 
              width 168px
              height 40px
              display block
              line-height 40px
              font-size 28px
            p
              width 168px
              height 30px
              margin-bottom 40px
              font-size 24px
    .container-water-fall
      width 710px
      height 3000px
      margin-left 20px
      .cell-item
        width 335px
        float left
        background #ffffff
        border-radius 20px
        margin 0 20px 20px 0
        img
          width 100%
          border-radius 20px 20px 0 0
        .p
          margin 20px 15px 30px 15px
          font-size 28px
        .bott
          .cbottoml
            float left
            margin 0 0 0 15px 
            text-align center
            line-height 32px
            img 
              width 48px
              border-radius 50%
              vertical-align middle
              margin-right 10px
              display inline-block
            span 
              width 24px
              height 24px
              vertical-align middle
          .cbottomr
            float right
            margin 0 15px 0 0
            line-height 32px
            text-align center
            img 
              width 32px
              vertical-align middle
            span 
              display inline-block
              width 44px
              vertical-align middle
              margin 0 30px 0 10px
 </style>
