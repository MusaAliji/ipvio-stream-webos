---
status: accepted (to be confirmed in T-082)
---

# Minimum webOS 4.0

We support webOS 4.0 (2018, Chromium 53) and newer, so most TVs still in use can run the app. The cost is ES5 output, polyfills, CSS limits and an old Node for the JS service, while the only real test device runs webOS 23; webOS 4 is covered by emulator smoke tests. If webOS 4 proves too costly (T-004, T-082), the minimum moves to webOS 6 (2021, Chromium 79). Raising the minimum later is easy; lowering it after building on newer features is not.
