<template>
	<div class="animate-[fadeIn_0.3s_ease]">
		<div
			class="flex justify-between items-center mb-6 px-5 py-4 bg-secondary border border-white/10 rounded-lg shadow-lg">
			<h2
				class="m-0 text-2xl flex items-center gap-3 text-on-primary font-bold">
				<i class="fas fa-gem text-xl text-warning"></i>
				Demon Wedges
			</h2>
			<button
				class="flex items-center gap-2 whitespace-nowrap"
				@click="openDemonWedgeModal">
				<i class="fas fa-plus"></i>
				Add Demon Wedge
			</button>
		</div>
		<DraggableResult />
		<DemonWedgeBuildConfiguration
			v-if="showModal"
			@saved="closeModal"
			@closed="closeModal" />
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import DraggableResult from "../components/result/draggableResult.vue";
import DemonWedgeBuildConfiguration from "../components/demonWedgeBuildConfiguration.vue";

const showModal = ref(false);

function openDemonWedgeModal() {
	showModal.value = true;
}

function closeModal() {
	showModal.value = false;
}
</script>
