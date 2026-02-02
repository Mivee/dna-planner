<template>
    <div class="flex flex-col mt-4">
        <!-- header -->
        <div class="w-full">
            <div @click="edit">

                edit
                <i class="fa-solid fa-pencil"></i>
            </div>
        </div>
        <!-- left -->
        <img :src="imgSource" class="w-100" />

        <!-- right -->
        <div>
            <CharacterMaterials v-if="hasCharacterSelected" :upgrade-config="props.config" :key="selectedCharacter" />
        </div>

        <CharacterBuildConfiguration v-if="isEditing" :upgrade-config="props.config" mode="Edit"
            @saved="toggleIsEditing" @closed="toggleIsEditing" />
    </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import CharacterMaterials from './characterMaterials.vue';
import type { CharacterUpgrade } from '../types/upgradeConfig';
import { useCharacter } from '../composeables/useCharacter';
import CharacterAscention from './characterAscention.vue';
import CharacterBuildConfiguration from './characterBuildConfiguration.vue';

interface Props {
    config: CharacterUpgrade
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