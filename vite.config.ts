/// <reference types="vitest" />
/// <reference types="vite/client" />
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import mkcert from 'vite-plugin-mkcert'
import vue from '@vitejs/plugin-vue'
import dns from 'dns'
import eslintPlugin from 'vite-plugin-eslint2'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

dns.setDefaultResultOrder('verbatim')
export default defineConfig({
  server: {
    host: true,
    port: 8080
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  test: {
    environment: 'jsdom',
    pool: 'forks',
    coverage: {
      provider: 'v8',
      enabled: true,
      reporter: ['html', 'json'],
      exclude: [
        ...configDefaults.exclude,
        'public',
        'src/main.ts',
        '.eslintrc.cjs',
        'postcss.config.js',
        'tailwind.config.js'
      ]
    },
    exclude: [...configDefaults.exclude, 'e2e/*'],
    root: fileURLToPath(new URL('./', import.meta.url))
  },
  plugins: [
    eslintPlugin({ fix: true }),
    mkcert(),
    vue(),
    dts({
      rollupTypes: true,
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      formats: ['es', 'umd'],
      entry: resolve(__dirname, 'src/components/DatePicker/index.ts'),
      name: 'datepickertest',
      fileName: (format) => `datepickertest.${format}.ts`
    },
    emptyOutDir: true,
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  optimizeDeps: {
    entries: []
  }
})
