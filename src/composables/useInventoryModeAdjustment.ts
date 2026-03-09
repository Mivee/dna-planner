import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useInventory } from "../stores/inventory";
import { useUiStore } from "../stores/ui";

const allocationMap = new Map<string, number>();
const allocationVersion = ref(0);
let lastClearedVersion = -1;

export function useInventoryModeAdjustment() {
	const inventoryStore = useInventory();
	const uiStore = useUiStore();
	const { plannerMode } = storeToRefs(uiStore);

	watch(
		[
			plannerMode,
			() => inventoryStore.items,
			() => uiStore.upgradeConfiguration,
		],
		() => {
			allocationVersion.value++;
		},
		{ deep: true }
	);

	function getAdjustedAmount(
		materialName: string | null | undefined,
		requiredAmount: number
	): number {
		if (!materialName || plannerMode.value !== "Inventory") {
			return requiredAmount;
		}

		// Use versioning to keep track of the changes. A change will rerender
		// the parent component to calculate the correct amount of materials.
		const version = allocationVersion.value;
		if (lastClearedVersion !== version) {
			allocationMap.clear();
			lastClearedVersion = version;
		}

		const totalInventory = inventoryStore.getAmount(materialName);
		const alreadyAllocated = allocationMap.get(materialName) ?? 0;
		const remainingInventory = Math.max(
			0,
			totalInventory - alreadyAllocated
		);
		const missing = Math.max(0, requiredAmount - remainingInventory);
		const used = Math.min(requiredAmount, remainingInventory);

		allocationMap.set(materialName, alreadyAllocated + used);

		return missing;
	}

	return {
		getAdjustedAmount,
	};
}
