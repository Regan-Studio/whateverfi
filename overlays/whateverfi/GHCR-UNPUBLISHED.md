# GHCR images are published (visibility still private)

The overlay retargets `ghcr.io/elie222/rakazo/*` to `ghcr.io/regan-studio/whateverfi/*`
in install scripts, compose files, and docs, because `Regan-Studio/whateverfi` is the
intended source of truth.

**Those images are published from `main`.** After the merge of PR #4 (commit
`758d47c5a1f940f0dc9f6ed4a64beb1a4dc32f75`), GitHub Actions run 43411431054
pushed multi-arch (linux/amd64 and linux/arm64) indexes:

| Image                                      | Tags                                                   | Index digest                                                              |
| ------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------------------------- |
| `ghcr.io/regan-studio/whateverfi/app`      | `edge`, `sha-758d47c5a1f940f0dc9f6ed4a64beb1a4dc32f75` | `sha256:d319b6b94f699b3d67f62956fd678c29ec9ebfed7a40b5231c3c5a2cb6e3a337` |
| `ghcr.io/regan-studio/whateverfi/updater`  | same tags                                              | `sha256:2810ac2e889fc19307a9ad3648d6fb5bbfe5fceaf29c15c4105bd0f7c683ee4e` |
| `ghcr.io/regan-studio/whateverfi/computer` | same tags                                              | `sha256:9604f8df6e1c047b1a347af648c013bde0ddb7108189f5f8a644addc42574dad` |

Later `main` builds will move the `edge` tag and add a new `sha-<commit>` tag.
Pin `RAKAZO_IMAGE_TAG=sha-…` for a fixed build, or leave `edge` for the latest
successful main publish.

**Packages are still private on GHCR.** An unauthenticated `docker pull` returns
401. A token without `read:packages` cannot list or pull them either. To make
a host (including Abacus.AI) able to pull without a login, set each package to
Public in the GitHub UI (Package settings → Change visibility):

- https://github.com/orgs/Regan-Studio/packages/container/package/whateverfi%2Fapp
- https://github.com/orgs/Regan-Studio/packages/container/package/whateverfi%2Fupdater
- https://github.com/orgs/Regan-Studio/packages/container/package/whateverfi%2Fcomputer

Until then, `docker login ghcr.io` with a PAT that has `read:packages`, then
use `infra/compose/install-images.sh` or `docker compose -f docker-compose.images.yml`.
