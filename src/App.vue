<script setup>
import { RouterView } from 'vue-router';
import Header from './Header.vue';
import Footer from './Footer.vue';
</script>

<template>
  <div class="app-root">
    <Header />
    <main class="app-content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.app-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-content {
  flex: 1 0 auto;
}
</style>
