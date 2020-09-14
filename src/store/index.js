import Vue from "vue";
import Vuex from "vuex";
// import getters from "./getters";
import app from "./modules/app";
import swiper from "./Home/swiper";
import homeList from "./Home/HomeList";
import Del from "./Home/Del";
import oneNav from "./Classify/oneNav";
import TwoNav from "./Classify/TwoNav";
//vuex数据持久化 （借助本地缓存做的持久化 sesssionStorage,localStorage）
import createPersistedState from "vuex-persistedstate";
import Cart from "./addCart/Cart";
import Hot from "./Search/Search";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: "",
    dz: [],
  },
  mutations: {
    setToken(state, val) {
      state.token = val;
    },
    DIZHI(state, list) {
      state.dz = list;
    },
  },
  actions: {
    DIZHI(context, list) {
      context.commit("DIZHI", list);
    },
  },
  modules: {
    app,
    swiper,
    homeList,
    Del,
    oneNav,
    TwoNav,
    Hot,
    Cart,
  },
  plugins: [
    createPersistedState({
      storage: window.localStorage,
    }),
  ],
  // getters,
});

export default store;
