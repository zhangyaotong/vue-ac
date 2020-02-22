import {
    getkingKongList,
    getcategory,
    getcatelists
} from '../api/index'

import {    
    SAVE_KINGKONGLIST,
    SAVE_CATEGORY,
    SAVE_CATELISTS
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
    }

}