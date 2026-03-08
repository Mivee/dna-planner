<template>
	<div
		class="flex justify-between items-center px-5 py-4 border-b border-white/20"
		:class="containerClass">
		<slot name="title" />
		<ResultCardActions
			:edit-hover-class="editHoverClass"
			:edit-aria-label="editAriaLabel"
			:remove-aria-label="removeAriaLabel"
			@edit="$emit('edit')"
			@remove="$emit('remove')" />
	</div>
</template>

<script setup lang="ts">
import ResultCardActions from "./resultCardActions.vue";

interface Props {
	containerClass?: string;
	editHoverClass?: string;
	editAriaLabel?: string;
	removeAriaLabel?: string;
}

withDefaults(defineProps<Props>(), {
	containerClass: "",
	editHoverClass: "hover:bg-accent/20 hover:border-accent hover:text-accent",
	editAriaLabel: "Edit item",
	removeAriaLabel: "Remove item",
});

defineEmits<{ edit: []; remove: [] }>();
</script>
