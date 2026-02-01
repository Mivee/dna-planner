<template>
  <nav class="flex justify-between">
    <RouterLink to="/character">characters</RouterLink>
    <RouterLink to="/weapon">weapons</RouterLink>
    <RouterLink to="/wedges">wedges</RouterLink>
    <RouterLink to="/inventory">inventory</RouterLink>
  </nav>
  <main>
    <Settings />
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import Settings from './components/settings.vue';

</script>