<template>
	<div class="flex gap-2">
		<button
			class="px-3 py-2 bg-secondary-light border border-white/20 rounded-md text-white-muted cursor-pointer transition-all duration-200"
			:class="editHoverClass"
			:aria-label="editAriaLabel"
			@click="$emit('edit')">
			<i class="fa-solid fa-pencil"></i>
		</button>
		<button
			class="px-3 py-2 bg-secondary-light border border-white/20 rounded-md text-white-muted cursor-pointer transition-all duration-200 hover:bg-error/20 hover:border-error hover:text-error"
			:aria-label="removeAriaLabel"
			@click="$emit('remove')">
			<i class="fa-solid fa-trash"></i>
		</button>
	</div>
</template>

<script setup lang="ts">
interface Props {
	editHoverClass: string;
	editAriaLabel: string;
	removeAriaLabel: string;
}

withDefaults(defineProps<Props>(), {
	editHoverClass: "hover:bg-accent/20 hover:border-accent hover:text-accent",
	editAriaLabel: "Edit item",
	removeAriaLabel: "Remove item",
});

defineEmits<{ edit: []; remove: [] }>();
</script>
