import { defineStore } from "pinia";
import { ref } from "vue";
import type { Toast } from "../types/toast";

let nextId = 0;

export const useToastStore = defineStore("toast", () => {
	const toasts = ref<Toast[]>([]);

	function show(message: string, type: Toast["type"] = "error") {
		const id = nextId++;
		toasts.value.push({ id, message, type });

		setTimeout(() => dismiss(id), 5000);
	}

	function dismiss(id: number) {
		toasts.value = toasts.value.filter((t) => t.id !== id);
	}

	return { toasts, show, dismiss };
});
