# Shqip Quest v0.3B.3.2 — QA report

## Result: static/regression checks PASS

- **347 automated assertions passed.**
- **8 activities / 59 questions** preserved in the original lesson and question positions.
- **6 picture questions** checked against a map of 12 illustration assets.
- Correct `q.answer` values and `q.type` values preserved for every question.
- Four Llafazani recordings retained (same source files).
- Existing profile and private-audio database identifiers unchanged.
- Preview-only service worker cache version increased to v0.3b.3.2.
- All illustration resources are present and listed in the service worker precache.
- JavaScript parse checks passed for app.js, sw.js, lessons.js.

## What changed from v0.3B.3.1

- Replaced emoji-based picture art with locally hosted original illustrations while retaining existing choice values for scoring.
- Fixed three non-answer distractor images to keep a unified illustrated style.
- Added image-specific mobile UI styling and descriptive accessible picture-button labels.

## Limitations

Full interactive Chrome / Android testing remains outstanding. A headless Chromium screenshot attempt in this environment timed out. Automated checks are not a replacement for the on-device acceptance checklist.

## Important pedagogical limitation

An illustration may indicate an age range but does not prove someone's actual family relationship. For example, an older woman is not necessarily a grandmother. Existing picture questions are retained to avoid disrupting the tested progression, with more contextual family scenes recommended for later educational-quality revisions.
