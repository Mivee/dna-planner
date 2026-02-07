<template>
    <div
        class="bg-secondary border border-white/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-[0_8px_24px_rgba(212,175,55,0.2)]">
        <!-- Title Section -->
        <div
            class="flex justify-between items-center px-5 py-4 bg-gradient-to-br from-accent/20 to-primary-light/50 border-b border-white/20">
            <h3 class="m-0 text-xl font-bold text-white">{{ selectedWeapon || 'Select Weapon' }}</h3>
            <button
                class="px-3 py-2 bg-secondary-light border border-white/20 rounded-md text-white-muted cursor-pointer transition-all duration-200 hover:bg-error/20 hover:border-error hover:text-error"
                @click="remove" aria-label="Remove weapon">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>

        <!-- Image & Summary Section -->
        <div class="grid grid-cols-[120px_1fr] gap-5 p-5 border-b border-white/20">
            <div class="w-30 h-30 flex items-center justify-center bg-primary rounded-lg">
                <img v-if="imgSource" :src="imgSource"
                    class="w-30 h-30 object-cover rounded-lg border-2 border-accent/30" :alt="selectedWeapon" />
                <div v-else class="w-30 h-30 flex items-center justify-center bg-primary rounded-lg">
                    <span class="text-sm text-white-soft">No Image</span>
                </div>
            </div>

            <div class="flex flex-col gap-3 justify-center">
                <div class="flex justify-between items-center py-2">
                    <span class="text-sm text-white-muted font-medium">Level</span>
                    <span class="text-sm font-bold text-accent">{{ config.level.start }} → {{ config.level.end
                    }}</span>
                </div>
            </div>
        </div>

        <!-- Materials Section -->
        <div class="p-5">
            <WeaponMaterials v-if="hasWeaponSelected" :upgrade-config="config" :key="selectedWeapon" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { WeaponUpgradeConfig } from '../types/upgradeConfig';
import { computed } from 'vue';
import WeaponMaterials from './WeaponMaterials.vue';
import { useUiStore } from '../stores/ui';
import { useImage } from '../composeables/useImage';

interface Props {
    config: WeaponUpgradeConfig
}
const props = defineProps<Props>();

const { removeConfiguration } = useUiStore();

const hasWeaponSelected = computed(() => !!props.config.name);
const selectedWeapon = computed(() => props.config.name || "");

const imgSource = computed(() => {
    if (!props.config.name) return "";
    return useImage("weapon", props.config.name);
});

function remove() {
    if (confirm(`Remove ${selectedWeapon.value}?`)) {
        removeConfiguration(props.config.name!);
    }
}
</script>
