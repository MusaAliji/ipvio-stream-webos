import { defineConfig, type Plugin } from 'vitest/config';
import { toClassicScript } from './scripts/classic-script.ts';

/** Rewrites the built index.html so it loads from file:// on the TV. */
function classicScript(): Plugin {
  return {
    name: 'ipvio:classic-script',
    apply: 'build',
    transformIndexHtml: { order: 'post', handler: toClassicScript },
  };
}

export default defineConfig({
  // webOS serves the app from file://, so every URL must be relative.
  base: './',
  oxc: {
    jsx: { runtime: 'automatic', importSource: 'preact' },
  },
  plugins: [classicScript()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rolldownOptions: {
      output: { format: 'iife' },
    },
  },
  test: {
    include: ['src/**/*.test.{ts,tsx}', 'scripts/**/*.test.ts'],
  },
});
