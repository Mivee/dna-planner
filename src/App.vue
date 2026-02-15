<template>
  <div class="min-h-screen bg-primary">
    <!-- Header with navigation -->
    <header class="bg-primary-dark border-b border-white/20 shadow-lg sticky top-0 z-[100] backdrop-blur-sm">
      <div class="max-w-[1400px] mx-auto px-6 py-4 flex items-center gap-8 flex-wrap">
        <div class="flex items-center gap-3">
          <i class="fas fa-flask-vial text-[1.75rem] text-accent"></i>
          <h1 class="text-2xl m-0 font-bold text-white">DNA Planner</h1>
        </div>
        <nav class="flex gap-2 flex-1 flex-wrap" role="navigation" aria-label="Main navigation">
          <NavigationItem to="/character" label="Characters" icon="fas fa-users" />
          <NavigationItem to="/wedges" label="Wedges" icon="fas fa-gem" />

          <button @click="openSettingsModal"
            class="flex items-center gap-2 px-4 py-2.5 bg-secondary rounded-md text-white-muted font-semibold text-sm transition-all duration-200 ease-in-out whitespace-nowrap hover:bg-secondary-light hover:text-white cursor-pointer border-none"
            aria-label="Open settings">
            <i class="fas fa-cog text-base"></i>
            <span>Settings</span>
          </button>
        </nav>
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Settings from './components/settings.vue';
import Modal from './components/modal.vue';
import NavigationItem from './components/navigationItem.vue';

const showSettings = ref(false);

function handleSaveSettings() {
  showSettings.value = false;
}

function openSettingsModal() {
  showSettings.value = true;
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
  header>div {
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