// state.js
// /sldata GUI チューナー。単一ファイル版から機械的に分割したもの。
// classic script なのでトップレベルの var / function はグローバル。
// index.html の読み込み順に依存する。
"use strict";

// ---- controls ----
function link(rid, nid, init, onchange) {
  var r = document.getElementById(rid),
    n = document.getElementById(nid);
  n.min = r.min;
  n.max = r.max;
  r.value = init;
  n.value = init;
  function sync(src) {
    var v = parseInt(src.value, 10);
    if (isNaN(v)) return;
    r.value = v;
    n.value = v;
    onchange(v);
  }
  r.addEventListener("input", function () {
    sync(r);
  });
  n.addEventListener("input", function () {
    sync(n);
  });
  return {
    get: function () {
      return parseInt(r.value, 10);
    },
    set: function (v) {
      r.value = v;
      n.value = v;
    },
  };
}

// ---- 描画される GUI の配色（ページ自体のテーマとは別物）----
// HIG は「ダークモードとライトモードに適応させる」ことを求める。2組持って見比べる。
var COLOR_KEYS = ["cBg", "cGrid", "cTick", "cBar", "cBarHi", "cTitle", "cEdge"];

var THEMES = {
  // 暗いパネル。チェストGUI の地 #C6C6C6 の上に沈める
  dark: {
    cBg: "#0e1210",
    cGrid: "#3a4438",
    cTick: "#7d8c72",
    cBar: "#6e9e3e",
    cBarHi: "#d9a441",
    cTitle: "#e6efd8",
    cEdge: "#232b20",
  },
  // 明るいパネル。Apple の実例（白カードの上に色の付いたマーク）に寄せる。
  // 棒は macOS Blue Default Light、最新は Orange Accessible Light。
  // いずれも地 #f2f2ef に対して 3:1 以上（非テキスト要素の下限）を満たす。
  light: {
    cBg: "#f2f2ef",
    cGrid: "#c2c2bc",
    cTick: "#6e6e68",
    cBar: "#007aff",
    cBarHi: "#c93400",
    cTitle: "#3c3c43",
    cEdge: "#a6a69e",
  },
};

var S = {
  px: 7,
  py: 16,
  pw: 162,
  ph: 90,
  n: 9,
  bw: 14,
  pad: 6,
  top: 6,
  gl: 3,
  fs: 7,
  ty: 4,
  chart: "bar",
  op: 255,
  theme: "dark",
  showSlots: true,
  showGuide: false,
  showInv: true,
  showHover: false,
  markLatest: true,
  showTip: false,
  data: [12, 18, 9, 24, 31, 22, 28, 35, 41],
  swVariant: 0,
  expTab: "font",
  axisMode: "auto",
  axisMax: 50,
  showTicks: false,
  autoBw: false,
  barRatio: 58,
  tickSide: "right",
  barStyle: "bevel",
  showXLabels: false,
  xLabelStep: 1,
  xLabelH: 9,
  xLabels: [
    "6/8",
    "6/15",
    "6/22",
    "6/29",
    "7/6",
    "7/13",
    "7/20",
    "7/27",
    "8/3",
  ],
};

// 選択中テーマの色を S にコピーする。描画側は今までどおり S.cBar 等を見る。
function applyTheme(name) {
  if (name) S.theme = name;
  var t = THEMES[S.theme];
  COLOR_KEYS.forEach(function (k) {
    S[k] = t[k];
  });
}
// 色を編集したら、そのテーマ側だけを書き換える
function setThemeColor(key, hex) {
  THEMES[S.theme][key] = hex;
  S[key] = hex;
}
applyTheme();
