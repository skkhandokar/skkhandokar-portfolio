import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Ei line ta add korle Sass warning ta block hoye jabe
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
})