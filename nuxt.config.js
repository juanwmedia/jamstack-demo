export default {
  target: 'static',
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
  ],
  modules: [
    [
      'storyblok-nuxt',
      {
        accessToken: 'w2rZfyJCUykSb5BAMm4mAQtt',
        cacheProvider: 'memory'
      }
    ],
  ]
};