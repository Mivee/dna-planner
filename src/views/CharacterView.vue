<template>
    <div class="animate-[fadeIn_0.3s_ease]">
        <div class="flex justify-between items-center mb-6 px-5 py-4 bg-[var(--color-bg-card)] border border-white/10 rounded-lg shadow-[var(--shadow-card)] sm:flex-col sm:gap-4 sm:items-stretch">
            <h2 class="m-0 text-2xl flex items-center gap-3 text-[var(--color-text-primary)] font-bold">
                <i class="fas fa-users text-xl text-[var(--color-accent-gold)]"></i>
                Characters
            </h2>
            <button class="flex items-center gap-2 whitespace-nowrap sm:justify-center" @click="openModal">
                <i class="fas fa-plus"></i>
                Add Character
            </button>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 items-start">
            <div class="order-2 md:order-1">
                <MaterialSummary />
            </div>
            <div class="order-1 md:order-2">
                <CharacterResultList />
            </div>
        </div>
        
        <CharacterBuildConfiguration v-if="isConfigVisible" @saved="closeModal" @closed="closeModal" />
    </div>
</template>

<script lang="ts" setup>
import CharacterBuildConfiguration from '../components/characterBuildConfiguration.vue';
import CharacterResultList from '../components/characterResultList.vue';
import MaterialSummary from '../components/materialSummary.vue';
import { ref } from 'vue';

const isConfigVisible = ref(false);

function openModal() {
    isConfigVisible.value = true;
}

function closeModal() {
    isConfigVisible.value = false;
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