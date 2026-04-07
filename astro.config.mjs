import { defineConfig } from 'astro/config'
import netlify from '@astrojs/netlify'

export default defineConfig({
  site: 'https://tomgooden.net',
  output: 'static',
  adapter: netlify({
    imageCDN: false,
  }),
})
