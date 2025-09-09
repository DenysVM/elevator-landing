import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { qrcode } from 'vite-plugin-qrcode';

const base = process.env.VITE_BASE || '/';

export default defineConfig({
  base,
  plugins: [react(), qrcode()],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
