import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

const projectRoot = process.cwd();
const sourceRoot = join(projectRoot, "src");
const allowedContainer = "max-w-6xl";
const violations = [];

function visit(directory) {
  for (const name of readdirSync(directory)) {
    const path = join(directory, name);
    const stats = statSync(path);

    if (stats.isDirectory()) {
      visit(path);
      continue;
    }

    if (![".astro", ".tsx", ".jsx"].includes(extname(path))) continue;

    const content = readFileSync(path, "utf8");
    const containers = content.match(/max-w-[\w[\]-]+/g) ?? [];
    for (const container of containers) {
      if (container !== allowedContainer) {
        violations.push(
          `${relative(projectRoot, path)}: use ${allowedContainer} instead of ${container}`,
        );
      }
    }
  }
}

visit(sourceRoot);

if (violations.length > 0) {
  console.error(violations.join("\n"));
  process.exit(1);
}

console.log("Container policy passed");
