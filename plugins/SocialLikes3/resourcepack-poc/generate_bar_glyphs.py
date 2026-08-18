#!/usr/bin/env python3
import json
import os
import struct
import zlib

# Tweak these values, rerun this script, and rebuild sociallikes-graph-pack.zip.
BAR_TEXTURE_WIDTH = 18
BAR_DRAW_WIDTH = 14
BAR_DRAW_OFFSET_X = 2
TEXTURE_HEIGHT = 90
FONT_HEIGHT = 90
FONT_ASCENT = 0
LEVELS = 16

BACKGROUND_TEXTURE_WIDTH = 168
BACKGROUND_TEXTURE_HEIGHT = 90
BACKGROUND_CODE_POINT = 0xF8F0
CURSOR_RESET_CODE_POINT = 0xF8F1
CURSOR_RESET_ADVANCE = -168
BAR_START_OFFSET_CODE_POINT = 0xF8F2
BAR_START_OFFSET_ADVANCE = 8
BAR_BASE_CODE_POINT = 0xF900
BAR_SEPARATOR_CODE_POINT = 0xF8FF
BAR_SEPARATOR_ADVANCE = 0
PLOT_LEFT = 8
PLOT_RIGHT = 167
PLOT_TOP = 20
PLOT_BASELINE_Y = 82
GRID_LEVELS = (0, 4, 8, 12, 16)

FONT_JSON = "sociallikes_graph.json"
TEXTURE_NAMESPACE_PATH = "minecraft:font/sociallikes_graph"

BG_RGBA = (0, 0, 0, 0)
PANEL_RGBA = (35, 37, 35, 255)
PANEL_INNER_RGBA = (43, 47, 43, 255)
PANEL_HIGHLIGHT_RGBA = (82, 88, 78, 255)
PANEL_SHADOW_RGBA = (13, 14, 13, 255)
GRID_RGBA = (104, 127, 93, 90)
GRID_MAJOR_RGBA = (146, 179, 112, 150)
TEXT_RGBA = (238, 244, 232, 255)
TEXT_SHADOW_RGBA = (18, 23, 17, 180)

BAR_FILL_RGBA = (176, 246, 84, 255)
BAR_OUTLINE_RGBA = (38, 78, 30, 255)
BAR_HIGHLIGHT_RGBA = (232, 255, 145, 255)
BAR_SHADOW_RGBA = (91, 153, 49, 255)
ZERO_BASE_RGBA = (75, 103, 60, 255)
AXIS_RGBA = (148, 197, 95, 210)

DIGIT_FONT = {
    "0": ["11111", "10001", "10011", "10101", "11001", "10001", "11111"],
    "1": ["00100", "01100", "00100", "00100", "00100", "00100", "01110"],
    "2": ["11110", "00001", "00001", "11110", "10000", "10000", "11111"],
    "3": ["11110", "00001", "00001", "01110", "00001", "00001", "11110"],
    "4": ["10010", "10010", "10010", "11111", "00010", "00010", "00010"],
    "5": ["11111", "10000", "10000", "11110", "00001", "00001", "11110"],
    "6": ["01111", "10000", "10000", "11110", "10001", "10001", "01110"],
    "7": ["11111", "00001", "00010", "00100", "01000", "01000", "01000"],
    "8": ["01110", "10001", "10001", "01110", "10001", "10001", "01110"],
    "9": ["01110", "10001", "10001", "01111", "00001", "00001", "11110"],
    "/": ["00001", "00010", "00010", "00100", "01000", "01000", "10000"],
}

LETTER_FONT = {
    "A": ["01110", "10001", "10001", "11111", "10001", "10001", "10001"],
    "E": ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
    "I": ["11111", "00100", "00100", "00100", "00100", "00100", "11111"],
    "K": ["10001", "10010", "10100", "11000", "10100", "10010", "10001"],
    "L": ["10000", "10000", "10000", "10000", "10000", "10000", "11111"],
    "S": ["01111", "10000", "10000", "01110", "00001", "00001", "11110"],
    "W": ["10001", "10001", "10001", "10101", "10101", "11011", "10001"],
    "Y": ["10001", "10001", "01010", "00100", "00100", "00100", "00100"],
    " ": ["00000", "00000", "00000", "00000", "00000", "00000", "00000"],
}

TEXT_FONT = {**DIGIT_FONT, **LETTER_FONT}


def png_chunk(kind, data):
    return (
        struct.pack(">I", len(data))
        + kind
        + data
        + struct.pack(">I", zlib.crc32(kind + data) & 0xFFFFFFFF)
    )


def write_png(path, rows):
    height = len(rows)
    width = len(rows[0])
    raw = b"".join(b"\x00" + b"".join(bytes(pixel) for pixel in row) for row in rows)
    data = b"\x89PNG\r\n\x1a\n"
    data += png_chunk(
        b"IHDR", struct.pack(">IIBBBBB", width, height, 8, 6, 0, 0, 0)
    )
    data += png_chunk(b"IDAT", zlib.compress(raw, 9))
    data += png_chunk(b"IEND", b"")
    with open(path, "wb") as f:
        f.write(data)


def make_background_rows():
    rows = [
        [PANEL_RGBA for _ in range(BACKGROUND_TEXTURE_WIDTH)]
        for _ in range(BACKGROUND_TEXTURE_HEIGHT)
    ]

    for y in range(2, BACKGROUND_TEXTURE_HEIGHT - 2):
        for x in range(2, BACKGROUND_TEXTURE_WIDTH - 2):
            rows[y][x] = PANEL_INNER_RGBA

    for x in range(BACKGROUND_TEXTURE_WIDTH):
        rows[0][x] = PANEL_HIGHLIGHT_RGBA
        rows[1][x] = PANEL_HIGHLIGHT_RGBA if x < BACKGROUND_TEXTURE_WIDTH - 1 else PANEL_SHADOW_RGBA
        rows[BACKGROUND_TEXTURE_HEIGHT - 2][x] = PANEL_SHADOW_RGBA
        rows[BACKGROUND_TEXTURE_HEIGHT - 1][x] = PANEL_SHADOW_RGBA

    for y in range(BACKGROUND_TEXTURE_HEIGHT):
        rows[y][0] = PANEL_HIGHLIGHT_RGBA
        rows[y][1] = PANEL_HIGHLIGHT_RGBA if y < BACKGROUND_TEXTURE_HEIGHT - 1 else PANEL_SHADOW_RGBA
        rows[y][BACKGROUND_TEXTURE_WIDTH - 2] = PANEL_SHADOW_RGBA
        rows[y][BACKGROUND_TEXTURE_WIDTH - 1] = PANEL_SHADOW_RGBA

    for level in GRID_LEVELS:
        y = scale_y(level)
        color = GRID_MAJOR_RGBA if level in (16, 0) else GRID_RGBA
        for x in range(PLOT_LEFT, BACKGROUND_TEXTURE_WIDTH - 1):
            rows[y][x] = color

    title = "WEEKLY LIKES"
    draw_text(rows, title, (BACKGROUND_TEXTURE_WIDTH - text_width(title)) // 2, 6, TEXT_RGBA)

    return rows


def scale_y(level):
    return PLOT_BASELINE_Y - round((level / LEVELS) * (PLOT_BASELINE_Y - PLOT_TOP))


def text_width(text):
    if not text:
        return 0
    return sum(len(TEXT_FONT[ch][0]) for ch in text if ch in TEXT_FONT) + max(len(text) - 1, 0)


def draw_text(rows, text, x, y, color):
    draw_text_raw(rows, text, x + 1, y + 1, TEXT_SHADOW_RGBA)
    draw_text_raw(rows, text, x, y, color)


def draw_text_raw(rows, text, x, y, color):
    cursor_x = x
    for ch in text:
        glyph = TEXT_FONT.get(ch)
        if glyph is None:
            cursor_x += 6
            continue
        for gy, pattern in enumerate(glyph):
            for gx, bit in enumerate(pattern):
                px = cursor_x + gx
                py = y + gy
                if bit == "1" and 0 <= px < BACKGROUND_TEXTURE_WIDTH and 0 <= py < BACKGROUND_TEXTURE_HEIGHT:
                    rows[py][px] = color
        cursor_x += len(glyph[0]) + 1


def make_bar_rows(level):
    rows = [[BG_RGBA for _ in range(BAR_TEXTURE_WIDTH)] for _ in range(TEXTURE_HEIGHT)]
    axis_y = PLOT_BASELINE_Y
    bar_height = round((level / LEVELS) * (PLOT_BASELINE_Y - PLOT_TOP))

    if bar_height > 0:
        top = axis_y - bar_height
        bottom = axis_y - 1

        for y in range(top, bottom + 1):
            for x in range(BAR_DRAW_WIDTH):
                px = x + BAR_DRAW_OFFSET_X
                is_outline = x == 0 or x == BAR_DRAW_WIDTH - 1 or y == top or y == bottom
                rows[y][px] = BAR_OUTLINE_RGBA if is_outline else BAR_FILL_RGBA

        for x in range(BAR_DRAW_WIDTH):
            rows[top][x + BAR_DRAW_OFFSET_X] = BAR_HIGHLIGHT_RGBA
        for y in range(top, bottom + 1):
            rows[y][BAR_DRAW_OFFSET_X] = BAR_HIGHLIGHT_RGBA
            rows[y][BAR_DRAW_OFFSET_X + BAR_DRAW_WIDTH - 1] = BAR_SHADOW_RGBA
        for x in range(BAR_DRAW_WIDTH):
            rows[bottom][x + BAR_DRAW_OFFSET_X] = BAR_SHADOW_RGBA
    else:
        for y in range(axis_y - 2, axis_y):
            for x in range(1, BAR_DRAW_WIDTH - 1):
                rows[y][x + BAR_DRAW_OFFSET_X] = ZERO_BASE_RGBA

    rows[axis_y] = [AXIS_RGBA for _ in range(BAR_TEXTURE_WIDTH)]
    return rows


def write_font_json(base_dir):
    providers = [
        {
            "type": "space",
            "advances": {
                chr(CURSOR_RESET_CODE_POINT): CURSOR_RESET_ADVANCE,
                chr(BAR_START_OFFSET_CODE_POINT): BAR_START_OFFSET_ADVANCE,
                chr(BAR_SEPARATOR_CODE_POINT): BAR_SEPARATOR_ADVANCE,
            },
        },
        {
            "type": "bitmap",
            "file": f"{TEXTURE_NAMESPACE_PATH}/background_panel.png",
            "ascent": FONT_ASCENT,
            "height": FONT_HEIGHT,
            "chars": [chr(BACKGROUND_CODE_POINT)],
        },
    ]
    for level in range(LEVELS + 1):
        providers.append(
            {
                "type": "bitmap",
                "file": f"{TEXTURE_NAMESPACE_PATH}/bar_{level:02d}.png",
                "ascent": FONT_ASCENT,
                "height": FONT_HEIGHT,
                "chars": [chr(BAR_BASE_CODE_POINT + level)],
            }
        )

    font_dir = os.path.join(base_dir, "assets", "minecraft", "font")
    os.makedirs(font_dir, exist_ok=True)
    with open(os.path.join(font_dir, FONT_JSON), "w", encoding="utf-8") as f:
        json.dump({"providers": providers}, f, ensure_ascii=True, indent=2)
        f.write("\n")


def main():
    base_dir = os.path.dirname(__file__)
    out_dir = os.path.join(base_dir, "assets", "minecraft", "textures", "font", "sociallikes_graph")
    os.makedirs(out_dir, exist_ok=True)

    write_png(os.path.join(out_dir, "background_panel.png"), make_background_rows())
    for level in range(LEVELS + 1):
        write_png(os.path.join(out_dir, f"bar_{level:02d}.png"), make_bar_rows(level))
    write_font_json(base_dir)


if __name__ == "__main__":
    main()
