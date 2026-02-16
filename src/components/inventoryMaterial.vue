<template>
	<div
		class="flex items-center gap-3 p-3 bg-secondary/3 rounded-md hover:bg-secondary/5 transition-colors">
		<i :class="['w-6 text-center', iconClass, iconColor]"></i>
		<span class="flex-1 text-sm text-on-primary">{{ name }}</span>
		<div class="flex items-center gap-1">
			<button
				type="button"
				class="px-2 py-1 min-w-8"
				@click="adjustBy(-10)">
				-10
			</button>
			<button
				type="button"
				class="px-2 py-1 min-w-8"
				@click="adjustBy(-1)">
				-
			</button>
			<input
				type="number"
				min="0"
				step="1"
				:value="quantity"
				@input="handleInput"
				class="w-24 px-3 py-2 bg-secondary-light border border-white/20 rounded text-white text-right focus:border-accent focus:ring-1 focus:ring-accent" />
			<button
				type="button"
				class="px-2 py-1 min-w-8"
				@click="adjustBy(1)">
				+
			</button>
			<button
				type="button"
				class="px-2 py-1 min-w-8"
				@click="adjustBy(10)">
				+10
			</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
interface Props {
	name: string;
	iconClass?: string;
	iconColor?: string;
	quantity: number;
}

const props = withDefaults(defineProps<Props>(), {
	iconClass: "fas fa-cube",
	iconColor: "text-accent",
});

const emit = defineEmits<{
	update: [name: string, quantity: number];
}>();

function handleInput(event: Event) {
	const target = event.target as HTMLInputElement;
	const quantity = Math.max(0, Math.floor(parseInt(target.value) || 0));
	emit("update", props.name, quantity);
}

function adjustBy(delta: number) {
	const quantity = Math.max(0, props.quantity + delta);
	emit("update", props.name, quantity);
}
</script>
