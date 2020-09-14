import { addcart, GainCart, DelShop } from "@/api/user";
import qs from "qs";
const Cart = {
  state: {
    CartItem: [],
    text: [],
    num: 1,
  },
  mutations: {
    ADDCART(state, item) {},
    DEL_SHOP(state, item) {},
    GAINCART(state, item) {
      state.CartItem = [...item];
      // state.text = [];
      // state.CartItem.forEach((ele) => {
      //   if (ele == null) {
      //     state.CartItem.pop();
      //     state.text = state.CartItem;
      //   }
      // });
    },
  },
  actions: {
    //添加商品
    ADDCART(context, id) {
      let params = {
        product_id: id,
        product_amount: this.num++,
      };
      addcart(qs.stringify(params))
        .then((res) => {
          console.log(res);
          context.commit("ADDCART", id);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 获取商品信息
    GAINCART(context) {
      GainCart({
        page: 1,
        pageSize: 10,
      })
        .then((res) => {
          console.log(res.data);
          context.commit("GAINCART", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 删除商品
    DEL_SHOP(context, cart_id) {
      DelShop({
        carid: cart_id,
      })
        .then((res) => {
          console.log(res);
          context.commit("DEL_SHOP");
        })
        .catch((err) => {
          console.log(err);
        });
      GainCart({
        params: {
          page: 10,
          pageSize: 30,
        },
      })
        .then((res) => {
          console.log(res);
          context.commit("GAINCART", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
export default Cart;
