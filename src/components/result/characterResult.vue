<template>
	<BaseResultCard
		container-class="relative character-card"
		:container-style="cardStyles"
		edit-aria-label="Edit character"
		remove-aria-label="Remove character"
		summary-container-class="flex flex-col items-center gap-4 p-5 border-b border-white/20"
		media-container-class="flex items-center justify-center"
		summary-content-class="flex flex-col gap-3 w-full"
		@edit="edit"
		@remove="remove">
		<template #title>
			<div class="flex items-center gap-3">
				<img
					v-if="elementImageUrl"
					:src="elementImageUrl"
					:alt="characterData?.element"
					class="w-6 h-6 object-contain" />
				<h3 class="m-0 text-xl font-bold" :class="elementTextClass">
					{{ selectedCharacter }}
				</h3>
			</div>
		</template>

		<template #media>
			<img
				v-if="imgSource"
				:src="imgSource"
				class="w-30 h-30 object-cover object-top rounded-lg border-2 border-white/20"
				:alt="selectedCharacter" />
			<div
				v-else
				class="w-30 h-30 flex items-center justify-center bg-primary rounded-lg">
				<span class="text-sm text-white-soft">No Image</span>
			</div>
		</template>

		<template #summary>
			<ResultStatRow
				label="Level"
				label-class="opacity-80"
				value-class="">
				<template #value>
					{{ props.config.level.start }} →
					{{ props.config.level.end }}
				</template>
			</ResultStatRow>

			<div v-if="props.config.skill">
				<SkillResultStatRow :skill="props.config.skill" label="Skill" />
			</div>

			<div v-if="props.config.ult">
				<SkillResultStatRow
					:skill="props.config.ult"
					label="Ultimate" />
			</div>
			<div v-if="props.config.passive">
				<SkillResultStatRow
					:skill="props.config.passive"
					label="Passive" />
			</div>
		</template>

		<template #materials>
			<CharacterMaterials
				v-if="hasCharacterSelected"
				:upgrade-config="props.config"
				:key="selectedCharacter" />
		</template>

		<template #editor>
			<CharacterBuildConfiguration
				v-if="isEditing"
				:upgrade-config="props.config"
				mode="Edit"
				@saved="toggleIsEditing"
				@closed="toggleIsEditing" />
		</template>
	</BaseResultCard>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import CharacterMaterials from "../characterMaterials.vue";
import type { CharacterUpgradeConfig } from "../../types/upgradeConfig";
import { useCharacter } from "../../composables/useCharacter";
import CharacterBuildConfiguration from "../characterBuildConfiguration.vue";
import { useImage } from "../../composables/useImage";
import ResultStatRow from "./resultStatRow.vue";
import { useResultCardActions } from "../../composables/useResultCardActions";
import BaseResultCard from "./baseResultCard.vue";
import SkillResultStatRow from "../skillResultStatRow.vue";

interface Props {
	config: CharacterUpgradeConfig;
}
const props = defineProps<Props>();

const hasCharacterSelected = computed(
	() => props.config.name != "" && props.config.name != null
);

const selectedCharacter = computed(() => props.config.name);

const { isEditing, edit, remove, toggleIsEditing } = useResultCardActions({
	name: () => selectedCharacter.value,
	identifier: () => props.config.id || props.config.name,
});

const characterComposable = computed(() => {
	if (selectedCharacter.value) {
		return useCharacter(selectedCharacter.value);
	}
	return null;
});

const imgSource = computed(() => useImage(selectedCharacter.value, "portrait"));

const elementImageUrl = computed(() =>
	useImage(characterComposable.value?.character.value?.element || "")
);

// Element colors and icons
const characterData = computed(() => {
	if (selectedCharacter.value) {
		return useCharacter(selectedCharacter.value).character.value;
	}
	return null;
});

const elementColors = {
	Pyro: { from: "#ff4444", to: "#cc0000", textColor: "#ffffff" },
	Anemo: { from: "#44ff88", to: "#00cc44", textColor: "#000000" },
	Hydro: { from: "#4488ff", to: "#0044cc", textColor: "#ffffff" },
	Lumino: { from: "#ffdd44", to: "#cc9900", textColor: "#000000" },
	Umbro: { from: "#ff44aa", to: "#cc0088", textColor: "#ffffff" },
	Electro: { from: "#aa44ff", to: "#6600cc", textColor: "#ffffff" },
};

const elementBackgroundGradient = computed(() => {
	const element = characterData.value?.element;
	if (element && elementColors[element]) {
		const colors = elementColors[element];
		return colors.from;
	}

	return "#1c1c1e";
});

const cardStyles = computed(() => {
	const element = characterData.value?.element;
	if (element && elementColors[element]) {
		const colors = elementColors[element];
		return {
			background: elementBackgroundGradient.value,
			"--element-color": colors.from,
			color: colors.textColor,
		};
	}
	return {
		background: elementBackgroundGradient.value,
	};
});

const elementTextClass = computed(() => {
	const element = characterData.value?.element;
	if (element) {
		return `text-on-${element.toLowerCase()}!`;
	}
	return "text-white";
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
