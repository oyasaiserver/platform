#!/usr/bin/env python3
"""
Utility to build trapezoidal MagicaVoxel models from grayscale PNG images.

Requirements:
- Python 3.9+
- No third-party dependencies (implements a minimal PNG decoder).

Provide one image to fill the volume uniformly, or supply an additional
back image to stack a different portrait deeper in the structure.
"""
from __future__ import annotations

import argparse
import struct
import sys
import zlib
from dataclasses import dataclass
from typing import List, Sequence, Tuple


PNG_SIGNATURE = b"\x89PNG\r\n\x1a\n"


class PNGFormatError(RuntimeError):
    """Raised when the PNG file does not match the expected grayscale format."""


def _paeth_predictor(a: int, b: int, c: int) -> int:
    """Paeth predictor as defined in the PNG specification."""
    p = a + b - c
    pa = abs(p - a)
    pb = abs(p - b)
    pc = abs(p - c)
    if pa <= pb and pa <= pc:
        return a
    if pb <= pc:
        return b
    return c


def _reconstruct_scanlines(
    raw_data: bytes, width: int, height: int, bpp: int
) -> List[List[int]]:
    """Apply PNG per-scanline filters and return a 2-D list of byte values."""
    stride = width * bpp
    expected = height * (stride + 1)
    if len(raw_data) != expected:
        raise PNGFormatError(
            f"Unexpected decompressed data length: expected {expected}, got {len(raw_data)}"
        )

    rows: List[List[int]] = []
    prev_row = [0] * stride
    offset = 0

    for _ in range(height):
        filter_type = raw_data[offset]
        offset += 1
        scan = list(raw_data[offset : offset + stride])
        offset += stride

        if filter_type == 0:  # None
            pass
        elif filter_type == 1:  # Sub
            for i in range(stride):
                left = scan[i - bpp] if i >= bpp else 0
                scan[i] = (scan[i] + left) & 0xFF
        elif filter_type == 2:  # Up
            for i in range(stride):
                up = prev_row[i]
                scan[i] = (scan[i] + up) & 0xFF
        elif filter_type == 3:  # Average
            for i in range(stride):
                left = scan[i - bpp] if i >= bpp else 0
                up = prev_row[i]
                scan[i] = (scan[i] + ((left + up) >> 1)) & 0xFF
        elif filter_type == 4:  # Paeth
            for i in range(stride):
                left = scan[i - bpp] if i >= bpp else 0
                up = prev_row[i]
                up_left = prev_row[i - bpp] if i >= bpp else 0
                scan[i] = (scan[i] + _paeth_predictor(left, up, up_left)) & 0xFF
        else:
            raise PNGFormatError(f"Unsupported PNG filter type: {filter_type}")

        rows.append(scan[::bpp] if bpp > 1 else scan)
        prev_row = scan

    return rows


def load_grayscale_png(path: str) -> List[List[int]]:
    """Load an 8-bit grayscale PNG and return the pixel matrix (row-major)."""
    with open(path, "rb") as fh:
        data = fh.read()

    if not data.startswith(PNG_SIGNATURE):
        raise PNGFormatError("File does not start with a PNG signature.")

    offset = len(PNG_SIGNATURE)
    width = height = None
    bit_depth = color_type = None
    idat_chunks = bytearray()

    while offset < len(data):
        if offset + 8 > len(data):
            raise PNGFormatError("PNG chunk header extends beyond file bounds.")

        length = struct.unpack(">I", data[offset : offset + 4])[0]
        offset += 4
        chunk_type = data[offset : offset + 4]
        offset += 4

        chunk_data = data[offset : offset + length]
        offset += length
        offset += 4  # Skip CRC

        if chunk_type == b"IHDR":
            (
                width,
                height,
                bit_depth,
                color_type,
                compression,
                filter_method,
                interlace,
            ) = struct.unpack(">IIBBBBB", chunk_data)
            if compression != 0 or filter_method != 0 or interlace != 0:
                raise PNGFormatError("Only standard non-interlaced PNGs are supported.")
        elif chunk_type == b"IDAT":
            idat_chunks.extend(chunk_data)
        elif chunk_type == b"IEND":
            break

    if width is None or height is None:
        raise PNGFormatError("PNG header missing IHDR chunk.")
    if bit_depth != 8 or color_type != 0:
        raise PNGFormatError(
            f"Expected 8-bit grayscale PNG, got bit_depth={bit_depth}, color_type={color_type}"
        )

    decompressed = zlib.decompress(bytes(idat_chunks))
    return _reconstruct_scanlines(decompressed, width, height, bpp=1)


def resize_nearest(pixels: Sequence[Sequence[int]], target_size: int) -> List[List[int]]:
    """Resize a square grayscale image using nearest-neighbour sampling."""
    base_size = len(pixels)
    if base_size == 0 or len(pixels[0]) != base_size:
        raise ValueError("Input pixels must form a non-empty square matrix.")
    if target_size <= 0:
        raise ValueError("Target size must be positive.")
    if target_size == base_size:
        return [list(row) for row in pixels]

    scale = base_size / target_size
    result: List[List[int]] = []

    for y in range(target_size):
        src_y = min(base_size - 1, max(0, int((y + 0.5) * scale)))
        row: List[int] = []
        for x in range(target_size):
            src_x = min(base_size - 1, max(0, int((x + 0.5) * scale)))
            row.append(pixels[src_y][src_x])
        result.append(row)

    return result


def quantize_to_palette_index(value: int) -> int:
    """Map an 8-bit intensity to one of four palette indices (1..4)."""
    if value < 0 or value > 255:
        raise ValueError(f"Grayscale value must be 0-255, got {value}")
    if value < 64:
        return 1
    if value < 128:
        return 2
    if value < 192:
        return 3
    return 4


@dataclass(frozen=True)
class VolumeSpec:
    size_x: int = 128
    size_y: int = 128
    size_z: int = 64
    front_span: int = 64
    back_span: int = 128

    def clamp_cross_section(self, value: float) -> int:
        return max(1, min(self.size_x, int(round(value))))


def compute_cross_spans(
    spec: VolumeSpec,
    *,
    blank_interval: int = 0,
    blank_offset: int = 0,
    blank_length: int = 1,
    gap_layers: int = 0,
    filled_step: int | None = None,
    final_span: int | None = None,
) -> List[int]:
    """Calculate cross-section sizes for each depth layer with optional blank slices."""
    if blank_interval < 0:
        raise ValueError("blank_interval must be non-negative.")
    if blank_offset < 0:
        raise ValueError("blank_offset must be non-negative.")
    if blank_length < 1:
        raise ValueError("blank_length must be at least 1.")
    if gap_layers < 0:
        raise ValueError("gap_layers must be non-negative.")
    if filled_step is not None and filled_step <= 0:
        raise ValueError("filled_step must be positive when provided.")

    final_span = final_span if final_span is not None else spec.back_span
    final_span = spec.clamp_cross_section(final_span)

    blank_flags: List[bool] = []
    depth = spec.size_z
    if gap_layers > 0:
        while len(blank_flags) < depth:
            blank_flags.append(False)
            for _ in range(gap_layers):
                if len(blank_flags) >= depth:
                    break
                blank_flags.append(True)
    elif blank_interval > 0:
        for z in range(depth):
            is_blank = False
            if z >= blank_offset:
                cycle_pos = (z - blank_offset) % (blank_interval + blank_length)
                if cycle_pos < blank_length:
                    is_blank = True
            blank_flags.append(is_blank)
    else:
        blank_flags = [False] * depth

    filled_positions = [idx for idx, flag in enumerate(blank_flags) if not flag]
    filled_count = len(filled_positions)

    if filled_count == 0:
        return [0] * depth

    values: List[float] = []
    if filled_step is not None:
        for idx in range(filled_count):
            value = spec.front_span + filled_step * idx
            values.append(value)
        values[-1] = final_span
    else:
        for idx in range(filled_count):
            if filled_count == 1:
                value = final_span
            else:
                ratio = idx / (filled_count - 1)
                value = spec.front_span + (final_span - spec.front_span) * ratio
            values.append(value)

    spans: List[int] = []
    prev = spec.front_span - 1
    iter_values = iter(values)
    for is_blank in blank_flags:
        if is_blank:
            spans.append(0)
            continue
        value = int(round(next(iter_values)))
        if value <= prev:
            value = prev + 1
        if value > final_span:
            value = final_span
        value = spec.clamp_cross_section(value)
        spans.append(value)
        prev = value

    return spans


def generate_trapezoid_voxels(
    front_pixels: Sequence[Sequence[int]],
    spec: VolumeSpec,
    *,
    back_pixels: Sequence[Sequence[int]] | None = None,
    front_layers: int = 1,
    spans: Sequence[int] | None = None,
    blank_interval: int = 0,
    blank_offset: int = 0,
    blank_length: int = 1,
    gap_layers: int = 0,
    filled_step: int | None = None,
    final_span: int | None = None,
) -> List[Tuple[int, int, int, int]]:
    """Create a list of voxels (x, y, z, palette_index) representing the trapezoid volume."""
    depth = spec.size_z
    base_size = len(front_pixels)
    if depth <= 0:
        raise ValueError("Volume depth must be positive.")
    if base_size == 0 or len(front_pixels[0]) != base_size:
        raise ValueError("Front image must be a non-empty square matrix.")
    if back_pixels is not None:
        if len(back_pixels) == 0 or len(back_pixels[0]) != len(back_pixels):
            raise ValueError("Back image must be a non-empty square matrix.")

    if spans is None:
        spans = compute_cross_spans(
            spec,
            blank_interval=blank_interval,
            blank_offset=blank_offset,
            blank_length=blank_length,
            gap_layers=gap_layers,
            filled_step=filled_step,
            final_span=final_span,
        )
    if len(spans) != depth:
        raise ValueError("Length of spans must match the volume depth.")
    front_layers = max(0, min(front_layers, depth))

    voxels: List[Tuple[int, int, int, int]] = []

    for z, cross_span in enumerate(spans):
        if cross_span <= 0:
            continue
        if back_pixels is None or z < front_layers:
            source_pixels = front_pixels
        else:
            source_pixels = back_pixels
        resized = resize_nearest(source_pixels, cross_span)
        offset = (spec.size_x - cross_span) // 2

        for row_idx, row in enumerate(resized):
            for col_idx, value in enumerate(row):
                palette_index = quantize_to_palette_index(value)
                x = offset + col_idx
                y = offset + (cross_span - 1 - row_idx)
                voxels.append((x, y, z, palette_index))

    return voxels


def build_palette() -> List[Tuple[int, int, int, int]]:
    """Return a 256-entry RGBA palette with four grayscale tones."""
    palette: List[Tuple[int, int, int, int]] = [(0, 0, 0, 0)] * 256
    tones = [
        (48, 48, 48, 255),
        (112, 112, 112, 255),
        (176, 176, 176, 255),
        (240, 240, 240, 255),
    ]
    for idx, color in enumerate(tones, start=1):
        palette[idx] = color
    return palette


def write_vox(path: str, voxels: Sequence[Tuple[int, int, int, int]], spec: VolumeSpec) -> None:
    """Write voxel data to a MagicaVoxel .vox file (version 150)."""
    palette = build_palette()
    header = b"VOX "
    version = struct.pack("<I", 150)

    size_chunk_id = b"SIZE"
    size_chunk_content = struct.pack("<III", spec.size_x, spec.size_y, spec.size_z)
    size_chunk = (
        size_chunk_id
        + struct.pack("<II", len(size_chunk_content), 0)
        + size_chunk_content
    )

    voxel_bytes = bytearray()
    voxel_bytes.extend(struct.pack("<I", len(voxels)))
    for x, y, z, color_index in voxels:
        if not (0 <= x < spec.size_x and 0 <= y < spec.size_y and 0 <= z < spec.size_z):
            raise ValueError(f"Voxel coordinate out of bounds: {(x, y, z)}")
        if not (1 <= color_index <= 255):
            raise ValueError(f"Palette index must be between 1 and 255, got {color_index}")
        voxel_bytes.extend(struct.pack("<BBBB", x, y, z, color_index))

    xyzi_chunk = (
        b"XYZI"
        + struct.pack("<II", len(voxel_bytes), 0)
        + voxel_bytes
    )

    rgba_content = bytearray()
    for r, g, b, a in palette:
        rgba_content.extend(struct.pack("<BBBB", r, g, b, a))
    rgba_chunk = (
        b"RGBA"
        + struct.pack("<II", len(rgba_content), 0)
        + rgba_content
    )

    children = size_chunk + xyzi_chunk + rgba_chunk
    main_chunk = b"MAIN" + struct.pack("<II", 0, len(children)) + children

    with open(path, "wb") as fh:
        fh.write(header)
        fh.write(version)
        fh.write(main_chunk)


def process_images(
    front_path: str,
    output_path: str,
    spec: VolumeSpec,
    *,
    back_path: str | None = None,
    front_layers: int = 1,
    blank_interval: int = 0,
    blank_offset: int = 0,
    blank_length: int = 1,
    gap_layers: int = 0,
    filled_step: int | None = None,
    final_span: int | None = None,
) -> None:
    front_pixels = load_grayscale_png(front_path)
    back_pixels = load_grayscale_png(back_path) if back_path else None
    voxels = generate_trapezoid_voxels(
        front_pixels,
        spec,
        back_pixels=back_pixels,
        front_layers=front_layers,
        blank_interval=blank_interval,
        blank_offset=blank_offset,
        blank_length=blank_length,
        gap_layers=gap_layers,
        filled_step=filled_step,
        final_span=final_span,
    )
    write_vox(output_path, voxels, spec)


def parse_args(argv: Sequence[str]) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generate a trapezoidal MagicaVoxel model from a grayscale PNG."
    )
    parser.add_argument("input", help="Path to the front-facing 8-bit grayscale PNG (square).")
    parser.add_argument("output", help="Path to the output .vox file.")
    parser.add_argument(
        "--back-image",
        help="Optional back-facing PNG used for interior layers (defaults to the front image).",
    )
    parser.add_argument(
        "--front-span",
        type=int,
        default=64,
        help="Square cross-section size at the front face (default: 64).",
    )
    parser.add_argument(
        "--back-span",
        type=int,
        default=128,
        help="Square cross-section size at the back face (default: 128).",
    )
    parser.add_argument(
        "--depth",
        type=int,
        default=64,
        help="Number of layers along the depth axis (default: 64).",
    )
    parser.add_argument(
        "--max-span",
        type=int,
        default=128,
        help="Overall X/Y dimension of the voxel volume (default: 128).",
    )
    parser.add_argument(
        "--front-layers",
        type=int,
        default=1,
        help="Number of leading layers that use the front image when a back image is provided.",
    )
    parser.add_argument(
        "--blank-interval",
        type=int,
        default=0,
        help="Insert an empty layer every N layers starting from blank-offset (0 disables blanks).",
    )
    parser.add_argument(
        "--blank-offset",
        type=int,
        default=0,
        help="Layer index at which the blank interval begins (0-based).",
    )
    parser.add_argument(
        "--blank-length",
        type=int,
        default=1,
        help="Number of consecutive blank layers each time the blank interval triggers (default: 1).",
    )
    parser.add_argument(
        "--gap-layers",
        type=int,
        default=0,
        help="Insert this many empty layers after every filled layer (takes precedence over blank-interval).",
    )
    parser.add_argument(
        "--filled-step",
        type=int,
        help="Fixed increment applied between successive filled layers (overrides linear interpolation).",
    )
    parser.add_argument(
        "--final-span",
        type=int,
        help="Target cross-section size at the deepest filled layer (defaults to back-span).",
    )
    return parser.parse_args(argv)


def main(argv: Sequence[str] | None = None) -> None:
    if argv is None:
        argv = sys.argv[1:]
    args = parse_args(argv)
    spec = VolumeSpec(
        size_x=args.max_span,
        size_y=args.max_span,
        size_z=args.depth,
        front_span=args.front_span,
        back_span=args.back_span,
    )
    process_images(
        args.input,
        args.output,
        spec,
        back_path=args.back_image,
        front_layers=args.front_layers,
        blank_interval=args.blank_interval,
        blank_offset=args.blank_offset,
        blank_length=args.blank_length,
        gap_layers=args.gap_layers,
        filled_step=args.filled_step,
        final_span=args.final_span,
    )


if __name__ == "__main__":
    main()
