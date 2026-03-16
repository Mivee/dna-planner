<template>
	<div
		class="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
		<WeaponResult
			v-for="config in weaponConfigurations"
			:key="config.type + '_' + config.name"
			:config="config" />
	</div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useUiStore } from "../stores/ui";
import WeaponResult from "./result/weaponResult.vue";

const { weaponConfigurations } = storeToRefs(useUiStore());
</script>
