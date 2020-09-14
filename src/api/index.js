const api = {
  Sing: "/api/Log/addPointFromSignIn", // 签到的接口
  storeUp: "/api/Goods/createFavorite", // 收藏购买商品
  remove: "/api/Goods/removeFavorite", // 移除收藏
  store: "/api/Goods/getFav", // 获取收藏内容
  HomeSwiper: "/api/Home/getHomeREC", // 首页轮播图
  SwiperList: "/api/Home/getHomeShowGoods", // 首页分类列表
  details: "/api/Goods/GetGoodsInfo", // 详情
  classifyOne: "/api/Goods/getCatsTree", // 分类页面一级分类
  classIfyTwo: "/api/Goods/getCadGoods", // 分类二级分类
  Phone: "/api/Verify/GetPhone", // 验证手机号时候被验证
  UserName: "/api/Verify/LoginName", // 验证用户名
  PhonePsw: "/api/SMSCode/GetCode", // 获取手机验证码
  Hot: "/api/Goods/getSearchHot", //热搜关键词
  addCart: "/api/Cart/addCart", // 添加购物车
  gain: "/api/Cart/getCart", // 获取信息
  Del: "/api/Cart/DeleteCart", // 删除商品
  onSearch: "/api/Goods/getGoods", //搜索内容
  onAll: "/api/Cart/pathCartChecked", // 修改状态
  Order: "/api/Order/getGoodsInfoFromCart", // 添加订单
  addAddress: "/api/UserInfo/addArea", // 添加收货地址
  huoQ: "/api/UserInfo/getArea", //获取地址信息
  DeleAddress: "/api/UserInfo/deleteArea", // 删除用户地址信息
  DA: "/api/Order/getOrderById", // 获取订单
  DinDan: "/api/Order/getOrderInfo", //获取订单信息
  ClickFK: "/api/Order/cretaeOrder", // 付款没有支付
  yu: "/api/Order/payOrder", // 订单余额支付
  mA: "/api/Order/verifyPayPWD", // 密码
  alipay: "/api/Alipay/appWebPay", // 支付宝支付
};

export default api;
