<template>
    <div>
        <div>
            xp {{ summary.exp }}
        </div>
        <div>
            coins {{ summary.coins }}
        </div>
        <div>
            Green Elem Mats ({{
                getMissingMaterialString(summary.character.ascensionMaterials.T1_Green, 'Green', "Ascention") }})

        </div>
        <div>
            Blue Elem Mats {{ getMissingMaterialString(summary.character.ascensionMaterials.T1_Green, "Blue",
                "Ascention") }}
        </div>
        <div>
            Purple Elem Mats ({{ getMissingMaterialString(summary.character.ascensionMaterials.T1_Green, 'Purple',
                "Ascention") }})
        </div>
        <!-- Talens -->
        <div>
            Green Elem Mats ({{ getMissingMaterialString(summary.skills.forgingMaterials.T1Green, 'Green', "Forging")
            }})
        </div>
        <div>
            Blue Elem Mats ({{ getMissingMaterialString(summary.skills.forgingMaterials.T2Blue, 'Blue', "Forging") }})
        </div>
        <div>
            Purple Elem Mats ({{ getMissingMaterialString(summary.skills.forgingMaterials.T3Purple, 'Purple', "Forging")
            }})
        </div>

    </div>
</template>
<script lang="ts" setup>
import { useCharacter } from '../composeables/useCharacter';
import type { SkillUpgradeConfig, BaseUpgradeConfig } from '../types/upgradeConfig';
import { characterLevelingMaterials } from '../definitions/characterAscension';
import { computed } from 'vue';
import { CharacterSkillLevels, skillTrack1Materials } from '../definitions/skillLeveling';
import type { SkillLevelingMaterial } from '../types/skillLeveling';
import type { SkillLevel } from '../types/skill';
import type { CharacterLevelingMaterial } from '../types/characterLeveling';
import type { Range } from '../types/range';
import { useInventory } from '../stores/inventory';
import { useUiStore } from '../stores/ui';

interface Props {
    upgradeConfig: UpgradeConfig
}
const props = defineProps<Props>()

const { upgradeMaterials, buildSummary } = useCharacter(props.upgradeConfig.name!);
const summary = computed(() => buildSummary(characterAscensionMaterials.value, [...skillLevelMaterials.value.passive, ...skillLevelMaterials.value.skill, ...skillLevelMaterials.value.ult]));
const characterAscensionMaterials = computed(() => {
    const start = characterLevelingMaterials.find(mat => mat.level == props.upgradeConfig.level.start)!;
    const end = characterLevelingMaterials.find(mat => mat.level == props.upgradeConfig.level.end)!;
    return { start, end } as LevelRange<CharacterLevelingMaterial>
});

const skillLevelMaterials = computed(() => {

    // skill
    let skillMaterials = [getSkillMaterials(props.upgradeConfig.skill!.current, props.upgradeConfig.skill!.target)];
    let skillNodeMaterials = getNodeMaterials(props.upgradeConfig.skill!);
    skillMaterials.push(...skillNodeMaterials.map(oo => toSkillLevel(oo)));

    // ult
    let ultimateMaterials = [getSkillMaterials(props.upgradeConfig.ult!.current, props.upgradeConfig.ult!.target)];
    let ultimateNodeMaterials = getNodeMaterials(props.upgradeConfig.ult!);
    skillMaterials.push(...ultimateNodeMaterials.map(oo => toSkillLevel(oo)));

    //passive
    let passiveMaterials = [getSkillMaterials(props.upgradeConfig.passive!.current, props.upgradeConfig.passive!.target)];
    let passiveNodeMaterials = getNodeMaterials(props.upgradeConfig.passive!);
    skillMaterials.push(...passiveNodeMaterials.map(oo => toSkillLevel(oo)));

    return { skill: skillMaterials, ult: ultimateMaterials, passive: passiveMaterials };
});

function getSkillMaterials(current: number, target: number) {
    const start = CharacterSkillLevels.find(mat => mat.level == current);
    const end = CharacterSkillLevels.find(mat => mat.level == target);

    return mergeRange({ start, end });
}

function mergeRange(range: Range<SkillLevel>) {
    return {
        coinsGroupA: range.end!.coinsGroupA - range.start!.coinsGroupA,
        coinsGroupB: range.end!.coinsGroupA - range.start!.coinsGroupA,
        forgingMaterials: {
            T1Green: range.end!.forgingMaterials.T1Green - range.start!.forgingMaterials.T1Green,
            T2Blue: range.end!.forgingMaterials.T2Blue - range.start!.forgingMaterials.T2Blue,
            T3Purple: range.end!.forgingMaterials.T3Purple - range.start!.forgingMaterials.T3Purple,
            T4Gold: range.end!.forgingMaterials.T4Gold - range.start!.forgingMaterials.T4Gold,
        },
        level: range.end!.level - range.start!.level,
        lunoMomento: range.end!.lunoMomento - range.start!.lunoMomento,
        nocturnalEcho: range.end!.nocturnalEcho - range.start!.nocturnalEcho,
        twilightTread: range.end!.nocturnalEcho - range.start!.nocturnalEcho,
    } as SkillLevel
}

function getNodeMaterials(skill: SkillUpgrade) {
    let results: SkillLevelingMaterial[] = [];
    let m: SkillLevelingMaterial;
    if (skill.node1?.isUnlocked == true) {
        m = skillTrack1Materials.find(mat => mat.node == 1)!;
        results.push(m);
    }
    if (skill.node2?.isUnlocked == true) {
        m = skillTrack1Materials.find(mat => mat.node == 2)!;
        results.push(m);
    }

    return results;
}

function toSkillLevel(m: SkillLevelingMaterial) {
    return {
        coinsGroupA: m.coins.default,
        coinsGroupB: m.coins.default,
        forgingMaterials: {
            T1Green: m.ascensionMaterials.T1_Green,
            T2Blue: m.ascensionMaterials.T2_Blue,
            T3Purple: m.ascensionMaterials.T3_Purple,
            T4Gold: 0
        },
        level: 0,
        lunoMomento: 0,
        nocturnalEcho: m.forgingMaterials.NocturnalEcho,
        twilightTread: m.forgingMaterials.TwilightTread,
    } as SkillLevel
}

type materialColor = "Green" | "Blue" | "Purple" | "Gold";
type materialType = "Ascension" | "Forging";

function getMaterialName(color: materialColor, type: "Ascension" | "Forging") {
    if (type == "Ascension") {

        switch (color) {
            case "Green": return upgradeMaterials.value?.ascensionMaterials.t1;
            case "Blue": return upgradeMaterials.value?.ascensionMaterials.t2;
            case "Purple": return upgradeMaterials.value?.ascensionMaterials.t3;
            default: return null;
        }
    }
    else if (type == "Forging") {
        switch (color) {
            case "Green": return upgradeMaterials.value?.forgingMaterials.t1;
            case "Blue": return upgradeMaterials.value?.forgingMaterials.t2;
            case "Purple": return upgradeMaterials.value?.forgingMaterials.t3;
            case "Gold": return upgradeMaterials.value?.forgingMaterials.t4;
            default: return null;
        }
    }
    return null;
}

const { getAmount } = useInventory();

function getMissingMaterialString(amount: number, color: materialColor, type: materialType) {
    const { plannerMode } = useUiStore();
    const materialName = getMaterialName(color, type);

    let missing = amount;
    if (plannerMode == "Inventory") {
        const inventoryAmount = getAmount(materialName!);
        missing = Math.max(amount - inventoryAmount, 0)
    }

    return `${missing}x ${materialName}`;
}
</script>