# Shq​ip Quest v0.3B.1 — Technical testing record

Date: 27 November 2026

**Completed successfully:**
- JS syntax of `app.js`, `lessons.js`, `sw.js` validated using Node 22.
- 18 isolated logic, path, curriculum and service-worker reference assertions passed under a JavaScript VM harness.
- All four included MP3s were extracted directly from the project's original uploaded `Simple_Audio.zip` and have their original SHA-256 checksums recorded in `audio/AUDIO_PROVENANCE.json`.
- Bundle includes four Llafazani files and **zero WevoLabs audio files**.
- Existing database names, active-profile storage key, and question indices of old lessons are preserved; `family-2` is appended as a new lesson ID.
- Service worker pre-cache references every bundled MP3 and has separate preview cache version `sq-preview-v0.3b.1`.
- Source terms consulted: Llafazani official terms, English homepage and Kokoro-Shqip model card (see `AUDIO_LICENSE_NOTE.md`).

**Not completed in this environment:** Full end-to-end interactive browser navigation, actual Android or device-audio playback, and service-worker install/offline lifecycle tests. Attempted Playwright with Chromium on local HTTP, but local page navigation was blocked by the execution environment (`net::ERR_BLOCKED_BY_ADMINISTRATOR`). The user's acceptance checklist is therefore required before any production rollout.

**Remaining reviews:** Six new Family 2 vocabulary cards require fluent-speaker confirmation. Public WevoLabs female audio distribution remains unapproved pending provider response.
