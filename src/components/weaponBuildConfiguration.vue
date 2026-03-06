<template>
	<Modal v-model:is-open="isOpen" @save="save" @closed="emit('closed')">
		<div class="p-6">
			<div class="flex flex-col gap-4">
				<div>
					<label
						class="block text-sm font-medium text-on-secondary mb-2">
						Weapon
					</label>
					<select
						v-model="config.name"
						class="w-full px-4 py-2 bg-tertiary border border-white/10 rounded-md text-on-primary disabled:opacity-60 disabled:cursor-not-allowed">
						<option value="">Select a weapon</option>
						<option
							v-for="weapon in weapons"
							:key="weapon.name"
							:value="weapon.name">
							{{ weapon.name }}
						</option>
					</select>
				</div>

				<div>
					<label
						class="block text-sm font-medium text-on-secondary mb-2">
						Level Range
					</label>
					<RangeSelect
						v-model:range="config.level"
						:options="weaponsLevels" />
				</div>
			</div>
		</div>
	</Modal>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import type { WeaponUpgradeConfig } from "../types/upgradeConfig";
import { weapons, weaponLevelingMaterials } from "../definitions/weapon";
import RangeSelect from "./rangeSelect.vue";
import Modal from "./modal.vue";
import { useUiStore } from "../stores/ui";
import { useUUID } from "../composables/utils";

interface Props {
	upgradeConfig?: WeaponUpgradeConfig;
}

const props = defineProps<Props>();

const emit = defineEmits<{
	saved: [];
	closed: [];
}>();

const { addConfiguration } = useUiStore();

const weaponsLevels = computed(() =>
	weaponLevelingMaterials.map((x) => x.level)
);
const isOpen = ref(true);

const config = ref<WeaponUpgradeConfig>(
	props.upgradeConfig || {
		name: "",
		level: {
			start: weaponsLevels.value[0],
			end: weaponsLevels.value[weaponsLevels.value.length - 1],
		},
		type: "Weapon",
	}
);

function save() {
	if (!config.value.name) {
		alert("Please select a weapon");
		return;
	}

	// Ensure the config has a UUID
	if (!config.value.id) {
		config.value.id = useUUID();
	}

	addConfiguration(config.value);
	emit("saved");
}
</script>
