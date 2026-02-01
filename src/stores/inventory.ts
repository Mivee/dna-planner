import { defineStore } from "pinia";
import type { InventoryItem } from "../types/inventoryItem";
import { ref } from "vue";
import { isTemplateExpression } from "typescript";

export const useInventory = defineStore("inventory", () => {
	const items = ref(new Array<InventoryItem>());

	function setQuantity(name: string, quantity: number) {
		const item = items.value.find((i) => i.name == name);
		if (item == null) {
			return null;
		}

		item.quantity = quantity;
	}

	function getAmount(name: string) {
		const item = items.value.find((i) => i.name == name);
		return item?.quantity ?? 0;
	}

	function addItem(item: InventoryItem) {
		if (items.value.some((i) => i.name == item.name)) {
			return;
		}

		items.value.push(item);
	}

	return {
		items,
		setQuantity,
		getAmount,
		addItem,
	};
});
