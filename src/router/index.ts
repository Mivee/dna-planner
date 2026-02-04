import { createRouter, createWebHistory } from "vue-router";

import CharacterView from "../views/CharacterView.vue";
import WeaponView from "../views/WeaponView.vue";
import DaemonWedgeView from "../views/DaemonWedgeView.vue";
import InventoryView from "../views/InventoryView.vue";

const routes = [
	{
		path: "/",
		redirect: "/character",
	},
	{
		path: "/character",
		component: CharacterView,
	},
	{
		path: "/weapon",
		redirect: "/character",
	},
	{
		path: "/wedges",
		component: DaemonWedgeView,
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
