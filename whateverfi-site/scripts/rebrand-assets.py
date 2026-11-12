#!/usr/bin/env python3
"""Regenerate raster/vector brand assets whose pixels spell the upstream name.

Runs after apply-overlay.mjs (files are already renamed to whateverfi-*).
Usage: python3 scripts/rebrand-assets.py <upstream-dir> <brand-name>
Only typographic wordmarks are replaced; the mascot artwork is left untouched
and is listed in LICENSE-REVIEW.md as a trademark item to replace before launch.
"""
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
    """Clear box (x0,y0,x1,y1) and draw text left-aligned, vertically centred."""
    d = ImageDraw.Draw(img)
    x0, y0, x1, y1 = box
    fill = bg if bg is not None else img.getpixel((x1 + 4 if x1 + 4 < img.width else x0 - 4, y0))
    d.rectangle(box, fill=fill)
    f = fit_font(d, text, x1 - x0, int((y1 - y0) * 0.8))
    l, t, r, b = d.textbbox((0, 0), text, font=f)
    d.text((x0 - l, y0 + ((y1 - y0) - (b - t)) // 2 - t), text, font=f, fill=INK)


def ocr_words(path):
    out = subprocess.run(["tesseract", str(path), "-", "--psm", "11", "tsv"],
                         capture_output=True, text=True).stdout
    rows = [r.split("\t") for r in out.splitlines()[1:]]
    return [dict(block=r[2], par=r[3], line=r[4], left=int(r[6]), top=int(r[7]),
                 width=int(r[8]), height=int(r[9]), text=r[11])
            for r in rows if len(r) == 12 and r[11].strip()]


def replace_word_in_screenshot(img, word, line_words, brand):
    """Paint over `word`, shift the rest of its line right, draw `brand` in the gap."""
    x0, y0 = word["left"], word["top"]
    x1, y1 = x0 + word["width"], y0 + word["height"]
    pad = max(2, word["height"] // 3)
    box = (x0 - 1, y0 - pad, x1 + 1, y1 + pad)
    border = [img.getpixel((x, y)) for x in range(box[0], box[2]) for y in (box[1], box[3] - 1)
              if 0 <= x < img.width and 0 <= y < img.height]
    bg = sorted(border, key=lambda p: sum(p[:3]))[len(border) // 2]
    ink = max((img.getpixel((x, y)) for x in range(x0, x1) for y in range(y0, y1)),
              key=lambda p: sum(abs(a - b) for a, b in zip(p[:3], bg[:3])))
    d = ImageDraw.Draw(img)
    f = font(max(8, round(word["height"] * 1.32)), regular=True)
    l, t, r, b = d.textbbox((0, 0), brand, font=f)
    new_w = r - l
    line_right = max([w["left"] + w["width"] for w in line_words] + [x1])
    tail = img.crop((x1, box[1], min(img.width, line_right + 2), box[3]))
    d.rectangle((x0 - 1, box[1], min(img.width - 1, line_right + 2 + new_w - word["width"]), box[3] - 1), fill=bg)
    img.paste(tail, (x0 + new_w, box[1]))
    d.text((x0 - l, y1 - b), brand, font=f, fill=ink)


def rebrand_screenshots(root, brand, skip_dirs):
    """OCR every raster asset; rewrite any rendered occurrence of the upstream name."""
    if not shutil.which("tesseract"):
        print("assets: WARNING tesseract missing - screenshots not scanned")
        return
    for path in sorted(root.rglob("*")):
        if path.suffix.lower() not in {".png", ".webp", ".jpg", ".jpeg"} or any(s in path.parts for s in skip_dirs):
            continue
        words = ocr_words(path)
        hits = [w for w in words if re.fullmatch(r"\W*rakazo\W*", w["text"], re.I)]
        if not hits:
            continue
        img = Image.open(path).convert("RGBA")
        for w in sorted(hits, key=lambda w: -w["left"]):  # right-to-left keeps coordinates valid
            line = [o for o in words if (o["block"], o["par"], o["line"]) == (w["block"], w["par"], w["line"])]
            replace_word_in_screenshot(img, w, line, brand)
        save_kwargs = {"quality": 92} if path.suffix.lower() in {".webp", ".jpg", ".jpeg"} else {}
        (img if path.suffix.lower() != ".jpg" else img.convert("RGB")).save(path, **save_kwargs)
        print(f"assets: rewrote {len(hits)} occurrence(s) in {path.relative_to(root)}")


def main():
    root, brand = Path(sys.argv[1]) / "apps/www/public", sys.argv[2]
    rebrand_screenshots(root, brand, skip_dirs={"og", "kit"})
    kit = root / "brand/kit"

    # Brand-kit logo: mascot tile on the left (x < 560), wordmark on the right.
    logo = Image.open(kit / "whateverfi-logo.png").convert("RGBA")
    draw_word(logo, (640, 150, logo.width - 20, 420), brand, bg=(0, 0, 0, 0))
    logo.save(kit / "whateverfi-logo.png")
    preview = logo.resize((600, round(600 * logo.height / logo.width)), Image.LANCZOS)
    preview.save(kit / "whateverfi-logo-preview.webp", "WEBP", quality=90)

    # Vector wordmark: plain text keeps it editable; outline it before print use.
    (kit / "whateverfi-wordmark.svg").write_text(
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 140" width="320" height="70">'
        f"<title>{brand}</title>"
        '<text x="0" y="108" font-family="Aeonik, Geist, Arial, Helvetica, sans-serif" '
        f'font-size="120" font-weight="600" fill="#242424">{brand}</text></svg>\n'
    )

    # Default social card: the wordmark sits top-left next to the mascot.
    og = Image.open(root / "og-image.png").convert("RGBA")
    draw_word(og, (70, 26, 300, 70), brand)
    og.save(root / "og-image.png")
    print(f"assets: rebranded logo, logo preview, wordmark svg, og-image -> {brand}")


if __name__ == "__main__":
    main()
