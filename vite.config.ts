import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

// https://vitejs.dev/config/

const pwaOptions: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  // injectRegister: 'inline',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png'],
  manifest: {
    name: 'Endavu App',
    id: 'Endavu',
    short_name: 'Endavu',
    lang: 'en-US',
    description: 'Financial assets viewer',
    display: 'standalone',
    display_override: ['window-controls-overlay'],
    edge_side_panel: {
      preferred_width: 496,
    },
    theme_color: '#ffffff',
    dir: 'ltr',
    categories: ['finance', 'business'],
    icons: [
      {
        src: '/pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/pwa-maskable-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/pwa-maskable-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  },
};

export default defineConfig({
  plugins: [react(), VitePWA(pwaOptions)],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
