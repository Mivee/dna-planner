<template>
  <div class="app-container">
    <!-- Header with navigation -->
    <header class="app-header">
      <div class="header-content">
        <div class="app-branding">
          <i class="fas fa-flask-vial"></i>
          <h1 class="app-title">DNA Planner</h1>
        </div>
        <nav class="main-nav" role="navigation" aria-label="Main navigation">
          <RouterLink to="/character" class="nav-link" aria-label="Navigate to characters">
            <i class="fas fa-users"></i>
            <span>Characters</span>
          </RouterLink>
          <RouterLink to="/weapon" class="nav-link" aria-label="Navigate to weapons">
            <i class="fas fa-sword"></i>
            <span>Weapons</span>
          </RouterLink>
          <RouterLink to="/wedges" class="nav-link" aria-label="Navigate to wedges">
            <i class="fas fa-gem"></i>
            <span>Wedges</span>
          </RouterLink>
          <RouterLink to="/inventory" class="nav-link" aria-label="Navigate to inventory">
            <i class="fas fa-box-archive"></i>
            <span>Inventory</span>
          </RouterLink>
        </nav>
      </div>
    </header>

    <!-- Main content area -->
    <main class="main-content" role="main">
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
.app-container {
  min-height: 100vh;
  background: var(--color-bg-primary);
}

/* Header styling */
.app-header {
  background: var(--gradient-header);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: var(--shadow-md);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.app-branding {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.app-branding i {
  font-size: 1.75rem;
  color: var(--color-accent-gold);
}

.app-title {
  font-size: 1.5rem;
  margin: 0;
  font-weight: 700;
  color: var(--color-text-primary);
}

.main-nav {
  display: flex;
  gap: 0.5rem;
  flex: 1;
  flex-wrap: wrap;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  color: var(--color-text-secondary);
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--color-text-primary);
}

.nav-link.router-link-active {
  background: var(--color-accent-blue);
  color: white;
}

.nav-link i {
  font-size: 1rem;
}

/* Main content */
.main-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem;
}

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
  .header-content {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
  
  .main-nav {
    flex-direction: row;
    overflow-x: auto;
  }
  
  .nav-link {
    flex: 1;
    justify-content: center;
  }
}
</style>