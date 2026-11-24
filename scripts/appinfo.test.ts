import { describe, expect, it } from 'vitest';
import appinfo from '../public/appinfo.json';
import pkg from '../package.json';

const publicFiles = Object.keys(import.meta.glob('../public/*', { eager: false })).map((path) =>
  path.replace('../public/', ''),
);

describe('appinfo.json', () => {
  it('uses the app id that user data is bound to', () => {
    expect(appinfo.id).toBe('com.ipvio.stream.webos');
  });

  it('carries the package version', () => {
    expect(appinfo.version).toBe(pkg.version);
  });

  it('is a full HD web app that handles the back key itself', () => {
    expect(appinfo.type).toBe('web');
    expect(appinfo.main).toBe('index.html');
    expect(appinfo.resolution).toBe('1920x1080');
    expect(appinfo.disableBackHistoryAPI).toBe(true);
  });

  it('points at images that ship with the app', () => {
    for (const image of [appinfo.icon, appinfo.largeIcon, appinfo.splashBackground]) {
      expect(publicFiles).toContain(image);
    }
  });
});
