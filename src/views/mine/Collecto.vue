<template>
  <div>
    <TopHea title="我收藏夹"></TopHea>
    <div class="body">
      <div v-for="(item, index) in list" :key="index">
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
</template>

<script>
import { STORE } from "@/api/user.js";
import TopHea from "@/components/TopHea";

export default {
  components: {
    TopHea,
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    STORE()
      .then((res) => {
        // console.log(res.data);
        this.list = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
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
