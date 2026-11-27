# Shqip Quest v0.3B.3 — Automated test report

**Release type:** GitHub Pages preview only. Production remains unchanged.

## Results

**Automated content/data/logic checks: PASS (253 assertions)**

- Eight lessons total, including the two appended Family activities; **59 questions** total: 37 choice, 8 listening, 8 word arrangement, and 6 picture questions.
- Original six lessons and every original question are **structurally unchanged**, protecting mastery keys based on lesson ID and question index.
- All choice/picture/listening questions have one unique correct answer, with no duplicate options. Picture labels remain paired with their corresponding emoji illustrations. Word arrangement tokens reconstruct the correct answer.
- New Family vocabulary set covers 13 reviewable words; filenames map to 13 distinct `-llafazani` local audio IDs.
- Reading fallback works for the new listening questions when no reviewed MP3 is installed. When an approved local recording is available, the listening control selects the correct audio ID.
- Unapproved local Family audio imports are rejected. Approved imports are mapped to local IndexedDB records with reviewer provenance. Unsupported filename/provider imports are rejected.
- The new Family Explorer badge is awarded when the Family challenge is completed.
- Preview profile database, private audio database, existing answer randomisation logic, and cached greeting audio paths are preserved.
- All four earlier Llafazani MP3s, both icons and the web manifest are **byte-for-byte identical** to v0.3B.2 by SHA-256. All earlier CSS styles are preserved, with only appended styles for the new Family audio controls.
- No WevoLabs recordings or unreviewed Family MP3s are bundled.
- Service worker version updated to `sq-preview-v0.3b.3` and cache-busted app assets target `0.3b.3`.

**Interactive Chromium simulation: PASS**

- Viewport: 420 × 860 (mobile-like layout).
- Rendered the eight-lesson learning path and both new Family lessons.
- Completed all **21 new questions via browser clicks**, including picture matching, shuffled choices, word arrangement and missing-audio reading fallback.
- Verified Family Explorer badge display and award.
- Verified Parent Audio Library renders its Family recording controls.
- Verified an import attempt without fluent-speaker approval is rejected, and an explicitly approved dummy MP3 with an accepted filename is stored in the mocked local audio store.
- No JavaScript page errors observed.

**JavaScript syntax: PASS**

- `node --check` for `app.js`, `lessons.js`, and `sw.js`.

## Limitations — manual acceptance still required

The Chromium interaction test injected the actual app scripts into a static page, with persistence methods **mocked** and a **dummy ID3 test file**. It did not test a true local server navigation, GitHub deployment, PWA installation, real IndexedDB persistence, actual MP3 decoding or playback, Android interface interactions, or the offline service worker update. Run `TEST_CHECKLIST.md` on the preview Android device.

**No additional real Albanian Family MP3s have been generated or approved.** The recording guide supplies text and filenames so a fluent speaker can create, review and privately import them.

## Data/change policy

- Preview IndexedDB (`shqip-quest-preview-db`) and localStorage (`sq-preview-active`) keys remain unchanged.
- Additional lessons are appended after `family-2`, not inserted into the existing sequence.
- Existing learner profiles, XP, mastery, achievements and optional private female clips should carry over in the same browser. A backup is still essential before deployment.
- The home completion percentage can decrease when upgrading, because the learning path expands from six to eight lessons; this does **not** mean prior lesson completion was lost.
- Production `shqip-quest` remains on its own separate release.
