/**
 * geometry.js — LOD2 ジオメトリ処理ユーティリティ
 *
 * citieskymine プラグインへ渡す JSON ペイロードの
 * フィルタリング・整形を担当する。
 */

/** 現在選択中の完全ジオメトリ (server から取得した生データ) */
export let currentGeometry = null;

/** 選択中建物の表示用フィルタ ("all" | "ground" | "roof" | "wall") */
let _activeTab = "all";

/**
 * サーバーから受け取った LOD2 ジオメトリを保存する。
 * @param {object|null} geom
 */
export function setCurrentGeometry(geom) {
  currentGeometry = geom;
}

/**
 * 選択中の完全ジオメトリを返す。
 * @returns {object|null}
 */
export function getCurrentGeometry() {
  return currentGeometry;
}

/**
 * アクティブタブを更新する。
 * @param {"all"|"ground"|"roof"|"wall"} tab
 */
export function setActiveTab(tab) {
  _activeTab = tab;
}

/**
 * citieskymine プラグインへ渡す JSON ペイロードを生成する。
 * タブに応じてサーフェス種別を絞り込む。
 * @returns {object|null}
 */
export function buildPayload() {
  if (!currentGeometry) return null;

  const g = currentGeometry;

  if (_activeTab === "all") {
    return g;
  }

  const base = {
    schema_version: g.schema_version,
    source:         g.source,
    building_id:    g.building_id,
    measured_height:       g.measured_height,
    storeys_above_ground:  g.storeys_above_ground,
    storeys_below_ground:  g.storeys_below_ground,
    crs: g.crs,
  };

  if (_activeTab === "ground") {
    return { ...base, ground_surfaces: g.ground_surfaces };
  }
  if (_activeTab === "roof") {
    return { ...base, roof_surfaces: g.roof_surfaces };
  }
  if (_activeTab === "wall") {
    return { ...base, wall_surfaces: g.wall_surfaces };
  }

  return g;
}

/**
 * ジオメトリのサマリー数値を返す。
 * @param {object} geom
 * @returns {{ ground: number, roof: number, wall: number }}
 */
export function summarize(geom) {
  return {
    ground: geom.ground_surfaces?.length ?? 0,
    roof:   geom.roof_surfaces?.length   ?? 0,
    wall:   geom.wall_surfaces?.length   ?? 0,
  };
}

/**
 * JSON をシンタックスハイライト付き HTML に変換する。
 * @param {object} obj
 * @returns {string} HTML 文字列
 */
export function syntaxHighlight(obj) {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(
    /("(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,
    (match) => {
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          return `<span class="k">${escHtml(match)}</span>`;
        }
        return `<span class="s">${escHtml(match)}</span>`;
      }
      if (/true|false|null/.test(match)) {
        return `<span class="b">${match}</span>`;
      }
      return `<span class="n">${match}</span>`;
    }
  );
}

function escHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/**
 * GeoJSON [lon, lat] 配列から Cesium.Cartesian3 配列に変換する。
 * (フットプリントのエンティティ生成に使用)
 */
export function ringToCartesians(ring) {
  return ring.map(([lon, lat]) =>
    Cesium.Cartesian3.fromDegrees(lon, lat)
  );
}
