import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import PasswordGame from "./views/PasswordGame.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";

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
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
