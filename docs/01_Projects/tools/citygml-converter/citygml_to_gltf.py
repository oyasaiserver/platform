"""
CityGML (PLATEAU JGD2011/EPSG:6697) → GLB (binary glTF 2.0) converter

Usage:
    python citygml_to_gltf.py <file1.gml> [file2.gml ...] -o <output_stem>

Outputs:
    <output_stem>_textured.glb    – LOD2 geometry with textures
    <output_stem>_notexture.glb   – LOD2 geometry, flat grey material

Compatible with Kyoto-shi PLATEAU 2023 data (EPSG:6697, 3次メッシュ tiles).
"""

import argparse
import json
import math
import os
import struct
import sys
from pathlib import Path

from lxml import etree

# ---------------------------------------------------------------------------
# XML namespaces used by PLATEAU CityGML files
# ---------------------------------------------------------------------------
NS = {
    "core":  "http://www.opengis.net/citygml/2.0",
    "bldg":  "http://www.opengis.net/citygml/building/2.0",
    "gml":   "http://www.opengis.net/gml",
    "app":   "http://www.opengis.net/citygml/appearance/2.0",
    "xlink": "http://www.w3.org/1999/xlink",
}

# ---------------------------------------------------------------------------
# Coordinate helpers (JGD2011 geographic → local Cartesian)
# ---------------------------------------------------------------------------

def geo_to_ecef(lat_deg, lon_deg, h_m):
    """WGS84/JGD2011 geographic → ECEF (m)."""
    a  = 6_378_137.0
    f  = 1 / 298.257223563
    e2 = 2 * f - f * f
    lat = math.radians(lat_deg)
    lon = math.radians(lon_deg)
    N = a / math.sqrt(1 - e2 * math.sin(lat) ** 2)
    x = (N + h_m) * math.cos(lat) * math.cos(lon)
    y = (N + h_m) * math.cos(lat) * math.sin(lon)
    z = (N * (1 - e2) + h_m) * math.sin(lat)
    return x, y, z


def make_enu_basis(lat0, lon0):
    """Return (east, north, up) unit-vector triples for an ENU frame."""
    lat = math.radians(lat0)
    lon = math.radians(lon0)
    e = (-math.sin(lon),  math.cos(lon), 0.0)
    n = (-math.sin(lat) * math.cos(lon),
         -math.sin(lat) * math.sin(lon),
          math.cos(lat))
    u = ( math.cos(lat) * math.cos(lon),
          math.cos(lat) * math.sin(lon),
          math.sin(lat))
    return e, n, u


def geo_to_enu(lat, lon, h, origin_ecef, enu_basis):
    """Convert a geographic point to local ENU metres around the origin."""
    ex, ey, ez = geo_to_ecef(lat, lon, h)
    dx, dy, dz = ex - origin_ecef[0], ey - origin_ecef[1], ez - origin_ecef[2]
    e_v, n_v, u_v = enu_basis
    east  = dx*e_v[0] + dy*e_v[1] + dz*e_v[2]
    north = dx*n_v[0] + dy*n_v[1] + dz*n_v[2]
    up    = dx*u_v[0] + dy*u_v[1] + dz*u_v[2]
    return east, north, up


# ---------------------------------------------------------------------------
# Mesh-code east-west distance
# ---------------------------------------------------------------------------

def mesh_ew_distance_m(code_a: str, code_b: str) -> float:
    """
    Return the east-west ground distance (m) spanned by two adjacent 3rd-order
    JIS mesh codes (8-digit: AABBUVRC, AA=lat, BB=lon-100, UV=2次, R=3次row,
    C=3次col).  code_a should be the western tile, code_b the eastern tile.
    """
    ca = str(code_a).zfill(8)
    cb = str(code_b).zfill(8)
    p      = int(ca[0:2])
    q      = int(ca[2:4])
    u2_row = int(ca[4])
    v2_col = int(ca[5])
    r3_a   = int(ca[6])
    c3_a   = int(ca[7])
    c3_b   = int(cb[7])
    lat_s     = p*(2.0/3.0) + u2_row*(5.0/60.0) + r3_a*(30.0/3600.0)
    lat_mid   = lat_s + 15.0/3600.0
    lon_2nd_w = (100.0 + q) + v2_col*(7.5/60.0)
    lon_w_a   = lon_2nd_w + c3_a      *(45.0/3600.0)
    lon_e_b   = lon_2nd_w + (c3_b + 1)*(45.0/3600.0)
    lat_r = math.radians(lat_mid)
    a  = 6_378_137.0; f = 1/298.257223563; e2 = 2*f - f*f
    N  = a / math.sqrt(1 - e2*math.sin(lat_r)**2)
    return (lon_e_b - lon_w_a) * math.pi/180.0 * N * math.cos(lat_r)


# ---------------------------------------------------------------------------
# CityGML parsing
# ---------------------------------------------------------------------------

def parse_pos_list(text: str):
    vals = list(map(float, text.split()))
    if len(vals) % 3 != 0:
        return []
    return [vals[i:i+3] for i in range(0, len(vals), 3)]


def _surfaces_from_element(elem):
    """Yield (ring_coords, gml_id_or_None) for every exterior ring in elem."""
    for poly in elem.iter(f"{{{NS['gml']}}}Polygon"):
        gml_id = poly.get(f"{{{NS['gml']}}}id") or poly.get("id")
        exterior = poly.find(
            f"{{{NS['gml']}}}exterior/{{{NS['gml']}}}LinearRing")
        if exterior is None:
            continue
        pos_el = exterior.find(f"{{{NS['gml']}}}posList")
        if pos_el is not None and pos_el.text:
            coords = parse_pos_list(pos_el.text.strip())
        else:
            coords = []
            for pos in exterior.findall(f"{{{NS['gml']}}}pos"):
                if pos.text:
                    coords.append(list(map(float, pos.text.split())))
        if len(coords) >= 3:
            yield coords, gml_id


def extract_geometry(trees):
    surfaces  = []   # [(ring_coords, gml_id)]
    tex_map   = {}   # gml_id → (img_rel_path, [(u,v),...])
    base_dirs = []

    for tree, gml_path in trees:
        base_dirs.append(str(Path(gml_path).parent))
        root = tree.getroot()

        for app in root.iter(f"{{{NS['app']}}}ParameterizedTexture"):
            img_el = app.find(f"{{{NS['app']}}}imageURI")
            if img_el is None or not img_el.text:
                continue
            img_path = img_el.text.strip()
            for target in app.findall(f"{{{NS['app']}}}target"):
                uri = target.get("uri", "")
                if not uri.startswith("#"):
                    continue
                surf_id = uri[1:]
                coords_el = target.find(
                    f"{{{NS['app']}}}TexCoordList/"
                    f"{{{NS['app']}}}textureCoordinates")
                if coords_el is None or not coords_el.text:
                    continue
                uv_vals = list(map(float, coords_el.text.split()))
                uvs = [(uv_vals[i], uv_vals[i+1])
                       for i in range(0, len(uv_vals), 2)]
                tex_map[surf_id] = (img_path, uvs)

        for bldg in root.iter(f"{{{NS['bldg']}}}Building"):
            geom_found = False
            for tag in ("lod2Solid", "lod2MultiSurface"):
                container = bldg.find(f"{{{NS['bldg']}}}{tag}")
                if container is not None:
                    for c, gid in _surfaces_from_element(container):
                        surfaces.append((c, gid))
                    geom_found = True
            for bsurf in bldg.iter(f"{{{NS['bldg']}}}boundedBy"):
                for c, gid in _surfaces_from_element(bsurf):
                    surfaces.append((c, gid))
                    geom_found = True
            if not geom_found:
                container = bldg.find(f"{{{NS['bldg']}}}lod1Solid")
                if container is not None:
                    for c, gid in _surfaces_from_element(container):
                        surfaces.append((c, gid))

    return surfaces, tex_map, base_dirs


# ---------------------------------------------------------------------------
# Triangulation
# ---------------------------------------------------------------------------

def triangulate(ring_coords):
    pts = ring_coords[:-1] if (ring_coords and ring_coords[0] == ring_coords[-1]) \
          else ring_coords
    return [(pts[0], pts[i], pts[i+1]) for i in range(1, len(pts)-1)]


def compute_normal(a, b, c):
    ax, ay, az = b[0]-a[0], b[1]-a[1], b[2]-a[2]
    bx, by, bz = c[0]-a[0], c[1]-a[1], c[2]-a[2]
    nx, ny, nz = ay*bz-az*by, az*bx-ax*bz, ax*by-ay*bx
    ln = math.sqrt(nx*nx + ny*ny + nz*nz) or 1.0
    return nx/ln, ny/ln, nz/ln


# ---------------------------------------------------------------------------
# GLB builder
# ---------------------------------------------------------------------------

# Placeholder 1×1 grey PNG (used when a texture image is not found on disk)
_GREY_PNG = (
    b"\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR\x00\x00\x00\x01\x00\x00\x00\x01"
    b"\x08\x02\x00\x00\x00\x90wS\xde\x00\x00\x00\x0cIDATx\x9cc\xf8\x0f\x00"
    b"\x00\x01\x01\x00\x05\x18\xd8N\x00\x00\x00\x00IEND\xaeB`\x82"
)


def _pad4(data: bytearray, pad_byte: int = 0) -> bytearray:
    """Pad bytearray to a 4-byte boundary."""
    while len(data) % 4:
        data.append(pad_byte)
    return data


def build_glb(all_triangles, with_texture, base_dirs):
    """
    Build and return a GLB binary (bytes).

    all_triangles: list of (tri_enu_verts, normal, uv_trio_or_None, img_path_or_None)
    """
    # --- group triangles by texture key ------------------------------------
    prim_groups = {}   # key → (g_pos, g_nor, g_uv, g_idx)
    img_paths_ordered = []
    img_index_map = {}

    for tri_verts, normal, uv_trio, img_path in all_triangles:
        key = img_path if (with_texture and img_path) else "__solid__"
        if key not in prim_groups:
            prim_groups[key] = ([], [], [], [])
            if with_texture and img_path and img_path not in img_index_map:
                img_index_map[img_path] = len(img_paths_ordered)
                img_paths_ordered.append(img_path)

        g_pos, g_nor, g_uv, g_idx = prim_groups[key]
        base = len(g_pos)
        for k, v in enumerate(tri_verts):
            g_pos.append(v)
            g_nor.append(normal)
            g_uv.append(uv_trio[k] if (with_texture and uv_trio) else (0.0, 0.0))
        g_idx.extend([base, base+1, base+2])

    # --- pack geometry into BIN buffer ------------------------------------
    bin_buf   = bytearray()
    buf_views = []
    accessors = []

    def append_bv(data_bytes, target):
        raw = bytearray(data_bytes)
        offset = len(bin_buf)
        bin_buf.extend(raw)
        _pad4(bin_buf)
        bv = {"buffer": 0, "byteOffset": offset,
              "byteLength": len(raw)}
        if target is not None:
            bv["target"] = target
        buf_views.append(bv)
        return len(buf_views) - 1

    def append_accessor(bv_i, comp_type, count, acc_type, data_list=None):
        acc = {"bufferView": bv_i, "componentType": comp_type,
               "count": count, "type": acc_type}
        if acc_type == "VEC3" and data_list:
            flat = [v for pt in data_list for v in pt]
            acc["min"] = [min(flat[i::3]) for i in range(3)]
            acc["max"] = [max(flat[i::3]) for i in range(3)]
        accessors.append(acc)
        return len(accessors) - 1

    materials  = []
    mat_map    = {}
    primitives = []

    for key, (g_pos, g_nor, g_uv, g_idx) in prim_groups.items():
        if not g_idx:
            continue

        pos_bytes = struct.pack(f"{len(g_pos)*3}f", *[v for pt in g_pos for v in pt])
        bv_pos = append_bv(pos_bytes, 34962)
        acc_pos = append_accessor(bv_pos, 5126, len(g_pos), "VEC3", g_pos)

        nor_bytes = struct.pack(f"{len(g_nor)*3}f", *[v for n in g_nor for v in n])
        bv_nor = append_bv(nor_bytes, 34962)
        acc_nor = append_accessor(bv_nor, 5126, len(g_nor), "VEC3", g_nor)

        idx_bytes = struct.pack(f"{len(g_idx)}I", *g_idx)
        bv_idx = append_bv(idx_bytes, 34963)
        accessors.append({"bufferView": bv_idx, "componentType": 5125,
                           "count": len(g_idx), "type": "SCALAR"})
        acc_idx = len(accessors) - 1

        prim = {"attributes": {"POSITION": acc_pos, "NORMAL": acc_nor},
                "indices": acc_idx}

        if with_texture:
            uv_bytes = struct.pack(f"{len(g_uv)*2}f", *[v for uv in g_uv for v in uv])
            bv_uv = append_bv(uv_bytes, 34962)
            accessors.append({"bufferView": bv_uv, "componentType": 5126,
                               "count": len(g_uv), "type": "VEC2"})
            prim["attributes"]["TEXCOORD_0"] = len(accessors) - 1

        if key not in mat_map:
            mat = {"pbrMetallicRoughness": {"metallicFactor": 0.0,
                                             "roughnessFactor": 1.0}}
            if with_texture and key != "__solid__":
                img_i = img_index_map.get(key)
                if img_i is not None:
                    mat["pbrMetallicRoughness"]["baseColorTexture"] = {"index": img_i}
            else:
                mat["pbrMetallicRoughness"]["baseColorFactor"] = [0.75, 0.75, 0.78, 1.0]
            mat_map[key] = len(materials)
            materials.append(mat)

        prim["material"] = mat_map[key]
        primitives.append(prim)

    # --- pack image data into BIN buffer (after geometry) -----------------
    images_list   = []
    textures_list = []

    for img_path in img_paths_ordered:
        resolved = None
        for bd in base_dirs:
            # Normalise Windows-style separators in the path stored in the GML
            candidate = Path(bd) / Path(img_path.replace("\\", "/"))
            if candidate.exists():
                resolved = candidate
                break
        if resolved:
            raw_img = resolved.read_bytes()
            mime = ("image/jpeg"
                    if resolved.suffix.lower() in (".jpg", ".jpeg")
                    else "image/png")
        else:
            raw_img = _GREY_PNG
            mime = "image/png"

        bv_img = append_bv(raw_img, None)   # no target for image buffer views
        images_list.append({"bufferView": bv_img, "mimeType": mime})
        textures_list.append({"source": len(textures_list)})

    # --- assemble glTF JSON -----------------------------------------------
    gltf = {
        "asset": {"version": "2.0", "generator": "Antigravity CityGML converter"},
        "scene": 0,
        "scenes": [{"nodes": [0]}],
        "nodes":  [{"mesh": 0}],
        "meshes": [{"primitives": primitives}],
        "accessors":   accessors,
        "bufferViews": buf_views,
        "buffers": [{"byteLength": len(bin_buf)}],   # no uri → BIN chunk
        "materials": materials,
    }
    if images_list:
        gltf["images"]   = images_list
        gltf["textures"] = textures_list

    # --- write GLB binary -------------------------------------------------
    # JSON chunk (padded with spaces 0x20)
    json_bytes = bytearray(json.dumps(gltf, ensure_ascii=False,
                                      separators=(",", ":")).encode("utf-8"))
    _pad4(json_bytes, 0x20)

    # BIN chunk (already 4-byte aligned by append_bv)
    bin_buf_final = bytes(bin_buf)

    # Header + chunks
    json_chunk_len = len(json_bytes)
    bin_chunk_len  = len(bin_buf_final)

    total = (12                          # GLB header
             + 8 + json_chunk_len        # JSON chunk header + data
             + (8 + bin_chunk_len if bin_chunk_len else 0))  # BIN chunk

    out = bytearray()
    out += struct.pack("<III", 0x46546C67, 2, total)        # magic, version, length
    out += struct.pack("<II", json_chunk_len, 0x4E4F534A)   # JSON chunk header
    out += json_bytes
    if bin_chunk_len:
        out += struct.pack("<II", bin_chunk_len, 0x004E4942)  # BIN\0 chunk header
        out += bin_buf_final

    return bytes(out)


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(
        description="Convert PLATEAU CityGML files to GLB (binary glTF 2.0)")
    parser.add_argument("gml_files", nargs="+", help="Input .gml file(s)")
    parser.add_argument("-o", "--output", default="output",
                        help="Output file stem (default: output)")
    args = parser.parse_args()

    trees = []
    for path in args.gml_files:
        if not os.path.exists(path):
            print(f"[WARN] File not found: {path}", file=sys.stderr)
            continue
        print(f"Parsing {path} …")
        trees.append((etree.parse(path), path))

    if not trees:
        sys.exit("No valid input files found.")

    surfaces, tex_map, base_dirs = extract_geometry(trees)
    print(f"  → {len(surfaces)} surfaces extracted")

    all_lats = [c[0] for surf, _ in surfaces for c in surf]
    all_lons = [c[1] for surf, _ in surfaces for c in surf]
    lat0 = (min(all_lats) + max(all_lats)) / 2
    lon0 = (min(all_lons) + max(all_lons)) / 2
    print(f"  → ENU origin: lat={lat0:.6f}°  lon={lon0:.6f}°")

    a  = 6_378_137.0; f = 1/298.257223563; e2 = 2*f - f*f
    N  = a / math.sqrt(1 - e2*math.sin(math.radians(lat0))**2)
    ew_m = (max(all_lons)-min(all_lons)) * math.pi/180.0 * N * math.cos(math.radians(lat0))
    print(f"  → East-west extent (actual data): {ew_m:.1f} m")

    origin_ecef = geo_to_ecef(lat0, lon0, 0.0)
    enu_basis   = make_enu_basis(lat0, lon0)

    all_triangles = []
    for ring_coords, gml_id in surfaces:
        enu_ring = [geo_to_enu(c[0], c[1], c[2], origin_ecef, enu_basis)
                    for c in ring_coords]
        img_path, uvs = tex_map.get(gml_id, (None, None))
        tris    = triangulate(enu_ring)
        uv_tris = triangulate(uvs) if (uvs and len(uvs) >= len(enu_ring)) else None
        for k, tri in enumerate(tris):
            uv_tri = uv_tris[k] if (uv_tris and k < len(uv_tris)) else None
            all_triangles.append((tri, compute_normal(*tri), uv_tri, img_path))

    print(f"  → {len(all_triangles)} triangles total")

    out_tex = args.output + "_textured.glb"
    Path(out_tex).write_bytes(
        build_glb(all_triangles, with_texture=True, base_dirs=base_dirs))
    print(f"  Written: {out_tex}")

    out_notex = args.output + "_notexture.glb"
    Path(out_notex).write_bytes(
        build_glb(all_triangles, with_texture=False, base_dirs=base_dirs))
    print(f"  Written: {out_notex}")

    print("\nDone.")


if __name__ == "__main__":
    main()
