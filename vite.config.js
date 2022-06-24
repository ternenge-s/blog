import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

function getManualChunk(dependencies) {}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    chunkSplitPlugin({
      strategy: 'single-vendor',
      customSplitting: {
        'react-vendor': ['react', 'react-dom'],
        'icon-vendor': ['react-icons'],
        'assets-vendor': ['/src/assets/'],
        'tailwind-vendor': ['tailwindcss'],
      },
    }),
  ],
});
