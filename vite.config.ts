import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  base: '/fast-calc/',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        // Option A: Using the modern SASS @use syntax (Recommended)
        // additionalData: `@import "@/assets/styles/main.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
