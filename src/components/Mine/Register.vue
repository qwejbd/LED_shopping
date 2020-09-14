<template>
  <div>
    <div class="wrap">
      <van-field
        v-model="tel"
        type="tel"
        label="手机号"
        required
        placeholder="请输入手机号"
      />
      <van-field v-model="user" label="*用户" />
      <van-field v-model="password" type="password" label="*密码" />
      <van-field
        v-model="sms"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="small" type="primary" @click="Send"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <van-button round type="info" size="large" @click="REG"
        >立即注册</van-button
      >
    </div>
  </div>
</template>

<script>
import qs from "qs";
import md5 from "js-md5";
import axios from "axios";
import { LoginPhone, LoginUser, PhonePwd } from "@/api/user.js";

export default {
  data() {
    return {
      tel: "",
      user: "",
      password: "",
      sms: "",
      msg: "",
    };
  },
  methods: {
    async Send() {
      let PHONE = await LoginPhone({ phone: this.tel });
      let USER = await LoginUser({ LoginName: this.user });
      if (PHONE.code == 200 && USER.code == 404) {
        PhonePwd({
          phone: this.tel,
          codeType: 0,
        })
          .then((res) => {
            console.log(res);
            this.msg = res.msg;
          })
          .catch((err) => {
            console.log(err);
          });
      }
      if (PHONE.code == 204) {
        alert("手机号已占用");
      }
      if (USER.code == 200) {
        alert("用户名已经使用过");
      }
    },
    REG() {
      let num = {
        LoginName: this.user,
        phone: this.tel,
        LoginPassword: this.password,
        isPassing: "yes",
      };
      num.LoginPassword = md5(num.LoginPassword);
      axios
        .post(
          `http://www.hj0819.top:44369/api/LoginPage/AddLogin`,
          qs.stringify(num)
        )
        .then((res) => {
          console.log(res);
        });
      // }
    },
  },
  mounted() {},
  computed: {},
};
</script>

<style lang="scss" scoped></style>
