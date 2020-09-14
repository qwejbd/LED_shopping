<template>
  <div>
    <van-sticky>
      <van-nav-bar title="title" left-text="返回" left-arrow @click-left="back">
        <template #title>
          {{ title }}
        </template>
      </van-nav-bar>
    </van-sticky>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
  methods: {
    back() {
      window.history.back();
    },
  },
};
</script>

<style lang="scss" scoped></style>
