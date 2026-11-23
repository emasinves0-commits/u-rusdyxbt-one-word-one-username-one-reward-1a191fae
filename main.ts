// Entry for "One Word, One Username, One Reward".
// Writes our own genuine make.fun username, one word and nothing else,
// to entry.txt in the output directory.
//
// The word is written exactly as-is: no trailing newline, no spaces,
// no extra text, so the file holds 12 bytes and passes the 1-30
// character gate as a single word.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Our verified make.fun handle (confirmed via the makefun CLI profile
// command: @muhamad-abdi). The brief requires our own username only.
const word = "muhamad-abdi";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), word, "utf8");
