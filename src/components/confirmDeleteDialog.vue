<template>
	<div
		class="fixed inset-0 bg-primary/85 backdrop-blur-sm flex items-center justify-center z-[1100] p-4"
		@click.self="$emit('cancel')">
		<div
			class="bg-secondary border border-white/10 rounded-lg shadow-2xl flex flex-col items-center gap-5 p-8 w-72 animate-[modalSlideIn_0.2s_ease]">
			<div
				class="w-28 h-28 rounded-lg overflow-hidden border-2 border-white/20 bg-primary flex items-center justify-center shrink-0">
				<img
					v-if="imageUrl"
					:src="imageUrl"
					:alt="name"
					class="w-full h-full object-cover object-top" />
				<i v-else class="fas fa-cube text-3xl text-on-secondary"></i>
			</div>

			<p class="text-sm text-on-primary text-center m-0">
				Do you want to delete
				<span class="font-semibold text-accent">{{ name }}</span>
				?
			</p>

			<div class="flex gap-4">
				<button
					class="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-secondary-light hover:bg-red-500/20 hover:border-red-500 hover:text-red-400 transition-colors"
					aria-label="Cancel"
					@click="$emit('cancel')">
					<i class="fas fa-xmark"></i>
				</button>
				<button
					class="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-secondary-light hover:bg-green-500/20 hover:border-green-500 hover:text-green-400 transition-colors"
					aria-label="Confirm delete"
					@click="$emit('confirm')">
					<i class="fas fa-check"></i>
				</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
interface Props {
	name: string;
	imageUrl?: string | null;
}

defineProps<Props>();
defineEmits<{ confirm: []; cancel: [] }>();
</script>

<style scoped>
@keyframes modalSlideIn {
	from {
		transform: scale(0.95) translateY(-20px);
		opacity: 0;
	}
	to {
		transform: scale(1) translateY(0);
		opacity: 1;
	}
}
</style>
