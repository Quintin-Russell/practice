import dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

let { PORT, DEV_SERVER_PORT } = process.env;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
    },
    host: true,
    port: DEV_SERVER_PORT,
  },
  build: {
    outDir: 'dist/app',
  },
});
