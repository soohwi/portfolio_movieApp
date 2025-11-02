/**
 * vite.config.ts
**/

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/portfolio_movieApp/',
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
        exportType: 'named', // 'default' or 'named'
      },
    }),
  ],
});