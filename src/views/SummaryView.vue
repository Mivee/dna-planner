<template>
    <div class="animate-[fadeIn_0.3s_ease]">
        <div
            class="flex justify-between items-center mb-6 px-5 py-4 bg-secondary border border-white/10 rounded-lg shadow-lg sm:flex-col sm:gap-4 sm:items-stretch">
            <h2 class="m-0 text-2xl flex items-center gap-3 text-on-primary font-bold">
                <i class="fas fa-users text-xl text-accent"></i>
                Planner
            </h2>
            <div class="flex gap-3">
                <button class="flex items-center gap-2 whitespace-nowrap sm:justify-center" @click="openCharacterModal">
                    <i class="fas fa-user-plus"></i>
                    Add Character
                </button>
                <button class="flex items-center gap-2 whitespace-nowrap sm:justify-center" @click="openWeaponModal">
                    <i class="fas fa-plus"></i>
                    Add Weapon
                </button>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 items-start">
            <div class="order-2 md:order-1">
                <MaterialSummary />
            </div>
            <DraggableResult />
        </div>

        <CharacterBuildConfiguration v-if="isCharacterConfigVisible" @saved="closeCharacterModal"
            @closed="closeCharacterModal" />
        <WeaponBuildConfiguration v-if="isWeaponConfigVisible" @saved="closeWeaponModal" @closed="closeWeaponModal" />
    </div>
</template>

<script lang="ts" setup>
import CharacterBuildConfiguration from '../components/characterBuildConfiguration.vue';
import WeaponBuildConfiguration from '../components/weaponBuildConfiguration.vue';
import MaterialSummary from '../components/materialSummary.vue';
import { ref } from 'vue';
import DraggableResult from '../components/draggableResult.vue';


const isCharacterConfigVisible = ref(false);
const isWeaponConfigVisible = ref(false);

function openCharacterModal() {
    isCharacterConfigVisible.value = true;
}

function closeCharacterModal() {
    isCharacterConfigVisible.value = false;
}

function openWeaponModal() {
    isWeaponConfigVisible.value = true;
}

function closeWeaponModal() {
    isWeaponConfigVisible.value = false;
}
</script>