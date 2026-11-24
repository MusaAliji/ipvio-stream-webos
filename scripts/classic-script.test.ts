import { describe, expect, it } from 'vitest';
import { toClassicScript } from './classic-script';

describe('toClassicScript', () => {
  it('turns the module entry script into a deferred classic script', () => {
    const html =
      '<head><script type="module" crossorigin src="./assets/index-Ab1.js"></script></head>';

    expect(toClassicScript(html)).toBe(
      '<head><script defer src="./assets/index-Ab1.js"></script></head>',
    );
  });

  it('drops crossorigin from the stylesheet link', () => {
    const html = '<link rel="stylesheet" crossorigin href="./assets/index-Cd2.css">';

    expect(toClassicScript(html)).toBe('<link rel="stylesheet" href="./assets/index-Cd2.css">');
  });

  it('fails the build when a module script it does not recognise is left', () => {
    const html = '<script crossorigin type="module" src="./assets/index-Ab1.js"></script>';

    expect(() => toClassicScript(html)).toThrow(/module script/);
  });
});
