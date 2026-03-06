import type { Rarity } from "./rarities";

export type ElementType =
	| "Anemo"
	| "Electro"
	| "Pyro"
	| "Hydro"
	| "Lumino"
	| "Umbro";

export type DemonWedgeCategory =
	| "Characters"
	| "Melee Weapon"
	| "Ranged Weapon"
	| "Melee Consonance Weapon"
	| "Ranged Consonance Weapon";

export type BlueprintRarity = "Blue" | "Purple" | "Gold";

export type DemonWedgeType =
	| "Anubis"
	| "Cerberus"
	| "Bahamut"
	| "Barbatos"
	| "Fafnir"
	| "FeatheredSnake"
	| "Fenrir"
	| "Griffin"
	| "Hastur"
	| "Ifrit"
	| "Jormungand"
	| "Lilith"
	| "Mephisto"
	| "Pan"
	| "Phoenix"
	| "Siren"
	| "Sphinx"
	| "Summanus"
	| "Typhon"
	| "Yatagarasus"
	| "Changeling"; // manually added
export interface BlueprintSource {
	name: string;
	rarity?: BlueprintRarity;
	materialsPerCopy: number; // Materials needed per blueprint copy
	source?: string;
}

export interface AdditionalMaterial {
	name: string;
	quantityPerCopy: number; // Quantity needed per blueprint copy
	rarity?: Rarity;
}

export interface DemonWedge {
	type: DemonWedgeType; // e.g., "Phoenix V", "Siren II", "Cerberus VIII"
	name: string; // e.g., "Nirvana", "Blessing", "Impetus"
	displayName: string; // Combined: "Phoenix V Nirvana"
	category: DemonWedgeCategory;
	element?: ElementType; // Only for Characters category
	blueprint: BlueprintSource;
	additionalMaterials?: AdditionalMaterial[]; // Optional material2, material3
}

// Cumulative costs including forging
export interface DemonWedgeLevelCost {
	level: number; // 0-10
	coins: number;
	carmineGlobules: number;
	blueprintCopies: number; // Number of blueprint copies needed
}

// Demon wedge cost summary
export interface DemonWedgeCostSummary {
	coins: number;
	carmineGlobules: number;
	blueprints: Map<string, DemonWedgeCostBluePrint>; // Blueprint name -> quantity
	materials: Map<string, DemonWedgeCostAdditionalMaterials>; // Material name -> quantity
}

export interface DemonWedgeCostBluePrint {
	quantity: number;
	source?: string;
}
export interface DemonWedgeCostAdditionalMaterials {
	quantity: number;
	rarity?: Rarity;
}
