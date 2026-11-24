---
status: proposed (decided by the playback spike, T-012)
---

# Native playback first, JavaScript engines only where native fails

The TV's own media pipeline decodes in hardware, handles AC3 / E-AC3 / DTS and HDR, and costs no CPU, so it is the first choice for every format. hls.js, mpegts.js or dash.js are used per format only where the spike shows native playback fails or lacks a needed feature. All engines sit behind one player interface. A known cost: audio delay works only for streams played through a JavaScript engine (see `docs/PARITY.md`).
