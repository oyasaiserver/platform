#!/usr/bin/env python3
"""Compare SocialLikes3 YAML data with the SQLite shadow database.

This script is intentionally offline-only: point it at a copied SocialLikes3
data directory, not at a live production directory.
"""

from __future__ import annotations

import argparse
import json
import math
import re
import sqlite3
import sys
import uuid
from pathlib import Path
from typing import Any
from urllib.parse import quote


SCALAR_INT_RE = re.compile(r"^-?[0-9]+$")
SCALAR_FLOAT_RE = re.compile(r"^-?(?:[0-9]+\.[0-9]*|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$")


def parse_scalar(value: str) -> Any:
    if value.startswith(" "):
        value = value[1:]
    stripped = value.strip()
    if stripped == "":
        return ""
    if stripped in {"[]", "[ ]"}:
        return []
    lower = stripped.lower()
    if lower == "true":
        return True
    if lower == "false":
        return False
    if lower in {"null", "~"}:
        return None
    if len(stripped) >= 2 and stripped[0] == stripped[-1] == "'":
        return stripped[1:-1].replace("''", "'")
    if len(stripped) >= 2 and stripped[0] == stripped[-1] == '"':
        return stripped[1:-1]
    if SCALAR_INT_RE.match(stripped):
        return int(stripped)
    if SCALAR_FLOAT_RE.match(stripped):
        return float(stripped)
    return value


def parse_key(key: str) -> str:
    key = key.strip()
    if len(key) >= 2 and key[0] == key[-1] and key[0] in {"'", '"'}:
        return key[1:-1]
    return key


def parse_bukkit_yaml(path: Path) -> dict[str, Any]:
    root: dict[str, Any] = {}
    stack: list[tuple[int, Any]] = [(-1, root)]

    for raw_line in path.read_text(encoding="utf-8").splitlines():
        if not raw_line.strip() or raw_line.lstrip().startswith("#"):
            continue
        indent = len(raw_line) - len(raw_line.lstrip(" "))
        line = raw_line[indent:]

        is_list_item = line.startswith("- ")
        while (indent < stack[-1][0]) or (indent == stack[-1][0] and not is_list_item):
            stack.pop()
        parent = stack[-1][1]

        if is_list_item:
            if not isinstance(parent, list):
                raise ValueError(f"list item without list parent in {path}: {raw_line}")
            parent.append(parse_scalar(line[2:]))
            continue

        if ":" not in line:
            raise ValueError(f"cannot parse line in {path}: {raw_line}")
        key_text, value_text = line.split(":", 1)
        key = parse_key(key_text)

        if value_text.strip() == "":
            value: Any = [] if key == "likes" else {}
            parent[key] = value
            stack.append((indent, value))
        else:
            parent[key] = parse_scalar(value_text)

    return root


def normalize_uuid(value: Any) -> str:
    return str(uuid.UUID(str(value)))


def java_block_coord(value: float) -> int:
    return math.floor(value)


def java_chunk_coord(value: float) -> int:
    return java_block_coord(value) >> 4


def to_int_or_none(value: Any) -> int | None:
    if value is None:
        return None
    if isinstance(value, bool):
        return int(value)
    if isinstance(value, int):
        return value
    if isinstance(value, float):
        return int(value)
    text = str(value).strip()
    if text == "":
        return None
    return int(text)


def load_yaml_builds(data_dir: Path) -> tuple[dict[int, dict[str, Any]], dict[tuple[int, str], dict[str, Any]], list[str]]:
    builds: dict[int, dict[str, Any]] = {}
    likes: dict[tuple[int, str], dict[str, Any]] = {}
    warnings: list[str] = []

    for path in sorted((data_dir / "data").glob("*/*.yml")):
        raw = parse_bukkit_yaml(path)
        loc = raw.get("loc") or {}
        build_id = int(raw["id"])
        x = float(loc["x"])
        y = float(loc["y"])
        z = float(loc["z"])
        builds[build_id] = {
            "id": build_id,
            "world_name": str(loc["world"]),
            "loc_x": x,
            "loc_y": y,
            "loc_z": z,
            "chunk_x": java_chunk_coord(x),
            "chunk_z": java_chunk_coord(z),
            "created_at": str(raw["time"]),
            "owner_uuid": normalize_uuid(raw["owner"]),
            "title": str(raw["title"]),
            "checked": bool(raw.get("check", False)),
            "comment": str(raw.get("comment", "No comment")),
            "discord_text_id": int(raw.get("DiscordTextID", 0)),
        }

        timestamp_map_raw = raw.get("likesWithTimestamp") or {}
        timestamp_map: dict[str, int] = {}
        if isinstance(timestamp_map_raw, dict):
            for player, timestamp in timestamp_map_raw.items():
                parsed_timestamp = to_int_or_none(timestamp)
                if parsed_timestamp is not None:
                    timestamp_map[normalize_uuid(player)] = parsed_timestamp

        seen_players: set[str] = set()
        for player in raw.get("likes") or []:
            player_uuid = normalize_uuid(player)
            if player_uuid in seen_players:
                warnings.append(f"duplicate YAML like ignored: build_id={build_id} player_uuid={player_uuid}")
                continue
            seen_players.add(player_uuid)
            likes[(build_id, player_uuid)] = {
                "build_id": build_id,
                "player_uuid": player_uuid,
                "liked_at": timestamp_map.get(player_uuid),
            }

    return builds, likes, warnings


def load_yaml_publicity(data_dir: Path) -> dict[int, dict[str, Any]]:
    path = data_dir / "PublicityHistory.yml"
    if not path.exists():
        return {}
    raw = parse_bukkit_yaml(path)
    rows: dict[int, dict[str, Any]] = {}
    for row_id_text, row_raw in raw.items():
        if not isinstance(row_raw, dict):
            continue
        row_id = int(row_id_text)
        rows[row_id] = {
            "id": row_id,
            "timestamp": str(row_raw["TimeStamp"]),
            "user_uuid": normalize_uuid(row_raw["User"]),
            "sl_id": int(row_raw["SLID"]),
        }
    return rows


def connect_readonly(db_path: Path) -> sqlite3.Connection:
    uri = f"file:{quote(str(db_path))}?mode=ro"
    return sqlite3.connect(uri, uri=True)


def load_sqlite(data_dir: Path) -> tuple[dict[int, dict[str, Any]], dict[tuple[int, str], dict[str, Any]], dict[int, dict[str, Any]]]:
    db_path = data_dir / "SocialLikesShadow.db"
    if not db_path.exists():
        raise FileNotFoundError(db_path)

    conn = connect_readonly(db_path)
    conn.row_factory = sqlite3.Row
    try:
        builds = {
            int(row["id"]): {
                "id": int(row["id"]),
                "world_name": str(row["world_name"]),
                "loc_x": float(row["loc_x"]),
                "loc_y": float(row["loc_y"]),
                "loc_z": float(row["loc_z"]),
                "chunk_x": int(row["chunk_x"]),
                "chunk_z": int(row["chunk_z"]),
                "created_at": str(row["created_at"]),
                "owner_uuid": normalize_uuid(row["owner_uuid"]),
                "title": str(row["title"]),
                "checked": bool(row["checked"]),
                "comment": str(row["comment"]),
                "discord_text_id": int(row["discord_text_id"]),
            }
            for row in conn.execute(
                """
                SELECT id, world_name, loc_x, loc_y, loc_z, chunk_x, chunk_z,
                       created_at, owner_uuid, title, checked, comment, discord_text_id
                  FROM builds
                """
            )
        }
        likes = {
            (int(row["build_id"]), normalize_uuid(row["player_uuid"])): {
                "build_id": int(row["build_id"]),
                "player_uuid": normalize_uuid(row["player_uuid"]),
                "liked_at": to_int_or_none(row["liked_at"]),
            }
            for row in conn.execute("SELECT build_id, player_uuid, liked_at FROM build_likes")
        }
        publicity = {
            int(row["id"]): {
                "id": int(row["id"]),
                "timestamp": str(row["timestamp"]),
                "user_uuid": normalize_uuid(row["user_uuid"]),
                "sl_id": int(row["sl_id"]),
            }
            for row in conn.execute("SELECT id, timestamp, user_uuid, sl_id FROM publicity_history")
        }
        return builds, likes, publicity
    finally:
        conn.close()


def values_equal(left: Any, right: Any) -> bool:
    if isinstance(left, float) or isinstance(right, float):
        return abs(float(left) - float(right)) <= 0.000000001
    return left == right


def compare_rows(
    yaml_rows: dict[Any, dict[str, Any]],
    sqlite_rows: dict[Any, dict[str, Any]],
    fields: list[str],
    example_limit: int,
) -> dict[str, Any]:
    complete = 0
    real_mismatch_count = 0
    examples: list[dict[str, Any]] = []

    yaml_keys = set(yaml_rows)
    sqlite_keys = set(sqlite_rows)

    for key in sorted(yaml_keys - sqlite_keys, key=str):
        real_mismatch_count += 1
        if len(examples) < example_limit:
            examples.append({"key": key, "kind": "missing_in_sqlite"})
    for key in sorted(sqlite_keys - yaml_keys, key=str):
        real_mismatch_count += 1
        if len(examples) < example_limit:
            examples.append({"key": key, "kind": "extra_in_sqlite"})

    for key in sorted(yaml_keys & sqlite_keys, key=str):
        diffs = []
        for field in fields:
            yaml_value = yaml_rows[key][field]
            sqlite_value = sqlite_rows[key][field]
            if not values_equal(yaml_value, sqlite_value):
                diffs.append({"field": field, "yaml": yaml_value, "sqlite": sqlite_value})
        if diffs:
            real_mismatch_count += 1
            if len(examples) < example_limit:
                examples.append({"key": key, "kind": "field_mismatch", "diffs": diffs[:5]})
        else:
            complete += 1

    return {
        "yaml_count": len(yaml_rows),
        "sqlite_count": len(sqlite_rows),
        "complete_match_count": complete,
        "known_missing_count": 0,
        "real_mismatch_count": real_mismatch_count,
        "examples": examples,
    }


def compare_likes(
    yaml_rows: dict[tuple[int, str], dict[str, Any]],
    sqlite_rows: dict[tuple[int, str], dict[str, Any]],
    example_limit: int,
) -> dict[str, Any]:
    complete = 0
    known_missing_count = 0
    real_mismatch_count = 0
    examples: list[dict[str, Any]] = []
    known_missing_examples: list[dict[str, Any]] = []

    yaml_keys = set(yaml_rows)
    sqlite_keys = set(sqlite_rows)

    for key in sorted(yaml_keys - sqlite_keys, key=str):
        real_mismatch_count += 1
        if len(examples) < example_limit:
            examples.append({"key": {"build_id": key[0], "player_uuid": key[1]}, "kind": "missing_in_sqlite"})
    for key in sorted(sqlite_keys - yaml_keys, key=str):
        real_mismatch_count += 1
        if len(examples) < example_limit:
            examples.append({"key": {"build_id": key[0], "player_uuid": key[1]}, "kind": "extra_in_sqlite"})

    for key in sorted(yaml_keys & sqlite_keys, key=str):
        yaml_liked_at = yaml_rows[key]["liked_at"]
        sqlite_liked_at = sqlite_rows[key]["liked_at"]
        if yaml_liked_at == sqlite_liked_at:
            complete += 1
        elif yaml_liked_at is None and sqlite_liked_at is not None:
            known_missing_count += 1
            if len(known_missing_examples) < example_limit:
                known_missing_examples.append(
                    {
                        "key": {"build_id": key[0], "player_uuid": key[1]},
                        "kind": "yaml_liked_at_missing",
                        "yaml": yaml_liked_at,
                        "sqlite": sqlite_liked_at,
                    }
                )
        else:
            real_mismatch_count += 1
            if len(examples) < example_limit:
                examples.append(
                    {
                        "key": {"build_id": key[0], "player_uuid": key[1]},
                        "kind": "liked_at_mismatch",
                        "yaml": yaml_liked_at,
                        "sqlite": sqlite_liked_at,
                    }
                )

    return {
        "yaml_count": len(yaml_rows),
        "sqlite_count": len(sqlite_rows),
        "pair_match_count": len(yaml_keys & sqlite_keys),
        "complete_match_count": complete,
        "known_missing_count": known_missing_count,
        "known_missing_examples": known_missing_examples,
        "real_mismatch_count": real_mismatch_count,
        "examples": examples,
    }


def compare(data_dir: Path, example_limit: int) -> dict[str, Any]:
    yaml_builds, yaml_likes, warnings = load_yaml_builds(data_dir)
    yaml_publicity = load_yaml_publicity(data_dir)
    sqlite_builds, sqlite_likes, sqlite_publicity = load_sqlite(data_dir)

    return {
        "data_dir": str(data_dir),
        "warnings": warnings[:example_limit],
        "warning_count": len(warnings),
        "tables": {
            "builds": compare_rows(
                yaml_builds,
                sqlite_builds,
                [
                    "id",
                    "world_name",
                    "loc_x",
                    "loc_y",
                    "loc_z",
                    "chunk_x",
                    "chunk_z",
                    "created_at",
                    "owner_uuid",
                    "title",
                    "checked",
                    "comment",
                    "discord_text_id",
                ],
                example_limit,
            ),
            "build_likes": compare_likes(yaml_likes, sqlite_likes, example_limit),
            "publicity_history": compare_rows(
                yaml_publicity,
                sqlite_publicity,
                ["id", "timestamp", "user_uuid", "sl_id"],
                example_limit,
            ),
        },
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("data_dir", type=Path, help="Copied SocialLikes3 data directory")
    parser.add_argument("--example-limit", type=int, default=10)
    args = parser.parse_args()

    result = compare(args.data_dir, args.example_limit)
    json.dump(result, sys.stdout, ensure_ascii=False, indent=2, sort_keys=True)
    print()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
