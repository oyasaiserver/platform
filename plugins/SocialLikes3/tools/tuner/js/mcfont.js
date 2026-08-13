// mcfont.js
// /sldata GUI チューナー。単一ファイル版から機械的に分割したもの。
// classic script なのでトップレベルの var / function はグローバル。
// index.html の読み込み順に依存する。
"use strict";

// ---- Minecraft 実フォントの字送りと描画 ----
// ASCII: ascii.png から実測した advance。全角: unihex の size_overrides により
// advance = (right-left+1)/2 + 1 = 9。半角 unifont は 5。
function charAdv(ch) {
  if (ch === " ") return 4; // include/space.json
  if (MF.asciiAdv.hasOwnProperty(ch)) return MF.asciiAdv[ch];
  var cp = ch.codePointAt(0);
  var g = MF.uniGlyph(cp);
  if (g) return g.w === 16 ? 9 : 5;
  return 6;
}
function mcWidth(s, scale) {
  var w = 0;
  for (var ch of s) w += charAdv(ch);
  return w * (scale || 1);
}
// y はグリフ上端（バニラのタイトルは y=6）
function drawMcText(s, x, y, scale, color) {
  scale = scale || 1;
  var cur = x;
  for (var ch of s) {
    var adv = charAdv(ch);
    if (ch !== " ") {
      if (MF.asciiPos.hasOwnProperty(ch))
        drawAsciiGlyph(ch, cur, y, scale, color);
      else drawUniGlyph(ch.codePointAt(0), cur, y, scale, color);
    }
    cur += adv * scale;
  }
  return cur - x;
}
function drawAsciiGlyph(ch, x, y, scale, color) {
  if (!asciiReady) return;
  var p = MF.asciiPos[ch],
    cw = MF.cw,
    chh = MF.ch;
  ctx.drawImage(
    tintedAscii(color),
    p[1] * cw,
    p[0] * chh,
    cw,
    chh,
    x,
    y,
    8 * scale,
    8 * scale,
  );
}
// unifont は 16px ソースを 8px の枠に描く（= 実機と同じ 1/2 スケール）
function drawUniGlyph(cp, x, y, scale, color) {
  var g = MF.uniGlyph(cp);
  if (!g) return;
  ctx.fillStyle = color;
  var unit = (8 * scale) / 16; // ソース1px あたりの論理px
  for (var ry = 0; ry < 16; ry++) {
    var bits = g.rows[ry];
    if (!bits) continue;
    for (var rx = 0; rx < g.w; rx++) {
      if ((bits >> (g.w - 1 - rx)) & 1) {
        ctx.fillRect(x + rx * unit, y + ry * unit, unit, unit);
      }
    }
  }
}
