# Shqip Quest v0.3A.4 — Listening Lessons Preview

## What it does
This is a **code-only preview build** for `Sanosuke2301/shqip-quest-preview`.
Do **not** upload it to `Sanosuke2301/shqip-quest` (production remains v0.2.3).

- Adds four listening/meaning questions **inside existing greetings lessons**. They earn regular lesson XP, save question-level mastery, and work in personalised review. Existing question indexes were preserved: new questions are appended to the end of lessons 1, 2 and 3.
- If a private MP3 is absent, each new question automatically becomes a readable text question, so learners are never blocked.
- Each learner can choose a **Male / Llafazani** or **Female / WevoLabs** preferred voice under **Profiles**. Voice preference is saved in the learner's existing preview profile record and included in a family backup; older profiles default to male. Voice does not determine Standard vs Kosovo/Gheg wording.
- Existing pronunciation cards display which voice is preferred. You can still play either installed voice.
- The original four-question optional listening pilot remains available as **extra, unscored practice**.
- The private audio database name and file mappings are **unchanged**, so the eight previously imported recordings should remain installed on the same browser and device after the update.
- No audio files are included in this ZIP or fetched from a public source.

## Install — GitHub preview only

1. On your current preview, open **Parent corner → Export family backup** and save it. Confirm that production v0.2.3 still works independently.
2. Download and unzip `Shqip_Quest_v0.3A.4_Code_Only_Preview.zip` on Windows.
3. Open [the preview repository](https://github.com/Sanosuke2301/shqip-quest-preview).
4. Replace the existing application files by uploading the **contents** of this folder to the repository root, not the folder itself. Ensure `index.html`, `app.js`, `lessons.js`, `styles.css`, and `sw.js` are at root and `assets/icon-*.png` are still inside `assets/`. Do not upload an MP3 or `Simple_Audio.zip`.
5. Commit changes and check GitHub **Actions → pages build and deployment** completes successfully.
6. Open [Shqip Quest Preview](https://sanosuke2301.github.io/shqip-quest-preview/) while online. Outside any active lesson, select **Update now** if shown, then reopen. Check Parent corner says `VERSION 0.3A.4 · PREVIEW STORAGE`.
7. Go to **Parent → Private Audio Library**. It should still say **8/8** on the same browser where you previously imported the MP3s. If not, re-import your personal audio files locally; **do not clear browser site data**.
8. Go to **Profiles → Preferred listening voice** and choose a different setting for each child. The selected voice is saved only for that learner.
9. Open the Greetings lessons. On replay, newly appended listening questions now contribute to XP. If you have completed the lesson previously, it remains marked completed; replay to try the new question. See `TEST_CHECKLIST.md`.

## Important limits and safety
- This preview **does not** include or redistribute Llafazani or WevoLabs MP3s. Locally imported audio remains in your browser's separate IndexedDB database `shqip-quest-preview-private-audio-v1`. The ordinary JSON learner backup **does not include audio**.
- Publication/redistribution permission is still being clarified. WevoLabs' statement that generation is free and unlimited describes **pricing and volume**, not the complete scope of permission for including MP3s in a public repository. Its terms permit personal and commercial use, but a separate confirmation for public GitHub file distribution and downstream voice rights is still sensible.
- Profile data stays in `shqip-quest-preview-db`; the live app uses `shqip-quest-db`. The service worker cache uses `sq-preview-v0.3a.4`, separate from the production prefix.
- Offline storage is per browser/device. Re-import MP3s on another device when testing there. Do not uninstall or clear site data to update.
- No cloud sync. Profile progress remains on the same device unless manually backed up and restored.

## Code-only source changes
- `app.js`: new per-profile voice selection; audio-aware quiz presentation; no-audio fallback; persisted preference; new preview identifier.
- `lessons.js`: four new listening questions appended to existing lessons.
- `index.html`: matching `?build=0.3a.4` versioned assets.
- `sw.js`: preview-only cache bump `sq-preview-v0.3a.4`; normal update-prompt activation.
- `styles.css`: listening and preferred-voice controls.

## Legal links consulted (26 November 2026)
- WevoLabs FAQ https://wevolabs.com/ — unlimited/no-login/pricing statements.
- WevoLabs Terms https://wevolabs.com/terms-service — commercial-use permission and acceptable use terms.
- WevoLabs Disclaimer https://wevolabs.com/disclaimer — identifies Microsoft neural TTS as third-party voices.

This is development guidance, not a legal clearance opinion.
