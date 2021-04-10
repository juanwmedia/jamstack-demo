export default {
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
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
  ],
  auth: {
    strategies: {
      discord: {
        clientId: "830170189576405024",
        clientSecret: "G_Q02KdNot64LIb7WWvPxkbrYG-bdBUW",
      },
    },
  },
};
