<template>
    <div class="flex gap-4">
        <CharacterResult v-for="(config, ci) in characterConfigurations" :config="config" :key="config.name + '_' + ci" />
    </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import { useUiStore } from '../stores/ui';
import CharacterResult from './characterResult.vue';

const { characterConfigurations } = storeToRefs(useUiStore());

</script>