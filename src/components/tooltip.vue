<template>
	<div class="relative inline-flex items-center group">
		<div
			class="inline-flex h-5 w-5 items-center justify-center rounded-full border border-on-primary/25 bg-transparent text-on-primary/65 transition-colors duration-200 hover:border-on-primary/40 hover:text-on-primary/80 focus-visible:outline-1 focus-visible:outline-on-primary/30"
			:aria-describedby="tooltipId">
			<i :class="props.icon" class="text-[11px]" aria-hidden="true"></i>
		</div>

		<span
			:id="tooltipId"
			role="tooltip"
			:class="[positionClass, revealClass]"
			class="pointer-events-none absolute z-120 max-w-52 rounded border border-on-primary/20 bg-secondary/92 px-2.5 py-1.5 text-xs leading-snug text-on-primary shadow-sm opacity-0 transition-all duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
			<slot name="text"></slot>
			<span
				:class="arrowClass"
				class="absolute h-1.5 w-1.5 rotate-45 border-r border-b border-on-primary/20 bg-secondary/92"></span>
		</span>
	</div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import type { Direction } from "../definitions/directions";
import { useUUID } from "../composables/utils";

interface Props {
	icon?: string;
	direction?: Direction;
}

const props = withDefaults(defineProps<Props>(), {
	direction: "top",
	icon: "fas fa-info",
});

const tooltipId = `tooltip-${useUUID()}`;

const positionClass = computed(() => {
	switch (props.direction) {
		case "bottom":
			return "top-full left-1/2 mt-2 -translate-x-1/2";
		case "left":
			return "right-full top-1/2 mr-2 -translate-y-1/2";
		case "right":
			return "left-full top-1/2 ml-2 -translate-y-1/2";
		case "top":
		default:
			return "bottom-full left-1/2 mb-2 -translate-x-1/2";
	}
});

const revealClass = computed(() => {
	switch (props.direction) {
		case "bottom":
			return "-translate-y-0.5 group-hover:translate-y-0 group-focus-within:translate-y-0";
		case "left":
			return "translate-x-0.5 group-hover:translate-x-0 group-focus-within:translate-x-0";
		case "right":
			return "-translate-x-0.5 group-hover:translate-x-0 group-focus-within:translate-x-0";
		case "top":
		default:
			return "translate-y-0.5 group-hover:translate-y-0 group-focus-within:translate-y-0";
	}
});

const arrowClass = computed(() => {
	switch (props.direction) {
		case "bottom":
			return "-top-1 left-1/2 -translate-x-1/2 rotate-[225deg]";
		case "left":
			return "-right-1 top-1/2 -translate-y-1/2 rotate-[315deg]";
		case "right":
			return "-left-1 top-1/2 -translate-y-1/2 rotate-[135deg]";
		case "top":
		default:
			return "-bottom-1 left-1/2 -translate-x-1/2 rotate-45";
	}
});
</script>
