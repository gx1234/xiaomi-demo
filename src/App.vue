<template>
  <div id="app">
      <router-view />
    <tabbar></tabbar>
  </div>
</template>
<script>
import Tabbar from "./components/tabbar/Tabbar";
export default {
  components: { Tabbar }
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
