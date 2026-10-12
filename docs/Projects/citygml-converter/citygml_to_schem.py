"""
CityGML (PLATEAU EPSG:6697) → Minecraft .schem voxelizer

Reads PLATEAU CityGML building tiles, voxelizes the geometry, and writes
a Sponge-format .schem file compatible with WorldEdit / Java Edition 1.20+.

Usage:
    pip install lxml numpy mcschematic
    python citygml_to_schem.py <file1.gml> [file2.gml ...] -o <name> --width 3450

Coordinate mapping  (X rotation -90°  →  ENU to Minecraft):
    Minecraft X  =  East   (ENU east, m)   × scale
    Minecraft Y  =  Up     (ENU up,   m)   × scale
    Minecraft Z  =  -North (ENU north,m)   × scale   (North = negative Z in MC)
"""

import argparse
import math
import os
import sys
from collections import defaultdict
from pathlib import Path

import mcschematic
import numpy as np
from lxml import etree

# ---------------------------------------------------------------------------
# XML namespaces
# ---------------------------------------------------------------------------
NS = {
    "bldg": "http://www.opengis.net/citygml/building/2.0",
    "gml":  "http://www.opengis.net/gml",
    "app":  "http://www.opengis.net/citygml/appearance/2.0",
}

# Block used for all building voxels
BLOCK = "minecraft:stone"

# ---------------------------------------------------------------------------
# Coordinate helpers  (JGD2011 geographic → local ENU in metres)
# ---------------------------------------------------------------------------

def geo_to_ecef(la, lo, h):
    a = 6_378_137.0; f = 1 / 298.257223563; e2 = 2*f - f*f
    la, lo = math.radians(la), math.radians(lo)
    N = a / math.sqrt(1 - e2 * math.sin(la)**2)
    return ((N+h)*math.cos(la)*math.cos(lo),
            (N+h)*math.cos(la)*math.sin(lo),
            (N*(1-e2)+h)*math.sin(la))

def make_enu(la0, lo0):
    la, lo = math.radians(la0), math.radians(lo0)
    e = (-math.sin(lo),  math.cos(lo), 0.0)
    n = (-math.sin(la)*math.cos(lo), -math.sin(la)*math.sin(lo),  math.cos(la))
    u = ( math.cos(la)*math.cos(lo),  math.cos(la)*math.sin(lo),  math.sin(la))
    return e, n, u

def geo_to_enu(la, lo, h, o_ecef, basis):
    ex, ey, ez = geo_to_ecef(la, lo, h)
    dx, dy, dz = ex-o_ecef[0], ey-o_ecef[1], ez-o_ecef[2]
    return (dx*basis[0][0]+dy*basis[0][1]+dz*basis[0][2],
            dx*basis[1][0]+dy*basis[1][1]+dz*basis[1][2],
            dx*basis[2][0]+dy*basis[2][1]+dz*basis[2][2])

# ---------------------------------------------------------------------------
# CityGML geometry extraction  (same logic as citygml_to_gltf.py)
# ---------------------------------------------------------------------------

def parse_pl(text):
    v = list(map(float, text.split()))
    return [] if len(v) % 3 else [v[i:i+3] for i in range(0, len(v), 3)]

def _polys(elem):
    for poly in elem.iter(f"{{{NS['gml']}}}Polygon"):
        ext = poly.find(f"{{{NS['gml']}}}exterior/{{{NS['gml']}}}LinearRing")
        if ext is None:
            continue
        pe = ext.find(f"{{{NS['gml']}}}posList")
        if pe is not None and pe.text:
            cs = parse_pl(pe.text.strip())
        else:
            cs = []
            for p in ext.findall(f"{{{NS['gml']}}}pos"):
                if p.text:
                    cs.append(list(map(float, p.text.split())))
        if len(cs) >= 3:
            yield cs

def extract_surfaces(trees):
    all_rings = []
    for tree, _ in trees:
        root = tree.getroot()
        for bldg in root.iter(f"{{{NS['bldg']}}}Building"):
            found = False
            for tag in ("lod2Solid", "lod2MultiSurface"):
                c = bldg.find(f"{{{NS['bldg']}}}{tag}")
                if c is not None:
                    for ring in _polys(c):
                        all_rings.append(ring)
                    found = True
            for bs in bldg.iter(f"{{{NS['bldg']}}}boundedBy"):
                for ring in _polys(bs):
                    all_rings.append(ring)
                    found = True
            if not found:
                c = bldg.find(f"{{{NS['bldg']}}}lod1Solid")
                if c is not None:
                    for ring in _polys(c):
                        all_rings.append(ring)
    return all_rings

# ---------------------------------------------------------------------------
# Triangulation
# ---------------------------------------------------------------------------

def triangulate(ring):
    pts = ring[:-1] if (len(ring) > 1 and ring[0] == ring[-1]) else ring
    return [(np.array(pts[0]), np.array(pts[i]), np.array(pts[i+1]))
            for i in range(1, len(pts)-1)]

# ---------------------------------------------------------------------------
# Surface voxelization
# ---------------------------------------------------------------------------

def voxelize_triangle(v0, v1, v2, occupied, step=0.45):
    """
    Sample the triangle surface and add (x, y, z) int tuples to `occupied`.
    step < 0.5 ensures no voxel gaps even on axis-aligned surfaces.
    """
    e1 = v1 - v0
    e2 = v2 - v0
    len1 = np.linalg.norm(e1)
    len2 = np.linalg.norm(e2)
    if len1 < 1e-6 or len2 < 1e-6:
        return
    n1 = max(int(math.ceil(len1 / step)), 2)
    n2 = max(int(math.ceil(len2 / step)), 2)
    for i in range(n1 + 1):
        u = i / n1
        for j in range(int(math.ceil(n2 * (1 - u))) + 1):
            v = j / n2
            if u + v > 1.0 + 1e-9:
                continue
            pt = v0 + u * e1 + v * e2
            occupied.add((int(math.floor(pt[0])),
                          int(math.floor(pt[1])),
                          int(math.floor(pt[2]))))

# ---------------------------------------------------------------------------
# Interior fill  (per XZ column:  fill Y between surface min and max)
# ---------------------------------------------------------------------------

def fill_columns(surface_set):
    col_y = defaultdict(lambda: [10**9, -10**9])
    for x, y, z in surface_set:
        c = col_y[(x, z)]
        if y < c[0]: c[0] = y
        if y > c[1]: c[1] = y
    filled = set()
    for (x, z), (ylo, yhi) in col_y.items():
        for y in range(ylo, yhi + 1):
            filled.add((x, y, z))
    return filled

# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    ap = argparse.ArgumentParser(
        description="Convert PLATEAU CityGML buildings to Minecraft .schem")
    ap.add_argument("gml_files", nargs="+")
    ap.add_argument("-o", "--output", default="kyoto_bldg",
                    help="Output file stem")
    ap.add_argument("--width", type=int, default=3450,
                    help="East-west width in blocks (default 3450)")
    ap.add_argument("--block", default=BLOCK,
                    help=f"Minecraft block ID (default {BLOCK})")
    args = ap.parse_args()

    # Parse GML
    trees = []
    for path in args.gml_files:
        if not os.path.exists(path):
            print(f"[WARN] not found: {path}", file=sys.stderr)
            continue
        print(f"Parsing {path} ...")
        trees.append((etree.parse(path), path))
    if not trees:
        sys.exit("No valid GML files.")

    rings = extract_surfaces(trees)
    print(f"  → {len(rings)} surface rings")

    # Bounding box in geographic coords to set ENU origin
    all_la = [c[0] for r in rings for c in r]
    all_lo = [c[1] for r in rings for c in r]
    la0 = (min(all_la) + max(all_la)) / 2
    lo0 = (min(all_lo) + max(all_lo)) / 2
    origin = geo_to_ecef(la0, lo0, 0.0)
    basis  = make_enu(la0, lo0)

    # Convert to ENU
    enu_rings = []
    for ring in rings:
        enu = [geo_to_enu(c[0], c[1], c[2], origin, basis) for c in ring]
        enu_rings.append(enu)

    # Find ENU bounding box
    all_e = [c[0] for r in enu_rings for c in r]
    all_n = [c[1] for r in enu_rings for c in r]
    all_u = [c[2] for r in enu_rings for c in r]
    min_e, max_e = min(all_e), max(all_e)
    min_n, max_n = min(all_n), max(all_n)
    min_u, max_u = min(all_u), max(all_u)
    ew_m = max_e - min_e

    scale = args.width / ew_m          # blocks per metre
    print(f"  → EW span {ew_m:.1f} m  →  scale {scale:.4f} blocks/m")
    print(f"  → Approx dimensions: "
          f"{args.width} × {int((max_u-min_u)*scale)+2} × "
          f"{int((max_n-min_n)*scale)+2} blocks (X×Y×Z)")

    # Coordinate transform:  ENU (e,n,u)  →  Minecraft (X,Y,Z) with X-rot -90°
    #   MC_X =  e * scale  -  min_e * scale          (east  →  X, starts at 0)
    #   MC_Y =  u * scale  -  min_u * scale          (up    →  Y, starts at 0)
    #   MC_Z = -n * scale  + max_n * scale            (north →  -Z; flip so south is +Z)
    def to_mc(e, n, u):
        return ((e - min_e) * scale,
                (u - min_u) * scale,
                (max_n - n) * scale)

    # Voxelize
    print("Voxelizing surfaces ...")
    surface_voxels = set()
    tri_count = 0
    for ring in enu_rings:
        tris = triangulate(ring)
        for v0, v1, v2 in tris:
            mc0 = np.array(to_mc(*v0))
            mc1 = np.array(to_mc(*v1))
            mc2 = np.array(to_mc(*v2))
            voxelize_triangle(mc0, mc1, mc2, surface_voxels)
            tri_count += 1
    print(f"  → {tri_count} triangles  →  {len(surface_voxels):,} surface voxels")

    print("Filling interiors ...")
    all_voxels = fill_columns(surface_voxels)
    del surface_voxels
    print(f"  → {len(all_voxels):,} total voxels")

    # Build schematic
    print("Building schematic ...")
    schem = mcschematic.MCSchematic()
    block_id = args.block
    for x, y, z in all_voxels:
        schem.setBlock((x, y, z), block_id)

    out_dir  = str(Path(args.output).parent)
    out_name = Path(args.output).name
    if out_dir == ".":
        out_dir = str(Path.cwd())
    schem.save(out_dir, out_name, mcschematic.Version.JE_1_20_1)
    print(f"\nDone → {args.output}.schem")


if __name__ == "__main__":
    main()
