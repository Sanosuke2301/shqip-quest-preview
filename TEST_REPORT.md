# v0.3A.4 Build and Testing Report

Date: 26 November 2026

## Source
Forked from the known working `Shqip_Quest_v0.3A.3_Code_Only_Preview.zip` package and checked against the currently uploaded `shqip-quest-preview` code. The user previously reported successful offline audio playback from privately imported MP3 files.

## Performed checks
- `node --check` passed for `app.js`, `lessons.js`, and `sw.js`.
- 15 JavaScript VM behavior checks passed: old question indexes retained; only reviewed phrases used; two separate databases retained; child-specific preferred voice; fallback to text if files missing; fallback to alternate provider; answer not revealed on audio question; preview isolation; and retained learner fields.
- New listening questions appended after original questions in lessons 1, 2 and 3, preserving earlier mastery keys.
- Checked the package contains **no MP3 files** and the service worker does not fetch audio assets.

## Not yet completed
- Full end-to-end browser and Android PWA testing: this execution environment blocked Chromium localhost navigation (`net::ERR_BLOCKED_BY_ADMINISTRATOR`). The user should perform the acceptance steps in `TEST_CHECKLIST.md` before treating this preview as stable.
- Manual verification that new lessons load correctly on the user's actual Android browsers and imported audio remains usable after the update.
- Rights clearance for public redistribution of source TTS recordings. Audio remains private.

## Release rule
**Do not deploy this ZIP to production.** First verify on preview, preserve learner backup, and establish publication rights separately before any MP3s are publicly redistributed.
