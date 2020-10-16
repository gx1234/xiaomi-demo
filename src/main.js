import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/js/rem";
import "./assets/css/reset.css";

import Vant from "vant";
import axios from 'axios'
Vue.prototype.$axios = axios;
import 'vant/lib/index.css'
Vue.config.productionTip = false;
import "./assets/font_2118804_a2ita7rodae/iconfont.css";
Vue.use(Vant);
import LyTab from "ly-tab";
import "vant/lib/index.css"
Vue.use(LyTab);
new Vue({
  router,
  store,
  axios,
  created(){
    this.$store.commit('onrefresh','start')
  },

  render: h => h(App)
}).$mount("#app");
