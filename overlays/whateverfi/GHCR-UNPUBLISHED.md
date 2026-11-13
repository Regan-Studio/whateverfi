# GHCR images are not published yet

The overlay retargets `ghcr.io/elie222/rakazo/*` to `ghcr.io/regan-studio/whateverfi/*`
in install scripts, compose files, and docs, because `Regan-Studio/whateverfi` is the
intended source of truth.

**Those images do not exist on GHCR yet.** A `docker pull` or `install-images.sh`
run against `ghcr.io/regan-studio/whateverfi/...` will 404 until Mark publishes
packages (needs a GitHub login and package permissions; not done in this local pass).

Until then, self-host by **building from this repo** (`pnpm` / compose build)
rather than pulling prebuilt images. Do not point production installs at the
retargeted GHCR names until the first image has been published and verified.
