<template>
  <div id="classContainer">
    <div class="topContainer">
      <div class="in">
        <!-- <i class="iconfont icon-xingtaiduICON_sousuo--"></i> -->
        <span>搜索商品,共21926款好物</span>
      </div>
    </div>
    <div class="contentContainer" v-if="category.categoryL1List">
      <div class="leftContainer">
        <ul class="listLi">
          <li class="lis" v-for="(cate, index) in category.categoryL1List" :key="index" @click="changeNavIndex(index)" :class="{active:newIndex === index}">{{cate.name}}</li>
        </ul>
      </div>
      <DetailList :catelists="catelists" :newIndex="newIndex"/>
      
    </div>
      
  </div>
</template>

<script type="text/ecmascript-6">
  import DetailList from '../../components/DetailList/DetailList'
  //引入滑动插件
  import BScroll from "better-scroll";

  import {mapState} from 'vuex'
  import {getcategory,getcatelists} from '../../api/index'
  export default {
    components:{
      DetailList
    },
    data() {
      return {
        newIndex: 0
      }
    },
    methods:{
      changeNavIndex(index){
        console.log('123')
        this.newIndex = index
      }
    },
    mounted() {
      this.$store.dispatch('getcategoryAction')
      this.$store.dispatch('getcatelistsAction')
      new BScroll(".leftContainer",{
        scrollY: true,
        probeType: 3
      })
     
    },
    computed: {
      ...mapState({
        category: state => state.category,
        catelists: state => state.catelists
      })
    },
    watch: {
      
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #classContainer
    
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
      
      .leftContainer
        width 162px
        height 1120px
        overflow hidden
        border-right 1px solid #eee
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
            padding-top 35px
            &.active
              color #ab2b2b
      
</style>
