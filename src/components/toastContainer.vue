<template>
	<div
		v-if="toastStore.toasts.length"
		class="fixed bottom-4 right-4 z-[200] flex flex-col gap-2 max-w-sm">
		<div
			v-for="toast in toastStore.toasts"
			:key="toast.id"
			class="flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg text-sm animate-[fadeIn_0.2s_ease]"
			:class="toastClasses(toast.type)"
			role="alert">
			<i :class="toastIcon(toast.type)"></i>
			<span class="flex-1">{{ toast.message }}</span>
			<button
				@click="toastStore.dismiss(toast.id)"
				class="opacity-60 hover:opacity-100 transition-opacity"
				aria-label="Dismiss notification">
				<i class="fas fa-xmark"></i>
			</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useToastStore } from "../stores/toast";
import type { Toast } from "../types/toast";

const toastStore = useToastStore();

function toastClasses(type: Toast["type"]) {
	switch (type) {
		case "error":
			return "bg-red-900/90 text-red-100 border border-red-700/50";
		case "warning":
			return "bg-yellow-900/90 text-yellow-100 border border-yellow-700/50";
		case "info":
			return "bg-blue-900/90 text-blue-100 border border-blue-700/50";
	}
}

function toastIcon(type: Toast["type"]) {
	switch (type) {
		case "error":
			return "fas fa-circle-exclamation text-red-400";
		case "warning":
			return "fas fa-triangle-exclamation text-yellow-400";
		case "info":
			return "fas fa-circle-info text-blue-400";
	}
}
</script>
