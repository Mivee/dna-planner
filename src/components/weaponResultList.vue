<template>
	<div
		class="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
		<WeaponResult
			v-for="(config, ci) in weaponConfigurations"
			:config="config"
			:key="config.name + '_' + ci" />
	</div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useUiStore } from "../stores/ui";
import WeaponResult from "./weaponResult.vue";

const { weaponConfigurations } = storeToRefs(useUiStore());
</script>
