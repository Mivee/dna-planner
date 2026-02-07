import type { CharacterCodes } from "./characterCodes";

export interface Character {
	name: string;
	rank: "A" | "B";
	id: number;
	element: "Lumino" | "Pyro" | "Umbro" | "Anemo" | "Electro" | "Hydro";
	source: string;
	nocturnalEchoMaterial: string;
	skillUpgradeMaterials: {
		t1: string;
		t2: string;
		t3: string;
	};
	consonanceWeapon?: string;
	imagecode?: CharacterCodes;
}
