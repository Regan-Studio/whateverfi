# Root workflows for Regan-Studio/whateverfi (activation pending)

GitHub only runs workflows from the repository root `.github/workflows/`. The automation that
imported this wrapper is a GitHub App without the `workflows` permission, so GitHub rejected
pushing these files there. They are staged here, already adjusted for the `whateverfi-site/`
subdirectory (`working-directory: whateverfi-site`, path filters on `whateverfi-site/**`), and
pass actionlint 1.7.7.

To activate them, a maintainer with normal push rights runs:

```bash
git mv whateverfi-site/github-root-workflows/whateverfi-site-*.yml .github/workflows/
git commit -m "Activate whateverfi-site workflows" && git push
```

| File | Trigger |
|---|---|
| `whateverfi-site-ci.yml` | PRs touching `whateverfi-site/**`, manual |
| `whateverfi-site-sync-upstream.yml` | every 6 h + manual; opens `sync/upstream-<sha>` PRs, never merges |
| `whateverfi-site-deploy.yml` | push to `main` touching `whateverfi-site/**` only; the deploy job is skipped unless `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` are set |
| `whateverfi-site-rollback.yml` | manual; fails fast without the Cloudflare credentials |
