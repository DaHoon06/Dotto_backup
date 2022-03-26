import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/dotto'
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    name: 'sign-up',
    path: '/sign-up',
    component: () => import('@/views/RegisterView.vue')
  },
  {
    name: 'index',
    path: '/dotto',
    component: () => import('@/views/MainView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
