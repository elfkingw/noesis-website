#!/usr/bin/env node
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
// Wrong legacy product names must not appear in product copy.
const banned = [
  { re: /新致[\u7075]智/, label: "wrong-zh-brand" },
  { re: /[\u7075]智 AI/, label: "wrong-zh-engine" },
  { re: /Lingzhi/i, label: "wrong-en-brand" },
];
const required = "新致新知 Noesis AI";
const exts = new Set([".ts", ".astro", ".css", ".md", ".svg", ".json"]);
const skipFiles = new Set([
  path.join(root, "scripts", "check-brand.mjs"),
]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    if (
      e.name === "node_modules" ||
      e.name === "dist" ||
      e.name === ".astro" ||
      e.name === ".git" ||
      e.name === ".cursor"
    )
      continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(full)));
    else if (exts.has(path.extname(e.name))) files.push(full);
  }
  return files;
}

const files = await walk(root);
let failed = false;
let sawRequired = false;

for (const file of files) {
  if (skipFiles.has(file)) continue;
  const text = await readFile(file, "utf8");
  if (text.includes(required)) sawRequired = true;
  for (const { re, label } of banned) {
    if (re.test(text)) {
      failed = true;
      console.error(`Banned brand (${label}) in ${path.relative(root, file)}`);
    }
  }
}

if (!sawRequired) {
  failed = true;
  console.error(`Missing required brand string: ${required}`);
}

if (failed) process.exit(1);
console.log("Brand check passed.");
