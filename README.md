# Shqip Quest v0.3B.3.1 — Question Quality Patch

**Preview release only.** Upload the extracted files to `Sanosuke2301/shqip-quest-preview`. Do not modify the production repository (`shqip-quest`).

## Why this patch

One Family Challenge question displayed the literal caption “Grandmother” beneath its correct picture. The same educational design issue appeared in five other picture questions, some also showing an English translation in the prompt. This means children could answer without recognising the Albanian vocabulary.

## Changes

- Reviewed **all 59 authored questions** across **8 lesson/challenge activities**, plus the standalone four-question listening activity and the Personal Review question reuse path.
- Rewrote all **6 picture-matching prompts** to present the Albanian word without its English translation, e.g. “Which picture best illustrates ‘Gjyshja’?”
- Picture options now visibly display **Picture A / Picture B / Picture C** with their emojis, not English relationship captions.
- Replaced picture accessibility descriptions such as “Grandmother” with neutral visual descriptions (e.g. “Older woman”), making the task usable to assistive technology without explicitly revealing the target relationship.
- The randomised option order remains stable until feedback is given; correct answers, image-option pairings and scoring logic are unchanged.
- No question was added, removed or re-ordered. Existing XP, profiles, mastery IDs, lesson completion and badges retain their current storage keys.
- Four previously reviewed Llafazani greeting recordings are still bundled. Existing optional locally imported WevoLabs female and family MP3s are untouched.

## Install

1. In the v0.3B.3 preview, export a family backup from Parent corner.
2. Extract the **complete** v0.3B.3.1 ZIP to your computer.
3. Upload the extracted contents (including `audio/llafazani/` and the `.nojekyll` file) into the ROOT of `https://github.com/Sanosuke2301/shqip-quest-preview`, replacing files of the same name. Preserve folders.
4. When GitHub Pages has deployed, open `https://sanosuke2301.github.io/shqip-quest-preview/` while online. Tap **Update now**, if offered, then reopen.
5. Confirm Parent corner reports `VERSION 0.3B.3.1`.
6. Open Family challenge: the second question must show “Which picture best illustrates ‘Gjyshja’?” and **Picture A/B/C** beneath the emoji options; no “Grandmother” caption should appear before answering.
7. Retry Family 1 and Family 3 picture questions. Confirm feedback, randomisation, XP, audio and offline behaviour.

**Note:** These are pictorial teaching cues. An emoji of an older woman cannot establish that a person is someone's grandmother. The associated answers should be treated as simple illustrations, not evidence about real-world family relationships.

See `QUESTION_AUDIT_REPORT.md` and `TEST_REPORT.md` for the complete audit and test results.
