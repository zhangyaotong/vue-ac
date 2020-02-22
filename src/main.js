//入口文件
import Vue from 'vue'
//适配
import 'lib-flexible/flexible'
//mint-ui
import {Button} from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'

//路由器
import router from './router/index'
//vuex
import store from './store/store'

//注册全局组件,固定
Vue.component(Button.name,Button)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
