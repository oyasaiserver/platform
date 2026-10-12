/**
 * ui.js — パネル UI 更新 + クリップボードコピー
 */

import {
  setCurrentGeometry,
  getCurrentGeometry,
  setActiveTab,
  buildPayload,
  summarize,
  syntaxHighlight,
} from "./geometry.js";

const API_BASE = "http://localhost:5001";

// DOM refs
const placeholder   = document.getElementById("placeholder");
const buildingInfo  = document.getElementById("building-info");
const metaId        = document.getElementById("meta-id");
const metaHeight    = document.getElementById("meta-height");
const metaStoreys   = document.getElementById("meta-storeys");
const sumGround     = document.getElementById("sum-ground");
const sumRoof       = document.getElementById("sum-roof");
const sumWall       = document.getElementById("sum-wall");
const jsonOutput    = document.getElementById("json-output");
const btnCopy       = document.getElementById("btn-copy");
const btnClear      = document.getElementById("btn-clear");
const commandOutput = document.getElementById("command-output");
const toast         = document.getElementById("toast");
const statusBadge   = document.getElementById("status-badge");
const coordBadge    = document.getElementById("coord-badge");
const coordText     = document.getElementById("coord-text");

let cachedCommand = null;
let cachedCommandFor = null;

// タブ
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    setActiveTab(btn.dataset.tab);
    refreshJson();
  });
});

// コマンドコピーボタン
btnCopy.addEventListener("click", async () => {
  const geom = getCurrentGeometry();
  if (!geom) return;

  if (cachedCommand && cachedCommandFor === geom.building_id) {
    const copied = await copyText(cachedCommand);
    focusCommandOutput();
    if (copied) {
      showToast(`コピーしました (${cachedCommand.length.toLocaleString()}文字)`);
    } else {
      showToast("下の欄を選択しました");
    }
    return;
  }

  btnCopy.disabled = true;
  const oldLabel = btnCopy.textContent;
  btnCopy.textContent = "生成中...";

  try {
    const res = await fetch(`${API_BASE}/api/chat_payload`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ geometry: geom }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data.error ?? `HTTP ${res.status}`);
    }
    cachedCommand = data.command;
    cachedCommandFor = geom.building_id;
    showCommandOutput(data.command);

    const copied = await copyText(data.command);
    focusCommandOutput();
    btnCopy.textContent = "📋 表示済みコマンドをコピー";
    const commandLabel = data.command_mode === "split"
      ? `${data.command_line_count.toLocaleString()}行 / 各${data.player_command_limit}文字以内`
      : `${data.command_length.toLocaleString()}文字`;
    showToast(
      copied
        ? `コピーしました (${commandLabel})`
        : "コマンドを生成しました"
    );
    const boxes = data.boxes != null
      ? `<b>${data.boxes.toLocaleString()}</b> boxes / `
      : "";
    const commandNote = data.command_mode === "split"
      ? ` / paste <b>${data.command_line_count.toLocaleString()}</b> lines`
      : "";
    setStatus(
      `Minecraft コマンド生成完了 — <b>${data.schema}</b> / ${boxes}<b>${data.columns.toLocaleString()}</b> columns / <b>${data.blocks.toLocaleString()}</b> blocks${commandNote}`
    );
  } catch (e) {
    showToast("コマンド生成に失敗しました");
    setStatus(`<span style="color:#f87171">${e.message}</span>`);
  } finally {
    if (!cachedCommand || cachedCommandFor !== geom.building_id) {
      btnCopy.textContent = oldLabel;
    }
    btnCopy.disabled = !getCurrentGeometry();
  }
});

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // フォールバック: textarea 経由
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    ta.style.top = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  }
}

function showCommandOutput(command) {
  commandOutput.value = command;
  commandOutput.style.display = "block";
}

function focusCommandOutput() {
  commandOutput.focus();
  commandOutput.select();
}

// 選択解除ボタン
btnClear.addEventListener("click", () => {
  clearSelection();
});


// ---------------------------------------------------------------------------
// 公開 API
// ---------------------------------------------------------------------------

/**
 * 建物が選択されたときにパネルを更新する。
 * @param {object} geom — サーバーから受け取った完全 LOD2 ジオメトリ
 */
export function showBuilding(geom) {
  setCurrentGeometry(geom);
  cachedCommand = null;
  cachedCommandFor = null;
  commandOutput.value = "";
  commandOutput.style.display = "none";
  btnCopy.textContent = "📋 Minecraft コマンドをコピー";

  // メタ情報
  metaId.textContent      = geom.building_id ?? "—";
  metaHeight.textContent  = geom.measured_height != null
    ? `${geom.measured_height.toFixed(1)} m` : "— m";
  metaStoreys.textContent = geom.storeys_above_ground ?? "—";

  // サーフェス数
  const s = summarize(geom);
  sumGround.textContent = s.ground;
  sumRoof.textContent   = s.roof;
  sumWall.textContent   = s.wall;

  // 表示切替
  placeholder.style.display  = "none";
  buildingInfo.style.display = "flex";
  btnCopy.disabled = false;

  refreshJson();
}

/**
 * 選択を解除してプレースホルダーに戻す。
 */
export function clearSelection() {
  setCurrentGeometry(null);
  cachedCommand = null;
  cachedCommandFor = null;
  placeholder.style.display  = "";
  buildingInfo.style.display = "none";
  btnCopy.disabled = true;
  btnCopy.textContent = "📋 Minecraft コマンドをコピー";
  commandOutput.value = "";
  commandOutput.style.display = "none";
  jsonOutput.innerHTML = "";
}

/**
 * ステータスバッジを更新する。
 * @param {string} html
 */
export function setStatus(html) {
  statusBadge.innerHTML = html;
}

/**
 * マウス座標バッジを更新する。
 * @param {number} lat
 * @param {number} lon
 */
export function setCoord(lat, lon) {
  coordBadge.style.display = "";
  coordText.textContent    = `${lat.toFixed(5)}, ${lon.toFixed(5)}`;
}

// ---------------------------------------------------------------------------
// 内部ヘルパー
// ---------------------------------------------------------------------------

function refreshJson() {
  const payload = buildPayload();
  if (!payload) {
    jsonOutput.innerHTML = "";
    return;
  }
  jsonOutput.innerHTML = syntaxHighlight(payload);
}

let _toastTimer = null;

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}
