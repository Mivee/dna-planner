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
                <template v-for="(material, key) in ascensionMaterialsList" :key="key">
                    <div class="flex items-center gap-3 p-2 bg-white/[0.03] rounded-md hover:bg-white/[0.05] transition-colors">
                        <div class="w-5 h-5 rounded shrink-0" :class="material.colorClass"></div>
                        <span class="flex-1 text-sm text-[var(--color-text-primary)]">{{ material.name }}</span>
                        <span class="font-bold text-[var(--color-accent-gold)] text-sm">{{ material.quantity }}</span>
                    </div>
                </template>
            </div>

            <div class="flex flex-col gap-2" v-if="hasForgingMaterials">
                <h4 class="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider m-0 mb-2">Forging Materials</h4>
                <template v-for="(material, key) in forgingMaterialsList" :key="key">
                    <div class="flex items-center gap-3 p-2 bg-white/[0.03] rounded-md hover:bg-white/[0.05] transition-colors">
                        <div class="w-5 h-5 rounded shrink-0" :class="material.colorClass"></div>
                        <span class="flex-1 text-sm text-[var(--color-text-primary)]">{{ material.name }}</span>
                        <span class="font-bold text-[var(--color-accent-gold)] text-sm">{{ material.quantity }}</span>
                    </div>
                </template>
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
import { elementUpgradeMaterials } from '../definitions/character';
import type { CharacterLevelingMaterial } from '../types/characterLeveling';
import type { LevelRange } from '../types/range';
import type { SkillLevelCost } from '../types/skill';
import type { SkillLevelingMaterial } from '../types/skillLeveling';
import type { SkillUpgradeConfig } from '../types/upgradeConfig';

const { characterConfigurations } = storeToRefs(useUiStore());

interface MaterialDetail {
    name: string;
    quantity: number;
    colorClass: string;
}

const totalMaterials = computed(() => {
    const totals = {
        coins: 0,
        exp: 0,
        ascension: { green: 0, blue: 0, purple: 0 },
        forging: { green: 0, blue: 0, purple: 0 },
        ascensionDetails: new Map<string, { tier: string, quantity: number }>(),
        forgingDetails: new Map<string, { tier: string, quantity: number }>()
    };

    characterConfigurations.value.forEach(config => {
        if (!config.name) return;
        
        try {
            const { buildSummary, character } = useCharacter(config.name);
            
            // Skip if character not found
            if (!character.value) return;
            
            // Get element materials for this character
            const elementMats = elementUpgradeMaterials.find(m => m.element === character.value?.element);
            
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
            
            // Track material names for ascension materials
            if (elementMats && summary.character.ascensionMaterials.T1_Green > 0) {
                const existing = totals.ascensionDetails.get(elementMats.ascensionMaterials.t1);
                totals.ascensionDetails.set(elementMats.ascensionMaterials.t1, {
                    tier: 'green',
                    quantity: (existing?.quantity || 0) + summary.character.ascensionMaterials.T1_Green
                });
            }
            if (elementMats && summary.character.ascensionMaterials.T2_Blue > 0) {
                const existing = totals.ascensionDetails.get(elementMats.ascensionMaterials.t2);
                totals.ascensionDetails.set(elementMats.ascensionMaterials.t2, {
                    tier: 'blue',
                    quantity: (existing?.quantity || 0) + summary.character.ascensionMaterials.T2_Blue
                });
            }
            if (elementMats && summary.character.ascensionMaterials.T3_Purple > 0) {
                const existing = totals.ascensionDetails.get(elementMats.ascensionMaterials.t3);
                totals.ascensionDetails.set(elementMats.ascensionMaterials.t3, {
                    tier: 'purple',
                    quantity: (existing?.quantity || 0) + summary.character.ascensionMaterials.T3_Purple
                });
            }
            
            // Track material names for forging materials
            if (elementMats && summary.skills.forgingMaterials.T1Green > 0) {
                const existing = totals.forgingDetails.get(elementMats.forgingMaterials.t1);
                totals.forgingDetails.set(elementMats.forgingMaterials.t1, {
                    tier: 'green',
                    quantity: (existing?.quantity || 0) + summary.skills.forgingMaterials.T1Green
                });
            }
            if (elementMats && summary.skills.forgingMaterials.T2Blue > 0) {
                const existing = totals.forgingDetails.get(elementMats.forgingMaterials.t2);
                totals.forgingDetails.set(elementMats.forgingMaterials.t2, {
                    tier: 'blue',
                    quantity: (existing?.quantity || 0) + summary.skills.forgingMaterials.T2Blue
                });
            }
            if (elementMats && summary.skills.forgingMaterials.T3Purple > 0) {
                const existing = totals.forgingDetails.get(elementMats.forgingMaterials.t3);
                totals.forgingDetails.set(elementMats.forgingMaterials.t3, {
                    tier: 'purple',
                    quantity: (existing?.quantity || 0) + summary.skills.forgingMaterials.T3Purple
                });
            }
        } catch (error) {
            console.warn(`Failed to calculate materials for ${config.name}:`, error);
        }
    });

    return totals;
});

function calculateSkillMaterials(config: any) {
    const skillMaterials: SkillLevelCost[] = [];
    
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

function getSkillMaterials(current: number, target: number): SkillLevelCost {
    const start = CharacterSkillLevels.find(mat => mat.level == current);
    const end = CharacterSkillLevels.find(mat => mat.level == target);
    
    if (!start || !end) {
        return {
            coinsGroupA: 0, coinsGroupB: 0,
            forgingMaterials: { T1Green: 0, T2Blue: 0, T3Purple: 0, T4Gold: 0 },
            level: 0, lunoMomento: 0, nocturnalEcho: 0, twilightTread: 0
        } as SkillLevelCost;
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
    } as SkillLevelCost;
}

function getNodeMaterials(skill: SkillUpgradeConfig): SkillLevelCost[] {
    const results: SkillLevelCost[] = [];
    
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

function toSkillLevel(m: SkillLevelingMaterial): SkillLevelCost {
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
    } as SkillLevelCost;
}

const hasAscensionMaterials = computed(() => 
    totalMaterials.value.ascensionDetails.size > 0
);

const hasForgingMaterials = computed(() => 
    totalMaterials.value.forgingDetails.size > 0
);

const ascensionMaterialsList = computed(() => {
    const materials: MaterialDetail[] = [];
    const tierOrder = { green: 0, blue: 1, purple: 2 };
    const tierColors = {
        green: 'bg-gradient-to-br from-[#4ade80] to-[#22c55e]',
        blue: 'bg-gradient-to-br from-[#60a5fa] to-[#3b82f6]',
        purple: 'bg-gradient-to-br from-[#c084fc] to-[#a855f7]'
    };
    
    totalMaterials.value.ascensionDetails.forEach((detail, name) => {
        materials.push({
            name,
            quantity: detail.quantity,
            colorClass: tierColors[detail.tier as keyof typeof tierColors]
        });
    });
    
    // Sort by tier (green, blue, purple) then by name
    return materials.sort((a, b) => {
        const tierA = totalMaterials.value.ascensionDetails.get(a.name)?.tier || 'green';
        const tierB = totalMaterials.value.ascensionDetails.get(b.name)?.tier || 'green';
        const tierDiff = tierOrder[tierA as keyof typeof tierOrder] - tierOrder[tierB as keyof typeof tierOrder];
        return tierDiff !== 0 ? tierDiff : a.name.localeCompare(b.name);
    });
});

const forgingMaterialsList = computed(() => {
    const materials: MaterialDetail[] = [];
    const tierOrder = { green: 0, blue: 1, purple: 2 };
    const tierColors = {
        green: 'bg-gradient-to-br from-[#4ade80] to-[#22c55e]',
        blue: 'bg-gradient-to-br from-[#60a5fa] to-[#3b82f6]',
        purple: 'bg-gradient-to-br from-[#c084fc] to-[#a855f7]'
    };
    
    totalMaterials.value.forgingDetails.forEach((detail, name) => {
        materials.push({
            name,
            quantity: detail.quantity,
            colorClass: tierColors[detail.tier as keyof typeof tierColors]
        });
    });
    
    // Sort by tier (green, blue, purple) then by name
    return materials.sort((a, b) => {
        const tierA = totalMaterials.value.forgingDetails.get(a.name)?.tier || 'green';
        const tierB = totalMaterials.value.forgingDetails.get(b.name)?.tier || 'green';
        const tierDiff = tierOrder[tierA as keyof typeof tierOrder] - tierOrder[tierB as keyof typeof tierOrder];
        return tierDiff !== 0 ? tierDiff : a.name.localeCompare(b.name);
    });
});
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
