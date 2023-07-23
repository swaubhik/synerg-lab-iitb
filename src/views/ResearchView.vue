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
        class="vmb-5 md:text-left md:w-2/3 p-2"
        v-for="research_area in research_areas"
        :key="research_area.id"
      >
        <div>
          <h2  v-html="research_area.topic" class="text-xl prose mb-2 prose-invert"></h2>
          <p class="prose prose-invert" v-html="research_area.details"></p>
        </div>
      </div>
      <div class="vmb-5 text-left w-full md:w-2/3 p-2">
        <hr class="text-secondary w-full" />
        <p class="text-xs p-2">Last Updated on 23 July, 2023</p>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center w-full h-fit mt-5">
      <div class="vmb-5 text-left w-full md:w-2/3 p-2">
        <div class="mt-4">
          <p class="text-xl mb-4">Publications</p>
        </div>
      </div>
      <div class="flex flex-col items-center justify-itemes-center md:w-2/3 w-full h-fit pt-2">
        <div class="vmb-5 text-left w-full p-2">
          <div class="mt-1">
            <p class="text-xl mb-4">2023</p>
          </div>
        </div>
        <div class="flex flex-row w-11/12 m-2 drop-shadow-2xl">
          <div class="w-1/4">
            <img class="h-32 w-32 object-cover" src="@/assets/images/home-bg.png" />
          </div>
          <div class="w-3/4 p-2">
            <p>
              Leveraging Programmable Dataplanes for a High Performance 5G User Plane Function,
              Abhik Bose, Diptyaroop Maji, Prateek Agarwal, Nilesh Unhale, Rinku Shah, Mythili
              Vutukuru in Asia-Pacific Workshop on Networking (APNet) on June, 2021 Hello World
            </p>
            <p class="font-bold hover:underline">[pdf]</p>
          </div>
        </div>

        <div class="vmb-5 text-left w-full p-2">
          <div class="mt-1">
            <p class="text-xl mb-4">2022</p>
          </div>
        </div>
        <div class="flex flex-row w-11/12 m-2 drop-shadow-2xl">
          <div class="w-1/4">
            <img class="h-32 w-32 object-cover" src="@/assets/images/home-bg.png" />
          </div>
          <div class="w-3/4 p-2">
            <p>
              Leveraging Programmable Dataplanes for a High Performance 5G User Plane Function,
              Abhik Bose, Diptyaroop Maji, Prateek Agarwal, Nilesh Unhale, Rinku Shah, Mythili
              Vutukuru in Asia-Pacific Workshop on Networking (APNet) on June, 2021 Hello World
            </p>
            <p class="font-bold hover:underline">[pdf]</p>
          </div>
        </div>
        <div class="flex flex-row w-11/12 m-2 drop-shadow-2xl">
          <div class="w-1/4">
            <img class="h-32 w-32 object-cover" src="@/assets/images/home-bg.png" />
          </div>
          <div class="w-3/4 p-2">
            <p>
              Leveraging Programmable Dataplanes for a High Performance 5G User Plane Function,
              Abhik Bose, Diptyaroop Maji, Prateek Agarwal, Nilesh Unhale, Rinku Shah, Mythili
              Vutukuru in Asia-Pacific Workshop on Networking (APNet) on June, 2021 Hello World
            </p>
            <p class="font-bold hover:underline">[pdf]</p>
          </div>
        </div>
        <div class="flex flex-row w-11/12 m-2 drop-shadow-2xl">
          <div class="w-1/4">
            <img class="h-32 w-32 object-cover" src="@/assets/images/home-bg.png" />
          </div>
          <div class="w-3/4 p-2">
            <p>
              Leveraging Programmable Dataplanes for a High Performance 5G User Plane Function,
              Abhik Bose, Diptyaroop Maji, Prateek Agarwal, Nilesh Unhale, Rinku Shah, Mythili
              Vutukuru in Asia-Pacific Workshop on Networking (APNet) on June, 2021 Hello World
            </p>
            <p class="font-bold hover:underline">[pdf]</p>
          </div>
        </div>

        <div class="vmb-5 text-left w-full p-2">
          <div class="mt-1">
            <p class="text-xl mb-4">2021</p>
          </div>
        </div>
        <div class="flex flex-row w-11/12 m-2 drop-shadow-2xl">
          <div class="w-1/4">
            <img class="h-32 w-32 object-cover" src="@/assets/images/home-bg.png" />
          </div>
          <div class="w-3/4 p-2">
            <p>
              Leveraging Programmable Dataplanes for a High Performance 5G User Plane Function,
              Abhik Bose, Diptyaroop Maji, Prateek Agarwal, Nilesh Unhale, Rinku Shah, Mythili
              Vutukuru in Asia-Pacific Workshop on Networking (APNet) on June, 2021 Hello World
            </p>
            <p class="font-bold hover:underline">[pdf]</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import siteMetaData from '@/data/siteMetaData.js'
import axios from 'axios'
export default {
  name: 'ResearchView',
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
