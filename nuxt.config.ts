import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  srcDir: 'src',
  components: false, // 公式docに書いてないけど無効化できてる？
  publicRuntimeConfig: {},
  privateRuntimeConfig: {},
  meta: {
    title: '',
    titleTemplate: chunk => (chunk ? `${chunk} | NuxtApp` : 'NuxtApp'),
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
    ]
  },
  css: [
    '~/assets/styles/reset.scss',
    '~/assets/styles/main.scss'
  ],
  modules: [
    '@pinia/nuxt'
  ],
  buildModules: []
})
