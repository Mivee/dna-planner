import type { Weapon } from "./weapon";

export interface WeaponUpgradeMaterials {
	weaponType: Weapon["weaponType"];
	forgingMaterials: {
		t1: string; // Green
		t2: string; // Blue
	};
	ascensionMaterials: {
		primary: string;
		secondary: string;
	};
}
