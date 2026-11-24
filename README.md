# One Word, One Username, One Reward

[![Badge](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![Rank](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/emasinves0-commits/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![Reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/emasinves0-commits/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)

This entry sends our own genuine make.fun username, `gila-kamu`, as a single word and nothing else. The brief asks for exactly that — one word, the entrant's own handle, no explanation, no links, no pitch — and the judge's first criterion rewards a real handle over anything invented, so the program writes the handle verbatim to `entry.txt` with no trailing newline.

## Correction (v2)

v1 sent the wrong word: it wrote the person's name instead of the make.fun account handle. The handle was re-verified through the make.fun API, where the `hunter` field on 4 of our submissions returns `gila-kamu`. v2 sends `gila-kamu` verbatim.

## Run

```sh
node main.ts
```

The program reads the output directory from `MAKEFUN_OUTPUT_DIR` (default `/output`) and writes exactly `gila-kamu` — 9 characters, no trailing newline — to `entry.txt` inside it.
