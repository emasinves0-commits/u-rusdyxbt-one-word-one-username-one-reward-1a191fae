// Entry for "One Word, One Username, One Reward" (v2, correction revision).
//
// v1 wrongly wrote "muhamad-abdi" (the person's name). The correct word is
// our make.fun account handle, "gila-kamu". It was verified through the
// make.fun API: the `hunter` field on 4 of our own submissions returns
// "gila-kamu".
//
// The entry is exactly that single word in entry.txt: no trailing newline,
// no spaces, no extra text (9 bytes).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Verified via the API `hunter` field on 4 of our submissions.
const HANDLE = "gila-kamu";

const MIN_LENGTH = 1;
const MAX_LENGTH = 30;

// A make.fun handle uses lowercase letters, digits and hyphens only.
const HANDLE_CHARSET = /^[a-z0-9-]+$/;

// Gate: 1-30 characters, a single word with no whitespace, drawn from the
// make.fun handle charset, and containing at least one letter (so an
// all-digit or all-hyphen string is not a handle).
function validateHandle(handle: string): string {
  if (handle.length < MIN_LENGTH || handle.length > MAX_LENGTH) {
    throw new Error(
      `handle must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${handle.length}`,
    );
  }
  if (/\s/.test(handle)) {
    throw new Error("handle must be a single word with no whitespace");
  }
  if (!HANDLE_CHARSET.test(handle)) {
    throw new Error(
      "handle may contain only lowercase letters, digits and hyphens",
    );
  }
  if (!/[a-z]/.test(handle)) {
    throw new Error("handle must contain at least one letter");
  }
  return handle;
}

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const word = validateHandle(HANDLE);

  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), word, "utf8");
}

main();
