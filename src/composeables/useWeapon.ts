import { ref } from "vue";
import { weapons } from "../definitions/weapon";
import { weaponUpgradeMaterials } from "../definitions/weapon";
import type { Weapon } from "../types/weapon";
import type { WeaponLevelingMaterial } from "../types/ascention";

export function useWeapon(name: string) {
	const weapon = ref(weapons.find((w) => w.name == name));

	const materials = ref(getUpgradeMaterialsForWeapon(weapon.value!)!);

	function buildSummary(items: WeaponLevelingMaterial[]) {
		debugger;
		return items.reduce(
			(acc, val) => {
				//asc
				acc.ascensionMaterials.primary.T1_Green +=
					val.ascensionMaterials.primary.T1_Green;
				acc.ascensionMaterials.primary.T2_Blue +=
					val.ascensionMaterials.primary.T2_Blue;
				acc.ascensionMaterials.primary.T3_Purple +=
					val.ascensionMaterials.primary.T3_Purple;
				acc.ascensionMaterials.secondary.T1_Green +=
					val.ascensionMaterials.secondary.T1_Green;
				acc.ascensionMaterials.secondary.T2_Blue +=
					val.ascensionMaterials.secondary.T2_Blue;
				acc.ascensionMaterials.secondary.T3_Purple +=
					val.ascensionMaterials.secondary.T3_Purple;

				//
				acc.coins!.default! += val.coins!.default!;

				acc.exp! += val.exp!;

				acc.forgingMaterials.T1_Green += val.forgingMaterials.T1_Green;
				acc.forgingMaterials.T2_Blue += val.forgingMaterials.T2_Blue;

				return acc;
			},
			{
				ascensionMaterials: {
					primary: { T1_Green: 0, T2_Blue: 0, T3_Purple: 0 },
					secondary: { T1_Green: 0, T2_Blue: 0, T3_Purple: 0 },
				},
				forgingMaterials: { T1_Green: 0, T2_Blue: 0 },
				coins: { default: 0 },
				exp: 0,
			} as WeaponLevelingMaterial
		);
	}

	return {
		weapon,
		upgradeMaterials: materials,
		buildSummary,
	};
}

function getUpgradeMaterialsForWeapon(weapon: Weapon) {
	return weaponUpgradeMaterials.find(
		(m) => m.weaponType === weapon.weaponType
	);
}
