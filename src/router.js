import { createRouter, createWebHashHistory } from "vue-router";
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
  history: createWebHashHistory(),
  routes,
});

export default router;
