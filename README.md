# Shqip Quest v0.3B.3.2 — clearer Family illustrations (PREVIEW)

This is a complete replacement package for **Sanosuke2301/shqip-quest-preview** only. **Do not upload it to the production `shqip-quest` repository.**

## What was changed

The six existing Family picture questions no longer depend on device-specific person emoji, where an adult man may look similar to a boy. They now use a consistent set of **12 original illustrations**: adult woman, girl, grandmother, adult man, grandfather, boy, child, family/parents, baby, cat, car and bicycle.

The pictures deliberately use age and context clues (adult clothing and proportions, a school bag or toy, grey hair for older characters). Family roles cannot be established from appearance alone; these pictures are **illustrative teaching cues**, not claims about what all relatives look like. Future lessons should prefer explicit family scenes or contextual dialogue for terms such as sister, mother and grandfather.

- Six picture questions retained in exactly their previous lesson and question positions.
- Correct answers, lesson IDs, question counts, achievement rules and XP logic unchanged.
- A few *incorrect* picture alternatives were replaced so that all options have the same illustration style: apple → cat, vehicle → adult man, adult man → boy. Those alterations do not affect correct answers.
- On-screen choices are still named **Picture A**, **Picture B**, etc.; English answers aren't displayed as labels.
- Screen readers receive basic visual descriptions (e.g. adult man, young girl), rather than a bare `Picture B`.
- All 12 illustrations are precached for offline use.
- Four already approved Llafazani MP3 files remain bundled. WevoLabs files are not included. Local private recordings remain in their existing separate database.

## Install

1. On your existing preview, export a family backup in **Parent corner**.
2. Extract `Shqip_Quest_v0.3B.3.2_Clearer_Family_Illustrations_Preview.zip`.
3. Open <https://github.com/Sanosuke2301/shqip-quest-preview>.
4. Upload the **contents** of the extracted ZIP to the repository root (not the ZIP itself), including the new **`assets/pictures/`** directory. Replace existing files of the same names.
5. Commit. Wait until GitHub Pages deployment is complete, then open <https://sanosuke2301.github.io/shqip-quest-preview/> while online.
6. Apply **Update now** when prompted; reload if necessary, and confirm Parent corner displays `0.3B.3.2`.
7. Complete the picture questions in Family 1, Family 3 and Family Challenge. Check the age differences and the shuffled choice order.
8. Turn on airplane mode and repeat a Family picture question to confirm images remain visible offline.
9. Check existing profiles, XP, badges and bundled audio. Do not clear site data.

### Important storage behaviour

This package uses the **same preview learner database** and **same private audio database** as v0.3B.3.1. It does not intentionally reset either. Production v0.2.3 is unchanged.

### QA status

Static and programmatic regression audit: **347 checks passed**, including all 59 lesson questions, six picture questions, all 12 illustration resources, unchanged scoring keys, unchanged learner storage identifiers, audio files and the offline pre-cache list. All three JavaScript sources passed Node syntax checking. Full Android/browser acceptance remains to be performed. An attempted Chromium screenshot in this environment timed out and should not be interpreted as a browser test pass.

See `TEST_REPORT.md` and `TEST_CHECKLIST.md`.
