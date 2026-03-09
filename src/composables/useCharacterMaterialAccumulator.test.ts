import { describe, it, expect } from "vitest";
import { accumulateCharacterMaterials } from "./useCharacterMaterialAccumulator";
import { createEmptyTotals } from "./useMaterialTotals";
import type { CharacterUpgradeConfig } from "../types/upgradeConfig";

function makeConfig(
	name: string,
	levelStart: string,
	levelEnd: string
): CharacterUpgradeConfig {
	return {
		name,
		type: "Character",
		level: { start: levelStart, end: levelEnd },
		skill: { current: 1, target: 1, node1: { isUnlocked: false }, node2: { isUnlocked: false } },
		ult: { current: 1, target: 1, node1: { isUnlocked: false }, node2: { isUnlocked: false } },
		passive: { current: 1, target: 1, node1: { isUnlocked: false }, node2: { isUnlocked: false } },
	};
}

describe("accumulateCharacterMaterials", () => {
	it("does nothing for a config with no name", () => {
		const totals = createEmptyTotals();
		const config = makeConfig("", "1", "20");
		accumulateCharacterMaterials(config, totals);
		expect(totals.coins).toBe(0);
		expect(totals.exp.characters).toBe(0);
	});

	it("does nothing for an unknown character name", () => {
		const totals = createEmptyTotals();
		const config = makeConfig("NonExistentCharacter", "1", "20");
		accumulateCharacterMaterials(config, totals);
		expect(totals.coins).toBe(0);
	});

	it("accumulates coins and exp for a valid character level range", () => {
		const totals = createEmptyTotals();
		// Phoxhunter is the first character in definitions
		const config = makeConfig("Phoxhunter", "1", "20");
		accumulateCharacterMaterials(config, totals);
		expect(totals.coins).toBeGreaterThan(0);
		expect(totals.exp.characters).toBeGreaterThan(0);
	});

	it("accumulates ascension materials for a cross-ascension range", () => {
		const totals = createEmptyTotals();
		const config = makeConfig("Phoxhunter", "1", "30");
		accumulateCharacterMaterials(config, totals);
		expect(totals.ascensionDetails.size).toBeGreaterThan(0);
	});

	it("accumulates skill materials when skill levels differ", () => {
		const totals = createEmptyTotals();
		const config: CharacterUpgradeConfig = {
			...makeConfig("Phoxhunter", "1", "20"),
			skill: { current: 1, target: 5, node1: { isUnlocked: false }, node2: { isUnlocked: false } },
		};
		accumulateCharacterMaterials(config, totals);
		expect(totals.forging.green + totals.forging.blue + totals.forging.purple).toBeGreaterThan(0);
	});

	it("adds amounts from multiple configs together", () => {
		const totals = createEmptyTotals();
		accumulateCharacterMaterials(makeConfig("Phoxhunter", "1", "20"), totals);
		const coinsAfterFirst = totals.coins;
		accumulateCharacterMaterials(makeConfig("Margie", "1", "20"), totals);
		expect(totals.coins).toBeGreaterThan(coinsAfterFirst);
	});
});
