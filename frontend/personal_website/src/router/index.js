import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

import LandingPageView from "../views/Course/br/LandingPageView.vue";
import CheckoutView from "../views/Course/br/CheckoutView.vue";
import ObrigadoView from "../views/Course/br/ObrigadoView.vue";

import CourseLandingView from "../views/Course/en/CourseLandingView.vue";
import Checkout from "../views/Course/en/Checkout.vue";
import ThankYou from "../views/Course/en/ThankYou.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // Brasil
  {
    path: "/curso/",
    name: "curso",
    component: LandingPageView,
  },
  {
    path: "/finalizar-compra/",
    name: "finalizar-compra",
    component: CheckoutView,
  },
  {
    path: "/obrigado/",
    name: "obrigado",
    component: ObrigadoView,
  },
  // English Speaking
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
