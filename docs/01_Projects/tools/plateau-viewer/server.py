"""
CitiesSkyMine Phase 1 — PLATEAU LOD2 オンデマンド バックエンド
ポート: 5001

設計:
  起動時: ファイル名からメッシュインデックスだけ構築（ファイル内容は読まない → 即座に起動）
  /api/buildings/bbox: ビューポートのbboxに重なるファイルだけ読んでフットプリント返却
  /api/building:       クリック位置のメッシュコードから1ファイルだけ読んでLOD2 JSON返却
"""

import os
import glob
import json
import math
import base64
import struct
import time
import functools
import zlib
import xml.etree.ElementTree as ET
from flask import Flask, jsonify, request, send_from_directory

import numpy as np

app = Flask(__name__, static_folder=".", static_url_path="")

APP_DIR = os.path.dirname(os.path.abspath(__file__))
# Override with CITYGML_DATASET env var or place data under ./data/
DEFAULT_CITYGML_DATASET = os.environ.get("CITYGML_DATASET", "26100_kyoto-shi_city_2023_citygml_1_op")

@app.after_request
def _cors(r):
    r.headers["Access-Control-Allow-Origin"]  = "*"
    r.headers["Access-Control-Allow-Headers"] = "Content-Type"
    r.headers["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    return r

def _parent_dirs(path: str):
    cur = os.path.abspath(path)
    while True:
        yield cur
        parent = os.path.dirname(cur)
        if parent == cur:
            return
        cur = parent


def _citygml_candidates() -> list[str]:
    candidates = [os.path.join(APP_DIR, "data")]
    for parent in _parent_dirs(APP_DIR):
        candidates.append(
            os.path.join(parent, "04_Resources", DEFAULT_CITYGML_DATASET)
        )

    seen = set()
    unique = []
    for candidate in candidates:
        norm = os.path.abspath(candidate)
        if norm not in seen:
            unique.append(norm)
            seen.add(norm)
    return unique


def _has_building_files(path: str) -> bool:
    if not os.path.isdir(path):
        return False
    pattern = os.path.join(path, "**", "*_bldg_*.gml")
    return next(glob.iglob(pattern, recursive=True), None) is not None


def _resolve_citygml_dir() -> str:
    env_dir = os.environ.get("CITYGML_DIR")
    if env_dir:
        return os.path.abspath(os.path.expanduser(env_dir))

    for candidate in _citygml_candidates():
        if _has_building_files(candidate):
            return candidate
    return os.path.join(APP_DIR, "data")


CITYGML_DIR = _resolve_citygml_dir()

MC_SCALE = float(os.environ.get("CSM_MC_SCALE", "1.5"))
LAT_TO_M = 111320.0
AXIS_CONFIDENCE_MIN = 0.35
COMMAND_PREFIX = "/csm load "
COMMAND_BLOCK_LIMIT = 65536
BASE997_MARKER = "$"
BASE997_SEPARATOR = "~"


def _base997_alphabet() -> str:
    exclude = {ord(c) for c in " \"'\\/$~"} | {0x00AD, 0x00A7}
    ranges = (
        (0x0021, 0x007E),  # ASCII printable, minus separators/fragile chars
        (0x00A1, 0x02FF),  # Latin-1, Latin Extended, IPA
        (0x0370, 0x03FF),  # Greek
        (0x1E00, 0x1EFF),  # Latin Extended Additional
    )
    chars: list[str] = []
    for start, end in ranges:
        for cp in range(start, end + 1):
            if cp in exclude:
                continue
            if 0xD800 <= cp <= 0xDFFF:
                continue
            if cp & 0xFFFF in (0xFFFE, 0xFFFF):
                continue
            chars.append(chr(cp))
            if len(chars) == 997:
                return "".join(chars)
    raise RuntimeError("Base997 alphabet を生成できません")


BASE997_ALPHABET = _base997_alphabet()

# ---------------------------------------------------------------------------
# JIS X 0410 メッシュコード計算
# ---------------------------------------------------------------------------

def latlon_to_meshcode(lat: float, lon: float) -> str:
    """緯度経度 → 8桁 3次メッシュコード（PLATEAUファイル名の先頭8文字）"""
    p  = int(lat * 1.5)
    u  = int(lon - 100)
    r1 = lat * 1.5 - p
    c1 = lon - (u + 100)
    r2 = int(r1 * 8)
    c2 = int(c1 * 8)
    r3 = int((r1 * 8 - r2) * 10)
    c3 = int((c1 * 8 - c2) * 10)
    return f"{p:02d}{u:02d}{r2}{c2}{r3}{c3}"


def meshcode_to_bounds(code: str) -> tuple[float, float, float, float]:
    """8桁メッシュコード → (lat_min, lat_max, lon_min, lon_max)"""
    p  = int(code[0:2])
    u  = int(code[2:4])
    r2 = int(code[4])
    c2 = int(code[5])
    r3 = int(code[6])
    c3 = int(code[7])
    lat_min = p / 1.5 + r2 / 12  + r3 / 120
    lon_min = 100 + u  + c2 / 8  + c3 / 80
    return lat_min, lat_min + 1/120, lon_min, lon_min + 1/80


# ---------------------------------------------------------------------------
# ファイルインデックス（起動時に構築、ファイル内容は読まない）
# ---------------------------------------------------------------------------

_index:   dict[str, str]   = {}  # meshcode → filepath
_bounds:  dict[str, tuple] = {}  # meshcode → (lat_min, lat_max, lon_min, lon_max)
_lod2_set: set[str]        = set()  # LOD2 データを持つ meshcode


def _has_lod2(filepath: str) -> bool:
    """先頭 64KB だけ読んで LOD2 サーフェス要素の有無を確認（高速）。"""
    try:
        with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
            chunk = f.read(65536)
        return "bldg:boundedBy" in chunk
    except Exception:
        return False


def build_index() -> None:
    pattern = os.path.join(CITYGML_DIR, "**", "*_bldg_*.gml")
    files = glob.glob(pattern, recursive=True)
    lod2_count = 0
    for f in files:
        code = os.path.basename(f).split("_")[0]
        if len(code) == 8 and code.isdigit():
            _index[code] = f
            _bounds[code] = meshcode_to_bounds(code)
            if _has_lod2(f):
                _lod2_set.add(code)
                lod2_count += 1
    print(
        f"[INFO] {len(_index)} ファイル（うち LOD2: {lod2_count}）をインデックス化 ({CITYGML_DIR})",
        flush=True,
    )


# ---------------------------------------------------------------------------
# CityGML パーサー（LRU キャッシュ付き、最大8ファイル保持）
# ---------------------------------------------------------------------------

NS = {
    "bldg": "http://www.opengis.net/citygml/building/2.0",
    "gml":  "http://www.opengis.net/gml",
}


def _parse_pos_list(text: str, dim: int = 3) -> list[list[float]]:
    nums = list(map(float, text.strip().split()))
    return [nums[i:i+dim] for i in range(0, len(nums) - dim + 1, dim)]


def _collect_polygons(surface_elem) -> list[dict]:
    out = []
    for poly in surface_elem.findall(".//gml:Polygon", NS):
        pl = poly.find(".//gml:posList", NS)
        if pl is not None and pl.text:
            dim = int(pl.get("srsDimension", "3"))
            coords = _parse_pos_list(pl.text, dim)
            if coords:
                out.append({
                    "polygon_id": poly.get("{http://www.opengis.net/gml}id", ""),
                    "coordinates": coords,
                })
    return out


def _surface_type(bounded_elem) -> str:
    for tag in ("GroundSurface", "RoofSurface", "WallSurface",
                "OuterFloorSurface", "ClosureSurface"):
        if bounded_elem.find(f"bldg:{tag}", NS) is not None:
            return tag
    return "Other"


def _parse_building(bldg_elem) -> dict:
    gid = bldg_elem.get("{http://www.opengis.net/gml}id", "")

    def _f(tag):
        el = bldg_elem.find(f"bldg:{tag}", NS)
        return float(el.text) if el is not None and el.text else None

    def _i(tag):
        el = bldg_elem.find(f"bldg:{tag}", NS)
        return int(el.text) if el is not None and el.text else None

    surfaces: dict[str, list] = {
        "GroundSurface": [], "RoofSurface": [],
        "WallSurface": [], "Other": [],
    }
    for bounded in bldg_elem.findall("bldg:boundedBy", NS):
        kind = _surface_type(bounded)
        inner = bounded[0] if len(bounded) else None
        if inner is None:
            continue
        polys = _collect_polygons(inner)
        bucket = kind if kind in surfaces else "Other"
        surfaces[bucket].extend(polys)

    return {
        "schema_version": "1.0",
        "source": "PLATEAU_LOD2",
        "building_id": gid,
        "measured_height":      _f("measuredHeight"),
        "storeys_above_ground": _i("storeysAboveGround"),
        "storeys_below_ground": _i("storeysBelowGround"),
        "crs": "EPSG:6697",
        "ground_surfaces": surfaces["GroundSurface"],
        "roof_surfaces":   surfaces["RoofSurface"],
        "wall_surfaces":   surfaces["WallSurface"],
        "other_surfaces":  surfaces["Other"],
    }


@functools.lru_cache(maxsize=8)
def _parse_file(filepath: str) -> dict[str, dict]:
    """ファイルをパースして {gml_id: geometry} を返す（LRUキャッシュ）。"""
    t0 = time.time()
    tree = ET.parse(filepath)
    root = tree.getroot()
    buildings = {}
    for bldg in root.findall(".//bldg:Building", NS):
        geom = _parse_building(bldg)
        buildings[geom["building_id"]] = geom
    print(f"  [LOAD] {os.path.basename(filepath)} → {len(buildings)} 棟 ({time.time()-t0:.2f}s)",
          flush=True)
    return buildings


# ---------------------------------------------------------------------------
# GeoJSON ヘルパー
# ---------------------------------------------------------------------------

def _centroid(coords: list[list[float]]) -> tuple[float, float] | None:
    if not coords:
        return None
    return sum(c[0] for c in coords) / len(coords), \
           sum(c[1] for c in coords) / len(coords)


def _to_geojson_ring(coords: list[list[float]]) -> list[list[float]]:
    """EPSG:6697 [lat, lon, alt] → GeoJSON [lon, lat]"""
    return [[c[1], c[0]] for c in coords]


def _building_to_feature(bid: str, bldg: dict, mesh_code: str = "") -> dict | None:
    gs = bldg["ground_surfaces"] or bldg["roof_surfaces"]
    if not gs:
        return None
    ring = _to_geojson_ring(gs[0]["coordinates"])
    if len(ring) < 3:
        return None
    c = _centroid(gs[0]["coordinates"])
    return {
        "type": "Feature",
        "id": bid,
        "geometry": {"type": "Polygon", "coordinates": [ring]},
        "properties": {
            "building_id": bid,
            "measured_height":      bldg["measured_height"],
            "storeys_above_ground": bldg["storeys_above_ground"],
            "centroid_lat": c[0] if c else None,
            "centroid_lon": c[1] if c else None,
            "mesh_code":    mesh_code,   # 格納元ファイルのメッシュコード（詳細取得に使用）
        },
    }


# ---------------------------------------------------------------------------
# Minecraft チャット/コマンドブロック向け縦柱ペイロード
# ---------------------------------------------------------------------------

SURFACE_KEYS = (
    (0, "ground_surfaces"),
    (1, "roof_surfaces"),
    (2, "wall_surfaces"),
    (3, "other_surfaces"),
)


def _iter_surfaces(geom: dict):
    for surface_type, key in SURFACE_KEYS:
        for surface in geom.get(key, []) or []:
            coords = surface.get("coordinates") or []
            if len(coords) >= 3:
                yield surface_type, coords


def _all_surface_points(geom: dict) -> list[list[float]]:
    return [p for _, coords in _iter_surfaces(geom) for p in coords]


def _lon_to_m(lat0: float) -> float:
    return 111320.0 * math.cos(math.radians(lat0))


def _local_meters(lat: float, lon: float, lat0: float, lon0: float) -> tuple[float, float]:
    x = (lon - lon0) * _lon_to_m(lat0)
    z = -(lat - lat0) * LAT_TO_M
    return x, z


def _geometry_origin(geom: dict) -> tuple[float, float, float]:
    points = _all_surface_points(geom)
    if not points:
        raise ValueError("有効なサーフェス頂点がありません")

    ground_points = [
        p
        for surface in geom.get("ground_surfaces", []) or []
        for p in (surface.get("coordinates") or [])
    ]
    base = ground_points or points
    lat = sum(p[0] for p in base) / len(base)
    lon = sum(p[1] for p in base) / len(base)
    alt = min(p[2] for p in points)
    return lat, lon, alt


def _detect_grid_axis(geom: dict, lat0: float, lon0: float) -> tuple[float, float]:
    """
    地面・壁の水平辺からMinecraftグリッドに合わせる主軸を推定する。
    4倍角を使うため、0/90度違いを同じグリッド方向として扱う。
    """
    sin_sum = 0.0
    cos_sum = 0.0
    weight_sum = 0.0

    for surface_type, coords in _iter_surfaces(geom):
        if surface_type not in (0, 2):
            continue
        for a, b in zip(coords, coords[1:]):
            x1, z1 = _local_meters(a[0], a[1], lat0, lon0)
            x2, z2 = _local_meters(b[0], b[1], lat0, lon0)
            dx = x2 - x1
            dz = z2 - z1
            length = math.hypot(dx, dz)
            if length < 0.5:
                continue
            dy = abs(b[2] - a[2])
            if length < 1.0 and dy > 1.0:
                continue

            angle4 = 4.0 * math.atan2(dz, dx)
            sin_sum += length * math.sin(angle4)
            cos_sum += length * math.cos(angle4)
            weight_sum += length

    if weight_sum <= 1e-9:
        return 0.0, 0.0

    theta = math.atan2(sin_sum, cos_sum) / 4.0
    confidence = math.hypot(sin_sum, cos_sum) / weight_sum
    return theta, confidence


def _transform_surfaces(geom: dict) -> tuple[list[tuple[int, list[tuple[float, float, float]]]], dict]:
    lat0, lon0, alt0 = _geometry_origin(geom)
    theta, confidence = _detect_grid_axis(geom, lat0, lon0)
    applied_theta = theta if confidence >= AXIS_CONFIDENCE_MIN else 0.0
    cos_t = math.cos(-applied_theta)
    sin_t = math.sin(-applied_theta)

    transformed = []
    for surface_type, coords in _iter_surfaces(geom):
        verts = []
        for lat, lon, alt in coords:
            mx, mz = _local_meters(lat, lon, lat0, lon0)
            rx = cos_t * mx - sin_t * mz
            rz = sin_t * mx + cos_t * mz
            y = alt - alt0
            verts.append((rx * MC_SCALE, y * MC_SCALE, rz * MC_SCALE))
        transformed.append((surface_type, verts))

    meta = {
        "scale": MC_SCALE,
        "origin": {"lat": lat0, "lon": lon0, "alt": alt0},
        "axis_confidence": confidence,
        "rotation_deg": math.degrees(applied_theta),
        "rotation_applied": abs(applied_theta) > 1e-9,
    }
    return transformed, meta


def _rasterize_polygon_3d(verts_f: list[tuple[float, float, float]]) -> set[tuple[int, int, int]]:
    if len(verts_f) < 3:
        return set()

    all_blocks = []
    v0 = np.array(verts_f[0], dtype=np.float64)

    for i in range(1, len(verts_f) - 1):
        v1 = np.array(verts_f[i], dtype=np.float64)
        v2 = np.array(verts_f[i + 1], dtype=np.float64)
        e1 = v1 - v0
        e2 = v2 - v0

        max_len = max(
            np.linalg.norm(e1),
            np.linalg.norm(e2),
            np.linalg.norm(v2 - v1),
        )
        if max_len < 1e-6:
            continue

        samples = max(int(max_len * 2.5) + 1, 2)
        si_arr = np.arange(samples + 1)
        ti_arr = np.arange(samples + 1)
        si, ti = np.meshgrid(si_arr, ti_arr)
        mask = (si + ti) <= samples
        s_vals = si[mask].astype(np.float64) / samples
        t_vals = ti[mask].astype(np.float64) / samples

        pts = v0 + s_vals[:, None] * e1 + t_vals[:, None] * e2
        blocks = np.floor(pts).astype(np.int32)
        all_blocks.append(blocks)

    if not all_blocks:
        return set()

    unique = np.unique(np.vstack(all_blocks), axis=0)
    return {(int(r[0]), int(r[1]), int(r[2])) for r in unique}


def _surfaces_to_columns(
    surfaces: list[tuple[int, list[tuple[float, float, float]]]]
) -> tuple[list[tuple[int, int, int, int]], int]:
    surface_blocks: dict[tuple[int, int, int], int] = {}
    priority = {0: 1, 1: 3, 2: 2, 3: 2}

    for surface_type, verts in surfaces:
        prio = priority.get(surface_type, 2)
        for block in _rasterize_polygon_3d(verts):
            if prio >= surface_blocks.get(block, -1):
                surface_blocks[block] = prio

    col_y: dict[tuple[int, int], list[int]] = {}
    for bx, by, bz in surface_blocks:
        col_y.setdefault((bx, bz), []).append(by)

    columns = []
    block_count = 0
    for (bx, bz), ys in col_y.items():
        y_min = min(ys)
        y_max = max(ys)
        columns.append((bx, bz, y_min, y_max))
        block_count += y_max - y_min + 1

    columns.sort()
    return columns, block_count


def _encode_varint(value: int) -> bytes:
    out = bytearray()
    while True:
        b = value & 0x7F
        value >>= 7
        if value:
            b |= 0x80
        out.append(b)
        if not value:
            return bytes(out)


def _encode_zigzag_varint(value: int) -> bytes:
    return _encode_varint((value << 1) ^ (value >> 63))


def _encode_columns(columns: list[tuple[int, int, int, int]]) -> bytes:
    """
    CMC v1:
      magic/version/scale, column_count,
      repeated delta(x), delta(z), delta(y_min), height.
    Java側はzlib展開後、この列をプレイヤー位置相対の縦柱として配置する。
    """
    out = bytearray(b"CMC\x01")
    out.extend(_encode_varint(int(round(MC_SCALE * 1000))))
    out.extend(_encode_varint(len(columns)))

    prev_x = prev_z = prev_y = 0
    for bx, bz, y_min, y_max in columns:
        out.extend(_encode_zigzag_varint(bx - prev_x))
        out.extend(_encode_zigzag_varint(bz - prev_z))
        out.extend(_encode_zigzag_varint(y_min - prev_y))
        out.extend(_encode_varint(max(0, y_max - y_min)))
        prev_x, prev_z, prev_y = bx, bz, y_min

    return bytes(out)


def _columns_to_boxes(
    columns: list[tuple[int, int, int, int]]
) -> tuple[list[tuple[int, int, int, int, int, int]], int]:
    """
    CMB用の直方体分解。
    columns の (x, z, y_min, y_max) を、同じ y/height を持つXZ矩形へまとめる。
    返却boxは (x, z, width, depth, y_min, height)。
    """
    groups: dict[tuple[int, int], set[tuple[int, int]]] = {}
    for bx, bz, y_min, y_max in columns:
        height = max(0, y_max - y_min)
        groups.setdefault((y_min, height), set()).add((bx, bz))

    boxes: list[tuple[int, int, int, int, int, int]] = []
    for (y_min, height), cells_in_group in groups.items():
        cells = set(cells_in_group)
        while cells:
            x0, z0 = min(cells)

            width = 1
            while (x0 + width, z0) in cells:
                width += 1

            depth = 1
            while all((x, z0 + depth) in cells for x in range(x0, x0 + width)):
                depth += 1

            for x in range(x0, x0 + width):
                for z in range(z0, z0 + depth):
                    cells.remove((x, z))

            boxes.append((x0, z0, width, depth, y_min, height))

    boxes.sort(key=lambda b: (b[4], b[5], b[0], b[1], b[2], b[3]))
    covered_columns = sum(width * depth for _, _, width, depth, _, _ in boxes)
    return boxes, covered_columns


def _encode_boxes(boxes: list[tuple[int, int, int, int, int, int]]) -> bytes:
    """
    CMB v1:
      magic/version/scale, box_count,
      repeated delta(x), delta(z), delta(y_min), width, depth, height.
    Java側はboxを縦柱へ展開して既存配置処理に渡す。
    """
    out = bytearray(b"CMB\x01")
    out.extend(_encode_varint(int(round(MC_SCALE * 1000))))
    out.extend(_encode_varint(len(boxes)))

    prev_x = prev_z = prev_y = 0
    for bx, bz, width, depth, y_min, height in boxes:
        out.extend(_encode_zigzag_varint(bx - prev_x))
        out.extend(_encode_zigzag_varint(bz - prev_z))
        out.extend(_encode_zigzag_varint(y_min - prev_y))
        out.extend(_encode_varint(width))
        out.extend(_encode_varint(depth))
        out.extend(_encode_varint(height))
        prev_x, prev_z, prev_y = bx, bz, y_min

    return bytes(out)


def _encode_base997(data: bytes) -> str:
    if not data:
        return f"{BASE997_MARKER}0{BASE997_SEPARATOR}"

    value = int.from_bytes(data, "big", signed=False)
    base = len(BASE997_ALPHABET)
    digits = []
    while value:
        value, rem = divmod(value, base)
        digits.append(BASE997_ALPHABET[rem])

    encoded = "".join(reversed(digits)) or BASE997_ALPHABET[0]
    return f"{BASE997_MARKER}{len(data)}{BASE997_SEPARATOR}{encoded}"


def _build_chat_payload(geom: dict) -> dict:
    surfaces, transform_meta = _transform_surfaces(geom)
    if not surfaces:
        raise ValueError("変換可能なサーフェスがありません")

    columns, block_count = _surfaces_to_columns(surfaces)
    if not columns:
        raise ValueError("ブロック化できるサーフェスがありません")

    boxes, covered_columns = _columns_to_boxes(columns)

    cmb_binary = _encode_boxes(boxes)
    cmc_binary = _encode_columns(columns)
    cmb_compressed = zlib.compress(cmb_binary, 9)
    cmc_compressed = zlib.compress(cmc_binary, 9)

    candidates = {
        "CMB": {
            "binary": cmb_binary,
            "compressed": cmb_compressed,
            "payload": _encode_base997(cmb_compressed),
        },
        "CMC": {
            "binary": cmc_binary,
            "compressed": cmc_compressed,
            "payload": _encode_base997(cmc_compressed),
        },
    }
    selected_schema = min(candidates, key=lambda key: len(candidates[key]["payload"]))
    selected = candidates[selected_schema]

    binary = selected["binary"]
    compressed = selected["compressed"]
    payload = selected["payload"]
    payload64 = base64.urlsafe_b64encode(compressed).rstrip(b"=").decode("ascii")
    command = f"{COMMAND_PREFIX}{payload}"
    command64 = f"{COMMAND_PREFIX}{payload64}"
    command_length = len(command)

    return {
        "schema": selected_schema,
        "version": 1,
        "encoding": "base997",
        "command": command,
        "command64": command64,
        "payload": payload,
        "payload64": payload64,
        "command_length": command_length,
        "command64_length": len(command64),
        "fits_command_block": command_length <= COMMAND_BLOCK_LIMIT,
        "limit": COMMAND_BLOCK_LIMIT,
        "columns": len(columns),
        "boxes": len(boxes),
        "covered_columns": covered_columns,
        "blocks": block_count,
        "binary_bytes": len(binary),
        "compressed_bytes": len(compressed),
        "candidate_schemas": {
            name: {
                "binary_bytes": len(candidate["binary"]),
                "compressed_bytes": len(candidate["compressed"]),
                "payload_chars": len(candidate["payload"]),
                "command_chars": len(COMMAND_PREFIX) + len(candidate["payload"]),
            }
            for name, candidate in candidates.items()
        },
        "payload_chars": len(payload),
        "surfaces": len(surfaces),
        "transform": transform_meta,
    }


# ---------------------------------------------------------------------------
# API エンドポイント
# ---------------------------------------------------------------------------

@app.route("/")
def index():
    return send_from_directory(".", "index.html")


@app.route("/api/tiles")
def api_tiles():
    """
    全タイルの境界枠を GeoJSON で返す。
    LOD2 があるタイルは has_lod2=true。
    """
    features = []
    for code, (la, lb, lo, lp) in _bounds.items():
        # GeoJSON ring: [lon, lat] 時計回り
        ring = [[lo, la], [lp, la], [lp, lb], [lo, lb], [lo, la]]
        features.append({
            "type": "Feature",
            "id": code,
            "geometry": {"type": "Polygon", "coordinates": [ring]},
            "properties": {
                "mesh_code": code,
                "has_lod2":  code in _lod2_set,
            },
        })
    return jsonify({"type": "FeatureCollection", "features": features})


@app.route("/api/tiles/<code>")
def api_tile_buildings(code):
    """
    指定タイルの全建物フットプリントを返す（1ファイル分）。
    citieskymine のタイル単位ロードに使用。
    """
    filepath = _index.get(code)
    if not filepath:
        return jsonify({"error": f"タイル {code} が見つかりません"}), 404

    try:
        buildings = _parse_file(filepath)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

    features = []
    has_lod2 = False
    for bid, bldg in buildings.items():
        if bldg["roof_surfaces"] or bldg["wall_surfaces"]:
            has_lod2 = True
        feat = _building_to_feature(bid, bldg, mesh_code=code)
        if feat:
            features.append(feat)

    return jsonify({
        "type": "FeatureCollection",
        "features": features,
        "meta": {
            "mesh_code": code,
            "count":     len(features),
            "has_lod2":  has_lod2,
        },
    })


@app.route("/api/status")
def api_status():
    info = _parse_file.cache_info()
    return jsonify({
        "ready":        True,
        "files_indexed": len(_index),
        "citygml_dir":  CITYGML_DIR,
        "cache": {
            "hits":    info.hits,
            "misses":  info.misses,
            "cached":  info.currsize,
            "maxsize": info.maxsize,
        },
    })


@app.route("/api/buildings/bbox")
def api_buildings_bbox():
    """
    ビューポートのbboxに重なるメッシュファイルだけを読んでフットプリントを返す。
    クエリ: ?south=&north=&west=&east=
    """
    try:
        south = float(request.args["south"])
        north = float(request.args["north"])
        west  = float(request.args["west"])
        east  = float(request.args["east"])
    except (KeyError, ValueError):
        return jsonify({"error": "south/north/west/east が必要です"}), 400

    features = []
    loaded_files = 0

    for code, (la, lb, lo, lp) in _bounds.items():
        # bbox overlap check
        if lb < south or la > north or lp < west or lo > east:
            continue
        filepath = _index[code]
        try:
            buildings = _parse_file(filepath)
        except Exception as e:
            print(f"  [WARN] {filepath}: {e}", flush=True)
            continue
        loaded_files += 1
        for bid, bldg in buildings.items():
            feat = _building_to_feature(bid, bldg, mesh_code=code)
            if feat:
                c = feat["properties"]["centroid_lat"], feat["properties"]["centroid_lon"]
                # センサス centroid が bbox 内のものだけ返す（境界ファイルの重複回避）
                if c[0] and south <= c[0] <= north and west <= c[1] <= east:
                    features.append(feat)

    return jsonify({
        "type": "FeatureCollection",
        "features": features,
        "meta": {"files_loaded": loaded_files, "count": len(features)},
    })


@app.route("/api/building")
def api_building():
    """
    クリックした建物の完全 LOD2 ジオメトリを返す。
    クエリ: ?gml_id=  かつ  ?mesh_code=  (bboxレスポンスのpropertyを使う・推奨)
            または  ?gml_id= &lat= &lon=  (フォールバック)
    citieskymine プラグインへのクリップボードペイロード。
    """
    gml_id = request.args.get("gml_id", "")
    if not gml_id:
        return jsonify({"error": "gml_id が必要です"}), 400

    # ── mesh_code が直接渡された場合（最速・確実）
    direct_code = request.args.get("mesh_code", "")
    if direct_code and direct_code in _index:
        try:
            buildings = _parse_file(_index[direct_code])
            bldg = buildings.get(gml_id)
            if bldg:
                return jsonify(bldg)
        except Exception as e:
            return jsonify({"error": f"ファイル読み込み失敗: {e}"}), 500

    # ── lat/lon から meshcode を計算（フォールバック）
    try:
        lat = float(request.args["lat"])
        lon = float(request.args["lon"])
    except (KeyError, ValueError):
        return jsonify({"error": "mesh_code または lat/lon が必要です"}), 400

    # 計算したコード + 隣接8コードを探索（境界誤差対策）
    base_code = latlon_to_meshcode(lat, lon)
    candidates = [base_code]
    for dr in (-1, 0, 1):
        for dc in (-1, 0, 1):
            if dr == 0 and dc == 0:
                continue
            adj = latlon_to_meshcode(lat + dr * (1/120), lon + dc * (1/80))
            if adj not in candidates:
                candidates.append(adj)

    for code in candidates:
        fp = _index.get(code)
        if not fp:
            continue
        try:
            buildings = _parse_file(fp)
            bldg = buildings.get(gml_id)
            if bldg:
                return jsonify(bldg)
        except Exception:
            continue

    return jsonify({
        "error": f"建物 '{gml_id}' が見つかりません",
        "tried_codes": candidates,
        "hint": f"CITYGML_DIR={CITYGML_DIR} にこのエリアのデータがない可能性があります",
    }), 404


@app.route("/api/chat_payload", methods=["POST"])
def api_chat_payload():
    """
    LOD2 JSON 1棟分を、Minecraftコマンドブロックに貼る単一コマンドへ変換する。
    サーバー側HTTP取得を使わないため、返却値の command だけで復元可能にする。
    """
    body = request.get_json(silent=True) or {}
    geom = body.get("geometry", body)
    if not isinstance(geom, dict):
        return jsonify({"error": "JSON geometry が必要です"}), 400

    try:
        result = _build_chat_payload(geom)
    except Exception as e:
        return jsonify({"error": str(e)}), 400

    if not result["fits_command_block"]:
        return jsonify({
            "error": "生成コマンドがコマンドブロック上限を超えました",
            **{k: v for k, v in result.items() if k != "command"},
        }), 413

    return jsonify(result)


# ---------------------------------------------------------------------------
# エントリーポイント
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    print("=" * 60)
    print("  CitiesSkyMine Phase 2 — PLATEAU LOD2 バックエンド")
    print(f"  CityGML dir : {CITYGML_DIR}")
    print("  URL         : http://localhost:5001")
    print("  モード      : オンデマンド + CMB payload 生成")
    print("=" * 60, flush=True)
    build_index()
    app.run(host="0.0.0.0", port=5001, debug=False)
