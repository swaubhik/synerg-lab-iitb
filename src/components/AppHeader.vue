<template>
  <header class="max-w-6xl mx-auto container px-10 py-2 flex justify-between items-center sticky">
    <router-link :to="{ name: 'home' }">
      <h1 class="sr-only">{{ siteMeataData.title }}</h1>
      <img class="w-10 h-10" src="@/assets/logo.svg" alt="logo" />
    </router-link>
    <nav class="uppercase font-medium">
      <ul class="flex justify-between gap-2">
        <li>
          <router-link exact-active-class="font-bold" :to="{ name: 'people' }">People</router-link>
        </li>
        <li>
          <router-link exact-active-class="font-bold" :to="{ name: 'projects' }"
            >Projects</router-link
          >
        </li>
        <li>
          <router-link exact-active-class="font-bold" :to="{ name: 'publications' }"
            >Publications</router-link
          >
        </li>
        <li>
          <router-link exact-active-class="font-bold" :to="{ name: 'contact-us' }"
            >Contact Us</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import siteMeataData from '@/data/siteMetadata.js'
export default {
  name: 'AppHeader',
  data() {
    return {
      siteMeataData
    }
  }
}
</script>

<style></style>
