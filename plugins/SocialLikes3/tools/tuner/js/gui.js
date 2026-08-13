// gui.js
// /sldata GUI チューナー。単一ファイル版から機械的に分割したもの。
// classic script なのでトップレベルの var / function はグローバル。
// index.html の読み込み順に依存する。
"use strict";

// ---- sample data ----
function series(n) {
  var d = S.data.slice(0, n);
  while (d.length < n) d.push(0);
  return d;
}

// ---- GUI chrome ----
function drawChrome() {
  rect(0, 0, GUI_W, GUI_H, "#C6C6C6");
  rect(0, 0, GUI_W, 3, "#FFFFFF");
  rect(0, 0, 3, GUI_H, "#FFFFFF");
  rect(0, GUI_H - 3, GUI_W, 3, "#555555");
  rect(GUI_W - 3, 0, 3, GUI_H, "#555555");
  if (S.showSlots) {
    for (var r = 0; r < ROWS; r++)
      for (var c = 0; c < COLS; c++) slotCell(CX + c * CELL, CY + r * CELL);
    if (S.showInv) {
      for (var i = 0; i < 3; i++)
        for (var c2 = 0; c2 < COLS; c2++) slotCell(CX + c2 * CELL, PINV_Y[i]);
      for (var c3 = 0; c3 < COLS; c3++) slotCell(CX + c3 * CELL, HOTBAR_Y);
    }
  }
  drawMcText("インベントリ", 8, INV_LABEL_Y, 1, "#404040");
}
function drawTexts() {
  (S.texts || []).forEach(function (it) {
    if (it.t) drawMcText(it.t, it.x, it.y, it.s || 1, it.c || "#ffffff");
  });
}
function slotCell(x, y) {
  rect(x, y, CELL, CELL, "#8B8B8B");
  rect(x, y, CELL, 1, "#373737");
  rect(x, y, 1, CELL, "#373737");
  rect(x, y + CELL - 1, CELL, 1, "#FFFFFF");
  rect(x + CELL - 1, y, 1, CELL, "#FFFFFF");
}
