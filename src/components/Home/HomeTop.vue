<template>
  <div>
    <van-sticky>
      <div class="wrap">
        <div>
          <img src="@/assets/img/home/LE_logo_2.png" width="230px" alt="" />
        </div>
        <van-search @focus="goSearch" placeholder="请输入搜索关键词" />
      </div>
    </van-sticky>
  </div>
</template>

<script>
export default {
  methods: {
    goSearch() {
      this.$router.push({
        name: "search",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 230px;
  text-align: center;
  background: gainsboro;
  z-index: 9;
}
</style>
