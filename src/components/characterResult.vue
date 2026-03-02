<template>
	<div
		class="relative border border-white/20 rounded-lg overflow-hidden transition-all duration-300 character-card"
		:style="cardStyles">
		<!-- Title Section -->
		<ResultCardHeader
			edit-aria-label="Edit character"
			remove-aria-label="Remove character"
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
		</ResultCardHeader>

		<!-- Main Content: Image and Details Grid -->
		<div class="grid grid-cols-2 gap-0">
			<!-- Left Column: Character Image -->
			<div
				class="relative h-full min-h-[400px] overflow-hidden border-r border-white/20">
				<img
					v-if="imgSource"
					:src="imgSource"
					class="w-full h-full object-cover object-top"
					:alt="selectedCharacter" />
				<div
					class="absolute inset-0 bg-gradient-to-r from-transparent to-secondary/80"></div>
			</div>

			<!-- Right Column: Levels and Materials -->
			<div class="flex flex-col">
				<!-- Summary Section -->
				<div class="p-5 border-b border-white/20">
					<div class="flex flex-col gap-3">
						<ResultStatRow
							label="Level"
							label-class="opacity-80"
							value-class="">
							<template #value>
								{{ props.config.level.start }} →
								{{ props.config.level.end }}
							</template>
						</ResultStatRow>
						<div class="py-2" v-if="props.config.skill">
							<ResultStatRow
								label="Skill"
								label-class="opacity-80">
								<template #value>
									{{ props.config.skill.current }} →
									{{ props.config.skill.target }}
								</template>
							</ResultStatRow>
						</div>
						<div class="py-2" v-if="props.config.ult">
							<ResultStatRow
								label="Ultimate"
								label-class="opacity-80">
								<template #value>
									{{ props.config.ult.current }} →
									{{ props.config.ult.target }}
								</template>
							</ResultStatRow>
						</div>
						<div class="py-2" v-if="props.config.passive">
							<ResultStatRow
								label="Passive"
								label-class="opacity-80">
								<template #value>
									{{ props.config.passive.current }} →
									{{ props.config.passive.target }}
								</template>
							</ResultStatRow>
						</div>
					</div>
				</div>

				<!-- Materials Section -->
				<div class="p-5">
					<CharacterMaterials
						v-if="hasCharacterSelected"
						:upgrade-config="props.config"
						:key="selectedCharacter" />
				</div>
			</div>
		</div>

		<CharacterBuildConfiguration
			v-if="isEditing"
			:upgrade-config="props.config"
			mode="Edit"
			@saved="toggleIsEditing"
			@closed="toggleIsEditing" />
	</div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import CharacterMaterials from "./characterMaterials.vue";
import type { CharacterUpgradeConfig } from "../types/upgradeConfig";
import { useCharacter } from "../composeables/useCharacter";
import CharacterBuildConfiguration from "./characterBuildConfiguration.vue";
import { useImage } from "../composeables/useImage";
import ResultCardHeader from "./resultCardHeader.vue";
import ResultStatRow from "./resultStatRow.vue";
import { useResultCardActions } from "../composeables/useResultCardActions";

interface Props {
	config: CharacterUpgradeConfig;
}
const props = defineProps<Props>();

const hasCharacterSelected = computed(
	() => props.config.name != "" && props.config.name != null
);

const selectedCharacter = computed(() => props.config.name || "Berenica");

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

const imgSource = computed(() =>
	useImage("character", selectedCharacter.value)
);

const elementImageUrl = computed(() =>
	useImage(
		"element",
		characterComposable.value?.character.value?.element || ""
	)
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
