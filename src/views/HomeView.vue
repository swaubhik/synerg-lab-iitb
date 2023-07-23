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
        <h1 class="text-4xl font-semibold">{{ siteMetaData.title }}</h1>
        <h2 class="text-2xl">{{ siteMetaData.description }}</h2>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center w-full h-fit bg-new1">
      <div class="mt-5 mb-5 md:text-left md:text-xl md:w-1/2 p-2 md-full text-center">
        <p v-html="about"></p>
      </div>
    </div>
    <div class="flex gap-x-28 gap-y-10 flex-col-reverse md:flex-row justify-between">
      <div class="basis-1/2">
        <div class="flex gap-x-28 gap-y-10 flex-col justify-between">
          <div class="basis-1/2">
            <p v-html="update"></p>
            <hr class="text-secondary w-full my-4" />
            <p class="text-xs">Last Updated on {{ updateDate }}</p>
          </div>
          <div class="basis-1/2">
            <p class="text-xl mb-4">Research</p>
            <div class="flex flex-row flex-wrap">
              <a
                v-for="topic in displayTopics"
                :key="topic.id"
                class="bg-secondary text-primary p-1 m-1 font-bold w-fit hover:underline"
                href="#"
              >
                {{ topic.topic }}
              </a>
            </div>
            <router-link :to="{ name: 'research' }" class="mt-4">
              <p class="text-sm p-1 mt-3 hover:underline">Show More</p>
            </router-link>
          </div>
        </div>
      </div>
      <div class="basis-1/2">
        <p class="text-xl mb-4">News</p>
        <div class="flex flex-col items-center justify-center w-full h-fit bg-new2 pt-2">
          <div
            v-for="news in newsList"
            :key="news.id"
            @click="openModal(), updateModalNews(news)"
            class="flex flex-row items-center justify-center w-11/12 m-2 bg-secondary drop-shadow-2xl"
          >
            <div class="w-3/4 text-primary p-4">
              <p class="font-bold text-xl hover:underline">{{ news.title }}</p>
              <p>{{ news.short_description }}</p>
            </div>
            <div class="w-1/4 text-primary">
              <img class="h-32 object-cover" :src="news.thumbnail_url" />
            </div>
          </div>

          <!-- <div
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
          </div> -->
          <router-link
            :to="{ name: 'news' }"
            class="flex flex-col items-center justify-center w-full mt-2 bg-new3"
          >
            <p class="text-xl p-1 text-primary hover:underline">Show More</p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <p class="text-xl mb-4">Principal Researchers</p>
      <div class="flex flex-col items-center justify-center w-full h-fit bg-new2 pt-2">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10 place-items-center"
        >
          <div
            @click="openModal(), updateModalFaculty(faculty)"
            class="flex justify-center items-center flex-col w-11/12 m-2 drop-shadow-2xl filter hover:grayscale hover:contrast-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            v-for="faculty in faculties"
            :key="faculty.id"
          >
            <img
              class="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg"
              :src="faculty.profile_pic"
              :alt="faculty.name + '&nbsp;Photo'"
            />
            <div class="flex flex-col items-center justify-center mt-3 text-white">
              <h3 class="text-2xl font-semibold mb-5">{{ faculty.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Previous Design -->
    <!-- <div class="flex flex-col md:flex-row gap-10 w-full">
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
            > -->
    <!-- <div class="flex justify-end" v-if="index === 0">
                <span class="relative flex h-3 w-3">
                  <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"
                  ></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-error"></span>
                </span>
              </div> -->
    <!-- <h4 class="font-bold">{{ formateDate(news.created) }}</h4>
              <h5 class="font-semibold">{{ news.title }}</h5>
              <p class="font-medium">{{ news.short_description }}</p>
            </li>
          </ul>
        </div>
      </div> 
    </div>-->
  </section>
</template>

<script>
import siteMetaData from '@/data/siteMetaData.js'
import axios, { formToJSON } from 'axios'
import AppModal from '../components/AppModal.vue'
import { mapImagePath, formattedDate } from '../helpers'

export default {
  components: { AppModal },
  name: 'HomeView',
  data() {
    return {
      faculties: [],
      siteMetaData,
      about: '',
      update: '',
      updateDate: '',
      displayTopics: {
        id: String,
        topic: String
      },
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
      .get('/api/collections/about/records/000000000000001', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        this.about = response.data.details
      }),
      await axios
        .get('/api/collections/about/records/000000000000002', {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          this.update = response.data.details
          this.updateDate = formattedDate(response.data.updated)
        }),
      await axios
        .get('/api/collections/research/records?sort=@random&perPage=4', {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          this.displayTopics = response.data.items
        }),
      await axios
        .get('/api/collections/users/records', {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          this.faculties = response.data.items.filter((item) => item.user_type === 'faculty')
          this.faculties.forEach((faculty) => {
            faculty.profile_pic = mapImagePath(faculty.id, 'users', faculty.profile_pic)
          })
        })
    await axios
      .get('/api/collections/news/records?sort=-updated&perPage=2', {
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
    },
    updateModalFaculty(faculty) {
      this.notice = {
        title: faculty.name,
        date: undefined,
        content: faculty.faculty_notes
      }
    }
  }
}
</script>
