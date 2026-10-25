#!/usr/bin/env python3
"""
TokenManager TSV -> OyasaiEconomy SQLite (economy.db, token currency).

使い方:
  python3 migrate_tokenmanager_to_sqlite.py --input export.tsv --output economy.db \
      [--negative fail] [--names usercache.json]

入力は `SELECT uuid, tokens FROM token.tokenmanager` の TSV（ヘッダなし）。
サーバーを停止してからエクスポートすること。
"""
import argparse
import json
import os
import sqlite3
import sys
import time
import uuid
from legacy_token_import import load_policy, exclude_accounts, import_sqlite
from economy_schema import MAX_TOKEN, SCHEMA, begin_empty_import, complete_accounts, reject_negative


def load_names(path):
    if not path or not os.path.exists(path):
        return {}
    try:
        with open(path, encoding="utf-8") as file:
            return {str(uuid.UUID(entry["uuid"])): entry.get("name") for entry in json.load(file) if entry.get("uuid")}
    except Exception as error:
        print(f"[warn] usercache 読み込み失敗（名前は NULL にします）: {error}", file=sys.stderr)
        return {}


def load_rows(path, names, negative, excluded_names=None):
    rows, negatives, zero, duplicates = [], [], 0, 0
    seen = set()
    with open(path, encoding="utf-8") as file:
        for line_number, line in enumerate(file, 1):
            line = line.rstrip("\n")
            if not line.strip():
                continue
            parts = line.split("\t")
            if len(parts) != 2:
                raise ValueError(f"input line {line_number}: expected UUID and token amount")
            account_id = str(uuid.UUID(parts[0].strip()))
            balance = int(parts[1].strip())
            if account_id in seen:
                duplicates += 1
                continue
            seen.add(account_id)
            rows.append((account_id, names.get(account_id), balance))
    reject_negative(rows)
    if excluded_names is not None:
        rows, _ = exclude_accounts(rows, excluded_names)
    included = []
    for account_id, name, balance in rows:
        if balance > MAX_TOKEN:
            raise ValueError("token balance out of range")
        if balance == 0:
            zero += 1
        included.append((account_id, name, balance))
    return included, negatives, zero, duplicates, len(seen)


def verify(rows, db):
    expected = {account_id: balance for account_id, _, balance in rows}
    actual = dict(db.execute("SELECT uuid,balance FROM accounts WHERE currency='token'"))
    if len(expected) != len(rows) or actual != expected:
        raise ValueError("UUID balance or account count mismatch")
    expected_history = sorted((account_id, balance, balance) for account_id, _, balance in rows)
    actual_history = sorted(db.execute("SELECT uuid,delta,balance_after FROM transactions WHERE currency='token' AND reason='migration:mysql'"))
    if actual_history != expected_history:
        raise ValueError("migration history count or balance mismatch")
    if db.execute("SELECT COUNT(*) FROM transactions WHERE currency='token'").fetchone()[0] != len(rows):
        raise ValueError("unexpected migration history rows")
    history = {}
    for account_id, delta in db.execute("SELECT uuid,delta FROM transactions WHERE currency='token'"):
        history[account_id] = history.get(account_id, 0) + delta
    if history != actual:
        raise ValueError("ledger mismatch")
    total = sum(balance for _, _, balance in rows)
    if sum(actual.values()) != total:
        raise ValueError("balance total mismatch")
    return len(rows), total, max(actual.values(), default=0)


def migrate(rows, output, exclude_file=None, corrections_file=None):
    names, corrections = load_policy(exclude_file, corrections_file)
    reject_negative(rows)
    if exclude_file is not None:
        rows, _ = exclude_accounts(rows, names)
    # TSV contains balances only: its full opening delta has no missing history to correct.
    if corrections:
        raise ValueError("unused explicit correction: TSV has no history gaps")
    now = int(time.time() * 1000)
    existed = os.path.exists(output)
    db = sqlite3.connect(output)
    try:
        begin_empty_import(db)
        db.executemany(
            "INSERT INTO accounts(currency,uuid,name,name_lower,balance,created_at,updated_at) VALUES('token',?,?,?,?,?,?)",
            [(account_id, name, name.lower() if name else None, balance, now, now) for account_id, name, balance in rows],
        )
        db.executemany(
            "INSERT INTO transactions(currency,created_at,uuid,delta,balance_after,reason,source) VALUES('token',?,?,?,?,'migration:mysql','tokenmanager-tsv')",
            [(now, account_id, balance, balance) for account_id, _, balance in rows],
        )
        # Prevent importing an older data.yml over the reviewed TSV balances.
        db.executemany(
            "INSERT INTO schema_meta(key,value) VALUES(?,?)",
            [
                ("tokenmanager_data_yml_imported_at", str(now)),
                ("migration_source", "mariadb:token.tokenmanager"),
                ("migrated_at", str(now)),
                ("last_applied_tx_id", str(db.execute("SELECT COALESCE(MAX(id),0) FROM transactions").fetchone()[0])),
            ],
        )
        report = verify(rows, db)
        complete_accounts(db)
        db.commit()
        return report
    except Exception:
        db.rollback()
        db.close()
        if not existed:
            for suffix in ("", "-wal", "-shm"):
                if os.path.exists(str(output) + suffix):
                    os.unlink(str(output) + suffix)
        raise
    finally:
        db.close()


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", required=True)
    parser.add_argument("--output", required=True)
    parser.add_argument("--input-format", choices=["tsv", "sqlite"], default="tsv")
    parser.add_argument("--exclude-file", help="完全一致の口座名を指定する JSON ファイル")
    parser.add_argument("--corrections-file", help="明示補正を指定する JSON ファイル（既定は空）")
    parser.add_argument("--negative", choices=["fail"], default="fail",
                        help="負残高は件数とUUIDを報告して中断")
    parser.add_argument("--names", help="usercache.json のパス（任意、name カラム補完用）")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()
    try:
        if args.input_format == "sqlite":
            if args.dry_run:
                raise ValueError("SQLite dry-run requires an explicit disposable output copy")
            count, total, history, corrections = import_sqlite(args.input, args.output, args.exclude_file, args.corrections_file)
            print(f"[ok] 件数={count} 合計={total} 元履歴={history} 補正行={corrections}")
            return
        names, corrections = load_policy(args.exclude_file, args.corrections_file)
        if corrections:
            raise ValueError("unused explicit correction: TSV has no history gaps")
        rows, negatives, zero, duplicates, count = load_rows(args.input, load_names(args.names), args.negative, names)
        print(f"入力行:     {count}")
        print(f"出力行:     {len(rows)}")
        print(f"残高合計:   {sum(row[2] for row in rows)}")
        print(f"ゼロ残高:   {zero}")
        print(f"負残高:     {len(negatives)} 件 → {args.negative}")
        if duplicates:
            print(f"重複UUID:   {duplicates} 件（先勝ち）")
        print(f"名前解決:   {sum(1 for row in rows if row[1])} / {len(rows)}")
        if args.dry_run:
            print("\n[dry-run] economy.db は作成していません。")
            return
        count, total, maximum = migrate(rows, args.output)
        print(f"\n[ok] economy.db 生成: 件数={count} 合計={total}")
        print("[ok] 入力との突き合わせ一致")
    except (ValueError, sqlite3.Error, OverflowError) as error:
        sys.exit(f"[error] {error}")


if __name__ == "__main__":
    main()
