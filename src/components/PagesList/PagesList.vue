<template>
  <div id="pagesListContainer" v-if="kingKongLists.categoryHotSellModule">
      <div class="page1">
          <div class="p10">
              新人专享礼
          </div>
          <div class="p11">
              <span>新人专享礼包</span>
              <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
          </div>
          <div class="p12">
              <p>{{kingKongLists.indexActivityModule[0].title}}</p>
              <span>{{kingKongLists.indexActivityModule[0].subTitle}}</span>
              <img :src="kingKongLists.indexActivityModule[0].showPicUrl" alt="">
          </div>
          <div class="p13">
              <p>{{kingKongLists.indexActivityModule[1].title}}</p>
              <span>{{kingKongLists.indexActivityModule[1].tag}}</span>
          </div>
      </div>
      <div class="page2">
          <div class="p20">
              {{kingKongLists.categoryHotSellModule.title}}
          </div>
          <div class="p21">
              <span>{{kingKongLists.categoryHotSellModule.categoryList[0].categoryName}}</span>
              <img :src="kingKongLists.categoryHotSellModule.categoryList[0].showPicUrl" alt="">
          </div>
          <div class="p22">
              <span>{{kingKongLists.categoryHotSellModule.categoryList[1].categoryName}}</span>
              <img :src="kingKongLists.categoryHotSellModule.categoryList[1].showPicUrl" alt="">
          </div>
          <div class="p23">
              <div class="p231">
                <span>{{kingKongLists.categoryHotSellModule.categoryList[2].categoryName}}</span>
                <img :src="kingKongLists.categoryHotSellModule.categoryList[2].showPicUrl" alt="">
              </div>
              <div class="p231">
                <span>{{kingKongLists.categoryHotSellModule.categoryList[3].categoryName}}</span>
                <img :src="kingKongLists.categoryHotSellModule.categoryList[3].showPicUrl" alt="">
              </div>
              <div class="p231">
                <span>{{kingKongLists.categoryHotSellModule.categoryList[4].categoryName}}</span>
                <img :src="kingKongLists.categoryHotSellModule.categoryList[4].showPicUrl" alt="">
              </div>
              <div class="p231" style="margin-right:0">
                <span>{{kingKongLists.categoryHotSellModule.categoryList[5].categoryName}}</span>
                <img :src="kingKongLists.categoryHotSellModule.categoryList[5].showPicUrl" alt="">
              </div>
              <div class="p231">
                <span>{{kingKongLists.categoryHotSellModule.categoryList[6].categoryName}}</span>
                <img :src="kingKongLists.categoryHotSellModule.categoryList[6].showPicUrl" alt="">
              </div>
              <div class="p231">
                <span>{{kingKongLists.categoryHotSellModule.categoryList[7].categoryName}}</span>
                <img :src="kingKongLists.categoryHotSellModule.categoryList[7].showPicUrl" alt="">
              </div>
              <div class="p231">
                <span>{{kingKongLists.categoryHotSellModule.categoryList[8].categoryName}}</span>
                <img :src="kingKongLists.categoryHotSellModule.categoryList[8].showPicUrl" alt="">
              </div>
              <div class="p231" style="margin-right:0">
                <span>{{kingKongLists.categoryHotSellModule.categoryList[9].categoryName}}</span>
                <img :src="kingKongLists.categoryHotSellModule.categoryList[9].showPicUrl" alt="">
              </div>
              
          </div>
      </div>
      <div class="page3">
          <div class="p30">
              <span class="s1">限时购</span>
              <span class="s2">更多> </span>
          </div>
          
          <div class="p31">
              <img src="https://yanxuan-item.nosdn.127.net/7291b03a99a84f9bdfa7560083627efa.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
          </div>
          <div class="p31">
              <img src="https://yanxuan-item.nosdn.127.net/7291b03a99a84f9bdfa7560083627efa.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
          </div>
          <div class="p31" style="margin-right:0">
              <img src="https://yanxuan-item.nosdn.127.net/7291b03a99a84f9bdfa7560083627efa.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
          </div>
          <div class="p31">
              <img src="https://yanxuan-item.nosdn.127.net/7291b03a99a84f9bdfa7560083627efa.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
          </div>
          <div class="p31">
              <img src="https://yanxuan-item.nosdn.127.net/7291b03a99a84f9bdfa7560083627efa.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
          </div>
          <div class="p31" style="margin-right:0">
              <img src="https://yanxuan-item.nosdn.127.net/7291b03a99a84f9bdfa7560083627efa.png?quality=75&type=webp&imageView&thumbnail=216x216" alt="">
          </div>
      </div>
      <div class="page4">
          <div class="p40">
              <span class="s1">新品首发</span>
              <span class="s2">更多></span>
          </div>
          <div class="p41">
              <div class="p411">
                  <img src="https://yanxuan-item.nosdn.127.net/f346d2ec9b751e79e36461fa497f0802.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
                  <p>zxcvbnm</p>
                  <span>298</span>
                  <i>特价</i>
              </div>
          </div>
          <div class="p41">
              <div class="p411">
                  <img src="https://yanxuan-item.nosdn.127.net/f346d2ec9b751e79e36461fa497f0802.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
                  <p>zxcvbnm</p>
                  <span>298</span>
                  <i>特价</i>
              </div>
          </div>
          <div class="p41" style="margin-right:0">
              <div class="p411">
                  <img src="https://yanxuan-item.nosdn.127.net/f346d2ec9b751e79e36461fa497f0802.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
                  <p>zxcvbnm</p>
                  <span>298</span>
                  <i>特价</i>
              </div>
          </div>
          <div class="p41">
              <div class="p411">
                  <img src="https://yanxuan-item.nosdn.127.net/f346d2ec9b751e79e36461fa497f0802.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
                  <p>zxcvbnm</p>
                  <span>298</span>
                  <i>特价</i>
              </div>
          </div>
          <div class="p41">
              <div class="p411">
                  <img src="https://yanxuan-item.nosdn.127.net/f346d2ec9b751e79e36461fa497f0802.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
                  <p>zxcvbnm</p>
                  <span>298</span>
                  <i>特价</i>
              </div>
          </div>
          <div class="p41" style="margin-right:0">
              <div class="p411">
                  <img src="https://yanxuan-item.nosdn.127.net/f346d2ec9b751e79e36461fa497f0802.png?type=webp&imageView&quality=65&thumbnail=330x330" alt="">
                  <p>zxcvbnm</p>
                  <span>298</span>
                  <i>特价</i>
              </div>
          </div>
      </div>
      <div class="page5">
          <div class="p50">
              <span class="s1">断货补单王</span>
              <span class="s2">紧急补仓疯抢中</span>
              <img class="img1" src="https://yanxuan.nosdn.127.net/b143c18172b5433310ff1f2adf281792.png?quality=75&type=webp&imageView&thumbnail=343x264" alt="">
              <img class="img2" src="https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
              <img class="img3" src="https://yanxuan-item.nosdn.127.net/445689c4faa55f8186c500e68bff73d6.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
          </div>
          <div class="p50" style="margin-right:0">
              <span class="s1">断货补单王</span>
              <span class="s2">紧急补仓疯抢中</span>
              <img class="img1" src="https://yanxuan.nosdn.127.net/b143c18172b5433310ff1f2adf281792.png?quality=75&type=webp&imageView&thumbnail=343x264" alt="">
              <img class="img2" src="https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
              <img class="img3" src="https://yanxuan-item.nosdn.127.net/445689c4faa55f8186c500e68bff73d6.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
          </div>
          <div class="p50">
              <span class="s1">断货补单王</span>
              <span class="s2">紧急补仓疯抢中</span>
              <img class="img1" src="https://yanxuan.nosdn.127.net/b143c18172b5433310ff1f2adf281792.png?quality=75&type=webp&imageView&thumbnail=343x264" alt="">
              <img class="img2" src="https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
              <img class="img3" src="https://yanxuan-item.nosdn.127.net/445689c4faa55f8186c500e68bff73d6.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
          </div>
          <div class="p50" style="margin-right:0">
              <span class="s1">断货补单王</span>
              <span class="s2">紧急补仓疯抢中</span>
              <img class="img1" src="https://yanxuan.nosdn.127.net/b143c18172b5433310ff1f2adf281792.png?quality=75&type=webp&imageView&thumbnail=343x264" alt="">
              <img class="img2" src="https://yanxuan-item.nosdn.127.net/5e818e36e0cfd0bb474c57f27e76b46d.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
              <img class="img3" src="https://yanxuan-item.nosdn.127.net/445689c4faa55f8186c500e68bff73d6.png?quality=75&type=webp&imageView&thumbnail=150x150" alt="">
          </div>
          
      </div>
      <div class="page6">
          <div class="p60">
              <span>下载APP</span>
              <div></div>
              <span>电脑版</span>
              <p>网易公司版权所有 © 1997-</p>
              <p style="margin-top:5px">食品经营许可证：JY13301080111719</p>
          </div>
          
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      props:{
          kingKongLists:{
            required: true,
            type: Object
          }
      }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #pagesListContainer
        width 100%
        background-color rgb(238, 238, 238)
        float left
        color #333
        .page1
            width 750px
            height 558px
            margin-top 20px 
            background-color #ffffff
            .p10
                margin 0 auto
                width 160px
                height 90px
                line-height 90px
                font-size 32px
                
            .p11
                display inline-block
                float left
                width 343px
                height 434px
                margin-left 30px
                background-color rgb(249, 233, 207)
                text-align center
                position relative
                
                span 
                    font-size 32px
                    position absolute
                    left 30px
                    top 40px
                img 
                    width 258px
                    height 257px
                    margin-top 120px
            .p12
                width 343px
                height 215px
                float right
                margin-right 30px
                margin-bottom 4px
                background-color rgb(251, 226, 211)
                position relative
                p
                    // display block
                    width 313px
                    height 48px
                    color #333
                    font-size 32px
                    margin 30px 0 0 30px
                span
                    margin 0 0 0 30px
                    color #7f7f7f
                img 
                    position absolute
                    right 0
                    top 15px
                    width 200px
                    height 200px
                    margin-left 143px
            .p13
                width 343px
                height 215px
                float right  
                margin-right 30px
                background-color rgb(255, 236, 194)
                p
                    // display block
                    width 313px
                    height 48px
                    color #333
                    font-size 32px
                    margin 30px 0 0 30px
                span
                    margin 0 0 0 30px
                    color #7f7f7f


        .page2
            width 750px
            height 710px
            margin-top 20px
            background-color #ffffff
            padding 30px
            box-sizing border-box
            .p20
                font-size 32px
                width 160px
                height 41px
                line-height 41px
                margin-bottom 30px
            .p21
                width 340px
                height 200px
                background-color rgb(249, 243, 228)
                float left
                position relative
                span
                    display inline
                    font-size 30px
                    float left
                    margin 80px 0 0 20px
                img 
                    position absolute
                    width 200px
                    height 200px
                    
                    
            .p22
                width 340px
                height 200px
                background-color rgb(235, 239, 246)
                float right
                margin-bottom 10px 
                position relative
                span
                    display inline
                    font-size 30px
                    float left
                    margin 80px 0 0 20px
                img 
                    position absolute
                    width 200px
                    height 200px
            .p23
                width 690px
                height 360px
                
                // float left
                
                display flex
                flex-wrap wrap
                text-align center
                .p231
                    width 165px
                    height 180px
                    background-color rgb(245, 245, 245)
                    margin-right 10px 
                    margin-bottom  10px
                    text-align center
                    box-sizing border-box
                    padding-top 20px
                    span
                        width 165px
                        height 36px
                    img 
                        width 120px
                        height 120px
                        margin 0 auto
                        margin-top 6px

        .page3
            width 750px
            height 700px
            margin-top 20px
            background-color #ffffff
            padding 30px
            box-sizing border-box
            .p30
                width 100%
                height 41px
                .s1
                    float left
                    width 96px
                    height 41px
                    font-size 32px
                .s2
                    float right
                    width 97px
                    height 41px
                    font-size 28px
            .p31
                width 216px
                height 280px
                float left
                margin 20px 20px 10px 0
                img 
                    width 216px
                    height 216px
                    background-color rgb(245, 245, 245)
                    float left

        .page4
            width 750px
            height 922px
            margin-top 20px
            background-color #ffffff
            padding 30px
            box-sizing border-box
            .p40
                width 100%
                height 41px
                
                .s1
                    float left
                    width 128px
                    height 41px
                    font-size 32px
                .s2
                    float right
                    width 97px
                    height 41px
                    font-size 28px
            .p41
                width 216px
                height 381px
                float left
                margin 20px 20px 10px 0
                img 
                    // width 216px
                    height 216px
                    background-color rgb(245, 245, 245)
                    float left
                p
                    color black
                span 
                    display block
                    color red
                i 
                    color red

        .page5
            width 750px
            height 576px
            margin-top 20px
            background-color #ffffff
            padding 30px
            box-sizing border-box
            float left
            .p50
                width 343px
                height 264px
                position relative
                margin 0 4px 5px 0
                float left
                .s1
                    display block
                    font-size 32px
                    position absolute
                    z-index 1
                    margin 30px 0 0 30px
                .s2
                    font-size 24px
                    position absolute
                    z-index 1
                    margin 80px 0 0 30px
                .img1
                    width 343px
                    height 264px
                    position absolute
                    
                .img2
                    width 150px
                    height 150px
                    position absolute
                    left 20px
                    top 100px
                .img3
                    width 150px
                    height 150px
                    position absolute
                    right  20px
                    top 100px
        .page6
            width 750px
            height 350px
            background-color rgb(65, 65, 65)
            margin-top 20px
            float left 
            .p60
                width 750px
                height 244px
                padding-top 60px
                // margin 0 auto 
                text-align center  
                align-items center
                box-sizing border-box  
               
                span 
                    display inline-block
                    width 172px
                    height 62px
                    line-height 62px
                    font-size 26px
                    color #fff  
                    border 1px solid #999
                    // border-radius 4px
                div
                    display inline-block
                    width 50px
                p
                    color #999
                    margin-top 40px
</style>
