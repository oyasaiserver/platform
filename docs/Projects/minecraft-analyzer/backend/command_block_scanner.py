"""
Command block scanner for Minecraft world data.

Reads block entity (tile entity) NBT data from .mca region files
to locate all command blocks, classify their impact, and generate
a color-coded scatter plot.
"""

import gzip
import io
import logging
import struct
import zlib
from pathlib import Path
from typing import Optional

import nbtlib

log = logging.getLogger(__name__)

SECTOR_SIZE = 4096

# Impact levels with color + Japanese label
IMPACT_META = {
    "critical": {
        "color": "#ff2222",
        "label": "常時実行・重コマンド（サーバー負荷 最大）",
        "marker": "X",
        "size": 120,
        "zorder": 4,
    },
    "high": {
        "color": "#ff7700",
        "label": "常時実行リピート（サーバー負荷 大）",
        "marker": "o",
        "size": 80,
        "zorder": 3,
    },
    "medium": {
        "color": "#ffcc00",
        "label": "リピート/チェーン（サーバー負荷 中）",
        "marker": "s",
        "size": 60,
        "zorder": 2,
    },
    "low": {
        "color": "#44aaff",
        "label": "インパルス/手動（サーバー負荷 低）",
        "marker": "^",
        "size": 40,
        "zorder": 1,
    },
}

HEAVY_COMMANDS = [
    "execute", "fill", "clone", "summon", "tp", "teleport",
    "particle", "effect", "forceload", "spreadplayers",
]


def _decompress(data: bytes, compression: int) -> bytes:
    if compression == 1:
        return gzip.decompress(data)
    elif compression == 2:
        return zlib.decompress(data)
    elif compression == 3:
        return data
    raise ValueError(f"Unsupported compression: {compression}")


def _parse_region_coords(mca_path: Path) -> tuple[int, int]:
    parts = mca_path.stem.split(".")
    return int(parts[1]), int(parts[2])


def _iter_chunk_nbts(mca_path: Path):
    """Yield raw NBT Compound for each non-empty chunk in an .mca file."""
    try:
        with open(mca_path, "rb") as f:
            header = f.read(8192)
            if len(header) < 8192:
                return

            for i in range(1024):
                entry = struct.unpack_from(">I", header, i * 4)[0]
                sector_offset = entry >> 8
                sector_count = entry & 0xFF
                if sector_offset == 0 or sector_count == 0:
                    continue

                f.seek(sector_offset * SECTOR_SIZE)
                length_bytes = f.read(4)
                if len(length_bytes) < 4:
                    continue
                data_length = struct.unpack(">I", length_bytes)[0]
                if data_length <= 1:
                    continue

                compression = struct.unpack("B", f.read(1))[0]
                compressed = f.read(data_length - 1)
                try:
                    raw = _decompress(compressed, compression)
                    nbt_data = nbtlib.File.parse(io.BytesIO(raw))
                    yield nbt_data
                except Exception as e:
                    log.debug("Chunk parse error in %s: %s", mca_path.name, e)
    except Exception as e:
        log.error("Failed to read %s: %s", mca_path, e)


def _assess_impact(block_type: str, auto: bool, command: str) -> str:
    cmd = command.lower().strip()
    if block_type == "repeating" and auto:
        if any(cmd.startswith(h) for h in HEAVY_COMMANDS):
            return "critical"
        return "high"
    if block_type == "repeating" or (block_type == "chain" and auto):
        return "medium"
    return "low"


def _extract_command_blocks_from_chunk(chunk_nbt: nbtlib.Compound) -> list[dict]:
    root = chunk_nbt

    # Locate block entity list (1.18+: root["block_entities"], older: root["Level"]["TileEntities"])
    block_entities = []
    if "block_entities" in root:
        block_entities = list(root["block_entities"])
    elif "Level" in root:
        level = root["Level"]
        if "TileEntities" in level:
            block_entities = list(level["TileEntities"])

    results = []
    for entity in block_entities:
        entity_id = str(entity.get("id", "")).lower()
        if "command_block" not in entity_id:
            continue

        if "repeating" in entity_id:
            block_type = "repeating"
        elif "chain" in entity_id:
            block_type = "chain"
        else:
            block_type = "impulse"

        x = int(entity.get("x", 0))
        y = int(entity.get("y", 0))
        z = int(entity.get("z", 0))
        command = str(entity.get("Command", ""))
        auto = int(entity.get("auto", 0)) == 1
        powered = int(entity.get("powered", 0)) == 1
        last_output = str(entity.get("LastOutput", ""))
        success_count = int(entity.get("SuccessCount", 0))

        impact = _assess_impact(block_type, auto, command)

        results.append({
            "x": x, "y": y, "z": z,
            "type": block_type,
            "command": command,
            "auto": auto,
            "powered": powered,
            "last_output": last_output,
            "success_count": success_count,
            "impact": impact,
        })

    return results


def scan_world_command_blocks(world_path: str) -> list[dict]:
    """
    Scan all region files under world_path and return all command blocks found.
    Checks overworld, nether, and end dimensions.
    """
    base = Path(world_path)
    all_mcas: list[Path] = []
    for sub in ["region", "DIM-1/region", "DIM1/region"]:
        d = base / sub
        if d.is_dir():
            all_mcas.extend(sorted(d.glob("r.*.*.mca")))

    found: list[dict] = []
    for mca in all_mcas:
        for chunk_nbt in _iter_chunk_nbts(mca):
            found.extend(_extract_command_blocks_from_chunk(chunk_nbt))
        log.info("Scanned %s – total command blocks so far: %d", mca.name, len(found))

    return found


def generate_plot(
    command_blocks: list[dict],
    output_path: Optional[str] = None,
    dpi: int = 150,
) -> bytes:
    """
    Generate a color-coded scatter plot of command block positions (X/Z top-down view).
    Returns PNG bytes.
    """
    import io as _io
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    import matplotlib.patches as mpatches
    import matplotlib.font_manager as fm

    # Use a Japanese-capable font if available (macOS: Hiragino, Linux: IPAGothic, fallback: DejaVu)
    jp_fonts = ["Hiragino Sans", "Hiragino Maru Gothic Pro", "AppleGothic",
                "IPAGothic", "Noto Sans CJK JP", "MS Gothic"]
    available = {f.name for f in fm.fontManager.ttflist}
    chosen = next((f for f in jp_fonts if f in available), None)
    if chosen:
        matplotlib.rcParams["font.family"] = chosen

    fig, ax = plt.subplots(figsize=(14, 12), facecolor="#1a1a2e")
    ax.set_facecolor("#0d1117")
    ax.tick_params(colors="#aaaaaa")
    for spine in ax.spines.values():
        spine.set_edgecolor("#333355")
    ax.grid(True, color="#222244", linewidth=0.5, linestyle="--", alpha=0.6)

    # Group by impact
    groups: dict[str, list[dict]] = {k: [] for k in IMPACT_META}
    for cb in command_blocks:
        groups[cb["impact"]].append(cb)

    for impact, cbs in groups.items():
        if not cbs:
            continue
        meta = IMPACT_META[impact]
        xs = [cb["x"] for cb in cbs]
        zs = [cb["z"] for cb in cbs]
        ax.scatter(
            xs, zs,
            c=meta["color"],
            marker=meta["marker"],
            s=meta["size"],
            label=f"{meta['label']} ({len(cbs)}個)",
            zorder=meta["zorder"],
            edgecolors="white",
            linewidths=0.4,
            alpha=0.9,
        )

    # Annotate critical command blocks with coordinates
    critical = groups.get("critical", [])
    for cb in critical[:50]:  # limit annotation to 50 to avoid clutter
        ax.annotate(
            f"({cb['x']},{cb['z']})",
            (cb["x"], cb["z"]),
            textcoords="offset points",
            xytext=(4, 4),
            fontsize=5,
            color="#ffaaaa",
            alpha=0.85,
        )

    total = len(command_blocks)
    high_impact = len(groups["critical"]) + len(groups["high"])

    ax.set_xlabel("X 座標", color="#aaaaaa", fontsize=11)
    ax.set_ylabel("Z 座標", color="#aaaaaa", fontsize=11)
    ax.set_title(
        f"コマンドブロック分布マップ\n"
        f"合計 {total} 個  |  高負荷（常時実行）: {high_impact} 個",
        color="#e0e0e0", fontsize=13, pad=14,
    )

    # Legend
    legend = ax.legend(
        loc="upper left",
        facecolor="#16213e",
        edgecolor="#334466",
        labelcolor="#dddddd",
        fontsize=9,
        framealpha=0.9,
    )

    # Summary table in figure
    summary_lines = [
        f"重大（常時+重コマンド）: {len(groups['critical'])}",
        f"高負荷（常時リピート）: {len(groups['high'])}",
        f"中負荷（リピート/チェーン）: {len(groups['medium'])}",
        f"低負荷（インパルス等）: {len(groups['low'])}",
        f"合計: {total}",
    ]
    fig.text(
        0.98, 0.02,
        "\n".join(summary_lines),
        ha="right", va="bottom",
        color="#999999", fontsize=8,
        fontfamily="monospace",
    )

    plt.tight_layout()

    buf = _io.BytesIO()
    plt.savefig(buf, format="png", dpi=dpi, bbox_inches="tight", facecolor=fig.get_facecolor())
    plt.close(fig)
    buf.seek(0)
    return buf.read()
