<template>
	<div class="animate-[fadeIn_0.3s_ease]">
		<div
			class="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 items-start">
			<div class="order-2 md:order-1">
				<MaterialSummary />
			</div>
			<DraggableResult />
		</div>
	</div>
</template>

<script lang="ts" setup>
import MaterialSummary from "../components/materialSummary.vue";
import DraggableResult from "../components/result/draggableResult.vue";
</script>
