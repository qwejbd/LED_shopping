import { classify } from "@/api/user.js";
const oneNav = {
  state: {
    one: [],
  },
  mutations: {
    CLASSIFY_ONE_NAV(state, item) {
      state.one = [...item];
    },
  },
  actions: {
    CLASSIFY_ONE_NAV(context) {
      classify()
        .then((res) => {
          // console.log(res.data);
          context.commit("CLASSIFY_ONE_NAV", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
export default oneNav;
