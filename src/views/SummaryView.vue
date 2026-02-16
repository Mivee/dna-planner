<template>
	<div class="animate-[fadeIn_0.3s_ease]">
		<div
			class="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 items-start">
			<div class="order-2 md:order-1">
				<MaterialSummary />
			</div>
			<DraggableResult />
		</div>

		<CharacterBuildConfiguration
			v-if="isCharacterConfigVisible"
			@saved="closeCharacterModal"
			@closed="closeCharacterModal" />
		<WeaponBuildConfiguration
			v-if="isWeaponConfigVisible"
			@saved="closeWeaponModal"
			@closed="closeWeaponModal" />
		<DaemonWedgeBuildConfiguration
			v-if="isDaemonWedgeConfigVisible"
			@saved="closeDaemonWedgeModal"
			@closed="closeDaemonWedgeModal" />
		<Modal v-if="isInventoryVisible" v-model:is-open="isInventoryVisible">
			<Inventory />
		</Modal>
		<Modal v-if="isInventoryVisible" v-model:is-open="isInventoryVisible">
			<Inventory />
		</Modal>
	</div>
</template>

<script lang="ts" setup>
import CharacterBuildConfiguration from "../components/characterBuildConfiguration.vue";
import WeaponBuildConfiguration from "../components/weaponBuildConfiguration.vue";
import DaemonWedgeBuildConfiguration from "../components/daemonWedgeBuildConfiguration.vue";
import MaterialSummary from "../components/materialSummary.vue";
import Inventory from "../components/inventory.vue";
import Modal from "../components/modal.vue";
import { ref } from "vue";
import DraggableResult from "../components/draggableResult.vue";

const isCharacterConfigVisible = ref(false);
const isWeaponConfigVisible = ref(false);
const isDaemonWedgeConfigVisible = ref(false);
const isInventoryVisible = ref(false);

function openCharacterModal() {
	isCharacterConfigVisible.value = true;
}

function closeCharacterModal() {
	isCharacterConfigVisible.value = false;
}

function openWeaponModal() {
	isWeaponConfigVisible.value = true;
}

function closeWeaponModal() {
	isWeaponConfigVisible.value = false;
}

function openDaemonWedgeModal() {
	isDaemonWedgeConfigVisible.value = true;
}

function closeDaemonWedgeModal() {
	isDaemonWedgeConfigVisible.value = false;
}

function openInventoryModal() {
	isInventoryVisible.value = true;
}
</script>
