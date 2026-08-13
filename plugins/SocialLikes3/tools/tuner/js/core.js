// core.js
// /sldata GUI チューナー。単一ファイル版から機械的に分割したもの。
// classic script なのでトップレベルの var / function はグローバル。
// index.html の読み込み順に依存する。
"use strict";

var GUI_W = 176,
  GUI_H = 222,
  CELL = 18;
var CX = 7,
  CY = 17,
  COLS = 9,
  ROWS = 6; // container slot cells
var TITLE_X = 8,
  TITLE_Y = 6; // vanilla title draw origin
var INV_LABEL_Y = 128;
var PINV_Y = [138, 156, 174],
  HOTBAR_Y = 196; // player inventory cells

var SS = 2; // 内部解像度。CJK は 16px ソースなので 2 倍で原寸表示になる
var cv = document.getElementById("cv"),
  ctx = cv.getContext("2d", { alpha: false });
cv.width = GUI_W * SS;
cv.height = GUI_H * SS;
ctx.setTransform(SS, 0, 0, SS, 0, 0);
ctx.imageSmoothingEnabled = false;

// ---- Minecraft 実フォント ----
var MF = window.MCFONT,
  asciiImg = new Image(),
  asciiReady = false;
// data: URI なので即座に発火し得る。main.js の draw() より先に来る場合がある。
asciiImg.onload = function () {
  asciiReady = true;
  if (typeof draw === "function") draw();
};
asciiImg.src = MF.asciiPng;
var tintCache = {};
function tintedAscii(color) {
  if (tintCache[color]) return tintCache[color];
  var c = document.createElement("canvas");
  c.width = asciiImg.width;
  c.height = asciiImg.height;
  var g = c.getContext("2d");
  g.drawImage(asciiImg, 0, 0);
  g.globalCompositeOperation = "source-in";
  g.fillStyle = color;
  g.fillRect(0, 0, c.width, c.height);
  tintCache[color] = c;
  return c;
}

function hexToRgb(h) {
  h = h.replace("#", "");
  return [
    parseInt(h.substr(0, 2), 16),
    parseInt(h.substr(2, 2), 16),
    parseInt(h.substr(4, 2), 16),
  ];
}
function rect(x, y, w, h, c) {
  ctx.fillStyle = c;
  ctx.fillRect(x, y, w, h);
}
