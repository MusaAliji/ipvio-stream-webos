// Packages dist/ into out/<app id>_<version>_all.ipk with ares-package (from @webos-tools/cli).
import { execSync } from 'node:child_process';
import { existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { ipk, root } from './ipk.mjs';

rmSync(join(root, 'out'), { recursive: true, force: true });
// A shell command because ares-* are .cmd shims on Windows.
execSync('ares-package dist --outdir out', { cwd: root, stdio: 'inherit' });

if (!existsSync(join(root, ipk))) {
  throw new Error(`ares-package did not write ${ipk}`);
}
console.log(`Packaged ${ipk}`);
