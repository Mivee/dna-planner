import { defineStore } from "pinia";
import type { InventoryItem } from "../types/inventoryItem";
import { ref, watch } from "vue";

const STORAGE_KEY = "dna-planner-inventory";

export const useInventory = defineStore("inventory", () => {
	// Load initial state from localStorage
	const loadFromStorage = (): InventoryItem[] => {
		try {
			const stored = localStorage.getItem(STORAGE_KEY);
			if (stored) {
				return JSON.parse(stored);
			}
		} catch (error) {
			console.error("Failed to load inventory from localStorage:", error);
		}
		return [];
	};

	const items = ref<InventoryItem[]>(loadFromStorage());

	// Persist state to localStorage
	const saveToStorage = () => {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(items.value));
		} catch (error) {
			console.error("Failed to save inventory to localStorage:", error);
		}
	};

	// Watch for changes and persist
	watch(items, saveToStorage, { deep: true });

	function setQuantity(name: string, quantity: number): boolean {
		const item = items.value.find((i) => i.name == name);
		if (item == null) {
			console.warn(`Item "${name}" not found in inventory`);
			return false;
		}

		item.quantity = quantity;
		return true;
	}

	function getAmount(name: string) {
		const item = items.value.find((i) => i.name == name);
		return item?.quantity ?? 0;
	}

	function addItem(item: InventoryItem): boolean {
		if (items.value.some((i) => i.name == item.name)) {
			console.warn(`Item "${item.name}" already exists in inventory`);
			return false;
		}

		items.value.push(item);
		return true;
	}

	return {
		items,
		setQuantity,
		getAmount,
		addItem,
	};
});
