import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const base = process.env.VITE_BASE || (process.env.NODE_ENV === 'production' ? '/elevator-landing/' : '/');

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
