import { SearchHot, onSearch } from "@/api/user";
const Hot = {
  //   namespaced: true, //开启命名空间，在各组件总 ...mapState("test1",{name:"name"})
  state: {
    search: [],
    SearchConte: [],
  },
  mutations: {
    MY_SEARCH(state, item) {
      state.search = [...item];
    },
    MySearchConte(state, item) {
      state.SearchConte = [...item];
    },
  },
  actions: {
    MY_SEARCH(context) {
      SearchHot()
        .then((res) => {
          context.commit("MY_SEARCH", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    MySearchConte(context, Search) {
      onSearch({
        goodsName: Search,
      })
        .then((res) => {
          console.log(res.data);
          context.commit("MySearchConte", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
export default Hot;
