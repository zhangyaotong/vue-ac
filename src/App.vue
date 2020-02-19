// 项目根组件
<template>
  <div>
      <HeaderImage/>
      <!-- 显示页面内容 -->
      <router-view></router-view>
    <Nav/>
  </div>
</template>

<script type="text/ecmascript-6">
// 全局组件
import HeaderImage from './components/HeaderImage/HeaderImage'
import Nav from "./components/Nav/Nav";
export default {
  name: "app",
  //注册组件
  components: {
    HeaderImage,
    Nav
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
 
</style>
