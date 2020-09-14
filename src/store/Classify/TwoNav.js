import { classify2 } from "@/api/user.js";
const TwoNav = {
  state: {
    Two: [],
  },
  mutations: {
    CLASSIFY_TWO_NAV(state, item) {
      state.Two = [...item];
    },
  },
  actions: {
    CLASSIFY_TWO_NAV(context, cat_id) {
      classify2({
        cat_id: cat_id,
      })
        .then((res) => {
          // console.log(res.data);
          context.commit("CLASSIFY_TWO_NAV", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
export default TwoNav;
