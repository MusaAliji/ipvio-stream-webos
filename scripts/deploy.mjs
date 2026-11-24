// Installs the packaged .ipk on the TV and launches it.
// Device: the ares-setup-device name in WEBOS_DEVICE, default "lgtv" (the 55UR80).
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const appinfo = JSON.parse(readFileSync(new URL('../dist/appinfo.json', import.meta.url), 'utf8'));
const device = process.env.WEBOS_DEVICE || 'lgtv';

// Everything interpolated into the shell commands must be a plain token.
for (const value of [device, appinfo.id, appinfo.version]) {
  if (!/^[\w.-]+$/.test(value)) {
    throw new Error(`Refusing to deploy with unexpected value: ${value}`);
  }
}
const ipk = `out/${appinfo.id}_${appinfo.version}_all.ipk`;

// Shell commands because ares-* are .cmd shims on Windows.
const run = (command) => execSync(command, { cwd: root, stdio: 'inherit' });
run(`ares-install --device ${device} ${ipk}`);
run(`ares-launch --device ${device} ${appinfo.id}`);
