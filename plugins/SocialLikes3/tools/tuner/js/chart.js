// chart.js
// /sldata GUI チューナー。単一ファイル版から機械的に分割したもの。
// classic script なのでトップレベルの var / function はグローバル。
// index.html の読み込み順に依存する。
"use strict";

// ---- overlay ----
function drawOverlay() {
  var x = S.px,
    y = S.py,
    w = S.pw,
    h = S.ph;
  ctx.save();
  ctx.globalAlpha = S.op / 255;
  rect(x, y, w, h, S.cBg);
  ctx.globalAlpha = 1;
  // edge
  ctx.strokeStyle = S.cEdge;
  ctx.lineWidth = 1;
  ctx.strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
  ctx.restore();

  var plotTop = y + S.top;
  // X軸ラベルを出す場合、その高さぶんプロットの下端を上げる。
  // パネル寸法（テクスチャ寸法）そのものは変えない。
  var xLabOn = xLabelsEnabled();
  var plotBottom = y + h - S.pad - (xLabOn ? S.xLabelH : 0);
  var d = series(S.n),
    sc = axisScale(d),
    max = sc.top;

  // 目盛りの値の置き場所。Apple の例は目盛り線の「外側」に余白を取っている。
  // 162px しかないので「内側に重ねる」も選べるようにして見比べる。
  var ticksOn = S.showTicks && S.gl > 0;
  var gut = ticksOn && S.tickSide !== "inside" ? tickGutter(sc) : 0;
  var plotLeft = x + S.pad + (S.tickSide === "left" ? gut : 0);
  var plotRight = x + w - S.pad - (S.tickSide === "right" ? gut : 0);
  var pw = plotRight - plotLeft,
    ph = plotBottom - plotTop;
  if (pw < 4 || ph < 4) {
    return { pw: pw, ph: ph, plotLeft: plotLeft, plotTop: plotTop };
  }

  for (var g = 0; g <= S.gl; g++) {
    var gy = Math.round(plotTop + ph * (g / Math.max(1, S.gl)));
    rect(plotLeft, gy, pw, 1, S.cGrid);
    if (ticksOn) {
      var s = tickText(sc.step * (S.gl - g)),
        tw = mcWidth(s, 1),
        tx,
        ty;
      if (S.tickSide === "inside") {
        tx = plotRight - tw;
        ty = g === S.gl ? gy - 9 : gy + 2; // 最下段だけ線の上へ
      } else if (S.tickSide === "left") {
        tx = plotLeft - 2 - tw;
        ty = gy - 4; // 線に中央を合わせる
      } else {
        tx = plotRight + 2;
        ty = gy - 4;
      }
      drawMcText(s, tx, ty, 1, S.cTick);
    }
  }

  if (S.chart === "bar") drawBars(d, max, plotLeft, plotTop, pw, ph);
  else if (S.chart === "line")
    drawLine(d, max, plotLeft, plotTop, pw, ph, false);
  else if (S.chart === "area")
    drawLine(d, max, plotLeft, plotTop, pw, ph, true);
  else if (S.chart === "hbar") drawHBars(d, max, plotLeft, plotTop, pw, ph);
  else if (S.chart === "donut") drawDonut(d, plotLeft, plotTop, pw, ph);
  else if (S.chart === "heat") drawHeat(plotLeft, plotTop, pw, ph);

  if (xLabOn) drawXLabels(plotLeft, plotBottom, pw, x, w);

  return {
    pw: pw,
    ph: ph,
    plotLeft: plotLeft,
    plotTop: plotTop,
    plotBottom: plotBottom,
    xLabOn: xLabOn,
  };
}

function drawBars(d, max, L, T, W, H) {
  var pitch = W / d.length,
    bw = barWidth(pitch);
  for (var i = 0; i < d.length; i++) {
    var bh = Math.max(1, Math.round((H * d[i]) / max));
    var bx = Math.round(L + i * pitch + (pitch - bw) / 2);
    var by = T + H - bh;
    var last = i === d.length - 1,
      c = last ? S.cBarHi : S.cBar;
    rect(bx, by, bw, bh, c);
    if (S.barStyle !== "flat") {
      rect(bx, by, bw, 1, "rgba(255,255,255,.42)");
      rect(bx, by, 1, bh, "rgba(255,255,255,.30)");
      rect(bx + bw - 1, by, 1, bh, "rgba(0,0,0,.38)");
    }
    if (last && S.markLatest) {
      // 色だけに頼らない強調
      var mx = bx + Math.floor(bw / 2),
        my = by - 3;
      rect(mx - 2, my, 5, 1, c);
      rect(mx - 1, my + 1, 3, 1, c);
      rect(mx, my + 2, 1, 1, c);
    }
  }
}

function xLabelsEnabled() {
  return S.showXLabels && S.chart !== "donut" && S.chart !== "hbar";
}
function xLabelItems(plotLeft, plotBottom, pw, panelX, panelW) {
  var dlen = Math.max(1, S.n);
  var pitch = pw / dlen,
    step = Math.max(1, parseInt(S.xLabelStep, 10) || 1);
  var labels = S.xLabels || [],
    out = [];
  var minX = panelX,
    maxX = panelX + panelW;
  var ty = plotBottom + Math.max(0, Math.floor((S.xLabelH - 8) / 2));
  for (var i = 0; i < dlen; i++) {
    if (i % step !== 0) continue;
    var text = labels[i] || "";
    if (!text) continue;
    var tw = mcWidth(text, 1);
    var center = plotLeft + (i + 0.5) * pitch;
    var rawX = Math.round(center - tw / 2);
    var tx = rawX;
    if (tx < minX) tx = minX;
    if (tx + tw > maxX) tx = maxX - tw;
    if (tx < minX) tx = minX;
    out.push({
      i: i,
      text: text,
      x: tx,
      rawX: rawX,
      y: ty,
      w: tw,
      center: center,
      over: tw > panelW || tx < minX || tx + tw > maxX,
    });
  }
  return out;
}
function drawXLabels(plotLeft, plotBottom, pw, panelX, panelW) {
  if (S.xLabelH <= 0) return;
  xLabelItems(plotLeft, plotBottom, pw, panelX, panelW).forEach(function (it) {
    drawMcText(it.text, it.x, it.y, 1, S.cTick);
  });
}

function drawLine(d, max, L, T, W, H, fill) {
  var pts = d.map(function (v, i) {
    return [
      L + (d.length === 1 ? 0 : (i * (W - 1)) / (d.length - 1)),
      T + H - (H * v) / max,
    ];
  });
  if (fill) {
    ctx.beginPath();
    ctx.moveTo(pts[0][0], T + H);
    pts.forEach(function (p) {
      ctx.lineTo(p[0], p[1]);
    });
    ctx.lineTo(pts[pts.length - 1][0], T + H);
    ctx.closePath();
    ctx.fillStyle = S.cBar;
    ctx.globalAlpha = 0.45;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
  ctx.beginPath();
  ctx.moveTo(pts[0][0], pts[0][1]);
  pts.forEach(function (p) {
    ctx.lineTo(p[0], p[1]);
  });
  ctx.strokeStyle = S.cBar;
  ctx.lineWidth = 1;
  ctx.stroke();
  pts.forEach(function (p, i) {
    var c = i === pts.length - 1 ? S.cBarHi : S.cBar;
    rect(Math.round(p[0]) - 1, Math.round(p[1]) - 1, 3, 3, c);
  });
}
function drawHBars(d, max, L, T, W, H) {
  var k = Math.min(d.length, Math.max(1, Math.floor(H / (S.bw + 2))));
  var pitch = H / k;
  for (var i = 0; i < k; i++) {
    var bl = Math.max(1, Math.round((W * d[i]) / max));
    var by = Math.round(T + i * pitch + (pitch - S.bw) / 2);
    var c = i === 0 ? S.cBarHi : S.cBar;
    rect(L, by, bl, S.bw, c);
    if (S.barStyle !== "flat") {
      rect(L, by, bl, 1, "rgba(255,255,255,.40)");
      rect(L, by + S.bw - 1, bl, 1, "rgba(0,0,0,.34)");
    }
  }
}
function drawDonut(d, L, T, W, H) {
  var cx = L + W / 2,
    cy = T + H / 2,
    R = Math.min(W, H) / 2 - 1,
    r = R * 0.52;
  var total = d.reduce(function (a, b) {
      return a + b;
    }, 0),
    a0 = -Math.PI / 2;
  var cols = [
    S.cBar,
    S.cBarHi,
    "#4E7C22",
    "#8FCB4F",
    "#C0392B",
    "#3FA65C",
    "#B8B8C4",
    "#8A3FB0",
  ];
  for (var i = 0; i < d.length; i++) {
    var a1 = a0 + (Math.PI * 2 * d[i]) / total;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, R, a0, a1);
    ctx.closePath();
    ctx.fillStyle = cols[i % cols.length];
    ctx.fill();
    a0 = a1;
  }
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = S.cBg;
  ctx.fill();
}
function drawHeat(L, T, W, H) {
  var cols = 9,
    rows = Math.max(1, Math.floor(H / (S.bw + 1)));
  var cw = Math.floor(W / cols),
    chh = Math.floor(H / rows);
  var rgb = hexToRgb(S.cBar);
  for (var r = 0; r < rows; r++)
    for (var c = 0; c < cols; c++) {
      var v = (Math.sin(r * 1.7 + c * 0.9) + 1) / 2;
      ctx.fillStyle =
        "rgba(" +
        rgb[0] +
        "," +
        rgb[1] +
        "," +
        rgb[2] +
        "," +
        (0.12 + v * 0.88).toFixed(2) +
        ")";
      ctx.fillRect(L + c * cw, T + r * chh, cw - 1, chh - 1);
    }
}

function drawHoverCols() {
  if (!S.showHover) return;
  var top = Math.max(S.py, CY),
    bot = Math.min(S.py + S.ph, CY + ROWS * CELL);
  ctx.save();
  for (var c = 0; c < COLS; c++) {
    var x = CX + c * CELL;
    ctx.globalAlpha = c % 2 === 0 ? 0.2 : 0.1;
    ctx.fillStyle = "#4FC3F7";
    ctx.fillRect(x, top, CELL, bot - top);
    ctx.globalAlpha = 0.85;
    ctx.fillStyle = "#4FC3F7";
    ctx.fillRect(x, top, 1, bot - top);
  }
  ctx.restore();
}
function drawGuides() {
  if (!S.showGuide) return;
  ctx.save();
  ctx.globalAlpha = 0.9;
  rect(CX, 0, 1, GUI_H, "#FF3B6B");
  rect(CX + COLS * CELL - 1, 0, 1, GUI_H, "#FF3B6B");
  rect(0, CY, GUI_W, 1, "#FF3B6B");
  rect(0, CY + ROWS * CELL - 1, GUI_W, 1, "#FF3B6B");
  ctx.restore();
}
