<template>
    <div class="character-view">
        <div class="view-header">
            <h2 class="view-title">
                <i class="fas fa-users"></i>
                Characters
            </h2>
            <button class="add-button" @click="openModal">
                <i class="fas fa-plus"></i>
                Add Character
            </button>
        </div>
        
        <CharacterBuildConfiguration v-if="isConfigVisible" @saved="closeModal" @closed="closeModal" />
        <CharacterResultList />
    </div>
</template>

<script lang="ts" setup>
import CharacterBuildConfiguration from '../components/characterBuildConfiguration.vue';
import CharacterResultList from '../components/characterResultList.vue';
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
.character-view {
    animation: fadeIn 0.3s ease;
}

.view-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding: 1.25rem;
    background: var(--color-bg-card);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    box-shadow: var(--shadow-card);
}

.view-title {
    margin: 0;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--color-text-primary);
    font-weight: 700;
}

.view-title i {
    font-size: 1.25rem;
    color: var(--color-accent-gold);
}

.add-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    white-space: nowrap;
}

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

@media (max-width: 640px) {
    .view-header {
        flex-direction: column;
        gap: 1rem;
        align-items: stretch;
    }
    
    .add-button {
        justify-content: center;
    }
}
</style>