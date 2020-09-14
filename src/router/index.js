import Vue from "vue";
import VueRouter from "vue-router";
// import vuex from "vuex";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/layouts/index"),
    redirect: "/home",
    meta: {
      title: "首页",
      keepAlive: false,
    },
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/home/Home.vue"),
        meta: { title: "首页", keepAlive: false },
      },

      {
        path: "/classify",
        name: "Classify",
        component: () => import("@/views/classify/Classify.vue"),
        meta: { title: "商城", keepAlive: false },
      },
      {
        path: "/cart",
        name: "Cart",
        component: () => import("@/views/cart/Cart.vue"),
        meta: { title: "购物车", keepAlive: false },
      },
      {
        path: "/mine",
        name: "Mine",
        // redirect: "/login",
        component: () => import("@/views/mine/Mine.vue"),
        meta: { title: "我的", keepAlive: false },
      },
    ],
  },
  {
    path: "/details",
    name: "details",
    component: () => import("@/views/home/Details.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("@/views/classify/Search.vue"),
  },
  {
    path: "/searchConent",
    name: "searchConent",
    component: () => import("@/components/Search/SearchConent.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/mine/Login.vue"),
  },
  {
    path: "/order",
    name: "order",
    component: () => import("@/views/cart/Order.vue"),
  },
  {
    path: "/site",
    name: "site",
    component: () => import("@/views/home/Site.vue"),
  },
  {
    path: "/nextSite",
    name: "nextSite",
    component: () => import("@/views/cart/NextSite.vue"),
  },
  {
    path: "/defray",
    name: "defray",
    component: () => import("@/views/cart/Defray.vue"),
  },
  {
    path: "/collecto",
    name: "collecto",
    component: () => import("@/views/mine/Collecto.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});
router.beforeEach((to, from, next) => {
  // to 将要前往哪个路由
  // form 从哪个路由来的
  // next() 放行函数 nxet('路径') 强制跳转到的位置
  if (to.path === "/login") return next();
  // 获取客户端的token
  let token = window.localStorage.getItem("vuex");
  if (!token) return next("/login");
  // 放行
  next();
});
export default router;
