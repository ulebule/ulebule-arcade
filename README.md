# ULEBULE ARCADE

One page, one retro arcade cabinet — and every browser game from
[github.com/ulebule](https://github.com/ulebule) inside it.

**Play:** https://ulebule.github.io/ulebule-arcade/

## What's in the cabinet

| # | Game | Repo | Tribute to |
|---|------|------|------------|
| 1 | TOWER | [nebulus](https://github.com/ulebule/nebulus) | Nebulus (Hewson, 1987) |
| 2 | ATOMSKI PINBALL | [atomski-pinball](https://github.com/ulebule/atomski-pinball) | Atari Video Pinball (1980) |
| 3 | BATTY | [batty](https://github.com/ulebule/batty) | Batty (Elite, ZX Spectrum, 1987) |
| 4 | BOULDER RUSH | [boulder-dash](https://github.com/ulebule/boulder-dash) | Boulder Dash (First Star, 1984) |
| 5 | FIST OF '87 | [fist-of-87](https://github.com/ulebule/fist-of-87) | the 1987 coin-op brawlers (original game, no port) |
| 6 | SGT. RUKA | [sgt-ruka](https://github.com/ulebule/sgt-ruka) | the 1985 vertical run-and-guns (original game, no port) |

Pressing START opens the chosen game in its own window, so it gets the whole
screen, its own history and its own fullscreen button, and none of the keyboard
focus problems a framed game has. The window is named, so picking another game
reuses it rather than leaving a trail of tabs behind. Each game stays in its own
repo at its own GitHub Pages address — this page only gathers them in one
place.

## Controls

- `◀ ▶` or `↑ ↓` — pick a game, `ENTER` / `SPACE` — open it
- `1` – `6` — open a game straight away
- `M` — menu sound, `L` — language
- clicking or tapping a row, or the preview, does the same

If a pop-up blocker swallows the window, the cabinet says so and offers a
button that opens the game directly from your click.

Deep links preselect a game: `#tower`, `#pinball`, `#batty`, `#boulder`, `#fist`, `#ruka` — for
example https://ulebule.github.io/ulebule-arcade/#batty leaves BATTY highlighted
and ready for START. They deliberately do not open the window by themselves,
because a window opened without a click of its own is exactly what every
pop-up blocker exists to stop.

## Languages

English (default), Slovenian, German, Italian, French. The language is
guessed from the browser on the first visit and then remembered in
`localStorage`.

## Install it

The cabinet is a PWA, so a browser will offer to install it — on Android and
desktop Chrome from the address bar or the `⤓ INSTALL` button that appears in
the control panel, on iOS via Share → *Add to Home Screen*. Installed, it
opens standalone with the cabinet filling the screen, and the manifest
shortcuts jump straight to a single game.

The service worker caches the cabinet itself, so the launcher opens with no
connection. Each game repo carries its own worker too, and since a game now runs
in its own window under its own path, that worker serves it directly — a game
you have opened once keeps working offline.

Cache names matter here, because caches are shared across the whole origin:
every worker prefixes its cache with its repo name and deletes only its own
old versions. Without that, opening one game wipes the others.

## Technical

`index.html` is self-contained — no build step, no external requests, no
dependencies. CSS and JS are inline, and the select screen is a 480×640
`<canvas>` with procedurally drawn animated previews of each game (no
images at all). The rest of the repo is only there for the PWA:
`manifest.webmanifest`, `sw.js` and `icons/`. Open `index.html` on its own
and it still works, minus installability.

To add a game, extend the `GAMES` array at the top of the script (`id`,
`repo`, `title`, `year`, `art` and the translations) and add a preview drawing
function to `ART`. The select screen lays itself out from the number of games,
so nothing else needs touching.

Game links are relative (`../<repo>/`) when the page runs on `github.io`
and absolute otherwise, so a fork works unchanged.

## Licence

MIT
