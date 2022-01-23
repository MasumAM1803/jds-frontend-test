import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../components/Dialog.vue')
    },
    {
        path: '/list-data',
        name: 'Daftar Data',
        component: () => import('../views/admin/ListData.vue')
    },
    {
        path: '/input-data',
        name: 'Tambah Data',
        component: () => import('../views/InputData.vue')
    },
    {
        path: '/admin',
        redirect: '/login'
    },
    {
        path: '/*',
        redirect: '/'
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router