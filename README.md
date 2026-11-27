# Shqip Quest v0.3B.3 — Family expansion + private recording pathway

**Upload to `Sanosuke2301/shqip-quest-preview` only. Never to production.**

## Included

- All v0.3B.2 features, balanced answer choices, four previously approved bundled Llafazani greetings MP3s, and optional private WevoLabs female audio.
- New **Family 3 — Children and parents** (4 candidate new words; 9 questions including choice, emoji picture cues, word arrangement and audio-ready listening with safe reading fallback).
- New **Family challenge** (12 questions covering old and new family words; a `Family Explorer` badge after finishing).
- Existing six lesson records and existing question ordering are unchanged. New lessons are appended after `family-2`, preserving previously stored completion/mastery indexes.
- Parent Audio Library accepts 13 **new family male Llafazani MP3s** as local imports, but requires explicit fluent-speaker approval before importing. No newly generated family MP3s are bundled.
- Four baseline greeting recordings cached automatically for offline use. Imported family files are saved in private IndexedDB on that device.

## Install

1. Open your running v0.3B.2 preview and export a fresh family backup.
2. Extract this ZIP. All contents (including `audio/llafazani/` and `.nojekyll`) belong in the preview repository root.
3. Open `https://github.com/Sanosuke2301/shqip-quest-preview` and upload the extracted contents, preserving subfolders. Replace the matching files. **Do not upload to the production repository.**
4. Wait until GitHub Pages deployment is complete, then open the preview while online, apply **Update now** if prompted and reload.
5. Parent corner must show `VERSION 0.3B.3 · PREVIEW STORAGE`.
6. Confirm old profiles, XP, badges, private female recordings and the four bundled male recordings remain available, including airplane mode.
7. Complete *People in my family* and *Family challenge*. Observe shuffled answers and the new Family Explorer badge.
8. Review the new vocabulary in `FAMILY_AUDIO_RECORDING_WORKSHEET.csv`. See `FAMILY_AUDIO_RECORDING_GUIDE.md` for instructions to generate and import new male recordings privately.

## Important limitations

- The **new Family lesson wording is pending your fluent-speaker validation**, including regional appropriateness. It is provided in a development preview.
- There are **no new Family MP3s in this ZIP**. Family listening prompts turn into readable questions until approved recordings are imported locally. This is deliberate to prevent unreviewed speech being distributed.
- The Parent area is not PIN protected. Imported private audio is device-specific and is *not* part of the family JSON profile backup.
- 0.3B.3 is not a production release. Production 0.2.3 stays untouched.

Read `TEST_CHECKLIST.md` and `TEST_REPORT.md` before declaring acceptance.
