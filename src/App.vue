<template>
  <AppHeader />
  <main>
    <router-view />
  </main>
  <AppFooter />
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppHeader from './components/AppHeader.vue'
export default { components: { AppHeader, AppFooter } }
</script>

<style></style>
