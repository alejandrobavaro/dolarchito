import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración de Vite para un proyecto React
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  },
  resolve: {
    // Configuración de alias si es necesario
  }
})