#!/usr/bin/env node
// Idempotently add job-level skip conditions to upstream workflows that need
// secrets or infrastructure Regan-Studio/whateverfi does not have. Weekly
// sync re-runs this after merging elie222/rakazo so the Actions tab stays
// green instead of failing on missing tokens.
// Usage: node guard-fork-workflows.mjs <repo-root>
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const root = process.argv[2];
if (!root || !existsSync(join(root, ".github/workflows"))) {
  console.error("usage: guard-fork-workflows.mjs <repo-root>");
  process.exit(2);
}

const REPO = "Regan-Studio/whateverfi";

const guards = [
  {
    file: ".github/workflows/publish-playwright-report.yml",
    job: "publish",
    secret: "S3_ACCESS_KEY_ID",
    why: "Publishes the Playwright dashboard to upstream's S3 bucket; already failed on main with an empty AWS_ACCESS_KEY_ID.",
  },
  {
    file: ".github/workflows/nightly-verification.yml",
    job: "visual-web",
    secret: "S3_ACCESS_KEY_ID",
    why: "Nightly scheduled Playwright report publish to the same S3 bucket.",
  },
  {
    file: ".github/workflows/model-catalog-bump.yml",
    job: "update",
    secret: "GH_DEPENDENCY_UPDATES_PAT",
    why: "Weekly scheduled dependency bump; publish job needs a PAT that can open PRs.",
  },
  {
    file: ".github/workflows/model-catalog-bump.yml",
    job: "publish",
    secret: "GH_DEPENDENCY_UPDATES_PAT",
    why: "Opens the catalog-bump PR with GH_DEPENDENCY_UPDATES_PAT.",
  },
  {
    file: ".github/workflows/weekly-dependencies.yml",
    job: "update",
    secret: "GH_DEPENDENCY_UPDATES_PAT",
    why: "Weekly scheduled dependency updates need a PAT.",
  },
  {
    file: ".github/workflows/weekly-dependencies.yml",
    job: "publish",
    secret: "GH_DEPENDENCY_UPDATES_PAT",
    why: "Opens the dependency PR with GH_DEPENDENCY_UPDATES_PAT.",
  },
  {
    file: ".github/workflows/translation-catalogs.yml",
    job: "extract",
    secret: "GH_DEPENDENCY_UPDATES_PAT",
    why: "Push-to-main catalog extract is only useful if the follow-up publish job can open a PR.",
  },
  {
    file: ".github/workflows/translation-catalogs.yml",
    job: "publish",
    secret: "GH_DEPENDENCY_UPDATES_PAT",
    why: "Uses GH_DEPENDENCY_UPDATES_PAT as GH_TOKEN to open or close the catalog PR.",
  },
  {
    file: ".github/workflows/issue-triage.yml",
    job: "triage",
    secret: "CLAUDE_CODE_OAUTH_TOKEN",
    why: "Issue-opened triage talks to Claude Code; no token is configured.",
  },
  {
    file: ".github/workflows/preview-deploy.yml",
    job: "deploy",
    secret: "FLY_PREVIEW_TOKEN",
    why: "Deploys PR previews to upstream's Fly.io org. The job already skipped in a step; this skips the job itself.",
  },
  {
    file: ".github/workflows/preview-cleanup.yml",
    job: "cleanup",
    secret: "FLY_PREVIEW_TOKEN",
    why: "Scheduled cleanup of Fly.io preview apps; already skipped in a step when the token is empty.",
  },
  {
    file: ".github/workflows/release-google-play.yml",
    job: "release",
    secret: "EXPO_TOKEN",
    why: "Google Play submission needs Expo/EAS and a Play Console account.",
  },
  {
    file: ".github/workflows/release-android-apk.yml",
    job: "release",
    secret: "EXPO_TOKEN",
    why: "EAS Android APK release needs EXPO_TOKEN. Dispatch-only, guarded so a manual run cannot go red.",
  },
  {
    file: ".github/workflows/release-mobile.yml",
    job: "ios",
    secret: "ASC_PRIVATE_KEY",
    why: "iOS App Store submission needs Apple credentials.",
  },
];

function guardExpr(secret) {
  return `github.repository == '${REPO}' && secrets.${secret} != ''`;
}

function andIf(existing, guard) {
  const e = existing.replace(/\s+/g, " ").trim();
  if (!e) return guard;
  if (e.includes(guard)) return e;
  const wrapped = /&&|\|\|/.test(e) ? `(${e})` : e;
  return `${wrapped} && ${guard}`;
}

// Job-level keys live at indent 4, before `steps:` or a reusable-workflow `uses:`.
// Step-level `if:` (indent 8+) must never be touched.
function patchJobIf(text, job, guard) {
  const lines = text.split("\n");
  let start = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === `  ${job}:`) {
      start = i;
      break;
    }
  }
  if (start < 0) return { text, ok: false, reason: `job ${job} not found` };

  let end = lines.length;
  for (let i = start + 1; i < lines.length; i++) {
    const l = lines[i];
    if (l.startsWith("  ") && !l.startsWith("    ") && l.trim() && !l.trim().startsWith("#")) {
      end = i;
      break;
    }
  }

  // Header is indent-4 keys until steps:/uses: (reusable workflow).
  let headerEnd = end;
  for (let i = start + 1; i < end; i++) {
    if (lines[i] === "    steps:" || lines[i].startsWith("    uses:")) {
      headerEnd = i;
      break;
    }
  }

  const header = lines.slice(start + 1, headerEnd);
  const headerText = header.join("\n");
  if (headerText.includes(guard) || lines.slice(start, end).join("\n").includes(`&& ${guard}`)) {
    // already present at job level
    if (headerText.includes(guard)) {
      return { text, ok: true, reason: "already guarded", changed: false };
    }
  }

  // Find a job-level `if:` (exactly 4 spaces).
  let ifIdx = -1;
  let ifEnd = -1;
  for (let i = 0; i < header.length; i++) {
    const l = header[i];
    if (/^    if:\s*$/.test(l) || /^    if:\s*>-?\s*$/.test(l) || /^    if:\s*\|-?\s*$/.test(l)) {
      ifIdx = i;
      ifEnd = i + 1;
      while (ifEnd < header.length && /^\s{6,}/.test(header[ifEnd])) ifEnd++;
      break;
    }
    if (/^    if:\s+\S/.test(l)) {
      ifIdx = i;
      ifEnd = i + 1;
      break;
    }
  }

  const newHeader = header.slice();
  if (ifIdx >= 0) {
    const ifLines = header.slice(ifIdx, ifEnd);
    const first = ifLines[0];
    const inline = first.match(/^    if:\s+(\S.*)$/);
    let existing;
    if (inline && !inline[1].startsWith(">-") && !inline[1].startsWith("|")) {
      existing = inline[1];
    } else {
      existing = ifLines
        .slice(1)
        .map((x) => x.trim())
        .filter(Boolean)
        .join(" ");
    }
    if (existing.includes(guard)) {
      return { text, ok: true, reason: "already guarded", changed: false };
    }
    const combined = andIf(existing, guard);
    newHeader.splice(ifIdx, ifEnd - ifIdx, `    if: ${combined}`);
  } else {
    // Place after `name:` if present, otherwise first in the header.
    let insertAt = 0;
    for (let i = 0; i < newHeader.length; i++) {
      if (newHeader[i].startsWith("    name:")) {
        insertAt = i + 1;
        break;
      }
    }
    newHeader.splice(insertAt, 0, `    if: ${guard}`);
  }

  const next = [...lines.slice(0, start + 1), ...newHeader, ...lines.slice(headerEnd)].join("\n");
  return { text: next, ok: true, reason: "applied", changed: true };
}

function parseYaml(abs) {
  const r = spawnSync(
    "python3",
    ["-c", "import sys,yaml; yaml.safe_load(open(sys.argv[1])); print('ok')", abs],
    { encoding: "utf8" },
  );
  return r.status === 0;
}

let failures = [];
let changed = 0;
for (const g of guards) {
  const abs = join(root, g.file);
  if (!existsSync(abs)) {
    failures.push(`missing ${g.file}`);
    continue;
  }
  const before = readFileSync(abs, "utf8");
  const result = patchJobIf(before, g.job, guardExpr(g.secret));
  if (!result.ok) {
    failures.push(`${g.file} / ${g.job}: ${result.reason}`);
    continue;
  }
  if (result.changed) {
    writeFileSync(abs, result.text);
    if (!parseYaml(abs)) {
      writeFileSync(abs, before);
      failures.push(`${g.file} / ${g.job}: YAML invalid after patch; reverted`);
      continue;
    }
    changed++;
    console.log(`guard: ${g.file} job ${g.job} <- secrets.${g.secret}  (${g.why})`);
  } else {
    console.log(`guard: ${g.file} job ${g.job} already has secrets.${g.secret}`);
  }
}

if (failures.length) {
  console.error("guard-fork-workflows FAILED:");
  for (const f of failures) console.error("  -", f);
  process.exitCode = 4;
} else {
  console.log(`guard: ${changed} job(s) updated`);
}
