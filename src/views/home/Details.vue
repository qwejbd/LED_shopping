<template>
  <div>
    <van-tabs title-active-color="red" line-height="0px" scrollspy sticky>
      <template #nav-left>
        <span @click="back">
          <img src="@/assets/img/common/back.png" class="back" alt="" />
        </span>
      </template>
      <van-tab title="商品 ">
        <div>
          <img width="100%" :src="content1.goodsLogo" alt />
          <p style="font-size:18px;">{{ content1.goodsName }}</p>
          <p>
            <span style="color:#FF90A5;font-size:20px;"
              >￥{{ content1.goodsPrice }}</span
            >
            <s>{{ content1.goodsOldPrice }}</s>
          </p>
        </div>
      </van-tab>
      <van-tab title="评论 ">
        <div class="yanchibipei">
          <div v-for="(item, index) in icondata" :key="index">
            <img :src="item.icon" width="10px" alt="" />
            <span style="font-size:1px">{{ item.name }}</span>
          </div>
        </div>
        <van-cell-group>
          <van-cell title="买家评价" value="更多" />
        </van-cell-group>
        <van-divider />
        <div class="merchant">
          <div class="mer">
            <span> {{ content2.shopName }}</span>
            <img :src="content2.shopLogo" width="30px" height="20px" alt="" />
          </div>
          <p>{{ content2.shopCpy }}</p>
          <p>{{ content2.shopAre }}</p>
          <p>{{ content2.creteTime }}</p>
        </div>
      </van-tab>
      <van-tab title="详情 ">
        <div class="myhtml" v-html="content1.goodsIntroduce"></div>
      </van-tab>
      <van-tab title="推荐 ">内容</van-tab>
    </van-tabs>
    <!-- 最下面的购买商品的导航 -->
    <FooterTaber
      @goCart="goCart"
      @cart="cart"
      @Buy="Buy"
      @collection="collection"
    >
    </FooterTaber>
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '50%' }"
      closeable
    >
      <van-card
        :price="content1.goodsPrice"
        :title="content1.goodsName"
        :thumb="content1.goodsLogo"
      />
      <!-- ================== -->
      <van-cell-group>
        <van-cell>
          <template #default>
            <van-stepper v-model="value" />
          </template>
        </van-cell>
      </van-cell-group>
      <!-- Footer -->
      <div class="Footer">
        <div class="Left">添加购物车</div>
        <div class="Right" @click="MyBuy">立即购买</div>
      </div>
    </van-popup>
    <!-- 返回顶部的组件 -->
    <ScrollTop></ScrollTop>
  </div>
</template>

<script>
import qs from "qs";
import { Toast } from "vant";
import ScrollTop from "@/components/ScrollTop";
import FooterTaber from "@/components/Home/FooterTaber";
import { HomeDel, GainCart, STOREUP, YiRemove, addcart } from "@/api/user";

export default {
  components: {
    FooterTaber,
    ScrollTop,
  },
  data() {
    return {
      content1: {},
      icondata: [],
      content2: {},
      id: "",
      show: false,
      value: "",
      num: 1,
      data: {},
    };
  },
  methods: {
    collection() {
      STOREUP({ goods_id: this.$route.query.goodsId })
        .then((res) => {
          console.log(res);
          Toast("收藏成功");
        })
        .catch((err) => {
          console.log(err);
        });
      // return;
      // YiRemove({ goods_id: this.$route.query.goodsId })
      //   .then((res) => {
      //     console.log(res);
      //     Toast("移除收藏");
      //   })
      //   .catch((err) => {
      //     console.log(er);
      //   });
    },
    MyBuy() {
      this.$router.push({
        name: "order",
        query: {
          Contern: this.content1,
        },
      });
    },
    Buy() {
      this.show = true;
    },
    back() {
      window.history.back();
    },
    async goCart() {
      // this.$store.dispatch("ADDCART", this.id);
      // this.$store.dispatch("GAINCART");
      let params = {
        product_id: this.id,
        product_amount: this.num++,
      };
      await addcart(qs.stringify(params))
        .then((res) => {
          console.log(res);
          // context.commit("ADDCART", id);
        })
        .catch((err) => {
          console.log(err);
        });
      // ==================================
      await GainCart({
        page: 1,
        pageSize: 10,
      })
        .then((res) => {
          console.log(res);
          // context.commit("GAINCART", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    cart() {
      this.$router.push({
        name: "Cart",
      });
    },
  },
  mounted() {
    let id = this.$route.query.goodsId;
    HomeDel({
      goodsId: id,
    }).then((res) => {
      this.content1 = res.data[0];
      this.content2 = res.data[1];
      this.content3 = res.data[3][0];
      this.icondata = res.data[2];
    });
  },
};
</script>

<style scoped>
.Footer {
  width: 100%;
  height: 100px;
  background: brown;
  position: fixed;
  bottom: 0;
  z-index: 9999999;
  display: flex;
}
.Left {
  width: 50%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: white;
  background: #ff9518;
}
.Right {
  width: 50%;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: white;
  background: #f32029;
}
.header {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
}
.header span {
  font-size: 30px;
}
.myhtml {
  margin-top: 100px;
}
.myhtml >>> img {
  width: 100%;
}
.xiaoliang {
  margin-top: 10px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.yanchibipei {
  margin-top: 40px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.yanchibipei img {
  vertical-align: middle;
}
.merchant {
  width: 100%;
  height: 200px;
}
.mer {
  display: flex;
}
.comment {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 50px;
  box-sizing: border-box;
}
.comment2 {
  width: 100%;
  height: 400px;
  background: darkkhaki;
}
.yun {
  width: 100%;
  display: flex;
}
.conmmentImg {
  width: 90px;
  height: 90px;
  border-radius: 50%;
}
.back {
  width: 40px;
  height: 40px;
  margin-top: 25px;
  margin-left: 25px;
}
</style>
