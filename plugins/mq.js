import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '~/tailwind.config.js'
import Vue from 'vue'
import VueMq from 'vue-mq'

const fullConfig = resolveConfig(tailwindConfig)
const screenSizes = fullConfig.theme.screens
const sizesMap = getScreenSize(screenSizes);

Vue.use(VueMq,{
    breakpoints:{
        xs:450,
        xxl:Infinity,
        ...sizesMap,
    },
    defaultBreakpoint:'sm'
})

function getScreenSize(screenSizes) {
  const sm = parseInt(screenSizes.sm)
  const md = parseInt(screenSizes.md)
  const lg = parseInt(screenSizes.lg)
  const xl = parseInt(screenSizes.xl)

  return {sm,md,lg,xl}
}
