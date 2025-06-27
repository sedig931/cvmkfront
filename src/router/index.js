import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CvInfo from "../views/getCvinfo/getCvInfo.vue";
import Profile from "../views/profileView.vue";
import CaptuerPaypalOrder from "../views/getCvinfo/payment/payment.vue";
// import { mergeProps } from "vue";
import IntroHome from "../myIntro/motherPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/getcvinfo/:cvNum/:lngname",
    name: "cvinfo",
    component: CvInfo,
    props: true,
  },
  {
    path: "/profile/:id/:lngname",
    name: "profile",
    component: Profile,
    props: true,
  },
  {
    path: "/capPporder",
    name: "caporder",
    component: CaptuerPaypalOrder,
  },
  {
    path: "/introme",
    name: "introduce",
    component: IntroHome,
  },

  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
