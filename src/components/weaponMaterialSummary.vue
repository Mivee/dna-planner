<template>
    <div class="bg-secondary border border-white/10 rounded-lg overflow-hidden sticky top-4 h-fit">
        <div class="p-4 bg-gradient-to-br from-accent/10 to-info/10 border-b border-white/10">
            <h3 class="text-lg font-bold text-on-primary flex items-center gap-2 m-0">
                <i class="fas fa-list-check text-accent"></i>
                Total Materials
            </h3>
        </div>

        <div class="p-4 flex flex-col gap-6">
            <div class="flex flex-col gap-2">
                <h4 class="text-xs font-semibold text-on-secondary uppercase tracking-wider m-0 mb-2">Currency</h4>
                <div
                    class="flex items-center gap-3 p-2 bg-secondary/3 rounded-md hover:bg-white/[0.05] transition-colors">
                    <i class="fas fa-coins w-5 text-center text-accent"></i>
                    <span class="flex-1 text-sm text-on-primary">Coins</span>
                    <span class="font-bold text-accent text-sm">{{ totalMaterials.coins }}</span>
                </div>
                <div
                    class="flex items-center gap-3 p-2 bg-secondary/3 rounded-md hover:bg-white/[0.05] transition-colors">
                    <i class="fas fa-star w-5 text-center text-accent"></i>
                    <span class="flex-1 text-sm text-on-primary">XP</span>
                    <span class="font-bold text-accent text-sm">{{ totalMaterials.exp }}</span>
                </div>
            </div>

            <div class="flex flex-col gap-2" v-if="hasMaterials">
                <h4 class="text-xs font-semibold text-on-secondary uppercase tracking-wider m-0 mb-2">Ascension
                    Materials</h4>
                <div class="flex items-center gap-3 p-2 bg-white/[0.03] rounded-md hover:bg-white/[0.05] transition-colors"
                    v-if="totalMaterials.green > 0">
                    <div class="w-5 h-5 rounded bg-gradient-to-br from-[#4ade80] to-[#22c55e] shrink-0"></div>
                    <span class="flex-1 text-sm text-on-primary">Green</span>
                    <span class="font-bold text-accent text-sm">{{ totalMaterials.green }}</span>
                </div>
                <div class="flex items-center gap-3 p-2 bg-white/[0.03] rounded-md hover:bg-white/[0.05] transition-colors"
                    v-if="totalMaterials.blue > 0">
                    <div class="w-5 h-5 rounded bg-gradient-to-br from-[#60a5fa] to-[#3b82f6] shrink-0"></div>
                    <span class="flex-1 text-sm text-on-primary">Blue</span>
                    <span class="font-bold text-accent text-sm">{{ totalMaterials.blue }}</span>
                </div>
                <div class="flex items-center gap-3 p-2 bg-white/[0.03] rounded-md hover:bg-white/[0.05] transition-colors"
                    v-if="totalMaterials.purple > 0">
                    <div class="w-5 h-5 rounded bg-gradient-to-br from-[#c084fc] to-[#a855f7] shrink-0"></div>
                    <span class="flex-1 text-sm text-on-primary">Purple</span>
                    <span class="font-bold text-accent text-sm">{{ totalMaterials.purple }}</span>
                </div>
            </div>

            <div class="flex flex-col gap-2" v-if="totalMaterials.forgeMaterials > 0">
                <h4 class="text-xs font-semibold text-on-secondary uppercase tracking-wider m-0 mb-2">Forge Materials
                </h4>
                <div
                    class="flex items-center gap-3 p-2 bg-white/[0.03] rounded-md hover:bg-white/[0.05] transition-colors">
                    <i class="fas fa-hammer w-5 text-center text-accent"></i>
                    <span class="flex-1 text-sm text-on-primary">Forge</span>
                    <span class="font-bold text-accent text-sm">{{ totalMaterials.forgeMaterials }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useUiStore } from '../stores/ui';
import { useWeapon } from '../composeables/useWeapon';
import { weaponLevelingMaterials } from '../definitions/weapon';
import type { WeaponLevelingMaterial } from '../types/ascension';
import type { LevelRange } from '../types/range';

const uiStore = useUiStore();
const { weaponConfigurations } = storeToRefs(uiStore);

const totalMaterials = computed(() => {
    const totals = {
        coins: 0,
        exp: 0,
        green: 0,
        blue: 0,
        purple: 0,
        forgeMaterials: 0
    };

    weaponConfigurations.value.forEach(config => {
        if (!config.name) return;

        try {
            const { buildSummary, weapon } = useWeapon(config.name);

            // Skip if weapon not found
            if (!weapon.value) return;

            // Calculate weapon ascension materials
            const start = weaponLevelingMaterials.find(mat => mat.level == config.level.start);
            const end = weaponLevelingMaterials.find(mat => mat.level == config.level.end);
            if (!start || !end) return;

            const weaponAscensionMaterials = { start, end } as LevelRange<WeaponLevelingMaterial>;

            // Get summary
            const summary = buildSummary(weaponAscensionMaterials);

            // Add to totals
            totals.coins += summary.coins?.default || 0;
            totals.exp += summary.exp || 0;
            
            // Primary ascension materials
            totals.green += summary.ascensionMaterials.primary.T1_Green || 0;
            totals.blue += summary.ascensionMaterials.primary.T2_Blue || 0;
            totals.purple += summary.ascensionMaterials.primary.T3_Purple || 0;
            
            // Secondary ascension materials
            totals.green += summary.ascensionMaterials.secondary.T1_Green || 0;
            totals.blue += summary.ascensionMaterials.secondary.T2_Blue || 0;
            totals.purple += summary.ascensionMaterials.secondary.T3_Purple || 0;
            
            // Forging materials
            totals.forgeMaterials += summary.forgingMaterials?.T1_Green || 0;
            totals.forgeMaterials += summary.forgingMaterials?.T2_Blue || 0;
        } catch (error) {
            console.warn(`Failed to calculate materials for ${config.name}:`, error);
        }
    });

    return totals;
});

const hasMaterials = computed(() =>
    totalMaterials.value.green > 0 ||
    totalMaterials.value.blue > 0 ||
    totalMaterials.value.purple > 0
);
</script>
