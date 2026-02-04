import { defineStore } from "pinia";
import type { PlannerMode } from "../types/plannerModes";
import { computed, ref, watch } from "vue";
import type { CharacterUpgradeConfig, BaseUpgradeConfig } from "../types/upgradeConfig";
import { useClone } from "../composeables/utils";

const STORAGE_KEY = "dna-planner-ui";

export const useUiStore = defineStore("ui", () => {
	// Load initial state from localStorage
	const loadFromStorage = () => {
		try {
			const stored = localStorage.getItem(STORAGE_KEY);
			if (stored) {
				const data = JSON.parse(stored);
				return {
					plannerMode: data.plannerMode || "Inventory",
					upgradeConfiguration: new Map(Object.entries(data.upgradeConfiguration || {}))
				};
			}
		} catch (error) {
			console.error("Failed to load UI state from localStorage:", error);
		}
		return { plannerMode: "Inventory" as PlannerMode, upgradeConfiguration: new Map<string, BaseUpgradeConfig>() };
	};

	const initialState = loadFromStorage();
	const plannerMode = ref<PlannerMode>(initialState.plannerMode);
	const upgradeConfiguration = ref(initialState.upgradeConfiguration);

	// Persist state to localStorage
	const saveToStorage = () => {
		try {
			const data = {
				plannerMode: plannerMode.value,
				upgradeConfiguration: Object.fromEntries(upgradeConfiguration.value)
			};
			localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
		} catch (error) {
			console.error("Failed to save UI state to localStorage:", error);
		}
	};

	// Watch for changes and persist
	watch([plannerMode, upgradeConfiguration], saveToStorage, { deep: true });

	function addConfiguration(config: BaseUpgradeConfig) {
		if (config == null || config.name == null) return;

		const map = new Map(upgradeConfiguration.value);

		// clone to remove the reference to the object
		map.set(config.name, useClone(config));
		upgradeConfiguration.value = map;
	}

	function getConfiguration(name: string) {
		return upgradeConfiguration.value.get(name);
	}

	const characterConfigurations = computed(() => {
		return [...upgradeConfiguration.value.values()].filter(
			(c) => c.type == "Character"
		) as CharacterUpgradeConfig[];
	});

	const weaponConfigurations = computed(() => {
		return [...upgradeConfiguration.value.values()].filter(
			(c) => c.type == "Weapon"
		);
	});

	function removeConfiguration(name: string) {
		const map = new Map(upgradeConfiguration.value);
		map.delete(name);
		upgradeConfiguration.value = map;
	}

	return {
		plannerMode,
		addConfiguration,
		removeConfiguration,
		characterConfigurations,
		weaponConfigurations,
		getConfiguration,
		upgradeConfiguration,
	};
});
