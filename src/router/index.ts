import { createRouter, createWebHistory } from "vue-router";

import CharacterView from "../views/CharacterView.vue";
import Weaponview from "../views/Weaponview.vue";

const routes = [
  {
    path: "/character",
    component: CharacterView,
  },
  {
    path: "/weapon",
    component: Weaponview,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
