// export.js
// /sldata GUI チューナー。単一ファイル版から機械的に分割したもの。
// classic script なのでトップレベルの var / function はグローバル。
// index.html の読み込み順に依存する。
"use strict";

// ---- 実装コードの書き出し ----
document.getElementById("expTab").addEventListener("click", function (e) {
  var b = e.target.closest("button");
  if (!b) return;
  S.expTab = b.getAttribute("data-e");
  [].forEach.call(this.querySelectorAll("button"), function (x) {
    x.setAttribute("aria-pressed", x === b ? "true" : "false");
  });
  updateExport();
});
document.getElementById("copyCode").addEventListener("click", function () {
  var t = document.getElementById("expCode").textContent;
  if (navigator.clipboard) navigator.clipboard.writeText(t);
  this.textContent = "コピーしました";
  var b = this;
  setTimeout(function () {
    b.textContent = "コピー";
  }, 1200);
});
function rgbOf(hex) {
  var a = hexToRgb(hex);
  return "(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
function themeRgbBlock(name, t) {
  return [
    name + "_PANEL_BG   = " + rgbOf(t.cBg),
    name + "_GRID_COLOR = " + rgbOf(t.cGrid),
    name + "_TICK_COLOR = " + rgbOf(t.cTick),
    name + "_BAR_COLOR  = " + rgbOf(t.cBar),
    name + "_BAR_LATEST = " + rgbOf(t.cBarHi),
    name + "_EDGE_COLOR = " + rgbOf(t.cEdge),
  ].join("\n");
}
// 目盛りの値は「通常の Minecraft テキスト」を負スペースで置く。
// 数値は毎回変わるのでグリフに焼き込めない。位置だけを書き出す。
function tickExport() {
  if (!S.showTicks || S.gl < 1) return "";
  var d = series(S.n),
    sc = axisScale(d);
  var gut = S.tickSide === "inside" ? 0 : tickGutter(sc);
  var pl = S.px + S.pad + (S.tickSide === "left" ? gut : 0);
  var pr = S.px + S.pw - S.pad - (S.tickSide === "right" ? gut : 0);
  var plotTop = S.py + S.top;
  var plotBottom = S.py + S.ph - S.pad - (xLabelsEnabled() ? S.xLabelH : 0);
  var ph = plotBottom - plotTop;
  var L = [
    "",
    "",
    "// ---- 目盛りの値（通常テキスト + 負スペースで配置）----",
    "// タイトル行の基準は x=8, グリフ上端 y=6",
    "// 置き場所: " +
      S.tickSide +
      (gut ? "  余白 " + gut + "px（プロット幅 " + (pr - pl) + "px）" : ""),
  ];
  for (var g = 0; g <= S.gl; g++) {
    var gy = Math.round(plotTop + ph * (g / S.gl));
    var v = tickText(sc.step * (S.gl - g)),
      vw = mcWidth(v, 1),
      tx,
      ty;
    if (S.tickSide === "inside") {
      tx = pr - vw;
      ty = g === S.gl ? gy - 9 : gy + 2;
    } else if (S.tickSide === "left") {
      tx = pl - 2 - vw;
      ty = gy - 4;
    } else {
      tx = pr + 2;
      ty = gy - 4;
    }
    L.push(
      '//   "' +
        v +
        '"  左 x=' +
        tx +
        " (幅 " +
        vw +
        ") / グリフ上端 y=" +
        ty +
        "  → この行の ascent = " +
        (6 + 7 - ty),
    );
  }
  L.push("//");
  L.push("// ※ Minecraft の ascent は provider 単位。y が違う行ごとに");
  L.push(
    "//   数字 0-9 のグリフ一式（ascent 違い）が要る。" +
      (S.gl + 1) +
      " 行なら " +
      (S.gl + 1) * 10 +
      " コードポイント。",
  );
  if (S.axisMode === "fixed") {
    L.push("//   → ただし【固定軸】なら目盛りの数字は永久に変わらないので、");
    L.push("//      パネル画像そのものに焼き込める。追加の provider は不要。");
  } else {
    L.push(
      "//   → 【変動軸】は数字が毎回変わるので焼き込めない。上記の実装が要る。",
    );
    L.push(
      "//      実装を軽くしたいなら 固定軸 にするか、目盛りを 0 と上限の 2 つに減らす。",
    );
  }
  return L.join("\n");
}
function xLabelExport() {
  if (!xLabelsEnabled()) return "";
  var d = series(S.n),
    sc = axisScale(d);
  var gut =
    S.showTicks && S.gl > 0 && S.tickSide !== "inside" ? tickGutter(sc) : 0;
  var pl = S.px + S.pad + (S.tickSide === "left" ? gut : 0);
  var pr = S.px + S.pw - S.pad - (S.tickSide === "right" ? gut : 0);
  var plotTop = S.py + S.top;
  var plotBottom = S.py + S.ph - S.pad - S.xLabelH;
  var pw = pr - pl;
  if (pw < 4 || plotBottom - plotTop < 4) return "";
  var items = xLabelItems(pl, plotBottom, pw, S.px, S.pw);
  if (!items.length) return "";
  var L = [
    "",
    "",
    "// ---- X軸ラベル（通常テキスト + 負スペースで配置）----",
    "// S.xLabelStep=" +
      S.xLabelStep +
      "。棒の中央に置き、左右端はパネル内へ寄せる。",
  ];
  items.forEach(function (it) {
    L.push(
      '//   "' +
        it.text +
        '"  左 x=' +
        it.x +
        " (幅 " +
        it.w +
        ") / グリフ上端 y=" +
        it.y +
        "  → ascent = " +
        (6 + 7 - it.y),
    );
  });
  L.push("//");
  L.push(
    "// ※ Minecraft の ascent はフォントプロバイダ単位で文字単位ではない。",
  );
  L.push("//   Y軸の目盛りは行ごとに y が違うので行数ぶんの provider が要る。");
  L.push(
    "//   X軸ラベルは全部同じ y なので、数字・/ のグリフ一式は 1 セットで済む。",
  );
  return L.join("\n");
}

function updateExport() {
  var ascent = TITLE_Y + 7 - S.py,
    off = S.px - TITLE_X;
  var xLabOn = xLabelsEnabled();
  var plotBottom = S.ph - S.pad - (xLabOn ? S.xLabelH : 0);
  var pitch = (S.pw - S.pad * 2) / S.n,
    out = "";
  if (S.expTab === "font") {
    out =
      "// assets/minecraft/font/sociallikes_graph.json\n" +
      "{\n" +
      '  "providers": [\n' +
      '    { "type": "bitmap",\n' +
      '      "file": "minecraft:font/sociallikes/panel.png",\n' +
      '      "height": ' +
      S.ph +
      ', "ascent": ' +
      ascent +
      ",\n" +
      '      "chars": ["\\uF8F0"] },\n' +
      '    { "type": "bitmap",\n' +
      '      "file": "minecraft:font/sociallikes/bar_%02d.png",  // 0..16\n' +
      '      "height": ' +
      S.ph +
      ', "ascent": ' +
      ascent +
      ",\n" +
      '      "chars": ["\\uF900"] },\n' +
      '    { "type": "space",\n' +
      '      "advances": {\n' +
      '        "\\uF8F1": ' +
      -S.pw +
      ",   // 背景の幅ぶん戻す\n" +
      '        "\\uF8F2": ' +
      S.pad +
      "    // プロット左端へのオフセット\n" +
      "      } }\n" +
      "  ]\n" +
      "}\n\n" +
      "// タイトル先頭に入れる負スペース: advance " +
      off +
      "  (x=8 → " +
      S.px +
      ")" +
      tickExport() +
      xLabelExport();
  } else if (S.expTab === "py") {
    out =
      "# generate_bar_glyphs.py の定数\n" +
      "PANEL_W, PANEL_H   = " +
      S.pw +
      ", " +
      S.ph +
      "\n" +
      "PLOT_LEFT          = " +
      S.pad +
      "\n" +
      "PLOT_TOP           = " +
      S.top +
      "\n" +
      "PLOT_BOTTOM        = " +
      plotBottom +
      "\n" +
      "BAR_PITCH          = " +
      pitch.toFixed(2) +
      "   # " +
      S.n +
      " 本\n" +
      "BAR_WIDTH          = " +
      S.bw +
      "\n" +
      'BAR_STYLE          = "' +
      S.barStyle +
      '"\n' +
      "GRID_LINES         = " +
      S.gl +
      "\n" +
      "X_LABEL_HEIGHT     = " +
      (xLabOn ? S.xLabelH : 0) +
      "\n" +
      "\n" +
      "# テクスチャは light / dark の2種類を生成する\n" +
      themeRgbBlock("LIGHT", THEMES.light) +
      "\n\n" +
      themeRgbBlock("DARK", THEMES.dark) +
      "\n" +
      "\n" +
      "# 透明グリフの幅つぶれ対策: 全グリフの左下・右下に alpha=1 を置く\n" +
      "ALPHA_GUARD = 1";
  } else {
    out =
      "# plugins/SocialLikes3/sldata-font.yml\n" +
      "gui-slots: 54\n" +
      "display-weeks: " +
      S.n +
      "\n" +
      'background-code-point: "U+F8F0"\n' +
      'cursor-reset-code-point: "U+F8F1"\n' +
      'bar-start-offset-code-point: "U+F8F2"\n' +
      'bar-base-code-point: "U+F900"\n' +
      "bar-levels: 17\n" +
      "bar-separator-code-point: null\n" +
      "\n" +
      "# 表示領域 x " +
      S.px +
      ".." +
      (S.px + S.pw) +
      " / y " +
      S.py +
      ".." +
      (S.py + S.ph) +
      "\n" +
      "# 操作行はスロット 45..53";
  }
  document.getElementById("expCode").textContent = out;
}
