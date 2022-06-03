import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import store from "@/store";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/dotto'
  },
  {
    name: 'index',
    path: '/dotto',
    component: () => import('@/views/MainView.vue')
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/LoginView.vue'),
    meta: { unauthorized: true },
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/error/401.vue'),
    meta: { unauthorized: true },
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/error/404.vue'),
    meta: { unauthorized: true },
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('@/views/MyView.vue'),
  },
  {
    path: '/dotto/board',
    name: 'board',
    component: () => import('@/views/Dotto/DottoBoardView.vue'),
    children: [
      { path: 'index', name: 'dottoBoard', component: () => import('@/components/dotto/DottoComponent.vue') },
      { path: 'post', name: 'dottoPosting', component: () => import('@/components/dotto/DottoPostingComponent.vue') }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

router.beforeEach(async (to, from, next) => {
  try {
    const { meta } = to;
    const { unauthorized } = meta || { unauthorized: true };

    if (unauthorized) return next();

    const token = store.getters['userStore/login'];
    const verified = await store.dispatch('userStore/verify', { token })

    if (verified) {
    return next();
    }
  } catch (e) {
    return next('/401');
  }
})

export default router
