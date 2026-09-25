#!/usr/bin/env python3
"""停止中の旧 ImageOnMap データを一度だけ SQLite に変換する。"""

import argparse
import pathlib
import sqlite3
import struct
import tempfile
import uuid
import zlib

import yaml


SCHEMA = """
CREATE TABLE images (
 id INTEGER PRIMARY KEY, owner TEXT NOT NULL, name TEXT,
 columns INTEGER NOT NULL, rows INTEGER NOT NULL,
 created_at INTEGER, hidden INTEGER NOT NULL DEFAULT 0
);
CREATE TABLE maps (
 map_id INTEGER PRIMARY KEY, image_id INTEGER REFERENCES images(id),
 idx INTEGER, png BLOB NOT NULL, UNIQUE(image_id, idx)
);
CREATE INDEX images_owner ON images(owner, hidden);
PRAGMA user_version = 1;
"""


def indexed_entries(path):
    data = yaml.safe_load(path.read_text(encoding="utf-8"))
    entries = data["PlayerMapStore"]["mapList"]
    if not isinstance(entries, (dict, list)):
        raise ValueError(f"invalid mapList in {path.name}")
    return entries.values() if isinstance(entries, dict) else entries


def migrate(root):
    target = root / "image.db"
    tmp = root / "image.db.tmp"
    if target.exists():
        print("image.db は既にあります。変更しません")
        return
    if tmp.exists():
        raise RuntimeError("image.db.tmp が既にあります。調査してから再実行してください")
    index = {}
    png_paths = sorted((root / "images").glob("map*.png"))
    db = sqlite3.connect(tmp)
    try:
        db.execute("PRAGMA foreign_keys=ON")
        db.executescript(SCHEMA)
        image_count = 0
        for path in sorted((root / "maps").glob("*.yml")):
            owner = str(uuid.UUID(path.stem))
            for entry in indexed_entries(path):
                kind = entry.get("type")
                if kind == "POSTER":
                    columns, rows = int(entry["columns"]), int(entry["rows"])
                    ids = [int(x) for x in entry["mapsIDs"]]
                elif kind == "SINGLE":
                    columns, rows, ids = 1, 1, [int(entry["mapID"])]
                else:
                    raise ValueError(f"unknown map type in {path.name}")
                if columns < 1 or rows < 1 or len(ids) != columns * rows:
                    raise ValueError(f"invalid poster shape in {path.name}")
                image_id = db.execute(
                    "INSERT INTO images(owner,name,columns,rows) VALUES(?,?,?,?)",
                    (owner, entry.get("name"), columns, rows),
                ).lastrowid
                for idx, map_id in enumerate(ids):
                    if map_id in index:
                        raise ValueError(f"duplicate map ID {map_id}")
                    index[map_id] = (image_id, idx)
                image_count += 1
        unindexed = 0
        seen = set()
        for count, path in enumerate(png_paths, 1):
            map_id = int(path.stem.removeprefix("map"))
            if map_id in seen:
                raise ValueError(f"duplicate PNG ID {map_id}")
            seen.add(map_id)
            blob = path.read_bytes()
            if blob[:8] != b"\x89PNG\r\n\x1a\n" or blob[12:16] != b"IHDR" or struct.unpack(">II", blob[16:24]) != (128, 128):
                raise ValueError(f"not a 128x128 PNG: {path.name}")
            image_id, idx = index.get(map_id, (None, None))
            if image_id is None:
                unindexed += 1
            db.execute("INSERT INTO maps(map_id,image_id,idx,png) VALUES(?,?,?,?)", (map_id, image_id, idx, blob))
            if count % 10000 == 0:
                print(f"PNG {count} 件処理済み", flush=True)
        missing = sorted(index.keys() - seen)
        db.commit()
        rows = db.execute("SELECT COUNT(*) FROM maps").fetchone()[0]
        integrity = db.execute("PRAGMA integrity_check").fetchone()[0]
        print(f"PNG 数={len(png_paths)} maps 行数={rows} 索引件数={image_count} 索引 ID 数={len(index)} 索引外 PNG 数={unindexed} PNG の無い索引 ID 数={len(missing)}")
        print(f"PNG の無い索引 ID: {missing}")
        print(f"integrity_check={integrity}")
        if rows != len(png_paths) or integrity != "ok" or rows != len(seen):
            raise RuntimeError("検査不一致。tmp を残しました")
    except Exception:
        db.close()
        raise
    db.close()
    tmp.rename(target)


def make_png():
    raw = b"".join(b"\0" + b"\0\0\0\0" * 128 for _ in range(128))
    def chunk(kind, value):
        return struct.pack(">I", len(value)) + kind + value + struct.pack(">I", zlib.crc32(kind + value))
    return b"\x89PNG\r\n\x1a\n" + chunk(b"IHDR", struct.pack(">IIBBBBB", 128, 128, 8, 6, 0, 0, 0)) + chunk(b"IDAT", zlib.compress(raw)) + chunk(b"IEND", b"")


def self_test():
    with tempfile.TemporaryDirectory() as directory:
        root = pathlib.Path(directory)
        (root / "maps").mkdir()
        (root / "images").mkdir()
        owners = [uuid.uuid4(), uuid.uuid4()]
        entries = [
            [{"type": "POSTER", "columns": 2, "rows": 1, "mapsIDs": [11, 12], "name": "poster"}],
            [{"type": "SINGLE", "mapID": 13, "name": "single"}],
        ]
        for owner, maps in zip(owners, entries):
            (root / "maps" / f"{owner}.yml").write_text(yaml.safe_dump({"PlayerMapStore": {"mapList": maps}}), encoding="utf-8")
        for map_id in (11, 13, 99):
            (root / "images" / f"map{map_id}.png").write_bytes(make_png())
        migrate(root)
        with sqlite3.connect(root / "image.db") as db:
            assert db.execute("SELECT COUNT(*) FROM maps").fetchone()[0] == 3
            assert db.execute("SELECT COUNT(*) FROM images").fetchone()[0] == 2
            assert db.execute("SELECT image_id FROM maps WHERE map_id=99").fetchone()[0] is None
            assert db.execute("SELECT COUNT(*) FROM maps WHERE map_id=12").fetchone()[0] == 0
        migrate(root)
    print("self-test OK")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--data-dir", type=pathlib.Path)
    parser.add_argument("--self-test", action="store_true")
    args = parser.parse_args()
    if args.self_test:
        self_test()
    elif args.data_dir:
        migrate(args.data_dir)
    else:
        parser.error("--data-dir または --self-test が必要です")
