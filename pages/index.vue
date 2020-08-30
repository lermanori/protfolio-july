<template>
  <div class="flex flex-col md:flex-row-reverse justify-center h-full items-center overflow-hidden">
    <!-- <vue-particles color="#dedede"></vue-particles> -->
    <!-- <particles-bg type="fountain" num="6" color="#000"  :canvas="{backgroundColor:'white'}" :bg="true" /> -->
    <div id="particles-js" class="absolute inset-0 h-screen" style="z-index:-1"></div>
    <div class="md:w-1/2 max-w-3xl mx-auto rounded-lg border overflow-hidden shadow-2xl bg-white">
      <div class="text-theme5 text-6xl text-center font-lg p-4">Ori Lerman</div>
      <div
        class="text-theme5 p-8 text-3xl text-center font-md"
      >Full-Stack developer based in Tel Aviv, Israel.</div>
      <div class="text-white text-3xl text-center flex justify-around p-4">
        <nuxt-link class="app-button uppercase" to="/projects" tag="a">Projects</nuxt-link>
        <a
          class="app-button"
          target="blank"
          href="https://docs.google.com/document/d/17QgEYO_yF0D-fjX7xj7rXtdrGMmra-pFN8stDTTa83E/edit?usp=sharing"
        >CV</a>
      </div>
    </div>
    <!-- <div class="w-1/2 h-full" v-if="$mq !== ('xs' || 'sm')">
      <img class="flex-1 object-cover object-center overflow-hidden w-full h-full" src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80" >
    </div>-->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import { ParticlesBg } from "particles-bg-vue";
export default Vue.extend({
  components: {
    // particlesBg
  },
  mounted() {
    require("particles.js");
    (window as unknown as {particlesJS:any}).particlesJS("particles-js", {
      particles: {
        number: {
          value: 12,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: "#000000"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 1,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 40,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#000000",
          opacity: 0.8,
          width: 4
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: true,
          attract: {
            enable: true,
            rotateX: 40,
            rotateY: 40
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: true,
            mode: "push"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  }
});
</script>

<style scoped>
.app-button {
  @apply bg-theme2;
  @apply border;
  @apply p-4;
  @apply rounded-lg;
  @apply my-6;
  @apply outline-none;
}
.app-button:hover {
  @apply bg-theme1;
  @apply text-black;
  @apply shadow-2xl;
}
</style>