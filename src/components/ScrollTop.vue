<template>
  <div>
    <!-- 返回顶部 -->
    <div class="return" v-show="SHOW" @click="revert">
      <!-- <van-icon name="arrow-up" size="20" /> -->
      <img src="@/assets/img/common/toUp.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      SHOW: false,
    };
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 1500) {
        this.SHOW = true;
      } else {
        this.SHOW = false;
      }
    },
    // 返回顶部的方法
    revert() {
      $("html")
        .stop()
        .animate(
          {
            scrollTop: 0,
          },
          3000
        );
    },
    listenerFunction(e) {
      document.addEventListener("scroll", this.handleScroll, true);
    },
  },
  created() {
    this.listenerFunction();
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.listenerFunction);
  },
};
</script>

<style lang="scss" scoped>
.return img {
  position: fixed;
  top: 830px;
  left: 610px;
  z-index: 999999;
  width: 80px;
  height: 80px;
}
</style>
