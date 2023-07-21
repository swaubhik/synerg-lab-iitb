<template>
  <section class="flex flex-col gap-10">
    <div
      class="bg-no-repeat bg-center bg-cover h-64 rounded-lg w-full bg-[url('@/assets/images/people-bg.jpg')]"
    >
      <div
        class="flex flex-col items-center justify-center h-full bg-gradient-to-b from-primary/80 via-neutral/20 to-transparent"
      >
        <h1 class="text-4xl font-semibold">People</h1>
      </div>
    </div>
    <div class="flex flex-col text-accent justify-center items-center">
      <h2 class="text-3xl font-bold">Faculty</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 place-items-center">
        <div class="col-span-1" v-if="faculties.length == 1"></div>
        <div
          class="flex justify-center items-center flex-col"
          v-for="faculty in faculties"
          :key="faculty.id"
        >
          <img
            class="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg"
            :src="faculty.profile_pic"
            :alt="faculty.name + '&nbsp;Photo'"
          />
          <div class="flex flex-col items-center justify-center mt-3 text-white">
            <h3 class="text-2xl font-semibold mb-5">{{ faculty.name }}</h3>
            <p class="text-sm font-medium">{{ faculty.research_area }}</p>
            <div class="flex gap-4 mt-6 text-accent">
              <a :href="`mailto:${faculty.email}`">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"
                  />
                  <path
                    d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"
                  />
                </svg>
              </a>
              <a :href="faculty.website" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6.5 6.326a6.52 6.52 0 01-1.5.174 6.487 6.487 0 01-5.011-2.36l.49-.98a.423.423 0 01.614-.164l.294.196a.992.992 0 001.491-1.139l-.197-.593a.252.252 0 01.126-.304l1.973-.987a.938.938 0 00.361-1.359.375.375 0 01.239-.576l.125-.025A2.421 2.421 0 0012.327 6.6l.05-.149a1 1 0 00-.242-1.023l-1.489-1.489a.5.5 0 01-.146-.353v-.067a6.5 6.5 0 015.392 9.23 1.398 1.398 0 00-.68-.244l-.566-.566a1.5 1.5 0 00-1.06-.439h-.172a1.5 1.5 0 00-1.06.44l-.593.592a.501.501 0 01-.13.093l-1.578.79a1 1 0 00-.553.894v.191a1 1 0 001 1h.5a.5.5 0 01.5.5v.326z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col text-accent justify-center items-center">
      <h2 class="text-3xl font-bold mb-3">Students</h2>
      <div class="flex border-accent border">
        <button
          @click=";(this.selectedStudents = PHDstudents), (selectedTab = 'phd')"
          class="px-4 py-2 text-accent font-semibold"
          :class="{ 'bg-accent text-white font-bold': selectedTab === 'phd' }"
        >
          PHD
        </button>
        <button
          @click=";(this.selectedStudents = MSstudents), (selectedTab = 'ms')"
          class="px-4 py-2 text-accent font-semibold"
          :class="{ 'bg-accent text-white font-bold': selectedTab === 'ms' }"
        >
          MS
        </button>
        <button
          @click=";(this.selectedStudents = MTechstudents), (selectedTab = 'mtech')"
          class="px-4 py-2 text-accent font-semibold"
          :class="{ 'bg-accent text-white font-bold': selectedTab === 'mtech' }"
        >
          M. Tech
        </button>
        <button
          @click=";(this.selectedStudents = BTechstudents), (selectedTab = 'btech')"
          class="px-4 py-2 text-accent font-semibold"
          :class="{ 'bg-accent text-white font-bold': selectedTab === 'btech' }"
        >
          B. Tech
        </button>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
        <div class="" v-for="student in selectedStudents" :key="student.id">
          <img
            class="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg"
            :src="student.profile_pic"
            :alt="student.name + '&nbsp;Photo'"
          />
          <div class="flex flex-col items-center justify-center mt-3 text-white">
            <h3 class="text-2xl font-semibold mb-5">{{ student.name }}</h3>
            <p class="text-sm font-medium">{{ student.research_area }}</p>
            <div class="flex gap-4 mt-6 text-accent">
              <a :href="`mailto:${student.email}`">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"
                  />
                  <path
                    d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"
                  />
                </svg>
              </a>
              <a :href="student.website" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-8 h-8"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6.5 6.326a6.52 6.52 0 01-1.5.174 6.487 6.487 0 01-5.011-2.36l.49-.98a.423.423 0 01.614-.164l.294.196a.992.992 0 001.491-1.139l-.197-.593a.252.252 0 01.126-.304l1.973-.987a.938.938 0 00.361-1.359.375.375 0 01.239-.576l.125-.025A2.421 2.421 0 0012.327 6.6l.05-.149a1 1 0 00-.242-1.023l-1.489-1.489a.5.5 0 01-.146-.353v-.067a6.5 6.5 0 015.392 9.23 1.398 1.398 0 00-.68-.244l-.566-.566a1.5 1.5 0 00-1.06-.439h-.172a1.5 1.5 0 00-1.06.44l-.593.592a.501.501 0 01-.13.093l-1.578.79a1 1 0 00-.553.894v.191a1 1 0 001 1h.5a.5.5 0 01.5.5v.326z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      faculties: [],
      students: [],
      selectedTab: 'phd',
      selectedStudents: []
    }
  },
  async created() {
    await axios
      .get('/api/collections/users/records', {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        this.faculties = response.data.items.filter((item) => item.user_type === 'faculty')
        this.students = response.data.items.filter((item) => item.user_type === 'student')
        this.faculties.forEach((faculty) => {
          faculty.profile_pic = faculty.profile_pic.replace(
            faculty.profile_pic,
            import.meta.env.VITE_BACKEND_URL +
              `api/files/users/${faculty.id}/` +
              faculty.profile_pic
          )
        })
        this.students.forEach((student) => {
          student.profile_pic = student.profile_pic.replace(
            student.profile_pic,
            import.meta.env.VITE_BACKEND_URL +
              `api/files/users/${student.id}/` +
              student.profile_pic
          )
        })
        this.selectedStudents = this.PHDstudents
      })
  },
  computed: {
    PHDstudents() {
      return this.students.filter((student) => student.student_type === 'phd')
    },
    MSstudents() {
      return this.students.filter((student) => student.student_type === 'ms')
    },
    MTechstudents() {
      return this.students.filter((student) => student.student_type === 'mtech')
    },
    BTechstudents() {
      return this.students.filter((student) => student.student_type === 'btech')
    }
  }
}
</script>

<style></style>
