<template>
    <div>
        <div
            class="flex justify-between items-center mb-6 px-5 py-4 bg-secondary border border-white/10 rounded-lg shadow-lg">
            <h2 class="m-0 text-2xl flex items-center gap-3 text-on-primary font-bold">
                <i class="fas fa-box-archive text-xl text-accent"></i>
                {{ props.name }}
            </h2>
            <span class="text-sm font-bold text-blue-400">×{{ props.quantity }}</span>
        </div>
    </div>
</template>
<script lang="ts" setup>
interface Props {
    name: string;
    quantity: number;
}

const props = defineProps<Props>();
</script>