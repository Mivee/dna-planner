<template>
	<div>
		<Modal v-model:is-open="isOpen" @save="onSave" @closed="emit('closed')">
			<img v-if="imgSource" :src="imgSource" class="w-full" />

			<select v-model="internalUpgradeConfig.name">
				<option
					v-for="value in sortedCharacters"
					:label="value.name"
					:value="value.name"></option>
			</select>
			<div>
				<RangeSelect
					v-model:range="internalUpgradeConfig.level"
					:options="possibleCharacterLevels" />
			</div>
			<div class="flex flex-col gap-4">
				<SkillUpgrade
					v-model:skill="internalUpgradeConfig.skill"
					talentName="Skill" />
				<SkillUpgrade
					v-model:skill="internalUpgradeConfig.ult"
					talentName="Ult" />
				<SkillUpgrade
					v-model:skill="internalUpgradeConfig.passive"
					talentName="Passive" />
			</div>
		</Modal>
	</div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import { characters, defaultCharacterUpgrade } from "../definitions/character";
import type { CharacterUpgradeConfig } from "../types/upgradeConfig";
import { characterLevelingMaterials } from "../definitions/characterAscension";
import Modal from "./modal.vue";
import SkillUpgrade from "./skillUpgrade.vue";
import { useUiStore } from "../stores/ui";
import { useClone, useUUID } from "../composables/utils";
import RangeSelect from "./rangeSelect.vue";
import { useImage } from "../composables/useImage";
import { sortBy } from "../composables/utils";

interface Props {
	upgradeConfig?: CharacterUpgradeConfig;
}

const possibleCharacterLevels = computed(() =>
	characterLevelingMaterials.map((x) => x.level)
);

const props = withDefaults(defineProps<Props>(), {
	upgradeConfig: () => {
		return defaultCharacterUpgrade;
	},
	openModal: false,
});

const emit = defineEmits(["saved", "closed"]);

const internalUpgradeConfig = ref(useClone(props.upgradeConfig));

const selectedCharacter = computed(
	() => internalUpgradeConfig.value.name || ""
);

const imgSource = computed(() => {
	return useImage(selectedCharacter.value, "splashart");
});
const isOpen = ref(true);

const hasConfigSelected = ref(false);

const sortedCharacters = computed(() => {
	return sortBy(characters, "name");
});

function onSave() {
	hasConfigSelected.value = true;
	const { addConfiguration } = useUiStore();

	// Ensure the config has a UUID
	if (!internalUpgradeConfig.value.id) {
		internalUpgradeConfig.value.id = useUUID();
	}

	addConfiguration(internalUpgradeConfig.value);

	emit("saved");
}
</script>
