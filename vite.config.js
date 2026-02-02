import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   server: {
    port: 3000,
    strictPort: true, // Recommended: prevents Vite from switching to 3001 if 3000 is busy
  },
  plugins: [react(),tailwindcss()],
})
