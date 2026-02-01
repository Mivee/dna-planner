<template>
    <div>

        <div>
            <img :src="imgSource" />
        </div>
        <select v-model="upgradeConfig.name">
            <option v-for="value in weapons">
                {{ value.name }}
            </option>
        </select>
        <div>
            <select v-model="upgradeConfig.level.start">
                <option v-for="lvl in weaponsLevels">
                    {{ lvl }}
                </option>
            </select>
            <select v-model="upgradeConfig.level.end">
                <option v-for="lvl in weaponsLevels">
                    {{ lvl }}
                </option>
            </select>
        </div>
        <WeaponMaterials v-if="hasWeaponSelected" :upgrade-config="upgradeConfig" :key="selectedWeapon" />
        <input type="checkbox" v-model="includeForge" />
        <Forge v-if="selectedWeapon && includeForge" :weapon="selectedWeapon" />
    </div>
</template>
<script lang="ts" setup>
import type { WeaponUpgrade } from '../types/upgradeConfig';
import { computed, ref } from 'vue';
import WeaponMaterials from './weaponMaterials.vue';
import Forge from './weaponForge.vue';
import { weapons, weaponLevelingMaterials } from '../definitions/weapon';



const weaponsLevels = computed(() => weaponLevelingMaterials.map(x => x.level));

const imgSource = computed(() => "");

const hasWeaponSelected = computed(() => !!upgradeConfig.value.name)

const selectedWeapon = computed(() => upgradeConfig.value.name || "");
const includeForge = ref(false);

const upgradeConfig = ref<WeaponUpgrade>({
    name: "",
    level: { start: weaponsLevels.value[0], end: weaponsLevels.value[0] },
    type: "Weapon",
});
</script>