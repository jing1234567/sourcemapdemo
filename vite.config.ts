import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  build:{
    sourcemap : true,
   /*  rollupOptions:{
      input: './public/index.html',
    } */
  }
})
