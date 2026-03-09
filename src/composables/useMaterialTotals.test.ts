import { describe, it, expect } from "vitest";
import { createEmptyTotals, addToMap } from "./useMaterialTotals";

describe("createEmptyTotals", () => {
	it("initializes all numeric fields to 0", () => {
		const totals = createEmptyTotals();
		expect(totals.coins).toBe(0);
		expect(totals.carmineGlobules).toBe(0);
		expect(totals.exp.characters).toBe(0);
		expect(totals.exp.weapons).toBe(0);
		expect(totals.ascension.green).toBe(0);
		expect(totals.ascension.blue).toBe(0);
		expect(totals.ascension.purple).toBe(0);
		expect(totals.forging.green).toBe(0);
		expect(totals.forging.blue).toBe(0);
		expect(totals.forging.purple).toBe(0);
	});

	it("initializes all maps as empty", () => {
		const totals = createEmptyTotals();
		expect(totals.ascensionDetails.size).toBe(0);
		expect(totals.forgingDetails.size).toBe(0);
		expect(totals.blueprintDetails.size).toBe(0);
		expect(totals.demonWedgeMaterials.size).toBe(0);
	});

	it("returns a new object each call", () => {
		const a = createEmptyTotals();
		const b = createEmptyTotals();
		expect(a).not.toBe(b);
		expect(a.ascensionDetails).not.toBe(b.ascensionDetails);
	});
});

describe("addToMap", () => {
	it("adds a new entry when key does not exist", () => {
		const map = new Map<string, { tier: string; quantity: number }>();
		addToMap(map, "Iron", "green", 5);
		expect(map.get("Iron")).toEqual({ tier: "green", quantity: 5 });
	});

	it("accumulates quantity for an existing key", () => {
		const map = new Map<string, { tier: string; quantity: number }>();
		addToMap(map, "Iron", "green", 5);
		addToMap(map, "Iron", "green", 3);
		expect(map.get("Iron")?.quantity).toBe(8);
	});

	it("preserves the tier from the latest call", () => {
		const map = new Map<string, { tier: string; quantity: number }>();
		addToMap(map, "Iron", "green", 5);
		addToMap(map, "Iron", "blue", 2);
		expect(map.get("Iron")?.tier).toBe("blue");
	});

	it("handles multiple distinct keys independently", () => {
		const map = new Map<string, { tier: string; quantity: number }>();
		addToMap(map, "Iron", "green", 10);
		addToMap(map, "Steel", "blue", 20);
		expect(map.get("Iron")?.quantity).toBe(10);
		expect(map.get("Steel")?.quantity).toBe(20);
	});
});
