import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/json-to-form',
  resolve: {
    alias: [
      {
        find: 'components',
        replacement: fileURLToPath(
          new URL('./src/components', import.meta.url),
        ),
      },
      {
        find: 'core',
        replacement: fileURLToPath(new URL('./src/core', import.meta.url)),
      },
      {
        find: 'styles',
        replacement: fileURLToPath(new URL('./src/styles', import.meta.url)),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use 'styles/colors' as *;`,
      },
    },
  },
});
