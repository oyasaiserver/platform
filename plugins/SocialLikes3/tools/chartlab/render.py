#!/usr/bin/env python3
"""/sldata の各指標を Apple のグラフ設計に沿って描く。

情報設計の検討用。マイクラの解像度制約はここでは無視し、
「この指標に何が足りないか」「どの要素が要るか」を見比べるために使う。
マイクラ側への適合は後工程。

    python3 render.py            # 全部
    python3 render.py rhythm     # 1つだけ
"""

import json
import pathlib
import sys

from apple import LIGHT, DARK, Canvas, nice_axis, plot_frame, headline

HERE = pathlib.Path(__file__).parent
OUT = HERE / "out"
OUT.mkdir(exist_ok=True)
D = json.loads((HERE / "data.json").read_text(encoding="utf-8"))

W, H = 660, 250          # 比較表に合わせて統一。横長のほうがグラフは読める
PAD = 12


def pct(v, tot):
    """0% と表示して存在を消さない。(A) データを最も目立たせる原則の裏返し。"""
    p = v * 100 / tot if tot else 0
    return "<1%" if 0 < p < 1 else f"{p:.0f}%"


def _vbars(c, rows, y0, h, *, highlight=None, hatch=None, label_every=1,
           value_fmt=None, top=None):
    """縦棒の共通描画。rows = [(label, value), ...]"""
    x, w = PAD, W - PAD - 26
    top = top or nice_axis(max(v for _, v in rows))[0]
    _, ticks = nice_axis(max(v for _, v in rows))
    plot_frame(c, x, y0, w, h, top, ticks)
    pitch = w / len(rows)
    bw = max(3, int(pitch * 0.58))
    for i, (label, v) in enumerate(rows):
        bx = int(x + pitch * i + (pitch - bw) / 2)
        bh = max(1, int(h * v / top)) if v else 0
        col = c.t["hi"] if highlight == i else c.t["bar"]
        if bh:
            c.d.rectangle([bx, y0 + h - bh, bx + bw - 1, y0 + h - 1], fill=col)
        # 不完全な期間は縞で示す。色だけでなく模様でも区別する (C)
        if hatch == i and bh:
            for yy in range(y0 + h - bh, y0 + h, 3):
                c.d.line([(bx, yy), (bx + bw - 1, yy)], fill=c.t["bg"])
        if i % label_every == 0:
            c.text((bx + bw / 2, y0 + h + 4), label, 9, c.t["tick"], anchor="ma")
        if value_fmt:
            c.text((bx + bw / 2, y0 + h - bh - 12), value_fmt(v), 10,
                   c.t["title"], anchor="ma")
    return x, w


def _hbars(c, rows, y0, *, unit="", highlight=0):
    """横棒。長いラベル（プレイヤー名・作品名）向け。"""
    top = max(v for _, v in rows)
    row_h = min(26, (H - y0 - PAD) // len(rows))
    bar_h = row_h - 12
    label_w = 96
    x = PAD + label_w
    w = W - x - 52
    for i, (name, v) in enumerate(rows):
        by = y0 + i * row_h
        bl = max(1, int(w * v / top)) if v else 0
        col = c.t["hi"] if i == highlight else c.t["bar"]
        c.text((PAD + label_w - 6, by + bar_h / 2), str(name)[:11], 10,
               c.t["title"], anchor="rm")
        c.d.rectangle([x, by, x + bl, by + bar_h], fill=col)
        c.text((x + bl + 4, by + bar_h / 2), f"{v:,}{unit}", 9,
               c.t["tick"], anchor="lm")


# --------------------------------------------------------------------------
def weekly(theme=LIGHT):
    """週ごとに受けたいいね。欠けた週は0として必ず場所を取る。

    詰めて描くと活動が連続していたように見えてしまう。
    """
    rows = [(a, b) for a, b, *_ in D["weekly_received"]]
    c = Canvas(W, H, theme)
    recent = sum(v for _, v in rows[-4:])
    prev = sum(v for _, v in rows[-8:-4])
    y0 = headline(c, "週ごとに受けたいいね",
                  f"直近4週 {recent:,}（前の4週から {recent-prev:+,}）")
    _vbars(c, rows, y0, 130, highlight=len(rows) - 1, label_every=2)
    return c, "weekly"


def monthly(theme=LIGHT):
    """月ごとに押したいいね（#25 月別ペース変化）。

    当月は途中なので縞で示し、比較対象からは外す。
    完了した期間と途中の期間を並べて比べさせない。
    """
    rows = [(m[5:], v) for m, v, _ in D["monthly_given"]]
    partial = [i for i, (_, _, p) in enumerate(D["monthly_given"]) if p]
    c = Canvas(W, H, theme)
    done = [v for (_, v, p) in D["monthly_given"] if not p]
    y0 = headline(c, "月ごとに押したいいね",
                  f"直近の完了月 {done[-1]}件（前月比 {done[-1]-done[-2]:+d}）")
    _vbars(c, rows, y0, 130, hatch=partial[0] if partial else None)
    c.text((PAD, H - 14), "縞 = 集計途中の月", 9, c.t["sub"])
    return c, "monthly"


def age(theme=LIGHT):
    """いいねが付くまでの日数。part-to-whole なので割合を主役に。"""
    rows = [tuple(r) for r in D["age_received"]]
    tot = sum(v for _, v in rows)
    c = Canvas(W, H, theme)
    y0 = headline(c, "いいねが付くまでの日数",
                  f"{pct(rows[0][1], tot)} は公開当日に付いています")
    _vbars(c, rows, y0, 120, value_fmt=lambda v: pct(v, tot))
    return c, "age"


def rhythm(theme=LIGHT):
    """曜日 × 時間帯。GitHub 風のコントリビューショングラフ。"""
    grid = {(d, s): n for d, s, n in D["rhythm"]}
    c = Canvas(W, H, theme)
    peak = max(grid.items(), key=lambda kv: kv[1])
    days = "日月火水木金土"
    y0 = headline(c, "いつ押しているか",
                  f"{days[peak[0][0]]}曜 {peak[0][1]*3}時台が最多")
    cell, gap, x0 = 24, 3, PAD + 22
    mx = max(grid.values())
    bg = c.img.getpixel((0, 0))
    br = tuple(int(c.t["bar"][i:i+2], 16) for i in (1, 3, 5))
    for d in range(7):
        cy = y0 + d * (cell + gap)
        c.text((x0 - 6, cy + cell / 2), days[d], 10, c.t["tick"], anchor="rm")
        for s in range(8):
            n = grid.get((d, s), 0)
            px = x0 + s * (cell + gap)
            if not n:
                c.d.rectangle([px, cy, px + cell, cy + cell], outline=c.t["grid"])
                continue
            t = (n / mx) ** 0.5      # 線形だと最多以外が潰れる
            col = tuple(int(a + (b - a) * t) for a, b in zip(bg, br))
            c.d.rectangle([px, cy, px + cell, cy + cell], fill=col)
            if n == mx:
                c.d.rectangle([px, cy, px + cell, cy + cell], outline=c.t["hi"])
    for s in range(8):
        c.text((x0 + s * (cell + gap) + cell / 2, y0 + 7 * (cell + gap) + 4),
               f"{s*3}", 9, c.t["tick"], anchor="ma")
    return c, "rhythm"


def compare(theme=LIGHT):
    """自分と全体平均。ゼロ基線があるので倍率が高さで読める。"""
    mine, allv = D["vs_global"]["mine"], D["vs_global"]["all"]
    c = Canvas(W, H, theme)
    y0 = headline(c, "1作品あたりのいいね数",
                  f"全体平均の {mine/allv:.1f}倍（{mine} 対 {allv}）")
    _vbars(c, [("あなた", mine), ("全体平均", allv)], y0, 120,
           highlight=0, value_fmt=lambda v: f"{v}")
    return c, "compare"


def top_builds(theme=LIGHT):
    rows = [tuple(r) for r in D["top_builds"]]
    c = Canvas(W, H, theme)
    y0 = headline(c, "よくいいねされた自作品", f"最多は {rows[0][1]:,}いいね")
    _hbars(c, rows, y0, unit="")
    return c, "top_builds"


def liked_owners(theme=LIGHT):
    """押した順に並べた往復。

    「もらった数と返した数」は受けた順。こちらは押した順。
    同じ表の別ソートであることが分かるよう、どちらも送・受を両方出す。
    """
    # 受けた数は必ず実データから引く。上位表に無い相手を0扱いすると嘘になる
    rows = [tuple(r) for r in D["given_pairs"]]
    c = Canvas(W, H, theme)
    thin = min(rows, key=lambda r: r[2] / r[1])
    lead = f"{thin[0]} さんへは {thin[1]}押して {thin[2]}返り"
    y0 = headline(c, "押した順に見た往復", lead)
    top = max(max(g, r) for _, g, r in rows)
    row_h, bh = 30, 10
    x = PAD + 110
    w = W - x - 60
    for i, (name, g, r) in enumerate(rows):
        by = y0 + i * row_h
        c.text((x - 6, by + bh), str(name)[:12], 10, c.t["title"], anchor="rm")
        for j, (v, col) in enumerate(((g, c.t["hi"]), (r, c.t["bar"]))):
            bl = max(1, int(w * v / top)) if v else 0
            yy = by + j * (bh + 1)
            if bl:
                c.d.rectangle([x, yy, x + bl, yy + bh - 1], fill=col)
            c.text((x + bl + 4, yy + bh / 2), f"{v:,}", 8, c.t["tick"], anchor="lm")
    c.text((PAD, y0 + len(rows) * row_h + 6), "上=押した / 下=もらった", 9, c.t["sub"])
    return c, "liked_owners"


def worlds(theme=LIGHT):
    """ワールド別。総数ではなく1作品あたりで見ると順位が入れ替わる。"""
    # 見出しは必ず「描いた値」から導く。総数順のまま平均を語ると嘘になる
    rows = sorted([(w, avg) for w, n, avg in D["worlds"]], key=lambda r: -r[1])
    c = Canvas(W, H, theme)
    y0 = headline(c, "ワールド別 1作品あたりのいいね",
                  f"{rows[0][0]} が最も反応が良い（{rows[0][1]}）")
    _hbars(c, rows, y0)
    return c, "worlds"


def repeat(theme=LIGHT):
    """何作品にいいねしてくれたか。リピーターの厚みを見る。"""
    rows = [tuple(r) for r in D["repeat"]]
    tot = sum(v for _, v in rows)
    c = Canvas(W, H, theme)
    y0 = headline(c, "何作品にいいねしてくれたか",
                  f"{pct(tot-rows[0][1], tot)} が2作品以上に反応")
    _vbars(c, rows, y0, 120, value_fmt=lambda v: pct(v, tot))
    return c, "repeat"


def mutual(theme=LIGHT):
    """相互いいね。もらった数と返した数を並べる。

    「よく押してくれる人」だけでは相互性が見えない。
    同じ相手について送・受を並置すると偏りが一目で分かる。
    """
    rows = D["mutual_top"]
    c = Canvas(W, H, theme)
    top = rows[0]
    y0 = headline(c, "もらった数と返した数",
                  f"{top[0]} さんから {top[2]:,}もらって {top[1]}返しています")
    top = max(max(g, r) for _, g, r in rows)
    row_h, bh = 30, 10
    x = PAD + 96
    w = W - x - 52
    for i, (name, given, recv) in enumerate(rows):
        by = y0 + i * row_h
        c.text((x - 6, by + bh), str(name)[:11], 10, c.t["title"], anchor="rm")
        for j, (v, col) in enumerate(((recv, c.t["bar"]), (given, c.t["hi"]))):
            bl = max(1, int(w * v / top)) if v else 0
            yy = by + j * (bh + 1)
            c.d.rectangle([x, yy, x + bl, yy + bh - 1], fill=col)
            c.text((x + bl + 4, yy + bh / 2), f"{v:,}", 8, c.t["tick"], anchor="lm")
    c.text((PAD, H - 14), "上=もらった / 下=返した", 9, c.t["sub"])
    return c, "mutual"


def firstlike(theme=LIGHT):
    """初いいねまでの秒数の分布。中央値だけだとばらつきが見えない。"""
    rows = [tuple(r) for r in D["firstlike"]]
    tot = sum(v for _, v in rows)
    c = Canvas(W, H, theme)
    y0 = headline(c, "初いいねまでの速さ",
                  f"{pct(rows[0][1] + rows[1][1], tot)} が10秒以内")
    _vbars(c, rows, y0, 120, value_fmt=lambda v: f"{v}")
    c.text((PAD, H - 14), f"2026/7/2以降の {tot}作品。本人のいいねは除外",
           9, c.t["sub"])
    return c, "firstlike"


def pub_rank(theme=LIGHT):
    rows = [tuple(r) for r in D["pub_rank"]]
    c = Canvas(W, H, theme)
    y0 = headline(c, "よく宣伝された建築（サーバー全体）",
                  f"最多は {rows[0][1]}回")
    _hbars(c, rows, y0, unit="回")
    return c, "pub_rank"


def first_likers(theme=LIGHT):
    rows = [tuple(r) for r in D["first_likers"]]
    c = Canvas(W, H, theme)
    y0 = headline(c, "一番乗りの多い人（サーバー全体）",
                  f"{rows[0][0]} さんが {rows[0][1]:,}回")
    _hbars(c, rows, y0, unit="回")
    return c, "first_likers"


def capture(theme=LIGHT):
    """お気に入り作者の捕捉率。進捗として見せる。"""
    cap = D["capture"]
    c = Canvas(W, H, theme)
    rate = cap["liked"] / cap["total"]
    y0 = headline(c, f"{cap['name']} さんの作品",
                  f"{cap['total']:,}件中 {cap['liked']}件に反応（{rate*100:.0f}%）")
    x, w, h = PAD, W - PAD * 2, 28
    c.d.rectangle([x, y0, x + w, y0 + h], fill=c.t["grid"])
    c.d.rectangle([x, y0, x + int(w * rate), y0 + h], fill=c.t["bar"])
    c.text((x, y0 + h + 8), f"まだ見ていない建築が {cap['total']-cap['liked']:,}件あります",
           11, c.t["title"])
    return c, "capture"


CHARTS = [weekly, monthly, age, rhythm, compare, top_builds,
          liked_owners, worlds, repeat,
          mutual, firstlike, pub_rank, first_likers, capture]


def main():
    want = sys.argv[1:]
    for fn in CHARTS:
        if want and fn.__name__ not in want:
            continue
        for tname, theme in (("light", LIGHT), ("dark", DARK)):
            c, name = fn(theme)
            c.trim().save(OUT / f"{name}-{tname}.png", scale=2)
            print(f"  {name}-{tname}")



# --- CPU Monkey 方式の比較パネル -------------------------------------------
# 参考: cpu-monkey.com の CPU 比較ページ。1項目につき
#   指標名 / 何を測るかの一文 / 2行のバー（勝ち=100%に正規化）/ 実値 / 条件 / 標本数
# を同じ塊に置く。相対（どちらが上か）と絶対（いくつか）を同時に読ませるのが要点。
# 項目ごとに勝者の並び順が入れ替わるので、比較の向きを固定しない。
def spec_sheet(theme=LIGHT):
    rows = D["spec"]
    SW, line = W, 76
    c = Canvas(SW, 46 + line * len(rows), theme)
    c.text((PAD, 10), "あなたの数字", 9, c.t["sub"])
    c.text((PAD, 20), "全体と並べて見る", 13, c.t["title"])

    for i, (name, desc, pair, unit) in enumerate(rows):
        y = 50 + i * line
        # 指標名は独立した行に置く。バーのラベル列と衝突させない
        c.text((PAD, y), name, 11, c.t["title"])
        c.text((PAD + 4, y + 14), desc, 9, c.t["sub"])
        top = max(v for _, v, _ in pair)
        bx, bw = 168, 232
        for j, (label, v, cond) in enumerate(pair):
            ry = y + 28 + j * 17
            share = v / top if top else 0
            col = c.t["hi"] if j == 0 else c.t["bar"]
            c.d.rectangle([bx, ry, bx + max(1, int(bw * share)), ry + 11], fill=col)
            c.text((bx - 6, ry + 5), label, 9, c.t["title"], anchor="rm")
            # 正規化%（勝ち=100）と実値を併記する。%だけだと規模が消える
            c.text((bx + bw + 8, ry + 5), f"{share*100:.0f}%", 9, c.t["tick"], anchor="lm")
            c.text((bx + bw + 46, ry + 5), f"{v:,} {unit}", 10, c.t["title"], anchor="lm")
            c.text((SW - PAD, ry + 5), cond, 8, c.t["sub"], anchor="rm")
        c.d.line([(PAD, y + line - 12), (SW - PAD, y + line - 12)], fill=c.t["grid"])
    return c, "spec_sheet"


def best_history(theme=LIGHT):
    """自己ベストの更新履歴。階段状に描くと「更新した瞬間」が形で分かる。"""
    rows = [tuple(r) for r in D["best_history"]]
    best, marks = 0, []
    for label, v in rows:
        if v > best:
            best = v
            marks.append((label, best))
    c = Canvas(W, H, theme)
    y0 = headline(c, "1日に押したいいねの自己ベスト",
                  f"最高 {marks[-1][1]}件（{marks[-1][0]}）")
    x, w, h = PAD, W - PAD - 26, 120
    top, ticks = nice_axis(marks[-1][1])
    plot_frame(c, x, y0, w, h, top, ticks)
    px = x
    for i, (label, v) in enumerate(marks):
        nx = x + w * (i + 1) / len(marks)
        py = y0 + h - h * v / top
        c.d.line([(px, py), (nx, py)], fill=c.t["bar"], width=2)
        if i:
            c.d.line([(px, prev_y), (px, py)], fill=c.t["bar"], width=2)
        c.d.ellipse([nx - 3, py - 3, nx + 3, py + 3],
                    fill=c.t["hi"] if i == len(marks) - 1 else c.t["bar"])
        c.text((nx, y0 + h + 4), label, 8, c.t["tick"], anchor="ma")
        px, prev_y = nx, py
    c.text((PAD, H - 14), f"更新は{len(marks)}回", 9, c.t["sub"])
    return c, "best_history"


def streak(theme=LIGHT):
    """継続日数。数値2つなので図にする価値が薄い。到達段階として見せる。"""
    s = D["streak"]
    tiers = [("はじめの一歩", 1), ("継続の芽", 3), ("週刊サポーター", 7),
             ("習慣の守り手", 14), ("伝説の継続者", 30)]
    c = Canvas(W, H, theme)
    cur = s["given_max"]
    nxt = next((t for t in tiers if t[1] > cur), None)
    y0 = headline(c, "いいねの連続日数",
                  f"最長 {cur}日" + (f"／あと{nxt[1]-cur}日で「{nxt[0]}」" if nxt else ""))
    x, w = PAD, W - PAD * 2
    top = tiers[-1][1]
    bar_y, bar_h = y0 + 18, 20
    c.d.rectangle([x, bar_y, x + w, bar_y + bar_h], fill=c.t["grid"])
    c.d.rectangle([x, bar_y, x + int(w * cur / top), bar_y + bar_h], fill=c.t["bar"])
    for label, days in tiers:
        tx = x + w * days / top
        c.d.line([(tx, bar_y - 4), (tx, bar_y + bar_h + 4)],
                 fill=c.t["hi"] if days <= cur else c.t["edge"])
        c.text((tx, bar_y + bar_h + 8), f"{days}日", 8, c.t["tick"], anchor="ma")
        c.text((tx, bar_y + bar_h + 20), label, 8,
               c.t["title"] if days <= cur else c.t["sub"], anchor="ma")
    c.text((PAD, bar_y + bar_h + 46),
           f"受けいいねの最長は {s['recv_max']}日", 10, c.t["title"])
    return c, "streak"


CHARTS += [spec_sheet, best_history, streak]


def fastest(theme=LIGHT):
    """新作に最速で反応してくれる人。

    いいね件数と timestamp 件数が一致する作品しか使えないため母数が小さい。
    38作品で 6対3 の差は偶然でも起こる範囲なので、順位を断定しない。
    各行に母数に対する割合を出し、同数は同着として扱う。
    """
    rows = [tuple(r) for r in D["fastest"]]
    base = 38                      # 対象作品数
    c = Canvas(W, H, theme)
    top_n = rows[0][1]
    tied = [r for r in rows if r[1] == top_n]
    lead = "／".join(n for n, _ in tied) + f" が {top_n}作品で最速"
    if len(tied) > 1:
        lead = f"{len(tied)}人が同着 {top_n}作品で最速"
    c.text((PAD, 3), "新作にいち早く反応してくれる人", 8, c.t["sub"])
    c.text((PAD, 13), lead, 11, c.t["title"])
    y0 = 34

    row_h, bar_h = 26, 14
    x = PAD + 96
    w = W - x - 92
    prev = None
    for i, (name, v) in enumerate(rows):
        by = y0 + i * row_h
        bl = max(1, int(w * v / top_n))
        # 同数は同じ色にして順位差があるように見せない
        col = c.t["hi"] if v == top_n else c.t["bar"]
        c.text((x - 6, by + bar_h / 2), str(name)[:11], 10, c.t["title"], anchor="rm")
        c.d.rectangle([x, by, x + bl, by + bar_h], fill=col)
        c.text((x + bl + 4, by + bar_h / 2), f"{v}作品", 9, c.t["tick"], anchor="lm")
        c.text((W - PAD, by + bar_h / 2), f"{v/base*100:.0f}%", 9, c.t["sub"], anchor="rm")
        prev = v
    c.text((PAD, H - 26), f"対象は いいね時刻が全件そろった {base}作品のみ", 9, c.t["sub"])
    c.text((PAD, H - 14), "1〜2作品の差は偶然の範囲。母数が増えるまで順位は参考値",
           9, c.t["sub"])
    return c, "fastest"


def repeat_pub(theme=LIGHT):
    """複数回宣伝した建築の前後比較。

    (C) 棒を横に並置するのはカテゴリ間比較の使い方。
    作品ごとに「通常時」と「宣伝後」を隣り合わせるので傾きではなく差で読ませる。
    """
    rows = D["repeat_pub"]
    c = Canvas(W, H, theme)
    best = max(rows, key=lambda r: r[2] - r[1])
    y0 = headline(c, "宣伝した作品の前後",
                  f"{best[0]} は宣伝後 {best[2]-best[1]:+.1f}件")
    x, w, h = PAD + 78, W - PAD - 104, 130
    top, ticks = nice_axis(max(r[2] for r in rows))
    plot_frame(c, x, y0, w, h, top, ticks)
    pitch = w / len(rows)
    bw = int(pitch * 0.3)
    for i, (title, before, after) in enumerate(rows):
        base = x + pitch * i + (pitch - bw * 2 - 2) / 2
        for j, (v, col) in enumerate(((before, c.t["bar"]), (after, c.t["hi"]))):
            bh = max(1, int(h * v / top)) if v else 0
            bx = int(base + j * (bw + 2))
            if bh:
                c.d.rectangle([bx, y0 + h - bh, bx + bw - 1, y0 + h - 1], fill=col)
        c.text((base + bw, y0 + h + 4), title[:6], 8, c.t["tick"], anchor="ma")
    c.text((PAD, H - 14), "左=通常時 / 右=宣伝後24時間（1回あたりの平均いいね）",
           9, c.t["sub"])
    return c, "repeat_pub"


def head_grid(theme=LIGHT):
    """プレイヤーヘッドを並べ、カーソルを合わせると lore が出る案。

    カタログ #1 は当初からこの形（型2 = Top5 + プレイヤーヘッド）で確定していた。
    チェストGUI のスロットにヘッドを置き、ホバーで詳細を出す。
    ランキング系の指標は全部この型に載せられる。
    """
    rows = D["week_heads"][:5]
    c = Canvas(W, H, theme)
    y0 = headline(c, "今週いいねした人", f"{len(rows)}人に反応しました")

    slot = 40
    x0 = PAD + 4
    for i, (name, n, builds, total) in enumerate(rows):
        sx = x0 + i * (slot + 6)
        # スロット枠（チェストGUI のマス）
        c.d.rectangle([sx, y0, sx + slot, y0 + slot], fill=c.t["grid"], outline=c.t["edge"])
        # 顔の代わりの四角。実装ではプレイヤーヘッドが入る
        c.d.rectangle([sx + 8, y0 + 8, sx + slot - 8, y0 + slot - 8], fill=c.t["bar"])
        c.text((sx + slot / 2, y0 + slot + 4), str(name)[:7], 8, c.t["tick"], anchor="ma")

    # ホバー時に出る lore の見本
    ly = y0 + slot + 26
    name, n, builds, total = rows[0]
    c.d.rectangle([x0, ly, x0 + 230, ly + 74], fill=c.t["title"], outline=c.t["hi"])
    c.text((x0 + 8, ly + 6), str(name), 11, c.t["bg"])
    for k, line in enumerate([f"今週 {n}いいね",
                              f"累計 {total}いいね",
                              f"作品数 {builds}件",
                              "クリックで作品一覧へ"]):
        c.text((x0 + 8, ly + 22 + k * 13), line, 9, c.t["bg"])
    c.text((x0 + 244, ly + 30), "← ホバーで出る内容", 9, c.t["sub"])
    return c, "head_grid"


CHARTS += [fastest, repeat_pub, head_grid]

if __name__ == "__main__":
    main()
