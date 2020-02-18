//入口文件
import Vue from 'vue'
//适配
import 'lib-flexible/flexible'
import App from './App.vue'

//路由器
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
