# Shqip Quest v0.3A.3 — Code-only preview + private on-device MP3s

**DO NOT UPLOAD THIS TO THE MAIN PRODUCTION REPOSITORY.** It updates only `Sanosuke2301/shqip-quest-preview`.

## Why this release is different
The 8 recordings have passed fluent-speaker linguistic review, but their **public redistribution rights have not been cleared**. Accordingly **this package contains zero MP3s** and the GitHub Pages service worker never fetches candidate MP3s. Parents privately import the existing eight files into the browser's local IndexedDB database. MP3s never travel to GitHub or a backend. This keeps the public preview code testable without publishing candidate audio.

## Installing on GitHub (CODE ONLY)
1. Confirm the original production site `shqip-quest` remains at v0.2.3. Do not change it.
2. Open `https://github.com/Sanosuke2301/shqip-quest-preview`.
3. Extract this ZIP, and upload the contents (not the ZIP) to the repository root, replacing the existing `index.html`, `app.js`, `styles.css`, `sw.js`, `lessons.js`, `manifest.webmanifest` and icons as needed. Do NOT upload `Simple_Audio.zip`, MP3s, or a folder named `audio`.
4. GitHub Actions -> check Pages deploy `success`.
5. Open `https://sanosuke2301.github.io/shqip-quest-preview/` online; click **Update now** outside a lesson (if shown), then reopen.
6. In Parent corner confirm `VERSION 0.3A.3 · PREVIEW STORAGE`.

## Installing PRIVATE reviewed MP3s on a device
1. Locate the previously supplied `Simple_Audio.zip` on your computer/Android device and extract it LOCALLY. The original 8 filenames are recognised directly; there is no renaming needed.
2. In the **preview** app open **Parent -> Open private audio lab**.
3. Tap **Choose Files** and select the eight MP3s. They are stored in browser IndexedDB `shqip-quest-preview-private-audio-v1` distinct from learner DB `shqip-quest-preview-db`.
4. Check that the counter reports `8/8` installed. Play each voice in the audio lab, then open a greeting lesson (the four supported expressions display Male/Female buttons). In **Practice** try the Listening pilot.
5. Disconnect from the internet, close/reopen the PWA, and repeat playback. Re-import on other devices because browser data is local.

## Safe design notes
- No audio is included in this ZIP. The eight existing MP3s should **not** be uploaded to public GitHub until redistribution rights for each provider are cleared.
- Labels reflect the user's pronunciation review: Përshëndetje, Si je?, Faleminderit = shared; Qysh je? = Kosovo/Gheg. Voice gender is a separate choice from linguistic variety.
- This build does not change `shqip-quest-db` or production. It reuses the **preview** profile database `shqip-quest-preview-db` and cache prefix `sq-preview-`.
- Imported MP3s persist offline in browser IndexedDB, **not in the service worker cache**; the existing offline app shell continues to be cached. Browser site-data deletion will delete the private MP3s. Family backup JSON backs up learner progress, not MP3s.
- Listening pilot intentionally awards **no XP** while testing; it should not modify learner mastery, streaks or lessons.
- No cloud login, analytics, external audio CDN or microphone access.
- If WevoLabs declines permission, replace its recordings with licensed alternatives; the app code supports missing voices gracefully.

## Acceptance checklist
- [ ] Preview loads Version 0.3A.3 and original profiles/XP unchanged.
- [ ] Local import accepts exactly original 8 MP3 filenames; displays 8/8.
- [ ] The four expressions play correctly using two voice buttons (no overlap).
- [ ] Clicking Male/Female in the *greetings lessons* plays the correct locally stored file.
- [ ] Listening quiz works; no XP earned.
- [ ] Closing and reopening retains private MP3s and existing learner progress.
- [ ] Offline launch and playback work on Android.
- [ ] Production app remains at 0.2.3 and retains profiles/XP.
- [ ] The published GitHub preview contains **no MP3 files**.
