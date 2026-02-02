import { defineStore } from "pinia";
import type { PlannerModes } from "../types/plannerModes";
import { computed, ref } from "vue";
import type { CharacterUpgrade, UpgradeConfig } from "../types/upgradeConfig";
import { useClone } from "../composeables/utils";

export const useUiStore = defineStore("ui", () => {
	const plannerMode = ref<PlannerModes>("Inventory");

	const upgradeConfiguration = ref(new Map<string, UpgradeConfig>());

	function addConfiguration(config: UpgradeConfig) {
		if (config == null || config.name == null) return;

		const map = new Map(upgradeConfiguration.value);

		// clone to remove the reference to the obejct
		map.set(config.name, useClone(config));
		upgradeConfiguration.value = map;
	}

	function getConfiguration(name: string) {
		return upgradeConfiguration.value.get(name);
	}

	const characterConfigurations = computed(() => {
		return [...upgradeConfiguration.value.values()].filter(
			(c) => c.type == "Character"
		) as CharacterUpgrade[];
	});

	return {
		plannerMode,
		addConfiguration,
		characterConfigurations,
		getConfiguration,
		upgradeConfiguration,
	};
});
