// Installs the packaged .ipk on the TV and launches it.
// Device: the ares-setup-device name in WEBOS_DEVICE, default "lgtv" (the 55UR80).
import { execSync } from 'node:child_process';
import { appinfo, ipk, root } from './ipk.mjs';

const device = process.env.WEBOS_DEVICE || 'lgtv';

// Everything interpolated into the shell commands must be a plain token.
for (const value of [device, appinfo.id, appinfo.version]) {
  if (!/^[\w.-]+$/.test(value)) {
    throw new Error(`Refusing to deploy with unexpected value: ${value}`);
  }
}

// Shell commands because ares-* are .cmd shims on Windows.
const run = (command) => execSync(command, { cwd: root, stdio: 'inherit' });
run(`ares-install --device ${device} ${ipk}`);
run(`ares-launch --device ${device} ${appinfo.id}`);
