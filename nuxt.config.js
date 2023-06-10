export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/Favicon.png' }
      ],
      title: 'Employees List',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { hid: 'description', name: 'description', content: 'Employees List' }
      ]
    }
  },
  googleFonts: {
    display: 'Playfair Display',
    prefetch: true,
    preconnect: true,
    download: false,
    preload: true,
    families: {
      'Playfair Display': [400, 500, 700, '400i', '700i']
    }
  },
  devtools: { enabled: true }
})
