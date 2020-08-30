/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontFamily: {
      'lg': ['Prompt', 'sans-serif'],
      'md': ['Hind Vadodara', 'sans-serif'],
      'sm': ['Rokkitt', 'serif']
    },
    extend:{
      colors: {
        'theme1': '#F2F2F2',
        'theme2': '#A6A6A6',
        'theme3': '#737373',
        'theme4': '#595959',
        'theme5': '#404040',
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
