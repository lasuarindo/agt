import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
    }
  },
  server: {
    allowedHosts: ['.ngrok-free.app'],
  },
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: true,
        manualChunks(id) {
                   
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router')) {
            return 'vendor/@react';
          }
          
          // 2. Jika kamu pakai library UI besar (contoh: Lucide Icons, Radix, atau Framer Motion)
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor/@lucide-icons';
          }
          
          // 3. Jika pakai library utilitas/parser besar (contoh: Axios, Zod, PDF parser, dll)
          if (id.includes('node_modules/axios') || id.includes('node_modules/zod')) {
            return 'vendor/@axios';
          }
          
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor/@framer-motion';
          }
          
          if (id.includes('node_modules/html5-qrcode')) {
            return 'vendor/@html5-qrcode';
          }
          
          if (id.includes('node_modules/motion')) {
            return 'vendor/@motion';
          }
          
        }
      }
    }
  }
})
