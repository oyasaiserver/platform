#!/usr/bin/env python3
"""Write current SQLite balances back to an offline copy of Essentials userdata."""

import argparse
from pathlib import Path
import re
import sqlite3

MONEY = re.compile(r"^money:.*$", re.MULTILINE)


def restore(database, userdata):
    directory = Path(userdata)
    with sqlite3.connect(database) as db:
        rows = list(db.execute("SELECT uuid, balance FROM accounts"))
    if not rows:
        raise ValueError("database has no accounts")
    missing = [u for u, _ in rows if not (directory / f"{u}.yml").is_file()]
    if missing:
        raise ValueError(f"missing userdata files ({len(missing)}): {', '.join(missing[:10])}")
    # Validate every file before replacing any of them.
    changes = []
    for account_id, balance in rows:
        path = directory / f"{account_id}.yml"
        content = path.read_text(encoding="utf-8")
        updated = MONEY.sub(f"money: {balance}", content, count=1)
        if updated == content and not MONEY.search(content):
            updated = content.rstrip("\n") + f"\nmoney: {balance}\n"
        changes.append((path, updated))
    for path, updated in changes:
        temporary = path.with_suffix(".yml.tmp")
        temporary.write_text(updated, encoding="utf-8")
        temporary.replace(path)
    print(f"[ok] {len(rows)} userdata files updated")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", required=True, help="economy.db")
    parser.add_argument("--userdata", required=True, help="offline userdata copy")
    args = parser.parse_args()
    restore(args.input, args.userdata)
