import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts:['89c5-2401-4900-1c7b-a422-e003-6221-4e0f-2d2b.ngrok-free.app'],
  },
  
})
