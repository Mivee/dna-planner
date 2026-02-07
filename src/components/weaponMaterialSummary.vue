<template>
    <div class="bg-secondary border border-white/20 rounded-lg overflow-hidden sticky top-4 h-fit">
        <div class="p-4 bg-gradient-to-br from-accent/20 to-primary-light/50 border-b border-white/20">
            <h3 class="text-lg font-bold text-white flex items-center gap-2 m-0">
                <i class="fas fa-list-check text-accent"></i>
                Total Materials
            </h3>
        </div>

        <div class="p-4 flex flex-col gap-6">
            <div class="flex flex-col gap-2">
                <h4 class="text-xs font-semibold text-white-soft uppercase tracking-wider m-0 mb-2">Currency</h4>
                <div class="flex items-center gap-3 p-2 bg-primary rounded-md hover:bg-primary-light transition-colors">
                    <i class="fas fa-coins w-5 text-center text-accent"></i>
                    <span class="flex-1 text-sm text-white">Coins</span>
                    <span class="font-bold text-accent text-sm">{{ totalMaterials.coins }}</span>
                </div>
                <div class="flex items-center gap-3 p-2 bg-primary rounded-md hover:bg-primary-light transition-colors">
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

// Placeholder for total materials calculation
const totalMaterials = computed(() => {
    return {
        coins: 0,
        exp: 0,
        green: 0,
        blue: 0,
        purple: 0,
        forgeMaterials: 0
    };
});

const hasMaterials = computed(() =>
    totalMaterials.value.green > 0 ||
    totalMaterials.value.blue > 0 ||
    totalMaterials.value.purple > 0
);
</script>
