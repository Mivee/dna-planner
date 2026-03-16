<template>
	<div class="flex gap-4">
		<select
			v-model="internalRange.start"
			:class="selectClasses"
			:aria-label="props.startLabel || 'Start level'">
			<option v-for="o in selectOptions" :key="o.label" :value="o.value">
				{{ o.label }}
			</option>
		</select>

		<select
			v-model="internalRange.end"
			:class="selectClasses"
			:aria-label="props.endLabel || 'Target level'">
			<option v-for="o in selectOptions" :key="o.label" :value="o.value">
				{{ o.label }}
			</option>
		</select>
	</div>
</template>
<script lang="ts" setup generic="T extends string | number">
import { watch, ref, computed } from "vue";
import type { LevelRange } from "../types/range";

interface Props {
	options: T[];
	range: LevelRange<T>;
	selectColor?: "Primary" | "Secondary";
	selectText?: "Primary" | "Secondary";
	startLabel?: string;
	endLabel?: string;
}
const props = defineProps<Props>();

const selectClasses = computed(() => {
	const classes: Array<string> = [];
	if (props.selectColor == "Primary") {
		classes.push("bg-primary");
	} else if (props.selectColor == "Secondary") {
		classes.push("bg-secondary");
	}

	if (props.selectText == "Primary") {
		classes.push("text-on-primary");
	} else if (props.selectText == "Secondary") {
		classes.push("text-on-secondary");
	}
	return classes;
});

const emit = defineEmits(["update:range"]);

const internalRange = ref(props.range);

function isAscension(item: T) {
	return typeof item === "string" && item.endsWith(",1");
}

const selectOptions = computed(() => {
	return props.options.map((o) => {
		if (isAscension(o)) {
			return {
				value: o,
				label: (o as string).split(",")[0] + " ⭐",
			};
		}

		return {
			value: o,
			label: o,
		};
	});
});

watch(internalRange, (n) => emit("update:range", n), { deep: true });
</script>
