/**
 * webOS loads apps from file://, where Chromium refuses module scripts and
 * CORS-mode (`crossorigin`) requests because the page origin is null. The
 * bundle is built as a single IIFE, so the entry can be a classic script;
 * `defer` keeps the module timing (runs after the document is parsed).
 */
export function toClassicScript(html: string): string {
  return html
    .replace(/<script type="module" crossorigin src=/g, '<script defer src=')
    .replace(/<link rel="stylesheet" crossorigin href=/g, '<link rel="stylesheet" href=');
}
