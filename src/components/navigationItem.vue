<template>
    <RouterLink :to="props.to"
        class="flex items-center gap-2 px-4 py-2.5 bg-white/5 rounded-md text-on-secondary font-semibold text-sm transition-all duration-200 ease-in-out whitespace-nowrap hover:bg-white/10 hover:text-on-primary [&.router-link-active]:bg-accent [&.router-link-active]:text-on-accent [&.router-link-active]:border [&.router-link-active]:border-accent/40"
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