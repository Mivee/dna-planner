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
						class="w-full px-4 py-2 bg-tertiary border border-white/10 rounded-md text-on-primary disabled:opacity-60 disabled:cursor-not-allowed"
						:class="{ 'border-red-500': validationError }">
						<option value="">Select a weapon</option>
						<optgroup
							v-for="group in groupedWeapons"
							:key="group.weaponType"
							:label="group.weaponType">
							<option
								v-for="weapon in group.weapons"
								:key="weapon.name"
								:value="weapon.name">
								{{ weapon.name }}
							</option>
						</optgroup>
					</select>
					<p v-if="validationError" class="mt-1 text-xs text-red-400">
						{{ validationError }}
					</p>
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
import { ref, computed, watch } from "vue";
import type { WeaponUpgradeConfig } from "../types/upgradeConfig";
import { weapons, weaponLevelingMaterials } from "../definitions/weapon";
import type { Weapon } from "../types/weapon";
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

const groupedWeapons = computed(() => {
	const grouped = new Map<Weapon["weaponType"], Weapon[]>();

	for (const weapon of weapons) {
		if (!grouped.has(weapon.weaponType)) {
			grouped.set(weapon.weaponType, []);
		}
		grouped.get(weapon.weaponType)!.push(weapon);
	}

	return Array.from(grouped.entries()).map(
		([weaponType, groupedWeapons]) => ({
			weaponType,
			weapons: groupedWeapons,
		})
	);
});

const weaponsLevels = computed(() =>
	weaponLevelingMaterials.map((x) => x.level)
);
const isOpen = ref(true);
const validationError = ref("");

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

watch(() => config.value.name, () => {
	if (config.value.name) {
		validationError.value = "";
	}
});

function save() {
	if (!config.value.name) {
		validationError.value = "Please select a weapon.";
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
