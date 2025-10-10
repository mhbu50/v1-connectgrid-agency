import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// ✅ No Cloudflare plugin — fully compatible with Bun & Node

export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
    sourcemap: 'inline', // Better error reporting
    rollupOptions: {
      output: {
        sourcemapExcludeSources: false, // Include original source
      },
    },
  },
  css: {
    devSourcemap: true, // Enable source maps in dev
  },
  server: {
    allowedHosts: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, './shared'),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['agents'], // Avoid pre-bundling Node-dependent package
    force: true,
  },
  define: {
    global: 'globalThis', // Support Node-style globals
  },
  cacheDir: 'node_modules/.vite', // Clear cache more aggressively
})
