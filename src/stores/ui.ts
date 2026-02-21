import { defineStore } from "pinia";
import type { PlannerMode } from "../types/plannerModes";
import { computed, ref, watch } from "vue";
import type {
	CharacterUpgradeConfig,
	BaseUpgradeConfig,
	WeaponUpgradeConfig,
	DaemonWedgeUpgradeConfig,
} from "../types/upgradeConfig";
import { useClone, useUUID } from "../composeables/utils";

const STORAGE_KEY = "dna-planner-ui";

export const useUiStore = defineStore("ui", () => {
	// Load initial state from localStorage
	const loadFromStorage = () => {
		try {
			const stored = localStorage.getItem(STORAGE_KEY);
			if (stored) {
				const data = JSON.parse(stored);
				const configMap = new Map<string, BaseUpgradeConfig>();

				// Migrate old configs and ensure all configs have IDs
				for (const [, config] of Object.entries(
					data.upgradeConfiguration || {}
				)) {
					const baseConfig = config as BaseUpgradeConfig;
					if (!baseConfig.id) {
						baseConfig.id = useUUID();
					}

					configMap.set(baseConfig.id, baseConfig);
				}

				return {
					plannerMode: data.plannerMode || "Inventory",
					upgradeConfiguration: configMap,
				};
			}
		} catch (error) {
			console.error("Failed to load UI state from localStorage:", error);
		}
		return {
			plannerMode: "Inventory" as PlannerMode,
			upgradeConfiguration: new Map<string, BaseUpgradeConfig>(),
		};
	};

	const initialState = loadFromStorage();
	const plannerMode = ref<PlannerMode>(initialState.plannerMode);
	const upgradeConfiguration = ref(initialState.upgradeConfiguration);

	// Persist state to localStorage
	const saveToStorage = () => {
		try {
			const data = {
				plannerMode: plannerMode.value,
				upgradeConfiguration: Object.fromEntries(
					upgradeConfiguration.value
				),
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

		// All configs should use UUID as the key
		let key: string;

		// Type-safe check for ID based on config type
		if (config.type === "Character") {
			const charConfig = config as CharacterUpgradeConfig;
			key = charConfig.id || config.name;
		} else if (config.type === "Weapon") {
			const weaponConfig = config as WeaponUpgradeConfig;
			key = weaponConfig.id || config.name;
		} else if (config.type === "DaemonWedge") {
			const daemonConfig = config as DaemonWedgeUpgradeConfig;
			key = daemonConfig.id || config.name;
		} else {
			// Fallback to name
			key = config.name;
		}

		// clone to remove the reference to the object
		map.set(key, useClone(config));
		upgradeConfiguration.value = map;
	}

	function getConfiguration(nameOrId: string) {
		return upgradeConfiguration.value.get(nameOrId);
	}

	const characterConfigurations = computed(() => {
		return [...upgradeConfiguration.value.values()].filter(
			(c) => c.type == "Character"
		) as CharacterUpgradeConfig[];
	});

	const weaponConfigurations = computed(() => {
		return [...upgradeConfiguration.value.values()].filter(
			(c) => c.type == "Weapon"
		) as WeaponUpgradeConfig[];
	});

	const daemonWedgeConfigurations = computed(() => {
		return [...upgradeConfiguration.value.values()].filter(
			(c) => c.type == "DaemonWedge"
		) as DaemonWedgeUpgradeConfig[];
	});

	function removeConfiguration(nameOrId: string) {
		const map = new Map(upgradeConfiguration.value);
		map.delete(nameOrId);
		upgradeConfiguration.value = map;
	}

	return {
		plannerMode,
		addConfiguration,
		removeConfiguration,
		characterConfigurations,
		weaponConfigurations,
		daemonWedgeConfigurations,
		getConfiguration,
		upgradeConfiguration,
	};
});
