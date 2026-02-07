<template>
    <div class="animate-[fadeIn_0.3s_ease]">
        <div
            class="flex justify-between items-center mb-6 px-5 py-4 bg-secondary border border-white/10 rounded-lg shadow-lg">
            <h2 class="m-0 text-2xl flex items-center gap-3 text-on-primary font-bold">
                <i class="fas fa-gem text-xl text-warning"></i>
                Daemon Wedges
            </h2>
        </div>
        <DaemonWedges />
    </div>
</template>

<script lang="ts" setup>
import DaemonWedges from '../components/daemonWedges.vue'
</script>
