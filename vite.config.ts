import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: './', // Ensures relative paths for production
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // Avoid bundling lucide-react in dev
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Unified alias resolution
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: true,
    assetsInlineLimit: 0, // Ensures assets are not inlined (helps with MIME issues)
  },
  server: {
    port: 3000,
    open: true,
  },
  esbuild: {
    jsxInject: `import React from 'react'`, // Auto-import React in JSX
  },
});
