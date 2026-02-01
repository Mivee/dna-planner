import { defineStore } from "pinia";
import type { PlannerModes } from "../types/plannerModes";
import { ref } from "vue";

export const useUiStore = defineStore("ui", () => {
	const plannerMode = ref<PlannerModes>("Inventory");
	return {
		plannerMode,
	};
});
