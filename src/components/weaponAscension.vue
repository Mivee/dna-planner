<template>
    <div>
        <div>
            <img :src="imgSource" />
        </div>
        <select v-model="upgradeConfig.name" class="bg-primary text-on-primary">
            <option v-for="value in weapons">
                {{ value.name }}
            </option>
        </select>
        <div>
            <RangeSelect v-model:range="upgradeConfig.level" :options="weaponsLevels" select-color="Primary"
                select-text="Primary" />
        </div>
        <WeaponMaterials v-if="hasWeaponSelected" :upgrade-config="upgradeConfig" :key="selectedWeapon" />
        <input type="checkbox" v-model="includeForge" />
        <Forge v-if="selectedWeapon && includeForge" :weapon="selectedWeapon" />
    </div>
</template>
<script lang="ts" setup>
import type { WeaponUpgradeConfig } from '../types/upgradeConfig';
import { computed, ref } from 'vue';
import WeaponMaterials from './WeaponMaterials.vue';
import Forge from './weaponForge.vue';
import { weapons, weaponLevelingMaterials } from '../definitions/weapon';
import RangeSelect from './rangeSelect.vue';



const weaponsLevels = computed(() => weaponLevelingMaterials.map(x => x.level));

const imgSource = computed(() => "");

const hasWeaponSelected = computed(() => !!upgradeConfig.value.name)

const selectedWeapon = computed(() => upgradeConfig.value.name || "");
const includeForge = ref(false);

const upgradeConfig = ref<WeaponUpgradeConfig>({
    name: "",
    level: { start: weaponsLevels.value[0], end: weaponsLevels.value[0] },
    type: "Weapon",
});
</script>