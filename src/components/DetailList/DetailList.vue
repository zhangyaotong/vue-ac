<template>
  <div id="rightContainer">
    <div class="imgs">
        <img src="https://yanxuan.nosdn.127.net/868844d3288f130c1aa808312dbbd1d8.png?quality=75&type=webp&imageView&thumbnail=0x196" alt="">
    </div>
    <div class="detail" v-if="catelists[newIndex]">
        <div class="detail-s"  v-for="(imgss, index) in list" :key="index">
            <img :src="imgss.wapBannerUrl" alt="">
            <span>{{imgss.name}}</span>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      data() {
          return {
              // deIndex: 0,
              list: []
          }
      },
      props:{
          catelists:{
            required: true,
            type: Array
          },
          newIndex:{
            required: true,
            type: Number
          }
      },
      watch: {
        newIndex(deIndex){
          this.list = this.catelists[deIndex].categoryList || this.catelists[deIndex].subCateList
        }
      },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #rightContainer
        width 588px
        height 1120px
        padding 30px
        box-sizing border-box
        .imgs
            img 
                width 528px
                height 192px
        .detail
            width 528px
            display flex
            flex-wrap wrap
            .detail-s
                width 144px
                height 216px
                text-align center
                margin 30px 32px 0 0
                img 
                    width 144px
                    height 144px
                span 
                    color #333
                    width 144px
                    height 72px
</style>        

