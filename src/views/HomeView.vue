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
    <div class="bg-no-repeat bg-center h-64 w-full bg-[url('@/assets/images/home-bg.png')]">
      <div
        class="flex flex-col items-center justify-center h-full bg-gradient-to-b from-primary/80 via-neutral/20 to-transparent px-2"
      >
        <h1 class="text-4xl font-semibold">{{ siteMetaData.title }}</h1>
        <h2 class="text-2xl">{{ siteMetaData.description }}</h2>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center w-full h-fit bg-new1">
      <div class="mt-5 mb-5 md:text-left md:text-xl md:w-1/2 pl-2 md-full text-center">
        <p v-html="about"></p>
      </div>
    </div>
    <div class="flex gap-x-28 gap-y-10 flex-col-reverse md:flex-row justify-between">
      <div class="basis-1/2">
        <div class="flex gap-x-28 gap-y-10 flex-col justify-between">
          <div class="basis-1/2">
            <p>
              This area will basically serve as the point of sending most exciting news. Things that
              we are currently working on.
            </p>
            <br />
            <p>
              And if we are looking for students or any companies to collaborate with. Everything
              can be posted here.
            </p>
            <hr class="text-secondary w-full my-4" />
            <p class="text-xs">Last Updated on 23 July, 2023</p>
          </div>
          <div class="basis-1/2">
            <p>&copy; IIT Bombay, 2023</p>
            <p>
              Maintained by SynerG Web Admin. Special thanks to Swaubhik and Sameer for the
              development of the website.
            </p>
          </div>
        </div>
      </div>
      <div class="basis-1/2">
        <p class="text-xl mb-4">News</p>
        <div class="flex flex-col items-center justify-center w-full h-fit bg-new2 pt-2">
          <div
            @click="openModal()"
            class="flex flex-row items-center justify-center w-11/12 m-2 bg-secondary drop-shadow-2xl"
          >
            <div class="w-3/4 text-primary p-4">
              <p class="font-bold text-xl hover:underline">Hola!!</p>
              <p>Hello World</p>
            </div>
            <div class="w-1/4 text-primary">
              <img class="h-32 object-cover" src="@/assets/images/home-bg.png" />
            </div>
          </div>
          <div
            @click="openModal()"
            class="flex flex-row items-center justify-center w-11/12 m-2 bg-secondary drop-shadow-2xl"
          >
            <div class="w-3/4 text-primary p-4">
              <p class="font-bold text-xl hover:underline">Rich Text</p>
              <p>Rich Text is here yay!!</p>
            </div>
            <div class="w-1/4 text-primary">
              <img class="h-32 object-cover" src="@/assets/images/home-bg.png" />
            </div>
          </div>
          <router-link
            :to="{ name: 'news' }"
            class="flex flex-col items-center justify-center w-full mt-2 bg-new3"
          >
            <p class="text-xl p-1 text-primary">Show More</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <p class="text-xl mb-4">Principal Researchers</p>
      <div class="flex flex-col items-center justify-center w-full h-fit bg-new2 pt-2">
        <div
          @click="openModal()"
          class="flex flex-row items-center justify-center w-11/12 m-2 bg-secondary drop-shadow-2xl"
        >
          <div class="w-3/4 text-primary p-4">
            <p class="font-bold text-xl hover:underline">Hola!!</p>
            <p>Hello World</p>
          </div>
          <div class="w-1/4 text-primary">
            <img class="h-32 object-cover" src="@/assets/images/home-bg.png" />
          </div>
        </div>
        <div
          @click="openModal()"
          class="flex flex-row items-center justify-center w-11/12 m-2 bg-secondary drop-shadow-2xl"
        >
          <div class="w-3/4 text-primary p-4">
            <p class="font-bold text-xl hover:underline">Rich Text</p>
            <p>Rich Text is here yay!!</p>
          </div>
          <div class="w-1/4 text-primary">
            <img class="h-32 object-cover" src="@/assets/images/home-bg.png" />
          </div>
        </div>
        <div class="flex flex-col items-center justify-center w-full mt-2 bg-new3"></div>
      </div>
    </div>

    <!-- Previous Design -->
    <div class="flex flex-col md:flex-row gap-10 w-full">
      <div class="flex flex-col md:w-3/4">
        <div class="font-semibold text-4xl">
          <h2>About <span class="text-accent">us</span></h2>
        </div>
        <p v-html="about" class="mt-2 text-left"></p>
      </div>
      <div
        class="border border-accent h-96 rounded-lg flex flex-col md:w-1/4 items-center overflow-y-auto"
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
              <!-- <div class="flex justify-end" v-if="index === 0">
                <span class="relative flex h-3 w-3">
                  <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"
                  ></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-error"></span>
                </span>
              </div> -->
              <h4 class="font-bold">{{ formateDate(news.created) }}</h4>
              <h5 class="font-semibold">{{ news.title }}</h5>
              <p class="font-medium">{{ news.short_description }}</p>
            </li>
          </ul>
        </div>
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
