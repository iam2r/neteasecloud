import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home';
import Mine from '@/views/Mine';



export enum Pages {
    Home = 'home',
    Mine = 'mine'
}



Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/' + Pages.Home,
        name: Pages.Home,
        component: Home
    },
    {
        path: '/' + Pages.Mine,
        name: Pages.Mine,
        component: Mine
    },
    {
        path: '*',
        redirect: {
            name: Pages.Home
        }
    }

]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
