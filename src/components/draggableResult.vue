<template>
	<div class="order-1 md:order-2">
		<div class="flex flex-col gap-6">
			<!-- <Draggable v-model="upgradeList" item-key="name" class="flex flex-col gap-6"> -->
			<div
				v-for="(item, index) in expandedConfigs"
				:key="getKey(item, index)">
				<CharacterResult
					v-if="item.type == 'Character'"
					:config="item" />
				<WeaponResult
					v-else-if="item.type == 'Weapon'"
					:config="item" />
				<DaemonWedgeResult
					v-else-if="item.type == 'DaemonWedge'"
					:config="item" />
			</div>
			<!-- </Draggable> -->
		</div>
	</div>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import type {
	CharacterUpgradeConfig,
	WeaponUpgradeConfig,
	DaemonWedgeUpgradeConfig,
} from "../types/upgradeConfig";
import { useUiStore } from "../stores/ui";
import CharacterResult from "./characterResult.vue";
import WeaponResult from "./weaponResult.vue";
import DaemonWedgeResult from "./daemonWedgeResult.vue";
import { computed } from "vue";

const uiStore = useUiStore();
const { upgradeConfiguration } = storeToRefs(uiStore);

const expandedConfigs = computed(() =>
	Array.from(upgradeConfiguration.value.values())
);

// Helper to get unique key for each item
function getKey(
	item:
		| CharacterUpgradeConfig
		| WeaponUpgradeConfig
		| DaemonWedgeUpgradeConfig,
	index: number
): string {
	// All configs should have UUIDs now
	if ("id" in item && item.id) {
		return item.id;
	}
	// Fallback to name + index for backwards compatibility
	return (item.name || "") + "_" + index;
}
</script>
