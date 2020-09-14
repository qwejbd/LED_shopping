<template>
  <div>
    <!-- 输入任意文本 -->
    <van-field v-model="user" label="*账号" />
    <van-field v-model="password" type="password" label="*密码" />
    <van-button round type="info" size="large" @click="Login">登录</van-button>
  </div>
</template>

<script>
import qs from "qs";
import md5 from "js-md5";
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations({
      setToken: "setToken",
    }),
    Login() {
      let params = {
        LoginName: this.user,
        LoginPassword: this.password,
        isPassing: "yes",
      };
      params.LoginPassword = md5(params.LoginPassword);
      axios
        .post(
          `http://www.hj0819.top:44369/api/LoginPage/Login`,
          qs.stringify(params)
        )
        .then((res) => {
          // console.log(res);expires
          console.log(res.data.tnToken.expires);
          this.setToken(res.data.tnToken.tokenStr);
          this.$router.push("/home");
        });
    },
  },
  mounted() {},
};
</script>

<style></style>
