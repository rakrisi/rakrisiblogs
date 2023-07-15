// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width,initial-scale=1",
      title: "RaKriSi Blog",
      titleTemplate: "%s - RaKriSi Blog",
      meta: [{ name: "description", content: "Elon's awesome blog" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      wpUri: process.env.WP_URI,
    },
  },
});
