<template>
    <div class="animate-[fadeIn_0.3s_ease]">
        <div class="flex justify-between items-center mb-6 px-5 py-4 bg-secondary border border-white/10 rounded-lg shadow-lg sm:flex-col sm:gap-4 sm:items-stretch">
            <h2 class="m-0 text-2xl flex items-center gap-3 text-on-primary font-bold">
                <i class="fas fa-sword text-xl text-accent"></i>
                Weapons
            </h2>
            <button class="flex items-center gap-2 whitespace-nowrap sm:justify-center" @click="addWeapon">
                <i class="fas fa-plus"></i>
                Add Weapon
            </button>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 items-start">
            <div class="order-2 md:order-1">
                <WeaponMaterialSummary />
            </div>
            <div class="order-1 md:order-2">
                <div class="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
                    <WeaponResult />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import WeaponResult from '../components/weaponResult.vue';
import WeaponMaterialSummary from '../components/weaponMaterialSummary.vue';

function addWeapon() {
    // Add weapon functionality
}
</script>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>