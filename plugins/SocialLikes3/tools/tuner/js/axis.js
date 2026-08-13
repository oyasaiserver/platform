// axis.js
// /sldata GUI チューナー。単一ファイル版から機械的に分割したもの。
// classic script なのでトップレベルの var / function はグローバル。
// index.html の読み込み順に依存する。
"use strict";

// ---- 軸の上限（HIG: 固定 or 変動。目盛りは「馴染みのある数列」に乗せる）----
// 変動＝上限に意味が無い量（いいね数・歩数）、固定＝上限に意味がある量（％・目標）
var NICE = [1, 1.5, 2, 2.5, 3, 5, 7.5, 10];
function niceStep(raw) {
  if (raw <= 0) return 1;
  var pow = Math.pow(10, Math.floor(Math.log10(raw)));
  for (var i = 0; i < NICE.length; i++) {
    var s = NICE[i] * pow;
    if (s >= raw - 1e-9) return s;
  }
  return 10 * pow;
}
// 戻り値 {top, step} — step は目盛り1目盛りぶんの値
function axisScale(d) {
  var dmax = Math.max.apply(null, d),
    bands = Math.max(1, S.gl);
  if (S.axisMode === "fixed") {
    var t = Math.max(1, S.axisMax);
    return { top: t, step: t / bands, nice: false };
  }
  if (S.axisMode === "nice") {
    var st = niceStep(dmax / bands);
    if (st >= 1) st = Math.ceil(st); // 整数データなら整数目盛り
    return { top: st * bands, step: st, nice: true };
  }
  return {
    top: Math.max(1, dmax),
    step: Math.max(1, dmax) / bands,
    nice: false,
  };
}
function tickText(v) {
  return Math.abs(v - Math.round(v)) < 0.05
    ? String(Math.round(v))
    : v.toFixed(1);
}
// HIG:「馴染みのある数列」。整数（か .5 刻み）で割り切れているか
function ticksAreNice(sc) {
  if (S.gl < 1) return true;
  var st = sc.step;
  return Math.abs(st * 2 - Math.round(st * 2)) < 1e-6;
}
// 固定上限を割り切れる目盛り本数を探す。HIG が薦める 4 本に近いものを優先する
function suggestGl(top) {
  var order = [4, 3, 5, 2, 6];
  for (var i = 0; i < order.length; i++) {
    var g = order[i];
    if (Math.abs(top / g - Math.round(top / g)) < 1e-6) return g;
  }
  return 0;
}
function barWidth(pitch) {
  if (!S.autoBw) return S.bw;
  return Math.max(1, Math.round((pitch * S.barRatio) / 100));
}
// 目盛りラベルのうち最も幅の広いもの ＋ 線とのすき間 2px
function tickGutter(sc) {
  var w = 0;
  for (var g = 0; g <= S.gl; g++)
    w = Math.max(w, mcWidth(tickText(sc.step * g), 1));
  return w + 2;
}

var ctl = {};
