import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

const projectRoot = process.cwd();
const sourceRoot = join(projectRoot, "src");
const allowedTailwindEntry = '@import "tailwindcss";';
const violations = [];

function visit(directory) {
  for (const name of readdirSync(directory)) {
    const path = join(directory, name);
    const stats = statSync(path);

    if (stats.isDirectory()) {
      visit(path);
      continue;
    }

    const extension = extname(path);
    const content = readFileSync(path, "utf8");
    const displayPath = relative(projectRoot, path);

    if (extension === ".css" && content.trim() !== allowedTailwindEntry) {
      violations.push(`${displayPath}: only the Tailwind entry import is allowed`);
    }

    if ([".astro", ".tsx", ".jsx"].includes(extension) && /<style\b|\sstyle=/.test(content)) {
      violations.push(`${displayPath}: use Tailwind utilities instead of authored CSS`);
    }
  }
}

visit(sourceRoot);

if (violations.length > 0) {
  console.error(violations.join("\n"));
  process.exit(1);
}

console.log("CSS policy passed");
