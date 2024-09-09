import { join, resolve } from 'node:path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import { dependencies, devDependencies } from './package.json'

export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,

      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // add alias '@' для директории 'src'
    },
  },
  build: {
    emptyOutDir: true,
    outDir: './dist',
    target: 'esnext',
    minify: false,
    lib: {
      entry: resolve(__dirname, join('src', 'index.ts')),
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
        'react/jsx-runtime',
      ],
      output: {
        dir: 'dist',
        entryFileNames: '[name].cjs',
        format: 'cjs',
      },
    },
  },
})
