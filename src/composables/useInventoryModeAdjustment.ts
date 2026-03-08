import { storeToRefs } from "pinia";
import { useInventory } from "../stores/inventory";
import { useUiStore } from "../stores/ui";

export function useInventoryModeAdjustment() {
	const inventoryStore = useInventory();
	const { plannerMode } = storeToRefs(useUiStore());

	function getAdjustedAmount(
		materialName: string | null | undefined,
		requiredAmount: number
	): number {
		if (!materialName || plannerMode.value !== "Inventory") {
			return requiredAmount;
		}

		return Math.max(
			0,
			requiredAmount - inventoryStore.getAmount(materialName)
		);
	}

	return {
		getAdjustedAmount,
	};
}
