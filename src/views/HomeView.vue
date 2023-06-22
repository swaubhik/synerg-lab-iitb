<template>
  <section class="flex flex-col px-4">
    <div
      class="bg-no-repeat bg-center h-64 rounded-lg"
      :style="{ backgroundImage: `url(${siteMetaData.homePageBackgroundImage})` }"
    >
      <div class="flex flex-col items-center justify-center h-full">
        <h1 class="text-4xl font-bold text-white">{{ siteMetaData.title }}</h1>
        <h2 class="text-2xl font-bold text-white">{{ siteMetaData.description }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
import siteMetaData from '@/data/siteMetaData.js'
export default {
  name: 'HomeView',
  data() {
    return {
      siteMetaData
    }
  },
  methods: {
    // ...
  }
}
</script>

<style></style>
