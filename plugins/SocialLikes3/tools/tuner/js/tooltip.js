// tooltip.js
// /sldata GUI チューナー。単一ファイル版から機械的に分割したもの。
// classic script なのでトップレベルの var / function はグローバル。
// index.html の読み込み順に依存する。
"use strict";

// ---- ツールチップの見え方 ----
function drawTooltip() {
  if (!S.showTip) return;
  var lines = ["6月8日の週", "いいね 24件", "くれた人 9人"];
  var w = 0;
  lines.forEach(function (t) {
    w = Math.max(w, mcWidth(t, 1));
  });
  var bw = w + 8,
    bh = lines.length * 10 + 6;
  var x = Math.min(S.px + S.pw - bw - 2, 60),
    y = S.py + 22;
  rect(x - 1, y - 1, bw + 2, bh + 2, "#100010");
  rect(x, y, bw, bh, "#100010");
  rect(x, y, bw, 1, "#2D0B57");
  rect(x, y + bh - 1, bw, 1, "#2D0B57");
  rect(x, y, 1, bh, "#2D0B57");
  rect(x + bw - 1, y, 1, bh, "#2D0B57");
  drawMcText(lines[0], x + 4, y + 4, 1, "#FFFFFF");
  for (var i = 1; i < lines.length; i++)
    drawMcText(lines[i], x + 4, y + 4 + i * 10, 1, "#AAAAAA");
}
