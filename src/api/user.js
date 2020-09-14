import api from "./index";
import request from "@/utils/request";

// 签到接口
export function SING(data) {
  return request({
    url: api.Sing,
    method: "get",
    data,
    hideloading: false,
  });
}
// 收藏该商品
export function STOREUP(params) {
  return request({
    url: api.storeUp,
    method: "post",
    params,
    hideloading: false,
  });
}
// 移除收藏
export function YiRemove(params) {
  return request({
    url: api.remove,
    method: "patch",
    params,
    hideloading: false,
  });
}
// 获取收藏内容
export function STORE(data) {
  return request({
    url: api.store,
    method: "get",
    data,
    hideloading: false,
  });
}
// 轮播图
export function Swiper(data) {
  return request({
    url: api.HomeSwiper,
    method: "get",
    data,
    hideloading: false,
  });
}
// 首页分类
export function HomeList(params) {
  return request({
    url: api.SwiperList,
    method: "get",
    params,
    hideloading: false,
  });
}
// 首页商品详情
export function HomeDel(params) {
  return request({
    url: api.details,
    method: "get",
    params,
    hideloading: false,
  });
}
// 分类页面一级分类
export function classify(data) {
  return request({
    url: api.classifyOne,
    method: "get",
    data,
    hideloading: false,
  });
}
// 分类页面二级分类
export function classify2(params) {
  return request({
    url: api.classIfyTwo,
    method: "get",
    params,
    hideloading: false,
  });
}
// 验证手机号时候成功
export function LoginPhone(params) {
  return request({
    url: api.Phone,
    method: "get",
    params,
    hideloading: false,
  });
}
// 验证用户名是否可用
export function LoginUser(params) {
  return request({
    url: api.UserName,
    method: "get",
    params,
    hideloading: false,
  });
}
// 获取手机验证码
export function PhonePwd(params) {
  return request({
    url: api.PhonePsw,
    method: "get",
    params,
  });
}
//  热搜关键词
export function SearchHot(params) {
  return request({
    url: api.Hot,
    method: "get",
    params,
    hideloading: false,
  });
}
//  搜索内容
export function onSearch(params) {
  return request({
    url: api.onSearch,
    method: "get",
    params,
    hideloading: false,
  });
}
// 添加购物车
export function addcart(params) {
  return request({
    url: api.addCart,
    method: "post",
    params,
  });
}
// 获取购物车信息
export function GainCart(params) {
  return request({
    url: api.gain,
    method: "get",
    params,
    hideloading: false,
  });
}
// 删除商品
export function DelShop(params) {
  return request({
    url: api.Del,
    method: "patch",
    params,
    hideloading: false,
  });
}
// 修改购物车的状态
export function ALL(params) {
  return request({
    url: api.onAll,
    method: "patch",
    params,
    hideloading: false,
  });
}
// 获取订单信息
export function ORDER(params) {
  return request({
    url: api.Order,
    method: "get",
    params,
    hideloading: false,
  });
}
// 添加收货地址
export function Address(params) {
  return request({
    url: api.addAddress,
    method: "post",
    params,
    hideloading: false,
  });
}
// 获取收货地址信息
export function TrueAddress(data) {
  return request({
    url: api.huoQ,
    method: "get",
    data,
    hideloading: false,
  });
}
// 删除用户地址信息
export function deleAddress(params) {
  return request({
    url: api.DeleAddress,
    method: "patch",
    params,
    hideloading: false,
  });
}
// 获取订单id
export function DAH(params) {
  return request({
    url: api.DA,
    method: "get",
    params,
    hideloading: false,
  });
}
// 获取订单id
export function HDa(data) {
  return request({
    url: api.DinDan,
    method: "get",
    data,
    hideloading: false,
  });
}
// 付款为支付
export function FK(params) {
  return request({
    url: api.ClickFK,
    method: "post",
    params,
    hideloading: false,
  });
}
// 订单余额支付
export function YE(params) {
  return request({
    url: api.yu,
    method: "post",
    params,
    hideloading: false,
  });
}
// 密码
export function MA(params) {
  return request({
    url: api.mA,
    method: "post",
    params,
    hideloading: false,
  });
}
//支付宝支付
export function FkAlipay(params) {
  return request({
    url: api.alipay,
    method: "post",
    params,
    hideloading: false,
  });
}
// ===============================================================
