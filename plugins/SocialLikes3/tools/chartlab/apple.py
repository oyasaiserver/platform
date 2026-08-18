"""Apple のグラフ設計指針を、マイクラのマップ解像度で描くための共通部品。

根拠は Cogito Vault の `Knowledge/apple-chart-design-framework.md`（一次ソース確認済み）。
コメント内の (A)(B)(C)(D) はその出典記号に対応する。

マイクラ側の描画対象:
  単体マップ    128 x 128
  2x3 壁掛け    256 x 384
実解像度で描き、確認用に整数倍へ拡大する（縮小前提で設計すると入らない）。
"""

from PIL import Image, ImageDraw, ImageFont

FONT_PATH = "/System/Library/Fonts/ヒラギノ角ゴシック W4.ttc"

# ---- 配色 ----------------------------------------------------------------
# 非テキスト要素は地に対して 3:1 以上を確保する。
# 棒は macOS Blue、強調は Orange Accessible。(A) の「色は記号の上に足す」に従い、
# 色だけで情報を運ばせない（最新は色 + 位置で示す）。
LIGHT = dict(
    bg="#f2f2ef", grid="#d5d5cf", tick="#6e6e68", bar="#007aff",
    hi="#c93400", title="#1c1c1e", sub="#6e6e68", edge="#a6a69e",
)
DARK = dict(
    bg="#0e1210", grid="#2f3a2d", tick="#8b9a80", bar="#4a9eff",
    hi="#ff9f0a", title="#e6efd8", sub="#7d8c72", edge="#232b20",
)


def font(size):
    return ImageFont.truetype(FONT_PATH, size)


# ---- 目盛り --------------------------------------------------------------
# (A)「直感的な値を使う」/ (C)「馴染みのある数列を選ぶ」。
# 1目盛りの値を下の刻みへ切り上げ、0,5,10... のように読める列にする。
_NICE = [1, 1.5, 2, 2.5, 3, 4, 5, 7.5, 10]


def nice_axis(data_max, divisions=4):
    """上限と目盛り値を返す。

    (A) 上限のないカウント系（いいね数）は動的レンジが Apple 公認。
    ただし「最大値がグラフ上端“近く”に来る」であって天井に接するとは書かれていないため、
    切り上げによって必ず余白が残る。
    """
    if data_max <= 0:
        return divisions, [0, divisions]
    raw = data_max / divisions
    mag = 10 ** len(str(int(raw))) if raw >= 1 else 0.1
    for n in _NICE:
        step = n * mag / 10
        if step >= raw:
            break
    top = step * divisions
    ticks = [step * i for i in range(divisions + 1)]
    fmt = (lambda v: f"{v:,.0f}") if step >= 1 else (lambda v: f"{v:g}")
    return top, [(v, fmt(v)) for v in ticks]


# ---- キャンバス ----------------------------------------------------------
class Canvas:
    def __init__(self, w, h, theme=LIGHT):
        self.w, self.h, self.t = w, h, theme
        self.img = Image.new("RGB", (w, h), theme["bg"])
        self.d = ImageDraw.Draw(self.img)

    def text(self, xy, s, size=10, color=None, anchor="la"):
        self.d.text(xy, s, font=font(size), fill=color or self.t["title"], anchor=anchor)

    def trim(self, bottom_pad=10):
        """下の余白を切る。固定高だと内容が短い図に無駄な空白が残る。"""
        bg = self.img.getpixel((0, 0))
        last = 0
        for y in range(self.h):
            row = self.img.crop((0, y, self.w, y + 1)).getcolors(self.w + 1)
            if not (len(row) == 1 and row[0][1] == bg):
                last = y
        new_h = min(self.h, last + bottom_pad)
        if new_h < self.h:
            self.img = self.img.crop((0, 0, self.w, new_h))
            self.h = new_h
        return self

    def save(self, path, scale=3):
        """実解像度で保存しつつ、確認用に最近傍で拡大したものも作る。"""
        self.img.save(path)
        big = self.img.resize((self.w * scale, self.h * scale), Image.NEAREST)
        big.save(str(path).replace(".png", f"@{scale}x.png"))
        return path


def plot_frame(c, x, y, w, h, top, ticks, *, tick_side="right", show_grid=True):
    """プロットエリアの枠と目盛り線を描く。

    (A) 水平の目盛り線は4本程度。2本では中間を見積もれず、7本では圧倒的。
    (C) 目盛りラベルは各線の後端側（trailing）に置き、先頭側を揃える。
        WWDC の例で Y軸が右にあるのはこの指針による。
    (B) 小さい面では目盛り線とラベルを「セットで」捨てる。線だけ残す形は資料中に存在しない。
    """
    if not show_grid:
        return
    fs = 7
    for v, label in ticks:
        gy = y + h - int(h * v / top) if top else y + h
        c.d.line([(x, gy), (x + w, gy)], fill=c.t["grid"])
        if tick_side == "right":
            c.text((x + w + 2, gy), label, fs, c.t["tick"], anchor="lm")
        else:
            c.text((x - 2, gy), label, fs, c.t["tick"], anchor="rm")
    # ゼロ基線だけは他より濃く。(A) 棒の高さの意味を保つため。
    c.d.line([(x, y + h), (x + w, y + h)], fill=c.t["edge"])


def headline(c, title, takeaway, y=3):
    """(B) 添える文は3段階のうち「解釈」まで到達させる。

    段階1「Sales in the Past 30 Days」= 要素にラベルを貼っただけ → 不足
    段階3「Sales for the past 30 days are up 12%, totaling 1,234 pancakes」= 解釈
    ここでは title を小さく、takeaway を主役として置く。
    """
    c.text((4, y), title, 8, c.t["sub"])
    c.text((4, y + 10), takeaway, 11, c.t["title"])
    return y + 26
