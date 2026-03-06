<template>
	<BaseResultCard
		container-class="bg-secondary hover:border-purple-500/50 hover:shadow-[0_8px_24px_rgba(168,85,247,0.2)]"
		header-container-class="bg-gradient-to-br from-purple-500/20 to-blue-500/20"
		edit-hover-class="hover:bg-purple-500/20 hover:border-purple-500 hover:text-purple-400"
		edit-aria-label="Edit demon wedge"
		remove-aria-label="Remove demon wedge"
		@edit="edit"
		@remove="remove">
		<template #title>
			<h3
				class="m-0 text-xl font-bold text-white flex items-center gap-2">
				<i class="fas fa-gem text-purple-400"></i>
				{{ config.name || "Demon Wedge" }}
			</h3>
		</template>

		<template #media>
			<img
				v-if="imgSource"
				:src="imgSource"
				class="w-30 h-30 object-cover rounded-lg border-2 border-purple-400/30"
				:alt="config.name || 'Demon Wedge'" />
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
						{{ adjustedCarmineGlobules.toLocaleString() }}
					</template>
				</ResultStatRow>

				<div
					v-if="blueprintsArray.length > 0"
					class="border-t border-white/10 pt-3 mt-2">
					<span
						class="text-xs font-semibold text-white-muted uppercase mb-2">
						Blueprints
					</span>
					<div
						v-for="blueprint in blueprintsArray"
						:key="blueprint.name"
						class="flex justify-between items-center py-1">
						<div class="flex items-center gap-2">
							<i class="fas fa-scroll w-5 text-yellow-400"></i>
							<span class="text-xs text-white-muted">
								{{ blueprint.name }}
							</span>

							<Tooltip icon="fas fa-info" v-if="blueprint.source">
								<template #text>
									<div>
										{{ blueprint.source }}
									</div>
								</template>
							</Tooltip>
						</div>
						<span class="text-xs font-bold">
							{{ blueprint.quantity }}
						</span>
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
								<span v-if="material.cost.rarity">
									[{{ material.cost.rarity }}]
								</span>
							</span>
						</div>
						<span class="text-xs font-bold">
							{{ material.cost.quantity }}
						</span>
					</div>
				</div>
			</div>
		</template>

		<template #editor>
			<DemonWedgeBuildConfiguration
				v-if="isEditing"
				:upgrade-config="props.config"
				@saved="toggleIsEditing"
				@closed="toggleIsEditing" />
		</template>
	</BaseResultCard>
</template>

<script lang="ts" setup>
import type { DemonWedgeUpgradeConfig } from "../../types/upgradeConfig";
import { computed } from "vue";
import { useDemonWedge } from "../../composables/useDemonWedge";
import { useInventoryModeAdjustment } from "../../composables/useInventoryModeAdjustment";
import DemonWedgeBuildConfiguration from "../demonWedgeBuildConfiguration.vue";
import ResultStatRow from "./resultStatRow.vue";
import { useResultCardActions } from "../../composables/useResultCardActions";
import { useImage } from "../../composables/useImage";
import BaseResultCard from "./baseResultCard.vue";
import { useElementColor } from "../../composables/useElementColor";
import Tooltip from "../tooltip.vue";

interface Props {
	config: DemonWedgeUpgradeConfig;
}
const props = defineProps<Props>();
const { getDemonWedge, buildSummary } = useDemonWedge();
const { getAdjustedAmount } = useInventoryModeAdjustment();

const { isEditing, edit, remove, toggleIsEditing } = useResultCardActions({
	name: () => props.config.name || "Demon Wedge",
	identifier: () => props.config.id || props.config.name,
});

const wedge = computed(() => {
	if (!props.config.name) return null;
	return getDemonWedge(props.config.name);
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

function getAdjustedQuantity(name: string, amount: number): number {
	return getAdjustedAmount(name, amount);
}

const adjustedCarmineGlobules = computed(() => {
	if (!summary.value) {
		return 0;
	}

	return getAdjustedQuantity(
		"Carmine Globules",
		summary.value.carmineGlobules
	);
});

const blueprintsArray = computed(() => {
	if (!summary.value) {
		return [];
	}

	return Array.from(summary.value.blueprints.entries()).map(
		([name, cost]) => ({
			name,
			source: cost.source,
			quantity: getAdjustedQuantity(name, cost.quantity),
		})
	);
});

const materialsArray = computed(() => {
	if (!summary.value) return [];
	return Array.from(summary.value.materials.entries()).map(
		([name, cost]) => ({
			name,
			cost: {
				...cost,
				quantity: getAdjustedQuantity(name, cost.quantity),
			},
		})
	);
});
</script>
