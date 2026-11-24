# A webOS JS service as fallback for what a browser cannot do

Browsers forbid the headers IPTV backends need (Stalker's MAG `User-Agent`, `Referer` and `Cookie`; Xtream providers that only accept a VLC `User-Agent`; OpenSubtitles' `User-Agent`), block cross-origin APIs without CORS, and cannot listen on a port or write files. The app ships a Node JS service in the same `.ipk`. One HTTP layer tries the browser first and falls back to the service; the phone remote server and any file writing (live rewind, recording) also live there. A relay server was rejected: it costs money and sends user logins through a third party.

## Consequences

- The service must run on the old Node of webOS 4 (version recorded in T-016).
- LG Content Store rules for JS services and LAN servers are checked before a store release (T-085).
