<template>
    <div class="weapon-card">
        <!-- Title Section -->
        <div class="card-header">
            <h3 class="weapon-name">{{ selectedWeapon || 'Select Weapon' }}</h3>
        </div>

        <!-- Image & Summary Section -->
        <div class="card-body">
            <img :src="imgSource" class="weapon-image" :alt="selectedWeapon" v-if="imgSource" />
            <div class="weapon-select" v-else>
                <select v-model="upgradeConfig.name" class="weapon-dropdown">
                    <option value="">Select a weapon</option>
                    <option v-for="weapon in weapons" :key="weapon.name" :value="weapon.name">
                        {{ weapon.name }}
                    </option>
                </select>
            </div>
            
            <div class="upgrade-summary">
                <div class="summary-item">
                    <span class="summary-label">Level</span>
                    <RangeSelect v-model:range="upgradeConfig.level" :options="weaponsLevels" />
                </div>
                <div class="summary-item" v-if="includeForge">
                    <label class="forge-toggle">
                        <input type="checkbox" v-model="includeForge" />
                        <span>Include Forge Materials</span>
                    </label>
                </div>
            </div>
        </div>

        <!-- Materials Section -->
        <div class="card-footer">
            <WeaponMaterials v-if="hasWeaponSelected" :upgrade-config="upgradeConfig" :key="selectedWeapon" />
            <Forge v-if="selectedWeapon && includeForge" :weapon="selectedWeapon" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { WeaponUpgradeConfig } from '../types/upgradeConfig';
import { computed, ref } from 'vue';
import WeaponMaterials from './weaponMaterials.vue';
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

<style scoped>
.weapon-card {
    background: var(--color-bg-card);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.3s ease;
}

.weapon-card:hover {
    border-color: rgba(230, 197, 116, 0.3);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
    background: linear-gradient(135deg, rgba(230, 197, 116, 0.1), rgba(91, 163, 208, 0.1));
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.weapon-name {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-text-primary);
}

.card-body {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 1.25rem;
    padding: 1.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.weapon-image {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
    border: 2px solid rgba(255, 255, 255, 0.1);
}

.weapon-select {
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.03);
    border: 2px dashed rgba(255, 255, 255, 0.1);
    border-radius: 8px;
}

.weapon-dropdown {
    width: 100%;
    padding: 0.5rem;
    background: var(--color-bg-secondary);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    color: var(--color-text-primary);
    font-size: 0.875rem;
}

.upgrade-summary {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    justify-content: center;
}

.summary-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.summary-label {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    font-weight: 500;
}

.forge-toggle {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    font-size: 0.875rem;
    color: var(--color-text-secondary);
}

.forge-toggle input[type="checkbox"] {
    cursor: pointer;
}

.card-footer {
    padding: 1.25rem;
}
</style>
