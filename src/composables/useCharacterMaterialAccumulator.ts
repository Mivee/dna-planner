import { useCharacter } from "./useCharacter";
import { characterLevelingMaterials } from "../definitions/characterAscension";
import { elementUpgradeMaterials } from "../definitions/character";
import {
	CharacterSkillLevels,
	skillTrack1Materials,
} from "../definitions/skillLeveling";
import type { CharacterLevelingMaterial } from "../types/characterLeveling";
import type { LevelRange } from "../types/range";
import type { SkillLevelCost } from "../types/skill";
import type { SkillLevelingMaterial } from "../types/skillLeveling";
import type {
	CharacterUpgradeConfig,
	SkillUpgradeConfig,
} from "../types/upgradeConfig";
import { type MaterialTotals, addToMap } from "./useMaterialTotals";

export function accumulateCharacterMaterials(
	config: CharacterUpgradeConfig,
	totals: MaterialTotals
) {
	if (!config.name) return;

	const { buildSummary, character } = useCharacter(config.name);
	if (!character.value) return;

	const elementMats = elementUpgradeMaterials.find(
		(m) => m.element === character.value?.element
	);

	const start = characterLevelingMaterials.find(
		(mat) => mat.level == config.level.start
	);
	const end = characterLevelingMaterials.find(
		(mat) => mat.level == config.level.end
	);
	if (!start || !end) return;

	const range = { start, end } as LevelRange<CharacterLevelingMaterial>;
	const summary = buildSummary(range, calculateSkillMaterials(config));

	totals.coins += summary.coins || 0;
	totals.exp.characters += summary.exp || 0;
	totals.ascension.green +=
		summary.character.ascensionMaterials.T1_Green || 0;
	totals.ascension.blue += summary.character.ascensionMaterials.T2_Blue || 0;
	totals.ascension.purple +=
		summary.character.ascensionMaterials.T3_Purple || 0;
	totals.forging.green += summary.skills.forgingMaterials.T1Green || 0;
	totals.forging.blue += summary.skills.forgingMaterials.T2Blue || 0;
	totals.forging.purple += summary.skills.forgingMaterials.T3Purple || 0;

	if (elementMats) {
		if (summary.character.ascensionMaterials.T1_Green > 0)
			addToMap(
				totals.ascensionDetails,
				elementMats.ascensionMaterials.t1,
				"green",
				summary.character.ascensionMaterials.T1_Green
			);
		if (summary.character.ascensionMaterials.T2_Blue > 0)
			addToMap(
				totals.ascensionDetails,
				elementMats.ascensionMaterials.t2,
				"blue",
				summary.character.ascensionMaterials.T2_Blue
			);
		if (summary.character.ascensionMaterials.T3_Purple > 0)
			addToMap(
				totals.ascensionDetails,
				elementMats.ascensionMaterials.t3,
				"purple",
				summary.character.ascensionMaterials.T3_Purple
			);

		if (summary.skills.forgingMaterials.T1Green > 0)
			addToMap(
				totals.forgingDetails,
				elementMats.forgingMaterials.t1,
				"green",
				summary.skills.forgingMaterials.T1Green
			);
		if (summary.skills.forgingMaterials.T2Blue > 0)
			addToMap(
				totals.forgingDetails,
				elementMats.forgingMaterials.t2,
				"blue",
				summary.skills.forgingMaterials.T2Blue
			);
		if (summary.skills.forgingMaterials.T3Purple > 0)
			addToMap(
				totals.forgingDetails,
				elementMats.forgingMaterials.t3,
				"purple",
				summary.skills.forgingMaterials.T3Purple
			);
	}
}

function calculateSkillMaterials(config: CharacterUpgradeConfig): SkillLevelCost[] {
	const skillMaterials: SkillLevelCost[] = [];

	if (config.skill) {
		skillMaterials.push(
			getSkillMaterials(config.skill.current, config.skill.target)
		);
		skillMaterials.push(...getNodeMaterials(config.skill));
	}
	if (config.ult) {
		skillMaterials.push(
			getSkillMaterials(config.ult.current, config.ult.target)
		);
		skillMaterials.push(...getNodeMaterials(config.ult));
	}
	if (config.passive) {
		skillMaterials.push(
			getSkillMaterials(config.passive.current, config.passive.target)
		);
		skillMaterials.push(...getNodeMaterials(config.passive));
	}

	return skillMaterials;
}

function getSkillMaterials(current: number, target: number): SkillLevelCost {
	const start = CharacterSkillLevels.find((mat) => mat.level == current);
	const end = CharacterSkillLevels.find((mat) => mat.level == target);

	if (!start || !end) {
		return {
			coinsGroupA: 0,
			coinsGroupB: 0,
			forgingMaterials: { T1Green: 0, T2Blue: 0, T3Purple: 0, T4Gold: 0 },
			level: 0,
			lunoMomento: 0,
			nocturnalEcho: 0,
			twilightTread: 0,
		} as SkillLevelCost;
	}

	return {
		coinsGroupA: end.coinsGroupA - start.coinsGroupA,
		coinsGroupB: end.coinsGroupB - start.coinsGroupB,
		forgingMaterials: {
			T1Green:
				end.forgingMaterials.T1Green - start.forgingMaterials.T1Green,
			T2Blue: end.forgingMaterials.T2Blue - start.forgingMaterials.T2Blue,
			T3Purple:
				end.forgingMaterials.T3Purple - start.forgingMaterials.T3Purple,
			T4Gold: end.forgingMaterials.T4Gold - start.forgingMaterials.T4Gold,
		},
		level: end.level - start.level,
		lunoMomento: end.lunoMomento - start.lunoMomento,
		nocturnalEcho: end.nocturnalEcho - start.nocturnalEcho,
		twilightTread: end.twilightTread - start.twilightTread,
	} as SkillLevelCost;
}

function getNodeMaterials(skill: SkillUpgradeConfig): SkillLevelCost[] {
	const results: SkillLevelCost[] = [];
	if (skill.node1?.isUnlocked) {
		const m = skillTrack1Materials.find((mat) => mat.node == 1);
		if (m) results.push(toSkillLevel(m));
	}
	if (skill.node2?.isUnlocked) {
		const m = skillTrack1Materials.find((mat) => mat.node == 2);
		if (m) results.push(toSkillLevel(m));
	}
	return results;
}

function toSkillLevel(m: SkillLevelingMaterial): SkillLevelCost {
	return {
		coinsGroupA: m.coins.default,
		coinsGroupB: m.coins.default,
		forgingMaterials: {
			T1Green: m.ascensionMaterials.T1_Green,
			T2Blue: m.ascensionMaterials.T2_Blue,
			T3Purple: m.ascensionMaterials.T3_Purple,
			T4Gold: 0,
		},
		level: 0,
		lunoMomento: 0,
		nocturnalEcho: m.forgingMaterials.NocturnalEcho,
		twilightTread: m.forgingMaterials.TwilightTread,
	} as SkillLevelCost;
}
