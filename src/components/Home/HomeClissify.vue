<template>
  <div>
    <div class="top">
      <van-sticky :offset-top="90">
        <div class="shop_category">
          <div
            v-for="(item, index) in num"
            :key="index"
            :class="{ active: goodsIndex === index }"
            @click="onClick(index)"
          >
            <p>{{ item.name }}</p>
          </div>
        </div>
      </van-sticky>
      <div class="body">
        <div v-for="(item, index) in list1" :key="index">
          <img
            :src="item.goodsLogo"
            alt=""
            class="img1"
            @click="goDel(item.goodsId)"
          />
          <p class="title">{{ item.goodsName }}</p>
          <span class="price">
            <span style="color:#FF6699">
              {{ item.goodsOldPrice }}
            </span>
            <van-icon name="star-o" /> {{ item.goodsPrice }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  mounted() {
    this.$store.dispatch("HOME_LIST");
  },
  methods: {
    goDel(goodsId) {
      this.$router.push({
        // name: "HomeDetails",
        name: "details",
        query: {
          goodsId: goodsId,
        },
      });
    },
    onClick(index) {
      this.$store.dispatch("GOODSINDEX", index);
    },
  },
  computed: {
    num: function() {
      return this.$store.state.homeList.num;
    },
    list1: function() {
      return this.$store.state.homeList.list1;
    },
    goodsIndex: function() {
      return this.$store.state.homeList.goodsIndex;
    },
  },
};
</script>
<style lang="scss" scoped>
.top {
  position: sticky;
  top: 0;
  width: 100%;
  .shop_category {
    width: 100%;
    height: 90px;
    font-size: 34px;
    font-weight: 600;
    padding-bottom: 10px;
    background: #fff;
    display: flex;
    justify-content: space-around;
    .active {
      color: #fe5777;
      border-bottom: 5px solid #fe5777;
    }
  }
}
.body {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-bottom: 100px;
  &.body div {
    margin: 10px 10px 0px 10px;
    padding-top: 50px;
    width: 45%;
    .img1 {
      width: 100%;
      height: 400px;
      border-radius: 20px;
    }
    .title {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
    .price {
      margin-left: 20px;
    }
  }
}
</style>
