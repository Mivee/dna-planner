<template>
	<div
		class="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6 md:grid-cols-1">
		<CharacterResult
			v-for="config in characterConfigurations"
			:key="config.type + '_' + config.name"
			:config="config" />
	</div>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useUiStore } from "../stores/ui";
import CharacterResult from "./result/characterResult.vue";

const { characterConfigurations } = storeToRefs(useUiStore());
</script>
