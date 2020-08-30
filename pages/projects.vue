<template>
  <div class="bg-theme2 p-8">
    <div class="flex justify-center">
      <h1 class="font-lg text-6xl text-white my-4 uppercase">Projects</h1>
    </div>
    <main>
      <section
        class="max-w-4xl mx-auto font-md my-4 section bg-theme1 rounded overflow-hidden text-theme5"
        v-for="(project,i) in projects"
        :key="i"
      >
      <nuxt-link tag="a" :to="'project/'+i">
        <appProject :project="project" :i="i"></appProject>
      </nuxt-link>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import appProject from "~/components/appProject.vue";
export default Vue.extend({
  async asyncData({ $content }) {
    const projects = await $content("/body").fetch();
    return { projects:(projects as unknown as {array:any[]}).array };
  },
  components: {
    appProject
  }
});
</script>

<style scoped>
.section {
  position: relative;
  transition: transform 0.5s ease;
  transform: scale(1);
  z-index: 0;
  opacity: 1;
}
.section:hover {
  transform: scale(1.15);
  z-index: 10;
  box-shadow: 10px 10px 10px 10px gray;
}
</style>