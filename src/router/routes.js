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
        component: Home,
        meta:{
            isShowFooter: true,
            isShowHeader: true
        }
    },
    {
        path: '/class',
        component: Class,
        meta:{
            isShowFooter: true,
            isShowHeader: true
        }
    },
    {
        path: '/money',
        component: Money,
        meta:{
            isShowFooter: true,
            isShowHeader: true
        }
    },
    {
        path: '/shop',
        component: Shop,
        meta:{
            isShowFooter: true,
            isShowHeader: true
        }
    },
    {
        path: '/person',
        component: Person,
        meta:{
            isShowFooter: false,
            isShowHeader: false
        }
    },
    //重定向
    {
        path: '/',
        redirect: '/home'
    }
]