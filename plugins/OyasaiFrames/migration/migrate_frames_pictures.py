#!/usr/bin/env python3
"""Copy three legacy stores into OyasaiFrames/frames.db and pictures.db once.

Sources are opened read-only and snapshotted with SQLite backup. Outputs must not exist.
"""

import argparse
from contextlib import closing
import pathlib
import re
import sqlite3
import struct
import tempfile
import uuid
import zlib

FRAMES_SCHEMA = """
CREATE TABLE frames (frame_uuid TEXT PRIMARY KEY, world TEXT, world_name TEXT,
 x INTEGER NOT NULL, y INTEGER NOT NULL, z INTEGER NOT NULL, owner_uuid TEXT,
 map_id INTEGER, facing TEXT, placed_at INTEGER, legacy INTEGER NOT NULL DEFAULT 0,
 detected INTEGER NOT NULL DEFAULT 0, locked_at TEXT,
 CHECK(owner_uuid IS NOT NULL OR map_id IS NOT NULL));
CREATE INDEX frames_map ON frames(map_id);
PRAGMA user_version=1;
"""
PNG_HEADER = b"\x89PNG\r\n\x1a\n"
PIXEL = re.compile(r"^X(-?\d+)_Y(-?\d+):$")
CHANNEL = re.compile(r"^  (RED|GREEN|BLUE): (\d+)$")


def backup(source, target):
    with closing(sqlite3.connect(f"file:{source}?mode=ro", uri=True)) as src:
        with closing(sqlite3.connect(target)) as dst:
            src.backup(dst)


def png_pixels(data):
    if data[:8] != PNG_HEADER:
        raise ValueError("not PNG")
    pos, packed, size = 8, bytearray(), None
    while pos < len(data):
        length = struct.unpack_from(">I", data, pos)[0]
        kind = data[pos + 4:pos + 8]
        body = data[pos + 8:pos + 8 + length]
        if len(body) != length or zlib.crc32(kind + body) != struct.unpack_from(">I", data, pos + 8 + length)[0]:
            raise ValueError("bad PNG chunk")
        pos += 12 + length
        if kind == b"IHDR":
            size = struct.unpack_from(">IIBBBBB", body)
        elif kind == b"IDAT":
            packed.extend(body)
        elif kind == b"IEND":
            break
    if size != (128, 128, 8, 6, 0, 0, 0):
        raise ValueError("unsupported PNG format")
    raw = zlib.decompress(packed)
    out = bytearray(128 * 128 * 4)
    offset = 0
    previous = bytearray(512)
    for y in range(128):
        filtering = raw[offset]
        offset += 1
        row = bytearray(raw[offset:offset + 512])
        if len(row) != 512:
            raise ValueError("truncated PNG")
        offset += 512
        for i in range(512):
            left = row[i - 4] if i >= 4 else 0
            above = previous[i]
            upper_left = previous[i - 4] if i >= 4 else 0
            if filtering == 1:
                row[i] = (row[i] + left) & 255
            elif filtering == 2:
                row[i] = (row[i] + above) & 255
            elif filtering == 3:
                row[i] = (row[i] + (left + above) // 2) & 255
            elif filtering == 4:
                p = left + above - upper_left
                options = (abs(p - left), abs(p - above), abs(p - upper_left))
                row[i] = (row[i] + (left, above, upper_left)[options.index(min(options))]) & 255
            elif filtering != 0:
                raise ValueError("bad PNG filter")
        out[y * 512:(y + 1) * 512] = row
        previous = row
    if offset != len(raw):
        raise ValueError("extra PNG data")
    return out


def png_from_pixels(pixels):
    def chunk(kind, body):
        return struct.pack(">I", len(body)) + kind + body + struct.pack(">I", zlib.crc32(kind + body))
    raw = b"".join(b"\0" + pixels[y * 512:(y + 1) * 512] for y in range(128))
    return PNG_HEADER + chunk(b"IHDR", struct.pack(">IIBBBBB", 128, 128, 8, 6, 0, 0, 0)) + chunk(b"IDAT", zlib.compress(raw)) + chunk(b"IEND", b"")


def yaml_values(path):
    values = {}
    key = None
    for line in path.read_text(encoding="utf-8").splitlines():
        match = PIXEL.match(line)
        if match:
            key = (int(match[1]), int(match[2]))
            values[key] = {}
        elif line == "  ==: Color":
            if key is None:
                raise ValueError(f"orphan color in {path.name}")
        elif match := CHANNEL.match(line):
            if key is None:
                raise ValueError(f"orphan channel in {path.name}")
            values[key][match[1]] = int(match[2])
        elif line.strip() and not line.startswith("#"):
            raise ValueError(f"unknown YAML line in {path.name}: {line[:40]}")
    return values


def tag_list(path):
    lists, last, current = {"ID": [], "LockID": []}, 0, None
    for line in path.read_text(encoding="utf-8").splitlines():
        if line.startswith("- "):
            lists[current].append(int(line[2:]))
        elif line.startswith("LastID:"):
            last = int(line.split(":", 1)[1])
            current = None
        elif line in ("ID:", "LockID:"):
            current = line[:-1]
        elif line.strip():
            raise ValueError(f"unknown tag-list line: {line[:40]}")
    return set(lists["ID"]), set(lists["LockID"]), last


def count(db, table):
    return db.execute(f"SELECT COUNT(*) FROM {table}").fetchone()[0]


def migrate(image_db, locker_db, paint_dir, output_dir, blank_png):
    output_dir.mkdir(parents=True, exist_ok=True)
    frames_path, pictures_path = output_dir / "frames.db", output_dir / "pictures.db"
    if frames_path.exists() or pictures_path.exists():
        raise FileExistsError("output database already exists")
    frames_tmp, pictures_tmp = output_dir / "frames.db.tmp", output_dir / "pictures.db.tmp"
    if frames_tmp.exists() or pictures_tmp.exists():
        raise FileExistsError("previous temporary output exists")
    blank = png_pixels(blank_png.read_bytes())
    with tempfile.TemporaryDirectory(dir=output_dir) as directory:
        locker_copy = pathlib.Path(directory) / "locker.db"
        backup(image_db, pictures_tmp)
        backup(locker_db, locker_copy)
        with closing(sqlite3.connect(pictures_tmp)) as pictures, closing(sqlite3.connect(locker_copy)) as locker, closing(sqlite3.connect(frames_tmp)) as frames:
            if pictures.execute("PRAGMA user_version").fetchone()[0] != 1:
                raise ValueError("unknown image.db version")
            if locker.execute("PRAGMA user_version").fetchone()[0] != 0:
                raise ValueError("unknown gakubuchi.db version")
            if pictures.execute("PRAGMA integrity_check").fetchone()[0] != "ok" or locker.execute("PRAGMA integrity_check").fetchone()[0] != "ok":
                raise ValueError("source integrity_check failed")
            frames.executescript(FRAMES_SCHEMA)
            locks = count(locker, "locked_frames")
            posters = count(pictures, "frames")
            for row in locker.execute("SELECT entity_uuid,world,x,y,z,owner_uuid,locked_at FROM locked_frames"):
                uuid.UUID(row[0]); uuid.UUID(row[5])
                frames.execute("INSERT INTO frames(frame_uuid,world_name,x,y,z,owner_uuid,locked_at) VALUES(?,?,?,?,?,?,?)", row)
            for row in pictures.execute("SELECT frame_uuid,map_id,world,x,y,z,facing,placed_at,legacy,detected FROM frames"):
                uuid.UUID(row[0]); uuid.UUID(row[2])
                frames.execute("INSERT INTO frames(frame_uuid,map_id,world,x,y,z,facing,placed_at,legacy,detected) VALUES(?,?,?,?,?,?,?,?,?,?) ON CONFLICT(frame_uuid) DO UPDATE SET map_id=excluded.map_id,world=excluded.world,x=excluded.x,y=excluded.y,z=excluded.z,facing=excluded.facing,placed_at=excluded.placed_at,legacy=excluded.legacy,detected=excluded.detected", row)
            both = frames.execute("SELECT COUNT(*) FROM frames WHERE owner_uuid IS NOT NULL AND map_id IS NOT NULL").fetchone()[0]
            assert count(frames, "frames") == locks + posters - both
            pictures.execute("DROP TABLE frames")
            pictures.execute("DROP INDEX IF EXISTS frames_map")
            pictures.execute("CREATE TABLE canvases (id INTEGER PRIMARY KEY, png BLOB, locked INTEGER NOT NULL DEFAULT 0, registered INTEGER NOT NULL DEFAULT 1)")
            pictures.execute("CREATE TABLE canvas_meta (id INTEGER PRIMARY KEY CHECK(id=1), last_id INTEGER NOT NULL)")
            tag_path = paint_dir / "MapID_TagList.yml"
            registered, locked, last = tag_list(tag_path) if tag_path.exists() else (set(), set(), 0)
            pictures.execute("INSERT INTO canvas_meta(id,last_id) VALUES(1,?)", (last,))
            pngs = {int(p.stem): p for p in (paint_dir / "img").glob("*.png")}
            yamls = {int(p.stem): p for p in (paint_dir / "data").glob("*.yml")}
            # Files not named in the active tag list are retained, but remain inactive.
            unreadable = []
            from_png = from_yaml = 0
            for canvas_id in sorted(registered | set(pngs) | set(yamls) | locked):
                blob = None
                if canvas_id in yamls:
                    pixels = bytearray(blank)
                    for (x, y), channels in yaml_values(yamls[canvas_id]).items():
                        if set(channels) != {"RED", "GREEN", "BLUE"} or any(v not in range(256) for v in channels.values()):
                            raise ValueError(f"invalid color in {yamls[canvas_id].name}")
                        if 0 <= x < 128 and 0 <= y < 128:
                            offset = (y * 128 + x) * 4
                            pixels[offset:offset + 4] = bytes((channels["RED"], channels["GREEN"], channels["BLUE"], 255))
                    blob = png_from_pixels(pixels)
                    from_yaml += 1
                elif canvas_id in pngs:
                    try:
                        blob = pngs[canvas_id].read_bytes()
                        png_pixels(blob)
                    except (ValueError, IndexError, zlib.error, struct.error):
                        blob = blank_png.read_bytes()
                        unreadable.append(pngs[canvas_id].name)
                    from_png += 1
                pictures.execute("INSERT INTO canvases(id,png,locked,registered) VALUES(?,?,?,?)", (canvas_id, blob, int(canvas_id in locked), int(canvas_id in registered)))
            frames.commit(); pictures.commit()
            pictures.execute("PRAGMA wal_checkpoint(TRUNCATE)")
            pictures.execute("PRAGMA journal_mode=DELETE")
            image_count, map_count = count(pictures, "images"), count(pictures, "maps")
            checks = (frames.execute("PRAGMA integrity_check").fetchone()[0], pictures.execute("PRAGMA integrity_check").fetchone()[0])
            print(f"locks={locks} posters={posters} both={both} frames={count(frames, 'frames')}")
            paint_status = " PaintTools なし" if not paint_dir.exists() else ""
            print(f"images={image_count} maps={map_count} canvases={count(pictures, 'canvases')} png={from_png} yaml={from_yaml} unreadable={len(unreadable)}{paint_status}")
            print(f"unreadable_files={unreadable}")
            print(f"integrity_check frames={checks[0]} pictures={checks[1]}")
            if checks != ("ok", "ok"):
                raise ValueError("output integrity_check failed")
        with closing(sqlite3.connect(frames_tmp)) as frames, closing(sqlite3.connect(pictures_tmp)) as pictures:
            if count(frames, "frames") != locks + posters - both or count(pictures, "images") != image_count or count(pictures, "maps") != map_count or count(pictures, "canvases") != len(registered | set(pngs) | set(yamls) | locked):
                raise ValueError("closed database count mismatch")
            if pictures.execute("SELECT COUNT(*) FROM sqlite_master WHERE name='frames'").fetchone()[0]:
                raise ValueError("old frames table remains in pictures database")
    frames_tmp.rename(frames_path)
    pictures_tmp.rename(pictures_path)


def self_test():
    with tempfile.TemporaryDirectory() as directory:
        root = pathlib.Path(directory)
        paint = root / "PaintTools"
        (paint / "img").mkdir(parents=True)
        (paint / "data").mkdir()
        (paint / "MapID_TagList.yml").write_text("ID:\n- 269356228\n- 12\nLastID: 12\nLockID:\n- 12\n")
        blank = root / "blank.png"
        blank.write_bytes(png_from_pixels(bytearray(128 * 128 * 4)))
        (paint / "img/12.png").write_bytes(blank.read_bytes())
        (paint / "data/269356228.yml").write_text("X0_Y0:\n  ==: Color\n  RED: 255\n  BLUE: 2\n  GREEN: 3\n")
        image = root / "image.db"
        locker = root / "gakubuchi.db"
        a, b, c = (str(uuid.uuid4()) for _ in range(3))
        with sqlite3.connect(image) as db:
            db.executescript("CREATE TABLE images(id INTEGER PRIMARY KEY,owner TEXT NOT NULL,name TEXT,columns INTEGER NOT NULL,rows INTEGER NOT NULL,created_at INTEGER,hidden INTEGER NOT NULL DEFAULT 0); CREATE TABLE maps(map_id INTEGER PRIMARY KEY,image_id INTEGER,idx INTEGER,png BLOB NOT NULL); CREATE TABLE frames(frame_uuid TEXT PRIMARY KEY,map_id INTEGER NOT NULL,world TEXT NOT NULL,x INTEGER NOT NULL,y INTEGER NOT NULL,z INTEGER NOT NULL,facing TEXT NOT NULL,placed_at INTEGER NOT NULL,legacy INTEGER NOT NULL DEFAULT 0,detected INTEGER NOT NULL DEFAULT 0); CREATE INDEX frames_map ON frames(map_id); PRAGMA user_version=1;")
            db.execute("INSERT INTO images(id,owner,columns,rows) VALUES(1,?,1,1)", (str(uuid.uuid4()),))
            db.execute("INSERT INTO maps(map_id,image_id,idx,png) VALUES(5,1,0,?)", (blank.read_bytes(),))
            for frame in (b, c):
                db.execute("INSERT INTO frames VALUES(?,?,?,?,?,?,?,?,?,?)", (frame, 5, str(uuid.uuid4()), 1, 2, 3, "NORTH", 1, 0, 0))
        with sqlite3.connect(locker) as db:
            db.execute("CREATE TABLE locked_frames(entity_uuid TEXT PRIMARY KEY,world TEXT NOT NULL,x INTEGER NOT NULL,y INTEGER NOT NULL,z INTEGER NOT NULL,owner_uuid TEXT NOT NULL,locked_at TIMESTAMP)")
            for frame in (a, c):
                db.execute("INSERT INTO locked_frames VALUES(?,?,?,?,?,?,CURRENT_TIMESTAMP)", (frame, "world", 1, 2, 3, str(uuid.uuid4())))
        migrate(image, locker, paint, root / "out", blank)
        with sqlite3.connect(root / "out/frames.db") as db:
            assert db.execute("SELECT COUNT(*) FROM frames").fetchone()[0] == 3
            assert db.execute("SELECT COUNT(*) FROM frames WHERE owner_uuid IS NOT NULL AND map_id IS NOT NULL").fetchone()[0] == 1
        with sqlite3.connect(root / "out/pictures.db") as db:
            assert count(db, "images") == count(db, "maps") == 1
            assert count(db, "canvases") == 2
            assert db.execute("SELECT locked FROM canvases WHERE id=12").fetchone()[0] == 1
            pixels = png_pixels(db.execute("SELECT png FROM canvases WHERE id=269356228").fetchone()[0])
            assert pixels[:4] == bytes((255, 3, 2, 255))
        (paint / "MapID_TagList.yml").unlink()
        migrate(image, locker, paint, root / "no-tag", blank)
        with sqlite3.connect(root / "no-tag/pictures.db") as db:
            assert count(db, "canvases") == 2
            assert db.execute("SELECT COUNT(*) FROM canvases WHERE registered OR locked").fetchone()[0] == 0
            assert db.execute("SELECT last_id FROM canvas_meta").fetchone()[0] == 0
        migrate(image, locker, root / "no-paint", root / "no-paint-out", blank)
        with sqlite3.connect(root / "no-paint-out/pictures.db") as db:
            assert count(db, "canvases") == 0
            assert db.execute("SELECT last_id FROM canvas_meta").fetchone()[0] == 0
    print("self-test OK")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--image-db", type=pathlib.Path)
    parser.add_argument("--locker-db", type=pathlib.Path)
    parser.add_argument("--paint-dir", type=pathlib.Path)
    parser.add_argument("--output-dir", type=pathlib.Path)
    parser.add_argument("--blank-png", type=pathlib.Path, default=pathlib.Path(__file__).resolve().parents[1] / "src/main/resources/newPNG.png")
    parser.add_argument("--self-test", action="store_true")
    args = parser.parse_args()
    if args.self_test:
        self_test()
    elif all((args.image_db, args.locker_db, args.paint_dir, args.output_dir)):
        migrate(args.image_db, args.locker_db, args.paint_dir, args.output_dir, args.blank_png)
    else:
        parser.error("--image-db, --locker-db, --paint-dir and --output-dir are required")
