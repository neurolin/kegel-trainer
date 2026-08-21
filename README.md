# Kegel Trainer — v7 Soft Voice

Mobile-first PWA for guided Kegel exercises.

## v7 changes
- Replaced synthetic short MP3 clips with the phone's native Chinese speech synthesis.
- Prefers natural Chinese female voices when available.
- Softer speech settings (slower rate, gentle pitch and volume).
- Visual timer remains based on `performance.now()` and therefore uses real one-second intervals.
- Speech is re-triggered at each second boundary and the previous utterance is cancelled to prevent cumulative queue lag.
- Duration remains adjustable from 3–20 seconds; 10 rounds; settings saved locally.

## GitHub Pages
Upload all files in this folder to the repository root and commit. No `audio/` folder is required in v7.
