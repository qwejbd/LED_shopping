<template>
  <div>
    <van-nav-bar
      title="新增收货地址"
      left-text="返回"
      left-arrow
      @click-left="back"
    />
    <!-- ======================================= -->
    <div class="btn">
      <van-button type="info" block @click="Fast">点击快速选择城市</van-button>
    </div>

    <!-- 收件人 -->
    <van-field v-model="user" label="*收件人" />
    <!-- 输入手机号，调起手机号键盘 -->
    <van-field v-model="tel" type="tel" label="*手机号" />
    <!-- 省份 -->
    <van-field v-model="Provinces" label="*省份" />
    <!-- 地级市 -->
    <van-field v-model="City" label="*地级市" />
    <!-- 市县 -->
    <van-field v-model="County" label="*市县" />
    <!-- 详细地址-->
    <van-field v-model="Details" label="*详细地址" />
    <div class="btn">
      <van-button type="info" block @click="Created">立即创建</van-button>
      <van-button type="primary" block @click="Reset"> 重置</van-button>
    </div>

    <!-- ========================================================= -->

    <!-- <div v-show="isShow"> -->
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <van-area
        title="标题"
        :area-list="areaList"
        @cancel="quxiao"
        @confirm="Qren"
        :columns-placeholder="['请选择', '请选择', '请选择']"
        value
      />
    </van-popup>
    <!-- </div> -->
  </div>
</template>

<script>
import { Address } from "@/api/user.js";
export default {
  data() {
    return {
      show: false,
      user: "",
      tel: "",
      Provinces: "",
      City: "",
      County: "",
      Details: "",
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市",
        },
        city_list: {
          110100: "北京市",
          110200: "县",
          120100: "天津市",
          120200: "县",
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区",
          // ....
        },
      },
    };
  },
  methods: {
    back() {
      window.history.back();
    },
    Fast() {
      this.show = true;
    },
    Qren() {
      this.show = false;
    },
    quxiao() {
      this.show = false;
    },
    Reset() {
      this.user = [];
      this.tel = [];
      this.Provinces = [];
      this.City = [];
      this.County = [];
      this.Details = [];
    },
    Created() {
      if (this.user === "" && this.tel === "") {
        alert("请输入完整后在添加收货地址");
      } else {
        Address({
          Name: this.user,
          Phone: this.tel,
          Province: this.Provinces,
          City: this.City,
          District: this.County,
          Address: this.Details,
        })
          .then((res) => {
            // console.log(res);
            this.$router.push("login");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  width: 90%;
  margin: 0 auto;
}
</style>
