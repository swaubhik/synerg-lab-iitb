<template>
  <div
    v-if="isOpen"
    class="fixed top-0 left-0 z-50 bg-secondary/75 w-screen h-screen flex justify-center items-center"
  >
    <div class="bg-accent relative flex flex-col w-1/2 h-3/4 rounded-xl shadow-2xl text-primary">
      <button
        @click="$emit('close')"
        class="absolute -top-3 -right-3 shadow-lg w-10 h-10 bg-secondary rounded-full flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="black"
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div class="p-10">
        <h2 class="text-2xl font-bold">{{ title }}</h2>
        <span class="leading-6 flex justify-end">{{ formateDate(publishedDate) }}</span>
        <hr class="my-2" />
        <div class="h-96 overflow-auto">
          <article v-html="news_details" class="prose"></article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'Title'
    },
    publishedDate: {
      type: String,
      required: true,
      default: '07-07-2023'
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
    formateDate(date) {
      const newdate = new Date(date)
      console.log(newdate)
      return newdate.toDateString()
    }
  }
}
</script>
