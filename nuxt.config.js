import { createSEOMeta } from './exports/seo'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'PK solarpower | Made',
    htmlAttrs: {
      lang: 'nl'
    },
    meta: [
      ...createSEOMeta({
        title: 'Wij zijn sinds 2010 actief in de zonnepanelen als PK-solarpower bv. Bekijk hier ons assortiment, leer over de voordelen van onze panelen en neem contact met ons op!',
        description: 'PK solarpower maakt alleen gebruik van de kwalitatief hoogwaardige zonnepanelen met een lage warmte coëfficiënt en plus tolerantie. Ook monteren en plaatsen wij de gehele installatie van het dak tot aan de meterkast.',
        image: '/imageLarge.jpg'
      }),
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'styles/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
