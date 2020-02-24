//发送请求模块
import ajax from './ajax'

//首页
export const getkingKongList = () => ajax({
    // method: 'get',
    url:'/index'
})

//Nav
export const getcategory = () => ajax({
    url:'/cate'
})

//详情列表
export const getcatelists = () => ajax({
    url:'/cateLists'
})

//值得买
export const getnav = () => ajax({
    url: '/nav'
})

//瀑布流
export const getpubu = () => ajax({
    url: '/pubu'
})

//懒加载
export const getljz = () => ajax({
    url: '/ljz'
})