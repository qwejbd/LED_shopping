<template>
  <div>
    <MinePageTop></MinePageTop>
    <van-tabs type="card" line-height="0px">
      <van-tab title="登录">
        <Login></Login>
      </van-tab>
      <van-tab title="注册">
        <Register></Register>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Login from "@/components/Mine/Login";
import Register from "@/components/Mine/Register";
import MinePageTop from "@/components/Mine/MinePageTop";

export default {
  components: {
    MinePageTop,
    Login,
    Register,
  },
};
</script>
<style lang="scss" scoped></style>
