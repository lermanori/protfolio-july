<template>
  <div>
    <div :class="['font-sm','md:flex',i%2==0 ? 'md:flex-row':'md:flex-row-reverse']" >
      <div class="md:w-1/2 font-sm">
        <h1 class="text-3xl ml-8 pt-4 capitalize mt-4 inline-block border-b border-theme5">{{project.title}}</h1>
        <p class="text-xl font-normal p-4 px-8">{{project.one_liner}}</p>
      </div>
      <img class="md:w-1/2 md:h-64 object-cover object-center" :src="project.picture_url" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    project: {
      type: Object,
      required: true
    },
    i: {
      type: Number,
      required: true
    }
  }
});
</script>

<style scoped>
</style>