import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Configuración de Vite para el proyecto de portafolio web
// - Define la base para que funcione correctamente en GitHub Pages
// - Configura alias de rutas para imports más limpios
export default defineConfig({
  base: '/portfolio-web/', // 👈 importante para que funcione en GitHub Pages
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});