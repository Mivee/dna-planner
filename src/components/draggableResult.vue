<template>
    <div class="order-1 md:order-2">
        <div class="flex flex-col gap-6">
            <Draggable v-model="upgradeList" item-key="name" class="flex flex-col gap-6">
                <div v-for="(item, index) in upgradeList" :key="item.name + '_' + index">
                    <CharacterResult v-if="item.type == 'Character'" :config="(item as CharacterUpgradeConfig)" />
                    <WeaponResult v-else-if="item.type == 'Weapon'" :config="(item as WeaponUpgradeConfig)" />
                </div>
            </Draggable>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import type { BaseUpgradeConfig, CharacterUpgradeConfig, WeaponUpgradeConfig } from '../types/upgradeConfig';
import { useUiStore } from '../stores/ui';
import { VueDraggableNext as Draggable } from 'vue-draggable-next';
import CharacterResult from './characterResult.vue';
import WeaponResult from './weaponResult.vue';
import { ref, watch } from 'vue';

const { upgradeConfiguration } = storeToRefs(useUiStore());

const upgradeList = ref(Array.from(upgradeConfiguration.value.values()));

// resync in case of drag and drop
watch(upgradeList, (n: Array<BaseUpgradeConfig>) => {
    const m = new Map(n.map(nn => [nn.name!, nn]));
    upgradeConfiguration.value = m;
}, { deep: true })
</script>