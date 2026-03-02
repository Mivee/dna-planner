<template>
	<div class="flex justify-between items-center py-2">
		<span class="text-sm font-medium" :class="labelClass">
			<slot name="label">{{ label }}</slot>
		</span>
		<span class="text-sm font-bold" :class="valueClass">
			<slot name="value">{{ value }}</slot>
		</span>
	</div>
</template>

<script setup lang="ts">
interface Props {
	label?: string;
	value?: string | number;
	labelClass?: string;
	valueClass?: string;
}

withDefaults(defineProps<Props>(), {
	label: "",
	value: "",
	labelClass: "text-white-muted",
	valueClass: "",
});
</script>
