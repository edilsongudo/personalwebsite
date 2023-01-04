import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CourseLandingView from "../views/CourseLandingView.vue";
import Checkout from "../views/Checkout.vue";
import ThankYou from "../views/ThankYou.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/course/",
    name: "course",
    component: CourseLandingView,
  },
  {
    path: "/checkout/",
    name: "checkout",
    component: Checkout,
  },
  {
    path: "/thankyou/",
    name: "thankyou",
    component: ThankYou,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
