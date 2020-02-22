//引入常量
import {
    SAVE_KINGKONGLIST,
    SAVE_CATEGORY,
    SAVE_CATELISTS
} from './mutations-type'


export default {
    [SAVE_KINGKONGLIST](state, kingKongList){
        state.kingKongList = kingKongList
    },
    [SAVE_CATEGORY](state, category){
        state.category = category
    },
    [SAVE_CATELISTS](state, catelists){
        state.catelists = catelists
    }
}