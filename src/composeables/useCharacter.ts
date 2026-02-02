import { elementUpgradeMaterials } from "../definitions/character";
import type { Character } from "../types/character";
import { characters } from "../definitions/character";
import { computed, ref } from "vue";
import type { CharacterLevelingMaterial } from "../types/ascention";
import type { SkillLevel } from "../types/skill";
import type { BuildSummary } from "../types/characterSummary";
import type { Range } from "../types/range";

export function getElementMaterials(character: Character) {
	return elementUpgradeMaterials.find((m) => m.element === character.element);
}

export function useCharacter(name: string) {
	const character = ref(characters.find((x) => x.name == name));
	const upgradeMaterials = computed(() =>
		elementUpgradeMaterials.find(
			(eu) => eu.element == character.value?.element
		)
	);

	function buildSummary(
		materials: Range<CharacterLevelingMaterial>,
		skillMaterials: SkillLevel[]
	) {
		let skillCosts = reduceSkillItems(skillMaterials);
		let characterItems = buildCharacterAscentionCost(materials);
		const isA = character.value?.rank == "A";
		return {
			character: {
				ascensionMaterials: {
					T1_Green: characterItems.ascensionMaterials.T1_Green,
					T2_Blue: characterItems.ascensionMaterials.T2_Blue,
					T3_Purple: characterItems.ascensionMaterials.T3_Purple,
				},
				forgingMaterials: {
					T1Green: characterItems.forgingMaterials.T1_Green,
					T2Blue: characterItems.forgingMaterials.T2_Blue,
				},
			},
			skills: {
				forgingMaterials: {
					T1Green:
						characterItems.forgingMaterials.T1_Green +
						skillCosts.forgingMaterials.T1Green,
					T2Blue:
						characterItems.forgingMaterials.T2_Blue +
						skillCosts.forgingMaterials.T2Blue,
					T3Purple: skillCosts.forgingMaterials.T3Purple,
					T4Gold: skillCosts.forgingMaterials.T4Gold,
				},
			},
			coins: isA
				? characterItems.coins.groupA + skillCosts.coinsGroupA
				: characterItems.coins.groupB + skillCosts.coinsGroupB,
			exp: characterItems.exp,
			lunoMomento: skillCosts.lunoMomento,
			nocturnalEcho: skillCosts.nocturnalEcho,
			twilightTread: skillCosts.twilightTread,
		} as BuildSummary;
	}

	const imageUrl = computed(() => {
		return (
			"assets/characters/" +
			character.value?.name.toLowerCase().replace(" ", "-") +
			".png"
		);
	});

	return {
		character,
		upgradeMaterials,
		buildSummary,
		imageUrl,
	};
}
function buildCharacterAscentionCost(
	materials: Range<CharacterLevelingMaterial>
) {
	let result: CharacterLevelingMaterial = {
		ascensionMaterials: {
			T1_Green:
				(materials.end?.ascensionMaterials?.T1_Green ?? 0) -
				(materials.start!.ascensionMaterials.T1_Green ?? 0),
			T2_Blue:
				(materials.end!.ascensionMaterials.T2_Blue ?? 0) -
				(materials.start!.ascensionMaterials.T2_Blue ?? 0),
			T3_Purple:
				(materials.end!.ascensionMaterials.T3_Purple ?? 0) -
				(materials.start!.ascensionMaterials.T3_Purple ?? 0),
		},
		coins: {
			groupA:
				(materials.end?.coins?.groupA ?? 0) -
				(materials.start?.coins?.groupA ?? 0),
			groupB:
				(materials.end?.coins?.groupB ?? 0) -
				(materials.start?.coins?.groupB ?? 0),
		},
		exp: (materials.end?.exp ?? 0) - (materials.start?.exp ?? 0),
		forgingMaterials: {
			T1_Green:
				(materials.end?.forgingMaterials?.T1_Green ?? 0) -
				(materials.start?.forgingMaterials?.T1_Green ?? 0),
			T2_Blue:
				(materials.end?.forgingMaterials?.T2_Blue ?? 0) -
				(materials.start?.forgingMaterials?.T2_Blue ?? 0),
		},
		level: "",
	};

	return result;
}
function reduceSkillItems(items: SkillLevel[]) {
	let result: SkillLevel = {
		coinsGroupA: 0,
		coinsGroupB: 0,
		forgingMaterials: {
			T1Green: 0,
			T2Blue: 0,
			T3Purple: 0,
			T4Gold: 0,
		},
		level: 0,
		lunoMomento: 0,
		nocturnalEcho: 0,
		twilightTread: 0,
	};

	for (let item of items) {
		result.coinsGroupA += item.coinsGroupA;
		result.coinsGroupB += item.coinsGroupB;
		result.forgingMaterials.T1Green += item.forgingMaterials.T1Green;
		result.forgingMaterials.T2Blue += item.forgingMaterials.T2Blue;
		result.forgingMaterials.T3Purple += item.forgingMaterials.T3Purple;
		result.forgingMaterials.T4Gold += item.forgingMaterials.T4Gold;
		result.lunoMomento += item.lunoMomento;
		result.nocturnalEcho += item.nocturnalEcho;
		result.twilightTread += item.twilightTread;
	}

	return result;
}
