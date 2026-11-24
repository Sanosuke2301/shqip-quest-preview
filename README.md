# Shqip Quest v0.2.2 — Preview-only cache fix

**Apply only to `Sanosuke2301/shqip-quest-preview`. Do not upload to the live `shqip-quest` repository.**

This package addresses a possible mixed-cache update issue where GitHub reports a successful deployment but the older Version 0.2 app JavaScript continues to display after **Update now**.

## Update instructions
1. Leave your live app and learner data untouched. Save a fresh family backup from the live app if you have not already done so.
2. Extract the ZIP. It contains `index.html`, `app.js` and `sw.js` (plus these instructions).
3. In the **preview** repository, replace those three files at the top level. No other files need changing.
4. In **Settings → Actions**, check that the GitHub Pages deployment succeeds.
5. Reopen the preview while online. On the home screen, select **Update now** if the notification appears; close and reopen the preview after applying it.
6. In **Parent corner**, confirm **VERSION 0.2.2 · PREVIEW STORAGE**.
7. Test an offline restart and confirm profiles/XP remain correct. Then proceed with the v0.2 learning checks.

## What changed
- `index.html` loads app JavaScript and CSS using URLs unique to v0.2.2.
- `app.js` imports lessons under a unique URL; the app version display is updated.
- `sw.js` downloads and caches the versioned resources before the new worker becomes ready, preserves its usual launch URL, and only clears preview caches on a preview installation.
- The IndexedDB database (`shqip-quest-preview-db`), active-profile localStorage key, and all profile/XP logic are unchanged.

**If Version 0.2 remains visible after deploying this patch:** try the preview in a Chrome Incognito tab (for checking only; not for saved learner progress). If the version is correct there but not in regular Chrome, the original browser still has stale PWA state. Do not clear the shared `sanosuke2301.github.io` site data as this may affect the live app. Report that result so we can address the browser-specific registration without resetting data.

This patch is syntax/static checked but has not been verified in an Android browser. It does not include generated pronunciation audio.
