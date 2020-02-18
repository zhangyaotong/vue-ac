//注册路由组件

//
import Home from '../pages/Home/Home.vue'
import Class from '../pages/Class/Class.vue'
import Money from '../pages/Money/Money.vue'
import Shop from '../pages/Shop/Shop.vue'
import Person from '../pages/Person/Person.vue'

export default [
   

    //一级路由
    {
        path: '/home',
        component: Home
    },
    {
        path: '/class',
        component: Class
    },
    {
        path: '/money',
        component: Money
    },
    {
        path: '/shop',
        component: Shop
    },
    {
        path: '/person',
        component: Person
    },
    //重定向
    {
        path: '/',
        redirect: '/home'
    }
]