import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";
import My from "../views/my/My";
import Shopping from "../views/shopping/Shopping";
import Classify from "../views/classify/Classify";
import MyDetails from "../components/details/mydetails";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
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
  {
    path: "/mydetails",
    component: MyDetails
  }
];

const router = new VueRouter({
  routes
});

export default router;
