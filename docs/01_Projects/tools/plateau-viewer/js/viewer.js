/**
 * viewer.js — Leaflet ベース タイル選択ビューア v2
 *
 * 起動時: 全タイル枠を地図に表示（LOD2=青、LOD1=グレー）
 * クリック: タイル枠 → 建物をロード（緑に変化）、再クリックでアンロード
 *           建物      → LOD2 詳細 JSON を右パネルへ
 *
 * v2 変更点:
 *   - 建物 Canvas レンダラを共有インスタンス化（orphan canvas 要素の増殖を防止）
 *   - タイル L.rectangle は interactive: false にして map.on("click") で一元処理
 *     → Canvas 競合によるタイルクリック不応答・ハイライト消失を解消
 */

import { showBuilding, clearSelection, setStatus, setCoord } from "./ui.js";

// ---------------------------------------------------------------------------
// 設定
// ---------------------------------------------------------------------------

const API_BASE  = "http://localhost:5001";
const INIT_VIEW = { lat: 35.008, lon: 135.759, zoom: 14 };

// ---------------------------------------------------------------------------
// タイル状態とスタイル
// ---------------------------------------------------------------------------

const TileState = Object.freeze({
  AVAILABLE_LOD2: "available_lod2",
  AVAILABLE_LOD1: "available_lod1",
  LOADING:        "loading",
  LOADED_LOD2:    "loaded_lod2",
  LOADED_LOD1:    "loaded_lod1",
});

const TILE_STYLE = {
  [TileState.AVAILABLE_LOD2]: { color: "#4f9cf9", fillOpacity: 0.05, weight: 2,   opacity: 0.85 },
  [TileState.AVAILABLE_LOD1]: { color: "#6b7280", fillOpacity: 0.02, weight: 1,   opacity: 0.45 },
  [TileState.LOADING]:        { color: "#fbbf24", fillOpacity: 0.20, weight: 3,   opacity: 1.00 },
  [TileState.LOADED_LOD2]:    { color: "#7dd3a8", fillOpacity: 0.10, weight: 2,   opacity: 0.90 },
  [TileState.LOADED_LOD1]:    { color: "#9ca3af", fillOpacity: 0.06, weight: 1.5, opacity: 0.60 },
};

const BLDG_DEFAULT  = { color: "#4f9cf9", fillOpacity: 0.25, weight: 1,   opacity: 0.70 };
const BLDG_HOVER    = { color: "#7dd3a8", fillOpacity: 0.45, weight: 1.5, opacity: 0.90 };
const BLDG_SELECTED = { color: "#f97316", fillOpacity: 0.65, weight: 2,   opacity: 1.00 };

// ---------------------------------------------------------------------------
// Leaflet 初期化
// ---------------------------------------------------------------------------

const map = L.map("cesiumContainer", {
  center:       [INIT_VIEW.lat, INIT_VIEW.lon],
  zoom:         INIT_VIEW.zoom,
  preferCanvas: true,
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
  maxZoom: 19,
}).addTo(map);

map.on("mousemove", (e) => {
  setCoord(e.latlng.lat, e.latlng.lng);

  // タイル上ならカーソルを pointer に
  let over = false;
  for (const [, tile] of tiles) {
    if (tile.bounds.contains(e.latlng)) { over = true; break; }
  }
  map.getContainer().style.cursor = over ? "pointer" : "";
});

// ---------------------------------------------------------------------------
// 共有レンダラー（1インスタンスのみ — canvas 要素の積み重ねを防止）
// ---------------------------------------------------------------------------

const buildingRenderer = L.canvas({ padding: 0.5 });

// ---------------------------------------------------------------------------
// 状態管理
// ---------------------------------------------------------------------------

/**
 * meshCode → {
 *   state, has_lod2,
 *   tileLayer:     L.Rectangle  (interactive: false, 視覚のみ),
 *   bounds:        L.LatLngBounds (hit-test 用キャッシュ),
 *   buildingLayer: L.GeoJSON | null,
 *   featureMap:    Map<gml_id, L.Layer>
 * }
 */
const tiles = new Map();

let selectedLayer = null;
let selectedGmlId = null;

// ---------------------------------------------------------------------------
// タイルスタイル適用
// ---------------------------------------------------------------------------

function _applyTileStyle(tile) {
  tile.tileLayer.setStyle(TILE_STYLE[tile.state]);
}

// ---------------------------------------------------------------------------
// タイル一覧ロード（起動時）
// ---------------------------------------------------------------------------

async function loadTileOverlay() {
  setStatus("タイル情報を取得中...");
  try {
    const res  = await fetch(`${API_BASE}/api/tiles`);
    const data = await res.json();

    for (const feat of data.features ?? []) {
      const code    = feat.id;
      const hasLod2 = feat.properties.has_lod2;
      const ring    = feat.geometry.coordinates[0]; // [[lon,lat], ...]

      const lats = ring.map(p => p[1]);
      const lons = ring.map(p => p[0]);
      const leafletBounds = L.latLngBounds(
        [Math.min(...lats), Math.min(...lons)],
        [Math.max(...lats), Math.max(...lons)]
      );

      const state = hasLod2 ? TileState.AVAILABLE_LOD2 : TileState.AVAILABLE_LOD1;

      // interactive: false → クリックは map.on("click") で一元処理
      const layer = L.rectangle(leafletBounds, {
        ...TILE_STYLE[state],
        interactive: false,
      }).addTo(map);

      tiles.set(code, {
        state,
        has_lod2:      hasLod2,
        tileLayer:     layer,
        bounds:        leafletBounds,
        buildingLayer: null,
        featureMap:    new Map(),
      });
    }

    const lod2Count = [...tiles.values()].filter(t => t.has_lod2).length;
    setStatus(
      `<b>${lod2Count}</b> LOD2 / <b>${tiles.size - lod2Count}</b> LOD1 タイル — クリックして読み込む`
    );
  } catch (e) {
    console.error("[tiles]", e);
    setStatus(`<span style="color:#f87171">バックエンド未起動 — <code>python3 server.py</code></span>`);
  }
}

// ---------------------------------------------------------------------------
// タイル建物ロード（map.on("click") から呼ばれる）
// ---------------------------------------------------------------------------

async function loadTileBuildings(code) {
  const tile = tiles.get(code);
  if (!tile || tile.state === TileState.LOADING) return;

  if (tile.state === TileState.LOADED_LOD2 || tile.state === TileState.LOADED_LOD1) {
    unloadTile(code);
    return;
  }

  tile.state = TileState.LOADING;
  _applyTileStyle(tile);
  setStatus(`タイル ${code} を読み込み中...`);

  try {
    const res  = await fetch(`${API_BASE}/api/tiles/${code}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    // 共有 buildingRenderer を使用（canvas 要素を新規作成しない）
    const geoLayer = L.geoJSON(data, {
      renderer: buildingRenderer,
      style:    () => ({ ...BLDG_DEFAULT }),
      onEachFeature(feat, layer) {
        const bid      = feat.id;
        const meshCode = feat.properties?.mesh_code ?? code;
        const lat      = feat.properties?.centroid_lat;
        const lon      = feat.properties?.centroid_lon;

        tile.featureMap.set(bid, layer);

        layer.on("mouseover", () => {
          if (layer !== selectedLayer) layer.setStyle(BLDG_HOVER);
          map.getContainer().style.cursor = "pointer";
        });
        layer.on("mouseout", () => {
          if (layer !== selectedLayer) layer.setStyle(BLDG_DEFAULT);
          map.getContainer().style.cursor = "";
        });
        layer.on("click", (e) => {
          // Canvas 内部で fakeStop が呼ばれるが明示的にも止める
          L.DomEvent.stopPropagation(e);
          selectBuilding(bid, meshCode, lat, lon, layer);
        });
      },
    }).addTo(map);

    tile.buildingLayer = geoLayer;
    tile.state = data.meta?.has_lod2 ? TileState.LOADED_LOD2 : TileState.LOADED_LOD1;
    _applyTileStyle(tile);

    const count    = tile.featureMap.size;
    const lodLabel = data.meta?.has_lod2 ? "LOD2" : "LOD1";
    setStatus(
      `タイル <b>${code}</b>: <b>${count.toLocaleString()}</b> 棟 (${lodLabel}) — 再クリックで削除`
    );
  } catch (e) {
    console.error("[tile load]", e);
    tile.state = tile.has_lod2 ? TileState.AVAILABLE_LOD2 : TileState.AVAILABLE_LOD1;
    _applyTileStyle(tile);
    setStatus(`<span style="color:#f87171">読み込み失敗: ${e.message}</span>`);
  }
}

// ---------------------------------------------------------------------------
// タイルのアンロード
// ---------------------------------------------------------------------------

function unloadTile(code) {
  const tile = tiles.get(code);
  if (!tile) return;

  if (tile.buildingLayer) {
    if (selectedGmlId && tile.featureMap.has(selectedGmlId)) {
      selectedLayer = null;
      selectedGmlId = null;
      clearSelection();
    }
    tile.buildingLayer.remove();
    tile.buildingLayer = null;
    tile.featureMap.clear();
  }

  tile.state = tile.has_lod2 ? TileState.AVAILABLE_LOD2 : TileState.AVAILABLE_LOD1;
  _applyTileStyle(tile);
  setStatus(`タイル <b>${code}</b> をアンロードしました`);
}

/** ロード済み全タイルをアンロード */
export function unloadAllTiles() {
  for (const [code, t] of tiles) {
    if (t.state === TileState.LOADED_LOD2 || t.state === TileState.LOADED_LOD1) {
      unloadTile(code);
    }
  }
}

// ---------------------------------------------------------------------------
// 建物選択
// ---------------------------------------------------------------------------

async function selectBuilding(gmlId, meshCode, lat, lon, layer) {
  if (selectedLayer && selectedLayer !== layer) {
    selectedLayer.setStyle(BLDG_DEFAULT);
  }
  selectedLayer = layer;
  selectedGmlId = gmlId;
  layer.setStyle(BLDG_SELECTED);

  setStatus("LOD2 詳細を取得中...");
  try {
    const params = new URLSearchParams({ gml_id: gmlId });
    if (meshCode) {
      params.set("mesh_code", meshCode);
    } else {
      params.set("lat", lat);
      params.set("lon", lon);
    }
    const res = await fetch(`${API_BASE}/api/building?${params}`);
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error ?? `HTTP ${res.status}`);
    }
    const geom = await res.json();
    showBuilding(geom);
    setStatus("LOD2 取得完了 — Minecraft コマンドをコピーできます");
  } catch (e) {
    console.error("[select]", e);
    setStatus(`<span style="color:#f87171">${e.message}</span>`);
    if (selectedLayer) selectedLayer.setStyle(BLDG_DEFAULT);
    selectedLayer = null;
    selectedGmlId = null;
    clearSelection();
  }
}

// ---------------------------------------------------------------------------
// マップクリック — タイル選択を一元処理
// （建物クリック時は Canvas が fakeStop するのでここに届かない）
// ---------------------------------------------------------------------------

map.on("click", (e) => {
  const latlng = e.latlng;

  // 建物の選択を解除
  if (selectedLayer) {
    selectedLayer.setStyle(BLDG_DEFAULT);
    selectedLayer = null;
    selectedGmlId = null;
    clearSelection();
  }

  // クリック座標がどのタイルに属するか調べる
  for (const [code, tile] of tiles) {
    if (!tile.bounds.contains(latlng)) continue;

    const s = tile.state;
    if (s === TileState.AVAILABLE_LOD2 || s === TileState.AVAILABLE_LOD1) {
      loadTileBuildings(code);   // 未ロード → ロード
    } else if (s === TileState.LOADED_LOD2 || s === TileState.LOADED_LOD1) {
      unloadTile(code);          // ロード済み → アンロード
    }
    // LOADING 中は無視
    return;
  }
});

// ---------------------------------------------------------------------------
// 起動
// ---------------------------------------------------------------------------

async function init() {
  setStatus("サーバー確認中...");
  try {
    const res  = await fetch(`${API_BASE}/api/status`);
    if (!res.ok) throw new Error();
    const stat = await res.json();
    if (stat.files_indexed === 0) {
      setStatus(`<span style="color:#fbbf24">データなし — ${stat.citygml_dir} に .gml が見つかりません</span>`);
      return;
    }
    await loadTileOverlay();
  } catch {
    setStatus(
      `<span style="color:#f87171">バックエンド未起動 — <code>python3 server.py</code></span>`
    );
  }
}

init();

// 全タイルをクリアボタン
document.getElementById("btn-unload-all").addEventListener("click", () => {
  clearSelection();
  unloadAllTiles();
});
