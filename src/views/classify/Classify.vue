<template>
  <div>
    <ClassTop></ClassTop>
    <div class="content">
      <div class="Left">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            v-for="(item, index) in one"
            :key="index"
            :title="item.cat_name"
            @click="onClick(item.cat_id)"
          />
        </van-sidebar>
      </div>
      <div class="Right">
        <div class="Top">
          <div v-for="(item, index) in classTop" :key="index">
            <span :class="{ active: INDX === index }" @click="Click(index)">
              {{ item }}
            </span>
          </div>
        </div>
        <!-- ============================ -->
        <div class="middle">
          <div v-for="(item, index) in Two" :key="index">
            <img :src="item.goodsLogo" alt="" class="img1" />
            <p>{{ item.goodsName }}</p>
            <span class="price">
              <span style="color:#FF6699">
                {{ item.goodsPrice }}
              </span>
              <van-icon name="star-o" /> {{ item.goodsOldPrice }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClassTop from "@/components/Classifly/ClassTop";
import { classify2 } from "@/api/user.js";
export default {
  components: {
    ClassTop,
  },
  data() {
    return {
      activeKey: 0,
      classTop: ["综合", "销量", "新品"],
      INDX: 0,
      Two:[]
    };
  },
  methods: {
    onClick(cat_id) {
      // console.log(cat_id);
      // this.one[cat_id] = this.Two[cat_id];
      this.$store.dispatch("CLASSIFY_TWO_NAV", cat_id);
    },
    Click(index) {
      // alert("s");
      this.INDX = index;
      console.log(index);
    },
  },
  created() {
    // this.Two[85];
  },
  mounted() {
    this.$store.dispatch("CLASSIFY_ONE_NAV");
    classify2({
      cat_id: 85,
    })
      .then((res) => {
        this.Two = res.data;
        // console.log(res.data);
        // context.commit("CLASSIFY_TWO_NAV", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    one: function() {
      return this.$store.state.oneNav.one;
    },
    // Two: function() {
    //   return this.$store.state.TwoNav.Two;
    // },
  },
};
</script>

<style lang="scss" scopd>
.content {
  width: 100%;
  height: 800px;
  .Left {
    float: left;
    width: 20%;
    overflow: auto;
  }
  .Right {
    overflow: auto;
    float: left;
    width: 80%;
    height: 90%;
    background: #f4f4f4;
    .Top {
      margin-left: -6px;
      float: right;
      width: 610px;
      height: 100px;
      background: white;
      display: flex;
      justify-content: space-around;
      line-height: 100px;
      position: fixed;
      top: 185px;
      .active {
        color: #fe5777;
        border-bottom: 5px solid #fe5777;
      }
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
}
</style>
