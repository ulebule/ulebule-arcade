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

Games load into an `<iframe>` inside the cabinet screen, so you can switch
between them without leaving the page. Each game stays in its own repo at
its own GitHub Pages address — this page only gathers them in one place.
The cabinet screen changes shape to match the game: 3:4 for the upright
games, 10:7 for BOULDER RUSH.

## Controls

- `◀ ▶` or `↑ ↓` — pick a game, `ENTER` / `SPACE` — start
- `1` – `4` — jump straight to a game
- `ESC` — back to the cabinet select
- `M` — menu sound, `L` — language
- clicking or tapping a row, or the preview, does the same

While a game is running every key belongs to the game; `ESC` and the
`◀ GAMES` button bring you back. The other buttons are fullscreen, open
the game in a new tab, and open the game's source.

Deep links to a single game: `#tower`, `#pinball`, `#batty`, `#boulder` —
for example https://ulebule.github.io/ulebule-arcade/#batty

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
connection. The games do not come along: the worker is registered at
`/ulebule-arcade/` and its scope ends there, while each game lives at a
sibling path (`/batty/`, `/nebulus/`, …). Launching a game offline shows a
short notice instead of a blank screen. Making the games playable offline
too would mean giving each game repo its own service worker.

## Technical

`index.html` is self-contained — no build step, no external requests, no
dependencies. CSS and JS are inline, and the select screen is a 480×640
`<canvas>` with procedurally drawn animated previews of each game (no
images at all). The rest of the repo is only there for the PWA:
`manifest.webmanifest`, `sw.js` and `icons/`. Open `index.html` on its own
and it still works, minus installability.

To add a game, extend the `GAMES` array at the top of the script (`id`,
`repo`, `title`, `year`, `art`, optional `ar` for a non-3:4 screen, and
the translations) and add a preview drawing function to `ART`. The select
screen lays itself out from the number of games, so nothing else needs
touching.

Game links are relative (`../<repo>/`) when the page runs on `github.io`
and absolute otherwise, so a fork works unchanged.

## Licence

MIT
