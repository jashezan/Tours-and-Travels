import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/ -> 5173 port
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
})
