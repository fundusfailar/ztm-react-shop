import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
  ],
  
  server: {
    host: '0.0.0.0',
    allowedHosts: ['4f9cf144-73ca-44d2-bec7-a663fa7e8943-00-2nhm30gq2xuie.riker.replit.dev']
  }
})
