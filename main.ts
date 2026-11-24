// Worst AI Advice: The 48-Hour Tight Line Open — make.fun entry.
//
// One line of the worst possible advice an AI could give, at most 140
// characters. This program writes that single line to /output/entry.txt.
// Runs under Node (node22 in the harness), using only node:fs.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Just delete the production database — it's the fastest way to find out which tables actually matter.";

const MAX_CHARS = 140;

function main(): void {
  // Hardened self-check: exactly one line, 1–140 characters, no bare
  // whitespace-only content, and no hidden newlines or control chars.
  const lines = LINE.split("\n");
  if (lines.length !== 1) {
    throw new Error(`entry must be a single line, got ${lines.length} lines`);
  }
  if (LINE.length < 1 || LINE.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${LINE.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  // eslint-disable-next-line no-control-regex
  if (/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/.test(LINE)) {
    throw new Error("entry must not contain control characters");
  }

  const outDir = "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");

  // Verify what was actually written: byte-exact match with the line.
  const written = readFileSync(`${outDir}/entry.txt`, "utf8");
  if (written !== LINE) {
    throw new Error("written output does not match the entry line");
  }
  console.log(`wrote ${LINE.length} chars to /output/entry.txt (verified)`);
}

main();
