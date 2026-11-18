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
        // Code splitting via Rolldown `advancedChunks` (menggantikan `manualChunks` yang deprecated).
        // Setiap grup menangkap modul berdasarkan pola path; `priority` menentukan grup yang menang lebih dulu.
        advancedChunks: {
          groups: [
            {
              name: 'vendor/@react',
              test: /node_modules[\\/](react|react-dom|react-router)[\\/]/,
              priority: 30
            },
            {
              name: 'vendor/@lucide-icons',
              test: /node_modules[\\/]lucide-react[\\/]/,
              priority: 25
            },
            {
              name: 'vendor/@framer-motion',
              test: /node_modules[\\/]framer-motion[\\/]/,
              priority: 20
            },
            {
              name: 'vendor/@motion',
              test: /node_modules[\\/]motion[\\/]/,
              priority: 20
            },
            {
              name: 'vendor/@axios',
              test: /node_modules[\\/](axios|zod)[\\/]/,
              priority: 20
            },
            {
              name: 'vendor/@html5-qrcode',
              test: /node_modules[\\/]html5-qrcode[\\/]/,
              priority: 15
            }
          ]
        }
      }
    }
  }
})