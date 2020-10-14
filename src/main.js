import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/js/rem";
import "./assets/css/reset.css";
import axios from "axios";
import Vant from "vant";
Vue.config.productionTip = false;
import "./assets/font_2118804_a2ita7rodae/iconfont.css";
Vue.use(Vant);
import LyTab from "ly-tab";
import "vant/lib/index.css"

Vue.use(LyTab);
new Vue({
  router,
  store,
  mounted(){
    // this.$store.commit('onrefresh','start')
    // alert(1)
  },
  created(){
    this.$store.commit('onrefresh','start')
  },
  axios,
  render: h => h(App)
}).$mount("#app");
