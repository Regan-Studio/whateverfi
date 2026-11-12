# Structural patches

Put `NNNN-description.patch` files here (made with `git diff` inside `.cache/upstream`) only for
changes that cannot be expressed as a rule in `../brand.json`. They are applied in name order with
`git apply`; if one no longer applies, `scripts/sync-upstream.sh` exits with code 3 and the
`sync-upstream` workflow opens an issue instead of a PR. None are needed today: all branding is
rule-based, which is more tolerant of upstream edits than line-context patches.
