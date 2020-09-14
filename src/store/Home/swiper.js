import { Swiper } from "@/api/user.js";
const swiper = {
  state: {
    swiper: [],
    SwiperList: [],
  },
  mutations: {
    HOME_SWIPER(state, item) {
      state.swiper = [...item];
    },
    HOME_SWIPER_LIST(state, item) {
      state.SwiperList = [...item];
    },
  },
  actions: {
    HOME_SWIPER(context) {
      Swiper()
        .then((res) => {
          // console.log(res.data[0]);
          context.commit("HOME_SWIPER", res.data[1]);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    HOME_SWIPER_LIST(context) {
      Swiper()
        .then((res) => {
          // console.log(res.data[0]);
          context.commit("HOME_SWIPER_LIST", res.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
export default swiper;
