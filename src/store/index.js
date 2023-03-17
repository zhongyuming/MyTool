import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

import classify from './modules/classify.js'
import kdata from "./modules/kdata.js"

export default new Vuex.Store({
    modules: {
        classify,
        kdata
    }
})