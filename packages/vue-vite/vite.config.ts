import { defineConfig } from "vite"
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

export default defineConfig({
  plugins: [vue(), jsx()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
    }
  },
  server: { host: '0.0.0.0' }
})