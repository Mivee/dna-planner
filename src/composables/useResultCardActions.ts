import { ref } from "vue";
import { useUiStore } from "../stores/ui";

interface UseResultCardActionsOptions {
	name: () => string | null;
	identifier: () => string | null | undefined;
}

export function useResultCardActions(options: UseResultCardActionsOptions) {
	const { removeConfiguration } = useUiStore();
	const isEditing = ref(false);
	const showConfirmDelete = ref(false);

	function edit() {
		isEditing.value = true;
	}

	function toggleIsEditing() {
		isEditing.value = !isEditing.value;
	}

	function remove() {
		const identifier = options.identifier();
		if (!identifier) return;
		showConfirmDelete.value = true;
	}

	function confirmRemove() {
		const identifier = options.identifier();
		if (identifier) {
			removeConfiguration(identifier);
		}
		showConfirmDelete.value = false;
	}

	function cancelRemove() {
		showConfirmDelete.value = false;
	}

	return {
		isEditing,
		showConfirmDelete,
		edit,
		remove,
		confirmRemove,
		cancelRemove,
		toggleIsEditing,
	};
}
