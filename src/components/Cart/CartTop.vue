<template>
  <div>
    <van-nav-bar fixed >
      <template #title>
        <span> 购物车(0)</span>
      </template>
      <template #right>
        <span @click="Right1" v-show="GUI"> 管理</span>
        <span @click="Right2" v-show="WAN"> 完成</span>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      GUI: true,
      WAN: false,
    };
  },
  methods: {
    Right1() {
      this.WAN = true;
      this.GUI = false;
    },
    Right2() {
      this.GUI = true;
      this.WAN = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
