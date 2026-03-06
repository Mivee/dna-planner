<template>
	<div class="order-1 md:order-2">
		<div class="flex flex-col gap-6">
			<!-- <Draggable v-model="upgradeList" item-key="name" class="flex flex-col gap-6"> -->
			<div
				v-for="(item, index) in expandedConfigs"
				:key="getKey(item, index)">
				<CharacterResult
					v-if="item.type == 'Character'"
					:config="asConfig<CharacterUpgradeConfig>(item)" />
				<WeaponResult
					v-else-if="item.type == 'Weapon'"
					:config="asConfig<WeaponUpgradeConfig>(item)" />
				<DemonWedgeResult
					v-else-if="item.type == 'DemonWedge'"
					:config="asConfig<DemonWedgeUpgradeConfig>(item)" />
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
	DemonWedgeUpgradeConfig,
	BaseUpgradeConfig,
} from "../../types/upgradeConfig";
import { useUiStore } from "../../stores/ui";
import CharacterResult from "./characterResult.vue";
import WeaponResult from "./weaponResult.vue";
import DemonWedgeResult from "./demonWedgeResult.vue";
import { computed } from "vue";

const uiStore = useUiStore();
const { upgradeConfiguration } = storeToRefs(uiStore);

const expandedConfigs = computed(() =>
	Array.from(upgradeConfiguration.value.values())
);

// Helper to get unique key for each item
function getKey(item: BaseUpgradeConfig, index: number): string {
	return item.id || (item.name || "") + "_" + index;
}

function asConfig<T extends BaseUpgradeConfig>(item: BaseUpgradeConfig): T {
	return item as T;
}
</script>
