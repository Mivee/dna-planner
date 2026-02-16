<template>
	<div>
		<button @click="isOpen = !isOpen" class="text-on-primary bg-primary">
			Edit
		</button>
		<Modal v-model:is-open="isOpen" @save="onSave">
			<img v-if="imgSource" :src="imgSource" class="w-full" />

			<select v-model="internalUpgradeConfig.name">
				<option v-for="value in characters">
					{{ value.name }}
				</option>
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
		<template v-if="hasConfigSelected">
			<CharacterResultList />
		</template>
	</div>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import { characters } from "../definitions/character";
import type { CharacterUpgradeConfig } from "../types/upgradeConfig";
import { characterLevelingMaterials } from "../definitions/characterAscension";
import Modal from "./modal.vue";
import SkillUpgrade from "./skillUpgrade.vue";
import { useUiStore } from "../stores/ui";
import CharacterResultList from "./characterResultList.vue";
import RangeSelect from "./rangeSelect.vue";
import { useImage } from "../composeables/useImage";

interface Props {
	upgradeConfig: CharacterUpgradeConfig;
}

const possibleCharacterLevels = computed(() =>
	characterLevelingMaterials.map((x) => x.level)
);

const props = withDefaults(defineProps<Props>(), {
	upgradeConfig: () => {
		return {
			name: "",
			level: {
				start: "1",
				end: "80",
			},
			type: "Character",
			skill: {
				current: 1,
				target: 1,
				node1: {
					isUnlocked: false,
				},
				node2: {
					isUnlocked: false,
				},
			},
			ult: {
				current: 1,
				target: 1,
				node1: {
					isUnlocked: false,
				},
				node2: {
					isUnlocked: false,
				},
			},
			passive: {
				current: 1,
				target: 1,
				node1: {
					isUnlocked: false,
				},
				node2: {
					isUnlocked: false,
				},
			},
		};
	},
});

const internalUpgradeConfig = ref(props.upgradeConfig);

const selectedCharacter = computed(
	() => internalUpgradeConfig.value.name || ""
);

const imgSource = computed(() => {
	return useImage("character", selectedCharacter.value);
});
const isOpen = ref(false);

const hasConfigSelected = ref(false);

function onSave() {
	hasConfigSelected.value = true;
	const { addConfiguration } = useUiStore();
	addConfiguration(internalUpgradeConfig.value);
}
</script>
