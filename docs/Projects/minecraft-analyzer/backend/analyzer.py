"""
Block analysis logic for Minecraft world data.

analyze_region() runs in a subprocess (via ProcessPoolExecutor).
All results are plain dicts/lists so they can be pickled across process boundaries.
"""

import logging
from collections import Counter
from dataclasses import dataclass, field
from pathlib import Path
from typing import Optional

from world_reader import iter_chunks, get_chunk_sections, decode_section_blocks

log = logging.getLogger(__name__)


@dataclass
class AnalysisOptions:
    min_y: int = -64
    max_y: int = 320
    block_filter: list[str] = field(default_factory=list)
    sample_rate: float = 1.0


@dataclass
class RegionResult:
    mca_path: str
    block_counter: Counter = field(default_factory=Counter)
    # surface_map: maps (chunk_x, chunk_z) -> top non-air block name
    surface_map: dict = field(default_factory=dict)
    # depth_counter: maps y -> Counter of block names
    depth_counter: dict = field(default_factory=dict)
    chunk_count: int = 0
    error: Optional[str] = None


def analyze_region(mca_path_str: str, options_dict: dict) -> dict:
    """
    Entry point for subprocess worker.
    Returns a plain dict (picklable) representing RegionResult.
    """
    import sys
    import os
    # Ensure backend/ is on sys.path when running in subprocess
    backend_dir = os.path.dirname(os.path.abspath(__file__))
    if backend_dir not in sys.path:
        sys.path.insert(0, backend_dir)

    from world_reader import iter_chunks, get_chunk_sections, decode_section_blocks

    opts = AnalysisOptions(**options_dict)
    mca_path = Path(mca_path_str)

    result = RegionResult(mca_path=mca_path_str)

    try:
        for chunk in iter_chunks(mca_path):
            sections = get_chunk_sections(chunk.nbt)
            if not sections:
                continue

            result.chunk_count += 1

            # Track the highest non-air block per column for surface map
            # column key: (chunk_x*16 + local_x, chunk_z*16 + local_z)
            column_top: dict[tuple[int, int], tuple[int, str]] = {}

            for section in sections:
                for abs_y, block_name in decode_section_blocks(section, opts.min_y, opts.max_y):
                    # Apply block filter
                    if opts.block_filter and block_name not in opts.block_filter:
                        continue

                    result.block_counter[block_name] += 1

                    # Depth counter
                    if abs_y not in result.depth_counter:
                        result.depth_counter[abs_y] = Counter()
                    result.depth_counter[abs_y][block_name] += 1

            # Surface map: use highest Y per (chunk_x, chunk_z) column
            # (simplified: store the whole-chunk top block)
            for section in reversed(sections):
                top = _get_top_block_in_section(section, opts.min_y, opts.max_y)
                if top:
                    key = (chunk.chunk_x, chunk.chunk_z)
                    if key not in result.surface_map:
                        result.surface_map[key] = top
                    break

    except Exception as e:
        result.error = str(e)
        log.error("Error analyzing %s: %s", mca_path_str, e)

    # Convert to plain dict for pickling
    return {
        "mca_path": result.mca_path,
        "block_counter": dict(result.block_counter),
        "surface_map": {f"{k[0]},{k[1]}": v for k, v in result.surface_map.items()},
        "depth_counter": {
            str(y): dict(counter)
            for y, counter in result.depth_counter.items()
        },
        "chunk_count": result.chunk_count,
        "error": result.error,
    }


def _get_top_block_in_section(section, min_y: int, max_y: int) -> Optional[str]:
    """Return the first non-air block found in this section (top-to-bottom scan)."""
    from world_reader import decode_section_blocks
    blocks = list(decode_section_blocks(section, min_y, max_y))
    if not blocks:
        return None
    # Return block with highest Y
    blocks.sort(key=lambda b: b[0], reverse=True)
    return blocks[0][1] if blocks else None


def merge_region_results(region_dicts: list[dict]) -> dict:
    """
    Merge multiple RegionResult dicts into a single aggregated result dict.
    Called in the main process after all workers finish.
    """
    total_blocks = 0
    merged_counter: Counter = Counter()
    merged_surface: dict = {}
    merged_depth: dict = {}
    total_chunks = 0

    min_cx = min_cz = float("inf")
    max_cx = max_cz = float("-inf")

    for r in region_dicts:
        if r.get("error"):
            continue

        bc = r.get("block_counter", {})
        merged_counter.update(bc)
        total_blocks += sum(bc.values())
        total_chunks += r.get("chunk_count", 0)

        # Surface map
        merged_surface.update(r.get("surface_map", {}))

        # Depth counter
        for y_str, counter in r.get("depth_counter", {}).items():
            if y_str not in merged_depth:
                merged_depth[y_str] = Counter()
            merged_depth[y_str].update(counter)

        # World bounds from surface map keys
        for key in r.get("surface_map", {}):
            cx, cz = map(int, key.split(","))
            min_cx = min(min_cx, cx)
            max_cx = max(max_cx, cx)
            min_cz = min(min_cz, cz)
            max_cz = max(max_cz, cz)

    if total_blocks == 0:
        min_cx = max_cx = min_cz = max_cz = 0

    return {
        "total_blocks": total_blocks,
        "block_counter": dict(merged_counter),
        "surface_map": merged_surface,
        "depth_counter": {y: dict(c) for y, c in merged_depth.items()},
        "total_chunks": total_chunks,
        "world_bounds": {
            "min_x": int(min_cx) * 16,
            "max_x": int(max_cx) * 16 + 15,
            "min_z": int(min_cz) * 16,
            "max_z": int(max_cz) * 16 + 15,
        },
    }


def build_heatmap(merged: dict, block_name: str, grid_size: int = 512) -> dict:
    """
    Build a 2D density heatmap for a specific block from merged surface_map data.
    Returns HeatmapData-compatible dict.
    """
    surface_map = merged.get("surface_map", {})
    bounds = merged.get("world_bounds", {})

    min_cx = bounds.get("min_x", 0) // 16
    max_cx = bounds.get("max_x", 0) // 16
    min_cz = bounds.get("min_z", 0) // 16
    max_cz = bounds.get("max_z", 0) // 16

    width = max(1, max_cx - min_cx + 1)
    height = max(1, max_cz - min_cz + 1)

    # Scale to grid_size if too large
    scale_x = max(1, width // grid_size)
    scale_z = max(1, height // grid_size)
    out_w = (width + scale_x - 1) // scale_x
    out_h = (height + scale_z - 1) // scale_z

    import numpy as np
    grid = np.zeros((out_h, out_w), dtype=np.float32)

    for key, block in surface_map.items():
        if block != block_name:
            continue
        cx, cz = map(int, key.split(","))
        px = (cx - min_cx) // scale_x
        pz = (cz - min_cz) // scale_z
        if 0 <= px < out_w and 0 <= pz < out_h:
            grid[pz, px] += 1

    # Normalize to 0-1
    max_val = float(grid.max())
    if max_val > 0:
        grid = grid / max_val

    return {
        "width": out_w,
        "height": out_h,
        "min_x": min_cx * 16,
        "max_x": max_cx * 16 + 15,
        "min_z": min_cz * 16,
        "max_z": max_cz * 16 + 15,
        "data": grid.tolist(),
    }


def build_depth_profile(merged: dict, block_name: str) -> dict:
    """
    Build Y-level distribution for a specific block.
    Returns DepthData-compatible dict.
    """
    depth_counter = merged.get("depth_counter", {})
    y_levels = []

    for y_str, counter in depth_counter.items():
        count = counter.get(block_name, 0)
        if count > 0:
            y_levels.append({"y": int(y_str), "count": count})

    y_levels.sort(key=lambda e: e["y"])

    return {"block": block_name, "y_levels": y_levels}
