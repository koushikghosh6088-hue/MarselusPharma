import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        therapyAreas: resolve(__dirname, 'therapy-areas.html'),
        therapyGastro: resolve(__dirname, 'therapy-gastroenterology.html'),
        therapyWomens: resolve(__dirname, 'therapy-womens-health.html'),
        therapyNutrition: resolve(__dirname, 'therapy-clinical-nutrition.html'),
        products: resolve(__dirname, 'products.html'),
        artemes: resolve(__dirname, 'product-artemes.html'),
        saranya: resolve(__dirname, 'product-saranya.html'),
        immunomars: resolve(__dirname, 'product-immunomars.html'),
        uv60k: resolve(__dirname, 'product-uv60k.html'),
        science: resolve(__dirname, 'science.html'),
        careers: resolve(__dirname, 'careers.html'),
        contact: resolve(__dirname, 'contact.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
