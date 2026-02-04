<template>
    <div class="material-summary">
        <div class="summary-header">
            <h3 class="summary-title">
                <i class="fas fa-list-check"></i>
                Total Materials
            </h3>
        </div>
        
        <div class="summary-content">
            <div class="material-section">
                <h4 class="section-title">Currency</h4>
                <div class="material-item">
                    <i class="fas fa-coins"></i>
                    <span class="material-name">Coins</span>
                    <span class="material-amount">{{ totalMaterials.coins }}</span>
                </div>
                <div class="material-item">
                    <i class="fas fa-star"></i>
                    <span class="material-name">XP</span>
                    <span class="material-amount">{{ totalMaterials.exp }}</span>
                </div>
            </div>

            <div class="material-section" v-if="hasMaterials">
                <h4 class="section-title">Ascension Materials</h4>
                <div class="material-item" v-if="totalMaterials.green > 0">
                    <div class="material-tier tier-green"></div>
                    <span class="material-name">Green</span>
                    <span class="material-amount">{{ totalMaterials.green }}</span>
                </div>
                <div class="material-item" v-if="totalMaterials.blue > 0">
                    <div class="material-tier tier-blue"></div>
                    <span class="material-name">Blue</span>
                    <span class="material-amount">{{ totalMaterials.blue }}</span>
                </div>
                <div class="material-item" v-if="totalMaterials.purple > 0">
                    <div class="material-tier tier-purple"></div>
                    <span class="material-name">Purple</span>
                    <span class="material-amount">{{ totalMaterials.purple }}</span>
                </div>
            </div>

            <div class="material-section" v-if="totalMaterials.forgeMaterials > 0">
                <h4 class="section-title">Forge Materials</h4>
                <div class="material-item">
                    <i class="fas fa-hammer"></i>
                    <span class="material-name">Forge</span>
                    <span class="material-amount">{{ totalMaterials.forgeMaterials }}</span>
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

<style scoped>
.material-summary {
    background: var(--color-bg-card);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    overflow: hidden;
    height: fit-content;
    position: sticky;
    top: 1rem;
}

.summary-header {
    padding: 1rem;
    background: linear-gradient(135deg, rgba(230, 197, 116, 0.1), rgba(91, 163, 208, 0.1));
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.summary-title {
    margin: 0;
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--color-text-primary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.summary-title i {
    color: var(--color-accent-gold);
}

.summary-content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.material-section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.section-title {
    margin: 0 0 0.5rem 0;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.material-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 6px;
    transition: background 0.2s ease;
}

.material-item:hover {
    background: rgba(255, 255, 255, 0.05);
}

.material-item i {
    width: 1.25rem;
    text-align: center;
    color: var(--color-accent-gold);
}

.material-tier {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 4px;
    flex-shrink: 0;
}

.tier-green {
    background: linear-gradient(135deg, #4ade80, #22c55e);
}

.tier-blue {
    background: linear-gradient(135deg, #60a5fa, #3b82f6);
}

.tier-purple {
    background: linear-gradient(135deg, #c084fc, #a855f7);
}

.material-name {
    flex: 1;
    font-size: 0.9rem;
    color: var(--color-text-primary);
}

.material-amount {
    font-weight: 700;
    color: var(--color-accent-gold);
    font-size: 0.9rem;
}
</style>
