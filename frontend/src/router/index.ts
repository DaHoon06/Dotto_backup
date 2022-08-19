import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/dotto",
    meta: { unauthorized: true },
  },
  {
    name: "index",
    path: "/dotto",
    component: () => import("@/views/MainView.vue"),
    meta: { unauthorized: true },
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/LoginView.vue"),
    meta: { unauthorized: true },
  },
  {
    path: "/401",
    name: "401",
    component: () => import("@/views/error/401.vue"),
    meta: { unauthorized: true },
  },
  {
    path: "*",
    name: "404",
    component: () => import("@/views/error/404.vue"),
    meta: { unauthorized: true },
  },
  {
    path: "/my",
    name: "my",
    component: () => import("@/views/MyView.vue"),
    meta: { unauthorized: true },
  },
  {
    path: "/dotto/board",
    name: "board",
    component: () => import("@/views/dotto/DottoBoardView.vue"),
    children: [
      {
        path: "index",
        name: "dottoBoard",
        component: () => import("@/components/dotto/DottoContainer.vue"),
        meta: { unauthorized: true },
      },
      {
        path: "post",
        name: "dottoPosting",
        component: () => import("@/components/dotto/DottoPosting.vue"),
        meta: { unauthorized: true },
      },
      {
        path: "view/:postNo",
        name: "dottoView",
        component: () => import("@/components/dotto/DottoDetail.vue"),
        meta: { unauthorized: true },
      },
    ],
  },
  {
    path: "/estimate/:postNo",
    name: "estimateSheet",
    component: () => import("@/views/dotto/EstimateView.vue"),
    meta: { unauthorized: true },
  },
  {
    path: "/dotto/feed",
    name: "feed",
    component: () => import("@/views/feed/FeedView.vue"),
    children: [
      {
        path: "index",
        name: "feed",
        component: () => import("@/components/feed/FeedComponent.vue"),
        meta: { unauthorized: true },
      },
      {
        path: "post",
        name: "post",
        component: () => import("@/components/feed/FeedPosting.vue"),
        meta: { unauthorized: true },
      },
    ],
  },
  {
    path: "/search/result",
    name: "result",
    component: () => import("@/views/search/SearchResultView.vue"),
    meta: { unauthorized: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

router.beforeEach(async (to, from, next) => {
  try {
    const { meta } = to;
    const { unauthorized } = meta || { unauthorized: true };
    if (unauthorized) return next();

    const token = store.getters["userStore/login"];
    const verified = await store.dispatch("userStore/verify", { token });
    if (verified) return next();
  } catch (e) {
    return next("/401");
  }
});

export default router;
