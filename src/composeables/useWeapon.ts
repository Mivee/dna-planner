import { ref } from "vue";
import { weapons } from "../definitions/weapon";
import { weaponUpgradeMaterials } from "../definitions/weapon";
import type { Weapon } from "../types/weapon";
import type { WeaponLevelingMaterial } from "../types/ascension";
import type { LevelRange } from "../types/range";

export function useWeapon(name: string) {
	const weapon = ref(weapons.find((w) => w.name == name));

	const materials = ref(getUpgradeMaterialsForWeapon(weapon.value!)!);

	function buildSummary(items: LevelRange<WeaponLevelingMaterial>) {
		return {
			ascensionMaterials: {
				primary: {
					T1_Green:
						items.end!.ascensionMaterials!.primary.T1_Green -
						items.start!.ascensionMaterials!.primary.T1_Green,
					T2_Blue:
						items.end!.ascensionMaterials!.primary.T2_Blue -
						items.start!.ascensionMaterials!.primary.T2_Blue,
					T3_Purple:
						items.end!.ascensionMaterials!.primary.T3_Purple -
						items.start!.ascensionMaterials!.primary.T3_Purple,
				},
				secondary: {
					T1_Green:
						items.end!.ascensionMaterials!.secondary.T1_Green -
						items.start!.ascensionMaterials!.secondary.T1_Green,
					T2_Blue:
						items.end!.ascensionMaterials!.secondary.T2_Blue -
						items.start!.ascensionMaterials!.secondary.T2_Blue,
					T3_Purple:
						items.end!.ascensionMaterials!.secondary.T3_Purple -
						items.start!.ascensionMaterials!.secondary.T3_Purple,
				},
			},
			forgingMaterials: {
				T1_Green:
					items.end!.forgingMaterials!.T1_Green -
					items.start!.forgingMaterials!.T1_Green,
				T2_Blue:
					items.end!.forgingMaterials!.T2_Blue -
					items.start!.forgingMaterials!.T2_Blue,
			},
			coins: {
				default:
					(items.end!.coins!.default ?? 0) -
					(items.start!.coins!.default ?? 0),
			},
			exp: 0,
		} as WeaponLevelingMaterial;
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
