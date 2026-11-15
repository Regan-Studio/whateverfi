#!/usr/bin/env node
// Cloudflare Pages / Netlify `_redirects` + `_headers` from vercel.json, merged with public/_headers, plus
// WhatEverFi `/api/download` and a public build-info.json.
// Usage: node overlays/whateverfi/scripts/postbuild.mjs <apps/www dir>
import { execSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const www = resolve(process.argv[2] || ".");
const repoRoot = resolve(www, "../..");
const vercelPath = join(www, "vercel.json");
const dist = join(www, "dist");
if (!existsSync(vercelPath) || !existsSync(dist)) {
  console.error(`postbuild: expected ${vercelPath} and ${dist}`);
  process.exit(2);
}

const vercel = JSON.parse(readFileSync(vercelPath, "utf8"));
const redirects = [];
for (const r of vercel.redirects ?? []) {
  if (r.has) continue;
  const status = r.statusCode ?? (r.permanent ? 308 : 302);
  redirects.push(
    `${r.source.replace(/:path\*/g, "*")} ${r.destination.replace(/:path\*/g, ":splat")} ${status}`,
  );
}
const downloadRule = "/api/download https://app.whateverfi.com/ 302";
if (!redirects.includes(downloadRule)) redirects.push(downloadRule);
writeFileSync(join(dist, "_redirects"), `${redirects.join("\n")}\n`);

function parseHeadersFile(text) {
  const blocks = new Map();
  let path = null;
  for (const raw of text.split(/\r?\n/)) {
    if (!raw.trim() || raw.trim().startsWith("#")) continue;
    if (!raw.startsWith(" ") && !raw.startsWith("\t")) {
      path = raw.trim();
      if (!blocks.has(path)) blocks.set(path, []);
      continue;
    }
    const match = raw.trim().match(/^([^:]+):\s*(.*)$/);
    if (path && match) {
      blocks.get(path).push({ key: match[1].trim(), value: match[2] });
    }
  }
  return blocks;
}

function mergeHeaderBlocks(base, extra) {
  for (const [path, headers] of extra) {
    if (!base.has(path)) {
      base.set(path, [...headers]);
      continue;
    }
    const existing = new Set(base.get(path).map((h) => h.key.toLowerCase()));
    for (const header of headers) {
      if (!existing.has(header.key.toLowerCase())) {
        base.get(path).push(header);
        existing.add(header.key.toLowerCase());
      }
    }
  }
  return base;
}

const headerBlocks = new Map();
for (const h of vercel.headers ?? []) {
  const path = h.source.replace(/\/:path\*/g, "/*");
  if (!headerBlocks.has(path)) headerBlocks.set(path, []);
  for (const { key, value } of h.headers) headerBlocks.get(path).push({ key, value });
}
const publicHeadersPath = join(www, "public/_headers");
if (existsSync(publicHeadersPath)) {
  mergeHeaderBlocks(headerBlocks, parseHeadersFile(readFileSync(publicHeadersPath, "utf8")));
}
const headers = [];
for (const [path, pathHeaders] of headerBlocks) {
  headers.push(path);
  for (const { key, value } of pathHeaders) headers.push(`  ${key}: ${value}`);
}
writeFileSync(join(dist, "_headers"), `${headers.join("\n")}\n`);

const overlayDir = join(dirname(fileURLToPath(import.meta.url)), "..");
const upstreamPath = join(overlayDir, "upstream.json");
let upstream = { repo: "https://github.com/elie222/rakazo", sha: "" };
if (existsSync(upstreamPath)) upstream = JSON.parse(readFileSync(upstreamPath, "utf8"));
function git(cmd) {
  try {
    return execSync(cmd, { cwd: repoRoot, encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}
const info = {
  upstream: upstream.repo || "https://github.com/elie222/rakazo",
  upstreamSha: upstream.sha || "",
  wrapperSha: git("git rev-parse HEAD"),
  builtAt: new Date().toISOString(),
};
writeFileSync(join(dist, "build-info.json"), `${JSON.stringify(info)}\n`);
console.log(
  `postbuild: ${redirects.length} redirects, ${headerBlocks.size} header paths, build-info ${info.wrapperSha.slice(0, 12)}`,
);
