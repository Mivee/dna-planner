<template>
    <div>
        <div>
            xp {{ summary.exp }}
        </div>
        <div>
            coins {{ summary.coins!.default }}
        </div>
        <!-- Primary -->
        <div>
            Green Primary Mats {{ summary.ascensionMaterials.primary.T1_Green }} ({{getMaterialName('Primary', "Ascention") }})
        </div>
        <div>
            Blue Primary Mats {{ summary.ascensionMaterials.primary.T2_Blue }} ({{ getMaterialName('Primary', "Ascention")}})
        </div>
          <div>
            Purple Primary Mats {{ summary.ascensionMaterials.primary.T2_Blue }} ({{ getMaterialName('Primary', "Ascention")}})
        </div>

        <!-- Seconary -->
        <div>
           Green Secondary Mats {{ summary.ascensionMaterials.secondary.T1_Green }} ({{ getMaterialName('Secondary', "Ascention") }})
        </div>
        <div>
            Blue Secondary Mats {{ summary.ascensionMaterials.secondary.T2_Blue }} ({{ getMaterialName('Secondary', "Ascention") }})
        </div>
        <div>
            Purple Secondary Mats {{ summary.ascensionMaterials.secondary.T3_Purple }} ({{ getMaterialName('Secondary', "Ascention") }})
        </div>

        <!-- Forging -->
        <div>
           Green Secondary Mats {{ summary.ascensionMaterials.secondary.T1_Green }} ({{ getMaterialName('Green', "Forging") }})
        </div>
        <div>
            Blue Secondary Mats {{ summary.ascensionMaterials.secondary.T2_Blue }} ({{ getMaterialName('Blue', "Forging") }})
        </div>
    </div>
</template>
<script lang="ts" setup>
import type { UpgradeConfig } from '../types/upgradeConfig';
import { computed } from 'vue';
import { useWeapon } from '../composeables/useWeapon';
import { weaponLevelingMaterials } from '../definitions/weapon';

interface Props {
    upgradeConfig: UpgradeConfig
}
const props = defineProps<Props>()

const { upgradeMaterials, buildSummary } = useWeapon(props.upgradeConfig.name!);
const summary = computed(() => buildSummary(items.value));

const items = computed(() => {
    const start = weaponLevelingMaterials.findIndex(w => w.level == props.upgradeConfig.level.current);
    const end = weaponLevelingMaterials.findIndex(w => w.level == props.upgradeConfig.level.target);
    return weaponLevelingMaterials.filter((e, ix) => ix > start && ix <= end)
});


function getMaterialName(value: "Green" | "Blue" | "Primary" | "Secondary", type: "Ascention" | "Forging") {
    if (type == "Ascention") {

        switch (value) {
            case "Primary": return upgradeMaterials.value?.ascensionMaterials.primary;
            case "Secondary": return upgradeMaterials.value?.ascensionMaterials.secondary;
            default: return null;
        }
    }
    else if (type == "Forging") {
        switch (value) {
            case "Green": return upgradeMaterials.value?.forgingMaterials.t1;
            case "Blue": return upgradeMaterials.value?.forgingMaterials.t2;
            default: return null;
        }
    }
    return null;
}

</script>