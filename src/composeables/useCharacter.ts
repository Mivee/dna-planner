import { elementUpgradeMaterials } from "../definitions/character";
import type { Character } from "../types/character";
import { characters } from "../definitions/character";
import { computed, ref } from "vue";
import type { CharacterLevelingMaterial } from "../types/ascention";
import type { SkillLevel } from "../types/skill";
import type { BuildSummary } from "../types/characterSummary";

export function getElementMaterials(character: Character) {
  return elementUpgradeMaterials.find((m) => m.element === character.element);
}

export function useCharacter(name: string) {
  const character = ref(characters.find((x) => x.name == name));
  const upgradeMaterials = computed(() =>
    elementUpgradeMaterials.find((eu) => eu.element == character.value?.element)
  );

  function buildSummary(
    characterMaterials: CharacterLevelingMaterial[],
    skillMaterials: SkillLevel[]
  ) {
 
    let skillCosts = reduceSkillItems(skillMaterials);
    let characterItems = buildCharacterAscentionCost(characterMaterials);
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
          T1Green: skillCosts.forgingMaterials.T1Green,
          T2Blue:  skillCosts.forgingMaterials.T2Blue,
          T3Purple:  skillCosts.forgingMaterials.T3Purple,
          T4Gold:  skillCosts.forgingMaterials.T4Gold,
        },
      },
      coins: isA ? characterItems.coins.groupA + skillCosts.coinsGroupA : characterItems.coins.groupB + skillCosts.coinsGroupB,
      exp: characterItems.exp,
      lunoMomento: skillCosts.lunoMomento,
      nocturnalEcho: skillCosts.nocturnalEcho,
      twilightTread: skillCosts.twilightTread,
    } as BuildSummary;
  }

  return {
    character,
    upgradeMaterials,
    buildSummary,
  };
}

function buildCharacterAscentionCost(materials: CharacterLevelingMaterial[]) {
  let result: CharacterLevelingMaterial = {
    ascensionMaterials: {
      T1_Green: 0,
      T2_Blue: 0,
      T3_Purple: 0,
    },
    coins: { groupA: 0, groupB: 0 },
    exp: 0,
    forgingMaterials: { T1_Green: 0, T2_Blue: 0 },
    level: "",
  };

  for (let l of materials) {
    result.ascensionMaterials.T1_Green += l.ascensionMaterials.T1_Green;
    result.ascensionMaterials.T2_Blue += l.ascensionMaterials.T2_Blue;
    result.coins.groupA += l.coins.groupA;
    result.coins.groupB += l.coins.groupB;
    result.exp! += l.exp ?? 0;
    result.forgingMaterials.T1_Green += l.forgingMaterials.T1_Green;
    result.forgingMaterials.T2_Blue += l.forgingMaterials.T2_Blue;
  }

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
