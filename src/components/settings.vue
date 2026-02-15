<template>
    <div class="flex flex-col gap-4">
        <div>
            <Switch v-model:value="uiStore.plannerMode" :label-active="'Checklist'" :label-inactive="'Inventory'" />
            <p class="text-sm text-gray-400 mt-1">Choose how materials are calculated</p>
        </div>
        <div>
            <Switch v-model:value="uiStore.aggregateDaemonWedges" :label-active="('Aggreate' as WedgeDisplayMode)"
                :label-inactive="('Seperate' as WedgeDisplayMode)" />
            <p class="text-sm text-gray-400 mt-1">When enabled, configure quantity in single entry. When disabled, add
                same wedge multiple times.</p>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useUiStore } from '../stores/ui';
import type { WedgeDisplayMode } from '../types/settings';
import Switch from './switch.vue';

const uiStore = useUiStore();

</script>