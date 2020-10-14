<template>
  <div id="app">
    <router-view />
    <tabbar v-show="$route.meta.isShowTabbar"></tabbar>
  </div>
</template>
<script>
import Tabbar from "./components/tabbar/Tabbar";
export default {
  components: { Tabbar },
  beforeDestroy() {
  },
  destroyed(){
    window.removeEventListener("beforeunload", e => {
      this.beforeunloadHandler(e);
    });
  },
  mounted() {
    window.addEventListener("beforeunload", e => {
      this.beforeunloadHandler(e);
    });
  },
  methods:{
    beforeunloadHandler(e) {
        console.log(e)
        this.$store.commit('onrefresh','end')
      
    }
  }
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
