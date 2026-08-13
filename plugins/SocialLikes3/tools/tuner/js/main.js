// main.js
// /sldata GUI チューナー。単一ファイル版から機械的に分割したもの。
// classic script なのでトップレベルの var / function はグローバル。
// index.html の読み込み順に依存する。
"use strict";

function draw() {
  ctx.setTransform(SS, 0, 0, SS, 0, 0);
  ctx.imageSmoothingEnabled = false;
  ctx.fillStyle = "#101010";
  ctx.fillRect(0, 0, GUI_W, GUI_H);
  drawChrome();
  var info = drawOverlay();
  drawTexts();
  drawHoverCols();
  drawTooltip();
  drawGuides();
  report(info);
}

function report(info) {
  var right = S.px + S.pw,
    bottom = S.py + S.ph;
  document.getElementById("oRect").textContent =
    "x " + S.px + "–" + right + " / y " + S.py + "–" + bottom;
  document.getElementById("oTex").textContent = S.pw + " × " + S.ph + " px";
  document.getElementById("oH").textContent = "height = " + S.ph;
  var ascent = TITLE_Y + 7 - S.py;
  document.getElementById("oA").textContent = "ascent = " + ascent;
  var off = S.px - TITLE_X;
  document.getElementById("oOff").textContent =
    off === 0 ? "不要" : "advance " + off;
  var dd = series(S.n),
    sc = axisScale(dd),
    dmax = Math.max.apply(null, dd);
  var gut =
    S.showTicks && S.gl > 0 && S.tickSide !== "inside" ? tickGutter(sc) : 0;
  var pitch = (S.pw - S.pad * 2 - gut) / S.n,
    bw = barWidth(pitch);
  document.getElementById("oPitch").textContent =
    pitch.toFixed(2) +
    " px（棒 " +
    bw +
    " / 間隔 " +
    Math.max(0, Math.round(pitch - bw)) +
    "）";

  var ticks = [];
  for (var t = S.gl; t >= 0; t--) ticks.push(tickText(sc.step * t));
  var head =
    S.axisMode === "fixed"
      ? "固定"
      : S.axisMode === "nice"
        ? "変動＋切上げ"
        : "変動（そのまま）";
  var an =
    "上限 " +
    tickText(sc.top) +
    "（データ最大 " +
    dmax +
    "）／目盛り " +
    ticks.join(" · ");
  if (S.axisMode === "auto") an += " ← 半端な値。最大の棒が必ず天井に接する";
  if (S.axisMode === "nice") an += " ← 1目盛り " + tickText(sc.step);
  if (S.axisMode === "fixed" && !ticksAreNice(sc)) {
    var g2 = suggestGl(sc.top);
    an +=
      " ← <strong>割り切れていない。</strong>" +
      (g2
        ? "目盛り線を " +
          g2 +
          " 本にすると 1目盛り " +
          tickText(sc.top / g2) +
          " で揃う"
        : "上限を目盛り本数で割り切れる値にする");
  }
  document.getElementById("axisNote").innerHTML =
    "<strong>" + head + "</strong>：" + an;
  if (info)
    document.getElementById("oPlot").textContent =
      Math.round(info.pw) + " × " + Math.round(info.ph) + " px";

  var msgs = [],
    bad = false;
  var slotRight = CX + COLS * CELL; // 169（含まない右端）
  var lastPx = bottom - 1; // パネルが覆う最終ピクセル行
  // 何段目まで完全に覆えているか（段 r のセルは CY+r*18 … CY+r*18+17）
  var fullRows = 0;
  for (var r = 0; r < ROWS; r++) {
    var cellTop = CY + r * CELL,
      cellBot = cellTop + CELL - 1;
    if (S.py <= cellTop && lastPx >= cellBot) fullRows = r + 1;
    else break;
  }
  var partial = -1;
  for (var r2 = 0; r2 < ROWS; r2++) {
    var ct = CY + r2 * CELL,
      cb = ct + CELL - 1;
    if (lastPx >= ct && lastPx < cb) {
      partial = r2 + 1;
      break;
    }
  }

  if (S.px < 3 || right > GUI_W - 3 || S.py < 3 || bottom > GUI_H - 3) {
    msgs.push("GUI の枠からはみ出している");
    bad = true;
  }
  if (S.px !== CX) {
    msgs.push("左端がスロット列に合っていない（正しくは " + CX + "）");
    bad = true;
  }
  if (right !== slotRight) {
    msgs.push("右端がスロット列に合っていない（正しくは " + slotRight + "）");
    bad = true;
  }
  if (S.py > CY) {
    msgs.push("上端がスロット上端より下（正しくは " + CY + " 以下）");
    bad = true;
  }
  var partialPx = partial > 0 ? CY + partial * CELL - 1 - lastPx : 0;
  if (partial > 0 && partialPx > 1) {
    msgs.push(partial + " 段目の下端が " + partialPx + "px 露出");
    bad = true;
  }
  if (fullRows === 0) {
    msgs.push("どの段も覆えていない");
    bad = true;
  }
  if (S.op < 255) {
    msgs.push("不透明度が 255 未満：スロット枠が透ける");
    bad = true;
  }
  if (S.n !== COLS) {
    msgs.push(
      "データ数が " +
        S.n +
        "：ホバー列は " +
        COLS +
        " なので 1 列に " +
        (S.n / COLS).toFixed(1) +
        " 本入る",
    );
    bad = true;
  }
  var st = document.getElementById("status");
  if (bad) {
    st.className = "status warn";
    st.textContent = "⚠ " + msgs.join(" / ");
  } else {
    st.className = "status ok";
    st.textContent =
      "✓ スロット " +
      fullRows +
      " 段を被覆" +
      (partialPx === 1
        ? "（下端 1px はスロットのベベル線が残り、表示域と操作行の区切りになる）"
        : "") +
      "。操作行は残り " +
      (ROWS - fullRows - (partial > 0 ? 1 : 0)) +
      " 段。棒 " +
      S.n +
      " 本＝ホバー列 " +
      COLS +
      " と 1 対 1。";
  }

  var notes = {
    bar: "棒をスロット列（18px ピッチ）に合わせると、棒の裏のスロットがそのまま当たり判定になる。ホバーで各点の詳細を出せる。",
    line: "点数を増やしても潰れにくい。9 点を超える期間を見せたいならこちら。ただし当たり判定は列単位のままなので、列数とデータ点数を揃える必要がある。",
    area: "折れ線より量の印象が強い。目盛り線が隠れやすいので不透明度を下げるか線を明るくする。",
    hbar: "「よくいいねしてくれる人 上位5人」のようなランキング向き。項目名を書く幅が要るので、内側余白を大きめに。",
    donut:
      "162 × 90 の領域では小さくなりすぎる。割合を見せたいなら横棒か、数値そのものを大きく出す方が読める。",
    heat: "9 列 × N 行がスロット格子とそのまま一致する。曜日 × 週の活動量など、格子と相性の良いデータ向き。",
  };
  document.getElementById("chartNote").textContent = notes[S.chart] || "";
  updateLint();
  updateExport();
}

draw();
