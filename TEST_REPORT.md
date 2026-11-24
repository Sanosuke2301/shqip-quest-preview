# Shqip Quest v0.2.0 — Test report

## Completed checks
- JavaScript syntax checks passed for `app.js`, `lessons.js`, `sw.js`.
- Node.js sandbox checks passed for the learning logic: 5 lessons, 27 questions, all multiple-choice/picture answer keys present, mastery scores updated, existing v0.1 profile simulated with unchanged XP and completed lessons, review question selection, dual pronunciation-button markup, future-dated streak logic.
- Both 192px and 512px PNG assets are included.
- Application uses the existing `shqip-quest-db` / `profiles` IndexedDB storage; no destructive database migration.

## Not yet verified
- Full browser-level automated tests: local HTTP browser navigation is blocked by the execution environment (`ERR_BLOCKED_BY_ADMINISTRATOR`).
- Actual migration of saved profiles from installed Android v0.1 to v0.2.0.
- Service-worker update prompt/activation and PWA offline reload on Android.
- Generated Albanian audio: not included and not verified by speakers.

## Before updating live GitHub Pages
- Export existing family backup.
- Keep a v0.1.0 Git tag or release.
- Test in a preview Pages repository if possible, then upload v0.2.0 to the existing repository and verify profiles and offline operation.
