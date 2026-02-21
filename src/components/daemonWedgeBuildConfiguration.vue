<template>
	<Modal
		v-model:isOpen="isOpen"
		:title="isEditing ? 'Edit Daemon Wedge' : 'Add Daemon Wedge'"
		@save="saveConfiguration">
		<div class="space-y-4">
			<div>
				<label class="block text-sm font-medium mb-2 text-white-muted">
					Daemon Wedge
				</label>
				<select
					v-model="selectedWedge"
					:disabled="isEditing"
					class="w-full p-3 bg-secondary-light border border-white/20 rounded-lg text-white focus:border-accent focus:ring-1 focus:ring-accent transition-all disabled:opacity-60 disabled:cursor-not-allowed">
					<option value="">Select a daemon wedge...</option>
					<optgroup
						v-for="category in groupedWedges"
						:key="category.label"
						:label="category.label">
						<option
							v-for="wedge in category.wedges"
							:key="wedge.id"
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
							v-for="level in 10"
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
							v-for="level in 11"
							:key="level - 1"
							:value="level - 1"
							:disabled="level - 1 <= initialLevel">
							+{{ level - 1 }}
						</option>
					</select>
				</div>
			</div>

			<div class="flex justify-end gap-3 pt-4 border-t border-white/20">
				<button
					@click="close"
					class="px-5 py-2 bg-secondary-light border border-white/20 rounded-lg text-white-muted hover:bg-secondary hover:border-white/30 transition-all">
					Cancel
				</button>
				<button
					@click="saveConfiguration"
					:disabled="!canAdd"
					class="px-5 py-2 bg-accent text-primary font-bold rounded-lg hover:bg-accent-light transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-accent">
					{{ isEditing ? "Save" : "Add" }}
				</button>
			</div>
		</div>
	</Modal>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { useUiStore } from "../stores/ui";
import { daemonWedges } from "../definitions/daemonWedge";
import type { DaemonWedgeUpgradeConfig } from "../types/upgradeConfig";
import { useUUID } from "../composeables/utils";
import Modal from "./modal.vue";

interface Props {
	upgradeConfig?: DaemonWedgeUpgradeConfig;
}

const props = defineProps<Props>();

const emit = defineEmits<{
	saved: [];
	closed: [];
}>();

const uiStore = useUiStore();
const isOpen = ref(true);
const isEditing = computed(() => !!props.upgradeConfig);

// Initialize form values from prop if editing
const selectedWedge = ref(props.upgradeConfig?.name || "");
const initialLevel = ref(props.upgradeConfig?.initialLevel ?? 0);
const targetLevel = ref(props.upgradeConfig?.targetLevel ?? 10);
const quantity = ref(props.upgradeConfig?.quantity ?? 1);

const groupedWedges = computed(() => {
	const groups = new Map<string, typeof daemonWedges>();

	for (const wedge of daemonWedges) {
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

	const config: DaemonWedgeUpgradeConfig = {
		id: props.upgradeConfig?.id || useUUID(),
		name: selectedWedge.value,
		type: "DaemonWedge",
		initialLevel: initialLevel.value,
		targetLevel: targetLevel.value,
		level: { start: null, end: null }, // Not used for daemon wedges
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
