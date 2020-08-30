<template>
  <div
    id="main"
    :class="['w-full','min-h-screen',`bg-theme1`,'md:text-left','py-6']"
  >
    <div
      :class="['md:flex','px-8' ,'md:justify-center','max-w-lg', 'md:max-w-4xl','lg:max-w-6xl', 'mx-auto' ,`text-theme5`]"
    >
      <div id="left-col " class="max-w-lg md:mr-4 lg:mr-8">
        <h1 class="text-4xl lg:text-4xl font-bold capitalize font-lg">{{project.title}}</h1>
        <div :class="['h-1 ','w-fill' ,'border-2','mt-2']"></div>
        <div :class="['border-2','h-64 mt-4','overflow-hidden']">
          <img :src="project.picture_url" class="object-center object-cover h-full w-full" />
        </div>
        <div class="flex justify-between md:my-4">
          <a :href="project.preview_url"
          target="blank"
          v-show="project.preview_url != 'none'"
            :class="['text-md font-bold' ,`hover:text-blue-400`, 'cursor-pointer flex']"
          >
            <svg class="h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                class="heroicon-ui"
                d="M17.56 17.66a8 8 0 0 1-11.32 0L1.3 12.7a1 1 0 0 1 0-1.42l4.95-4.95a8 8 0 0 1 11.32 0l4.95 4.95a1 1 0 0 1 0 1.42l-4.95 4.95zm-9.9-1.42a6 6 0 0 0 8.48 0L20.38 12l-4.24-4.24a6 6 0 0 0-8.48 0L3.4 12l4.25 4.24zM11.9 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
              />
            </svg>
            <span class="ml-2">live preview</span>
          </a>
          <a :href="project.source_url"
          target="blank"
            v-show="project.source_url != 'none'"
            class='text-md font-bold hover:text-blue-400  cursor-pointer flex'
          >
            <svg class="h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                class="heroicon-ui"
                d="M20.59 12l-3.3-3.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l3.3-3.3zM3.4 12l3.3 3.3a1 1 0 0 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 1.4L3.4 12zm7.56 8.24a1 1 0 0 1-1.94-.48l4-16a1 1 0 1 1 1.94.48l-4 16z"
              />
            </svg>
            <span class="ml-2">source preview</span>
          </a>
        </div>
        <p class="lg:text-lg font-md">{{project.description}}</p>
        <h4 class="text-lg font-bold md:mt-4 font-md lg:text-3xl capitalize">technologies used:</h4>
        <ul>
          <li
            class="list-disc list-inside font-sm lg:text-lg"
            v-for="(tech,idx) in project.tech_used"
            :key="'tch-'+idx"
          >{{tech}}</li>
        </ul>
      </div>
      <div id="right-col" class="max-w-md md:ml-4 lg:ml-8">
        <div v-for="(section,idx) in project.sections" :key="'sctn-'+idx">
          <h1 class="text-xl lg:text-3xl my-2 md:my-4 font-md font-bold capitalize">{{section.title}}</h1>
          <ul>
            <li
              class="list-disc  lg:text-lg font-sm"
              v-for="(feature,idx) in section.text"
              :key="'ftr-'+idx"
            >{{feature}}</li>
          </ul>
        </div>
        <div id="notabl-features">
          <h1 class="text-xl lg:text-3xl my-2 md:mt-4 font-md font-bold capitalize">notable features:</h1>
          <ul>
            <li
              class="list-disc lg:text-lg font-sm"
              v-for="(feature,idx) in project.notable_features"
              :key="'ftr-'+idx"
            >{{feature}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
async asyncData({$content,params}){
    const projects = await $content('/body').fetch() as any;
    const id:number = parseInt(params.id)
    const project = projects.array[id];
    console.log(project)
    return {project}
}


});
</script>

<style scoped>
h4,h1{
  @apply text-center;
}

</style>