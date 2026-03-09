import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useInventory } from "./inventory";

beforeEach(() => {
	setActivePinia(createPinia());
	localStorage.clear();
});

describe("addItem", () => {
	it("adds a new item and returns true", () => {
		const store = useInventory();
		const result = store.addItem({ name: "Iron", quantity: 10 });
		expect(result).toBe(true);
		expect(store.items).toHaveLength(1);
		expect(store.items[0]!.name).toBe("Iron");
		expect(store.items[0]!.quantity).toBe(10);
	});

	it("returns false and does not add a duplicate", () => {
		const store = useInventory();
		store.addItem({ name: "Iron", quantity: 10 });
		const result = store.addItem({ name: "Iron", quantity: 5 });
		expect(result).toBe(false);
		expect(store.items).toHaveLength(1);
	});

	it("sanitizes invalid quantity to 0", () => {
		const store = useInventory();
		store.addItem({ name: "Iron", quantity: -5 });
		expect(store.items).toHaveLength(1);
		expect(store.items[0]!.quantity).toBe(0);
	});

	it("floors fractional quantity", () => {
		const store = useInventory();
		store.addItem({ name: "Iron", quantity: 4.9 });
		expect(store.items).toHaveLength(1);
		expect(store.items[0]!.quantity).toBe(4);
	});

	it("keeps items sorted alphabetically after add", () => {
		const store = useInventory();
		store.addItem({ name: "Steel", quantity: 1 });
		store.addItem({ name: "Iron", quantity: 1 });
		expect(store.items).toHaveLength(2);
		expect(store.items[0]!.name).toBe("Iron");
		expect(store.items[1]!.name).toBe("Steel");
	});
});

describe("getAmount", () => {
	it("returns the quantity of an existing item", () => {
		const store = useInventory();
		store.addItem({ name: "Iron", quantity: 7 });
		expect(store.getAmount("Iron")).toBe(7);
	});

	it("returns 0 for a non-existent item", () => {
		const store = useInventory();
		expect(store.getAmount("Unknown")).toBe(0);
	});
});

describe("setQuantity", () => {
	it("updates the quantity of an existing item", () => {
		const store = useInventory();
		store.addItem({ name: "Iron", quantity: 5 });
		const result = store.setQuantity("Iron", 20);
		expect(result).toBe(true);
		expect(store.getAmount("Iron")).toBe(20);
	});

	it("returns false for a non-existent item", () => {
		const store = useInventory();
		const result = store.setQuantity("Unknown", 10);
		expect(result).toBe(false);
	});

	it("sanitizes negative values to 0", () => {
		const store = useInventory();
		store.addItem({ name: "Iron", quantity: 5 });
		store.setQuantity("Iron", -3);
		expect(store.getAmount("Iron")).toBe(0);
	});
});

describe("upsertItem", () => {
	it("inserts a new item when it does not exist", () => {
		const store = useInventory();
		const result = store.upsertItem("Iron", 10);
		expect(result).toBe(true);
		expect(store.getAmount("Iron")).toBe(10);
	});

	it("updates quantity of an existing item", () => {
		const store = useInventory();
		store.addItem({ name: "Iron", quantity: 5 });
		store.upsertItem("Iron", 15);
		expect(store.getAmount("Iron")).toBe(15);
	});

	it("returns false for a blank name", () => {
		const store = useInventory();
		const result = store.upsertItem("   ", 10);
		expect(result).toBe(false);
		expect(store.items).toHaveLength(0);
	});
});

describe("removeItem", () => {
	it("removes an existing item and returns true", () => {
		const store = useInventory();
		store.addItem({ name: "Iron", quantity: 5 });
		const result = store.removeItem("Iron");
		expect(result).toBe(true);
		expect(store.items).toHaveLength(0);
	});

	it("returns false when item does not exist", () => {
		const store = useInventory();
		const result = store.removeItem("Unknown");
		expect(result).toBe(false);
	});
});

describe("clearEmptyItems", () => {
	it("removes items with quantity 0 and returns count removed", () => {
		const store = useInventory();
		store.addItem({ name: "Iron", quantity: 0 });
		store.addItem({ name: "Steel", quantity: 5 });
		const removed = store.clearEmptyItems();
		expect(removed).toBe(1);
		expect(store.items).toHaveLength(1);
		expect(store.items[0]!.name).toBe("Steel");
	});

	it("returns 0 when no items are empty", () => {
		const store = useInventory();
		store.addItem({ name: "Iron", quantity: 3 });
		expect(store.clearEmptyItems()).toBe(0);
	});
});

describe("resetInventory", () => {
	it("clears all items", () => {
		const store = useInventory();
		store.addItem({ name: "Iron", quantity: 5 });
		store.addItem({ name: "Steel", quantity: 3 });
		store.resetInventory();
		expect(store.items).toHaveLength(0);
	});
});
