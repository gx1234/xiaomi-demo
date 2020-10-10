import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/js/rem";
import "./assets/css/reset.css";
import axios from "axios";
Vue.prototype.$axios = axios;
import Vant from "vant";
Vue.config.productionTip = false;
import "./assets/font_2118804_a2ita7rodae/iconfont.css";
Vue.use(Vant);
import LyTab from "ly-tab";

Vue.use(LyTab);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
