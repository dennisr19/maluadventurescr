import { readdirSync, readFileSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

const projectRoot = process.cwd();
const componentRoot = join(projectRoot, "src", "components");
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

    const lineCount = readFileSync(path, "utf8").split("\n").length;
    if (lineCount > 300) {
      violations.push(`${relative(projectRoot, path)}: ${lineCount} lines, limit is 300`);
    }
  }
}

visit(componentRoot);

if (violations.length > 0) {
  console.error(violations.join("\n"));
  process.exit(1);
}

console.log("Component size policy passed");
