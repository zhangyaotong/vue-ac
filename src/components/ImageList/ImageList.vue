<template>
  <div id="imageContainer">
    <div class="im1">
      <div class="im10">
        <img src="https://yanxuan-item.nosdn.127.net/901be61b95ed8dfc89947125cbdc603b.png?imageView&thumbnail=168x0&quality=75" alt="">
      </div>
      <img
        src="https://yanxuan.nosdn.127.net/5db28c137605ea7576c986e9c285e1c6.png?quality=75&type=webp&imageView&thumbnail=750x0"
        alt
      />
    </div>
    <div class="im2">
      <img
        src="https://yanxuan.nosdn.127.net/a4187bffa2a0431ec5d6e2dd1070d6c5.gif?imageView&quality=75"
        alt
      />
    </div>
    <div class="im3">
      <img
        src="https://yanxuan.nosdn.127.net/28244c6ae7ef78424ea5317a0d72dd6a.png?quality=75&type=webp&imageView&thumbnail=375x0"
        alt
      />
    </div>
    <div class="im4">
      <img
        src="https://yanxuan.nosdn.127.net/15b56691109bba3adf6156fd44f14073.png?quality=75&type=webp&imageView&thumbnail=375x0"
        alt
      />
    </div>
    <div class="im5">
      <img
        src="https://yanxuan.nosdn.127.net/83b35324b02e31aa202a12971fa7f8c3.png?quality=75&type=webp&imageView&thumbnail=375x0"
        alt
      />
    </div>
    <div class="im6">
      <img
        src="https://yanxuan.nosdn.127.net/2c98b2002572ec4cd0824bc810d7d31f.png?quality=75&type=webp&imageView&thumbnail=375x0"
        alt
      />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {

};
</script>

<style lang="stylus" rel="stylesheet/stylus">

#imageContainer {
  width: 100%;
  background-color: rgb(24, 115, 225);
  float left
  padding-bottom 20px
  .im1 {
    position relative
    .im10{
      position absolute
      left 77px
      top 33px
      background-color rgba(0, 0, 0, 0)
      border-radius 10px
      img{
        width 166px
        height 166px
        
      }
    }
    img {
      width: 750px;
      height: 240px;
      
    }
  }

  .im2 {
    img {
      width: 710px;
      height: 160px;
      margin-left: 20px;
    }
  }

  .im3 {
    img {
      width: 351px;
      height: 186px;
      float: left;
      margin 10px 0 10px 20px
    }
  }

  .im4 {
    img {
      width: 351px;
      height: 186px;
      float: right;
      margin 10px 20px 10px 0
    }
  }

  .im5 {
    img {
      width: 351px;
      height: 186px;
      margin-left: 20px;
      float: left;
    }
  }

  .im6 {
    img {
      width: 351px;
      height: 186px;
      float: right;
      margin-right: 20px;
    }
  }
}
</style>
