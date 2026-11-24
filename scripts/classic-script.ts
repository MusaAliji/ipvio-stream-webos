/**
 * Makes the built index.html load from file://, as webOS serves apps.
 *
 * There the page origin is null, so Chromium refuses module scripts and
 * CORS-mode (`crossorigin`) requests. The bundle is built as a single IIFE, so
 * the entry becomes a classic script; `defer` keeps the module timing (runs
 * after the document is parsed). `crossorigin` is dropped from the stylesheet.
 *
 * Throws if a module script survives (for example because Vite changed its
 * markup), so the build fails instead of the app failing only on the TV.
 */
export function toClassicScript(html: string): string {
  const result = html
    .replace(/<script type="module" crossorigin src=/g, '<script defer src=')
    .replace(/<link rel="stylesheet" crossorigin href=/g, '<link rel="stylesheet" href=');

  if (/<script[^>]*type="module"/.test(result)) {
    throw new Error('classic-script: a module script is left in index.html; update the rewrite.');
  }
  return result;
}
