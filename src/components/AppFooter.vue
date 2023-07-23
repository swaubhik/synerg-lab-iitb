<template>
  <footer class="relative bottom-0 px-10 py-2 flex justify-between flex-col">
    <hr class="text-secondary w-full my-4" />
    <div class="flex gap-x-28 gap-y-10 flex-col-reverse md:flex-row justify-between">
      <div md:class="basis-1/3">
        <img class="h-12" src="@/assets/synerg-logo.png" alt="logo" />
        <p>SIB401, Kanwal Rekhi Building</p>
        <p>Department of Computer Science and Engineering</p>
        <p>Indian Institute of Technology Bombai, Powai - 400076</p>
      </div>
      <div class="basis-1/3">
        <p>&copy; IIT Bombay, 2023</p>
        <p>
          Maintained by SynerG Web Admin. Special thanks to Swaubhik and Sameer for the development
          of the website.
        </p>
      </div>
      <div class="basis-1/3">
        <p class="text-xl text-accent py-1">Useful Links</p>
        <a :href="siteMetaData.socials.iitb" target="_blank" rel="noopener noreferrer"
          >IIT Bombay</a
        >
        <br />
        <a :href="siteMetaData.socials.cseiitb" target="_blank" rel="noopener noreferrer"
          >CSE Department</a
        >
        <p class="text-xl text-accent py-1">Internal Links</p>
        <a :href="siteMetaData.socials.adminlogin" target="_blank" rel="noopener noreferrer"
          >Admin Login</a
        >
      </div>
    </div>
  </footer>
</template>

<script>
import siteMetaData from '@/data/siteMetadata.js'
export default {
  name: 'AppFooter',
  data() {
    return {
      siteMetaData
    }
  }
}
</script>

<style></style>
