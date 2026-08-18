#!/usr/bin/env python3
"""Populate SocialLikes3's players cache from a server world snapshot.

Playerdata holds Paper's bukkit.lastKnownName.  If a server retains only a
short playerdata window, its sibling usercache.json is used as a fallback.
Only UUIDs that already occur in the shadow DB are inserted.
"""

import argparse
import json
import shutil
import sqlite3
import subprocess
import sys
import time
from pathlib import Path


def load_usercache(path: Path) -> dict[str, str]:
    if not path.is_file():
        return {}
    with path.open(encoding="utf-8") as source:
        rows = json.load(source)
    return {
        row["uuid"].lower(): row["name"]
        for row in rows
        if isinstance(row, dict) and isinstance(row.get("uuid"), str) and isinstance(row.get("name"), str)
    }


def load_playerdata_names(playerdata_dir: Path) -> dict[str, str]:
    nbt = shutil.which("nbt")
    if nbt is None:
        print("warning: nbt command is unavailable; skipping playerdata files", file=sys.stderr)
        return {}

    names: dict[str, str] = {}
    for player_file in playerdata_dir.glob("*.dat"):
        try:
            data = json.loads(
                subprocess.check_output(
                    [nbt, "-r", "--json", str(player_file)], text=True, stderr=subprocess.DEVNULL
                )
            )
            name = data.get("bukkit", {}).get("lastKnownName")
            if isinstance(name, str) and name:
                names[player_file.stem.lower()] = name
        except (OSError, subprocess.CalledProcessError, json.JSONDecodeError):
            print(f"warning: could not read {player_file}", file=sys.stderr)
    return names


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--db", type=Path, required=True, help="SocialLikesShadow.db")
    parser.add_argument("--playerdata-dir", type=Path, required=True, help="world/playerdata directory")
    parser.add_argument("--usercache", type=Path, help="server usercache.json; defaults beside world/")
    args = parser.parse_args()

    usercache = args.usercache or args.playerdata_dir.parent.parent / "usercache.json"
    names = load_usercache(usercache)
    usercache_names = len(names)
    playerdata_names = load_playerdata_names(args.playerdata_dir)
    names.update(playerdata_names)  # playerdata is the newer, authoritative observation.

    with sqlite3.connect(args.db) as db:
        db.execute(
            """
            CREATE TABLE IF NOT EXISTS players (
              uuid TEXT PRIMARY KEY,
              last_known_name TEXT NOT NULL,
              last_seen_at INTEGER NOT NULL
            )
            """
        )
        rows = db.execute(
            """
            SELECT owner_uuid AS uuid FROM builds
            UNION SELECT player_uuid FROM build_likes
            UNION SELECT user_uuid FROM publicity_history
            """
        ).fetchall()
        target_uuids = {row[0].lower() for row in rows}
        now = int(time.time() * 1000)
        matches = [(uuid, names[uuid], now) for uuid in target_uuids if uuid in names]
        db.executemany(
            """
            INSERT INTO players (uuid, last_known_name, last_seen_at)
            VALUES (?, ?, ?)
            ON CONFLICT(uuid) DO UPDATE SET
              last_known_name = excluded.last_known_name,
              last_seen_at = excluded.last_seen_at
            """,
            matches,
        )
        cached = db.execute("SELECT COUNT(*) FROM players").fetchone()[0]

    print(
        f"targets={len(target_uuids)} usercache_names={usercache_names} "
        f"playerdata_names={len(playerdata_names)} resolved={len(matches)} players={cached}"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
