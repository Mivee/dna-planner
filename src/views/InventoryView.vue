<template>
    <div class="animate-[fadeIn_0.3s_ease]">
        <div class="flex justify-between items-center mb-6 px-5 py-4 bg-secondary border border-white/10 rounded-lg shadow-lg">
            <h2 class="m-0 text-2xl flex items-center gap-3 text-on-primary font-bold">
                <i class="fas fa-box-archive text-xl text-accent"></i>
                Inventory
            </h2>
        </div>
        <Inventory />
    </div>
</template>

<script lang="ts" setup>
import Inventory from '../components/inventory.vue';
</script>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>