import { defineStore } from "pinia";
import type { PlannerMode } from "../types/plannerModes";
import { computed, ref, watch } from "vue";
import type {
	CharacterUpgradeConfig,
	BaseUpgradeConfig,
	WeaponUpgradeConfig,
	DemonWedgeUpgradeConfig,
} from "../types/upgradeConfig";
import { useClone, useUUID } from "../composables/utils";
import { useToastStore } from "./toast";

const STORAGE_KEY = "dna-planner-ui";

export const useUiStore = defineStore("ui", () => {
	const { show: showToast } = useToastStore();
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
		} catch {
			// Toast store may not be available during initial load
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
		} catch {
			showToast(
				"Failed to save planner data — storage may be full",
				"error"
			);
		}
	};

	// Watch for changes and persist
	watch([plannerMode, upgradeConfiguration], saveToStorage, { deep: true });

	function addConfiguration(config: BaseUpgradeConfig) {
		if (config === null || config === undefined || config.name == null)
			return;

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
		} else if (config.type === "DemonWedge") {
			const demonConfig = config as DemonWedgeUpgradeConfig;
			key = demonConfig.id || config.name;
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
			(c) => c.type === "Character"
		) as CharacterUpgradeConfig[];
	});

	const weaponConfigurations = computed(() => {
		return [...upgradeConfiguration.value.values()].filter(
			(c) => c.type === "Weapon"
		) as WeaponUpgradeConfig[];
	});

	const demonWedgeConfigurations = computed(() => {
		return [...upgradeConfiguration.value.values()].filter(
			(c) => c.type === "DemonWedge"
		) as DemonWedgeUpgradeConfig[];
	});

	function updateConfiguration(config: BaseUpgradeConfig) {
		addConfiguration(config);
	}

	function removeConfiguration(nameOrId: string) {
		const map = new Map(upgradeConfiguration.value);
		map.delete(nameOrId);
		upgradeConfiguration.value = map;
	}

	return {
		plannerMode,
		addConfiguration,
		updateConfiguration,
		removeConfiguration,
		characterConfigurations,
		weaponConfigurations,
		demonWedgeConfigurations,
		getConfiguration,
		upgradeConfiguration,
	};
});
