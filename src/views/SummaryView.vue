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
		<DemonWedgeBuildConfiguration
			v-if="isDemonWedgeConfigVisible"
			@saved="closeDemonWedgeModal"
			@closed="closeDemonWedgeModal" />
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
import DemonWedgeBuildConfiguration from "../components/demonWedgeBuildConfiguration.vue";
import MaterialSummary from "../components/materialSummary.vue";
import Inventory from "../components/inventory.vue";
import Modal from "../components/modal.vue";
import { ref } from "vue";
import DraggableResult from "../components/result/draggableResult.vue";

const isCharacterConfigVisible = ref(false);
const isWeaponConfigVisible = ref(false);
const isDemonWedgeConfigVisible = ref(false);
const isInventoryVisible = ref(false);

function closeCharacterModal() {
	isCharacterConfigVisible.value = false;
}

function closeWeaponModal() {
	isWeaponConfigVisible.value = false;
}

function closeDemonWedgeModal() {
	isDemonWedgeConfigVisible.value = false;
}
</script>
