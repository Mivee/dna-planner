<template>
	<div
		class="bg-secondary border border-white/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_8px_24px_rgba(168,85,247,0.2)]">
		<!-- Title Section -->
		<div
			class="flex justify-between items-center px-5 py-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-b border-white/20">
			<h3
				class="m-0 text-xl font-bold text-white flex items-center gap-2">
				<i class="fas fa-gem text-purple-400"></i>
				{{ config.name || "Daemon Wedge" }}
			</h3>
			<div class="flex gap-2">
				<button
					class="px-3 py-2 bg-secondary-light border border-white/20 rounded-md text-white-muted cursor-pointer transition-all duration-200 hover:bg-purple-500/20 hover:border-purple-500 hover:text-purple-400"
					@click="edit"
					aria-label="Edit daemon wedge">
					<i class="fa-solid fa-pencil"></i>
				</button>
				<button
					class="px-3 py-2 bg-secondary-light border border-white/20 rounded-md text-white-muted cursor-pointer transition-all duration-200 hover:bg-error/20 hover:border-error hover:text-error"
					@click="remove"
					aria-label="Remove daemon wedge">
					<i class="fa-solid fa-trash"></i>
				</button>
			</div>
		</div>

		<!-- Summary Section -->
		<div class="p-5 border-b border-white/20">
			<div class="flex flex-col gap-3">
				<div class="flex justify-between items-center py-2">
					<span class="text-sm text-white-muted font-medium">
						Level
					</span>
					<span class="text-sm font-bold text-purple-400">
						+{{ config.initialLevel }} → +{{ config.targetLevel }}
					</span>
				</div>
				<div
					v-if="config.quantity && config.quantity > 1"
					class="flex justify-between items-center py-2">
					<span class="text-sm text-white-muted font-medium">
						Quantity
					</span>
					<span class="text-sm font-bold text-blue-400">
						×{{ config.quantity }}
					</span>
				</div>
			</div>
		</div>

		<!-- Materials Section -->
		<div class="p-5" v-if="summary">
			<div class="flex flex-col gap-3">
				<!-- Coins -->
				<div class="flex justify-between items-center py-2">
					<div class="flex items-center gap-2">
						<i class="fas fa-coins text-accent w-5"></i>
						<span class="text-sm text-white-muted">Coins</span>
					</div>
					<span class="text-sm font-bold text-accent">
						{{ summary.coins.toLocaleString() }}
					</span>
				</div>

				<!-- Carmine Globules -->
				<div class="flex justify-between items-center py-2">
					<div class="flex items-center gap-2">
						<i class="fas fa-gem text-purple-400 w-5"></i>
						<span class="text-sm text-white-muted">
							Carmine Globules
						</span>
					</div>
					<span class="text-sm font-bold text-purple-400">
						{{ summary.carmineGlobules.toLocaleString() }}
					</span>
				</div>

				<!-- Blueprints -->
				<div
					v-if="summary.blueprints.size > 0"
					class="border-t border-white/10 pt-3 mt-2">
					<h4
						class="text-xs font-semibold text-white-muted uppercase mb-2">
						Blueprints
					</h4>
					<div
						v-for="[name, qty] in summary.blueprints"
						:key="name"
						class="flex justify-between items-center py-1">
						<div class="flex items-center gap-2">
							<i
								class="fas fa-scroll w-5"
								:class="getBlueprintColor(name)"></i>
							<span class="text-xs text-white-muted">
								{{ name }}
							</span>
						</div>
						<span class="text-xs font-bold">{{ qty }}</span>
					</div>
				</div>

				<!-- Materials -->
				<div
					v-if="materialsArray.length > 0"
					class="border-t border-white/10 pt-3 mt-2">
					<h4
						class="text-xs font-semibold text-white-muted uppercase mb-2">
						Materials
					</h4>
					<div
						v-for="material in materialsArray"
						:key="material.name"
						class="flex justify-between items-center py-1">
						<div class="flex items-center gap-2">
							<i class="fas fa-cube text-accent w-5"></i>
							<span class="text-xs text-white-muted">
								{{ material.name }}
							</span>
						</div>
						<span class="text-xs font-bold">
							{{ material.quantity }}
						</span>
					</div>
				</div>
			</div>
		</div>

		<DaemonWedgeBuildConfiguration
			v-if="isEditing"
			:upgrade-config="props.config"
			@saved="toggleIsEditing"
			@closed="toggleIsEditing" />
	</div>
</template>

<script lang="ts" setup>
import type { DaemonWedgeUpgradeConfig } from "../types/upgradeConfig";
import { computed, ref } from "vue";
import { useUiStore } from "../stores/ui";
import { useDaemonWedge } from "../composeables/useDaemonWedge";
import DaemonWedgeBuildConfiguration from "./daemonWedgeBuildConfiguration.vue";

interface Props {
	config: DaemonWedgeUpgradeConfig;
}
const props = defineProps<Props>();

const { removeConfiguration } = useUiStore();
const { getDaemonWedge, buildSummary } = useDaemonWedge();
const isEditing = ref(false);

const wedge = computed(() => {
	if (!props.config.name) return null;
	return getDaemonWedge(props.config.name);
});

const summary = computed(() => {
	if (!wedge.value) return null;
	const quantity = props.config.quantity ?? 1;
	return buildSummary(
		wedge.value,
		props.config.initialLevel,
		props.config.targetLevel,
		quantity
	);
});

const materialsArray = computed(() => {
	if (!summary.value) return [];
	return Array.from(summary.value.materials.entries()).map(
		([name, quantity]) => ({
			name,
			quantity,
		})
	);
});

function getBlueprintColor(name: string): string {
	if (name.includes("[Blue]")) return "text-blue-400";
	if (name.includes("[Purple]")) return "text-purple-400";
	if (name.includes("[Gold]")) return "text-yellow-400";
	return "text-gray-400";
}

function remove() {
	const identifier = props.config.id || props.config.name;
	if (confirm(`Remove ${props.config.name}?`)) {
		removeConfiguration(identifier!);
	}
}

function edit() {
	isEditing.value = true;
}

function toggleIsEditing() {
	isEditing.value = !isEditing.value;
}
</script>
