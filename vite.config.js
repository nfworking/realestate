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
        information: resolve(root, 'package1', 'index.html'),
        information2: resolve(root, 'package2', 'index.html'),
        information3: resolve(root, 'package3', 'index.html'),
        contact: resolve(root, 'contact-us', 'index.html'),
      }
    }
  }
})
