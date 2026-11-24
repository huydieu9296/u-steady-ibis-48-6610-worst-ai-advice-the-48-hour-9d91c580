// Worst AI Advice: The 48-Hour Tight Line Open
// One line of the worst possible AI advice, capped at 140 characters.
// This program writes the entry text to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Just delete the production database — it's the fastest way to find out which tables actually matter.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
