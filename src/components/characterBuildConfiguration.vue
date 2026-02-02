<template>
    <div>
        <Modal v-model:is-open="isOpen" @save="onSave" @closed="emit('closed')">

            <img :src="imgSource" class="w-full" />

            <select v-model="internalUpgradeConfig.name">
                <option v-for="value in characters">
                    {{ value.name }}
                </option>
            </select>
            <div>
                <RangeSelect v-model:range="internalUpgradeConfig.level" :options="possibleCharacterLevels" />
            </div>
            <div class="flex flex-col gap-4">
                <SkillUpgrade v-model:skill="internalUpgradeConfig.skill" talentName="Skill" />
                <SkillUpgrade v-model:skill="internalUpgradeConfig.ult" talentName="Ult" />
                <SkillUpgrade v-model:skill="internalUpgradeConfig.passive" talentName="Passive" />
            </div>

        </Modal>

    </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { characters, defaultCharacterUpgrade } from '../definitions/character';
import type { CharacterUpgrade } from '../types/upgradeConfig';
import { characterLevelingMaterials } from '../definitions/characterAscention';
import Modal from './modal.vue';
import SkillUpgrade from './skillUpgrade.vue';
import { useUiStore } from '../stores/ui';
import { useCharacter } from '../composeables/useCharacter';
import { useClone } from '../composeables/utils';
import RangeSelect from './rangeSelect.vue';

interface Props {
    upgradeConfig?: CharacterUpgrade,
}

const possibleCharacterLevels = computed(() => characterLevelingMaterials.map(x => x.level));

const props = withDefaults(defineProps<Props>(), {
    upgradeConfig: () => {
        return defaultCharacterUpgrade;
    },
    openModal: false
});

const emit = defineEmits(["saved", "closed"]);

// const clone = JSON.parse(JSON.stringify(props.upgradeConfig))

const internalUpgradeConfig = ref(useClone(props.upgradeConfig));

const selectedCharacter = computed(() => internalUpgradeConfig.value.name || "");


const imgSource = computed(() => {
    if (selectedCharacter.value) {
        return useCharacter(selectedCharacter.value).imageUrl.value;
    }
});
const isOpen = ref(true);

const hasConfigSelected = ref(false);

function onSave() {
    hasConfigSelected.value = true;
    const { addConfiguration } = useUiStore();

    addConfiguration(internalUpgradeConfig.value);

    emit("saved")
}

</script>