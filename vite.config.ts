import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Base path for GitHub Pages
  // If deploying to https://<USERNAME>.github.io/<REPO>/
  // Set base to '/<REPO>/'
  // If deploying to custom domain, set to '/'
  base: process.env.VITE_BASE_PATH || '/basekit/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
