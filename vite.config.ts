import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import Sitemap from 'vite-plugin-sitemap';

// Lista de rotas do projeto para sitemap
const routes = [
  '/sobre-nos',
  '/gas-de-cozinha-ribeirao-pires',
  '/gas-de-cozinha-maua',
  '/gas-do-povo-ribeirao-pires',
  '/agua-mineral-ribeirao-pires',
  '/blog',
  '/blog/agua-mineral-crystal-ribeirao-pires-entrega',
  '/blog/agua-mineral-k2o-ribeirao-pires-entrega',
  '/blog/agua-mineral-e-gas-de-cozinha-ribeirao-pires-entrega-rapida',
  '/blog/agua-mineral-ribeirao-pires-entrega-rapida-casa-empresa',
  '/blog/gas-de-cozinha-ribeirao-pires-seguranca',
  '/blog/receita-economica-gas-ribeirao-pires',
  '/blog/entrega-gas-de-cozinha-ribeirao-pires-plantao',
  '/blog/cuidados-gas-de-cozinha-ribeirao-pires'
];

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://diskgasdecozinha.com.br',
      dynamicRoutes: routes,
      changefreq: 'weekly',
      priority: 0.8
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
  },
});
