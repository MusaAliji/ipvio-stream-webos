// Packages dist/ into out/<app id>_<version>_all.ipk with ares-package (from @webos-tools/cli).
import { execSync } from 'node:child_process';
import { readFileSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const appinfo = JSON.parse(readFileSync(new URL('../dist/appinfo.json', import.meta.url), 'utf8'));

rmSync(new URL('../out', import.meta.url), { recursive: true, force: true });
// A shell command because ares-* are .cmd shims on Windows.
execSync('ares-package dist --outdir out', { cwd: root, stdio: 'inherit' });

console.log(`Packaged out/${appinfo.id}_${appinfo.version}_all.ipk`);
