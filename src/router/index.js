import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";
import My from "../views/my/My";
import Shopping from "../views/shopping/Shopping";
import Classify from "../views/classify/Classify";
import Site from "../views/my/site/Site";
import SiteData from "../views/my/siteData/SiteData";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      isShowTabbar: true
    }
  },
  {
    path: "/my",
    component: My,
    meta: {
      isShowTabbar: true
    }
  },
  {
    path: "/shopping",
    component: Shopping,
    meta: {
      isShowTabbar: true
    }
  },
  {
    path: "/classify",
    component: Classify,
    meta: {
      isShowTabbar: true
    }
  },
  {
    path: "/site",
    component: Site
  },
  {
    path: "/siteData",
    component: SiteData
  }
];

const router = new VueRouter({
  routes
});

export default router;
