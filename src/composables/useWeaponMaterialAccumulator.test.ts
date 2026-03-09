import { describe, it, expect } from "vitest";
import { accumulateWeaponMaterials } from "./useWeaponMaterialAccumulator";
import { createEmptyTotals } from "./useMaterialTotals";
import type { WeaponUpgradeConfig } from "../types/upgradeConfig";

function makeConfig(
	name: string,
	levelStart: string,
	levelEnd: string
): WeaponUpgradeConfig {
	return {
		name,
		type: "Weapon",
		level: { start: levelStart, end: levelEnd },
	};
}

describe("accumulateWeaponMaterials", () => {
	it("does nothing for a config with no name", () => {
		const totals = createEmptyTotals();
		accumulateWeaponMaterials({ ...makeConfig("", "1", "20") }, totals);
		expect(totals.coins).toBe(0);
		expect(totals.exp.weapons).toBe(0);
	});

	it("does nothing for an unknown weapon name", () => {
		const totals = createEmptyTotals();
		accumulateWeaponMaterials(makeConfig("NonExistentWeapon", "1", "20"), totals);
		expect(totals.coins).toBe(0);
	});

	it("accumulates coins and exp for a valid weapon level range", () => {
		const totals = createEmptyTotals();
		// Flamme De Epuration is the first weapon in definitions
		accumulateWeaponMaterials(makeConfig("Flamme De Epuration", "1", "20"), totals);
		expect(totals.coins).toBeGreaterThan(0);
		expect(totals.exp.weapons).toBeGreaterThan(0);
	});

	it("accumulates ascension details for a cross-ascension range", () => {
		const totals = createEmptyTotals();
		accumulateWeaponMaterials(makeConfig("Flamme De Epuration", "1", "30"), totals);
		expect(totals.ascensionDetails.size).toBeGreaterThan(0);
	});

	it("accumulates forging materials for a valid range", () => {
		const totals = createEmptyTotals();
		accumulateWeaponMaterials(makeConfig("Flamme De Epuration", "1", "30"), totals);
		expect(totals.forging.green + totals.forging.blue).toBeGreaterThan(0);
	});

	it("adds amounts from multiple configs together", () => {
		const totals = createEmptyTotals();
		accumulateWeaponMaterials(makeConfig("Flamme De Epuration", "1", "20"), totals);
		const coinsAfterFirst = totals.coins;
		accumulateWeaponMaterials(makeConfig("Withershade", "1", "20"), totals);
		expect(totals.coins).toBeGreaterThan(coinsAfterFirst);
	});
});
