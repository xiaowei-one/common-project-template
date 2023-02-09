import { defineConfig } from "vite";
import path from 'path';
// 可以不用, 但是 swc 更快
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.ts', '.tsx', '.jx'],
    alias: {
      '@': path.resolve(__dirname)
    }
  },
  server: { host: '0.0.0.0' },
})