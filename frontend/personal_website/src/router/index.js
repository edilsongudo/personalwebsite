import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CourseLandingView from "../views/CourseLandingView.vue";

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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
