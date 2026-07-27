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

Games load into an `<iframe>` inside the cabinet screen, so you can switch
between them without leaving the page. Each game stays in its own repo at
its own GitHub Pages address — this page only gathers them in one place.

## Controls

- `◀ ▶` or `↑ ↓` — pick a game, `ENTER` / `SPACE` — start
- `1` – `3` — jump straight to a game
- `ESC` — back to the cabinet select
- `M` — menu sound, `L` — language
- clicking or tapping a row, or the preview, does the same

While a game is running every key belongs to the game; `ESC` and the
`◀ GAMES` button bring you back. The other buttons are fullscreen, open
the game in a new tab, and open the game's source.

Deep links to a single game: `#tower`, `#pinball`, `#batty` — for example
https://ulebule.github.io/ulebule-arcade/#batty

## Languages

English (default), Slovenian, German, Italian, French. The language is
guessed from the browser on the first visit and then remembered in
`localStorage`.

## Technical

A single self-contained `index.html` — no build step, no external
requests, no dependencies. CSS and JS are inline. The select screen is a
480×640 `<canvas>` with procedurally drawn animated previews of each game
(no images at all).

To add a game, extend the `GAMES` array at the top of the script (`id`,
`repo`, `title`, `year`, `art`, translations) and add a preview drawing
function to `ART`.

Game links are relative (`../<repo>/`) when the page runs on `github.io`
and absolute otherwise, so a fork works unchanged.

## Licence

MIT
