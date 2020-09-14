import { HomeDel } from "@/api/user.js";
const Del = {
  state: {
    details: [],
  },
  mutations: {
    DETAILS(state, item) {
      state.details = item.res.data;
    },
  },
  actions: {
    DETAILS(context, goodsId) {
      HomeDel({ goodsId: goodsId })
        .then((res) => {
          console.log(res.data);
          context.commit("DETAILS", res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
export default Del;
