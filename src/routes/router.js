import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import airports from "../components/AirportCard.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/airports",
    name: "Airports",
    component: airports,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;