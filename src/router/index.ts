import { createRouter, createWebHistory } from "vue-router";

import CharacterView from "../views/CharacterView.vue";
import Weaponview from "../views/Weaponview.vue";
import DeamonwedgeView from "../views/DeamonwedgeView.vue";
import InventoryView from "../views/InventoryView.vue";

const routes = [
	{
		path: "/character",
		component: CharacterView,
	},
	{
		path: "/weapon",
		component: Weaponview,
	},
	{
		path: "/wedges",
		component: DeamonwedgeView,
	},
	{
		path: "/inventory",
		component: InventoryView,
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
