// 项目根组件
<template>
  <div>
      <!-- 显示页面内容 -->
      <router-view></router-view>
    <Nav/>
  </div>
</template>

<script type="text/ecmascript-6">
import Nav from "./components/Nav/Nav";
export default {
  name: "app",
  //注册组件
  components: {
    Nav
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
 
</style>
