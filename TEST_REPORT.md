# Shqip Quest v0.3A.3 — Technical Test Report

## Passed checks
- `app.js` and `sw.js` passed Node.js syntax checks.
- Unit tests verified all eight original filenames map to distinct recording IDs.
- Unit tests verified `Qysh je?` and other phrase-to-voice mappings, missing-audio behaviour, challenge readiness, local Audio Lab rendering, male/female lesson buttons and listening challenge UI.
- Package review confirmed **zero MP3 recordings** and no audio folders or online candidate-audio URLs in the service-worker pre-cache.
- Verified the existing preview learner DB (`shqip-quest-preview-db`) and separate audio DB (`shqip-quest-preview-private-audio-v1`) names in source.
- Verified release-specific preview cache prefix `sq-preview-`, build version `0.3a.3`, and versioned asset URLs.
- Audio practice is designed to award no XP, with no mutation of the existing learner profile schema.

## Not yet tested
- Browser end-to-end and offline playback: Chromium navigation to localhost is blocked by this execution environment (`ERR_BLOCKED_BY_ADMINISTRATOR`). This is **not** evidence of application failure; actual deployment and Android browser testing are required.
- Publication rights for Llafazani and WevoLabs: **not cleared**. A fluent speaker has approved pronunciations, not rights.

## Deployment guardrails
- Upload the code-only ZIP solely to `shqip-quest-preview`.
- Import the eight privately retained MP3 files from the browser's file chooser, not through GitHub.
- Leave `shqip-quest` production Version 0.2.3 untouched.
- Do not clear the site's IndexedDB/local storage or uninstall existing apps.
