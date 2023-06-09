import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index';
import store from './store';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.prototype.$axios = axios


Vue.config.productionTip = false


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')