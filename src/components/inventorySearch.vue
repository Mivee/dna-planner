<template>
	<div class="flex flex-wrap items-center gap-2">
		<input
			v-model="searchQueryInternal"
			type="text"
			placeholder="Search materials..."
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
		<button type="button" class="px-3 py-2" @click="resetAllItems">
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

function clearZeroItems() {
	inventoryStore.clearEmptyItems();
}

function resetAllItems() {
	if (!window.confirm("Reset the entire inventory? This cannot be undone.")) {
		return;
	}

	inventoryStore.resetInventory();
}

watch(searchQueryInternal, (newValue) => {
	emit("update:searchQuery", newValue);
});
</script>
