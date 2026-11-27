# Shqip Quest v0.3B.2 — Balanced answer order (preview only)

## What changed

The quiz previously displayed answer options in the exact order specified in `lessons.js`. Because many correct answers were first in that list, A was often correct. This preview update fixes the presentation logic without changing the lesson questions.

- Multiple-choice, picture, and audio/listening questions now show shuffled answer choices.
- Correct answer *positions* are balanced within each lesson attempt: for each number of answer choices (usually 3), the positions A/B/C are randomly cycled through rather than repeating the same correct position for many questions.
- Choices stay in their assigned positions while the learner listens, answers, or receives feedback.
- Picture choices retain their original matching visual labels.
- The four-question optional listening challenge also shuffles answer order and uses balanced positions.
- New random orders are created on each new lesson or Personal Review attempt, not while the learner is answering.
- `lessons.js` is unchanged, including question ordering, correct answer text, answer IDs, and all learning content. No profile schema changes, migrations, or data clearing are needed.

## Install — PREVIEW ONLY

1. Export a backup from the current Shqip Quest preview using **Parent corner → Export family backup**.
2. Extract `Shqip_Quest_v0.3B.2_Preview_Randomised_Answers.zip` on Windows.
3. Upload the extracted contents, preserving subfolders, to **Sanosuke2301/shqip-quest-preview** only. Replace existing files where prompted. Do not upload the ZIP itself. Do **not** update the production `shqip-quest` repository.
4. Your app should load and prompt to **Update now**; accept outside a lesson. If the page appears old, close/reopen the PWA and check Parent corner for `VERSION 0.3B.2 · PREVIEW STORAGE`.
5. Replay a greetings lesson twice. Notice that correct choices can appear at A, B or C, and order may change between attempts, but does not jump around after an answer.
6. Check the picture questions and their labels, listening questions and score, then test offline by entering airplane mode after the update.
7. Confirm the four bundled Llafazani recordings play without importing audio, existing optional private female recordings still work, and progress/XP/profiles remain intact.

## Data and licensing safety

- Production is unchanged; the preview stays in `shqip-quest-preview-db` and uses the same `sq-preview-active` key.
- Private WevoLabs clips remain in the original local `shqip-quest-preview-private-audio-v1` IndexedDB database; the public package includes **no WevoLabs MP3s**.
- Four approved Llafazani MP3s remain bundled and unchanged, and are included in the offline cache.
- Service worker cache updates from `sq-preview-v0.3b.1` to `sq-preview-v0.3b.2`; old preview cache is cleaned only when the user applies the update.
- Existing learner question IDs and stored mastery references remain unchanged.

See `TEST_CHECKLIST.md` and `TEST_REPORT.md` for verification details.
