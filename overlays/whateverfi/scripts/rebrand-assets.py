#!/usr/bin/env python3
"""Ensure marketing rasters and the kit wordmark say WhatEverFi, not Rakazo.

Runs after apply-overlay.mjs has copied overlay files (live WhatEverFi kit and
OG cards). For any new upstream OG page not in the overlay, this generates a
card via apps/www/scripts/render-og.mjs (hard-coded WhatEverFi lockup) or
falls back to painting typographic hits.
Usage: python3 overlays/whateverfi/scripts/rebrand-assets.py <repo-root> <brand-name>
"""
from __future__ import annotations

import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

FONT_CANDIDATES = [
    "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    "/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf",
]
INK = (36, 36, 36, 255)
RAKAZO_RE = re.compile(r"raka[zs2]{1,2}[o0]", re.I)
WORDMARK_SVG = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 140" width="320" height="70"><title>{brand}</title><text x="0" y="108" font-family="Aeonik, Geist, Arial, Helvetica, sans-serif" font-size="120" font-weight="600" fill="#242424">{brand}</text></svg>
"""


def tesseract_cmd() -> list[str] | None:
    env_bin = os.environ.get("TESSERACT_BIN")
    candidates = [
        env_bin,
        shutil.which("tesseract"),
        str(Path(__file__).resolve().parents[4] / "tools/tesseract/tesseract.x86_64"),
        str(Path("/workspace/forge/whateverfi-sync-2026-11-12/tools/tesseract/tesseract.x86_64")),
    ]
    for c in candidates:
        if c and Path(c).exists() and os.access(c, os.X_OK):
            cmd = [c]
            tessdata = Path(c).resolve().parent / "tessdata"
            env_prefix = os.environ.get("TESSDATA_PREFIX")
            if env_prefix:
                return cmd
            if tessdata.is_dir():
                os.environ["TESSDATA_PREFIX"] = str(tessdata)
            return cmd
    return None


def font(size, regular=False):
    for path in FONT_CANDIDATES:
        if regular:
            path = path.replace("-Bold", "-Regular" if "liberation" in path else "")
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default(size)


def fit_font(draw, text, max_w, max_h):
    size = max_h
    while size > 8:
        f = font(size)
        l, t, r, b = draw.textbbox((0, 0), text, font=f)
        if r - l <= max_w and b - t <= max_h:
            return f
        size -= 2
    return font(8)


def draw_word(img, box, text, bg=None):
    d = ImageDraw.Draw(img)
    x0, y0, x1, y1 = box
    fill = bg if bg is not None else img.getpixel((x1 + 4 if x1 + 4 < img.width else x0 - 4, y0))
    d.rectangle(box, fill=fill)
    f = fit_font(d, text, x1 - x0, int((y1 - y0) * 0.8))
    l, t, r, b = d.textbbox((0, 0), text, font=f)
    d.text((x0 - l, y0 + ((y1 - y0) - (b - t)) // 2 - t), text, font=f, fill=INK)


def ocr_text(path: Path) -> str:
    cmd = tesseract_cmd()
    if not cmd:
        return ""
    r = subprocess.run(cmd + [str(path), "stdout", "-l", "eng", "--psm", "6"], capture_output=True, text=True)
    return r.stdout or ""


def ocr_words(path: Path):
    cmd = tesseract_cmd()
    if not cmd:
        return []
    out = subprocess.run(cmd + [str(path), "-", "--psm", "11", "tsv"], capture_output=True, text=True).stdout
    rows = [r.split("\t") for r in out.splitlines()[1:]]
    return [
        dict(
            block=r[2],
            par=r[3],
            line=r[4],
            left=int(r[6]),
            top=int(r[7]),
            width=int(r[8]),
            height=int(r[9]),
            text=r[11],
        )
        for r in rows
        if len(r) == 12 and r[11].strip()
    ]


def says_rakazo(text: str) -> bool:
    return bool(RAKAZO_RE.search(text or ""))


def replace_word_in_screenshot(img, word, line_words, brand):
    x0, y0 = word["left"], word["top"]
    x1, y1 = x0 + word["width"], y0 + word["height"]
    pad = max(2, word["height"] // 3)
    box = (x0 - 1, y0 - pad, x1 + 1, y1 + pad)
    border = [
        img.getpixel((x, y))
        for x in range(box[0], box[2])
        for y in (box[1], box[3] - 1)
        if 0 <= x < img.width and 0 <= y < img.height
    ]
    bg = sorted(border, key=lambda p: sum(p[:3]))[len(border) // 2] if border else (255, 255, 255, 255)
    ink = max(
        (img.getpixel((x, y)) for x in range(x0, max(x0 + 1, x1)) for y in range(y0, max(y0 + 1, y1))),
        key=lambda p: sum(abs(a - b) for a, b in zip(p[:3], bg[:3])),
        default=INK,
    )
    d = ImageDraw.Draw(img)
    f = font(max(8, round(word["height"] * 1.32)), regular=True)
    l, t, r, b = d.textbbox((0, 0), brand, font=f)
    new_w = r - l
    line_right = max([w["left"] + w["width"] for w in line_words] + [x1])
    tail = img.crop((x1, box[1], min(img.width, line_right + 2), box[3]))
    d.rectangle(
        (x0 - 1, box[1], min(img.width - 1, line_right + 2 + new_w - word["width"]), box[3] - 1),
        fill=bg,
    )
    img.paste(tail, (x0 + new_w, box[1]))
    d.text((x0 - l, y1 - b), brand, font=f, fill=ink)


def render_og(root: Path, ids: list[str]) -> bool:
    if not ids:
        return True
    tsx = root / "node_modules/.bin/tsx"
    script = root / "apps/www/scripts/render-og.mjs"
    if not script.exists():
        print("assets: WARNING render-og.mjs missing")
        return False
    cmd = [str(tsx) if tsx.exists() else "pnpm", *(["exec", "tsx"] if not tsx.exists() else []), str(script), *ids]
    env = os.environ.copy()
    env.setdefault("CHROME_PATH", "/usr/bin/google-chrome")
    r = subprocess.run(cmd, cwd=root / "apps/www", env=env)
    return r.returncode == 0


def write_wordmark(kit: Path, brand: str, prefer: Path | None) -> None:
    dest = kit / "whateverfi-wordmark.svg"
    if prefer and prefer.exists() and brand.lower() in prefer.read_text(errors="replace").lower() and "<text" in prefer.read_text():
        if prefer.resolve() != dest.resolve():
            shutil.copy2(prefer, dest)
        print(f"assets: kept live typographic wordmark {dest}")
        return
    dest.write_text(WORDMARK_SVG.format(brand=brand))
    print(f"assets: wrote typographic wordmark svg -> {brand}")


def main():
    root, brand = Path(sys.argv[1]).resolve(), sys.argv[2]
    public = root / "apps/www/public"
    kit = public / "brand/kit"
    kit.mkdir(parents=True, exist_ok=True)
    overlay_public = Path(__file__).resolve().parent.parent / "files/apps/www/public"
    write_wordmark(kit, brand, overlay_public / "brand/kit/whateverfi-wordmark.svg")

    # If the kit logo still OCRs as rakazo, copy the live overlay asset or paint.
    logo = kit / "whateverfi-logo.png"
    live_logo = overlay_public / "brand/kit/whateverfi-logo.png"
    if logo.exists() and says_rakazo(ocr_text(logo)):
        if live_logo.exists():
            shutil.copy2(live_logo, logo)
            preview_src = overlay_public / "brand/kit/whateverfi-logo-preview.webp"
            if preview_src.exists():
                shutil.copy2(preview_src, kit / "whateverfi-logo-preview.webp")
            print("assets: restored live WhatEverFi logo from overlay")
        else:
            img = Image.open(logo).convert("RGBA")
            draw_word(img, (640, 150, img.width - 20, 420), brand, bg=(0, 0, 0, 0))
            img.save(logo)
            preview = img.resize((600, round(600 * img.height / img.width)), Image.Resampling.LANCZOS)
            preview.save(kit / "whateverfi-logo-preview.webp", "WEBP", quality=90)
            print("assets: painted logo wordmark")

    og_image = public / "og-image.png"
    live_og = overlay_public / "og-image.png"
    if og_image.exists() and says_rakazo(ocr_text(og_image)):
        if live_og.exists():
            shutil.copy2(live_og, og_image)
            print("assets: restored live og-image.png from overlay")
        else:
            img = Image.open(og_image).convert("RGBA")
            draw_word(img, (70, 26, 300, 70), brand)
            img.save(og_image)
            print("assets: painted og-image.png wordmark")

    # Generate any OG template cards that are missing or still say Rakazo.
    og_dir = public / "og"
    og_dir.mkdir(parents=True, exist_ok=True)
    need_render: list[str] = []
    for png in sorted(og_dir.glob("*.png")):
        text = ocr_text(png)
        if says_rakazo(text):
            live = overlay_public / "og" / png.name
            if live.exists() and not says_rakazo(ocr_text(live)):
                shutil.copy2(live, png)
                print(f"assets: restored live {png.relative_to(public)}")
            else:
                need_render.append(png.stem)
    # IDs listed by render-og / og-pages that have no file yet
    # Discover by asking render-og would require ts; instead leave missing to
    # a glob of src-driven render when we can run with no args for missing only.
    # Call node to list ids if possible.
    list_ids = subprocess.run(
        [
            "node",
            "--experimental-strip-types",
            "--no-warnings",
            "-e",
            "import { ogPages } from './src/og-pages.ts'; for (const p of ogPages()) console.log(p.id);",
        ],
        cwd=root / "apps/www",
        capture_output=True,
        text=True,
    )
    if list_ids.returncode == 0:
        for oid in list_ids.stdout.split():
            if not (og_dir / f"{oid}.png").exists():
                need_render.append(oid)
    else:
        print(f"assets: note could not list ogPages ({list_ids.stderr.strip()[:200]})")
    need_render = sorted(set(need_render))
    if need_render:
        print(f"assets: render-og for {len(need_render)} page(s): {', '.join(need_render)}")
        if not render_og(root, need_render):
            print("assets: WARNING render-og failed; falling back to OCR paint")
            for oid in need_render:
                path = og_dir / f"{oid}.png"
                if not path.exists() or not says_rakazo(ocr_text(path)):
                    continue
                words = ocr_words(path)
                hits = [w for w in words if says_rakazo(w["text"])]
                if not hits:
                    continue
                img = Image.open(path).convert("RGBA")
                for w in sorted(hits, key=lambda w: -w["left"]):
                    line = [o for o in words if (o["block"], o["par"], o["line"]) == (w["block"], w["par"], w["line"])]
                    replace_word_in_screenshot(img, w, line, brand)
                img.save(path)
                print(f"assets: painted {path.relative_to(public)}")

    leftovers = []
    for path in [og_image, logo, kit / "whateverfi-wordmark.svg", *sorted(og_dir.glob("*.png"))]:
        if not path.exists():
            leftovers.append(f"missing {path}")
            continue
        if path.suffix.lower() == ".svg":
            if says_rakazo(path.read_text(errors="replace")):
                leftovers.append(str(path.relative_to(root)))
        elif says_rakazo(ocr_text(path)):
            leftovers.append(str(path.relative_to(root)))
    if leftovers:
        print("assets: FAILED still say rakazo or missing:", file=sys.stderr)
        for item in leftovers:
            print(f"  {item}", file=sys.stderr)
        sys.exit(4)
    print(f"assets: brand kit and OG cards are {brand}")


if __name__ == "__main__":
    main()
