<template>
    <div class="order-1 md:order-2">
        <div class="flex flex-col gap-6">
            <!-- <Draggable v-model="upgradeList" item-key="name" class="flex flex-col gap-6"> -->
            <div v-for="(item, index) in expandedConfigs" :key="getKey(item, index)">
                <CharacterResult v-if="item.type == 'Character'" :config="(item as CharacterUpgradeConfig)" />
                <WeaponResult v-else-if="item.type == 'Weapon'" :config="(item as WeaponUpgradeConfig)" />
                <DaemonWedgeResult v-else-if="item.type == 'DaemonWedge'"
                    :config="(item as DaemonWedgeUpgradeConfig)" />
            </div>
            <!-- </Draggable> -->
        </div>
    </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import type { CharacterUpgradeConfig, WeaponUpgradeConfig, DaemonWedgeUpgradeConfig } from '../types/upgradeConfig';
import { useUiStore } from '../stores/ui';
import CharacterResult from './characterResult.vue';
import WeaponResult from './weaponResult.vue';
import DaemonWedgeResult from './daemonWedgeResult.vue';
import { computed } from 'vue';

const uiStore = useUiStore();
const { upgradeConfiguration, aggregateDaemonWedges } = storeToRefs(uiStore);

const configs = computed(() => Array.from(upgradeConfiguration.value.values()));

// Helper to get unique key for each item
function getKey(item: CharacterUpgradeConfig | WeaponUpgradeConfig | DaemonWedgeUpgradeConfig, index: number): string {
    // All configs should have UUIDs now
    if ('id' in item && item.id) {
        return item.id;
    }
    // Fallback to name + index for backwards compatibility
    return (item.name || '') + '_' + index;
}

// Expand daemon wedge configs into separate cards when aggregateDaemonWedges is false
const expandedConfigs = computed(() => {
    const result: Array<CharacterUpgradeConfig | WeaponUpgradeConfig | DaemonWedgeUpgradeConfig> = [];

    for (const config of configs.value) {
        if (config.type === 'DaemonWedge' && aggregateDaemonWedges.value === 'Seperate') {
            const daemonConfig = config as DaemonWedgeUpgradeConfig;
            const quantity = daemonConfig.quantity ?? 1;

            // Create individual cards for each copy
            for (let i = 0; i < quantity; i++) {
                const singleConfig: DaemonWedgeUpgradeConfig = {
                    ...daemonConfig,
                    quantity: undefined
                };
                result.push(singleConfig);
            }
        } else {
            // Type narrowing for proper union type handling
            if (config.type === 'Character') {
                result.push(config as CharacterUpgradeConfig);
            } else if (config.type === 'Weapon') {
                result.push(config as WeaponUpgradeConfig);
            } else {
                result.push(config as DaemonWedgeUpgradeConfig);
            }
        }
    }

    return result;
});

</script>