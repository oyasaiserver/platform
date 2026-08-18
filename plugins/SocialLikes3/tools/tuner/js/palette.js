// palette.js
// /sldata GUI チューナー。単一ファイル版から機械的に分割したもの。
// classic script なのでトップレベルの var / function はグローバル。
// index.html の読み込み順に依存する。
"use strict";

// ---- Apple システムカラー（macOS 公式値, R,G,B）----
var MACOS = [
  ["Red", [255, 59, 48], [255, 69, 58], [215, 0, 21], [255, 105, 97]],
  ["Orange", [255, 149, 0], [255, 159, 10], [201, 52, 0], [255, 179, 64]],
  ["Yellow", [255, 204, 0], [255, 214, 10], [160, 90, 0], [255, 212, 38]],
  ["Green", [40, 205, 65], [50, 215, 75], [0, 125, 27], [49, 222, 75]],
  ["Mint", [0, 199, 190], [102, 212, 207], [12, 129, 123], [102, 212, 207]],
  ["Teal", [89, 173, 196], [106, 196, 220], [0, 130, 153], [93, 230, 255]],
  ["Cyan", [85, 190, 240], [90, 200, 245], [0, 113, 164], [112, 215, 255]],
  ["Blue", [0, 122, 255], [10, 132, 255], [0, 64, 221], [64, 156, 255]],
  ["Indigo", [88, 86, 214], [94, 92, 230], [54, 52, 163], [125, 122, 255]],
  ["Purple", [175, 82, 222], [191, 90, 242], [173, 68, 171], [218, 143, 255]],
  ["Pink", [255, 45, 85], [255, 55, 95], [211, 15, 69], [255, 100, 130]],
  ["Brown", [162, 132, 94], [172, 142, 104], [127, 101, 69], [181, 148, 105]],
  ["Gray", [142, 142, 147], [152, 152, 157], [105, 105, 110], [152, 152, 157]],
];
function toHex(a) {
  return (
    "#" +
    a
      .map(function (v) {
        return ("0" + v.toString(16)).slice(-2);
      })
      .join("")
  );
}
function buildSwatches() {
  var g = document.getElementById("swGrid");
  g.innerHTML = "";
  MACOS.forEach(function (row) {
    var hex = toHex(row[1 + S.swVariant]);
    var b = document.createElement("button");
    b.className = "sw";
    b.style.background = hex;
    b.type = "button";
    b.title = row[0] + " " + hex;
    b.setAttribute("aria-label", row[0] + " " + hex);
    b.addEventListener("click", function () {
      var t = document.getElementById("swTarget").value;
      if (t === "text") {
        if (S.texts[0]) {
          S.texts[0].c = hex;
          renderList();
        }
      } else {
        setThemeColor(t, hex);
        var el = document.getElementById(t);
        if (el) el.value = hex;
      }
      draw();
    });
    g.appendChild(b);
  });
}
document.getElementById("swVariant").addEventListener("click", function (e) {
  var b = e.target.closest("button");
  if (!b) return;
  S.swVariant = +b.getAttribute("data-v");
  [].forEach.call(this.querySelectorAll("button"), function (x) {
    x.setAttribute("aria-pressed", x === b ? "true" : "false");
  });
  buildSwatches();
});
buildSwatches();

document.getElementById("dataTxt").addEventListener("input", function (e) {
  var v = e.target.value
    .split(/[,\s]+/)
    .map(Number)
    .filter(function (x) {
      return !isNaN(x);
    });
  if (v.length) {
    S.data = v;
    ctl.n.set(Math.min(18, Math.max(3, v.length)));
    S.n = Math.min(18, Math.max(3, v.length));
  }
  draw();
});
["markLatest", "showTip"].forEach(function (k) {
  var el = document.getElementById(k);
  el.addEventListener("change", function () {
    S[k] = el.checked;
    draw();
  });
});
