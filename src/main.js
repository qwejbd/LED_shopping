import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 移动端适配
import "lib-flexible/flexible";

// import Vant from 'vant';
import "vant/lib/index.css";

// 全局引入按需引入UI库 vant
import "@/plugins/vant";

//动画库
// import animate from 'animate.css'

// 引入全局样式
import "@/assets/css/index.scss";

import axios from "axios";
Vue.prototype.axios = axios;

import "./assets/iconfont/iconfont.css";
import moment from "moment/moment";
Vue.filter("moment", function(value, formatString) {
  formatString = formatString || "YYYY-MM-DD HH:mm:ss";
  return moment(value).format(formatString);
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
