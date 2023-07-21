<template>
  <section class="flex flex-col px-10 gap-10 relative">
    <app-modal
      v-if="showModal"
      :isOpen="showModal"
      :title="this.notice.title"
      :publishedDate="this.notice.created"
      :news_details="this.notice.content"
      @close="closeModal"
    />
    <div
      class="bg-no-repeat bg-center h-64 rounded-lg w-full"
      :style="{ backgroundImage: `url(${siteMetaData.homePageBackgroundImage})` }"
    >
      <div
        class="flex flex-col items-center justify-center h-full bg-gradient-to-b from-primary/80 via-neutral/20 to-transparent px-2"
      >
        <h1 class="text-4xl font-semibold">{{ siteMetaData.title }}</h1>
        <h2 class="text-2xl">{{ siteMetaData.description }}</h2>
      </div>
    </div>
    <div class="flex flex-col md:flex-row-reverse gap-10 w-full">
      <div
        class="border  border-accent h-96 rounded-lg flex flex-col md:w-1/4 items-center overflow-y-auto"
      >
        <div class="sticky top-0 z-10 bg-primary/90 flex py-4 w-full items-center justify-center">
          <h3 class="text-2xl text-accent">News</h3>
        </div>
        <div class="flex w-full py-2">
          <ul class="flex flex-col gap-2 text-primary w-full px-2">
            <li
              @click="openModal(), updateModal(news)"
              class="bg-accent rounded-lg py-2 px-4 text-left"
              v-for="(news, index) in notices"
              :key="index"
            >
              <div class="flex justify-end" v-if="index === 0">
                <span class="relative flex h-3 w-3">
                  <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"
                  ></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-error"></span>
                </span>
              </div>
              <h4 class="font-bold">{{ formateDate(news.created) }}</h4>
              <h5 class="font-semibold">{{ news.title }}</h5>
              <p class="font-medium">{{ news.short_description }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col md:w-3/4">
        <div class="font-semibold text-4xl">
          <h2>About <span class="text-accent">us</span></h2>
        </div>
        <p v-html="about" class="mt-2 text-justify"></p>
      </div>
    </div>
  </section>
</template>

<script>
import siteMetaData from '@/data/siteMetaData.js'
import axios from 'axios'
import AppModal from '../components/AppModal.vue'
export default {
  components: { AppModal },
  name: 'HomeView',
  data() {
    return {
      siteMetaData,
      about: '',
      notices: '',
      showModal: false,
      notice: {
        title: String,
        date: String,
        content: String
      }
    }
  },
  async created() {
    await axios
      .get('/api/collections/about/records', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        this.about = response.data.items[0].details
      })
  },
  async mounted() {
    await axios
      .get('/api/collections/news/records', {
        params: {
          sort: '-created'
        },
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        this.notices = response.data.items
      })
  },
  methods: {
    formateDate(date) {
      const newdate = new Date(date)
      return newdate.toDateString()
    },
    openModal() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
    updateModal(news) {
      this.notice = {
        title: news.title,
        date: news.created,
        content: news.news_details
      }
    }
  }
}
</script>
