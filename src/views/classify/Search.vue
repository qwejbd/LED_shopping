<template>
  <div>
    <div v-show="da">
      <TopHea title="商品搜索"></TopHea>
      <!-- ================================================= -->
      <van-search
        v-model="Search"
        show-action
        label="商品名称"
        placeholder="请输入搜索关键词"
        @keydown.enter="onSearch"
      >
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
      <!-- ================================================================ -->
      <van-divider>全网热搜</van-divider>
      <div class="Wrap">
        <div v-for="(item, index) in search" :key="index" class="box">
          <span @click="goComenter(item)">
            {{ item }}
          </span>
        </div>
      </div>
      <!-- 搜索历史 -->
      <!-- ================================================================ -->
      <div v-show="history">
        <van-divider>搜索历史</van-divider>
      </div>
    </div>
    <!-- ========================== -->
    <div class="yig" v-show="xa">
      <van-sticky>
        <van-nav-bar
          title="搜索商品"
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
        />
        <van-search
          v-model="search.item"
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
      <!-- ============================= -->
      <div class="middle">
        <div v-for="(item, index) in List" :key="index">
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
  </div>
</template>

<script>
import { onSearch } from "@/api/user";
import TopHea from "@/components/TopHea";
import debounce from "@/utils/debounce.js";
import throttle from "@/utils/throttle.js";

export default {
  components: {
    TopHea,
  },
  data() {
    return {
      Search: "",
      history: false,
      List: [],
      classTop: ["综合", "销量", "新品", "价格"],
      INDX: 0,
      da: true,
      xa: false,
    };
  },
  computed: {
    search: function() {
      return this.$store.state.Hot.search;
    },
  },

  methods: {
    Click(index) {
      this.INDX = index;
      console.log(index);
    },
    back() {
      window.history.back();
    },
    goComenter(item) {
      debounce((_) => {
        onSearch({
          goodsName: item,
        })
          .then((res) => {
            this.xa = true;
            this.da = false;
            // console.log(res.data);
            this.List = res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      }, 2000);
    },
    onClickLeft() {
      this.xa = false;
      this.da = true;
    },
    onSearch() {
      // alert("d")
      this.history = true;
      // console.log(this.Search);
      this.$store.dispatch("MySearchConte", this.Search);
      this.$router.push({
        name: "searchConent",
      });
    },
  },
  created() {
    this.$store.dispatch("MY_SEARCH");
  },
};
</script>

<style lang="scss" scoped>
.yig {
  width: 100%;
  height: 500px;
}
.Wrap {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .box {
    margin: 10px 10px 10px 10px;
    border: 1px solid #999999;
  }
}
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
