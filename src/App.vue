<template>
  <div class="min-h-screen bg-primary">
    <!-- Header with navigation -->
    <header class="bg-gradient-to-r from-primary via-secondary to-primary border-b border-white/10 shadow-lg sticky top-0 z-[100] backdrop-blur-[10px]">
      <div class="max-w-[1400px] mx-auto px-6 py-4 flex items-center gap-8 flex-wrap">
        <div class="flex items-center gap-3">
          <i class="fas fa-flask-vial text-[1.75rem] text-accent"></i>
          <h1 class="text-2xl m-0 font-bold text-on-primary">DNA Planner</h1>
        </div>
        <nav class="flex gap-2 flex-1 flex-wrap" role="navigation" aria-label="Main navigation">
          <RouterLink to="/character" class="flex items-center gap-2 px-4 py-2.5 bg-white/5 rounded-md text-on-secondary font-semibold text-sm transition-all duration-200 ease-in-out whitespace-nowrap hover:bg-white/10 hover:text-on-primary [&.router-link-active]:bg-info [&.router-link-active]:text-white" aria-label="Navigate to characters">
            <i class="fas fa-users text-base"></i>
            <span>Characters</span>
          </RouterLink>
          <RouterLink to="/weapon" class="flex items-center gap-2 px-4 py-2.5 bg-white/5 rounded-md text-on-secondary font-semibold text-sm transition-all duration-200 ease-in-out whitespace-nowrap hover:bg-white/10 hover:text-on-primary [&.router-link-active]:bg-info [&.router-link-active]:text-white" aria-label="Navigate to weapons">
            <i class="fas fa-sword text-base"></i>
            <span>Weapons</span>
          </RouterLink>
          <RouterLink to="/wedges" class="flex items-center gap-2 px-4 py-2.5 bg-white/5 rounded-md text-on-secondary font-semibold text-sm transition-all duration-200 ease-in-out whitespace-nowrap hover:bg-white/10 hover:text-on-primary [&.router-link-active]:bg-info [&.router-link-active]:text-white" aria-label="Navigate to wedges">
            <i class="fas fa-gem text-base"></i>
            <span>Wedges</span>
          </RouterLink>
          <RouterLink to="/inventory" class="flex items-center gap-2 px-4 py-2.5 bg-white/5 rounded-md text-on-secondary font-semibold text-sm transition-all duration-200 ease-in-out whitespace-nowrap hover:bg-white/10 hover:text-on-primary [&.router-link-active]:bg-info [&.router-link-active]:text-white" aria-label="Navigate to inventory">
            <i class="fas fa-box-archive text-base"></i>
            <span>Inventory</span>
          </RouterLink>
        </nav>
      </div>
    </header>

    <!-- Main content area -->
    <main class="max-w-[1400px] mx-auto p-6" role="main">
      <Settings />
      <RouterView v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
  </div>
</template>

<script setup lang="ts">
import Settings from './components/settings.vue';
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