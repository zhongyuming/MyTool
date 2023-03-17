import VueRouter from 'vue-router'
import HomeView from '../pages/HomeView';



export default new VueRouter({
    routes: [{
        path: '/homeview',
        component: HomeView
    }]
})