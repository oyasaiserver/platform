// lint.js
// /sldata GUI チューナー。単一ファイル版から機械的に分割したもの。
// classic script なのでトップレベルの var / function はグローバル。
// index.html の読み込み順に依存する。
"use strict";

// ---- Apple の原則に対する点検 ----
function updateLint() {
  var items = [];
  items.push([
    S.gl >= 1 && S.gl <= 4,
    "目盛り線 " + S.gl + " 本",
    "4 本程度が推奨。7 本は視覚的ノイズになる",
  ]);
  items.push([
    S.n <= COLS,
    "棒 " + S.n + " 本 / ホバー列 " + COLS,
    "列より棒が多いと 1 本ずつの詳細が出せない。" +
      Math.ceil(S.n / COLS) +
      " 本ぶんをまとめた区間ツールチップになる（Maps の標高グラフと同じ扱い）",
  ]);
  var lsc = axisScale(series(S.n));
  items.push([
    S.axisMode !== "auto",
    "軸の上限：" +
      (S.axisMode === "fixed"
        ? "固定"
        : S.axisMode === "nice"
          ? "切上げ"
          : "そのまま変動"),
    "目盛りが半端な値になる。HIG は「馴染みのある数列」を求める。" +
      "上限に意味のある量（％・目標）は固定、意味のない量（いいね数）は切上げ",
  ]);
  items.push([
    S.gl < 1 || ticksAreNice(lsc),
    "目盛りが割り切れている（1目盛り " + tickText(lsc.step) + "）",
    "上限 " +
      tickText(lsc.top) +
      " ÷ " +
      S.gl +
      " が半端。" +
      (suggestGl(lsc.top)
        ? "目盛り線 " + suggestGl(lsc.top) + " 本なら揃う"
        : "上限を見直す"),
  ]);
  items.push([
    S.gl === 0 || S.showTicks,
    "目盛り線と値の対応",
    'Apple は小さいグラフで目盛り線とラベルを"セットで"捨てる。' +
      "値の無い線だけ残す例は HIG・WWDC のどこにも無い",
  ]);
  items.push([
    S.markLatest,
    "最新の強調に形の手がかり",
    "色だけを情報の伝達手段にしない",
  ]);
  items.push([
    S.op === 255,
    "パネル不透明度 " + S.op,
    "255 未満だとスロット枠が透ける",
  ]);
  // 文字ごとに「実際に乗っている地」と比べる
  var worst = 1,
    worstT = "";
  (S.texts || []).forEach(function (it) {
    if (!it.t) return;
    var top = it.y,
      bot = it.y + 8 * (it.s || 1);
    var onPanel = bot > S.py && top < S.py + S.ph;
    var bg = onPanel ? S.cBg : "#C6C6C6";
    var d = Math.abs(lum(it.c || "#ffffff") - lum(bg));
    if (d < worst) {
      worst = d;
      worstT = it.t;
    }
  });
  items.push([
    worst > 0.32,
    "文字と地のコントラスト" + (worstT ? "（最小: 「" + worstT + "」）" : ""),
    "地と近い明度の文字は読めない。パネル上なら明るい色、タイトル行なら暗い色",
  ]);
  items.push([
    S.chart !== "donut" && S.chart !== "scatter",
    "この領域に合う図形",
    "ドーナツ・散布図は 162×90 では読めない",
  ]);
  if (xLabelsEnabled()) {
    var gut =
      S.showTicks && S.gl > 0 && S.tickSide !== "inside" ? tickGutter(lsc) : 0;
    var pl = S.px + S.pad + (S.tickSide === "left" ? gut : 0);
    var pr = S.px + S.pw - S.pad - (S.tickSide === "right" ? gut : 0);
    var plotBottom = S.py + S.ph - S.pad - S.xLabelH;
    var xitems =
      pr - pl >= 4 ? xLabelItems(pl, plotBottom, pr - pl, S.px, S.pw) : [];
    var overflow = xitems.filter(function (it) {
      return it.over;
    });
    var overlap = false,
      prev = null;
    xitems.forEach(function (it) {
      if (prev && it.x < prev.x + prev.w + 1) overlap = true;
      prev = it;
    });
    items.push([
      overflow.length === 0,
      "X軸ラベルの左右範囲",
      "長いラベルがパネル左右からはみ出す。短くするか表示間隔を広げる",
    ]);
    items.push([
      !overlap,
      "X軸ラベル同士の重なり",
      "ラベルが重なっている。間引きを増やす",
    ]);
  }
  var ul = document.getElementById("lintList");
  ul.innerHTML = "";
  items.forEach(function (it) {
    var li = document.createElement("li");
    li.className = it[0] ? "ok" : "ng";
    li.innerHTML =
      '<span class="m">' +
      (it[0] ? "OK" : "NG") +
      "</span><span>" +
      it[1] +
      (it[0] ? "" : " — " + it[2]) +
      "</span>";
    ul.appendChild(li);
  });
}
S.cTextMain = function () {
  return (S.texts && S.texts[0] && S.texts[0].c) || "#ffffff";
};
function lum(hex) {
  var a = hexToRgb(hex);
  return (0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]) / 255;
}
