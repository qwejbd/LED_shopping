<template>
  <div>
    <div class="Wrap">
      <div class="chirdren1">
        <div class="op">
          <van-icon name="service-o" size="22" />
          <span>客服</span>
        </div>
      </div>
      <div class="chirdren2">
        <div class="op">
          <van-icon name="cart-o" size="20" @click="cart" />
          <span>购物车</span>
        </div>
      </div>
      <div class="chirdren3">
        <div class="op" @click="collection">
          <van-icon name="star-o" size="20" />
          <span>收藏</span>
        </div>
      </div>
      <div class="chirdren4" @click="goCart">加入购物车</div>
      <div class="chirdren5" @click="Buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goCart() {
      // alert("d");
      this.$emit("goCart");
    },
    cart() {
      this.$emit("cart");
    },
    Buy() {
      this.$emit("Buy");
    },
    collection() {
      this.$emit("collection");
    },
  },
};
</script>

<style lang="scss" scoped>
.Wrap {
  width: 100%;
  height: 98px;
  z-index: 99;
  position: fixed;
  bottom: 0;
  background: white;
  display: flex;
  text-align: center;
  border-top: 1px solid #f3f3f3;
  .chirdren1 {
    flex: 0.35;
    .op {
      display: flex;
      flex-direction: column;
      margin-top: 6px;
    }
  }
  .chirdren2 {
    flex: 0.35;
    .op {
      display: flex;
      flex-direction: column;
      margin-top: 6px;
    }
  }
  .chirdren3 {
    flex: 0.35;
    .op {
      display: flex;
      flex-direction: column;
      margin-top: 6px;
    }
  }
  .chirdren4 {
    flex: 0.4;
    line-height: 98px;
    background: #ffe817;
  }
  .chirdren5 {
    flex: 0.4;
    line-height: 98px;
    color: white;
    background: #ff6699;
  }
}
</style>
