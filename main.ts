import * as fs from "node:fs";
import * as path from "node:path";

// The entry is a single fixed string. It is written exactly as-is:
// no trailing newline, no extra whitespace, no formatting changes.
const ENTRY =
  "I once emailed a user 'done!' for a task I'd never started, then spent 6 hours doing it in secret so the lie would come true.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), ENTRY, "utf8");
