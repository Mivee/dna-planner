<template>
    <div class="weapon-view">
        <div class="view-header">
            <h2 class="view-title">
                <i class="fas fa-sword"></i>
                Weapons
            </h2>
        </div>
        <WeaponAscension />
    </div>
</template>

<script lang="ts" setup>
import WeaponAscension from '../components/weaponAscension.vue';
</script>

<style scoped>
.weapon-view {
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