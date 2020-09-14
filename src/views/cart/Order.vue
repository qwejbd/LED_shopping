<template>
  <div>
    <TopHea title="确认订单"></TopHea>
    <!-- ================================================== -->
    <div class="Order">
      <img
        src="http://hj0819.top/img/location.a0a8d05b.png"
        class="img1"
        alt=""
        @click="GoSite"
      />
      {{ DZ.province }}
      {{ DZ.city }}
      {{ DZ.district }}
      {{ DZ.name }}
      {{ DZ.phone }}
    </div>
    <!-- ================================================ -->
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      :title="Contern.goodsName"
      :thumb="Contern.goodsLogo"
    />
    <!-- ================================================== -->

    <div class="Footer">
      <div>应付金额: 0:0</div>
      <div>件数：</div>
      <div style="background:#F21956;color:#ffff" @click="defray">去支付</div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
import TopHea from "@/components/TopHea";
import { HDa, FK, TrueAddress } from "@/api/user.js";

export default {
  components: {
    TopHea,
  },
  data() {
    return {
      Contern: {},
      DZ: [],
      num: {},
    };
  },
  methods: {
    GoSite() {
      this.$router.push({
        name: "site",
        params: {
          goodsId: this.goodsId,
        },
      });
    },
    defray() {
      name: "defray",
        this.$router.push({
          name: "defray",
          query: {
            num: this.num,
          },
        });
    },
  },
  computed: {
    dz: function() {
      return this.$store.state.dz;
    },
  },
  async created() {
    this.Contern = this.$route.query.Contern;
    let goodsId = this.$route.query.Contern.goodsId;
    await TrueAddress()
      .then((res) => {
        console.log(res.data[0]);
        this.DZ = res.data[0];
      })
      .catch((err) => {
        console.log(err);
      });

    let params = {
      price: "20",
      consignee_addr: this.DZ,
      goodsId: goodsId,
      isFcart: "false",
    };
    await FK(params)
      .then((res) => {
        this.num = res.data[0];
        console.log(this.num.orderNumber);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
.Order {
  width: 100%;
  height: 150px;
  .img1 {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-left: 10px;
    margin-top: 25px;
  }
}
.Footer {
  width: 100%;
  height: 90px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  &.Footer div {
    width: 30%;
    height: 90px;
    text-align: center;
    line-height: 90px;
  }
}
</style>
