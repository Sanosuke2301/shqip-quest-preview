# Shqip Quest v0.3B.2 — Answer randomisation test report

## Scope
This is a **preview-only** maintenance release based on the verified v0.3B.1 GitHub preview. No production repository change was made.

## Automated results — PASS

- JavaScript syntax: `app.js`, `lessons.js`, and `sw.js` passed `node --check`.
- Content audit: 6 lessons, 38 questions: 27 ordinary choice, 4 listen, 2 picture, 5 word-arrange. All **33 multiple-choice-compatible** questions have the expected answer exactly once in their choices; picture labels have matching original-array lengths.
- Pure shuffle logic: 1,000 repeated simulations of a 60-question, 3-option mix verified balanced correct answer positions (20 A, 20 B, 20 C in each run), with no source-question mutations.
- Four-option case: 20 questions balanced with 5 correct positions each for A/B/C/D.
- Quiz rendering: picture image-label association correct after shuffling, feedback keeps the same positions, correct marking retained.
- Scoring: `answer()` continues to compare the selected original value with `q.answer` correctly, for both correct and incorrect selections.
- Path/data integrity: preview IndexedDB names unchanged, Personal Review and lesson starts initialise a new per-attempt order, listening pilot uses precomputed per-question option layouts.
- Integrity: `lessons.js`, styles, manifest, both icons and all four approved Llafazani MP3 files are byte-for-byte unchanged from v0.3B.1, checked by SHA-256.
- Offline update: service-worker cache version bumped to `sq-preview-v0.3b.2`; four bundled MP3 precache paths retained.
- Test runner reported **122,026 assertions passed**.

## Not yet tested

- Actual end-to-end browser interaction, GitHub Pages deployment and Android airplane-mode update. These are user acceptance tests; see `TEST_CHECKLIST.md`.

## Safety and behavioural notes

- `Math.random()` is for user-interface variety, not security-sensitive randomness.
- Balance is calculated for each answer-count grouping within a *single lesson attempt*. For a partial group, the distribution cannot be perfectly equal; repeated lesson attempts can also coincidentally look similar.
- Answer-order state is ephemeral and never stored in the learner profile, so persistent question mastery indices stay intact.
- The existing service worker uses the same user-visible update prompt; no forced reset of data or audio.
- No WevoLabs recordings are present in this package.
