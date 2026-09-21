// booktuner.js — 旅行ガイドブックの本UI・チェスト表示の配色を決める道具。
// ../tuner/js/mcfont.js の描画関数が参照するグローバル（ctx / MF / asciiReady / tintedAscii）をここで用意する。
"use strict";

var MF = window.MCFONT,
  ctx = null,
  asciiReady = false,
  asciiImg = new Image(),
  tintCache = {};
asciiImg.onload = function () {
  asciiReady = true;
  render();
};
asciiImg.src = MF.asciiPng;
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
  return (tintCache[color] = c);
}

// Adventure の NamedTextColor（本とアイテム名で使える 16 色）。hex も使えるので自由色も可。
var NAMED = {
  black: "#000000",
  dark_blue: "#0000AA",
  dark_green: "#00AA00",
  dark_aqua: "#00AAAA",
  dark_red: "#AA0000",
  dark_purple: "#AA00AA",
  gold: "#FFAA00",
  gray: "#AAAAAA",
  dark_gray: "#555555",
  blue: "#5555FF",
  green: "#55FF55",
  aqua: "#55FFFF",
  red: "#FF5555",
  light_purple: "#FF55FF",
  yellow: "#FFFF55",
  white: "#FFFFFF",
};

// 役割ごとの初期値 = いまの実装の見た目
var ROLES = [
  ["旅行ガイド ホーム"],
  ["title", "ガイド名", "#00AA00", 1, 0],
  ["progress", "進捗", "#00AA00", 0, 0],
  ["author", "作者", "#555555", 0, 0],
  ["nextLabel", "「Next:」の文字", "#000000", 0, 0],
  ["nextName", "Next の建築名（クリックで案内）", "#000000", 0, 0],
  ["complete", "コンプリート！", "#00AA00", 1, 0],
  ["desc", "説明文", "#000000", 0, 0],
  ["旅行ガイド 掲載建築"],
  ["heading", "見出し「掲載建築」", "#00AA00", 1, 0],
  ["entry", "建築名（クリックで案内）", "#5555FF", 0, 1],
  ["liked", "いいね済み", "#00AA00", 0, 0],
  ["unfound", "未発見", "#FFAA00", 0, 0],
  ["invalid", "案内不可", "#FF5555", 0, 0],
  ["sub", "コメント／作者の行", "#555555", 0, 0],
  ["編集ガイド"],
  ["eTitle", "編集: ガイド名", "#00AA00", 1, 0],
  ["ePublic", "公開中", "#00AA00", 0, 0],
  ["ePrivate", "非公開", "#AAAAAA", 0, 0],
  ["eButton", "ボタン（通常）", "#5555FF", 0, 1],
  ["eDanger", "ボタン（削除）", "#FF5555", 0, 1],
  ["eNote", "注記", "#AAAAAA", 0, 0],
  ["eEntry", "掲載建築名", "#000000", 0, 0],
  ["eOk", "案内可能", "#00AA00", 0, 0],
  ["eNg", "案内不可", "#FF5555", 0, 0],
  ["チェスト一覧（アイテムの名前と説明）"],
  ["cName", "ガイド名", "#FFFFFF", 0, 0],
  ["cOfficial", "★ 公式ガイド名", "#FFAA00", 0, 0],
  ["cLore", "説明の行", "#AAAAAA", 0, 0],
  ["cAction", "クリックで〜", "#55FF55", 0, 0],
  ["cPublic", "公開中", "#55FF55", 0, 0],
  ["cPrivate", "非公開", "#AAAAAA", 0, 0],
  ["hover", "ホバー表示の文字", "#FFFFFF", 0, 0],
];
// 文言（{title} {author} {n} {m} {name} は差し込み）。hover は空なら出さない
var TEXTS = [
  ["旅行ガイド"],
  ["progress", "進捗", "進捗: {n}/{m}"],
  ["author", "作者", "作者: {author}"],
  ["next", "Next の前置き", "Next: "],
  ["complete", "コンプリート", "コンプリート！"],
  ["heading", "掲載建築の見出し", "掲載建築"],
  ["liked", "いいね済み", "いいね済み"],
  ["unfound", "未発見", "未発見"],
  ["invalid", "案内不可", "案内不可（進捗対象外）"],
  ["entryAuthor", "公式ガイドの作者行", "作者: {author}"],
  ["hNext", "ホバー: Next の建築名", "クリックでこの建築へ案内"],
  ["hEntry", "ホバー: 掲載建築名", "クリックでこの建築へ案内"],
  ["編集ガイド"],
  ["eTitle", "ホームの見出し", "編集: {title}"],
  ["ePublic", "公開中", "公開中"],
  ["ePrivate", "非公開", "非公開"],
  ["bAdd", "ボタン: 追加", "建築追加モード"],
  ["bToggle", "ボタン: 公開切替（公開中のとき）", "非公開にする"],
  ["bDesc", "ボタン: 説明", "説明を書く"],
  ["bList", "ボタン: 一覧", "一覧へ"],
  ["bDelete", "ボタン: 削除", "ガイドを削除"],
  ["eNote", "注記", "次のページから掲載建築を編集できます。"],
  ["eHeading", "掲載建築の見出し", "掲載建築の編集"],
  ["eOk", "案内可能", "案内可能"],
  ["eNg", "案内不可", "案内不可（進捗対象外）"],
  ["bUp", "ボタン: 上へ", "↑"],
  ["bDown", "ボタン: 下へ", "↓"],
  ["bComment", "ボタン: コメント", "コメント"],
  ["bRemove", "ボタン: 外す", "削除"],
  ["hAdd", "ホバー: 追加", ""],
  ["hToggle", "ホバー: 公開切替", ""],
  ["hDesc", "ホバー: 説明", ""],
  ["hList", "ホバー: 一覧", ""],
  ["hDelete", "ホバー: 削除", ""],
  ["hUp", "ホバー: 上へ", ""],
  ["hDown", "ホバー: 下へ", ""],
  ["hComment", "ホバー: コメント", ""],
  ["hRemove", "ホバー: 外す", ""],
  ["チェスト一覧"],
  ["cOfficialMark", "公式の印", "★ "],
  ["cAuthor", "作者行", "作者: {author}"],
  ["cProgress", "進捗行", "進捗: {n}/{m}"],
  ["cGet", "クリック案内（/slguide）", "クリックで入手"],
  ["cPublic", "公開中", "公開中"],
  ["cPrivate", "非公開", "非公開"],
  ["cGetKey", "クリック案内（edit）", "クリックで編集キーを入手"],
];
function T(key, vars) {
  return (S.texts[key] || "").replace(/\{(\w+)\}/g, function (m, k) {
    return vars && vars[k] != null ? vars[k] : m;
  });
}

// Apple のシステムカラー。本は明るい紙なので「高コントラスト（ライト）」、
// チェストの説明は暗い背景なので「ダーク」の値を使う（tools/tuner/js/palette.js と同じ公式値）。
// 階層は label / secondaryLabel / tertiaryLabel、押せる物は tint(Blue)、破壊的操作は Red、下線と [ ] は使わない。
var PRESETS = {
  current: null,
  apple: {
    options: { brackets: false },
    roles: {
      title: ["#000000", 1],
      progress: ["#6E6E73"],
      author: ["#6E6E73"],
      nextLabel: ["#6E6E73"],
      nextName: ["#0040DD"],
      complete: ["#007D1B", 1],
      desc: ["#1D1D1F"],
      heading: ["#000000", 1],
      entry: ["#0040DD"],
      liked: ["#007D1B"],
      unfound: ["#C93400"],
      invalid: ["#D70015"],
      sub: ["#6E6E73"],
      eTitle: ["#000000", 1],
      ePublic: ["#007D1B"],
      ePrivate: ["#8E8E93"],
      eButton: ["#0040DD"],
      eDanger: ["#D70015"],
      eNote: ["#8E8E93"],
      eEntry: ["#1D1D1F"],
      eOk: ["#007D1B"],
      eNg: ["#D70015"],
      cName: ["#FFFFFF"],
      cOfficial: ["#FF9F0A"],
      cLore: ["#98989D"],
      cAction: ["#0A84FF"],
      cPublic: ["#32D74B"],
      cPrivate: ["#98989D"],
    },
  },
};
var OPTIONS = { brackets: true };
var SAMPLE = {
  title: "なじぱん",
  author: "marzipan99",
  desc: "海沿いの小さな町をめぐるガイドです。朝の港、昼の市場、夕方の灯台と、時間を変えて歩くと景色が変わります。坂道が多いので、のんびり回ってください。最後の建築はちょっと見つけにくいかも。",
  e1: "tes|いいね済み|あああ",
  e2: "tes2|未発見|あsfh",
  e3: "tes3|案内不可|",
  official: false,
};

var STORE_KEY = "sl3-booktuner-v2";
var S = defaults();
function defaults() {
  var s = {
    roles: {},
    options: Object.assign({}, OPTIONS),
    sample: Object.assign({}, SAMPLE),
    texts: {},
  };
  TEXTS.forEach(function (t) {
    if (t.length > 1) s.texts[t[0]] = t[2];
  });
  ROLES.forEach(function (r) {
    if (r.length > 1)
      s.roles[r[0]] = { color: r[2], bold: !!r[3], underline: !!r[4] };
  });
  return s;
}
try {
  var saved = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
  if (saved) {
    Object.assign(S.options, saved.options || {});
    Object.assign(S.sample, saved.sample || {});
    Object.assign(S.texts, saved.texts || {});
    Object.keys(saved.roles || {}).forEach(function (k) {
      if (S.roles[k]) Object.assign(S.roles[k], saved.roles[k]);
    });
  }
} catch (e) {}
function save() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(S));
  } catch (e) {}
}

// ---- 本の組版 ----
var PAGE_W = 114,
  LINES = 14,
  LH = 9;
// 付属フォントデータに無い記号（↑↓★ など）は近い幅で数え、ブラウザのフォントで代わりに描く
function missing(ch) {
  return (
    ch !== " " &&
    !MF.asciiAdv.hasOwnProperty(ch) &&
    !MF.uniGlyph(ch.codePointAt(0))
  );
}
function adv(ch, bold) {
  var cp = ch.codePointAt(0);
  var a = missing(ch) ? (cp >= 0x2190 && cp <= 0x21ff ? 5 : 9) : charAdv(ch);
  return a + (bold && ch !== " " ? 1 : 0);
}
// blocks: [{segs:[[text, role]], cap}] → 行の配列。行 = {runs:[{ch,x,role}], cut}
function layout(blocks) {
  var out = [];
  blocks.forEach(function (b) {
    var lines = [[]],
      x = 0;
    b.segs.forEach(function (seg) {
      var st = S.roles[seg[1]] || { bold: false };
      for (var ch of seg[0]) {
        if (ch === "\n") {
          lines.push([]);
          x = 0;
          continue;
        }
        var w = adv(ch, st.bold);
        if (x + w > PAGE_W && x > 0) {
          lines.push([]);
          x = 0;
        }
        lines[lines.length - 1].push({
          ch: ch,
          x: x,
          role: seg[1],
          w: w,
          hover: seg[2],
        });
        x += w;
      }
    });
    lines.forEach(function (l, i) {
      out.push({ runs: l, cut: b.cap != null && i >= b.cap });
    });
  });
  return out;
}

var Z = 2,
  VIEW = 3; // 内部2倍（unifont を整数ピクセルで描く）、表示は3倍
function canvasFor(parent, caption, w, h) {
  var c = document.createElement("canvas");
  c.width = w * Z;
  c.height = h * Z;
  c.style.width = w * VIEW + "px";
  if (caption == null) {
    parent.appendChild(c);
  } else {
    var f = document.createElement("figure");
    var cap = document.createElement("figcaption");
    cap.textContent = caption;
    f.appendChild(cap);
    f.appendChild(c);
    parent.appendChild(f);
  }
  ctx = c.getContext("2d");
  ctx.setTransform(Z, 0, 0, Z, 0, 0);
  ctx.imageSmoothingEnabled = false;
  return c;
}

function drawRun(r, ox, y, shadow) {
  var st = S.roles[r.role];
  if (shadow) drawGlyph(r.ch, ox + r.x + 1, y + 1, darken(st.color), st.bold);
  drawGlyph(r.ch, ox + r.x, y, st.color, st.bold);
  if (st.underline) {
    ctx.fillStyle = st.color;
    ctx.fillRect(ox + r.x - 1, y + 8, r.w + 1, 1);
  }
}
function drawGlyph(ch, x, y, color, bold) {
  if (ch === " ") return;
  if (missing(ch)) {
    ctx.fillStyle = color;
    ctx.font = "8px sans-serif";
    ctx.textBaseline = "top";
    ctx.fillText(ch, x, y);
    if (bold) ctx.fillText(ch, x + 1, y);
    return;
  }
  drawMcText(ch, x, y, 1, color);
  if (bold) drawMcText(ch, x + 1, y, 1, color);
}
function darken(hex) {
  var n = parseInt(hex.slice(1), 16);
  var r = (n >> 16) & 255,
    g = (n >> 8) & 255,
    b = n & 255;
  return "rgb(" + (r >> 2) + "," + (g >> 2) + "," + (b >> 2) + ")";
}

function drawBook(parent, caption, blocks, pageNo, pageCount) {
  var W = 146,
    H = 164,
    ox = 16,
    oy = 22;
  var cv = canvasFor(parent, caption, W, H);
  ctx.fillStyle = "#6b3f1f";
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "#FCF9ED";
  ctx.fillRect(3, 3, W - 6, H - 6);
  var ind = pageNo + "/" + pageCount + "ページ";
  drawMcText(ind, ox + PAGE_W - mcWidth(ind), 8, 1, "#000000");
  var lines = layout(blocks),
    areas = [];
  lines.forEach(function (l, i) {
    var y = oy + i * LH;
    l.runs.forEach(function (r) {
      if (r.hover && i < LINES && !l.cut)
        areas.push({
          x: ox + r.x - 1,
          y: y - 1,
          w: r.w + 1,
          h: LH,
          text: r.hover,
        });
    });
    ctx.globalAlpha = i >= LINES || l.cut ? 0.25 : 1;
    l.runs.forEach(function (r) {
      drawRun(r, ox, y, false);
    });
    ctx.globalAlpha = 1;
  });
  // 14行目の下に境界線。はみ出した行・8行を超えた説明文は薄く描く（実機では表示されない）
  ctx.fillStyle = "rgba(200,0,0,.5)";
  ctx.fillRect(ox - 4, oy + LINES * LH - 1, PAGE_W + 8, 1);
  if (
    lines.length > LINES ||
    lines.some(function (l) {
      return l.cut;
    })
  ) {
    ctx.fillStyle = "#c00";
    ctx.fillRect(W - 8, 4, 4, 4);
  }
  cv.onmousemove = function (e) {
    var b = cv.getBoundingClientRect(),
      k = W / b.width;
    var mx = (e.clientX - b.left) * k,
      my = (e.clientY - b.top) * k;
    var hit = areas.find(function (a) {
      return mx >= a.x && mx < a.x + a.w && my >= a.y && my < a.y + a.h;
    });
    cv.style.cursor = hit ? "pointer" : "default";
    showHover(hit && hit.text, e.clientX, e.clientY);
  };
  cv.onmouseleave = function () {
    showHover(null);
  };
}

// Minecraft のホバー表示（本の文字の上にマウスを置いたとき）
var hoverBox = null;
function showHover(text, cx, cy) {
  if (!hoverBox) {
    hoverBox = document.createElement("div");
    hoverBox.style.cssText = "position:fixed;pointer-events:none;z-index:10";
    document.body.appendChild(hoverBox);
  }
  if (!text) {
    hoverBox.innerHTML = "";
    hoverBox.dataset.t = "";
    return;
  }
  if (hoverBox.dataset.t !== text) {
    hoverBox.innerHTML = "";
    hoverBox.dataset.t = text;
    drawTooltip(
      hoverBox,
      null,
      text.split("\n").map(function (l) {
        return [[l, "hover"]];
      }),
    );
  }
  hoverBox.style.left = cx + 14 + "px";
  hoverBox.style.top = cy - 20 + "px";
}

function btn(key, role) {
  var label = T(key),
    hover = T("h" + key.slice(1));
  return [
    [S.options.brackets ? "[" + label + "]" : label, role, hover || null],
  ];
}
function entries() {
  return [S.sample.e1, S.sample.e2, S.sample.e3].map(function (s) {
    var p = (s || "").split("|");
    return { name: p[0] || "", state: p[1] || "未発見", comment: p[2] || "" };
  });
}
var STATE = {
  いいね済み: ["liked", "liked"],
  未発見: ["unfound", "unfound"],
  案内不可: ["invalid", "invalid"],
};

function progressVars() {
  var list = entries();
  return {
    title: S.sample.title,
    author: S.sample.author,
    n: list.filter(function (e) {
      return e.state === "いいね済み";
    }).length,
    m: list.filter(function (e) {
      return e.state !== "案内不可";
    }).length,
  };
}
function readerHome() {
  var v = progressVars();
  var next = entries().find(function (e) {
    return e.state === "未発見";
  });
  var blocks = [
    { segs: [[S.sample.title, "title"]] },
    { segs: [[T("progress", v), "progress"]] },
    { segs: [[T("author", v), "author"]] },
    {
      segs: next
        ? [
            [T("next"), "nextLabel"],
            [next.name, "nextName", T("hNext") || null],
          ]
        : [[T("complete"), "complete"]],
    },
    { segs: [["", "desc"]] },
  ];
  if (S.sample.desc) blocks.push({ segs: [[S.sample.desc, "desc"]], cap: 8 });
  return blocks;
}
function readerEntries() {
  var blocks = [{ segs: [[T("heading"), "heading"]] }];
  entries().forEach(function (e, i) {
    var st = STATE[e.state] || STATE["未発見"];
    blocks.push({
      segs: [[i + 1 + ". " + e.name, "entry", T("hEntry") || null]],
    });
    blocks.push({ segs: [[T(st[0]), st[1]]] });
    var sub = S.sample.official
      ? T("entryAuthor", { author: S.sample.author })
      : e.comment;
    if (sub) blocks.push({ segs: [[sub, "sub"]] });
    blocks.push({ segs: [["", "sub"]] });
  });
  return blocks;
}
function editorHome() {
  var v = progressVars();
  return [
    { segs: [[T("eTitle", v), "eTitle"]] },
    { segs: [[T("ePublic"), "ePublic"]] },
    { segs: [["", "eNote"]] },
    { segs: btn("bAdd", "eButton") },
    { segs: btn("bToggle", "eButton") },
    { segs: btn("bDesc", "eButton") },
    { segs: btn("bList", "eButton") },
    { segs: btn("bDelete", "eDanger") },
    { segs: [["", "eNote"]] },
    { segs: [[T("eNote"), "eNote"]] },
  ];
}
function editorEntries() {
  var blocks = [{ segs: [[T("eHeading"), "eTitle"]] }];
  var sp = [[" ", "eButton"]];
  entries().forEach(function (e, i) {
    blocks.push({ segs: [[i + 1 + ". " + e.name, "eEntry"]] });
    var ok = e.state !== "案内不可";
    blocks.push({ segs: [[ok ? T("eOk") : T("eNg"), ok ? "eOk" : "eNg"]] });
    var row = btn("bUp", "eButton").concat(sp, btn("bDown", "eButton"));
    if (!S.sample.official) row = row.concat(sp, btn("bComment", "eButton"));
    row = row.concat(sp, btn("bRemove", "eDanger"));
    blocks.push({ segs: row });
    blocks.push({ segs: [["", "eNote"]] });
  });
  return blocks;
}

// ---- チェストのアイテム説明（ツールチップ） ----
function drawTooltip(parent, caption, lines) {
  var w = 0;
  lines.forEach(function (l) {
    var lw = 0;
    l.forEach(function (seg) {
      var st = S.roles[seg[1]];
      for (var ch of seg[0]) lw += adv(ch, st.bold);
    });
    w = Math.max(w, lw);
  });
  var W = w + 8,
    H = lines.length * 10 + 8 + 2;
  canvasFor(parent, caption, W, H);
  ctx.fillStyle = "#100010";
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "#5000FF";
  ctx.fillRect(1, 1, W - 2, 1);
  ctx.fillStyle = "#28007F";
  ctx.fillRect(1, H - 2, W - 2, 1);
  lines.forEach(function (l, i) {
    var x = 4,
      y = 4 + i * 10 + (i > 0 ? 2 : 0);
    l.forEach(function (seg) {
      var st = S.roles[seg[1]];
      for (var ch of seg[0]) {
        var a = adv(ch, st.bold);
        drawRun({ ch: ch, x: x - 4, role: seg[1], w: a }, 4, y, true);
        x += a;
      }
    });
  });
}

function render() {
  var rd = document.getElementById("books-reader"),
    ed = document.getElementById("books-editor"),
    tt = document.getElementById("tooltips");
  rd.innerHTML = ed.innerHTML = tt.innerHTML = "";
  drawBook(rd, "旅行ガイド ホーム（右クリック）", readerHome(), 1, 2);
  drawBook(rd, "旅行ガイド 掲載建築", readerEntries(), 2, 2);
  drawBook(ed, "編集ガイド ホーム", editorHome(), 1, 2);
  drawBook(ed, "編集ガイド 掲載建築", editorEntries(), 2, 2);
  var t = S.sample.title,
    v = progressVars();
  drawTooltip(tt, "/slguide の一覧（個人）", [
    [[t, "cName"]],
    [[T("cAuthor", v), "cLore"]],
    [[T("cProgress", v), "cLore"]],
    [[T("cGet"), "cAction"]],
  ]);
  drawTooltip(tt, "/slguide の一覧（公式）", [
    [[T("cOfficialMark") + t, "cOfficial"]],
    [[T("cAuthor", v), "cLore"]],
    [[T("cProgress", { n: 0, m: 6 }), "cLore"]],
    [[T("cGet"), "cAction"]],
  ]);
  drawTooltip(tt, "/slguide edit の一覧（公開中）", [
    [[t, "cName"]],
    [[T("cPublic"), "cPublic"]],
    [[T("cGetKey"), "cAction"]],
  ]);
  drawTooltip(tt, "/slguide edit の一覧（非公開）", [
    [[t, "cName"]],
    [[T("cPrivate"), "cPrivate"]],
    [[T("cGetKey"), "cAction"]],
  ]);
  document.getElementById("out").textContent = JSON.stringify(
    { roles: S.roles, texts: S.texts, options: S.options },
    null,
    1,
  );
  save();
}

// ---- 操作パネル ----
function buildControls() {
  var root = document.getElementById("controls");
  root.innerHTML = "";
  var ps = document.createElement("div");
  ps.innerHTML =
    '<h2>配色プリセット</h2><div class="presets"><button data-p="current">いまの実装</button> <button data-p="apple">Apple デザイン</button></div>' +
    '<p class="note">Apple: 文字は label / secondaryLabel / tertiaryLabel の3段、押せる所は青（tint）、削除は赤、下線と [ ] は付けない。' +
    "本は明るい紙なので高コントラスト版、チェストの説明は暗い背景なのでダーク版の公式色。文言は変えない。</p>";
  ps.querySelectorAll("button").forEach(function (b) {
    b.onclick = function () {
      applyPreset(b.dataset.p);
    };
  });
  root.appendChild(ps);
  var sw = document.createElement("div");
  sw.innerHTML =
    '<h2>表示オプション</h2><label class="tg"><input type="checkbox" id="opt-br"> ボタンを [ ] で囲む</label>' +
    '<label class="tg"><input type="checkbox" id="opt-off"> 公式ガイドとして表示</label>';
  root.appendChild(sw);
  var br = sw.querySelector("#opt-br"),
    off = sw.querySelector("#opt-off");
  br.checked = S.options.brackets;
  off.checked = S.sample.official;
  br.onchange = function () {
    S.options.brackets = br.checked;
    render();
  };
  off.onchange = function () {
    S.sample.official = off.checked;
    render();
  };

  ROLES.forEach(function (r) {
    if (r.length === 1) {
      var h = document.createElement("h2");
      h.textContent = r[0];
      root.appendChild(h);
      return;
    }
    var key = r[0],
      st = S.roles[key];
    var row = document.createElement("div");
    row.className = "role";
    var sel =
      '<option value="">16色</option>' +
      Object.keys(NAMED)
        .map(function (n) {
          return (
            '<option value="' +
            NAMED[n] +
            '"' +
            (NAMED[n] === st.color.toUpperCase() ? " selected" : "") +
            ">" +
            n +
            "</option>"
          );
        })
        .join("");
    row.innerHTML =
      "<label>" +
      r[1] +
      "</label><select>" +
      sel +
      '</select><input type="color">' +
      '<span><label class="tg"><input type="checkbox" data-k="bold">太</label><label class="tg"><input type="checkbox" data-k="underline">下線</label></span>';
    var color = row.querySelector("input[type=color]"),
      s = row.querySelector("select");
    color.value = st.color.toLowerCase();
    color.oninput = function () {
      st.color = color.value.toUpperCase();
      s.value = NAMED_BY_HEX[st.color] ? st.color : "";
      render();
    };
    s.onchange = function () {
      if (s.value) {
        st.color = s.value;
        color.value = s.value.toLowerCase();
        render();
      }
    };
    row.querySelectorAll("input[type=checkbox]").forEach(function (cb) {
      cb.checked = st[cb.dataset.k];
      cb.onchange = function () {
        st[cb.dataset.k] = cb.checked;
        render();
      };
    });
    root.appendChild(row);
  });

  var sm = document.createElement("div");
  sm.className = "sample";
  sm.innerHTML =
    "<h2>サンプルの中身</h2>" +
    '<label>ガイド名</label><input data-s="title">' +
    '<label>作者</label><input data-s="author">' +
    '<label>説明文（8行を超えた分は薄く表示＝実機では切られる）</label><textarea data-s="desc" rows="5"></textarea>' +
    '<label>掲載建築1（名前|状態|コメント）状態は いいね済み／未発見／案内不可</label><input data-s="e1">' +
    '<label>掲載建築2</label><input data-s="e2"><label>掲載建築3</label><input data-s="e3">';
  sm.querySelectorAll("[data-s]").forEach(function (el) {
    el.value = S.sample[el.dataset.s];
    el.oninput = function () {
      S.sample[el.dataset.s] = el.value;
      render();
    };
  });
  root.appendChild(sm);

  var tx = document.createElement("div");
  tx.className = "sample";
  var html =
      "<h2>文言（{title} {author} {n} {m} は差し込み、ホバーは空なら出ない）</h2>",
    open = false;
  TEXTS.forEach(function (t) {
    if (t.length === 1) {
      html +=
        (open ? "</details>" : "") + "<details><summary>" + t[0] + "</summary>";
      open = true;
      return;
    }
    html += "<label>" + t[1] + '</label><input data-t="' + t[0] + '">';
  });
  tx.innerHTML = html + "</details>";
  tx.querySelectorAll("[data-t]").forEach(function (el) {
    el.value = S.texts[el.dataset.t];
    el.oninput = function () {
      S.texts[el.dataset.t] = el.value;
      render();
    };
  });
  root.appendChild(tx);
}

function applyPreset(name) {
  var d = defaults();
  var p = PRESETS[name];
  Object.keys(d.roles).forEach(function (k) {
    var v = p && p.roles[k];
    S.roles[k] = v
      ? { color: v[0], bold: !!v[1], underline: false }
      : d.roles[k];
  });
  S.options.brackets = p ? p.options.brackets : OPTIONS.brackets;
  buildControls();
  render();
}
var NAMED_BY_HEX = {};
Object.keys(NAMED).forEach(function (n) {
  NAMED_BY_HEX[NAMED[n]] = n;
});

document.getElementById("reset").onclick = function () {
  S = defaults();
  buildControls();
  render();
};
document.getElementById("copy").onclick = function () {
  var text = document.getElementById("out").textContent;
  (navigator.clipboard
    ? navigator.clipboard.writeText(text)
    : Promise.reject()
  ).then(
    function () {
      document.getElementById("copy").textContent = "コピーしました";
    },
    function () {
      window.getSelection().selectAllChildren(document.getElementById("out"));
    },
  );
};
buildControls();
render();
