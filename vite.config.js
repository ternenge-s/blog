import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  return {
    /* define: {
      SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
      SANITY_ACCESS_TOKEN: process.env.SANITY_ACCESS_TOKEN,
      PORT: process.env.PORT,
      MAIL_PASS_KEY: process.env.MAIL_PASS_KEY,
    },*/
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
  };
});
