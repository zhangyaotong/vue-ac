//vuex核心对象

import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

//声明使用插件
Vue.use(Vuex)

//生成store对象
const store = new Vuex.Store({
    //vuex插件
    state,
    mutations,
    actions,
    getters
})

//暴露
export default store