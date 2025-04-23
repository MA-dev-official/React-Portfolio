import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  server: {
    allowedHosts: [
      '646345dd-5ac2-4e18-a49d-6dd79fe0592c-00-1mrwi5ep1gwln.pike.replit.dev'
    ]
  },
})
