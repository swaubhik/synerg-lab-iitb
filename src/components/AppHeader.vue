<template>
  <header class="p-4 md:p-8 flex justify-between items-center">
    <router-link :to="{ name: 'home' }">
      <h1 class="sr-only">{{ siteMeataData.title }}</h1>
      <img class="h-12" src="@/assets/synerg-logo.png" alt="logo" />
    </router-link>
    <div class="hidden sm:block">
      <nav class="uppercase font-medium">
        <ul class="flex justify-between gap-8">
          <li>
            <router-link exact-active-class="font-bold text-accent" :to="{ name: 'research' }"
              >Research</router-link
            >
          </li>
          <li>
            <router-link exact-active-class="font-bold text-accent" :to="{ name: 'people' }"
              >People</router-link
            >
          </li>
          <li>
            <router-link exact-active-class="font-bold text-accent" :to="{ name: 'news' }"
              >News</router-link
            >
          </li>
          <li>
            <router-link exact-active-class="font-bold text-accent" :to="{ name: 'resources' }"
              >Resources</router-link
            >
          </li>
          <li>
            <router-link exact-active-class="font-bold text-accent" :to="{ name: 'about' }"
              >About</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
    <div class="hidden sm:block">
      <img class="h-12" src="@/assets/iitb-logo.png" alt="logo" />
    </div>
    <!-- mobile nav -->
    <div class="sm:hidden z-50">
      <button
        v-if="!isMenuOpen"
        type="button"
        class="ml-1 mr-1 h-8 w-8 rounded py-1"
        @click="toggleMenu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        class="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-neutral/90 duration-300 ease-in-out"
        :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
      >
        <div class="absolute top-0 right-0">
          <button type="button" class="mr-5 mt-11 h-8 w-8 rounded" @click="toggleMenu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="text-gray-900 dark:text-gray-100"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <nav class="uppercase font-medium">
          <ul class="flex flex-col divide-y gap-2">
            <li>
              <router-link
                exact-active-class="font-bold text-accent"
                :to="{ name: 'home' }"
                @click="toggleMenu"
                >Home</router-link
              >
            </li>
            <li>
              <router-link
                exact-active-class="font-bold text-accent"
                :to="{ name: 'research' }"
                @click="toggleMenu"
                >Research</router-link
              >
            </li>
            <li>
              <router-link
                exact-active-class="font-bold text-accent"
                :to="{ name: 'people' }"
                @click="toggleMenu"
                >People</router-link
              >
            </li>
            <li>
              <router-link
                exact-active-class="font-bold text-accent"
                :to="{ name: 'news' }"
                @click="toggleMenu"
                >News</router-link
              >
            </li>
            <li>
              <router-link
                exact-active-class="font-bold text-accent"
                :to="{ name: 'resources' }"
                @click="toggleMenu"
                >Resources</router-link
              >
            </li>
            <li>
              <router-link
                exact-active-class="font-bold text-accent"
                :to="{ name: 'about' }"
                @click="toggleMenu"
                >About</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import siteMeataData from '@/data/siteMetadata.js'
export default {
  name: 'AppHeader',
  data() {
    return {
      siteMeataData,
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style></style>
