<template>
	<BaseResultCard
		container-class="bg-secondary hover:border-accent/50 hover:shadow-[0_8px_24px_rgba(212,175,55,0.2)]"
		header-container-class="bg-gradient-to-br from-accent/20 to-primary-light/50"
		edit-aria-label="Edit weapon"
		remove-aria-label="Remove weapon"
		@edit="edit"
		@remove="remove">
		<template #title>
			<h3 class="m-0 text-xl font-bold text-white">
				{{ selectedWeapon || "Select Weapon" }}
			</h3>
		</template>

		<template #media>
			<img
				v-if="imgSource"
				:src="imgSource"
				class="w-30 h-30 object-cover rounded-lg border-2 border-accent/30"
				:alt="selectedWeapon" />
			<div
				v-else
				class="w-30 h-30 flex items-center justify-center bg-primary rounded-lg">
				<span class="text-sm text-white-soft">No Image</span>
			</div>
		</template>

		<template #summary>
			<ResultStatRow label="Level" value-class="text-accent">
				<template #value>
					{{ config.level.start }} → {{ config.level.end }}
				</template>
			</ResultStatRow>
		</template>

		<template #materials>
			<WeaponMaterials
				v-if="hasWeaponSelected"
				:upgrade-config="config"
				:key="selectedWeapon" />
		</template>

		<template #editor>
			<WeaponBuildConfiguration
				v-if="isEditing"
				:upgrade-config="props.config"
				@saved="toggleIsEditing"
				@closed="toggleIsEditing" />
		</template>
	</BaseResultCard>

	<ConfirmDeleteDialog
		v-if="showConfirmDelete"
		:name="selectedWeapon"
		:image-url="imgSource"
		@confirm="confirmRemove"
		@cancel="cancelRemove" />
</template>

<script lang="ts" setup>
import type { WeaponUpgradeConfig } from "../../types/upgradeConfig";
import { computed } from "vue";
import WeaponMaterials from "../WeaponMaterials.vue";
import WeaponBuildConfiguration from "../weaponBuildConfiguration.vue";
import { useImage } from "../../composables/useImage";
import ResultStatRow from "./resultStatRow.vue";
import { useResultCardActions } from "../../composables/useResultCardActions";
import BaseResultCard from "./baseResultCard.vue";
import ConfirmDeleteDialog from "../confirmDeleteDialog.vue";

interface Props {
	config: WeaponUpgradeConfig;
}
const props = defineProps<Props>();

const hasWeaponSelected = computed(() => !!props.config.name);
const selectedWeapon = computed(() => props.config.name || "");

const {
	isEditing,
	showConfirmDelete,
	edit,
	remove,
	confirmRemove,
	cancelRemove,
	toggleIsEditing,
} = useResultCardActions({
	name: () => selectedWeapon.value,
	identifier: () => props.config.id || props.config.name,
});

const imgSource = computed(() => {
	if (!props.config.name) return "";
	return useImage(props.config.name);
});
</script>
