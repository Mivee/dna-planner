import { createRouter, createWebHistory } from "vue-router";

import SummaryView from "../views/SummaryView.vue";
// import DaemonWedgeView from "../views/DaemonWedgeView.vue";
import InventoryView from "../views/InventoryView.vue";

const routes = [
	{
		path: "/",
		component: SummaryView,
	},
	// {
	// 	path: "/wedges",
	// 	component: DaemonWedgeView,
	// },
	{
		path: "/inventory",
		component: InventoryView,
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
