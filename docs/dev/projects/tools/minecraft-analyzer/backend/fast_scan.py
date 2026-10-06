#!/usr/bin/env python3
"""
Fast multiprocessing command block scanner with correct block type detection.
Block type (impulse/chain/repeating) is stored in block state data, not entity NBT.
"""
import sys, os, struct, zlib, gzip, io, csv, time
from pathlib import Path
from multiprocessing import Pool, cpu_count
from collections import Counter

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import nbtlib

SECTOR = 4096
HEAVY = ["execute","fill","clone","summon","tp","teleport","particle","effect","forceload","spreadplayers"]

def _assess(btype, auto, cmd):
    c = cmd.lower().strip()
    if btype == "repeating" and auto:
        return "critical" if any(c.startswith(h) for h in HEAVY) else "high"
    if btype == "repeating" or (btype == "chain" and auto):
        return "medium"
    return "low"

def _decode_block_at(sections, bx, by, bz):
    """Return the block name at absolute coordinates (bx, by, bz) by reading sections."""
    # Local coords within chunk
    lx = bx & 0xF   # bx % 16
    lz = bz & 0xF
    section_y = by >> 4  # by // 16

    for sec in sections:
        sy = int(sec.get("Y", sec.get("y", 0)))
        if sy != section_y:
            continue
        bs = sec.get("block_states", {})
        if not bs:
            bs = sec  # older format: section itself has Palette/BlockStates
        palette_tag = bs.get("palette") or sec.get("Palette")
        data_tag = bs.get("data") or sec.get("BlockStates")
        if palette_tag is None:
            return None
        palette = [str(e.get("Name","")) for e in palette_tag]
        if len(palette) == 1:
            return palette[0]
        if data_tag is None:
            return None
        ly = by & 0xF
        block_idx = ly * 256 + lz * 16 + lx
        bits = max(4, (len(palette)-1).bit_length())
        per_long = 64 // bits
        long_idx = block_idx // per_long
        bit_off = (block_idx % per_long) * bits
        if long_idx >= len(data_tag):
            return None
        lv = int(data_tag[long_idx])
        if lv < 0:
            lv += (1 << 64)
        pidx = (lv >> bit_off) & ((1 << bits) - 1)
        if pidx < len(palette):
            return palette[pidx]
    return None

def scan_one_mca(args):
    mca_path, world_name = args
    found = []
    try:
        with open(mca_path, "rb") as f:
            header = f.read(8192)
            if len(header) < 8192: return found
            for i in range(1024):
                entry = struct.unpack_from(">I", header, i*4)[0]
                so = entry >> 8; sc = entry & 0xFF
                if so == 0 or sc == 0: continue
                f.seek(so * SECTOR)
                lb = f.read(4)
                if len(lb) < 4: continue
                dl = struct.unpack(">I", lb)[0]
                if dl <= 1: continue
                cb = f.read(1)
                if len(cb) < 1: continue
                comp = struct.unpack("B", cb)[0]
                data = f.read(dl-1)
                try:
                    raw = zlib.decompress(data) if comp==2 else (gzip.decompress(data) if comp==1 else data)
                    nbt = nbtlib.File.parse(io.BytesIO(raw))
                    bes = list(nbt.get("block_entities",[]))
                    if "Level" in nbt:
                        bes = list(nbt["Level"].get("TileEntities",[]))
                    # Only process if chunk has command blocks
                    cmd_bes = [be for be in bes if "command" in str(be.get("id","")).lower()]
                    if not cmd_bes:
                        continue
                    sections = list(nbt.get("sections",[]))
                    if "Level" in nbt:
                        sections = list(nbt["Level"].get("Sections",[]))
                    for be in cmd_bes:
                        bx = int(be.get("x",0))
                        by = int(be.get("y",0))
                        bz = int(be.get("z",0))
                        # Look up actual block type from block state
                        block_name = _decode_block_at(sections, bx, by, bz) or "minecraft:command_block"
                        if "repeating" in block_name:
                            btype = "repeating"
                        elif "chain" in block_name:
                            btype = "chain"
                        else:
                            btype = "impulse"
                        auto = int(be.get("auto", 0)) == 1
                        cmd = str(be.get("Command",""))
                        found.append({
                            "world": world_name,
                            "x": bx, "y": by, "z": bz,
                            "type": btype, "auto": auto,
                            "powered": int(be.get("powered",0))==1,
                            "impact": _assess(btype, auto, cmd),
                            "command": cmd,
                            "last_output": str(be.get("LastOutput","")),
                            "success_count": int(be.get("SuccessCount",0)),
                        })
                except: pass
    except: pass
    return found

def scan_world(world_path, world_name, max_workers=None):
    base = Path(world_path)
    mcas = []
    for sub in ["region","DIM-1/region","DIM1/region"]:
        d = base / sub
        if d.is_dir():
            mcas.extend((str(m), world_name) for m in sorted(d.glob("r.*.*.mca")))
    if not mcas: return []
    workers = max_workers or min(cpu_count(), 8)
    with Pool(workers) as pool:
        results = pool.map(scan_one_mca, mcas)
    return [b for chunk in results for b in chunk]

if __name__ == "__main__":
    import os as _os
    worlds_base = Path(_os.environ.get("WORLDS_DIR", "worlds"))
    if not worlds_base.is_dir():
        print(f"Usage: WORLDS_DIR=/path/to/worlds python fast_scan.py", file=sys.stderr)
        sys.exit(1)
    targets = sorted(d.name for d in worlds_base.iterdir() if d.is_dir())
    all_blocks = []
    t0 = time.time()
    for wname in targets:
        wpath = worlds_base / wname
        if not wpath.is_dir(): continue
        t1 = time.time()
        blocks = scan_world(str(wpath), wname)
        all_blocks.extend(blocks)
        print(f"{wname}: {len(blocks)} blocks ({time.time()-t1:.1f}s)", flush=True)

    print(f"\n=== 合計: {len(all_blocks)} コマンドブロック ({time.time()-t0:.1f}s) ===")

    ic = Counter(b["impact"] for b in all_blocks)
    wc = Counter(b["world"] for b in all_blocks)
    tc = Counter(b["type"] for b in all_blocks)
    ac = Counter("auto" if b["auto"] else "manual" for b in all_blocks)

    print("\n--- 負荷レベル別 ---")
    for k in ["critical","high","medium","low"]:
        print(f"  {k}: {ic.get(k,0)}")
    print("\n--- 種別 ---")
    for k,v in tc.most_common(): print(f"  {k}: {v}")
    print("\n--- 常時実行 vs 手動 ---")
    for k,v in ac.most_common(): print(f"  {k}: {v}")
    print("\n--- ワールド別 ---")
    for k,v in wc.most_common(): print(f"  {k}: {v}")

    # High/critical blocks detail
    high = [b for b in all_blocks if b["impact"] in ("critical","high")]
    if high:
        print(f"\n--- 高負荷コマンドブロック詳細 ({len(high)}個) ---")
        for b in sorted(high, key=lambda x: x["impact"]):
            print(f"  [{b['world']}] ({b['x']},{b['y']},{b['z']}) {b['type']} auto={b['auto']} -> {b['command'][:80]}")

    out_dir = Path(__file__).parent.parent
    # CSV
    csv_path = out_dir / "command_blocks_all_worlds.csv"
    with open(csv_path, "w", newline="", encoding="utf-8") as f:
        dw = csv.DictWriter(f, fieldnames=["world","x","y","z","type","auto","powered","impact","command","last_output","success_count"])
        dw.writeheader(); dw.writerows(all_blocks)
    print(f"\nCSV: {csv_path}")

    # Plot
    from command_block_scanner import generate_plot
    png = generate_plot(all_blocks, dpi=150)
    png_path = out_dir / "command_blocks_all_worlds.png"
    png_path.write_bytes(png)
    print(f"PNG: {png_path}")
