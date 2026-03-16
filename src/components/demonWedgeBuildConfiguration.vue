<template>
	<Modal v-model:is-open="isOpen" @save="saveConfiguration">
		<div class="space-y-4">
			<div>
				<label class="block text-sm font-medium mb-2 text-white-muted">
					Demon Wedge
				</label>
				<select
					v-model="selectedWedge"
					class="w-full p-3 bg-secondary-light border border-white/20 rounded-lg text-white focus:border-accent focus:ring-1 focus:ring-accent transition-all disabled:opacity-60 disabled:cursor-not-allowed">
					<option value="">Select a demon wedge...</option>
					<optgroup
						v-for="category in groupedWedges"
						:key="category.label"
						:label="category.label">
						<option
							v-for="wedge in category.wedges"
							:key="wedge.displayName"
							:value="wedge.displayName">
							{{ wedge.displayName }}
						</option>
					</optgroup>
				</select>
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div>
					<label
						class="block text-sm font-medium mb-2 text-white-muted">
						Initial Level
					</label>
					<select
						v-model.number="initialLevel"
						class="w-full p-3 bg-secondary-light border border-white/20 rounded-lg text-white focus:border-accent focus:ring-1 focus:ring-accent transition-all">
						<option
							v-for="level in MAX_DEMONWEDGE_LEVEL"
							:key="level - 1"
							:value="level - 1">
							+{{ level - 1 }}
						</option>
					</select>
				</div>
				<div>
					<label
						class="block text-sm font-medium mb-2 text-white-muted">
						Target Level
					</label>
					<select
						v-model.number="targetLevel"
						class="w-full p-3 bg-secondary-light border border-white/20 rounded-lg text-white focus:border-accent focus:ring-1 focus:ring-accent transition-all">
						<option
							v-for="level in MAX_DEMONWEDGE_LEVEL"
							:key="level"
							:value="level"
							:disabled="level <= initialLevel">
							+{{ level }}
						</option>
					</select>
				</div>
			</div>
		</div>
	</Modal>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { useUiStore } from "../stores/ui";
import { demonWedges } from "../definitions/demonWedge";
import type { DemonWedgeUpgradeConfig } from "../types/upgradeConfig";
import { useUUID } from "../composables/utils";
import { MAX_DEMONWEDGE_LEVEL } from "../definitions/constants";
import Modal from "./modal.vue";

interface Props {
	upgradeConfig?: DemonWedgeUpgradeConfig;
}

const props = defineProps<Props>();

const emit = defineEmits<{
	saved: [];
	closed: [];
}>();

const uiStore = useUiStore();
const isOpen = ref(true);

// Initialize form values from prop if editing
const selectedWedge = ref(props.upgradeConfig?.name || "");
const initialLevel = ref(props.upgradeConfig?.initialLevel ?? 0);
const targetLevel = ref(
	props.upgradeConfig?.targetLevel ?? MAX_DEMONWEDGE_LEVEL
);
const quantity = ref(props.upgradeConfig?.quantity ?? 1);

const groupedWedges = computed(() => {
	const groups = new Map<string, typeof demonWedges>();

	for (const wedge of demonWedges) {
		const key = wedge.element
			? `${wedge.category} - ${wedge.element}`
			: wedge.category;

		if (!groups.has(key)) {
			groups.set(key, []);
		}
		groups.get(key)!.push(wedge);
	}

	return Array.from(groups.entries()).map(([label, wedges]) => ({
		label,
		wedges,
	}));
});

const canAdd = computed(() => {
	return selectedWedge.value && targetLevel.value > initialLevel.value;
});

watch(isOpen, (newValue) => {
	if (!newValue) {
		emit("closed");
	}
});

function saveConfiguration() {
	if (!canAdd.value) return;

	const config: DemonWedgeUpgradeConfig = {
		id: props.upgradeConfig?.id || useUUID(),
		name: selectedWedge.value,
		type: "DemonWedge",
		initialLevel: initialLevel.value,
		targetLevel: targetLevel.value,
		level: { start: null, end: null }, // Not used for demon wedges
		quantity: quantity.value,
	};

	uiStore.addConfiguration(config);

	emit("saved");
	close();
}

function close() {
	isOpen.value = false;
}
</script>
