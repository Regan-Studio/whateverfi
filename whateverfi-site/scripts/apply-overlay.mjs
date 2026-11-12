#!/usr/bin/env node
// Applies the WhatEverFi overlay to a pristine upstream checkout.
// Usage: node scripts/apply-overlay.mjs <upstream-dir>
// Exit codes: 0 ok, 2 usage, 4 a required rule/rename no longer matches upstream.
import { cpSync, existsSync, readdirSync, readFileSync, renameSync, statSync, writeFileSync } from "node:fs";
import { basename, dirname, extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const wrapperRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const upstream = process.argv[2];
if (!upstream || !existsSync(join(upstream, ".git"))) {
  console.error("usage: apply-overlay.mjs <upstream checkout>");
  process.exit(2);
}
const brand = JSON.parse(readFileSync(join(wrapperRoot, "overrides/brand.json"), "utf8"));
const { include, exclude, textExtensions } = brand.scope;
const failures = [];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (exclude.includes(name)) continue;
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

// 1. Rename files whose names carry the old brand (brand kit, blog slug, OG images).
const renames = new Map(); // old stem -> new stem
for (const root of brand.renameFiles.roots) {
  const abs = join(upstream, root);
  if (!existsSync(abs)) {
    failures.push(`rename root missing: ${root}`);
    continue;
  }
  for (const file of walk(abs)) {
    const name = basename(file);
    if (!name.toLowerCase().includes(brand.renameFiles.from)) continue;
    const next = name.replaceAll(brand.renameFiles.from, brand.renameFiles.to);
    const stem = (n) => n.slice(0, n.length - extname(n).length);
    // A bare "rakazo" stem would rewrite repository URLs too; refuse instead of guessing.
    if (stem(name).toLowerCase() === brand.renameFiles.from) {
      failures.push(`refusing to rename bare brand file ${relative(upstream, file)}; add an explicit rule`);
      continue;
    }
    renameSync(file, join(dirname(file), next));
    renames.set(stem(name), stem(next));
  }
}
if (renames.size === 0) failures.push("no brand-named files found to rename (upstream layout changed?)");

// 2. Text rules.
const rules = brand.rules.map((r) => ({ ...r, re: new RegExp(r.find, "g"), hits: 0 }));
const stemRules = [...renames].sort((a, b) => b[0].length - a[0].length);
let filesChanged = 0;
for (const inc of include) {
  for (const file of walk(join(upstream, inc))) {
    if (!textExtensions.includes(extname(file))) continue;
    const rel = relative(upstream, file);
    const before = readFileSync(file, "utf8");
    let text = before;
    for (const [from, to] of stemRules) text = text.replaceAll(from, to);
    for (const rule of rules) {
      if (rule.file && rule.file !== rel) continue;
      text = text.replace(rule.re, (...args) => {
        rule.hits++;
        const groups = args.slice(1, -2);
        return rule.replace.replace(/\$(\d)/g, (_, i) => groups[Number(i) - 1] ?? "");
      });
    }
    if (text !== before) {
      writeFileSync(file, text);
      filesChanged++;
    }
  }
}
for (const rule of rules) {
  if (rule.required && rule.hits === 0) failures.push(`required rule "${rule.id}" matched nothing`);
}

// 3. Copy overlay files verbatim (NOTICE, etc.).
const filesDir = join(wrapperRoot, "overrides/files");
if (existsSync(filesDir)) cpSync(filesDir, upstream, { recursive: true });

console.log(`overlay: ${renames.size} files renamed, ${filesChanged} files rewritten`);
for (const rule of rules) console.log(`  rule ${rule.id.padEnd(22)} ${rule.hits}`);
if (failures.length) {
  console.error("\nOVERLAY FAILED - upstream no longer matches the overlay:");
  for (const f of failures) console.error(`  - ${f}`);
  process.exitCode = 4;
}
