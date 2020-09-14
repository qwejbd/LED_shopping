<template>
  <div>
    <van-sticky>
      <TopHea title="商品搜索"></TopHea>
      <van-search
        v-model="Search"
        show-action
        label="商品名称"
        placeholder="请输入搜索关键词"
      >
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
      <!-- =================================================== -->
      <div class="Top">
        <div v-for="(item, index) in classTop" :key="index">
          <span :class="{ active: INDX == index }" @click="Click(index)">
            {{ item }}
          </span>
        </div>
      </div>
    </van-sticky>
    <!-- =========================== -->
    <div class="middle">
      <div v-for="(item, index) in SearchConte" :key="index">
        <img :src="item.goodsLogo" alt="" class="img1" />
        <p>{{ item.goodsName }}</p>
        <span class="price">
          <span style="color:#FF6699">
            {{ item.goodsOldPrice }}
          </span>
          <van-icon name="star-o" /> {{ item.goodsPrice }} {{ item.hot }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import TopHea from "../TopHea";
export default {
  components: {
    TopHea,
  },
  data() {
    return {
      Search: "",
      classTop: ["综合", "销量", "新品", "价格"],
      INDX: 0,
    };
  },
  methods: {
    back() {
      window.history.back();
    },
    Click(index) {
      //   alert("s");
      this.INDX = index;
      console.log(index);
    },
  },
  computed: {
    SearchConte: function() {
      return this.$store.state.Hot.SearchConte;
    },
  },
  //   mounted() {
  //     console.log(this.SearchConte);
  //   },
};
</script>
<style lang="scss" scoped>
.Top {
  margin-left: -6px;
  float: right;
  width: 100%;
  height: 100px;
  background: white;
  display: flex;
  justify-content: space-around;
  line-height: 100px;
  .active {
    color: #fe5777;
    border-bottom: 5px solid #fe5777;
  }
}
.middle {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-bottom: 100px;
  &.middle div {
    width: 45%;
    background: white;
    margin-left: 15px;
    margin-top: 70px;
    border-radius: 30px;
    .img1 {
      width: 100%;
      border-radius: 30px;
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
