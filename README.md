# ULEBULE ARCADE

Ena sama stran, en sam retro arkadni avtomat — in v njem vse igrice z
[github.com/ulebule](https://github.com/ulebule).

**Igraj:** https://ulebule.github.io/ulebule-arcade/

## Kaj je notri

| # | Igra | Repo | Poklon |
|---|------|------|--------|
| 1 | TOWER | [nebulus](https://github.com/ulebule/nebulus) | Nebulus (Hewson, 1987) |
| 2 | ATOMSKI PINBALL | [atomski-pinball](https://github.com/ulebule/atomski-pinball) | Atari Video Pinball (1980) |
| 3 | BATTY | [batty](https://github.com/ulebule/batty) | Batty (Elite, ZX Spectrum, 1987) |

Igre se naložijo v `<iframe>` kar znotraj zaslona avtomata, tako da lahko
med njimi preklapljaš brez zapuščanja strani. Vsaka igra ostaja v svojem
repotu in na svojem GitHub Pages naslovu — ta stran jih samo zbere na enem
mestu.

## Kako se uporablja

- `◀ ▶` ali `↑ ↓` — izbira igre, `ENTER` / `SPACE` — start
- `1` – `3` — skoči naravnost na igro
- `ESC` — nazaj na izbiro iger
- `M` — zvok menija, `L` — jezik
- klik ali tap na vrstico oziroma na predogled deluje enako

Ko igra teče, gredo vse tipke igri; `ESC` in gumb `◀ IGRE` te vrneta na
izbiro. Gumbi ob strani: cel zaslon, odpri igro v novem zavihku, odpri
izvorno kodo igre.

Neposredna povezava do posamezne igre: `#tower`, `#pinball`, `#batty` —
npr. https://ulebule.github.io/ulebule-arcade/#batty

## Jeziki

Angleščina (privzeto), slovenščina, nemščina, italijanščina, francoščina.
Jezik se ob prvem obisku ugane iz nastavitev brskalnika in se potem
zapomni v `localStorage`.

## Tehnično

Ena sama samostojna datoteka `index.html` — brez build koraka, brez
zunanjih zahtevkov, brez odvisnosti. CSS in JS sta inline. Izbirni zaslon
je `<canvas>` 480×640 s proceduralno narisanimi animiranimi predogledi
posamezne igre (nič slik).

Nov naslov v seznam dodaš tako, da dopolniš polje `GAMES` na vrhu skripte
(`id`, `repo`, `title`, `year`, `art`, prevodi) in dodaš risalno funkcijo
za predogled v `ART`.

Povezave do iger so relativne (`../<repo>/`), ko stran teče na
`github.io`, sicer absolutne — tako fork deluje brez sprememb.

## Licenca

MIT
