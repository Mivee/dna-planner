import { describe, it, expect, beforeEach, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useUiStore } from "./ui";
import type {
	BaseUpgradeConfig,
	CharacterUpgradeConfig,
	WeaponUpgradeConfig,
	DemonWedgeUpgradeConfig,
} from "../types/upgradeConfig";

function makeCharacterConfig(
	overrides: Partial<CharacterUpgradeConfig> = {}
): CharacterUpgradeConfig {
	const defaultSkill = {
		current: 1,
		target: 10,
		node1: { isUnlocked: false },
		node2: { isUnlocked: false },
	};
	return {
		name: "Rover",
		type: "Character",
		level: { start: "1", end: "90" },
		skill: { ...defaultSkill },
		ult: { ...defaultSkill },
		passive: { ...defaultSkill },
		id: "char-1",
		...overrides,
	};
}

function makeWeaponConfig(
	overrides: Partial<WeaponUpgradeConfig> = {}
): WeaponUpgradeConfig {
	return {
		name: "Emerald of Genesis",
		type: "Weapon",
		level: { start: "1", end: "90" },
		id: "weapon-1",
		...overrides,
	};
}

function makeDemonWedgeConfig(
	overrides: Partial<DemonWedgeUpgradeConfig> = {}
): DemonWedgeUpgradeConfig {
	return {
		name: "Demon Wedge",
		type: "DemonWedge",
		level: { start: "1", end: "10" },
		initialLevel: 0,
		targetLevel: 10,
		id: "dw-1",
		...overrides,
	};
}

beforeEach(() => {
	setActivePinia(createPinia());
	localStorage.clear();
});

describe("addConfiguration", () => {
	it("adds a character configuration", () => {
		const store = useUiStore();
		const config = makeCharacterConfig();
		store.addConfiguration(config);

		expect(store.characterConfigurations).toHaveLength(1);
		expect(store.characterConfigurations[0]!.name).toBe("Rover");
	});

	it("adds a weapon configuration", () => {
		const store = useUiStore();
		store.addConfiguration(makeWeaponConfig());

		expect(store.weaponConfigurations).toHaveLength(1);
		expect(store.weaponConfigurations[0]!.name).toBe("Emerald of Genesis");
	});

	it("adds a demon wedge configuration", () => {
		const store = useUiStore();
		store.addConfiguration(makeDemonWedgeConfig());

		expect(store.demonWedgeConfigurations).toHaveLength(1);
	});

	it("ignores null or undefined configs", () => {
		const store = useUiStore();
		store.addConfiguration(null as unknown as BaseUpgradeConfig);
		store.addConfiguration(undefined as unknown as BaseUpgradeConfig);

		expect(store.upgradeConfiguration.size).toBe(0);
	});

	it("ignores configs with null name", () => {
		const store = useUiStore();
		store.addConfiguration(makeCharacterConfig({ name: null }));

		expect(store.upgradeConfiguration.size).toBe(0);
	});

	it("clones the config to avoid reference sharing", () => {
		const store = useUiStore();
		const config = makeCharacterConfig();
		store.addConfiguration(config);

		config.name = "Modified";
		expect(store.characterConfigurations[0]!.name).toBe("Rover");
	});

	it("uses id as key when available", () => {
		const store = useUiStore();
		store.addConfiguration(makeCharacterConfig({ id: "my-id" }));

		expect(store.getConfiguration("my-id")).toBeDefined();
	});

	it("falls back to name as key when no id", () => {
		const store = useUiStore();
		store.addConfiguration(
			makeCharacterConfig({ id: undefined, name: "Rover" })
		);

		expect(store.getConfiguration("Rover")).toBeDefined();
	});
});

describe("updateConfiguration", () => {
	it("overwrites an existing configuration", () => {
		const store = useUiStore();
		store.addConfiguration(makeCharacterConfig({ id: "c1", name: "Rover" }));
		store.updateConfiguration(
			makeCharacterConfig({ id: "c1", name: "Jiyan" })
		);

		expect(store.characterConfigurations).toHaveLength(1);
		expect(store.characterConfigurations[0]!.name).toBe("Jiyan");
	});
});

describe("removeConfiguration", () => {
	it("removes a configuration by id", () => {
		const store = useUiStore();
		store.addConfiguration(makeCharacterConfig({ id: "c1" }));
		store.removeConfiguration("c1");

		expect(store.upgradeConfiguration.size).toBe(0);
	});

	it("does nothing when id does not exist", () => {
		const store = useUiStore();
		store.addConfiguration(makeCharacterConfig({ id: "c1" }));
		store.removeConfiguration("nonexistent");

		expect(store.upgradeConfiguration.size).toBe(1);
	});
});

describe("getConfiguration", () => {
	it("returns undefined for unknown key", () => {
		const store = useUiStore();
		expect(store.getConfiguration("nope")).toBeUndefined();
	});

	it("returns the correct config by id", () => {
		const store = useUiStore();
		store.addConfiguration(makeWeaponConfig({ id: "w1", name: "Sword" }));

		const result = store.getConfiguration("w1");
		expect(result).toBeDefined();
		expect(result!.name).toBe("Sword");
	});
});

describe("computed filtered configurations", () => {
	it("separates characters, weapons, and demon wedges", () => {
		const store = useUiStore();
		store.addConfiguration(makeCharacterConfig({ id: "c1" }));
		store.addConfiguration(makeWeaponConfig({ id: "w1" }));
		store.addConfiguration(makeDemonWedgeConfig({ id: "dw1" }));

		expect(store.characterConfigurations).toHaveLength(1);
		expect(store.weaponConfigurations).toHaveLength(1);
		expect(store.demonWedgeConfigurations).toHaveLength(1);
	});
});

describe("localStorage persistence", () => {
	it("saves to localStorage on change", async () => {
		const store = useUiStore();
		store.addConfiguration(makeCharacterConfig({ id: "c1" }));

		// Wait for watcher to fire
		await new Promise((r) => setTimeout(r, 0));

		const stored = localStorage.getItem("dna-planner-ui");
		expect(stored).not.toBeNull();

		const parsed = JSON.parse(stored!);
		expect(parsed.upgradeConfiguration).toBeDefined();
		expect(parsed.upgradeConfiguration["c1"]).toBeDefined();
	});

	it("loads from localStorage on init", async () => {
		// Seed localStorage
		const data = {
			plannerMode: "Inventory",
			upgradeConfiguration: {
				"c1": {
					name: "Rover",
					type: "Character",
					level: { start: "1", end: "90" },
					id: "c1",
					skill: {
						current: 1,
						target: 10,
						node1: { isUnlocked: false },
						node2: { isUnlocked: false },
					},
					ult: {
						current: 1,
						target: 10,
						node1: { isUnlocked: false },
						node2: { isUnlocked: false },
					},
					passive: {
						current: 1,
						target: 10,
						node1: { isUnlocked: false },
						node2: { isUnlocked: false },
					},
				},
			},
		};
		localStorage.setItem("dna-planner-ui", JSON.stringify(data));

		// Re-create pinia so the store re-reads localStorage
		setActivePinia(createPinia());
		const store = useUiStore();

		expect(store.characterConfigurations).toHaveLength(1);
		expect(store.characterConfigurations[0]!.name).toBe("Rover");
	});

	it("handles corrupted localStorage gracefully", () => {
		localStorage.setItem("dna-planner-ui", "not valid json{{{");

		setActivePinia(createPinia());
		const store = useUiStore();

		expect(store.upgradeConfiguration.size).toBe(0);
	});

	it("handles localStorage write failure gracefully", async () => {
		const store = useUiStore();
		const spy = vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
			throw new Error("QuotaExceededError");
		});

		// Should not throw
		store.addConfiguration(makeCharacterConfig({ id: "c1" }));
		await new Promise((r) => setTimeout(r, 0));

		spy.mockRestore();
	});

	it("assigns UUIDs to configs missing IDs during migration", () => {
		const data = {
			plannerMode: "Inventory",
			upgradeConfiguration: {
				Rover: {
					name: "Rover",
					type: "Character",
					level: { start: "1", end: "90" },
					// no id field
					skill: {
						current: 1,
						target: 10,
						node1: { isUnlocked: false },
						node2: { isUnlocked: false },
					},
					ult: {
						current: 1,
						target: 10,
						node1: { isUnlocked: false },
						node2: { isUnlocked: false },
					},
					passive: {
						current: 1,
						target: 10,
						node1: { isUnlocked: false },
						node2: { isUnlocked: false },
					},
				},
			},
		};
		localStorage.setItem("dna-planner-ui", JSON.stringify(data));

		setActivePinia(createPinia());
		const store = useUiStore();

		expect(store.characterConfigurations).toHaveLength(1);
		expect(store.characterConfigurations[0]!.id).toBeDefined();
		expect(store.characterConfigurations[0]!.id).not.toBe("");
	});
});
