#!/usr/bin/env python3
"""Stopped userdata copy -> unified DB or legacy Vault DB for one startup import.

Use --format legacy-vault with a new output path for plugins/Vault/economy.db.
The default unified format remains compatible with the offline restore tool.
No third-party YAML library needed.
"""

import argparse
from decimal import Decimal, ROUND_HALF_UP, localcontext
import os
from pathlib import Path
import re
import sqlite3
import tempfile
import time
import uuid
from economy_schema import LEGACY_VAULT_SCHEMA, SCHEMA, begin_empty_import, complete_accounts, reject_negative

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


def migrate(source, output, output_format="unified"):
    if output_format not in ("unified", "legacy-vault"):
        raise ValueError("unknown output format")
    paths = sorted(Path(source).glob("*.yml"))
    if not paths:
        raise ValueError("userdata/*.yml is empty")
    rows = [load(path) for path in paths]
    if len({row[0] for row in rows}) != len(paths):
        raise ValueError("duplicate UUID")
    output = Path(output)
    if output_format == "legacy-vault":
        # Publish only a fully verified, closed DB. link() refuses concurrent outputs too.
        # Even an existing empty file is refused; use a new path for this one-off export.
        if output.exists():
            raise ValueError("output DB already exists")
        with tempfile.TemporaryDirectory(prefix=".essentials-export-", dir=output.parent) as temp:
            staged = Path(temp) / "economy.db"
            report = write_database(source, staged, rows, output_format)
            try:
                os.link(staged, output)
            except FileExistsError as error:
                raise ValueError("output DB already exists") from error
    else:
        report = write_database(source, output, rows, output_format)
    print(report)
    return report


def write_database(source, output, rows, output_format):
    db = sqlite3.connect(output)
    try:
        legacy = output_format == "legacy-vault"
        if not legacy:
            reject_negative([(row[0], row[1], row[4]) for row in rows])
        begin_empty_import(db, LEGACY_VAULT_SCHEMA if legacy else SCHEMA)
        now = int(time.time() * 1000)
        account_sql = "INSERT INTO accounts VALUES (?, ?, ?, ?, ?, ?)" if legacy else "INSERT INTO accounts VALUES ('yen', ?, ?, ?, ?, ?, ?)"
        history_sql = "INSERT INTO transactions (created_at, uuid, delta, balance_after, reason, note) VALUES (?, ?, ?, ?, 'migrate', ?)" if legacy else "INSERT INTO transactions (currency, created_at, uuid, delta, balance_after, reason, note) VALUES ('yen', ?, ?, ?, ?, 'migrate', ?)"
        db.executemany(account_sql, [(u, n, n.lower() if n else None, b, now, now) for u, n, raw, orig, b in rows])
        db.executemany(history_sql, [(now, u, b, b, raw) for u, n, raw, orig, b in rows])
        db.execute("INSERT INTO schema_meta VALUES ('migrated_at', ?)", (str(now),))
        report = verify(source, db, output_format)
        if not legacy:
            complete_accounts(db)
        db.commit()
        return report
    except Exception:
        db.rollback()
        raise
    finally:
        db.close()


def verify(source, db, output_format="unified"):
    where = "" if output_format == "legacy-vault" else " WHERE currency='yen'"
    paths = sorted(Path(source).glob("*.yml"))
    expected = {row[0]: row for row in (load(path) for path in paths)}
    account_rows = list(db.execute("SELECT uuid, balance FROM accounts" + where))
    actual = dict(account_rows)
    if len(account_rows) != len(paths) or len(actual) != len(paths) or len(expected) != len(paths):
        raise ValueError("account count mismatch")
    if not all(MIN <= b <= MAX for b in actual.values()):
        raise ValueError("out of range")
    if not all(actual.get(u) == row[4] for u, row in expected.items()):
        raise ValueError("UUID balance mismatch")
    reason_where = where + (" AND" if where else " WHERE") + " reason='migrate'"
    if db.execute("SELECT COUNT(*) FROM transactions" + reason_where).fetchone()[0] != len(paths):
        raise ValueError("migration history count mismatch")
    if db.execute("SELECT COUNT(*) FROM transactions" + where).fetchone()[0] != len(paths):
        raise ValueError("unexpected migration history rows")
    history = {}
    for account_id, delta in db.execute("SELECT uuid,delta FROM transactions" + where):
        history[account_id] = history.get(account_id, 0) + delta
    if history != actual:
        raise ValueError("ledger mismatch")
    if output_format == "legacy-vault":
        expected_history = sorted((u, b, b, "migrate", raw) for u, n, raw, orig, b in expected.values())
        actual_history = sorted(db.execute("SELECT uuid,delta,balance_after,reason,note FROM transactions"))
        if actual_history != expected_history:
            raise ValueError("opening history mismatch")
        if db.execute("PRAGMA foreign_key_check").fetchone():
            raise ValueError("foreign key mismatch")
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
    parser.add_argument("--format", choices=("unified", "legacy-vault"), default="unified",
                        help="legacy-vault: new currencyless Vault DB for startup import (never overwrites any file)")
    args = parser.parse_args()
    migrate(args.input, args.output, args.format)
