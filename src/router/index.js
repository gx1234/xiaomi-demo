import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";
import My from "../views/my/My";
import Shopping from "../views/shopping/Shopping";
import Classify from "../views/classify/Classify";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/my",
    component: My,
  },
  {
    path: "/shopping",
    component: Shopping,
  },
  {
    path: "/classify",
    component: Classify,
  },
];

const router = new VueRouter({
  routes
});

export default router;
