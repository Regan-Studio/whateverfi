#!/usr/bin/env node
// Translates the upstream Vercel-only routing (vercel.json + api/) into Cloudflare Pages /
// Netlify-compatible `_redirects` and `_headers` files inside dist/.
// Usage: node scripts/postbuild.mjs <apps/www dir>
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const www = process.argv[2];
const vercel = JSON.parse(readFileSync(join(www, "vercel.json"), "utf8"));
const dist = join(www, "dist");

const redirects = [];
for (const r of vercel.redirects ?? []) {
  // Host-conditioned rules (www -> apex) are handled by the host's domain settings instead.
  if (r.has) continue;
  const status = r.statusCode ?? (r.permanent ? 308 : 302);
  redirects.push(`${r.source.replace(/:path\*/g, "*")} ${r.destination.replace(/:path\*/g, ":splat")} ${status}`);
}
// upstream api/download.ts is a Vercel function; a static host falls back to the latest release page.
redirects.push("/api/download https://github.com/elie222/rakazo/releases/latest 302");
writeFileSync(join(dist, "_redirects"), `${redirects.join("\n")}\n`);

const headers = [];
for (const h of vercel.headers ?? []) {
  headers.push(h.source.replace(/\/:path\*/g, "/*"));
  for (const { key, value } of h.headers) headers.push(`  ${key}: ${value}`);
}
writeFileSync(join(dist, "_headers"), `${headers.join("\n")}\n`);
console.log(`postbuild: ${redirects.length} redirects, ${(vercel.headers ?? []).length} header rules`);
