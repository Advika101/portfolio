# Advika Bhat — pixel room

Interactive pixel-art portfolio. Vite + React.

**Live site:** https://advika101.github.io/portfolio/

## Run

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## Structure

- `src/App.jsx` — state (day/night, selected panel, pet/riff counters), `renderVals()` builds the view model, and `render()` composes the components.
- `src/data.js` — the content: `SECTIONS` (what each panel says — experience, skills, trophies…) and `SPOTS` (hotspot positions). Edit this to change copy.
- `src/theme.js` — the colours: `COATS` (cat), `theme(night)` (UI palette), `scene(night)` (room palette).
- `src/audio.js` — `playRiff()`, the Web Audio guitar synth.
- `src/components/`
  - `Header.jsx`, `Hotspots.jsx`, `Panel.jsx` — page chrome and the detail panel.
  - `room/` — the pixel art, one component per object (`Wall`, `Window`, `Trophies`, `Bookshelf`, `Amp`, `Guitar`, `Desk`, `Monitor`, `Cat`, `Person`, …), composed in `Room.jsx`.
- `src/styles.css` — fonts, layout, `.hot`/`.chip-btn`/`.ext` classes.
- `src/animations.css` — keyframes and the animation utility classes.
- `src/main.jsx` — mounts `<App catCoat="dora" startNight={false} />`.
- `public/vt323-latin.woff2` — bundled font; others load from Google Fonts.
- `reference/portfolio.original.html` — the original self-contained Claude-artifact export.


