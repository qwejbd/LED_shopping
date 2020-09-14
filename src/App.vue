<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="child-view "></router-view>
      </keep-alive>
    </transition> 
  </div>
</template> 
<script>
export default {
  data() {
    return {
      _transitionName: "slide-left",
      get transitionName() {
        return this._transitionName;
      },
      set transitionName(value) {
        this._transitionName=value;
      },
    };
  },
  watch: {
    $route(to, from) {
      //页面的进出通过路由上的时间戳参数来决定
      const prevStamps = from.query.stamps || 0;
      const nextStamps = to.query.stamps || 0;
      this.transitionName =
        prevStamps > nextStamps ? "slide-right" : "slide-left";
    },
  },
  methods: {
    _isMobile() {
      //判断当前环境是pc端还是移动端
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
  },
  mounted() {
    if (this._isMobile()) {
      // alert("手机端");
      console.log("手机端");
      // this.$router.replace('/home1');
    } else {
      // alert("pc端");
      console.log("pc端");
      // this.$router.replace('/about');
    }
  },
};
</script>

<style lang="scss">
html,
body {
  width: 100%;
  margin: 0px;
  padding: 0px;
}
.child-view {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  transition-property: transform, opacity;
  transition-duration: 0.6s;
  transition-timing-function: ease-out;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
}
.slide-left-enter {
  opacity: 0;
  transform: translate(100%, 0);
}
.slide-left-enter-active {
  z-index: 10;
}
.slide-left-leave-active {
  z-index: 0;
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate(100%, 0);
  z-index: 11;
}
</style>
