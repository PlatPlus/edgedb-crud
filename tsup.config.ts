import { defineConfig } from 'tsup'

export default defineConfig({
  target: 'es5',
  format: ['esm'],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  minify: true
})
