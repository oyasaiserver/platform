// controls.js
// /sldata GUI チューナー。単一ファイル版から機械的に分割したもの。
// classic script なのでトップレベルの var / function はグローバル。
// index.html の読み込み順に依存する。
"use strict";

ctl.px = link("pxR", "pxN", S.px, function (v) {
  S.px = v;
  draw();
});
ctl.py = link("pyR", "pyN", S.py, function (v) {
  S.py = v;
  draw();
});
ctl.pw = link("pwR", "pwN", S.pw, function (v) {
  S.pw = v;
  draw();
});
ctl.ph = link("phR", "phN", S.ph, function (v) {
  S.ph = v;
  draw();
});
ctl.n = link("nR", "nN", S.n, function (v) {
  S.n = v;
  draw();
});
ctl.bw = link("bwR", "bwN", S.bw, function (v) {
  S.bw = v;
  draw();
});
ctl.pad = link("padR", "padN", S.pad, function (v) {
  S.pad = v;
  draw();
});
ctl.gl = link("glR", "glN", S.gl, function (v) {
  S.gl = v;
  draw();
});
ctl.top = link("topR", "topN", S.top, function (v) {
  S.top = v;
  draw();
});
ctl.op = link("opR", "opN", S.op, function (v) {
  S.op = v;
  draw();
});
ctl.am = link("amR", "amN", S.axisMax, function (v) {
  S.axisMax = v;
  draw();
});
ctl.br = link("brR", "brN", S.barRatio, function (v) {
  S.barRatio = v;
  draw();
});

document.getElementById("axisMode").addEventListener("click", function (e) {
  var b = e.target.closest("button");
  if (!b) return;
  S.axisMode = b.getAttribute("data-v");
  [].forEach.call(this.querySelectorAll("button"), function (x) {
    x.setAttribute("aria-pressed", x === b ? "true" : "false");
  });
  document.getElementById("axisFixedRow").style.display =
    S.axisMode === "fixed" ? "grid" : "none";
  draw();
});
document.getElementById("tickSide").addEventListener("click", function (e) {
  var b = e.target.closest("button");
  if (!b) return;
  S.tickSide = b.getAttribute("data-v");
  [].forEach.call(this.querySelectorAll("button"), function (x) {
    x.setAttribute("aria-pressed", x === b ? "true" : "false");
  });
  draw();
});
["showTicks", "autoBw"].forEach(function (k) {
  var el = document.getElementById(k);
  el.checked = S[k];
  el.addEventListener("change", function () {
    S[k] = el.checked;
    draw();
  });
});

COLOR_KEYS.forEach(function (k) {
  var el = document.getElementById(k);
  el.value = S[k];
  // 編集は選択中のテーマ側にだけ効かせる
  el.addEventListener("input", function () {
    setThemeColor(k, el.value);
    draw();
  });
});
// 色入力の表示値を、選択中テーマのものに揃える
function syncColorInputs() {
  COLOR_KEYS.forEach(function (k) {
    var el = document.getElementById(k);
    if (el) el.value = S[k];
  });
}

// ---- テーマ切替（描画される GUI の配色）----
document.getElementById("guiTheme").addEventListener("click", function (e) {
  var b = e.target.closest("button");
  if (!b) return;
  applyTheme(b.getAttribute("data-v"));
  [].forEach.call(this.querySelectorAll("button"), function (x) {
    x.setAttribute("aria-pressed", x === b ? "true" : "false");
  });
  syncColorInputs();
  // Apple スウォッチも Light/Dark を合わせる（0=Default Light, 1=Default Dark）
  S.swVariant = S.theme === "dark" ? 1 : 0;
  var sv = document.getElementById("swVariant");
  [].forEach.call(sv.querySelectorAll("button"), function (x) {
    x.setAttribute(
      "aria-pressed",
      +x.getAttribute("data-v") === S.swVariant ? "true" : "false",
    );
  });
  if (typeof buildSwatches === "function") buildSwatches();
  draw();
});

// ---- 棒のスタイル（ベベル / フラット）----
document.getElementById("barStyle").addEventListener("click", function (e) {
  var b = e.target.closest("button");
  if (!b) return;
  S.barStyle = b.getAttribute("data-v");
  [].forEach.call(this.querySelectorAll("button"), function (x) {
    x.setAttribute("aria-pressed", x === b ? "true" : "false");
  });
  draw();
});

// ---- X軸ラベル ----
(function () {
  var t = document.getElementById("xLabelsTxt");
  t.value = S.xLabels.join(",");
  t.addEventListener("input", function () {
    S.xLabels = t.value.split(",").map(function (s) {
      return s.trim();
    });
    draw();
  });
  var c = document.getElementById("showXLabels");
  c.checked = S.showXLabels;
  c.addEventListener("change", function () {
    S.showXLabels = c.checked;
    draw();
  });
})();
ctl.xls = link("xlsR", "xlsN", S.xLabelStep, function (v) {
  S.xLabelStep = v;
  draw();
});
ctl.xlh = link("xlhR", "xlhN", S.xLabelH, function (v) {
  S.xLabelH = v;
  draw();
});

// ---------- テキスト項目 ----------
S.texts = [
  { t: "今週のいいね 41", x: 8, y: 6, s: 1, c: "#404040" },
  { t: "先週比 +6", x: 120, y: 6, s: 1, c: "#2E7D32" },
];
var listEl = document.getElementById("textList");
function renderList() {
  listEl.innerHTML = "";
  S.texts.forEach(function (it, idx) {
    var w = document.createElement("div");
    w.className = "titem";
    w.innerHTML =
      '<div class="l1"><input type="text" data-k="t" value=""><button class="xbtn" data-del="1">×</button></div>' +
      '<div class="l2">' +
      '<div><span>X</span><input type="number" data-k="x"></div>' +
      '<div><span>Y</span><input type="number" data-k="y"></div>' +
      '<div><span>倍率</span><input type="number" data-k="s" step="0.5" min="0.5" max="6"></div>' +
      '<div><span>色</span><input type="color" data-k="c"></div>' +
      "<div><span>&nbsp;</span></div>" +
      '</div><div class="meta"></div>';
    w.querySelector("[data-k=t]").value = it.t;
    w.querySelector("[data-k=x]").value = it.x;
    w.querySelector("[data-k=y]").value = it.y;
    w.querySelector("[data-k=s]").value = it.s;
    w.querySelector("[data-k=c]").value = it.c;
    w.querySelectorAll("[data-k]").forEach(function (inp) {
      inp.addEventListener("input", function () {
        var k = inp.getAttribute("data-k");
        it[k] = k === "t" || k === "c" ? inp.value : parseFloat(inp.value) || 0;
        draw();
        updateMeta(w, it);
      });
    });
    w.querySelector("[data-del]").addEventListener("click", function () {
      S.texts.splice(idx, 1);
      renderList();
      draw();
    });
    listEl.appendChild(w);
    updateMeta(w, it);
  });
}
function updateMeta(w, it) {
  var m = w.querySelector(".meta");
  var px = mcWidth(it.t, it.s),
    right = it.x + px;
  var over = right > GUI_W - 8;
  var isTitleLine = Math.round(it.y) === TITLE_Y && it.s === 1;
  var ascent = TITLE_Y + 7 - it.y;
  var lines = [];
  lines.push(
    "幅 <b>" +
      px.toFixed(0) +
      "px</b> / 右端 " +
      right.toFixed(0) +
      (over
        ? ' <span class="bad">← はみ出す（上限 ' + (GUI_W - 8) + "）</span>"
        : ""),
  );
  if (isTitleLine) lines.push("通常の Minecraft 文字でそのまま出せる");
  else
    lines.push(
      "カスタムフォントが必要 — <b>ascent = " +
        ascent +
        "</b>" +
        (it.s !== 1
          ? " / 倍率 " + it.s + "（height を " + 8 * it.s + " に）"
          : "") +
        (/[^\x00-\x7F]/.test(it.t)
          ? ' <span class="bad">・日本語は縦ずらしが困難</span>'
          : ""),
    );
  m.innerHTML = lines.join("<br>");
}
document.getElementById("addText").addEventListener("click", function () {
  S.texts.push({ t: "テキスト", x: 8, y: 20, s: 1, c: "#E6EFD8" });
  renderList();
  draw();
});
document.getElementById("presetTitle").addEventListener("click", function () {
  S.texts = [
    { t: "今週のいいね 41", x: 8, y: 6, s: 1, c: "#404040" },
    { t: "先週比 +6", x: 120, y: 6, s: 1, c: "#2E7D32" },
  ];
  renderList();
  draw();
});
renderList();
function setSegbar(id, val) {
  var el = document.getElementById(id);
  if (!el) return;
  [].forEach.call(el.querySelectorAll("button"), function (x) {
    x.setAttribute(
      "aria-pressed",
      x.getAttribute("data-v") === String(val) ? "true" : "false",
    );
  });
}
function metricValue(m) {
  return m.sample && m.sample.length ? m.sample[m.sample.length - 1] : 0;
}
function metricDelta(m) {
  if (!m.sample || m.sample.length < 2) return "+0";
  var d = m.sample[m.sample.length - 1] - m.sample[m.sample.length - 2];
  return (d >= 0 ? "+" : "") + d;
}
function formatMetricText(t, m) {
  if (!t) return "";
  return t.replace("{v}", metricValue(m)).replace("{d}", metricDelta(m));
}
function syncMetricUi(m) {
  S.metricId = m.id;
  S.chart = m.chart;
  S.n = m.n;
  S.axisMode = m.axis.mode;
  if (m.axis.mode === "fixed") S.axisMax = m.axis.max;
  S.data = m.sample.slice();
  S.xLabels = m.xLabels ? m.xLabels.slice() : [];
  S.showXLabels = !!m.xLabels && m.chart !== "hbar" && m.chart !== "donut";
  S.texts = [
    { t: formatMetricText(m.title, m), x: 8, y: 6, s: 1, c: "#404040" },
    { t: formatMetricText(m.sub, m), x: 120, y: 6, s: 1, c: "#2E7D32" },
  ].filter(function (it) {
    return it.t;
  });

  document.getElementById("chart").value = S.chart;
  document.getElementById("dataTxt").value = S.data.join(",");
  ctl.n.set(S.n);
  ctl.am.set(S.axisMax);
  setSegbar("axisMode", S.axisMode);
  document.getElementById("axisFixedRow").style.display =
    S.axisMode === "fixed" ? "grid" : "none";
  document.getElementById("showXLabels").checked = S.showXLabels;
  document.getElementById("xLabelsTxt").value = S.xLabels.join(",");
  renderList();
}
function initMetricsUi() {
  var cat = document.getElementById("metricCategory");
  var filter = document.getElementById("metricFilter");
  var sel = document.getElementById("metricSelect");
  var note = document.getElementById("metricNote");
  if (!cat || !filter || !sel || !note || !window.METRICS) return;
  var cats = ["すべて"];
  METRICS.forEach(function (m) {
    if (cats.indexOf(m.category) < 0) cats.push(m.category);
  });
  cats.forEach(function (c) {
    var o = document.createElement("option");
    o.value = c;
    o.textContent = c;
    cat.appendChild(o);
  });
  function visibleMetrics() {
    var q = filter.value.trim().toLowerCase();
    return METRICS.filter(function (m) {
      return (
        (cat.value === "すべて" || m.category === cat.value) &&
        (!q ||
          (m.name + " " + m.category + " " + m.source)
            .toLowerCase()
            .indexOf(q) >= 0)
      );
    });
  }
  function renderSelect(keep) {
    var current = keep || sel.value;
    sel.innerHTML = "";
    var blank = document.createElement("option");
    blank.value = "";
    blank.textContent = "手動設定";
    sel.appendChild(blank);
    visibleMetrics().forEach(function (m) {
      var o = document.createElement("option");
      o.value = m.id;
      o.textContent = m.no + ". " + m.name;
      sel.appendChild(o);
    });
    if (
      current &&
      [].some.call(sel.options, function (o) {
        return o.value === current;
      })
    )
      sel.value = current;
    else sel.value = "";
  }
  function showMetricNote(m) {
    if (!m) {
      note.className = "note";
      note.textContent =
        "指標を選ぶと、グラフ種別・データ数・軸・サンプル・タイトルをまとめて反映する。";
      return;
    }
    note.className = "note" + (m.feasible === "yes" ? "" : " warn");
    note.textContent = "feasible: " + m.feasible + " / " + m.source;
  }
  renderSelect("");
  showMetricNote(null);
  cat.addEventListener("change", function () {
    renderSelect(sel.value);
    showMetricNote(METRICS_BY_ID[sel.value] || null);
  });
  filter.addEventListener("input", function () {
    renderSelect(sel.value);
    showMetricNote(METRICS_BY_ID[sel.value] || null);
  });
  sel.addEventListener("change", function () {
    var m = METRICS_BY_ID[sel.value] || null;
    showMetricNote(m);
    if (m) {
      syncMetricUi(m);
      draw();
    }
  });
}
initMetricsUi();
document.getElementById("chart").addEventListener("change", function (e) {
  S.chart = e.target.value;
  draw();
});
["showSlots", "showGuide", "showInv", "showHover"].forEach(function (k) {
  var el = document.getElementById(k);
  el.addEventListener("change", function () {
    S[k] = el.checked;
    draw();
  });
});
document.getElementById("zoom").addEventListener("change", function (e) {
  setZoom(+e.target.value);
});
function setZoom(z) {
  cv.style.width = GUI_W * z + "px";
  cv.style.height = GUI_H * z + "px";
}
setZoom(3);

function snapRows(rows) {
  // 上の継ぎ目(y=16)から rows 段目の最終ピクセルまでを覆う
  var top = CY - 1,
    bottom = CY + rows * CELL - 1; // bottom は「含む」最終ピクセル
  ctl.px.set(CX);
  ctl.py.set(top);
  ctl.pw.set(COLS * CELL);
  ctl.ph.set(bottom - top + 1);
  S.px = CX;
  S.py = top;
  S.pw = COLS * CELL;
  S.ph = bottom - top + 1;
  draw();
}
document.getElementById("snap5").addEventListener("click", function () {
  snapRows(5);
});
document.getElementById("snap6").addEventListener("click", function () {
  snapRows(6);
});
document.getElementById("snapNow").addEventListener("click", function () {
  ctl.px.set(4);
  ctl.py.set(16);
  ctl.pw.set(168);
  ctl.ph.set(90);
  S.px = 4;
  S.py = 16;
  S.pw = 168;
  S.ph = 90;
  draw();
});
