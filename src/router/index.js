import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "../views/AppLayout";

const routes = [
  {
    name: "home",
    path: "/",
    component: AppLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
