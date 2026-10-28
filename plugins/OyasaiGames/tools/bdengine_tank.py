#!/usr/bin/env python3
"""BDEngine の書き出し（datapack の create.mcfunction）を、戦車のモデルファイル（JSON）に変換する。

使い方:
  python3 bdengine_tank.py <create.mcfunction> <出力.json> --front=-x --length 6.316 [--preview 図.png]

- --front: モデルの前（砲身の向き）がどの軸か（-x / +x / -z / +z）。
- --length: 実車の車体の全長（m、砲身を除く）。モデルをこの長さへ等倍で拡大・縮小する。
- 各部品を形から 車体（HULL）・砲塔（TURRET）・砲身（BARREL）に分け、砲塔の回転中心・砲身の付け根・砲身長・座席の高さを求める。
  分け方は推定なので、--preview の色分け図（車体 灰、砲塔 青、砲身 赤）で確かめる。
  砲塔の範囲は、車体の上面から 0.3 m 以上上にある部品（天板・キューポラなど）の広がりで決める。天板が砲塔全体を覆っている前提。

出力した JSON をサーバーの plugins/OyasaiGames/tank-models/<車種>.json に置くと、その車種の見た目になる。
モデルの著作物はリポジトリに入れない（サーバーにだけ置く）。
"""

import argparse
import json
import math
import re
import struct
import zlib

ENTRY = re.compile(
    r'\{id:"minecraft:(block_display|item_display)",(.*?)transformation:\[([^\]]*)\]'
)
BLOCK = re.compile(r'block_state:\{id:"minecraft:([a-z0-9_]+)"(?:,Properties:\{([^}]*)\})?')
ITEM = re.compile(r'item:\{id:"minecraft:([a-z0-9_]+)"')
TEXTURE = re.compile(r'name:"textures",value:"([A-Za-z0-9+/=]+)"')


def parse(text):
    parts = []
    for kind, body, matrix in ENTRY.findall(text):
        values = [float(v.strip().rstrip("f")) for v in matrix.split(",")]
        part = {"kind": kind, "m": values}
        block = BLOCK.search(body)
        if kind == "block_display" and block:
            state = block.group(1)
            if block.group(2):
                props = ",".join(
                    p.replace(":", "=").replace('"', "") for p in block.group(2).split(",")
                )
                state += "[" + props + "]"
            part["block"] = "minecraft:" + state
        item = ITEM.search(body)
        if kind == "item_display" and item:
            part["item"] = item.group(1)
            texture = TEXTURE.search(body)
            if texture:
                part["texture"] = texture.group(1)
        parts.append(part)
    return parts


def mul(a, b):
    return [sum(a[r * 4 + k] * b[k * 4 + c] for k in range(4)) for r in range(4) for c in range(4)]


def translate(x, y, z):
    return [1, 0, 0, x, 0, 1, 0, y, 0, 0, 1, z, 0, 0, 0, 1]


def scale(s):
    return [s, 0, 0, 0, 0, s, 0, 0, 0, 0, s, 0, 0, 0, 0, 1]


# 前が local +z になるように Y 軸まわりに回す（Minecraft の座標は右手系、上が +y）。
ORIENT = {
    "+z": [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    "-z": [-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1],
    "-x": [0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 1],
    "+x": [0, 0, -1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
}


def corners(m, kind):
    # block_display は 0〜1 の立方体、item_display は中心が原点の -0.5〜0.5（頭や道具の大きさの近似）。
    lo, hi = (0.0, 1.0) if kind == "block_display" else (-0.5, 0.5)
    out = []
    for x in (lo, hi):
        for y in (lo, hi):
            for z in (lo, hi):
                out.append(tuple(m[r * 4] * x + m[r * 4 + 1] * y + m[r * 4 + 2] * z + m[r * 4 + 3] for r in range(3)))
    return out


def bounds(points):
    return [min(p[i] for p in points) for i in range(3)], [max(p[i] for p in points) for i in range(3)]


def classify(parts):
    """部品を HULL / TURRET / BARREL に分け、砲塔の中心・砲身の位置を返す（座標は前が +z に回した後）。"""
    boxes = [bounds(corners(p["m"], p["kind"])) for p in parts]
    lo_all, hi_all = bounds([c for b in boxes for c in b])
    height = hi_all[1] - lo_all[1]
    # 砲身: 前後に細長く（長さが太さの 3 倍超）、全高の半分より上にあるもの。
    candidates = []
    for i, (lo, hi) in enumerate(boxes):
        size = [hi[k] - lo[k] for k in range(3)]
        center = [(lo[k] + hi[k]) / 2 for k in range(3)]
        if size[2] > 0.3 and size[2] > 3 * max(size[0], size[1]) and center[1] > lo_all[1] + height * 0.5:
            candidates.append(i)
    if not candidates:
        raise SystemExit("砲身が見つからない（--front を確かめる）")
    front = max(boxes[i][1][2] for i in candidates)
    axis_x = sorted((boxes[i][0][0] + boxes[i][1][0]) / 2 for i in candidates)[len(candidates) // 2]
    axis_y = sorted((boxes[i][0][1] + boxes[i][1][1]) / 2 for i in candidates)[len(candidates) // 2]
    # 砲身の付け根: 砲口から後ろへ、砲の軸の近くの細い部品が途切れず続く所まで（砲塔後部の箱などを拾わない）。
    near_axis = []
    for i, (lo, hi) in enumerate(boxes):
        thin = max(hi[0] - lo[0], hi[1] - lo[1]) < 0.6
        near = abs((lo[0] + hi[0]) / 2 - axis_x) < 0.35 and abs((lo[1] + hi[1]) / 2 - axis_y) < 0.35
        if thin and near:
            near_axis.append(i)
    barrel = set()
    reach = front
    for i in sorted(near_axis, key=lambda j: -boxes[j][1][2]):
        if boxes[i][1][2] < reach - 0.05:
            break
        barrel.add(i)
        reach = min(reach, boxes[i][0][2])
    root_z = min(boxes[i][0][2] for i in barrel)
    rest = [i for i in range(len(parts)) if i not in barrel]
    hull_lo, hull_hi = bounds([c for i in rest for c in boxes[i]])
    hull_len = hull_hi[2] - hull_lo[2]
    # 車体の上面: 前後に車体の 85% 以上の長さで続く最も高い高さ。
    deck = lo_all[1]
    for top in sorted({boxes[i][1][1] for i in rest}):
        y = top - 1.0e-6
        z = [boxes[i] for i in rest if boxes[i][0][1] <= y <= boxes[i][1][1]]
        if z and max(b[1][2] for b in z) - min(b[0][2] for b in z) >= hull_len * 0.85:
            deck = top
    # 砲塔: 上面より上の部品のうち、上面から 0.3 m 以上上にある部品の範囲（＝砲塔本体）の中心から一定の半径に入るもの。
    upper = [i for i in rest if boxes[i][0][1] >= deck + 0.3]
    u_lo, u_hi = bounds([c for i in upper for c in boxes[i]])
    cx, cz = (u_lo[0] + u_hi[0]) / 2, (u_lo[2] + u_hi[2]) / 2
    radius = max(math.hypot(c[0] - cx, c[2] - cz) for i in upper for c in boxes[i]) + 0.1
    turret = set()
    for i in rest:
        lo, hi = boxes[i]
        if lo[1] >= deck - 0.05 and all(math.hypot(c[0] - cx, c[2] - cz) <= radius for c in (lo, hi, (lo[0], 0, hi[2]), (hi[0], 0, lo[2]))):
            turret.add(i)
    groups = ["BARREL" if i in barrel else "TURRET" if i in turret else "HULL" for i in range(len(parts))]
    turret_top = max(boxes[i][1][1] for i in turret) if turret else deck
    return groups, {
        "hull": (hull_lo, hull_hi),
        "deck": deck,
        "center": (cx, cz),
        "axis": (axis_x, axis_y),
        "root_z": root_z,
        "muzzle_z": front,
        "turret_top": turret_top,
    }


def convert(text, front, length):
    parts = parse(text)
    orient = ORIENT[front]
    for p in parts:
        p["m"] = mul(orient, p["m"])
    groups, g = classify(parts)
    hull_lo, hull_hi = g["hull"]
    s = length / (hull_hi[2] - hull_lo[2])
    # 車体の前後左右の中心を原点、地面（最も低い所）を y=0 にして実寸へ拡大する。
    origin = ((hull_lo[0] + hull_hi[0]) / 2, hull_lo[1], (hull_lo[2] + hull_hi[2]) / 2)
    to_local = mul(scale(s), translate(-origin[0], -origin[1], -origin[2]))

    def local(x, y, z):
        return [(x - origin[0]) * s, (y - origin[1]) * s, (z - origin[2]) * s]

    pivot = local(g["center"][0], g["deck"], g["center"][1])
    root = local(g["axis"][0], g["axis"][1], g["root_z"])
    gun_root = [root[k] - pivot[k] for k in range(3)]
    out_parts = []
    for p, group in zip(parts, groups):
        m = mul(to_local, p["m"])
        base = [0, 0, 0] if group == "HULL" else pivot if group == "TURRET" else [pivot[k] + gun_root[k] for k in range(3)]
        m = mul(translate(-base[0], -base[1], -base[2]), m)
        entry = {"group": group, "m": [round(v, 6) for v in m]}
        for key in ("block", "item", "texture"):
            if key in p:
                entry[key] = p[key]
        out_parts.append(entry)
    return {
        "pivot": [round(v, 4) for v in pivot],
        "gunRoot": [round(v, 4) for v in gun_root],
        "gunLength": round((g["muzzle_z"] - g["root_z"]) * s, 4),
        # 同軸機銃は砲の右 0.3 m（右は local の -x）。
        "coaxRoot": [round(gun_root[0] - 0.3, 4), round(gun_root[1], 4), round(gun_root[2] + 0.3, 4)],
        "seatY": round((g["turret_top"] - origin[1]) * s - 0.6, 4),
        "scale": round(s, 4),
        "counts": {k: groups.count(k) for k in ("HULL", "TURRET", "BARREL")},
        "parts": out_parts,
    }


def preview(model, path):
    """横と上から見た図。車体 灰、砲塔 青、砲身 赤。"""
    colors = {"HULL": (150, 150, 150), "TURRET": (60, 110, 220), "BARREL": (220, 50, 50)}
    shapes = []
    order = {"HULL": 0, "TURRET": 1, "BARREL": 2}
    for p in sorted(model["parts"], key=lambda q: order[q["group"]]):
        m = p["m"]
        if p["group"] != "HULL":
            base = model["pivot"] if p["group"] == "TURRET" else [model["pivot"][k] + model["gunRoot"][k] for k in range(3)]
            m = mul(translate(*base), m)
        shapes.append((corners(m, "block_display" if "block" in p else "item_display"), colors[p["group"]]))
    lo, hi = bounds([c for cs, _ in shapes for c in cs])
    px = 40
    panels = []
    for a, b in ((2, 1), (2, 0)):
        w, h = int((hi[a] - lo[a]) * px) + 4, int((hi[b] - lo[b]) * px) + 4
        img = [[(255, 255, 255)] * w for _ in range(h)]
        for cs, color in shapes:
            pts = [((c[a] - lo[a]) * px + 2, (hi[b] - c[b]) * px + 2) for c in cs]
            x0, x1 = int(min(p[0] for p in pts)), int(max(p[0] for p in pts)) + 1
            y0, y1 = int(min(p[1] for p in pts)), int(max(p[1] for p in pts)) + 1
            hull = convex(pts)
            for yy in range(max(0, y0), min(h, y1)):
                for xx in range(max(0, x0), min(w, x1)):
                    if inside(hull, xx + 0.5, yy + 0.5):
                        img[yy][xx] = color
        panels.append(img)
    width = max(len(p[0]) for p in panels)
    rows = []
    for img in panels:
        for row in img:
            rows.append(row + [(255, 255, 255)] * (width - len(row)))
        rows.append([(0, 0, 0)] * width)
    raw = b"".join(b"\x00" + bytes(v for px_ in row for v in px_) for row in rows)

    def chunk(kind, data):
        return struct.pack(">I", len(data)) + kind + data + struct.pack(">I", zlib.crc32(kind + data) & 0xFFFFFFFF)

    with open(path, "wb") as f:
        f.write(b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", struct.pack(">IIBBBBB", width, len(rows), 8, 2, 0, 0, 0)) + chunk(b"IDAT", zlib.compress(raw, 9)) + chunk(b"IEND", b""))


def convex(points):
    pts = sorted(set(points))
    if len(pts) < 3:
        return pts

    def cross(o, a, b):
        return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0])

    lower, upper = [], []
    for p in pts:
        while len(lower) >= 2 and cross(lower[-2], lower[-1], p) <= 0:
            lower.pop()
        lower.append(p)
    for p in reversed(pts):
        while len(upper) >= 2 and cross(upper[-2], upper[-1], p) <= 0:
            upper.pop()
        upper.append(p)
    return lower[:-1] + upper[:-1]


def inside(poly, x, y):
    result = False
    for i in range(len(poly)):
        (x1, y1), (x2, y2) = poly[i], poly[(i + 1) % len(poly)]
        if (y1 > y) != (y2 > y) and x < (x2 - x1) * (y - y1) / (y2 - y1) + x1:
            result = not result
    return result


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("source")
    parser.add_argument("output")
    parser.add_argument("--front", choices=sorted(ORIENT), required=True)
    parser.add_argument("--length", type=float, required=True)
    parser.add_argument("--preview")
    args = parser.parse_args()
    with open(args.source, encoding="utf-8") as f:
        model = convert(f.read(), args.front, args.length)
    with open(args.output, "w", encoding="utf-8") as f:
        json.dump(model, f, separators=(",", ":"))
    if args.preview:
        preview(model, args.preview)
    print(
        f"parts={len(model['parts'])} {model['counts']} scale={model['scale']} "
        f"pivot={model['pivot']} gunRoot={model['gunRoot']} gunLength={model['gunLength']} seatY={model['seatY']}"
    )


if __name__ == "__main__":
    main()
