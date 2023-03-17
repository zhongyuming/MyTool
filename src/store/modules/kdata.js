import {get } from '../../utils/request.js'
export default {
    state: {
        kdata: []
    },
    getters: {
        kdata(state) {
            return state.kdata
        }
    },
    actions: {
        fetchKdata({ commit }) {
            return get('kdata.php').then(res => {
                commit('setKdata', res)
                return res;
            })
        }
    },
    mutations: {
        setKdata(state, kdata) {
            state.kdata = kdata
        }
    }
}