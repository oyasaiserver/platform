#!/usr/bin/env python3
"""カテゴリ単位で1画面に組む。

指標を「向き」で切る。ジェミニ評価で実測された問題の3件が全部
「自分が押したのか、自分が押されたのか分からない」だったため、
ラベルではなく構造で解決する。

    python3 compose.py           # 全カテゴリ
    python3 compose.py つながり   # 1つだけ
"""

import pathlib
import sys

from PIL import Image

from apple import LIGHT, DARK, Canvas

HERE = pathlib.Path(__file__).parent
OUT = HERE / "out"

# カテゴリ名 → 一言 → 載せる図
SCREENS = [
    ("概要", "あなたの数字を全体と並べて見る", ["spec_sheet"]),
    ("あなたの建築", "どれだけ反応を集めたか", ["top_builds", "age", "firstlike"]),
    ("あなたのいいね", "いつ、誰に、どれだけ押しているか", ["rhythm", "monthly", "best_history", "streak"]),
    ("人とのつながり", "誰と応援し合っているか", ["mutual", "liked_owners", "repeat", "fastest", "head_grid"]),
    ("宣伝", "宣伝機能の効果", ["repeat_pub", "pub_rank"]),
    ("サーバー全体", "みんなの中での位置", ["first_likers", "worlds", "weekly"]),
]

GAP = 10


def compose(title, subtitle, names, theme=LIGHT, tname="light"):
    parts = []
    for n in names:
        p = OUT / f"{n}-{tname}.png"
        if p.exists():
            parts.append(Image.open(p))
    if not parts:
        return None
    w = max(p.width for p in parts)
    head = 42
    h = head + sum(p.height for p in parts) + GAP * (len(parts) + 1)

    c = Canvas(w + GAP * 2, h, theme)
    c.text((GAP + 4, 8), title, 16, c.t["title"])
    c.text((GAP + 4, 28), subtitle, 10, c.t["sub"])
    c.d.line([(GAP, head - 4), (w + GAP, head - 4)], fill=c.t["edge"])

    y = head + GAP
    for p in parts:
        # 各図の外枠。カテゴリ内の区切りが分かるように
        c.d.rectangle([GAP - 1, y - 1, GAP + p.width, y + p.height], outline=c.t["grid"])
        c.img.paste(p, (GAP, y))
        y += p.height + GAP
    return c


def main():
    want = sys.argv[1:]
    for title, sub, names in SCREENS:
        if want and title not in want:
            continue
        for tname, theme in (("light", LIGHT), ("dark", DARK)):
            c = compose(title, sub, names, theme, tname)
            if c is None:
                continue
            c.save(OUT / f"screen-{title}-{tname}.png", scale=2)
            print(f"  screen-{title}-{tname}  ({c.w}x{c.h})  図{len(names)}枚")


if __name__ == "__main__":
    main()
