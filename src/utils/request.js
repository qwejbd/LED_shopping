import axios from "axios";
import store from "@/store/index";
import { Toast } from "vant";
// import from "../store/index"
// 根据环境不同引入不同api地址
// import { baseApi } from '@/config'
// const { baseApi } = require("../config/env." + process.env.NODE_ENV);
const baseApi = "http://www.hj0819.top:44369";
// create an axios instance
const service = axios.create({
  baseURL: baseApi, // url = base api url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  // timeout: 5000, // request timeout
});

// request拦截器 request interceptor
service.interceptors.request.use(
  (config) => {
    // 不传递默认开启loading
    if (!config.hideloading) {
      // loading
      Toast.loading({
        forbidClick: true,
      });
    }
    // config.headers.token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbklEIjoiMSIsIm5iZiI6MTU5OTE5OTY3OSwiZXhwIjoxNTk5MjEwNDc5LCJpc3MiOiJPY3RvYmVyIiwiYXVkIjoiU2hvcEFwcF9BUEkifQ.gqwYN9YavlNVS3OxzOXuyPgMrYdMNRiIEjQABDId3xc";
    if (store.state.token) {
      config.headers.token = store.state.token;
    }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);
// respone拦截器
service.interceptors.response.use(
  (response) => {
    Toast.clear();
    const res = response.data;
    if (res.status && res.status !== 200) {
      // 登录超时,重新登录
      if (res.status === 401) {
        store.dispatch("FedLogOut").then(() => {
          location.reload();
        });
      }
      return Promise.reject(res || "error");
    } else {
      return Promise.resolve(res);
    }
  },
  (error) => {
    Toast.clear();
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
