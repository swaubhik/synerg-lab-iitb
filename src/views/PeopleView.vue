<template>
  <section class="flex flex-col gap-10">
    <div class="bg-no-repeat bg-center h-64 rounded-lg w-full bg-red-700">
      <div
        class="flex flex-col items-center justify-center h-full bg-gradient-to-b from-primary via-neutral/20 to-transparent"
      >
        <h1 class="text-4xl font-semibold">People</h1>
      </div>
    </div>
    <div class="flex flex-col text-accent justify-center items-center">
      <h2 class="text-3xl font-bold">Faculty</h2>
      <div class="grid grid-cols-3 gap-10 mt-10">
        <div class="w-96 h-96 bg-white rounded-lg shadow-lg" v-for="n in 3" :key="n"></div>
        <div class="w-96 h-2 bg-white rounded-lg shadow-lg" v-for="n in 3" :key="n"></div>
        <div class="w-96 h-2 bg-white rounded-lg shadow-lg" v-for="n in 3" :key="n"></div>
        <div class="w-96 h-2 bg-white rounded-lg shadow-lg" v-for="n in 3" :key="n"></div>
      </div>
    </div>
    <div class="flex flex-col text-accent justify-center items-center">
      <h2 class="text-3xl font-bold">Students</h2>
      <div class="grid grid-cols-3 gap-10 mt-10">
        <div class="w-96 h-96 bg-white rounded-lg shadow-lg" v-for="n in 3" :key="n"></div>
        <div class="w-96 h-2 bg-white rounded-lg shadow-lg" v-for="n in 3" :key="n"></div>
        <div class="w-96 h-2 bg-white rounded-lg shadow-lg" v-for="n in 3" :key="n"></div>
        <div class="w-96 h-2 bg-white rounded-lg shadow-lg" v-for="n in 3" :key="n"></div>
        <div class="w-96 h-96 bg-white rounded-lg shadow-lg" v-for="n in 3" :key="n"></div>
        <div class="w-96 h-2 bg-white rounded-lg shadow-lg" v-for="n in 3" :key="n"></div>
        <div class="w-96 h-2 bg-white rounded-lg shadow-lg" v-for="n in 3" :key="n"></div>
        <div class="w-96 h-2 bg-white rounded-lg shadow-lg" v-for="n in 3" :key="n"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
