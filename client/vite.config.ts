
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // allows us to use vitest library methods in unit test without explicit imports
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
  },
})
