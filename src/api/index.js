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