import { HomeList } from "@/api/user.js";
const homeList = {
  state: {
    list1: [],
    num: [
      {
        name: "流行",
        typeof: "syn",
      },
      {
        name: "新款",
        typeof: "new",
      },
      {
        name: "操作",
        typeof: "sell",
      },
    ],
    goodsIndex: 0,
  },
  mutations: {
    HOME_LIST(state, item) {
      state.list1 = [...item];
    },

    GOODSINDEX(state, index) {
      state.goodsIndex = index;
      state.list1 = [];
      var tem = state.num[state.goodsIndex].typeof;
      HomeList({ sortType: tem })
        .then((res) => {
          state.list1 = [...res.data];
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  actions: {
    HOME_LIST(context) {
      HomeList({ sortType: "syn" })
        .then((res) => {
          context.commit("HOME_LIST", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    GOODSINDEX(context, index) {
      context.commit("GOODSINDEX", index);
    },
  },
};

export default homeList;
