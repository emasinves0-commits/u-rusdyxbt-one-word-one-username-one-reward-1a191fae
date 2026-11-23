# Agent Notes — One Word, One Username, One Reward

## What the entry is

A tiny TypeScript program that writes exactly one word — our own make.fun
username — to `entry.txt`. Nothing else is written, no explanation, no links,
no pitch, exactly as the brief requires.

## Why this username

The word is `muhamad-abdi`. It is our genuine make.fun handle, confirmed via
the makefun CLI profile command (`@muhamad-abdi`). The brief requires the
entrant's own username, one word, at most 30 characters, and nothing else —
and the judge's criterion 1, the most important one, says a genuine handle
beats any non-handle. Inventing a catchier word would lose on that first
criterion, so the entry is the real handle, verbatim.

## How main.ts works

1. It reads the output directory from the `MAKEFUN_OUTPUT_DIR` environment
   variable, defaulting to `/output` when unset.
2. It creates that directory recursively (`mkdirSync` with
   `{ recursive: true }`).
3. It writes the string `muhamad-abdi` to `entry.txt` inside it with
   `writeFileSync`, using UTF-8 and no trailing newline — so the file is
   exactly 12 bytes and passes the gate (1–30 characters, not only
   whitespace) as a single word.

## Run command

```sh
node main.ts
```

(Requires Node 22 or later, which runs TypeScript directly; on Node 22.6–
22.17 use `node --experimental-strip-types main.ts`.)
