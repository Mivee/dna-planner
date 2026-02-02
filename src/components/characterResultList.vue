<template>
    <CharacterResult v-for="(config, ci) in characterConfigurations" :config="config" :key="config.name + '_' + ci" />
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useUiStore } from '../stores/ui';
import CharacterResult from './characterResult.vue';

const { characterConfigurations } = storeToRefs(useUiStore());

</script>