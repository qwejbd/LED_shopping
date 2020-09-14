<template>
  <div>
    <TopHea title="确认支付"></TopHea>
    <!-- ======================================= -->
    <van-divider>
      剩余时间:
      <van-count-down :time="time" />
    </van-divider>
    <!-- ======================================== -->
    <van-cell-group>
      <van-cell v-for="(item, index) in List" :key="index">
        <template #title>
          <img :src="item.img" alt="" width="30px" height="30px" />
          {{ item.name }}
        </template>
        <template #default>
          <input type="radio" name="ckb" @click="onClick(index)" />
        </template>
      </van-cell>
    </van-cell-group>
    <!-- ======================================= -->
    <van-password-input
      :value="value"
      info="密码为 6 位数字"
      :focused="showKeyboard"
      @focus="showKeyboard = true"
    />
    <van-number-keyboard
      :show="showKeyboard"
      @input="onInput"
      @delete="onDelete"
      @blur="showKeyboard = false"
    />

    <!-- ========================================== -->
    <!-- 微信支付接口 -->
    <!-- <div
      id="wechatcode"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    ></div> -->

    <!-- ===================================== -->
    <div class="Footer" @click="FQ">
      确认支付
    </div>
  </div>
</template>

<script>
import qs from "qs";
import md5 from "js-md5";
import { Toast } from "vant";
import QRCode from "qrcodejs2"; // 引入qrcode\
import TopHea from "@/components/TopHea";
import { DAH, YE, MA, FkAlipay } from "@/api/user.js";

export default {
  components: {
    TopHea,
  },
  data() {
    return {
      value: "123456",
      showKeyboard: false,
      time: 30 * 60 * 60 * 1000,
      List: [
        {
          name: "支付",
          img: require("../../assets/img/cart/zhifubao.png"),
        },
        {
          name: "微信",
          img: require("../../assets/img/cart/weixin.png"),
        },
        {
          name: "余额",
          img: require("../../assets/img/cart/yuer.png"),
        },
      ],
    };
  },

  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
      // console.log(this.value)
      // Toast(this.value);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    FQ() {
      // this.showKeyboard = true;
    },

    onClick(index) {
      console.log(index);
      if (index === 0) {
        // alert("支付宝");
        FkAlipay({
          OutTradeNo: this.$route.query.num.orderNumber, //商户订单号，商户网站订单系统中唯一订单号，必填 。需要保证商户端唯一。
          Subject: "手机网站支付测试", //主题
          ProductCode: "QUICK_WAP_WAY",
          body: "支付宝支付", //商品描述，可空
          TotalAmount: 20, //付款金额，必填
        })
          .then((res) => {
            console.log(res);
            if (res.code === 201) {
              //将数据存到vuex中
              // this.$store.dispatch('addAliFrom', res.data.data)
              this.html = res.data;
              var form = res.data;
              const div = document.createElement("div");
              div.innerHTML = form; //此处form就是后台返回接收到的数据
              document.body.appendChild(div);
              document.forms[0].submit();
              //return this.$router.push('/aliPay')
            } else {
              return alert(res.data.msg);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (index === 1) {
        alert("微信支付");
      } else if (index === 2) {
        // alert("余额支付");
        this.showKeyboard = true;
        this.value = md5(this.value);
        MA({
          paypwd: this.value,
        })
          .then((res) => {
            console.log(res);
            YE({
              orderNum: this.$route.query.num.orderNumber,
            })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  mounted() {
    console.log(this.$route.query.num.orderNumber);
  },
};
</script>
<style lang="scss" scoped>
.Footer {
  width: 100%;
  height: 100px;
  background: #009fe9;
  color: white;
  text-align: center;
  line-height: 100px;
  position: fixed;
  bottom: 0;
}
</style>
