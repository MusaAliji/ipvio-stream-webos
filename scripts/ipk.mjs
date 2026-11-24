// Shared facts about the built app for the package and deploy scripts.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

/** Repository root, the working directory for the ares-* commands. */
export const root = fileURLToPath(new URL('..', import.meta.url));

/** appinfo.json as built into dist/. */
export const appinfo = JSON.parse(
  readFileSync(new URL('../dist/appinfo.json', import.meta.url), 'utf8'),
);

/** The .ipk ares-package writes, relative to the root. */
export const ipk = `out/${appinfo.id}_${appinfo.version}_all.ipk`;
