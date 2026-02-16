<template>
	<div class="flex items-center gap-3">
		<span class="text-sm text-white-muted">{{ props.labelInactive }}</span>
		<label class="relative inline-block w-14 h-7 cursor-pointer">
			<input
				type="checkbox"
				v-model="internalValue"
				class="opacity-0 w-0 h-0 peer" />
			<span
				class="absolute inset-0 bg-secondary-light border border-white/20 rounded-full transition-all duration-300 peer-checked:bg-accent peer-checked:border-accent peer-focus:ring-2 peer-focus:ring-accent/50"></span>
			<span
				class="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-7"></span>
		</label>
		<span class="text-sm text-white-muted">{{ props.labelActive }}</span>
	</div>
</template>
<script setup lang="ts" generic="T">
import { ref, watch } from "vue";

interface Props {
	value: T;
	labelActive: string;
	labelInactive: string;
}
const props = defineProps<Props>();
const internalValue = ref(props.value == props.labelActive);

const emit = defineEmits(["update:value"]);
watch(internalValue, (v) =>
	emit("update:value", v ? props.labelActive : props.labelInactive)
);
</script>
