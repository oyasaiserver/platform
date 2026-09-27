#!/usr/bin/env python3
"""Stopped Essentials userdata/*.yml copy -> economy.db. No third-party YAML library needed."""

import argparse
from decimal import Decimal, ROUND_HALF_UP, localcontext
from pathlib import Path
import re
import sqlite3
import time
import uuid

START = Decimal(10240)
MIN = -999999114514
MAX = 10000000000000
FIELD = re.compile(r"^(money|last-account-name):\s*(.*?)\s*$", re.IGNORECASE)


def fields(path):
    found = {}
    for line in path.read_text(encoding="utf-8").splitlines():
        match = FIELD.fullmatch(line)
        if match:
            key, value = match.groups()
            if key in found:
                raise ValueError(f"{path}: duplicate {key}")
            # Essentials writes plain YAML scalars; quoted scalars are also accepted.
            found[key] = value.strip("\"'")
    return found


def load(path):
    account_id = str(uuid.UUID(path.stem))
    data = fields(path)
    raw = data.get("money", "10240")
    with localcontext() as context:
        context.prec = 80
        original = Decimal(raw)
        if not original.is_finite():
            raise ValueError(f"{path}: non-finite money")
        rounded = int(original.quantize(Decimal(1), rounding=ROUND_HALF_UP))
    if not MIN <= rounded <= MAX:
        raise ValueError(f"{path}: balance out of range")
    name = data.get("last-account-name") or None
    return account_id, name, raw if "money" in data else "(missing: 10240)", original, rounded


def migrate(source, output):
    paths = sorted(Path(source).glob("*.yml"))
    if not paths:
        raise ValueError("userdata/*.yml is empty")
    rows = [load(path) for path in paths]
    if len({row[0] for row in rows}) != len(paths):
        raise ValueError("duplicate UUID")
    output = Path(output)
    if output.exists():
        with sqlite3.connect(output) as existing:
            for table in ("accounts", "transactions", "schema_meta"):
                if existing.execute("SELECT count(*) FROM sqlite_master WHERE type='table' AND name=?", (table,)).fetchone()[0]:
                    if existing.execute(f"SELECT count(*) FROM {table}").fetchone()[0]:
                        raise ValueError(f"output DB already contains {table}")
    db = sqlite3.connect(output)
    try:
        db.execute("PRAGMA journal_mode=WAL")
        db.execute("PRAGMA synchronous=FULL")
        db.execute("BEGIN IMMEDIATE")
        now = int(time.time() * 1000)
        db.execute(f"CREATE TABLE IF NOT EXISTS accounts (uuid TEXT PRIMARY KEY, name TEXT, name_lower TEXT, balance INTEGER NOT NULL CHECK (balance BETWEEN {MIN} AND {MAX}), created_at INTEGER NOT NULL, updated_at INTEGER NOT NULL)")
        db.execute("CREATE INDEX IF NOT EXISTS idx_accounts_name ON accounts(name_lower)")
        db.execute("CREATE INDEX IF NOT EXISTS idx_accounts_top ON accounts(balance DESC)")
        db.execute("CREATE TABLE IF NOT EXISTS transactions (id INTEGER PRIMARY KEY AUTOINCREMENT, created_at INTEGER NOT NULL, uuid TEXT NOT NULL, delta INTEGER NOT NULL, balance_after INTEGER NOT NULL, reason TEXT NOT NULL, source TEXT, actor_uuid TEXT, transfer_id INTEGER, note TEXT)")
        db.execute("CREATE INDEX IF NOT EXISTS idx_tx_uuid ON transactions(uuid, id)")
        db.execute("CREATE TABLE IF NOT EXISTS schema_meta (key TEXT PRIMARY KEY, value TEXT NOT NULL)")
        db.executemany("INSERT INTO accounts VALUES (?, ?, ?, ?, ?, ?)", [(u, n, n.lower() if n else None, b, now, now) for u, n, raw, orig, b in rows])
        db.executemany("INSERT INTO transactions (created_at, uuid, delta, balance_after, reason, note) VALUES (?, ?, ?, ?, 'migrate', ?)", [(now, u, b, b, raw) for u, n, raw, orig, b in rows])
        db.execute("INSERT INTO schema_meta VALUES ('migrated_at', ?)", (str(now),))
        report = verify(source, db)
        db.commit()
        print(report)
    except Exception:
        db.rollback()
        raise
    finally:
        db.close()


def verify(source, db):
    paths = sorted(Path(source).glob("*.yml"))
    expected = {row[0]: row for row in (load(path) for path in paths)}
    actual = {u: b for u, b in db.execute("SELECT uuid, balance FROM accounts")}
    if len(actual) != len(paths) or len(expected) != len(paths):
        raise ValueError("account count mismatch")
    if not all(MIN <= b <= MAX for b in actual.values()):
        raise ValueError("out of range")
    if not all(actual.get(u) == row[4] for u, row in expected.items()):
        raise ValueError("UUID balance mismatch")
    if db.execute("SELECT COUNT(*) FROM transactions WHERE reason='migrate'").fetchone()[0] != len(paths):
        raise ValueError("migration history count mismatch")
    if db.execute("SELECT COUNT(*) FROM accounts a LEFT JOIN (SELECT uuid, SUM(delta) total FROM transactions GROUP BY uuid) t ON a.uuid=t.uuid WHERE a.balance != t.total").fetchone()[0]:
        raise ValueError("ledger mismatch")
    with localcontext() as context:
        context.prec = 80
        originals = sum((row[3] for row in expected.values()), Decimal(0))
        migrated = sum(actual.values())
        differences = sum((row[3] - Decimal(row[4]) for row in expected.values()), Decimal(0))
        if originals - Decimal(migrated) != differences:
            raise ValueError("rounding reconciliation mismatch")
    return f"[ok] {len(paths)} accounts; original={originals}; migrated={migrated}; rounding difference={differences}"


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", required=True, help="stopped server's userdata copy")
    parser.add_argument("--output", required=True, help="economy.db")
    args = parser.parse_args()
    migrate(args.input, args.output)
