import { createRouter, createWebHistory } from "vue-router";

import SummaryView from "../views/SummaryView.vue";

const routes = [
	{
		path: "/",
		component: SummaryView,
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});
