#!/usr/bin/env python3
"""Copy three legacy stores into OyasaiFrames/frames.db and pictures.db once.

Sources are opened read-only and snapshotted with SQLite backup. Outputs must not exist.
Export this SELECT result as UTF-8 CSV with its column headers for --coreprotect-csv:

    SELECT w.world AS world_name, b.x, b.y, b.z, b.time AS event_at,
           b.action, u.uuid AS placer_uuid
    FROM co_material_map AS m
    STRAIGHT_JOIN co_block AS b ON b.type = m.id
    JOIN co_world AS w ON w.id = b.wid
    LEFT JOIN co_user AS u ON u.rowid = b.user
    WHERE m.material IN ('minecraft:item_frame', 'minecraft:glow_item_frame')
      AND b.action IN (0, 1) AND b.rolled_back = 0;

CoreProtect times are Unix seconds; action 0 removes and 1 places. Include
rows with NULL placer_uuid; they prevent uncertain ownership assignments.
"""

import argparse
import csv
from contextlib import closing
from datetime import datetime, timezone
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


def frame_events_from_csv(path):
    events = {}
    with path.open(newline="", encoding="utf-8-sig") as file:
        rows = csv.DictReader(file)
        if rows.fieldnames != ["world_name", "x", "y", "z", "event_at", "action", "placer_uuid"]:
            raise ValueError("unexpected CoreProtect CSV columns")
        for row in rows:
            key = (row["world_name"], int(row["x"]), int(row["y"]), int(row["z"]))
            action = int(row["action"])
            if action not in (0, 1):
                raise ValueError("unexpected CoreProtect action")
            owner = row["placer_uuid"]
            if owner in ("", "NULL", "\\N"):
                owner = None
            else:
                try:
                    owner = str(uuid.UUID(owner))
                except (ValueError, TypeError, AttributeError) as exc:
                    raise ValueError(f"invalid placer_uuid at CSV line {rows.line_num}: {owner!r}") from exc
            events.setdefault(key, []).append((int(row["event_at"]), action, owner))
    return events


def adoption_placer(events, world, x, y, z, placed_at):
    history = [(time, action, owner) for time, action, owner in events.get((world, x, y, z), ()) if time * 1000 <= placed_at]
    placements = [(time, owner) for time, action, owner in history if action == 1]
    if not placements:
        return None, "no_record"
    last_removal = max((time for time, action, _ in history if action == 0), default=-1)
    owners = {owner for time, owner in placements if time > last_removal}
    if not owners:
        return None, "removed_after_placement"
    if None in owners:
        return None, "unknown_placer"
    if len(owners) > 1:
        return None, "multiple_placers"
    return next(iter(owners)), "reassigned"


def migrate(image_db, locker_db, paint_dir, output_dir, blank_png, coreprotect_csv):
    events = frame_events_from_csv(coreprotect_csv) if coreprotect_csv else {}
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
            image_owners = dict(pictures.execute("SELECT m.map_id,i.owner FROM maps m JOIN images i ON i.id=m.image_id"))
            picture_frames = {row[0]: row[1:] for row in pictures.execute("SELECT frame_uuid,map_id,x,y,z,placed_at,legacy FROM frames")}
            adoption_locks = []
            for row in locker.execute("SELECT entity_uuid,world,x,y,z,owner_uuid,locked_at FROM locked_frames"):
                uuid.UUID(row[0]); uuid.UUID(row[5])
                frames.execute("INSERT INTO frames(frame_uuid,world_name,x,y,z,owner_uuid,locked_at) VALUES(?,?,?,?,?,?,?)", row)
                picture = picture_frames.get(row[0])
                if picture is None:
                    continue
                map_id, x, y, z, placed_at, legacy = picture
                if (legacy == 1 and (x, y, z) == row[2:5] and image_owners.get(map_id) == row[5]
                        and row[6] is not None and abs(int(datetime.fromisoformat(row[6]).replace(tzinfo=timezone.utc).timestamp()) * 1000 - placed_at) <= 1000):
                    adoption_locks.append((row[0], row[1], x, y, z, placed_at, row[5]))
            for row in pictures.execute("SELECT frame_uuid,map_id,world,x,y,z,facing,placed_at,legacy,detected FROM frames"):
                uuid.UUID(row[0]); uuid.UUID(row[2])
                frames.execute("INSERT INTO frames(frame_uuid,map_id,world,x,y,z,facing,placed_at,legacy,detected) VALUES(?,?,?,?,?,?,?,?,?,?) ON CONFLICT(frame_uuid) DO UPDATE SET map_id=excluded.map_id,world=excluded.world,x=excluded.x,y=excluded.y,z=excluded.z,facing=excluded.facing,placed_at=excluded.placed_at,legacy=excluded.legacy,detected=excluded.detected", row)
            both = frames.execute("SELECT COUNT(*) FROM frames WHERE owner_uuid IS NOT NULL AND map_id IS NOT NULL").fetchone()[0]
            assert count(frames, "frames") == locks + posters - both
            adoption_stats = {key: 0 for key in ("same_owner", "different_owner", "no_record", "removed_after_placement", "unknown_placer", "multiple_placers")}
            for frame_uuid, world, x, y, z, placed_at, old_owner in adoption_locks:
                owner, reason = adoption_placer(events, world, x, y, z, placed_at)
                if owner is not None and owner != old_owner:
                    frames.execute("UPDATE frames SET owner_uuid=? WHERE frame_uuid=?", (owner, frame_uuid))
                if owner is not None:
                    reason = "same_owner" if owner == old_owner else "different_owner"
                adoption_stats[reason] += 1
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
            reassigned = adoption_stats["same_owner"] + adoption_stats["different_owner"]
            kept = len(adoption_locks) - reassigned
            print(f"取り込みロック={len(adoption_locks)} 付け替え={reassigned} (作者と同じ={adoption_stats['same_owner']} 作者と違う={adoption_stats['different_owner']}) "
                  f"作者のまま={kept} (記録なし={adoption_stats['no_record']} 記録後に撤去={adoption_stats['removed_after_placement']} "
                  f"UUID不明={adoption_stats['unknown_placer']} 複数人={adoption_stats['multiple_placers']})")
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
        csv_path = root / "coreprotect.csv"
        a, b, c, d, e, f, g, h, i, j = (str(uuid.uuid4()) for _ in range(10))
        artist, placer, another = (str(uuid.uuid4()) for _ in range(3))
        with csv_path.open("w", newline="") as file:
            writer = csv.writer(file)
            writer.writerow(("world_name", "x", "y", "z", "event_at", "action", "placer_uuid"))
            writer.writerows(("world", x, 2, 3, time, action, owner) for x, time, action, owner in ((3, 999, 1, placer), (4, 1001, 1, placer), (5, 999, 1, placer), (5, 999, 1, another), (6, 999, 1, "NULL"), (7, 999, 1, "\\N"), (9, 999, 1, artist), (10, 998, 1, placer), (10, 999, 0, placer), (11, 999, 1, "")))
        events = frame_events_from_csv(csv_path)
        assert all(events[("world", x, 2, 3)][0][2] is None for x in (6, 7, 11))
        bad_csv = root / "bad-coreprotect.csv"
        bad_csv.write_text("world_name,x,y,z,event_at,action,placer_uuid\nworld,1,2,3,999,1,invalid\n")
        try:
            frame_events_from_csv(bad_csv)
            assert False, "invalid UUID was accepted"
        except ValueError as exc:
            assert "CSV line 2" in str(exc)
        with sqlite3.connect(image) as db:
            db.executescript("CREATE TABLE images(id INTEGER PRIMARY KEY,owner TEXT NOT NULL,name TEXT,columns INTEGER NOT NULL,rows INTEGER NOT NULL,created_at INTEGER,hidden INTEGER NOT NULL DEFAULT 0); CREATE TABLE maps(map_id INTEGER PRIMARY KEY,image_id INTEGER,idx INTEGER,png BLOB NOT NULL); CREATE TABLE frames(frame_uuid TEXT PRIMARY KEY,map_id INTEGER NOT NULL,world TEXT NOT NULL,x INTEGER NOT NULL,y INTEGER NOT NULL,z INTEGER NOT NULL,facing TEXT NOT NULL,placed_at INTEGER NOT NULL,legacy INTEGER NOT NULL DEFAULT 0,detected INTEGER NOT NULL DEFAULT 0); CREATE INDEX frames_map ON frames(map_id); PRAGMA user_version=1;")
            db.execute("INSERT INTO images(id,owner,columns,rows) VALUES(1,?,1,1)", (artist,))
            db.execute("INSERT INTO maps(map_id,image_id,idx,png) VALUES(5,1,0,?)", (blank.read_bytes(),))
            for x, frame in enumerate((b, c, d, e, f, g, h, i, j), 2):
                db.execute("INSERT INTO frames VALUES(?,?,?,?,?,?,?,?,?,?)", (frame, 5, str(uuid.uuid4()), x, 2, 3, "NORTH", 1_000_000, int(frame != g), 0))
        with sqlite3.connect(locker) as db:
            db.execute("CREATE TABLE locked_frames(entity_uuid TEXT PRIMARY KEY,world TEXT NOT NULL,x INTEGER NOT NULL,y INTEGER NOT NULL,z INTEGER NOT NULL,owner_uuid TEXT NOT NULL,locked_at TIMESTAMP)")
            for x, frame, owner in ((1, a, artist), (3, c, artist), (4, d, artist), (5, e, artist), (6, f, artist), (7, g, artist), (8, h, another), (9, i, artist), (10, j, artist)):
                db.execute("INSERT INTO locked_frames VALUES(?,?,?,?,?,?,?)", (frame, "world", x, 2, 3, owner, "1970-01-01 00:16:40"))
        migrate(image, locker, paint, root / "out", blank, csv_path)
        with sqlite3.connect(root / "out/frames.db") as db:
            assert db.execute("SELECT COUNT(*) FROM frames").fetchone()[0] == 10
            owners = dict(db.execute("SELECT frame_uuid,owner_uuid FROM frames"))
            assert owners == {a: artist, b: None, c: placer, d: artist, e: artist, f: artist, g: artist, h: another, i: artist, j: artist}
            assert db.execute("SELECT COUNT(*) FROM frames WHERE owner_uuid IS NOT NULL AND locked_at IS NULL").fetchone()[0] == 0
            assert db.execute("SELECT COUNT(*) FROM frames WHERE owner_uuid IS NULL AND locked_at IS NOT NULL").fetchone()[0] == 0
        migrate(image, locker, paint, root / "no-csv", blank, None)
        with sqlite3.connect(root / "no-csv/frames.db") as db:
            assert dict(db.execute("SELECT frame_uuid,owner_uuid FROM frames")) == {a: artist, b: None, c: artist, d: artist, e: artist, f: artist, g: artist, h: another, i: artist, j: artist}
        with sqlite3.connect(root / "out/pictures.db") as db:
            assert count(db, "images") == count(db, "maps") == 1
            assert count(db, "canvases") == 2
            assert db.execute("SELECT locked FROM canvases WHERE id=12").fetchone()[0] == 1
            pixels = png_pixels(db.execute("SELECT png FROM canvases WHERE id=269356228").fetchone()[0])
            assert pixels[:4] == bytes((255, 3, 2, 255))
        (paint / "MapID_TagList.yml").unlink()
        migrate(image, locker, paint, root / "no-tag", blank, csv_path)
        with sqlite3.connect(root / "no-tag/pictures.db") as db:
            assert count(db, "canvases") == 2
            assert db.execute("SELECT COUNT(*) FROM canvases WHERE registered OR locked").fetchone()[0] == 0
            assert db.execute("SELECT last_id FROM canvas_meta").fetchone()[0] == 0
        migrate(image, locker, root / "no-paint", root / "no-paint-out", blank, csv_path)
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
    parser.add_argument("--coreprotect-csv", type=pathlib.Path)
    parser.add_argument("--blank-png", type=pathlib.Path, default=pathlib.Path(__file__).resolve().parents[1] / "src/main/resources/newPNG.png")
    parser.add_argument("--self-test", action="store_true")
    args = parser.parse_args()
    if args.self_test:
        self_test()
    elif all((args.image_db, args.locker_db, args.paint_dir, args.output_dir)):
        migrate(args.image_db, args.locker_db, args.paint_dir, args.output_dir, args.blank_png, args.coreprotect_csv)
    else:
        parser.error("--image-db, --locker-db, --paint-dir and --output-dir are required")
