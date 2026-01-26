<template>
    <div>
        <div>
            xp {{ summary.exp }}
        </div>
        <div>
            coins {{ summary.coins }}
        </div>
        <div>
            Green Elem Mats {{ summary.character.ascensionMaterials.T1_Green }} ({{
                getMaterialName('Green', "Ascention") }})

        </div>
        <div>
            Blue Elem Mats {{ summary.character.ascensionMaterials.T1_Green }} ({{ getMaterialName('Blue', "Ascention")
            }})
        </div>
        <div>
            Purple Elem Mats {{ summary.character.ascensionMaterials.T1_Green }} ({{ getMaterialName('Purple',
                "Ascention") }})
        </div>
        <!-- Talens -->
        <div>
            Green Elem Mats {{ summary.skills.forgingMaterials.T1Green }} ({{ getMaterialName('Green', "Forging") }})
        </div>
        <div>
            Blue Elem Mats {{ summary.skills.forgingMaterials.T2Blue }} ({{ getMaterialName('Blue', "Forging") }})
        </div>
        <div>
            Purple Elem Mats {{ summary.skills.forgingMaterials.T3Purple }} ({{ getMaterialName('Purple', "Forging") }})
        </div>

    </div>
</template>
<script lang="ts" setup>
import { useCharacter } from '../composeables/useCharacter';
import type { SkillUpgrade, UpgradeConfig } from '../types/upgradeConfig';
import { characterLevelingMaterials } from '../definitions/characterAscention';
import { computed } from 'vue';
import { CharacterSkillLevels, skillTrack1Materials } from '../definitions/skillLeveling';
import type { SkillLevelingMaterial } from '../types/skillLeveling';
import type { SkillLevel } from '../types/skill';

interface Props {
    upgradeConfig: UpgradeConfig
}
const props = defineProps<Props>()

const { upgradeMaterials, buildSummary } = useCharacter(props.upgradeConfig.name!);
const summary = computed(() => buildSummary(characterAscentionMaterials.value, [...skillLevelMaterials.value.passive, ...skillLevelMaterials.value.skill, ...skillLevelMaterials.value.ult]));
const characterAscentionMaterials = computed(() => {
    const start = characterLevelingMaterials.findIndex(mat => mat.level == props.upgradeConfig.level.current);
    const end = characterLevelingMaterials.findIndex(mat => mat.level == props.upgradeConfig.level.target);
    return characterLevelingMaterials.filter((mat, ix) => {
        return ix >= start && ix <= end;
    });
});

const skillLevelMaterials = computed(() => {

    // skill
    let skillMaterials = getSkillMaterials(props.upgradeConfig.skill!.current, props.upgradeConfig.skill!.target);
    let skillNodeMaterials = getNodeMaterials(props.upgradeConfig.skill!);
    skillMaterials.push(...skillNodeMaterials.map(oo => toSkillLevel(oo)));

    // ult
    let ultimateMaterials = getSkillMaterials(props.upgradeConfig.ult!.current, props.upgradeConfig.ult!.target);
    let ultimateNodeMaterials = getNodeMaterials(props.upgradeConfig.ult!);
    skillMaterials.push(...ultimateNodeMaterials.map(oo => toSkillLevel(oo)));

    //passive
    let passiveMaterials = getSkillMaterials(props.upgradeConfig.passive!.current, props.upgradeConfig.passive!.target);
    let passiveNodeMaterials = getNodeMaterials(props.upgradeConfig.passive!);
    skillMaterials.push(...passiveNodeMaterials.map(oo => toSkillLevel(oo)));

    return { skill: skillMaterials, ult: ultimateMaterials, passive: passiveMaterials };
});

function getSkillMaterials(current: number, target: number) {
    const start = CharacterSkillLevels.findIndex(mat => mat.level == current);
    const end = CharacterSkillLevels.findIndex(mat => mat.level == target);

    return CharacterSkillLevels.filter((item, ix) => ix > start && ix <= end);
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

function getMaterialName(color: "Green" | "Blue" | "Purple" | "Gold", type: "Ascention" | "Forging") {
    if (type == "Ascention") {

        switch (color) {
            case "Green": return upgradeMaterials.value?.ascensionMaterials.t1;
            case "Blue": return upgradeMaterials.value?.ascensionMaterials.t2;
            case "Purple": return upgradeMaterials.value?.ascensionMaterials.t3;
            default: return null;
        }
    }
    else if (type == "Skill") {
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

</script>