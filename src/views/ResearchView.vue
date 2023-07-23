<template>
  <section class="flex flex-col px-10 gap-10 relative">
    <div class="bg-no-repeat bg-center h-64 w-full bg-[url('@/assets/images/home-bg.png')]">
      <div
        class="flex flex-col items-center justify-center h-full bg-gradient-to-b from-primary/80 via-neutral/20 to-transparent px-2"
      >
        <h1 class="text-4xl font-semibold">Research</h1>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center w-full h-fit mt-5">
      <div
        class="vmb-5 md:text-left md:w-1/2 p-2"
        v-for="research_area in research_areas"
        :key="research_area.id"
      >
        <h2 v-html="research_area.topic" class="text-xl mb-2"></h2>
        <p v-html="research_area.details"></p>
      </div>
    </div>
    <hr class="text-secondary w-full" />
    <p class="text-xs">Last Updated on 23 July, 2023</p>

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
      research_areas: '',
      research_area: {
        topic: String,
        date: String,
        details: String
      }
    }
  },
  async created() {
    await axios
      .get('/api/collections/research/records', {
        params: {
          sort: '-created'
        },
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        this.research_areas = response.data.items
      })
  },
  methods: {
    formateDate(date) {
      const newdate = new Date(date)
      return newdate.toDateString()
    }
  }
}
</script>
