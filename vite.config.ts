import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Relative paths for production
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // Skip bundling lucide-react
  },
  resolve: {
    alias: {
      '@': '/src', // Path alias for imports
    },
  },
  build: {
    outDir: 'dist', // Production build output directory
  },
  server: {
    port: 3000, // Custom dev server port (default: 5173)
    open: true, // Auto-open browser on startup
  },
  esbuild: {
    jsxInject: `import React from 'react'`, // Auto-injects React in JSX files
  },
});
