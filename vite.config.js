import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: /portfolio-2025-FEB/,

  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    outDir: 'dist',      // Ensures the output folder is 'dist'
    cssCodeSplit: true,  // Forces CSS to be split into separate files
    emptyOutDir: true,   // Clears old files before building
    assetsDir: 'assets', // Stores built assets in 'dist/assets'
  },
})
