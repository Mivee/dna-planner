<template>
    <div class="bg-[var(--color-bg-card)] border border-white/10 rounded-lg overflow-hidden sticky top-4">
        <div class="p-4 bg-gradient-to-br from-[#e6c574]/10 to-[#5ba3d0]/10 border-b border-white/10">
            <h3 class="text-lg font-bold text-[var(--color-text-primary)] flex items-center gap-2 m-0">
                <i class="fas fa-list-check text-[var(--color-accent-gold)]"></i>
                Total Materials
            </h3>
        </div>
        
        <div class="p-4 flex flex-col gap-6">
            <div class="flex flex-col gap-2">
                <h4 class="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider m-0 mb-2">Currency</h4>
                <div class="flex items-center gap-3 p-2 bg-white/[0.03] rounded-md hover:bg-white/[0.05] transition-colors">
                    <i class="fas fa-coins w-5 text-center text-[var(--color-accent-gold)]"></i>
                    <span class="flex-1 text-sm text-[var(--color-text-primary)]">Coins</span>
                    <span class="font-bold text-[var(--color-accent-gold)] text-sm">{{ totalMaterials.coins.toLocaleString() }}</span>
                </div>
                <div class="flex items-center gap-3 p-2 bg-white/[0.03] rounded-md hover:bg-white/[0.05] transition-colors">
                    <i class="fas fa-star w-5 text-center text-[var(--color-accent-gold)]"></i>
                    <span class="flex-1 text-sm text-[var(--color-text-primary)]">XP</span>
                    <span class="font-bold text-[var(--color-accent-gold)] text-sm">{{ totalMaterials.exp.toLocaleString() }}</span>
                </div>
            </div>

            <div class="flex flex-col gap-2" v-if="hasAscensionMaterials">
                <h4 class="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider m-0 mb-2">Ascension Materials</h4>
                <div class="flex items-center gap-3 p-2 bg-white/[0.03] rounded-md hover:bg-white/[0.05] transition-colors" v-if="totalMaterials.ascension.green > 0">
                    <div class="w-5 h-5 rounded bg-gradient-to-br from-[#4ade80] to-[#22c55e] shrink-0"></div>
                    <span class="flex-1 text-sm text-[var(--color-text-primary)]">Green</span>
                    <span class="font-bold text-[var(--color-accent-gold)] text-sm">{{ totalMaterials.ascension.green }}</span>
                </div>
                <div class="flex items-center gap-3 p-2 bg-white/[0.03] rounded-md hover:bg-white/[0.05] transition-colors" v-if="totalMaterials.ascension.blue > 0">
                    <div class="w-5 h-5 rounded bg-gradient-to-br from-[#60a5fa] to-[#3b82f6] shrink-0"></div>
                    <span class="flex-1 text-sm text-[var(--color-text-primary)]">Blue</span>
                    <span class="font-bold text-[var(--color-accent-gold)] text-sm">{{ totalMaterials.ascension.blue }}</span>
                </div>
                <div class="flex items-center gap-3 p-2 bg-white/[0.03] rounded-md hover:bg-white/[0.05] transition-colors" v-if="totalMaterials.ascension.purple > 0">
                    <div class="w-5 h-5 rounded bg-gradient-to-br from-[#c084fc] to-[#a855f7] shrink-0"></div>
                    <span class="flex-1 text-sm text-[var(--color-text-primary)]">Purple</span>
                    <span class="font-bold text-[var(--color-accent-gold)] text-sm">{{ totalMaterials.ascension.purple }}</span>
                </div>
            </div>

            <div class="flex flex-col gap-2" v-if="hasForgingMaterials">
                <h4 class="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider m-0 mb-2">Forging Materials</h4>
                <div class="flex items-center gap-3 p-2 bg-white/[0.03] rounded-md hover:bg-white/[0.05] transition-colors" v-if="totalMaterials.forging.green > 0">
                    <div class="w-5 h-5 rounded bg-gradient-to-br from-[#4ade80] to-[#22c55e] shrink-0"></div>
                    <span class="flex-1 text-sm text-[var(--color-text-primary)]">Green</span>
                    <span class="font-bold text-[var(--color-accent-gold)] text-sm">{{ totalMaterials.forging.green }}</span>
                </div>
                <div class="flex items-center gap-3 p-2 bg-white/[0.03] rounded-md hover:bg-white/[0.05] transition-colors" v-if="totalMaterials.forging.blue > 0">
                    <div class="w-5 h-5 rounded bg-gradient-to-br from-[#60a5fa] to-[#3b82f6] shrink-0"></div>
                    <span class="flex-1 text-sm text-[var(--color-text-primary)]">Blue</span>
                    <span class="font-bold text-[var(--color-accent-gold)] text-sm">{{ totalMaterials.forging.blue }}</span>
                </div>
                <div class="flex items-center gap-3 p-2 bg-white/[0.03] rounded-md hover:bg-white/[0.05] transition-colors" v-if="totalMaterials.forging.purple > 0">
                    <div class="w-5 h-5 rounded bg-gradient-to-br from-[#c084fc] to-[#a855f7] shrink-0"></div>
                    <span class="flex-1 text-sm text-[var(--color-text-primary)]">Purple</span>
                    <span class="font-bold text-[var(--color-accent-gold)] text-sm">{{ totalMaterials.forging.purple }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useUiStore } from '../stores/ui';
import { useCharacter } from '../composeables/useCharacter';
import { characterLevelingMaterials } from '../definitions/characterAscension';
import { CharacterSkillLevels, skillTrack1Materials } from '../definitions/skillLeveling';
import type { CharacterLevelingMaterial } from '../types/characterLeveling';
import type { LevelRange } from '../types/range';
import type { SkillLevel } from '../types/skill';
import type { SkillLevelingMaterial } from '../types/skillLeveling';
import type { SkillUpgradeConfig } from '../types/upgradeConfig';

const { characterConfigurations } = storeToRefs(useUiStore());

const totalMaterials = computed(() => {
    const totals = {
        coins: 0,
        exp: 0,
        ascension: { green: 0, blue: 0, purple: 0 },
        forging: { green: 0, blue: 0, purple: 0 }
    };

    characterConfigurations.value.forEach(config => {
        if (!config.name) return;
        
        try {
            const { buildSummary, character } = useCharacter(config.name);
            
            // Skip if character not found
            if (!character.value) return;
            
            // Calculate character ascension materials
            const start = characterLevelingMaterials.find(mat => mat.level == config.level.start);
            const end = characterLevelingMaterials.find(mat => mat.level == config.level.end);
            if (!start || !end) return;
            
            const characterAscensionMaterials = { start, end } as LevelRange<CharacterLevelingMaterial>;
            
            // Calculate skill materials
            const skillMaterials = calculateSkillMaterials(config);
            
            // Get summary
            const summary = buildSummary(characterAscensionMaterials, skillMaterials);
            
            // Add to totals
            totals.coins += summary.coins || 0;
            totals.exp += summary.exp || 0;
            totals.ascension.green += summary.character.ascensionMaterials.T1_Green || 0;
            totals.ascension.blue += summary.character.ascensionMaterials.T2_Blue || 0;
            totals.ascension.purple += summary.character.ascensionMaterials.T3_Purple || 0;
            totals.forging.green += summary.skills.forgingMaterials.T1Green || 0;
            totals.forging.blue += summary.skills.forgingMaterials.T2Blue || 0;
            totals.forging.purple += summary.skills.forgingMaterials.T3Purple || 0;
        } catch (error) {
            console.warn(`Failed to calculate materials for ${config.name}:`, error);
        }
    });

    return totals;
});

function calculateSkillMaterials(config: any) {
    const skillMaterials: SkillLevel[] = [];
    
    // Skill
    if (config.skill) {
        skillMaterials.push(getSkillMaterials(config.skill.current, config.skill.target));
        skillMaterials.push(...getNodeMaterials(config.skill));
    }
    
    // Ultimate
    if (config.ult) {
        skillMaterials.push(getSkillMaterials(config.ult.current, config.ult.target));
        skillMaterials.push(...getNodeMaterials(config.ult));
    }
    
    // Passive
    if (config.passive) {
        skillMaterials.push(getSkillMaterials(config.passive.current, config.passive.target));
        skillMaterials.push(...getNodeMaterials(config.passive));
    }
    
    return skillMaterials;
}

function getSkillMaterials(current: number, target: number): SkillLevel {
    const start = CharacterSkillLevels.find(mat => mat.level == current);
    const end = CharacterSkillLevels.find(mat => mat.level == target);
    
    if (!start || !end) {
        return {
            coinsGroupA: 0, coinsGroupB: 0,
            forgingMaterials: { T1Green: 0, T2Blue: 0, T3Purple: 0, T4Gold: 0 },
            level: 0, lunoMomento: 0, nocturnalEcho: 0, twilightTread: 0
        } as SkillLevel;
    }
    
    return {
        coinsGroupA: end.coinsGroupA - start.coinsGroupA,
        coinsGroupB: end.coinsGroupA - start.coinsGroupA,
        forgingMaterials: {
            T1Green: end.forgingMaterials.T1Green - start.forgingMaterials.T1Green,
            T2Blue: end.forgingMaterials.T2Blue - start.forgingMaterials.T2Blue,
            T3Purple: end.forgingMaterials.T3Purple - start.forgingMaterials.T3Purple,
            T4Gold: end.forgingMaterials.T4Gold - start.forgingMaterials.T4Gold,
        },
        level: end.level - start.level,
        lunoMomento: end.lunoMomento - start.lunoMomento,
        nocturnalEcho: end.nocturnalEcho - start.nocturnalEcho,
        twilightTread: end.twilightTread - start.twilightTread,
    } as SkillLevel;
}

function getNodeMaterials(skill: SkillUpgradeConfig): SkillLevel[] {
    const results: SkillLevel[] = [];
    
    if (skill.node1?.isUnlocked) {
        const m = skillTrack1Materials.find(mat => mat.node == 1);
        if (m) results.push(toSkillLevel(m));
    }
    if (skill.node2?.isUnlocked) {
        const m = skillTrack1Materials.find(mat => mat.node == 2);
        if (m) results.push(toSkillLevel(m));
    }
    
    return results;
}

function toSkillLevel(m: SkillLevelingMaterial): SkillLevel {
    return {
        coinsGroupA: m.coins.default,
        coinsGroupB: m.coins.default,
        forgingMaterials: {
            T1Green: m.ascensionMaterials.T1_Green,
            T2Blue: m.ascensionMaterials.T2_Blue,
            T3Purple: m.ascensionMaterials.T3_Purple,
            T4Gold: 0
        },
        level: 0,
        lunoMomento: 0,
        nocturnalEcho: m.forgingMaterials.NocturnalEcho,
        twilightTread: m.forgingMaterials.TwilightTread,
    } as SkillLevel;
}

const hasAscensionMaterials = computed(() => 
    totalMaterials.value.ascension.green > 0 || 
    totalMaterials.value.ascension.blue > 0 || 
    totalMaterials.value.ascension.purple > 0
);

const hasForgingMaterials = computed(() => 
    totalMaterials.value.forging.green > 0 || 
    totalMaterials.value.forging.blue > 0 || 
    totalMaterials.value.forging.purple > 0
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
