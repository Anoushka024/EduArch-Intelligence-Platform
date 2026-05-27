import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        explore: resolve(__dirname, 'explore.html'),
        compare: resolve(__dirname, 'compare.html'),
        details: resolve(__dirname, 'details.html'),
      },
    },
  },
});
