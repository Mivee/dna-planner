import { defineStore } from "pinia";
import type { InventoryItem } from "../types/inventoryItem";
import { ref, watch } from "vue";

const STORAGE_KEY = "dna-planner-inventory";

export const useInventory = defineStore("inventory", () => {
	const sanitizeQuantity = (quantity: number): number => {
		if (!Number.isFinite(quantity)) {
			return 0;
		}

		return Math.max(0, Math.floor(quantity));
	};

	// Load initial state from localStorage
	const loadFromStorage = (): InventoryItem[] => {
		try {
			const stored = localStorage.getItem(STORAGE_KEY);
			if (stored) {
				const parsed = JSON.parse(stored) as InventoryItem[];
				return parsed
					.filter((item) => typeof item.name === "string")
					.map((item) => ({
						name: item.name,
						quantity: sanitizeQuantity(item.quantity),
					}));
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

		item.quantity = sanitizeQuantity(quantity);
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

		items.value.push({
			name: item.name,
			quantity: sanitizeQuantity(item.quantity),
		});
		items.value.sort((a, b) => a.name.localeCompare(b.name));
		return true;
	}

	function upsertItem(name: string, quantity: number): boolean {
		const sanitizedQuantity = sanitizeQuantity(quantity);
		const existing = items.value.find((item) => item.name === name);

		if (existing) {
			existing.quantity = sanitizedQuantity;
			return true;
		}

		if (!name.trim()) {
			return false;
		}

		items.value.push({ name: name.trim(), quantity: sanitizedQuantity });
		items.value.sort((a, b) => a.name.localeCompare(b.name));
		return true;
	}

	function removeItem(name: string): boolean {
		const index = items.value.findIndex((item) => item.name === name);
		if (index < 0) {
			return false;
		}

		items.value.splice(index, 1);
		return true;
	}

	function clearEmptyItems(): number {
		const before = items.value.length;
		items.value = items.value.filter(
			(item) => sanitizeQuantity(item.quantity) > 0
		);
		return before - items.value.length;
	}

	function resetInventory() {
		items.value = [];
		return true;
	}

	return {
		items,
		setQuantity,
		getAmount,
		addItem,
		upsertItem,
		removeItem,
		clearEmptyItems,
		resetInventory,
	};
});
