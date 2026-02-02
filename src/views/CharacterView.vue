<template>
    <button @click="openModal">add Charcater</button>
    <CharacterBuildConfiguration v-if="isConfigVisible" @saved="closeModal" @closed="closeModal" />
    <CharacterResultList />
</template>
<script lang="ts" setup>
import CharacterBuildConfiguration from '../components/characterBuildConfiguration.vue';
import CharacterResultList from '../components/characterResultList.vue';
import { ref } from 'vue';

const isConfigVisible = ref(false);

function openModal() {
    isConfigVisible.value = true;
}

function closeModal() {
    isConfigVisible.value = false;
}
</script>