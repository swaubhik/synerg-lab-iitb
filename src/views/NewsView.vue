<template>
  <section class="flex flex-col px-10 gap-10 relative">
    <app-modal
      v-if="showModal"
      :isOpen="showModal"
      :title="this.notice.title"
      :publishedDate="this.notice.date"
      :news_details="this.notice.content"
      @close="closeModal"
    />
    <div class="bg-no-repeat bg-center h-64 w-full bg-[url('@/assets/images/home-bg.png')]">
      <div
        class="flex flex-col items-center justify-center h-full bg-gradient-to-b from-primary/80 via-neutral/20 to-transparent px-2"
      >
        <h1 class="text-4xl font-semibold">News</h1>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center w-full h-fit mt-5">
      <div class="flex flex-col items-center justify-itemes-center md:w-2/3 w-full h-fit pt-2">
        <div class="vmb-5 text-left w-full p-2">
          <div class="mt-1">
            <p class="text-xl mb-4">2023</p>
          </div>
        </div>
        <div
          v-for="news in newsList"
          :key="news.id"
          class="flex flex-row items-center justify-center w-11/12 m-2 bg-secondary drop-shadow-2xl"
          @click="openModal(), updateModalNews(news)"
        >
          <div class="w-3/4 text-primary p-4 mr-16">
            <p class="font-bold text-xl hover:underline">{{ news.title }}</p>
            <p>{{ news.short_description }}</p>
          </div>
          <div class="w-1/4 text-primary">
            <img class="h-32 object-cover" :src="news.thumbnail_url" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppModal from '../components/AppModal.vue'
import siteMetaData from '@/data/siteMetaData.js'
import axios, { formToJSON } from 'axios'
import { mapImagePath, formattedDate } from '../helpers'
export default {
  components: { AppModal },
  name: 'NewsView',
  data() {
    return {
      newsList: [],
      showModal: false,
      modalContent: {
        title: String,
        date: String,
        content: String
      }
    }
  },
  async created() {
    await axios
      .get('/api/collections/news/records?sort=-updated', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        this.newsList = response.data.items
        this.newsList.forEach((news) => {
          news.thumbnail_url = mapImagePath(news.id, 'news', news.thumbnail)
        })
      })
  },
  methods: {
    openModal() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    },
    updateModalNews(news) {
      this.notice = {
        title: news.title,
        date: news.updated,
        content: news.news_details
      }
    }
  }
}
</script>
