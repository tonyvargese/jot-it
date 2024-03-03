import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    jsx: 'react',
  },
});
