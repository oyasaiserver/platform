"""
Pure-Python Minecraft Anvil (.mca) region file parser.

File format:
  bytes 0-4095:    Offset table (1024 × 4 bytes)
                   entry = [sector_offset: 3 bytes big-endian][sector_count: 1 byte]
  bytes 4096-8191: Timestamp table (unused)
  bytes 8192+:     Chunk data blocks (4096-byte sector aligned)

Each chunk data block:
  bytes 0-3: data_length (big-endian int32, includes compression byte)
  byte  4:   compression type (1=gzip, 2=zlib, 3=none, 4=lz4)
  bytes 5+:  compressed NBT data
"""

import struct
import zlib
import gzip
import io
import logging
from pathlib import Path
from typing import Iterator, Optional
from dataclasses import dataclass

import nbtlib

log = logging.getLogger(__name__)

SECTOR_SIZE = 4096


@dataclass
class ChunkData:
    region_x: int   # from filename (r.RX.RZ.mca)
    region_z: int
    chunk_x: int    # absolute chunk coordinate
    chunk_z: int
    nbt: nbtlib.Compound


def parse_region_coords(mca_path: Path) -> tuple[int, int]:
    """Extract (rx, rz) from filename like r.0.-1.mca"""
    parts = mca_path.stem.split(".")
    return int(parts[1]), int(parts[2])


def _decompress(data: bytes, compression: int) -> bytes:
    if compression == 1:
        return gzip.decompress(data)
    elif compression == 2:
        return zlib.decompress(data)
    elif compression == 3:
        return data
    else:
        raise ValueError(f"Unsupported compression type: {compression}")


def iter_chunks(mca_path: Path) -> Iterator[ChunkData]:
    """
    Yield ChunkData for every non-empty chunk in a region file.
    Processes one chunk at a time for memory efficiency.
    """
    rx, rz = parse_region_coords(mca_path)

    with open(mca_path, "rb") as f:
        header = f.read(8192)
        if len(header) < 8192:
            return  # truncated / empty file

        for i in range(1024):
            entry = struct.unpack_from(">I", header, i * 4)[0]
            sector_offset = entry >> 8
            sector_count = entry & 0xFF

            if sector_offset == 0 or sector_count == 0:
                continue  # chunk not generated

            local_x = i % 32
            local_z = i // 32
            chunk_x = rx * 32 + local_x
            chunk_z = rz * 32 + local_z

            try:
                f.seek(sector_offset * SECTOR_SIZE)
                length_bytes = f.read(4)
                if len(length_bytes) < 4:
                    continue
                data_length = struct.unpack(">I", length_bytes)[0]
                if data_length <= 1:
                    continue

                compression = struct.unpack("B", f.read(1))[0]
                compressed_data = f.read(data_length - 1)

                raw = _decompress(compressed_data, compression)
                nbt_data = nbtlib.File.parse(io.BytesIO(raw))

                yield ChunkData(
                    region_x=rx,
                    region_z=rz,
                    chunk_x=chunk_x,
                    chunk_z=chunk_z,
                    nbt=nbt_data,
                )
            except Exception as e:
                log.debug(
                    "Skipping chunk (%d,%d) in %s: %s",
                    chunk_x, chunk_z, mca_path.name, e,
                )
                continue


def get_chunk_sections(chunk_nbt: nbtlib.Compound) -> list:
    """
    Return the list of section compounds from a chunk NBT.
    Handles both old format (root-level Sections) and new format (sections under root).
    """
    root = chunk_nbt
    # 1.18+ format: root has "sections" key directly
    if "sections" in root:
        return list(root["sections"])
    # Pre-1.18: root -> "Level" -> "Sections"
    if "Level" in root:
        level = root["Level"]
        if "Sections" in level:
            return list(level["Sections"])
    return []


def decode_section_blocks(section: nbtlib.Compound, min_y: int, max_y: int) -> Iterator[tuple[int, str]]:
    """
    Decode block palette + block_states for a chunk section.
    Yields (absolute_y, block_name) for each block in range.
    """
    # Section Y coordinate (each section is 16 blocks tall)
    if "Y" in section:
        section_y = int(section["Y"])
    elif "y" in section:
        section_y = int(section["y"])
    else:
        return

    section_min_y = section_y * 16
    section_max_y = section_min_y + 15

    # Skip section if entirely out of range
    if section_max_y < min_y or section_min_y > max_y:
        return

    # Get block_states (1.18+) or Palette+BlockStates (older)
    palette: list[str] = []
    packed_states: Optional[list] = None

    if "block_states" in section:
        bs = section["block_states"]
        if "palette" in bs:
            palette = [str(entry["Name"]) for entry in bs["palette"]]
        if "data" in bs:
            packed_states = list(bs["data"])
    elif "Palette" in section:
        palette = [str(entry["Name"]) for entry in section["Palette"]]
        if "BlockStates" in section:
            packed_states = list(section["BlockStates"])
    else:
        return

    if not palette:
        return

    # If only one palette entry, all blocks are that type
    if len(palette) == 1:
        block_name = palette[0]
        if block_name == "minecraft:air":
            return
        for local_y in range(16):
            abs_y = section_min_y + local_y
            if min_y <= abs_y <= max_y:
                for _ in range(16 * 16):
                    yield abs_y, block_name
        return

    if packed_states is None:
        return

    # Bits per block (minimum 4)
    bits_per_block = max(4, (len(palette) - 1).bit_length())
    blocks_per_long = 64 // bits_per_block
    mask = (1 << bits_per_block) - 1

    # Decode all 4096 blocks (16×16×16)
    for block_index in range(4096):
        long_index = block_index // blocks_per_long
        bit_offset = (block_index % blocks_per_long) * bits_per_block

        if long_index >= len(packed_states):
            break

        long_val = int(packed_states[long_index])
        # Handle negative longs (two's complement)
        if long_val < 0:
            long_val += (1 << 64)

        palette_index = (long_val >> bit_offset) & mask

        if palette_index >= len(palette):
            continue

        block_name = palette[palette_index]
        if block_name == "minecraft:air" or block_name == "minecraft:cave_air":
            continue

        # block_index = y*256 + z*16 + x  (within section)
        local_y = block_index >> 8
        abs_y = section_min_y + local_y

        if min_y <= abs_y <= max_y:
            yield abs_y, block_name
