// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  app: {
    head: {
      title: "Banco papaya",
      meta: [
        { charset: "utf-8" },
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        //{ src: "https://awesome-lib.js" },
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        // { rel: "stylesheet", href: "https://awesome-lib.css" },
        // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        // { children: ":root { color: red }", type: "text/css" },
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: "JavaScript is required" },
      ],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    /*["@nuxtjs/robots", { UserAgent: "*", Disallow: "" }],*/
  ],
});
