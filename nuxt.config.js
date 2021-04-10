export default {
  head: {
    title: 'JAMSTACK demo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'JAMSTACK demo content' }
    ],
  },
  plugins: [
    '~/plugins/fireauth.js'
  ],
  target: "static",
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
  ],
  modules: [
    [
      "storyblok-nuxt",
      {
        accessToken: "w2rZfyJCUykSb5BAMm4mAQtt",
        cacheProvider: "memory",
      },
    ],
  ],
};
