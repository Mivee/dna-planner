<template>
	<div class="flex flex-wrap items-center gap-2">
		<input
			v-model="searchQueryInternal"
			type="text"
			placeholder="Search materials..."
			aria-label="Search materials"
			class="flex-1 min-w-56 px-3 py-2 bg-secondary-light border border-white/20 rounded text-white focus:border-accent focus:ring-1 focus:ring-accent" />
		<button
			type="button"
			class="px-3 py-2"
			@click="showOnlyOwned = !showOnlyOwned">
			<i
				class="fas mr-2"
				:class="
					showOnlyOwned ? 'fa-toggle-on text-accent' : 'fa-toggle-off'
				"></i>
			{{ showOnlyOwned ? "Owned only" : "Show all" }}
		</button>
		<button type="button" class="px-3 py-2" @click="clearZeroItems">
			Clear empty
		</button>

		<template v-if="pendingReset">
			<span class="text-xs text-on-secondary">Reset all inventory?</span>
			<button
				type="button"
				class="px-2 py-1 text-xs rounded border border-red-500/50 text-red-400 hover:bg-red-500/10 transition-colors"
				@click="confirmReset">
				Yes
			</button>
			<button
				type="button"
				class="px-2 py-1 text-xs rounded border border-white/20 hover:bg-white/5 transition-colors"
				@click="pendingReset = false">
				No
			</button>
		</template>
		<button
			v-else
			type="button"
			class="px-3 py-2"
			@click="pendingReset = true">
			Reset all
		</button>
	</div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useInventory } from "../stores/inventory";
const inventoryStore = useInventory();

const emit = defineEmits(["update:searchQuery"]);
const showOnlyOwned = ref(false);
const searchQueryInternal = ref("");
const pendingReset = ref(false);

function clearZeroItems() {
	inventoryStore.clearEmptyItems();
}

function confirmReset() {
	inventoryStore.resetInventory();
	pendingReset.value = false;
}

watch(searchQueryInternal, (newValue) => {
	emit("update:searchQuery", newValue);
});
</script>
