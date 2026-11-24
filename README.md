# Shqip Quest — Version 0.2.0 (first development package)

Offline-first GitHub Pages PWA. A direct update to v0.1 (same origin, same database name and profiles).

## Changes
- Personalised revision of previously attempted questions, using mastery strength (0–3) per question. Progress is saved to existing IndexedDB profile objects without resetting XP, completed lessons, badges or streaks.
- New Family Pictures lesson with emoji-based picture identification (demonstration; picture art can replace emoji later).
- Standard / Kosovo-Gheg pronunciation controls visible in lesson cards. **No audio is provided in this release**; the controls explain that audio is awaiting verification. The app is prepared for local MP3 paths in lesson data once audio is validated.
- Safer backup import: validates profiles, downloads a current safety backup and asks before overwriting matching learners. Old v0.1 exports remain importable. Do not delete the original app or clear site data.
- Improved offline updates: fully precaches the app shell, keeps the previously active version until the new one is installed, offers an update prompt when ready, prevents applying during a lesson, and updates by explicit user action.
- More accurate streak display if a device's calendar is set backwards.

## Installation: protect existing users
1. In the installed v0.1, open Parent corner and **Export family backup**. Store that JSON file safely.
2. Preserve the working version by creating a `v0.1.0` Git tag or release on GitHub.
3. For testing without affecting the live app, consider a temporary `shqip-quest-preview` GitHub Pages repository. Progress will NOT move to a different domain/path without manual export/import.
4. To release on your existing site, upload the **contents of this folder** (not the folder itself) to the root of `Sanosuke2301/shqip-quest`, replacing existing application files. GitHub web upload may handle replacement differently; use GitHub Desktop or delete/replace existing files through editor. Do not delete the repository.
5. Keep the repository's `main` branch and `/(root)` GitHub Pages setting.
6. Open the website online; when it reports a new version, finish the current lesson and click **Update now**. On some devices, closing/reopening the PWA after it downloads may be needed.
7. Confirm Version 0.2 in the Parent corner, and verify both older progress and new revision/picture activities. Disconnect internet and restart to confirm offline operation.

## Add vetted audio later
After generating speech, verify the exact **word, dialect/register, stress, intelligibility and suitability with fluent speakers**, and license/rights for distribution. Add `.mp3` under `audio/`, and include every new MP3 path in `APP_SHELL` in `sw.js` with a **new** cache version. For a card object in `lessons.js`, add `audioStandard:'./audio/name-standard.mp3'` and/or `audioGheg:'./audio/name-gheg.mp3'`. If a variety does not differ for a word, the same vetted recording can be referenced by both buttons after review. The current code will not attempt device-based TTS; offline audio must be packaged with the application.

## Suggested test checklist
- Old v0.1 learner profiles and XP are unchanged after update.
- Already completed greeting lessons remain completed.
- Review contains questions from lessons a learner has completed and records mastery on replay.
- New Family Pictures lesson unlocks after Greetings Challenge and works offline.
- Audio buttons clearly indicate recordings are not yet available.
- Import old v0.1 backup; cancel replacement and confirm existing progress is preserved.
- Install/reopen Android PWA while offline; close and relaunch.
- Test update activation after publishing a future change, especially during an active lesson.

## Limitations
Family language content and examples are prototype material pending fluent-speaker review. Mastery tracks performance at the question level rather than the word level; this is a foundation for more sophisticated spaced repetition. Pronunciation audio is not generated or validated in this package. Parent controls are not PIN-protected. Progress remains per-device until exported/imported.
