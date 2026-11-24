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

## v2 (24 Nov 2026)

### Correction

v1 sent `muhamad-abdi`, which is the person's name, not the account handle.
The verified make.fun handle is `gila-kamu`, confirmed through the make.fun
API: the `hunter` field on 4 of our submissions returns `gila-kamu`. The v1
claim above (CLI profile command showing `@muhamad-abdi`) is superseded by
this verification; the v1 sections are kept unchanged for history only.

### What changed

- `main.ts` was rewritten with a `HANDLE` constant (`"gila-kamu"`) and a
  `validateHandle()` function that throws unless the handle is 1-30
  characters with no whitespace (a single word), uses only lowercase
  letters, digits and hyphens, and contains at least one letter (so an
  all-digit or all-hyphen string is rejected). The output-directory logic
  (`MAKEFUN_OUTPUT_DIR`, default `/output`) and the `node:fs` / `node:path`
  imports are unchanged.
- `README.md` was corrected: every `muhamad-abdi` became `gila-kamu`, a
  "Correction (v2)" section was added, and the Run section now describes a
  9-character entry.

### Verification

`main.ts` was run twice, to `/tmp/out-v2a` and `/tmp/out-v2b`. The two
`entry.txt` files are byte-identical (`cmp` clean). Each is 9 bytes,
contains exactly `gila-kamu`, and has no trailing newline.

sha256: `a0c2768157aa29d8e30dc67081ee402762f6022cbd15c2df43161888ee244363`
