<template>
  <div
    v-if="isOpen"
    class="fixed top-0 left-0 z-50 bg-secondary/75 w-screen h-screen flex justify-center items-center"
  >
    <div class="bg-secondary relative flex flex-col items-center w-11/12 mx-6 h-5/6 rounded-xl shadow-2xl text-primary a-primary">
      <button
        @click="$emit('close')"
        class="absolute -top-3 -right-3 shadow-lg w-10 h-10 bg-red-600 rounded-full flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div class="p-10 mt-5 mb-5 md:text-left md:w-1/2 md-full overflow-auto">
        <h2 class="text-2xl font-bold">{{ title }}</h2>
        <span v-if="!!publishedDate" class="leading-6 flex">{{ formateDate(publishedDate) }}</span>
        <hr class="my-2" />
        <div class="">
          <article v-html="news_details" class=""></article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formattedDate } from '../helpers'
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'Title'
    },
    publishedDate: {
      type: String,
      required: false,
    },
    news_details: {
      type: String,
      required: true,
      default: `Sorry no details Found`
    },
    isOpen: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  methods: {
    formateDate: (date)  => formattedDate(date)
  }
}
</script>
