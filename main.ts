import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// A single-line entry means a single write is enough; keep it that way.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(dirname(fileURLToPath(import.meta.url)), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), "fix: deleted the bug and, as a bonus, the feature it was hiding inside; users will notice neither", "utf8");
