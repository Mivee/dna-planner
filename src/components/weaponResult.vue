<template>
	<div
		class="bg-secondary border border-white/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-[0_8px_24px_rgba(212,175,55,0.2)]">
		<!-- Title Section -->
		<ResultCardHeader
			container-class="bg-gradient-to-br from-accent/20 to-primary-light/50"
			edit-aria-label="Edit weapon"
			remove-aria-label="Remove weapon"
			@edit="edit"
			@remove="remove">
			<template #title>
				<h3 class="m-0 text-xl font-bold text-white">
					{{ selectedWeapon || "Select Weapon" }}
				</h3>
			</template>
		</ResultCardHeader>

		<!-- Image & Summary Section -->
		<div
			class="grid grid-cols-[120px_1fr] gap-5 p-5 border-b border-white/20">
			<div
				class="w-30 h-30 flex items-center justify-center bg-primary rounded-lg">
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
			</div>

			<div class="flex flex-col gap-3 justify-center">
				<ResultStatRow label="Level" value-class="text-accent">
					<template #value>
						{{ config.level.start }} → {{ config.level.end }}
					</template>
				</ResultStatRow>
			</div>
		</div>

		<!-- Materials Section -->
		<div class="p-5">
			<WeaponMaterials
				v-if="hasWeaponSelected"
				:upgrade-config="config"
				:key="selectedWeapon" />
		</div>

		<WeaponBuildConfiguration
			v-if="isEditing"
			:upgrade-config="props.config"
			@saved="toggleIsEditing"
			@closed="toggleIsEditing" />
	</div>
</template>

<script lang="ts" setup>
import type { WeaponUpgradeConfig } from "../types/upgradeConfig";
import { computed } from "vue";
import WeaponMaterials from "./WeaponMaterials.vue";
import WeaponBuildConfiguration from "./weaponBuildConfiguration.vue";
import { useImage } from "../composeables/useImage";
import ResultCardHeader from "./resultCardHeader.vue";
import ResultStatRow from "./resultStatRow.vue";
import { useResultCardActions } from "../composeables/useResultCardActions";

interface Props {
	config: WeaponUpgradeConfig;
}
const props = defineProps<Props>();

const hasWeaponSelected = computed(() => !!props.config.name);
const selectedWeapon = computed(() => props.config.name || "");

const { isEditing, edit, remove, toggleIsEditing } = useResultCardActions({
	name: () => selectedWeapon.value,
	identifier: () => props.config.id || props.config.name,
});

const imgSource = computed(() => {
	if (!props.config.name) return "";
	return useImage(props.config.name);
});
</script>
