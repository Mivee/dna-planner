<template>
    <Switch v-model:value="uiStore.plannerMode" :label-active="'Checklist'" :label-inactive="'Inventory'" />
</template>
<script setup lang="ts">
import { useUiStore } from '../stores/ui';
import Switch from './switch.vue';

const uiStore = useUiStore();

</script>