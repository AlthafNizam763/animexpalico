import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/xpalicoportfolio/', // Use your repo name with slashes
  plugins: [react()],
})

