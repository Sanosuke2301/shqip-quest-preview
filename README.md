# Shqip Quest v0.3B.1 — Bundled male audio + Family expansion

**TARGET: `Sanosuke2301/shqip-quest-preview` ONLY. Do not upload to production (`Sanosuke2301/shqip-quest`).**

## What's new

- The 4 fluent-reviewed **Llafazani male MP3s** are INCLUDED in `audio/llafazani/`: `pershendetje.mp3`, `si-je.mp3`, `faleminderit.mp3`, `qysh-je.mp3`.
- The service worker caches all four male MP3s for offline playback. Users no longer need to import those four on each device. First installation/upgrade must be completed **online**.
- Each learner retains their choice of voice. If a female voice is preferred but unavailable, the app plays the included male recording instead. Female WevoLabs clips are **not** in the ZIP or public cache. Where already privately installed on the current browser, they remain available.
- The optional Parent Audio Library permits importing WevoLabs clips privately as before. It shows `4/4 male recordings included` and the number of locally installed female recordings.
- Adds **one** new lesson, `family-2` (More family words): six draft vocabulary cards and seven questions. This draft is for fluent Albanian review. No recordings for these new words are claimed or included yet.
- All existing lesson identifiers, quiz question order, learner database/store names, existing badges, XP, and backup schemas are unchanged. The old `family-1` lesson is unchanged.
- Version display, app asset query strings and preview-only SW cache updated to `0.3b.1`.

## Install to GitHub **PREVIEW ONLY**

1. From the **current preview**, open Parent corner → **Export family backup** and save the JSON locally. This backs up profiles, progress and voice preferences; it does not include private female MP3s.
2. Download and extract `Shqip_Quest_v0.3B.1_Preview_With_Llafazani_Audio.zip` on Windows. You will see the normal application files plus `audio/llafazani/` containing **four** MP3 files. There are no WevoLabs MP3s.
3. Open <https://github.com/Sanosuke2301/shqip-quest-preview> (NOT the main production repository). Choose **Add file → Upload files**, and upload the extracted project contents to the repository root. Preserve directories `assets/` and `audio/llafazani/`. **Do not upload the ZIP itself.** If your browser doesn't preserve folders, use GitHub Desktop to commit the extracted folder structure, or create the nested paths manually in GitHub.
4. Commit, and make sure GitHub Pages deployment completes successfully.
5. Open <https://sanosuke2301.github.io/shqip-quest-preview/> **online**. Apply **Update now** when prompted, reopen, and confirm Parent corner shows **VERSION 0.3B.1 · PREVIEW STORAGE**.
6. Open **Parent → Audio Library**. Confirm `4/4 male recordings included`. Play each. **You should not need to import male audio.** If your existing female MP3s were previously installed, check they remain available. If not, import only the female files privately from the original `Simple_Audio.zip`. Never upload the WevoLabs audio to GitHub.
7. Complete the offline and learner-progress acceptance checks in `TEST_CHECKLIST.md`. Do not clear browser site data or uninstall the current PWA during the update.
8. Review six new vocabulary entries with `FAMILY_VOCAB_REVIEW.csv`; do not treat draft Family 2 wording as fluent-speaker approved until you sign off.

## Safety and compatibility

- Existing preview profile data: **`shqip-quest-preview-db`**, store **`profiles`** (unchanged).
- Existing optional private audio data: **`shqip-quest-preview-private-audio-v1`**, store **`clips`** (unchanged).
- Existing localStorage active learner key: **`sq-preview-active`** (unchanged).
- New preview-only cache: **`sq-preview-v0.3b.1`**; the service worker keeps the previous preview working until the user applies the update.
- Existing production app is unaffected. No server-side user data, analytics or synchronisation has been introduced.
- After initial loading online, four male recordings are offline cached, and private female recordings on that same browser remain local. Do not assume female audio synchronises to a new device.
- Published Llafazani files include provenance and checksums at `audio/AUDIO_PROVENANCE.json`. They are AI-generated speech, not human recordings.
- The public inclusion is based on Llafazani's published terms permitting use of the generated audio for personal and commercial purposes; see `AUDIO_LICENSE_NOTE.md`. These terms should be retained as evidence and rechecked before any broad commercial release. **WevoLabs rights remain pending**.

## What happens after WevoLabs replies?

If its public distribution rights are confirmed, add the four female MP3s under `audio/wevolabs/`, add four key/path entries to `BUNDLED_AUDIO` in `app.js`, include those paths in the service-worker PRECACHE and release a new preview version. The existing voice preferences and question content will continue to work without a learner-data migration. If permission is declined, retain the private-only arrangement or use separately licensed human/AI recordings.

## Current scope

This is **v0.3B.1 preview**, not a production rollout. Further curriculum phases (Numbers, Colours and Everyday Expressions), unrecorded family vocabulary audio and final female-audio licensing are not yet implemented.
