import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'about', 'index.html'),
        houses: resolve(root, 'houselist', 'index.html'),
        maps: resolve(root, 'maps', 'index.html'),
        information: resolve(root, 'Houses', 'index.html'),
        contact: resolve(root, 'contact-us', 'index.html'),
      }
    }
  }
})
