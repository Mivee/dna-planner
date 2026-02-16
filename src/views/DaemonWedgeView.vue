<template>
	<div class="animate-[fadeIn_0.3s_ease]">
		<div
			class="flex justify-between items-center mb-6 px-5 py-4 bg-secondary border border-white/10 rounded-lg shadow-lg">
			<h2
				class="m-0 text-2xl flex items-center gap-3 text-on-primary font-bold">
				<i class="fas fa-gem text-xl text-warning"></i>
				Daemon Wedges
			</h2>
			<button
				class="flex items-center gap-2 whitespace-nowrap"
				@click="openDaemonWedgeModal">
				<i class="fas fa-plus"></i>
				Add Daemon Wedge
			</button>
		</div>
		<DraggableResult />
		<DaemonWedgeBuildConfiguration
			v-if="showModal"
			@saved="closeModal"
			@closed="closeModal" />
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import DraggableResult from "../components/draggableResult.vue";
import DaemonWedgeBuildConfiguration from "../components/daemonWedgeBuildConfiguration.vue";

const showModal = ref(false);

function openDaemonWedgeModal() {
	showModal.value = true;
}

function closeModal() {
	showModal.value = false;
}
</script>
