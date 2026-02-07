<template>
    <div class="relative border border-white/20 rounded-lg overflow-hidden transition-all duration-300 character-card"
        :style="cardStyles">
        <!-- Title Section -->
        <div class="flex justify-between items-center px-5 py-4 border-b border-white/20">
            <div class="flex items-center gap-3">
                <img v-if="elementImageUrl" :src="elementImageUrl" :alt="characterData?.element"
                    class="w-6 h-6 object-contain" />
                <h3 class="m-0 text-xl font-bold" :class="elementTextClass">{{ selectedCharacter
                }}</h3>
            </div>
            <div class="flex gap-2">
                <button
                    class="px-3 py-2 bg-secondary-light border border-white/20 rounded-md text-white-muted cursor-pointer transition-all duration-200 hover:bg-accent/20 hover:border-accent hover:text-accent"
                    @click="edit" aria-label="Edit character">
                    <i class="fa-solid fa-pencil"></i>
                </button>
                <button
                    class="px-3 py-2 bg-secondary-light border border-white/20 rounded-md text-white-muted cursor-pointer transition-all duration-200 hover:bg-error/20 hover:border-error hover:text-error"
                    @click="remove" aria-label="Remove character">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>

        <!-- Main Content: Image and Details Grid -->
        <div class="grid grid-cols-2 gap-0">
            <!-- Left Column: Character Image -->
            <div class="relative h-full min-h-[400px] overflow-hidden border-r border-white/20">
                <img v-if="imgSource" :src="imgSource" class="w-full h-full object-cover object-top"
                    :alt="selectedCharacter" />
                <div class="absolute inset-0 bg-gradient-to-r from-transparent to-secondary/80"></div>
            </div>

            <!-- Right Column: Levels and Materials -->
            <div class="flex flex-col">
                <!-- Summary Section -->
                <div class="p-5 border-b border-white/20">
                    <div class="flex flex-col gap-3">
                        <div class="flex justify-between items-center py-2">
                            <span class="text-sm font-medium opacity-80">Level</span>
                            <span class="text-sm font-bold">{{
                                props.config.level.start }} → {{
                                    props.config.level.end }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2" v-if="props.config.skill">
                            <span class="text-sm font-medium opacity-80">Skill</span>
                            <span class="text-sm font-bold">{{
                                props.config.skill.current }} → {{
                                    props.config.skill.target }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2" v-if="props.config.ult">
                            <span class="text-sm font-medium opacity-80">Ultimate</span>
                            <span class="text-sm font-bold">{{
                                props.config.ult.current }} → {{
                                    props.config.ult.target }}</span>
                        </div>
                        <div class="flex justify-between items-center py-2" v-if="props.config.passive">
                            <span class="text-sm font-medium opacity-80">Passive</span>
                            <span class="text-sm font-bold">{{
                                props.config.passive.current }} → {{
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
    Pyro: { from: '#ff4444', to: '#cc0000', textColor: '#ffffff' },
    Anemo: { from: '#44ff88', to: '#00cc44', textColor: '#000000' },
    Hydro: { from: '#4488ff', to: '#0044cc', textColor: '#ffffff' },
    Lumino: { from: '#ffdd44', to: '#cc9900', textColor: '#000000' },
    Umbro: { from: '#ff44aa', to: '#cc0088', textColor: '#ffffff' },
    Electro: { from: '#aa44ff', to: '#6600cc', textColor: '#ffffff' }
};

const elementBackgroundGradient = computed(() => {
    const element = characterData.value?.element;
    if (element && elementColors[element]) {
        const colors = elementColors[element];
        return colors.from;
    }

    return '#1c1c1e';
});

const cardStyles = computed(() => {
    const element = characterData.value?.element;
    if (element && elementColors[element]) {
        const colors = elementColors[element];
        return {
            background: elementBackgroundGradient.value,
            '--element-color': colors.from,
            color: colors.textColor
        };
    }
    return {
        background: elementBackgroundGradient.value
    };
});

const elementTextClass = computed(() => {
    const element = characterData.value?.element;
    if (element) {
        return `text-on-${element.toLowerCase()}!`;
    }
    return 'text-white';
});
</script>

<style scoped>
.character-card:hover {
    border-color: var(--element-color, rgba(212, 175, 55, 0.5));
    box-shadow: 0 8px 24px var(--element-color, rgba(212, 175, 55, 0.2));
}

/* overwrite default h3 stuff so color can be set per element */
.character-card h3 {
    color: inherit !important;
}

.character-card span {
    color: inherit !important;
}
</style>
