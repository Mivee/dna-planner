<template>
    <div class="order-1 md:order-2">
        <div class="flex flex-col gap-6">
            <!-- <Draggable v-model="upgradeList" item-key="name" class="flex flex-col gap-6"> -->
            <div v-for="(item, index) in configs" :key="item.name + '_' + index">
                <CharacterResult v-if="item.type == 'Character'" :config="(item as CharacterUpgradeConfig)" />
                <WeaponResult v-else-if="item.type == 'Weapon'" :config="(item as WeaponUpgradeConfig)" />
            </div>
            <!-- </Draggable> -->
        </div>
    </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import type { CharacterUpgradeConfig, WeaponUpgradeConfig } from '../types/upgradeConfig';
import { useUiStore } from '../stores/ui';
import CharacterResult from './characterResult.vue';
import WeaponResult from './weaponResult.vue';
import { computed } from 'vue';

const { upgradeConfiguration } = storeToRefs(useUiStore());

const configs = computed(() => Array.from(upgradeConfiguration.value.values()));

</script>