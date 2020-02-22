<template>
  <div id="listContainer" v-if="kingKongLists.kingKongModule">
      <ul class="content">
          <li class="list" v-for="(item, index) in kingKongLists.kingKongModule.kingKongList" :key="index">
              <img :src="item.picUrl" alt="">
              <span>{{item.text}}</span>
          </li>
          
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    props:{
      kingKongLists:{
        required: true,
        type: Object
      }
    },
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #listContainer
        width 750px
        height 341px
        padding 20px
        box-sizing border-box
        .content
            .list
                width 110px
                height 156px
                float left
                margin 0 16px 0 16px
                color #333333
                text-align center
                img 
                  width 110px
                  height 110px
                  margin-bottom 10px
                
 
</style>
