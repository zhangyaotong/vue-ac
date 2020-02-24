//引入常量
import {
    SAVE_KINGKONGLIST,
    SAVE_CATEGORY,
    SAVE_CATELISTS,
    SAVE_NAV,
    SAVE_PUBU,
    SAVE_LJA
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
    },
    [SAVE_NAV](state, nav){
        state.nav = nav
    },
    [SAVE_PUBU](state, pubu){
        state.pubu = pubu
    },
    [SAVE_LJA](state, ljz){
        state.ljz = ljz
    }
}