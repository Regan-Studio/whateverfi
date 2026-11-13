#!/usr/bin/env python3
"""Fail if built/public marketing images still say Rakazo, or if golden overlay
assets were not copied through. Usage: check-branded-images.py <repo-root>
Exit 0 OK | 6 branding missing in images.
"""
from __future__ import annotations

import hashlib
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

RAKAZO_RE = re.compile(r"raka[zs2]{1,2}[o0]", re.I)
RASTER = {".png", ".webp", ".jpg", ".jpeg"}


def sha256(p: Path) -> str:
    h = hashlib.sha256()
    with p.open("rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def tesseract_cmd() -> list[str] | None:
    env_bin = os.environ.get("TESSERACT_BIN")
    candidates = [
        env_bin,
        shutil.which("tesseract"),
        str(Path("/workspace/forge/whateverfi-sync-2026-11-12/tools/tesseract/tesseract.x86_64")),
    ]
    repo = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path.cwd()
    candidates.append(str(repo.parent / "tools/tesseract/tesseract.x86_64"))
    cache = Path(os.environ.get("XDG_CACHE_HOME", str(Path.home() / ".cache"))) / "whateverfi-tesseract"
    candidates.append(str(cache / "tesseract.x86_64"))
    for c in candidates:
        if c and Path(c).exists() and os.access(c, os.X_OK):
            tessdata_next_to = Path(c).resolve().parent / "tessdata"
            if "TESSDATA_PREFIX" not in os.environ and tessdata_next_to.is_dir():
                os.environ["TESSDATA_PREFIX"] = str(tessdata_next_to)
            return [c]
    return None


def ocr_text(path: Path) -> str:
    cmd = tesseract_cmd()
    if not cmd:
        return ""
    r = subprocess.run(cmd + [str(path), "stdout", "-l", "eng", "--psm", "6"], capture_output=True, text=True)
    return r.stdout or ""


def iter_brand_images(base: Path):
    if not base.exists():
        return
    for rel in ("og-image.png", "brand/kit", "og"):
        p = base / rel
        if p.is_file():
            yield p
        elif p.is_dir():
            for f in p.rglob("*"):
                if f.is_file() and f.suffix.lower() in RASTER | {".svg"}:
                    yield f


def main() -> int:
    root = Path(sys.argv[1]).resolve()
    overlay = root / "overlays/whateverfi/files/apps/www/public"
    bases = [root / "apps/www/public"]
    dist_pub = root / "apps/www/dist"
    if dist_pub.exists():
        bases.append(dist_pub)

    failures: list[str] = []
    goldens = {}
    if overlay.exists():
        for p in iter_brand_images(overlay):
            goldens[p.relative_to(overlay).as_posix()] = sha256(p)

    # Golden files must land unchanged in public/ and (if built) dist/.
    for base in bases:
        label = "dist" if base == dist_pub else "public"
        for rel, expected in goldens.items():
            path = base / rel
            if not path.exists():
                failures.append(f"missing golden {label}/{rel}")
                continue
            got = sha256(path)
            if got != expected:
                failures.append(f"golden mismatch {label}/{rel} sha256={got} expected={expected}")

    tess = tesseract_cmd()
    if not tess:
        extra = []
        for base in bases:
            for p in iter_brand_images(base):
                try:
                    rel = p.relative_to(base).as_posix()
                except ValueError:
                    rel = str(p)
                if rel not in goldens and p.suffix.lower() in RASTER:
                    extra.append(rel)
        if extra:
            failures.append(
                "tesseract not found; cannot OCR new marketing images: " + ", ".join(sorted(set(extra)))
            )
        else:
            print("check-branded-images: no tesseract; golden hashes only")
    else:
        print(f"check-branded-images: using {tess[0]}")

    for base in bases:
        label = "dist" if base == dist_pub else "public"
        for p in iter_brand_images(base):
            if p.suffix.lower() == ".svg":
                text = p.read_text(errors="replace")
                if RAKAZO_RE.search(text):
                    failures.append(f"svg text says rakazo: {label}/{p.relative_to(base)}")
                if "whateverfi" not in text.lower() and "WhatEverFi" not in text:
                    # wordmark must name the product
                    if "wordmark" in p.name.lower():
                        failures.append(f"wordmark svg missing WhatEverFi: {label}/{p.relative_to(base)}")
                continue
            if not tess:
                continue
            text = ocr_text(p)
            if RAKAZO_RE.search(text):
                failures.append(
                    f"OCR says rakazo in {label}/{p.relative_to(base)}: {text.strip()[:120]!r}"
                )

    if failures:
        print("check-branded-images: FAILED", file=sys.stderr)
        for f in failures:
            print(f"  {f}", file=sys.stderr)
        return 6
    print("check-branded-images: OK")
    return 0


if __name__ == "__main__":
    sys.exit(main())
