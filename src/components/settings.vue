<template>
	<div class="flex flex-col gap-4">
		<div>
			<Switch
				v-model:value="uiStore.plannerMode"
				:label-active="'Checklist'"
				:label-inactive="'Inventory'" />
			<p class="text-sm text-gray-400 mt-1">
				Choose how materials are calculated
			</p>
		</div>
	</div>
</template>
<script setup lang="ts">
import { useUiStore } from "../stores/ui";
import Switch from "./switch.vue";

const uiStore = useUiStore();
</script>
