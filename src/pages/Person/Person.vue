<template>
  <div id="personContainer">
      <i @click="goHome()" class="iconfont icon-shouyekongxinjiacu"></i>
      <div class="headerContainer">
        <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
      </div>
      <div class="imgContainer" v-if="isShow === 1">
        <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
        <div class="login_title">
          <a href="javascript:;" class="phone" @click="showPhone()">手机号登录</a>
          <a href="javascript:;" class="mail" @click="showMail()">邮箱账号登录</a>
        </div>
      </div>
      
      <!-- 手机号 -->
      <div class="phone1" @click="showPhone()" v-if="isShow === 2">
        <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
        <div class="container1">
          <input class="in1" type="text" placeholder="请输入手机号" name="phone" maxlength="11">
          <input class="in2" type="text" placeholder="请输入验证码" name="username" maxlength="8">
          <mt-button class="btn1">获取验证码</mt-button>
          <mt-button class="btn2">登录</mt-button>
          <a href="javascript:;" @click="showLogin()">
            <mt-button class="btn3" >其他方式登录 > </mt-button>
          </a>
        </div>
      </div>
      
      <!-- 邮箱 -->
      <div class="mail1" @click="showMail()" v-if="isShow === 3">
        <img src="//yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
        <div class="container2">
          <input class="in3" type="text" placeholder="邮箱账号" name="phone" maxlength="11">
          <input class="in4" type="text" placeholder="密码" name="username" maxlength="8">
          <mt-button class="btn4">忘记密码</mt-button>
          <mt-button class="btn5">登录</mt-button>
          <a href="javascript:;" @click="showLogin()">
            <mt-button class="btn6">其他方式登录 > </mt-button>
          </a>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {
        isShow: 1
      }
    },
    methods: {
      goHome(){
        this.$router.replace('/home')
      },
      showLogin(){
        // console.log(1)
        this.isShow = 1
      },
      showPhone(){
        this.isShow = 2
      },
      showMail(){
        this.isShow = 3
      },
      
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #personContainer
    position relative
    i 
      float left
      font-size 56px
    .headerContainer
      width 750px
      height 87px
      text-align center
      line-height 87px
      img 
        width 166px
        height 54px
        
    .imgContainer
      width 750px
      height 480px
      text-align center
      line-height 480px
      
      img 
        width 268px
        height 90px
      .login_title
        text-align center
        line-height 94px
        font-size 32px
        
        .phone
          margin 0 auto
          display block
          width 670px
          height 94px
          background-color rgb(221, 26, 33)
          margin-bottom 30px
          color white
        .mail
          margin 0 auto
          display block
          width 670px
          height 94px
          border 1px solid #ff0000
          color red
    .phone1
      width 750px
      height 750px
      margin-top 60px
      text-align center
      
      
      img 
        width 268px
        height 90px
        margin-bottom 90px
      .container1
        width 670px
        height 516px
        
        position relative
        margin 0 auto
        .in1
          font-size 30px
          width 100%
          height 90px
          outline none
          border-bottom 1px solid #eee
        .in2
          font-size 30px
          width 100%
          height 90px
          outline none
          margin-top 50px
          border-bottom 1px solid #eee
        .btn1
          width 164px
          height 52px
          border 2px solid #999
          position absolute
          right 20px
          top 160px
        .btn2
          width 100%
          height 91px
          margin-top 90px
          background-color rgb(221, 26, 33)
          color #ffffff
          font-size 30px
        .btn3
          width 100%
          height 91px
          margin-top 90px
          color black
          font-size 30px


    .mail1
      width 750px
      height 750px
      margin-top 60px
      text-align center
        
      img 
        width 268px
        height 90px
        margin-bottom 90px
      .container2
        width 670px
        height 516px
        position relative
        margin 0 auto
        .in3
          font-size 30px
          width 100%
          height 90px
          outline none
          border-bottom 1px solid #eee
        .in4
          font-size 30px
          width 100%
          height 90px
          outline none
          margin-top 50px
          border-bottom 1px solid #eee
        .btn4
          width 164px
          height 52px
          border 2px solid #999
          position absolute
          right 10px
          top 260px
        .btn5
          width 100%
          height 91px
          margin-top 110px
          background-color rgb(221, 26, 33)
          color #ffffff
          font-size 30px
        .btn6
          width 100%
          height 91px
          margin-top 90px
          color black
          font-size 30px

</style>
