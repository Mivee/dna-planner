import { ref } from "vue";
import { useUiStore } from "../stores/ui";

interface UseResultCardActionsOptions {
	name: () => string;
	identifier: () => string | null | undefined;
}

export function useResultCardActions(options: UseResultCardActionsOptions) {
	const { removeConfiguration } = useUiStore();
	const isEditing = ref(false);

	function edit() {
		isEditing.value = true;
	}

	function toggleIsEditing() {
		isEditing.value = !isEditing.value;
	}

	function remove() {
		const identifier = options.identifier();
		if (!identifier) return;

		if (confirm(`Remove ${options.name()}?`)) {
			removeConfiguration(identifier);
		}
	}

	return {
		isEditing,
		edit,
		remove,
		toggleIsEditing,
	};
}
