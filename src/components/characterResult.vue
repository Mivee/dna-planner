<template>
    <div class="relative border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
        :style="{ background: elementBackgroundGradient }">
        <!-- Title Section -->
        <div class="flex justify-between items-center px-5 py-4 border-b border-white/10">
            <div class="flex items-center gap-3">
                <img v-if="elementImageUrl" :src="elementImageUrl" :alt="characterData?.element"
                    class="w-6 h-6 object-contain" />
                <h3 class="m-0 text-xl font-bold text-on-primary">{{ selectedCharacter }}</h3>
            </div>
            <div class="flex gap-2">
                <button
                    class="px-3 py-2 bg-white/5 border border-white/10 rounded-md text-on-secondary cursor-pointer transition-all duration-200 hover:bg-accent/20 hover:border-accent hover:text-accent"
                    @click="edit" aria-label="Edit character">
                    <i class="fa-solid fa-pencil"></i>
                </button>
                <button
                    class="px-3 py-2 bg-white/5 border border-white/10 rounded-md text-on-secondary cursor-pointer transition-all duration-200 hover:bg-red-500/20 hover:border-red-500 hover:text-red-500"
                    @click="remove" aria-label="Remove character">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>

        <!-- Main Content: Image and Details Grid -->
        <div class="grid grid-cols-2 gap-0">
            <!-- Left Column: Character Image -->
            <div class="relative h-full min-h-[400px] overflow-hidden border-r border-white/10">
                <img :src="imgSource" class="w-full h-full object-cover object-top" :alt="selectedCharacter" />
                <div class="absolute inset-0 bg-gradient-to-r from-transparent to-secondary/80"></div>
            </div>

            <!-- Right Column: Levels and Materials -->
            <div class="flex flex-col">
                <!-- Summary Section -->
                <div class="p-5 border-b border-white/10">
                    <div class="flex flex-col gap-3">
                        <div class="flex justify-between items-center py-2">
                            <span class="text-sm text-on-secondary font-medium">Level</span>
                            <span class="text-sm font-bold text-accent">{{ props.config.level.start }} → {{
                                props.config.level.end }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2" v-if="props.config.skill">
                            <span class="text-sm text-on-secondary font-medium">Skill</span>
                            <span class="text-sm font-bold text-accent">{{ props.config.skill.current }} → {{
                                props.config.skill.target }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2" v-if="props.config.ult">
                            <span class="text-sm text-on-secondary font-medium">Ultimate</span>
                            <span class="text-sm font-bold text-accent">{{ props.config.ult.current }} → {{
                                props.config.ult.target }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2" v-if="props.config.passive">
                            <span class="text-sm text-on-secondary font-medium">Passive</span>
                            <span class="text-sm font-bold text-accent">{{ props.config.passive.current }} → {{
                                props.config.passive.target }}</span>
                        </div>
                    </div>
                </div>

                <!-- Materials Section -->
                <div class="p-5">
                    <CharacterMaterials v-if="hasCharacterSelected" :upgrade-config="props.config"
                        :key="selectedCharacter" />
                </div>
            </div>
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
import { useUiStore } from '../stores/ui';
import { useImage } from '../composeables/useImage';

interface Props {
    config: CharacterUpgradeConfig
}
const props = defineProps<Props>();

const { removeConfiguration } = useUiStore();

const hasCharacterSelected = computed(() => props.config.name != "" && props.config.name != null);

const selectedCharacter = computed(() => props.config.name || "Berenica");

const characterComposable = computed(() => {
    if (selectedCharacter.value) {
        return useCharacter(selectedCharacter.value);
    }
    return null;
});

const imgSource = computed(() => useImage("character", selectedCharacter.value));

const elementImageUrl = computed(() => useImage("element", characterComposable.value?.character.value?.element || ""));

const isEditing = ref(false);
function toggleIsEditing() {
    isEditing.value = !isEditing.value;
}

function edit() {
    isEditing.value = true;
}

function remove() {
    if (confirm(`Remove ${selectedCharacter.value}?`)) {
        removeConfiguration(props.config.name!);
    }
}

// Element colors and icons
const characterData = computed(() => {
    if (selectedCharacter.value) {
        return useCharacter(selectedCharacter.value).character.value;
    }
    return null;
});

const elementColors = {
    Pyro: { from: '#ff4444', to: '#cc0000' },
    Anemo: { from: '#44ff88', to: '#00cc44' },
    Hydro: { from: '#4488ff', to: '#0044cc' },
    Lumino: { from: '#ffdd44', to: '#cc9900' },
    Umbro: { from: '#ff44aa', to: '#cc0088' },
    Electro: { from: '#aa44ff', to: '#6600cc' }
};

const elementBackgroundGradient = computed(() => {
    const element = characterData.value?.element;
    if (element && elementColors[element]) {
        const colors = elementColors[element];
        return `linear-gradient(135deg, ${colors.from}15 0%, ${colors.to}25 50%, #2a2a3e 100%)`;
    }
    return 'linear-gradient(135deg, rgba(230, 197, 116, 0.08) 0%, rgba(91, 163, 208, 0.15) 50%, #2a2a3e 100%)';
});
</script>
