// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/animexpalico/',  // 👈 this must match the GitHub repo name exactly
  plugins: [react()],
})