import { defineConfig } from 'tsup'

export default defineConfig({
  target: 'es5',
  splitting: false,
  sourcemap: true,
  minify: true,
  bundle: true, // bundle all dependencies
  clean: true, // clean up the dist folder
  dts: true, // generate dts files
  format: ['cjs', 'esm'], // generate cjs and esm files
  skipNodeModulesBundle: true,
  entryPoints: ['src/index.ts'],
  outDir: 'dist',
  entry: ['src/**/*.ts'], //include all files under src
})
