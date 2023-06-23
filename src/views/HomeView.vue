<template>
  <section class="flex flex-col px-10 gap-10">
    <div
      class="bg-no-repeat bg-center h-64 rounded-lg w-full"
      :style="{ backgroundImage: `url(${siteMetaData.homePageBackgroundImage})` }"
    >
      <div
        class="flex flex-col items-center justify-center h-full bg-gradient-to-b from-primary via-neutral/20 to-transparent px-2"
      >
        <h1 class="text-4xl font-semibold">{{ siteMetaData.title }}</h1>
        <h2 class="text-2xl">{{ siteMetaData.description }}</h2>
      </div>
    </div>
    <div class="flex flex-col md:flex-row-reverse relative gap-10 w-full">
      <div
        class="border border-accent h-96 rounded-lg flex flex-col md:w-1/4 items-center overflow-y-auto"
      >
        <div class="sticky top-0 bg-primary/90 flex py-4 w-full items-center justify-center">
          <h3 class="text-2xl text-accent">News</h3>
        </div>
        <div class="flex w-full py-2">
          <ul class="flex flex-col gap-2 text-primary w-full px-2">
            <li class="bg-accent rounded-lg py-2 px-4" v-for="news in 10" :key="news.id">
              <h4 class="font-bold">{{ news }}.06.2023</h4>
              <h5 class="font-semibold">news title</h5>
              <p class="font-medium">news description</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col md:w-3/4">
        <div class="font-semibold text-4xl">
          <h2>About <span class="text-accent">us</span></h2>
        </div>
        <p class="mt-2 text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
          <br />
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
          are also reproduced in their exact original form, accompanied by English versions from the
          1914 translation by H. Rackham. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Autem voluptas, sed alias iusto incidunt inventore, dolorem nulla recusandae voluptates ut
          ex excepturi rem aut natus dicta veniam ad, soluta odit! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ex beatae quae sequi magnam quis? Commodi non distinctio
          similique vel, delectus quas cum porro in nulla modi, hic nihil provident aut eveniet
          vitae error reprehenderit nesciunt minima voluptate temporibus, quae quos dolor et. Omnis
          officia laudantium, corrupti earum vel eum incidunt? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Necessitatibus, ducimus. Reiciendis esse facilis eaque sequi
          ducimus, quam architecto hic quia laudantium, optio magnam repellat dolorem cumque. Ipsam
          illum itaque perspiciatis deserunt architecto unde iure reiciendis voluptas placeat
          tenetur dolor quasi maxime consequuntur eos, facere non quos error quo? Dolores, quo?
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import siteMetaData from '@/data/siteMetaData.js'
export default {
  name: 'HomeView',
  data() {
    return {
      siteMetaData
    }
  },
  methods: {
    // ...
  }
}
</script>
