<template>
  <div>
    <div class="top">
      <van-swipe-cell v-for="(item, index) in text" :key="index">
        <van-card
           num="2"
          :price="item.price"
          :title="item.title"
           class="goods-card"
          :thumb="item.image"
        >
          <template #tag>
            <input type="checkbox" @click="ClickAll(item.cart_id)" />
          </template>
          <template #num>
            <span>2</span>
            <van-stepper v-model="num" v-show="isShow" />
          </template>
        </van-card>
        <template #right>
          <van-button
            square
            text="删除"
            type="danger"
            @click="dele(item.cart_id)"
            class="delete-button"
          />
        </template>
      </van-swipe-cell>
      <van-submit-bar
        :price="price"
        class="op"
        button-text="提交订单"
        @submit="onSubmit"
      >
        <input type="checkbox" @click="ckb" />
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import { ORDER, ALL } from "@/api/user.js";
export default {
  data() {
    return {
      num: "",
      price:0,
      isShow: false,
      // id: [],
    };
  },
  computed: {
    text: function() {
      return this.$store.state.Cart.text;
    },
  },
  mounted() {
    console.log(this.text);
    this.text.forEach((element) => {
      console.log(element.cart_id);
      this.id = element.cart_id;
      console.log(id);
    });
  },
  methods: {
    ClickAll(cart_id) {
      let id = cart_id;
      ALL({
        catId: cart_id,
      }).then((res) => {
        console.log(res);
      });
    },
    ckb() {
      // console.log(id);
    },
    onSubmit() {
      // console.log(this.id);
      ORDER({
        goodsid: this.id,
      }).then((res) => {
        console.log(res);
      });
      // this.$router.push({
      //   name: "order",
      // });
    },
    dele(cart_id) {
      // console.log(cart_id);
      this.$store.dispatch("DEL_SHOP", cart_id);
    },
  },
};
</script>

<style lang="scss" scoped>
.top {
  margin-top: 100px;
}
.goods-card {
  margin: 0;
  background-color: white;
}
.delete-button {
  height: 100%;
}
.Footer {
  position: fixed;
  bottom: 100px;
  width: 100%;
  height: 94px;
  background: palevioletred;
  z-index: 999999;
  display: flex;
  justify-content: space-around;
  &.Footer div {
    width: 30%;
    height: 94px;
    background: darkmagenta;
    text-align: center;
    line-height: 94px;
  }
}
.op {
  margin-bottom: 95px;
}
</style>
