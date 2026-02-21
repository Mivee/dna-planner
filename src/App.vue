<template>
	<div class="min-h-screen bg-primary">
		<!-- Header with navigation -->
		<header
			class="bg-primary-dark border-b border-white/20 shadow-lg sticky top-0 z-[100] backdrop-blur-sm">
			<div
				class="flex justify-between items-center mb-6! px-5 py-4 bg-secondary border border-white/10 rounded-lg shadow-lg sm:flex-col sm:gap-4 sm:items-stretch">
				<h2
					class="m-0 text-2xl flex items-center gap-3 text-on-primary font-bold">
					<i class="fas fa-users text-xl text-accent"></i>
					Planner
				</h2>
				<div class="flex justify-between">
					<div class="flex gap-3">
						<button
							class="flex items-center gap-2 whitespace-nowrap sm:justify-center"
							@click="openCharacterModal">
							<i class="fas fa-user-plus"></i>
							Add Character
						</button>
						<button
							class="flex items-center gap-2 whitespace-nowrap sm:justify-center"
							@click="openWeaponModal">
							<i class="fas fa-plus"></i>
							Add Weapon
						</button>
						<button
							class="flex items-center gap-2 whitespace-nowrap sm:justify-center"
							@click="openDaemonWedgeModal">
							<i class="fas fa-gem"></i>
							Add Daemon Wedge
						</button>
						<button
							class="flex items-center gap-2 whitespace-nowrap sm:justify-center"
							@click="openInventoryModal">
							<i class="fas fa-box"></i>
							Inventory
						</button>
					</div>
					<div class="flex">
						<button
							@click="openSettingsModal"
							class="flex items-center gap-2 whitespace-nowrap sm:justify-center"
							aria-label="Open settings">
							<i class="fas fa-cog text-base"></i>
							<span>Settings</span>
						</button>
					</div>
				</div>
			</div>
		</header>

		<!-- Main content area -->
		<main class="max-w-[1400px] mx-auto p-6" role="main">
			<RouterView v-slot="{ Component }">
				<transition name="page" mode="out-in">
					<component :is="Component" />
				</transition>
			</RouterView>
		</main>

		<!-- Settings Modal -->
		<Modal v-model:isOpen="showSettings" @save="handleSaveSettings">
			<template #header>
				<h2 class="m-0 text-xl text-white font-bold">Settings</h2>
			</template>
			<Settings />
		</Modal>

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

<script setup lang="ts">
import { ref } from "vue";
import Settings from "./components/settings.vue";
import Modal from "./components/modal.vue";
import CharacterBuildConfiguration from "./components/characterBuildConfiguration.vue";
import WeaponBuildConfiguration from "./components/weaponBuildConfiguration.vue";
import DaemonWedgeBuildConfiguration from "./components/daemonWedgeBuildConfiguration.vue";
import Inventory from "./components/inventory.vue";

const showSettings = ref(false);

function handleSaveSettings() {
	showSettings.value = false;
}

function openSettingsModal() {
	showSettings.value = true;
}

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

<style scoped>
/* Page transitions */
.page-enter-active,
.page-leave-active {
	transition: all 0.2s ease;
}

.page-enter-from {
	opacity: 0;
	transform: translateY(10px);
}

.page-leave-to {
	opacity: 0;
}

@media (max-width: 768px) {
	header > div {
		flex-direction: column;
		align-items: stretch;
		gap: 1rem;
	}

	nav {
		flex-direction: row;
		overflow-x: auto;
	}

	nav a {
		flex: 1;
		justify-content: center;
	}
}
</style>
