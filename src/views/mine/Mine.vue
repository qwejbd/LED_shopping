<template>
  <div>
    <!-- 我的页面top -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="top">
        <div class="TopSVC">
          <div class="TopSVCleft">
            <img src="@/assets/img/logo.png" width="100%" />
          </div>
          <div class="TopSVCmiddle">
            <div>柚子小哥哥</div>
            <div>男士</div>
            <div class="TopSVCmiddleDIV">
              <van-icon name="phone-o" />15290473322
            </div>
          </div>

          <div class="TopSVCright">
            <button @click="onClick">
              <span v-show="dao"> 签到</span>
              <span v-show="YI"> 已签到</span>
            </button>
          </div>
        </div>

        <div class="TopSVD">
          <div>
            <div>每天领红包，年卡仅0.12元/天</div>
            <div class="SVDdiv">
              <p>立即开通<van-icon name="arrow" /></p>
            </div>
          </div>
        </div>
      </div>
      <!-- 我的页面content -->
      <div class="content">
        <!-- 第1块 -->
        <div class="contentDIVmn">
          <p>账号余额 <b>10000.00</b> 元</p>
          <p>积分 <b>4</b> 分</p>
        </div>
        <!-- 第2块 -->
        <div class="contentDIVdd">
          <div class="DIVddTOP">
            <h1>我的订单</h1>
            <p>查看全部订单 <van-icon name="arrow" /></p>
          </div>
          <div class="DIVddBOTTOM">
            <div class="DIVddBOTTOMdiv">
              <sub>0</sub>
              <img src="@/assets/img/profile/images/nav-013.png" width="40px" />
              <b>全部</b>
            </div>
            <div class="DIVddBOTTOMdiv">
              <sub>0</sub>
              <img src="@/assets/img/profile/images/nav-001.png" width="40px" />
              <b>待收货</b>
            </div>
            <div class="DIVddBOTTOMdiv">
              <sub>0</sub>
              <img src="@/assets/img/profile/images/nav-002.png" width="40px" />
              <b>待支付</b>
            </div>
            <div class="DIVddBOTTOMdiv">
              <sub>0</sub>
              <img src="@/assets/img/profile/images/nav-003.png" width="40px" />
              <b>待评价</b>
            </div>
          </div>
        </div>
        <!-- 第3块 -->
        <div class="contentDIVgg">
          <img src="@/assets/img/profile/images/ad-001.png" width="100%" />
        </div>

        <!-- 第4块 -->
        <div class="contentDIVcy">
          <h1>常用功能</h1>
          <div class="DIVcyADD">
            <div>
              <img src="@/assets/img/profile/images/nav-006.png" width="40px" />
              <p>收货地址</p>
            </div>
            <div @click="GoCollecto">
              <img src="@/assets/img/common/sc.png" width="40px" />
              <p>我的收藏</p>
            </div>
            <div>
              <img src="@/assets/img/profile/images/nav-006.png" width="40px" />
              <p>浏览记录</p>
            </div>
            <div>
              <img src="@/assets/img/profile/images/nav-012.png" width="40px" />
              <p>设置</p>
            </div>
          </div>
        </div>
      </div>
    </van-pull-refresh>
    <button @click="togo">立即登录</button>
  </div>
</template>
<script>
import { Toast } from "vant";
import { SING } from "@/api/user.js";
export default {
  data() {
    return {
      isLoading: false,
      dao: true,
      YI: false,
    };
  },
  //事件处理器
  methods: {
    togo() {
      this.$router.push("login");
    },
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    // 签到
    onClick() {
      this.dao = false;
      this.YI = true;
      SING()
        .then((res) => {
          console.log(res);
          Toast("已签到");
        })
        .catch((err) => {
          console.log(err);
        });
    },

    GoCollecto() {
      // alert("ddw");
      this.$router.push({
        name: "collecto",
      });
    },
  },
  // 计算属性
  computed: {},
  //侦听器
  watch: {},
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 */

/* top开始 */
.top {
  width: 100%;
  height: 323px;
  background: rgb(2, 115, 255);
  position: relative;
}

/* top上 */
.TopSVC {
  /* width: 100%; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 70px 30px 0;
}
.TopSVCleft {
  flex: 1;
  width: 15%;
  overflow: hidden;
  border-radius: 50%;
}
.TopSVCmiddle {
  flex: 1;
  color: #fff;
  font-size: 35px;
  margin-left: 20px;
}
.TopSVCmiddleDIV {
  display: flex;
}
.TopSVCright {
  flex: 4;
}
.TopSVCright button {
  background: #ff6565;
  color: #fff;
  border: none;
  padding: 30px 35px;
  border-radius: 50px;
  float: right;
}

/* top下 */
.TopSVD {
  box-sizing: border-box;
  width: 90%;
  height: 80px;
  background: #3b4a67;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0px;
  margin: auto;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.TopSVD div {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
}
.SVDdiv p {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 140px;
  line-height: 40px;
  padding: 0px 20px;
  border-radius: 50px;
  background: linear-gradient(90deg, #40e865, #1ebb4e);
}

/* top结束 */

/* content开始 */
.content {
  background: rgb(239, 239, 239);
  width: 100%;
  height: 1350px;
  position: relative;
}

/* 第1块 */
.contentDIVmn {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  margin: auto;

  width: 90%;
  height: 128px;
  margin-top: 30px;
  border-radius: 20px;

  background: #fff;

  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 28px;
}

/* 第2块 */
.contentDIVdd {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  margin: auto;

  width: 90%;
  /* height: 128px; */
  margin-top: 188px;
  border-radius: 20px;

  background: #fff;
  box-sizing: border-box;
}

.DIVddTOP {
  box-sizing: border-box;

  width: 100%;
  padding: 30px 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.DIVddBOTTOM {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 10px 0;
}
.DIVddBOTTOMdiv {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  position: relative;
}
.DIVddBOTTOMdiv sub {
  position: absolute;
  top: 0;
  right: 30px;
  text-align: center;
  line-height: 30px;
  width: 35px;
  height: 35px;
  border-radius: 50px;
  background: #ff6565;
  color: #fff;
}

/*  第3块  */
.contentDIVgg {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  margin: auto;

  width: 90%;
  /* height: 128px; */
  margin-top: 550px;
  border-radius: 20px;

  background: #fff;
  box-sizing: border-box;
  padding: 30px;
}

/*  第4块  */
.contentDIVcy {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  margin: auto;

  width: 90%;
  /* height: 128px; */
  margin-top: 800px;
  border-radius: 20px;

  background: #fff;
  box-sizing: border-box;
  padding: 30px;
}
.contentDIVcy h1 {
  padding: 0 0 30px;
}
.DIVcyADD {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

/* content结束 */
</style>
