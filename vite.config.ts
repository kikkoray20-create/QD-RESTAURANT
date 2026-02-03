
import { defineConfig } from 'vite';

export default defineConfig({
  // Use the repository name for the base path on GitHub Pages
  base: '/QD-RESTAURANT/',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000
  }
});
