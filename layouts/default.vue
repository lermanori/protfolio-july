<template>
  <div style="height:90vh">
    <div class="p-2 m-2 font-lg text-2xl text-theme5">
      <div class="text-center">
      <nuxt-link class="block hover:text-blue-400 my-2 md:inline-block" to="/" v-if="$route.name !== 'index'">HOME</nuxt-link>
      <nuxt-link
        class="hover:text-blue-400 ml-4 my-2 md:inline-block"
        to="/projects"
        v-if="$route.name !== 'index' && $route.name !== 'projects'"
      >PROJECTS</nuxt-link>
      <nuxt-link class="block hover:text-blue-400 ml-4 my-2 md:inline-block" to="/contact"  v-if="$route.name !== 'contact'">CONTACT ME</nuxt-link>
      </div>
    </div>
    <Nuxt class="bg-transparent" />
  </div>
</template>

<style>
</style>
