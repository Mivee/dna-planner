<template>
	<BaseResultCard
		container-class="bg-secondary hover:border-purple-500/50 hover:shadow-[0_8px_24px_rgba(168,85,247,0.2)]"
		header-container-class="bg-gradient-to-br from-purple-500/20 to-blue-500/20"
		edit-hover-class="hover:bg-purple-500/20 hover:border-purple-500 hover:text-purple-400"
		edit-aria-label="Edit daemon wedge"
		remove-aria-label="Remove daemon wedge"
		@edit="edit"
		@remove="remove">
		<template #title>
			<h3
				class="m-0 text-xl font-bold text-white flex items-center gap-2">
				<i class="fas fa-gem text-purple-400"></i>
				{{ config.name || "Daemon Wedge" }}
			</h3>
		</template>

		<template #media>
			<img
				v-if="imgSource"
				:src="imgSource"
				class="w-30 h-30 object-cover rounded-lg border-2 border-purple-400/30"
				:alt="config.name || 'Daemon Wedge'" />
			<div
				v-else
				class="w-30 h-30 flex items-center justify-center bg-primary rounded-lg">
				<span class="text-sm text-white-soft">No Image</span>
			</div>
		</template>

		<template #summary>
			<ResultStatRow label="Level" value-class="text-purple-400">
				<template #value>
					+{{ config.initialLevel }} → +{{ config.targetLevel }}
				</template>
			</ResultStatRow>
			<div v-if="config.quantity && config.quantity > 1" class="py-2">
				<ResultStatRow label="Quantity" value-class="text-blue-400">
					<template #value>×{{ config.quantity }}</template>
				</ResultStatRow>
			</div>
		</template>

		<template #materials>
			<div class="flex flex-col gap-3" v-if="summary">
				<ResultStatRow value-class="text-accent">
					<template #label>
						<div class="flex items-center gap-2">
							<i class="fas fa-coins text-accent w-5"></i>
							<span class="text-sm text-white-muted">Coins</span>
						</div>
					</template>
					<template #value>
						{{ summary.coins.toLocaleString() }}
					</template>
				</ResultStatRow>

				<ResultStatRow value-class="text-purple-400">
					<template #label>
						<div class="flex items-center gap-2">
							<i class="fas fa-gem text-purple-400 w-5"></i>
							<span class="text-sm text-white-muted">
								Carmine Globules
							</span>
						</div>
					</template>
					<template #value>
						{{ summary.carmineGlobules.toLocaleString() }}
					</template>
				</ResultStatRow>

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
		</template>

		<template #editor>
			<DaemonWedgeBuildConfiguration
				v-if="isEditing"
				:upgrade-config="props.config"
				@saved="toggleIsEditing"
				@closed="toggleIsEditing" />
		</template>
	</BaseResultCard>
</template>

<script lang="ts" setup>
import type { DaemonWedgeUpgradeConfig } from "../types/upgradeConfig";
import { computed } from "vue";
import { useDaemonWedge } from "../composables/useDaemonWedge";
import DaemonWedgeBuildConfiguration from "./daemonWedgeBuildConfiguration.vue";
import ResultStatRow from "./resultStatRow.vue";
import { useResultCardActions } from "../composables/useResultCardActions";
import { useImage } from "../composables/useImage";
import BaseResultCard from "./baseResultCard.vue";
import { useElementColor } from "../composables/useElementColor";

interface Props {
	config: DaemonWedgeUpgradeConfig;
}
const props = defineProps<Props>();
const { getDaemonWedge, buildSummary } = useDaemonWedge();

const { isEditing, edit, remove, toggleIsEditing } = useResultCardActions({
	name: () => props.config.name || "Daemon Wedge",
	identifier: () => props.config.id || props.config.name,
});

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

const imgSource = computed(() => {
	if (!props.config.name) return null;
	if (wedge.value) {
		const color = useElementColor(wedge.value.element);
		return useImage(props.config.name, color);
	}
	return useImage(props.config.name);
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
</script>
