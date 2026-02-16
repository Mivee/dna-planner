import type { Character } from "./character";

export interface ElementUpgradeMaterials {
	element: Character["element"];
	ascensionMaterials: {
		t1: string; // Green
		t2: string; // Blue
		t3: string; // Purple
	};
	forgingMaterials: {
		t1: string; // Green
		t2: string; // Blue
		t3: string; // Purple
		t4: string; // Gold
	};
}
