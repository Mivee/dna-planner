import { createRouter, createWebHistory } from "vue-router";

import SummaryView from "../views/SummaryView.vue";
import InventoryView from "../views/InventoryView.vue";

const routes = [
	{
		path: "/",
		component: SummaryView,
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
