<template>
  <div>
    <van-grid :column-num="5" :border="false" :gutter="10" square>
      <van-grid-item v-for="(item, index) in SwiperList" :key="index">
        <template #icon>
          <img :src="item.sp_home_ico" class="img1" alt="" />
        </template>
        <template #text>
          <span>
            {{ item.sp_home_title }}
          </span>
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("HOME_SWIPER_LIST");
  },
  computed: {
    SwiperList: function() {
      return this.$store.state.swiper.SwiperList;
    },
  },
};
</script>

<style lang="scss" scoped>
.img1 {
  width: 80px;
  height: 80px;
}
</style>
