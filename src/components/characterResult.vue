<template>
    <div class="bg-[var(--color-bg-card)] border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#e6c574]/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
        <!-- Title Section -->
        <div class="flex justify-between items-center px-5 py-4 bg-gradient-to-br from-[#e6c574]/10 to-[#5ba3d0]/10 border-b border-white/10">
            <h3 class="m-0 text-xl font-bold text-[var(--color-text-primary)]">{{ selectedCharacter }}</h3>
            <button class="px-3 py-2 bg-white/5 border border-white/10 rounded-md text-[var(--color-text-secondary)] cursor-pointer transition-all duration-200 hover:bg-[#e6c574]/20 hover:border-[var(--color-accent-gold)] hover:text-[var(--color-accent-gold)]" @click="edit" aria-label="Edit character">
                <i class="fa-solid fa-pencil"></i>
            </button>
        </div>

        <!-- Image & Summary Section -->
        <div class="grid grid-cols-[120px_1fr] gap-5 p-5 border-b border-white/10">
            <img :src="imgSource" class="w-[120px] h-[120px] object-cover rounded-lg border-2 border-white/10" :alt="selectedCharacter" />
            <div class="flex flex-col gap-3 justify-center">
                <div class="flex justify-between items-center py-2">
                    <span class="text-sm text-[var(--color-text-secondary)] font-medium">Level</span>
                    <span class="text-sm font-bold text-[var(--color-accent-gold)]">{{ props.config.level.start }} → {{ props.config.level.end }}</span>
                </div>
                <div class="flex justify-between items-center py-2" v-if="props.config.skill">
                    <span class="text-sm text-[var(--color-text-secondary)] font-medium">Skill</span>
                    <span class="text-sm font-bold text-[var(--color-accent-gold)]">{{ props.config.skill.current }} → {{ props.config.skill.target }}</span>
                </div>
                <div class="flex justify-between items-center py-2" v-if="props.config.ult">
                    <span class="text-sm text-[var(--color-text-secondary)] font-medium">Ultimate</span>
                    <span class="text-sm font-bold text-[var(--color-accent-gold)]">{{ props.config.ult.current }} → {{ props.config.ult.target }}</span>
                </div>
                <div class="flex justify-between items-center py-2" v-if="props.config.passive">
                    <span class="text-sm text-[var(--color-text-secondary)] font-medium">Passive</span>
                    <span class="text-sm font-bold text-[var(--color-accent-gold)]">{{ props.config.passive.current }} → {{ props.config.passive.target }}</span>
                </div>
            </div>
        </div>

        <!-- Materials Section -->
        <div class="p-5">
            <CharacterMaterials v-if="hasCharacterSelected" :upgrade-config="props.config" :key="selectedCharacter" />
        </div>

        <CharacterBuildConfiguration v-if="isEditing" :upgrade-config="props.config" mode="Edit"
            @saved="toggleIsEditing" @closed="toggleIsEditing" />
    </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import CharacterMaterials from './characterMaterials.vue';
import type { CharacterUpgradeConfig } from '../types/upgradeConfig';
import { useCharacter } from '../composeables/useCharacter';
import CharacterBuildConfiguration from './characterBuildConfiguration.vue';

interface Props {
    config: CharacterUpgradeConfig
}
const props = defineProps<Props>();
const hasCharacterSelected = computed(() => props.config.name != "" && props.config.name != null);

const selectedCharacter = computed(() => props.config.name || "Berenica");

const imgSource = computed(() => {
    if (selectedCharacter.value) {
        return useCharacter(selectedCharacter.value).imageUrl.value;
    }
});

const isEditing = ref(false);
function toggleIsEditing() {
    isEditing.value = !isEditing.value;
}

function edit() {
    isEditing.value = true;
}
</script>

