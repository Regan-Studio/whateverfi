#!/usr/bin/env node
// Cloudflare Pages / Netlify `_redirects` + `_headers` from vercel.json, plus
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

const headers = [];
for (const h of vercel.headers ?? []) {
  headers.push(h.source.replace(/\/:path\*/g, "/*"));
  for (const { key, value } of h.headers) headers.push(`  ${key}: ${value}`);
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
  `postbuild: ${redirects.length} redirects, ${(vercel.headers ?? []).length} header rules, build-info ${info.wrapperSha.slice(0, 12)}`,
);
