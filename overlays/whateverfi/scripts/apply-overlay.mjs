#!/usr/bin/env node
// Applies the WhatEverFi overlay to a checkout that still has pristine (or
// previously merged) upstream files. Never modifies LICENSE or "Copyright 2026
// Rakazo contributors" lines.
// Usage: node overlays/whateverfi/scripts/apply-overlay.mjs <repo-root>
// Exit: 0 ok, 2 usage, 4 a required rule no longer matches.
import { spawnSync } from "node:child_process";
import {
  cpSync,
  existsSync,
  readdirSync,
  readFileSync,
  renameSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { basename, dirname, extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const overlayRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const root = process.argv[2];
if (!root || !existsSync(join(root, ".git")) || !existsSync(join(root, "LICENSE"))) {
  console.error("usage: apply-overlay.mjs <repo-root-with-git-and-LICENSE>");
  process.exit(2);
}
const brand = JSON.parse(readFileSync(join(overlayRoot, "brand.json"), "utf8"));
const { include, exclude, textExtensions, rootFiles = [], linkInclude = [] } = brand.scope;
const failures = [];
const COPYRIGHT = "Copyright 2026 Rakazo contributors";

function isProtected(rel) {
  const base = basename(rel);
  if (base === "LICENSE" || rel === "LICENSE") return true;
  if (rel.startsWith("overlays/")) return true;
  if (base === "pnpm-lock.yaml") return true;
  return false;
}

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    if (exclude.includes(name)) continue;
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

// 1. Rename brand-named files in configured roots (marketing assets only).
const renames = new Map();
for (const rroot of brand.renameFiles?.roots ?? []) {
  const abs = join(root, rroot);
  if (!existsSync(abs)) {
    failures.push(`rename root missing: ${rroot}`);
    continue;
  }
  for (const file of walk(abs)) {
    const name = basename(file);
    if (!name.toLowerCase().includes(brand.renameFiles.from)) continue;
    const next = name.replaceAll(brand.renameFiles.from, brand.renameFiles.to);
    const stem = (n) => n.slice(0, n.length - extname(n).length);
    if (stem(name).toLowerCase() === brand.renameFiles.from) {
      failures.push(
        `refusing to rename bare brand file ${relative(root, file)}; add an explicit rule`,
      );
      continue;
    }
    renameSync(file, join(dirname(file), next));
    renames.set(stem(name), stem(next));
  }
}

// 2. Text rules.
const rules = brand.rules.map((r) => ({ ...r, re: new RegExp(r.find, "g"), hits: 0 }));
const stemRules = [...renames].sort((a, b) => b[0].length - a[0].length);
const targets = [];
for (const inc of include) {
  const abs = join(root, inc);
  if (!existsSync(abs)) {
    failures.push(`include path missing: ${inc}`);
    continue;
  }
  if (statSync(abs).isFile()) targets.push(abs);
  else targets.push(...walk(abs));
}
for (const rf of rootFiles) {
  const abs = join(root, rf);
  if (existsSync(abs)) targets.push(abs);
  else failures.push(`root file missing: ${rf}`);
}

const linkTargets = [];
for (const inc of linkInclude) {
  const abs = join(root, inc);
  if (!existsSync(abs)) continue;
  if (statSync(abs).isFile()) linkTargets.push(abs);
  else linkTargets.push(...walk(abs));
}

let filesChanged = 0;
const changedRels = [];
const seen = new Set();
const allFiles = [
  ...targets.map((file) => ({ file, linkOnly: false })),
  ...linkTargets.map((file) => ({ file, linkOnly: true })),
];
for (const { file, linkOnly } of allFiles) {
  const rel = relative(root, file);
  const key = `${rel}|${linkOnly}`;
  if (seen.has(key)) continue;
  seen.add(key);
  if (isProtected(rel)) continue;
  if (!textExtensions.includes(extname(file)) && extname(file) !== "") continue;
  const before = readFileSync(file, "utf8");
  const hadCopyright = before.includes(COPYRIGHT);
  let text = before;
  if (!linkOnly) {
    for (const [from, to] of stemRules) text = text.replaceAll(from, to);
  }
  for (const rule of rules) {
    if (linkOnly && rule.group !== "links") continue;
    if (rule.file && rule.file !== rel) continue;
    text = text.replace(rule.re, (...args) => {
      rule.hits++;
      const groups = args.slice(1, -2);
      return rule.replace.replace(/\$(\d)/g, (_, i) => groups[Number(i) - 1] ?? "");
    });
  }
  if (hadCopyright && !text.includes(COPYRIGHT)) {
    text = text.replaceAll("Copyright 2026 WhatEverFi contributors", COPYRIGHT);
    if (!text.includes(COPYRIGHT)) {
      failures.push(`copyright line would have been lost in ${rel}; skipped write`);
      continue;
    }
  }
  if (text !== before) {
    writeFileSync(file, text);
    filesChanged++;
    changedRels.push(rel);
  }
}
const alreadyBranded =
  existsSync(join(root, "overlays/whateverfi/brand.json")) &&
  existsSync(join(root, "README.md")) &&
  readFileSync(join(root, "README.md"), "utf8").includes("WhatEverFi");
for (const rule of rules) {
  if (rule.required && rule.hits === 0) {
    if (alreadyBranded && rule.required !== "always") {
      console.log(
        `  note: required rule "${rule.id}" matched nothing (already applied on this tree)`,
      );
    } else {
      failures.push(`required rule "${rule.id}" matched nothing`);
    }
  }
}

// 3. Copy verbatim overlay files (never LICENSE).
const filesDir = join(overlayRoot, "files");
if (existsSync(filesDir)) {
  cpSync(filesDir, root, { recursive: true });
}

// 3b. Guard workflows that need secrets this fork does not have.
const guard = join(overlayRoot, "scripts/guard-fork-workflows.mjs");
if (existsSync(guard)) {
  const g = spawnSync(process.execPath, [guard, root], { cwd: root, encoding: "utf8" });
  if (g.stdout) process.stdout.write(g.stdout);
  if (g.stderr) process.stderr.write(g.stderr);
  if (g.status !== 0) {
    failures.push(`guard-fork-workflows.mjs exited ${g.status ?? 1}`);
  }
}

// 4. Rebrand / restore marketing images (live kit + OG cards; generate any new ones).
const rebrand = join(overlayRoot, "scripts/rebrand-assets.py");
if (existsSync(rebrand)) {
  const py = spawnSync("python3", [rebrand, root, "WhatEverFi"], {
    cwd: root,
    encoding: "utf8",
  });
  if (py.stdout) process.stdout.write(py.stdout);
  if (py.stderr) process.stderr.write(py.stderr);
  if (py.status !== 0) {
    failures.push(`rebrand-assets.py exited ${py.status ?? 1}`);
  }
}

// Re-format files the overlay touched so long URL/email rewrites do not fail `pnpm lint`.
const biome = join(root, "node_modules/.bin/biome");
if (existsSync(biome) && changedRels.length) {
  const unique = [...new Set(changedRels)].filter((rel) => !rel.startsWith("overlays/"));
  if (unique.length) {
    const fmt = spawnSync(
      biome,
      ["check", "--write", "--linter-enabled=false", "--no-errors-on-unmatched", ...unique],
      {
        cwd: root,
        encoding: "utf8",
      },
    );
    if (fmt.status !== 0) {
      process.stderr.write(fmt.stdout || "");
      process.stderr.write(fmt.stderr || "");
      failures.push(`biome format of overlay-touched files exited ${fmt.status}`);
    }
  }
}

console.log(`overlay: ${renames.size} files renamed, ${filesChanged} files rewritten`);
for (const rule of rules) console.log(`  rule ${rule.id.padEnd(28)} ${rule.hits}`);
if (failures.length) {
  console.error("\nOVERLAY FAILED - upstream no longer matches the overlay:");
  for (const f of failures) console.error(`  - ${f}`);
  process.exitCode = 4;
}
