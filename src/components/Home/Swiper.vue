<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in swiper" :key="index">
        <img :src="item.slide_show_imgUrl" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("HOME_SWIPER");
  },
  computed: {
    swiper: function() {
      return this.$store.state.swiper.swiper;
    },
  },
};
</script>
<style lang="scss" scoped>
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 500px;
}
</style>
