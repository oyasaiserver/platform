#!/usr/bin/env python3
"""Minecraft の実フォントアセットから、チューナー用の埋め込みデータを作る。
 - ascii.png: 字幅を実測（advance = 右端の不透明列 + 2）し、PNG は base64 で埋め込む
 - unifont(_jp).zip: 日本語で使う範囲の .hex を抽出して圧縮エンコード
"""
import json, os, base64, zipfile, io, sys
from PIL import Image

BASE = "/private/tmp/claude-501/-Users-aa-Desktop-Cogito/7e97829e-4526-4181-8fce-5f2a5bed462e/scratchpad/mcfont"
FONT = BASE + "/assets/minecraft/font"
TEX  = BASE + "/assets/minecraft/textures/font"
STORE= BASE + "/store"
OUT  = "/private/tmp/claude-501/-Users-aa-Desktop-Cogito/7e97829e-4526-4181-8fce-5f2a5bed462e/scratchpad/mcfont_data.js"

# ---------- 1. ASCII ----------
inc = json.load(open(FONT + "/include/default.json"))
ascii_prov = [p for p in inc["providers"] if p.get("file","").endswith("ascii.png")][0]
rows = ascii_prov["chars"]
ascent_ascii = ascii_prov.get("ascent", 7)

im = Image.open(TEX + "/ascii.png").convert("RGBA")
px = im.load()
CW, CH = im.width // 16, im.height // 16

adv = {}
for r, line in enumerate(rows):
    for c, ch in enumerate(line):
        if ord(ch) == 0:
            continue
        right = -1
        for x in range(CW):
            col_used = False
            for y in range(CH):
                if px[c*CW + x, r*CH + y][3] > 0:
                    col_used = True
                    break
            if col_used:
                right = x
        adv[ch] = (right + 2) if right >= 0 else 0

known = {'i':2,'l':3,'I':4,'@':7,'A':6,'t':4,'f':5,'k':5,'!':2,'.':2,'~':7,'0':6,'W':6}
print("=== ASCII 字幅: 実測 vs 既知の表 ===")
mismatch = 0
for k, v in known.items():
    got = adv.get(k)
    if got != v:
        mismatch += 1
        print("  x '%s' 実測=%s 既知=%s" % (k, got, v))
    else:
        print("  o '%s' = %s" % (k, got))
print("不一致:", mismatch, "/ グリフ数:", len(adv))

# 文字 -> グリフ座標(row,col)
pos = {}
for r, line in enumerate(rows):
    for c, ch in enumerate(line):
        if ord(ch) != 0:
            pos[ch] = (r, c)

ascii_b64 = base64.b64encode(open(TEX + "/ascii.png","rb").read()).decode()

# ---------- 2. unifont (日本語) ----------
# 収録する範囲
RANGES = [
    (0x3000, 0x303F),  # CJK 記号・句読点
    (0x3040, 0x309F),  # ひらがな
    (0x30A0, 0x30FF),  # カタカナ
    (0x3200, 0x33FF),  # 囲みCJK・互換
    (0x4E00, 0x9FFF),  # CJK 統合漢字
    (0xFF00, 0xFF60),  # 全角英数
    (0xFFE0, 0xFFE6),
]
def in_ranges(cp):
    return any(a <= cp <= b for a, b in RANGES)

def load_hex(zip_path):
    out = {}
    with zipfile.ZipFile(zip_path) as z:
        for n in z.namelist():
            if not n.endswith(".hex"):
                continue
            for line in z.read(n).decode("utf-8", "replace").splitlines():
                line = line.strip()
                if not line or ":" not in line:
                    continue
                a, b = line.split(":", 1)
                try:
                    cp = int(a, 16)
                except ValueError:
                    continue
                if in_ranges(cp):
                    out[cp] = b.strip()
    return out

# 日本語版を主とし、そこに無い かな/記号/全角英数 のみ本体から補う
KANA_ETC = [(0x3000,0x33FF),(0xFF00,0xFF60),(0xFFE0,0xFFE6)]
def is_kana_etc(cp):
    return any(a <= cp <= b for a, b in KANA_ETC)

jp = load_hex(STORE + "/unifont_jp.zip")
print("読み込み: unifont_jp.zip", len(jp), "グリフ")
full = load_hex(STORE + "/unifont.zip")
print("読み込み: unifont.zip", len(full), "グリフ（補完用）")
glyphs = dict(jp)
added = 0
for cp, hx in full.items():
    if cp not in glyphs and is_kana_etc(cp):
        glyphs[cp] = hx; added += 1
print("かな・記号の補完:", added, "グリフ")

print("収録グリフ数:", len(glyphs))

# hex 文字列は 32桁(8x16) か 64桁(16x16)。行ごとに区切って base64 化する
# 連続するコードポイントをまとめて格納
items = sorted(glyphs.items())
blob = bytearray()
index = []   # [cp, offset, byteLen]
for cp, hx in items:
    b = bytes.fromhex(hx)
    index.append((cp, len(blob), len(b)))
    blob += b
blob_b64 = base64.b64encode(bytes(blob)).decode()

# index を差分＋可変長で詰める（cp昇順なので差分は小さい）
idx_parts = []
prev = 0
for cp, off, ln in index:
    idx_parts.append("%x,%x" % (cp - prev, ln))
    prev = cp
idx_str = ";".join(idx_parts)

js = []
js.append("// Minecraft 1.21.11 の実フォントアセットから生成（自動生成、手で編集しない）")
js.append("window.MCFONT = (function(){")
js.append("  var ASCII_PNG = 'data:image/png;base64,%s';" % ascii_b64)
js.append("  var ASCII_ADV = %s;" % json.dumps(adv, ensure_ascii=False))
js.append("  var ASCII_POS = %s;" % json.dumps({k: list(v) for k, v in pos.items()}, ensure_ascii=False))
js.append("  var ASCII_ASCENT = %d, ASCII_CW = %d, ASCII_CH = %d;" % (ascent_ascii, CW, CH))
js.append("  var UNI_IDX = '%s';" % idx_str)
js.append("  var UNI_BLOB = '%s';" % blob_b64)
js.append("""
  // ---- unifont の展開 ----
  var uni = null;
  function ensureUni(){
    if(uni) return uni;
    uni = new Map();
    var bin = atob(UNI_BLOB);
    var cp = 0, off = 0;
    var parts = UNI_IDX.split(';');
    for(var i=0;i<parts.length;i++){
      var kv = parts[i].split(',');
      cp += parseInt(kv[0],16);
      var ln = parseInt(kv[1],16);
      uni.set(cp, [off, ln]);
      off += ln;
    }
    uni._bin = bin;
    return uni;
  }
  // 16行のビットを取り出す。戻り値 {w, rows:[Uint16...]}
  function uniGlyph(cp){
    var m = ensureUni(), e = m.get(cp);
    if(!e) return null;
    var bin = m._bin, off = e[0], ln = e[1];
    var w = (ln === 32) ? 16 : 8;      // 32byte=16x16, 16byte=8x16
    var bpr = w / 8;
    var rows = [];
    for(var y=0;y<16;y++){
      var v = 0;
      for(var b=0;b<bpr;b++) v = (v<<8) | bin.charCodeAt(off + y*bpr + b);
      rows.push(v);
    }
    return {w:w, rows:rows};
  }
  return {
    asciiPng: ASCII_PNG, asciiAdv: ASCII_ADV, asciiPos: ASCII_POS,
    asciiAscent: ASCII_ASCENT, cw: ASCII_CW, ch: ASCII_CH,
    uniGlyph: uniGlyph
  };
})();
""")
open(OUT, "w").write("\n".join(js))
print("出力:", OUT, os.path.getsize(OUT), "bytes")
