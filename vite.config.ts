
import { defineConfig } from 'vite';

export default defineConfig({
  // base path should match your repository name if not using a custom domain
  // Example: '/my-restaurant-app/'
  // Using './' makes it relative and works in most GitHub Pages setups
  base: './',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000
  }
});
