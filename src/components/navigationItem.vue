<template>
	<RouterLink
		:to="props.to"
		class="flex items-center gap-2 px-4 py-2.5 bg-secondary rounded-md text-white-muted font-semibold text-sm transition-all duration-200 ease-in-out whitespace-nowrap hover:bg-secondary-light hover:text-white [&.router-link-active]:bg-accent [&.router-link-active]:text-on-accent [&.router-link-active]:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
		aria-label="Navigate to characters">
		<i :class="props.icon" class="text-base"></i>
		<span>{{ props.label }}</span>
	</RouterLink>
</template>
<script lang="ts" setup>
interface Props {
	to: string;
	label: string;
	icon: string;
}
const props = defineProps<Props>();
</script>
