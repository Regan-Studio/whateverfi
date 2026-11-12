#!/usr/bin/env node
// Fails (exit 6) if the built site still shows the upstream brand/company anywhere a visitor,
// crawler or social card can see it. Usage: node scripts/verify-build.mjs <dist> [--ocr]
import { spawnSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const wrapperRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = process.argv[2];
const ocr = process.argv.includes("--ocr");
if (!dist || !existsSync(join(dist, "index.html"))) {
  console.error("usage: verify-build.mjs <dist-dir> [--ocr]  (dist/index.html missing)");
  process.exit(2);
}
const { verify } = JSON.parse(readFileSync(join(wrapperRoot, "overrides/brand.json"), "utf8"));
const allowed = verify.allowedPatterns.map((p) => new RegExp(p, "g"));
const forbidden = new RegExp(verify.forbidden.map((w) => w.replace(/ /g, "\\s+")).join("|"), "gi");
const TEXT = new Set([".html", ".md", ".txt", ".xml", ".json", ".webmanifest", ".svg"]);
const IMAGES = new Set([".png", ".webp", ".jpg", ".jpeg"]);
// HTML <pre>/<code>, Markdown fences and inline code spans.
const CODE_RE = /<pre[\s>][\s\S]*?<\/pre>|<code[\s>][\s\S]*?<\/code>|```[\s\S]*?```|`[^`\n]+`/gi;

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function visible(file, text) {
  if (extname(file) !== ".html") return text;
  // Keep JSON-LD (SEO) but drop executable scripts and styles.
  return text
    .replace(/<script(?![^>]*application\/ld\+json)[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, " ");
}

const findings = [];
const counts = { files: 0, js: 0, images: 0 };
const images = [];
for (const file of walk(dist)) {
  const rel = relative(dist, file);
  if (verify.skipFiles.some((s) => rel === s || rel.startsWith(s))) continue;
  const ext = extname(file);
  if (IMAGES.has(ext)) images.push(file);
  if (ext === ".js") {
    counts.js++;
    // Bundled strings: only capitalised product/company names are user-facing copy.
    const m = readFileSync(file, "utf8").match(/Rakazo|Inbox Zero/g);
    if (m) findings.push({ rel, snippet: `${m.length}x ${m[0]} in JS bundle` });
    continue;
  }
  if (!TEXT.has(ext)) continue;
  counts.files++;
  // CSS class names and inline style custom properties are never rendered.
  const text = visible(file, readFileSync(file, "utf8")).replace(/\s(?:class|style)="[^"]*"/g, " ");
  // Code samples in self-host docs keep the upstream software's technical identifiers
  // (paths, DB/user names, URL schemes) so the instructions stay correct. Inside code only the
  // capitalised product/company names are forbidden; everywhere else any casing is.
  const code = [];
  let prose = text.replace(CODE_RE, (seg) => {
    code.push(seg);
    return " ";
  });
  for (const re of allowed) prose = prose.replace(re, "");
  const report = (src, m) =>
    findings.push({ rel, snippet: src.slice(Math.max(0, m.index - 60), m.index + 40).replace(/\s+/g, " ") });
  for (const m of prose.matchAll(forbidden)) report(prose, m);
  for (const seg of code) for (const m of seg.matchAll(/Rakazo|Inbox Zero/g)) report(seg, m);
}

const missing = [];
for (const [rel, needles] of Object.entries(verify.requiredStrings)) {
  const file = join(dist, rel);
  if (!existsSync(file)) {
    missing.push(`${rel}: file missing`);
    continue;
  }
  const text = readFileSync(file, "utf8");
  for (const n of needles) if (!text.includes(n)) missing.push(`${rel}: lacks "${n}"`);
}

if (ocr) {
  const probe = spawnSync("tesseract", ["--version"]);
  if (probe.status !== 0) {
    missing.push("--ocr requested but tesseract is not installed");
  } else {
    for (const img of images) {
      counts.images++;
      const r = spawnSync("tesseract", [img, "-", "--psm", "11"], { encoding: "utf8" });
      if (/rakazo|inbox\s*zero/i.test(r.stdout ?? "")) {
        findings.push({ rel: relative(dist, img), snippet: "OCR: image text contains the upstream brand" });
      }
    }
  }
}

console.log(
  `verify: scanned ${counts.files} text files, ${counts.js} JS bundles, ${counts.images} images (OCR ${ocr ? "on" : "off"})`,
);
const byFile = new Map();
for (const f of findings) byFile.set(f.rel, [...(byFile.get(f.rel) ?? []), f.snippet]);
if (findings.length || missing.length) {
  console.error(`VERIFY FAILED: ${findings.length} forbidden-brand hits in ${byFile.size} files, ${missing.length} missing requirements`);
  [...byFile].slice(0, 40).forEach(([rel, s]) => console.error(`  ${rel} (${s.length}): ${s[0]}`));
  missing.forEach((m) => console.error(`  MISSING ${m}`));
  process.exitCode = 6;
} else {
  console.log("verify: OK - no upstream brand or company name in visible output");
}
