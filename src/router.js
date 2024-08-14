import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import PasswordGame from "./views/PasswordGame.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/password-game",
    name: "PasswordGame",
    component: PasswordGame,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
