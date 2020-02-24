import {
    getkingKongList,
    getcategory,
    getcatelists,
    getnav,
    getpubu,
    getljz
} from '../api/index'

import {    
    SAVE_KINGKONGLIST,
    SAVE_CATEGORY,
    SAVE_CATELISTS,
    SAVE_NAV,
    SAVE_PUBU,
    SAVE_LJA
} from './mutations-type'


export default {
    async getkingKongListAction({commit}){
        let result = await getkingKongList()
        if(result.code === 0){
            commit(SAVE_KINGKONGLIST, result.data)
        }
    },

    async getcategoryAction({commit}){
        let result = await getcategory()
        if(result.code === 0){
            commit(SAVE_CATEGORY, result.data)
        }
    },

    async getcatelistsAction({commit}){
        let result = await getcatelists()
        if(result.code === 0){
            commit(SAVE_CATELISTS, result.data)
        }
    },

    async getnavAction({commit}){
        let result = await getnav()
        if(result.code === 200){
            commit(SAVE_NAV, result.data)
        }
    },

    async getpubuAction({commit}){
        let result = await getpubu()
        if(result.code === 200){
            commit(SAVE_PUBU, result.data)
        }
    },
    async getljzAction({commit}){
        let result = await getljz()
        if(result.code === 200){
            commit(SAVE_LJA, result.data)
        }
    },
}