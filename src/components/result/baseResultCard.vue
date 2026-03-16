<template>
	<div
		class="border border-white/20 rounded-lg overflow-hidden transition-all duration-300 w-full max-w-[600px]"
		:class="containerClass"
		:style="containerStyle">
		<ResultCardHeader
			:container-class="headerContainerClass"
			:edit-hover-class="editHoverClass"
			:edit-aria-label="editAriaLabel"
			:remove-aria-label="removeAriaLabel"
			@edit="$emit('edit')"
			@remove="$emit('remove')">
			<template #title>
				<slot name="title" />
			</template>
		</ResultCardHeader>

		<div
			v-if="$slots.media || $slots.summary"
			:class="summaryContainerClass">
			<div :class="mediaContainerClass">
				<slot name="media">
					<div
						class="w-30 h-30 flex items-center justify-center bg-primary rounded-lg">
						<span class="text-sm text-white-soft">
							{{ noImageText }}
						</span>
					</div>
				</slot>
			</div>

			<div :class="summaryContentClass">
				<slot name="summary" />
			</div>
		</div>

		<div v-if="$slots.materials" :class="materialsContainerClass">
			<slot name="materials" />
		</div>

		<slot name="editor" />
	</div>
</template>

<script setup lang="ts">
import type { StyleValue } from "vue";
import ResultCardHeader from "./resultCardHeader.vue";

interface Props {
	containerClass?: string;
	containerStyle?: StyleValue;
	headerContainerClass?: string;
	editHoverClass?: string;
	editAriaLabel?: string;
	removeAriaLabel?: string;
	summaryContainerClass?: string;
	mediaContainerClass?: string;
	summaryContentClass?: string;
	materialsContainerClass?: string;
	noImageText?: string;
}

withDefaults(defineProps<Props>(), {
	containerClass: "bg-secondary",
	headerContainerClass: "",
	editHoverClass: "hover:bg-accent/20 hover:border-accent hover:text-accent",
	editAriaLabel: "Edit item",
	removeAriaLabel: "Remove item",
	summaryContainerClass:
		"grid grid-cols-[120px_1fr] gap-5 p-5 border-b border-white/20",
	mediaContainerClass:
		"w-30 h-30 flex items-center justify-center bg-primary rounded-lg",
	summaryContentClass: "flex flex-col gap-3 justify-center",
	materialsContainerClass: "p-5",
	noImageText: "No Image",
	containerStyle: null,
});

defineEmits<{ edit: []; remove: [] }>();
</script>
