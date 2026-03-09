import { useWeapon } from "./useWeapon";
import { weaponLevelingMaterials } from "../definitions/weapon";
import type { WeaponLevelingMaterial } from "../types/ascension";
import type { LevelRange } from "../types/range";
import type { WeaponUpgradeConfig } from "../types/upgradeConfig";
import { type MaterialTotals, addToMap } from "./useMaterialTotals";

function getWeaponAscensionInventoryName(
	materialName: string,
	tier: "green" | "blue" | "purple"
): string {
	if (tier === "green") return `Basic Weapon Component: ${materialName}`;
	if (tier === "blue") return `Intermediate Weapon Component: ${materialName}`;
	return `Advanced Weapon Component: ${materialName}`;
}

export function accumulateWeaponMaterials(
	config: WeaponUpgradeConfig,
	totals: MaterialTotals
) {
	if (!config.name) return;

	const { weapon, upgradeMaterials, buildSummary } = useWeapon(config.name);
	if (!weapon.value || !upgradeMaterials.value) return;

	const start = weaponLevelingMaterials.find(
		(mat) => mat.level == config.level.start
	);
	const end = weaponLevelingMaterials.find(
		(mat) => mat.level == config.level.end
	);
	if (!start || !end) return;

	const range = { start, end } as LevelRange<WeaponLevelingMaterial>;
	const summary = buildSummary(range);

	totals.coins += summary.coins?.default || 0;
	totals.forging.green += summary.forgingMaterials.T1_Green || 0;
	totals.forging.blue += summary.forgingMaterials.T2_Blue || 0;
	totals.exp.weapons += summary.exp || 0;

	const mats = upgradeMaterials.value;

	if (summary.forgingMaterials.T1_Green > 0)
		addToMap(
			totals.forgingDetails,
			mats.forgingMaterials.t1,
			"green",
			summary.forgingMaterials.T1_Green
		);
	if (summary.forgingMaterials.T2_Blue > 0)
		addToMap(
			totals.forgingDetails,
			mats.forgingMaterials.t2,
			"blue",
			summary.forgingMaterials.T2_Blue
		);

	const primaryAscension = [
		{ value: summary.ascensionMaterials.primary.T1_Green, tier: "green" as const, name: mats.ascensionMaterials.primary },
		{ value: summary.ascensionMaterials.primary.T2_Blue, tier: "blue" as const, name: mats.ascensionMaterials.primary },
		{ value: summary.ascensionMaterials.primary.T3_Purple, tier: "purple" as const, name: mats.ascensionMaterials.primary },
		{ value: summary.ascensionMaterials.secondary.T1_Green, tier: "green" as const, name: mats.ascensionMaterials.secondary },
		{ value: summary.ascensionMaterials.secondary.T2_Blue, tier: "blue" as const, name: mats.ascensionMaterials.secondary },
		{ value: summary.ascensionMaterials.secondary.T3_Purple, tier: "purple" as const, name: mats.ascensionMaterials.secondary },
	];

	for (const entry of primaryAscension) {
		if (entry.value > 0) {
			addToMap(
				totals.ascensionDetails,
				getWeaponAscensionInventoryName(entry.name, entry.tier),
				entry.tier,
				entry.value
			);
		}
	}
}
