export type ElementType =
	| "Anemo"
	| "Electro"
	| "Pyro"
	| "Hydro"
	| "Lumino"
	| "Umbro";

export type DaemonWedgeCategory =
	| "Characters"
	| "Melee Weapon"
	| "Ranged Weapon"
	| "Melee Consonance Weapon"
	| "Ranged Consonance Weapon";

export type BlueprintRarity = "Blue" | "Purple" | "Gold";

export interface BlueprintSource {
	name: string;
	rarity: BlueprintRarity;
	materialsPerCopy: number; // Materials needed per blueprint copy
}

export interface AdditionalMaterial {
	name: string;
	quantityPerCopy: number; // Quantity needed per blueprint copy
}

export interface DaemonWedge {
	id: number;
	type: string; // e.g., "Phoenix V", "Siren II", "Cerberus VIII"
	name: string; // e.g., "Nirvana", "Blessing", "Impetus"
	displayName: string; // Combined: "Phoenix V Nirvana"
	category: DaemonWedgeCategory;
	element?: ElementType; // Only for Characters category
	blueprintSource: BlueprintSource;
	additionalMaterials?: AdditionalMaterial[]; // Optional material2, material3
}

// Cumulative costs including forging
export interface DaemonWedgeLevelCost {
	level: number; // 0-10
	coins: number;
	carmineGlobules: number;
	blueprintCopies: number; // Number of blueprint copies needed
}

// Daemon wedge cost summary
export interface DaemonWedgeCostSummary {
	coins: number;
	carmineGlobules: number;
	blueprints: Map<string, number>; // Blueprint name -> quantity
	materials: Map<string, number>; // Material name -> quantity
}
