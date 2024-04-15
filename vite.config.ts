/// <reference types="vitest" />
/// <reference types="vite/client" />
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import { configDefaults } from 'vitest/config'
// import mkcert from 'vite-plugin-mkcert'
import vue from '@vitejs/plugin-vue'
import dns from 'dns'
import eslintPlugin from 'vite-plugin-eslint2'

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
      exclude: [...configDefaults.exclude, 'public']
    },
    exclude: [...configDefaults.exclude, 'e2e/*'],
    root: fileURLToPath(new URL('./', import.meta.url))
  },
  // plugins: [eslintPlugin({ fix: true }), mkcert(), vue()],
  plugins: [eslintPlugin({ fix: true }), vue()],
  build: {
    rollupOptions: {
      input: 'src/main.js',
      output: {
        intro: 'console.log("Запуск Vite!");'
      }
    }
  },
  optimizeDeps: {
    entries: []
  }
})
