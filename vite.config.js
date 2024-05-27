import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

console.log('loaded vitest config');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setup.js'
  }
});
