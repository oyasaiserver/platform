#!/usr/bin/env python3
"""
TokenManager (MariaDB token.tokenmanager) -> OyasaiToken SQLite (tokens.db)

使い方:
  python3 migrate_tokenmanager_to_sqlite.py --input export.tsv --output tokens.db \
      [--negative clamp|skip|fail] [--names usercache.json]

入力は `SELECT uuid, tokens FROM token.tokenmanager` の TSV（ヘッダなし）。
本番 minecraft-main をクリーン停止した後にエクスポートすること
（TokenManager は停止時の insertCache() で RAM 上の残高を MySQL へ確定するため）。
"""
import argparse, json, os, sqlite3, sys, time

SCHEMA = [
    """CREATE TABLE IF NOT EXISTS token_balances (
        uuid TEXT PRIMARY KEY, name TEXT,
        balance INTEGER NOT NULL DEFAULT 0 CHECK (balance >= 0),
        created_at INTEGER NOT NULL, updated_at INTEGER NOT NULL)""",
    """CREATE INDEX IF NOT EXISTS idx_token_balances_top
        ON token_balances(balance DESC, updated_at DESC)""",
    """CREATE TABLE IF NOT EXISTS token_transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT, uuid TEXT NOT NULL,
        delta INTEGER NOT NULL, balance_after INTEGER NOT NULL,
        reason TEXT, actor_uuid TEXT, created_at INTEGER NOT NULL)""",
    """CREATE TABLE IF NOT EXISTS token_legacy_ids (
        source TEXT NOT NULL, identifier_type TEXT NOT NULL, identifier TEXT NOT NULL,
        uuid TEXT NOT NULL, migrated_at INTEGER NOT NULL,
        PRIMARY KEY (source, identifier_type, identifier))""",
    """CREATE TABLE IF NOT EXISTS schema_meta (key TEXT PRIMARY KEY, value TEXT NOT NULL)""",
]

def load_names(path):
    if not path or not os.path.exists(path):
        return {}
    try:
        with open(path, encoding="utf-8") as f:
            return {e["uuid"]: e.get("name") for e in json.load(f) if e.get("uuid")}
    except Exception as e:
        print(f"[warn] usercache 読み込み失敗（名前は NULL にします）: {e}", file=sys.stderr)
        return {}

def main():
    p = argparse.ArgumentParser()
    p.add_argument("--input", required=True)
    p.add_argument("--output", required=True)
    p.add_argument("--negative", choices=["clamp", "skip", "fail"], default="clamp",
                   help="負残高の扱い: clamp=0にする / skip=行を作らない / fail=中断")
    p.add_argument("--names", help="usercache.json のパス（任意、name カラム補完用）")
    p.add_argument("--dry-run", action="store_true")
    a = p.parse_args()

    if os.path.exists(a.output) and not a.dry_run:
        sys.exit(f"[error] 出力先が既に存在します: {a.output}")

    names = load_names(a.names)
    rows, neg, zero, dup = [], [], 0, 0
    seen = set()
    with open(a.input, encoding="utf-8") as f:
        for ln, line in enumerate(f, 1):
            line = line.rstrip("\n")
            if not line.strip():
                continue
            parts = line.split("\t")
            if len(parts) != 2:
                sys.exit(f"[error] {a.input}:{ln} 列数が不正: {line!r}")
            uuid, raw = parts[0].strip(), parts[1].strip()
            try:
                bal = int(raw)
            except ValueError:
                sys.exit(f"[error] {a.input}:{ln} 数値でない: {raw!r}")
            if uuid in seen:
                dup += 1
                continue
            seen.add(uuid)
            if bal < 0:
                neg.append((uuid, bal))
                if a.negative == "fail":
                    sys.exit(f"[error] 負残高: {uuid} = {bal}（--negative で扱いを指定）")
                if a.negative == "skip":
                    continue
                bal = 0
            if bal == 0:
                zero += 1
            rows.append((uuid, names.get(uuid), bal))

    total = sum(r[2] for r in rows)
    print(f"入力行:     {len(seen)}")
    print(f"出力行:     {len(rows)}")
    print(f"残高合計:   {total}")
    print(f"ゼロ残高:   {zero}")
    print(f"負残高:     {len(neg)} 件 → {a.negative}")
    for u, b in neg:
        print(f"  {u} = {b}")
    if dup:
        print(f"重複UUID:   {dup} 件（先勝ち）")
    print(f"名前解決:   {sum(1 for r in rows if r[1])} / {len(rows)}")

    if a.dry_run:
        print("\n[dry-run] tokens.db は作成していません。")
        return

    now = int(time.time() * 1000)
    conn = sqlite3.connect(a.output)
    try:
        conn.execute("PRAGMA journal_mode=WAL")
        conn.execute("PRAGMA foreign_keys=ON")
        for s in SCHEMA:
            conn.execute(s)
        conn.executemany(
            "INSERT INTO token_balances (uuid, name, balance, created_at, updated_at) VALUES (?,?,?,?,?)",
            [(u, n, b, now, now) for u, n, b in rows],
        )
        # data.yml 自動インポートを恒久的に封じる（本番の data.yml は 2025-07-23 の古い残骸）
        conn.executemany(
            "INSERT OR REPLACE INTO schema_meta (key, value) VALUES (?,?)",
            [
                ("tokenmanager_data_yml_imported_at", str(now)),
                ("last_applied_tx_id", "0"),
                ("migration_source", "mariadb:token.tokenmanager"),
                ("migrated_at", str(now)),
            ],
        )
        conn.commit()
        v = conn.execute("SELECT COUNT(*), SUM(balance), MAX(balance) FROM token_balances").fetchone()
        print(f"\n[ok] {a.output} 生成: 件数={v[0]} 合計={v[1]} 最大={v[2]}")
        assert v[0] == len(rows) and v[1] == total, "検証不一致"
        print("[ok] 入力との突き合わせ一致")
    finally:
        conn.close()

if __name__ == "__main__":
    main()
