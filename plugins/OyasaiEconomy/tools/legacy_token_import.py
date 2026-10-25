"""Strict token migration policies and read-only legacy SQLite snapshot import."""
import hashlib
import json
from pathlib import Path
import shutil
import sqlite3
import tempfile
import time
import uuid
from economy_schema import MAX_TOKEN, begin_empty_import, complete_accounts, reject_negative

INITIAL_TOKEN_BALANCE = 25


def load_policy(exclude_file=None, corrections_file=None):
    def entries(path, key):
        if path is None:
            return []
        with open(path, encoding="utf-8") as file:
            root = json.load(file)
        if not isinstance(root, dict) or set(root) != {key} or not isinstance(root[key], list):
            raise ValueError("invalid migration policy file")
        return root[key]

    names = []
    for row in entries(exclude_file, "exclude"):
        if not isinstance(row, dict) or set(row) != {"name"} or not isinstance(row["name"], str) or not row["name"].strip():
            raise ValueError("invalid exclusion entry")
        names.append(row["name"])
    if len(set(names)) != len(names):
        raise ValueError("duplicate exclusion name")
    corrections = {}
    for row in entries(corrections_file, "corrections"):
        if not isinstance(row, dict) or set(row) != {"uuid", "amount", "reason"}:
            raise ValueError("invalid correction entry")
        account_id = row["uuid"]
        if not isinstance(account_id, str) or str(uuid.UUID(account_id)) != account_id:
            raise ValueError("invalid correction UUID")
        if type(row["amount"]) is not int or not -MAX_TOKEN - 1 <= row["amount"] <= MAX_TOKEN or row["amount"] == 0:
            raise ValueError("invalid correction amount")
        if not isinstance(row["reason"], str) or not row["reason"].strip():
            raise ValueError("invalid correction reason")
        if account_id in corrections:
            raise ValueError("duplicate correction UUID")
        corrections[account_id] = (row["amount"], row["reason"])
    return set(names), corrections


def exclude_accounts(rows, names):
    excluded = []
    for name in names:
        matches = [row for row in rows if row[1] == name]
        if len(matches) != 1:
            raise ValueError("exclusion name must match exactly one account")
        excluded.extend(matches)
    ids = {row[0] for row in excluded}
    print(f"除外: {len(excluded)} 件、残高合計 {sum(row[2] for row in excluded)}")
    return [row for row in rows if row[0] not in ids], ids


def reconciliation_note(first, previous, delta, after, reason, original_id, account_id, unused):
    difference = after - (previous + delta)
    if first and previous == 0 and difference == INITIAL_TOKEN_BALANCE:
        return f"旧履歴に初期残高が無かったため補正（元の行 id: {original_id}）"
    if delta == 0 and reason in ("migration:data.yml", "migration:mysql"):
        return f"Legacy {reason} snapshot omitted delta; original transaction {original_id} is preserved"
    if account_id in unused:
        amount, note = unused.pop(account_id)
        if difference != amount:
            raise ValueError("explicit correction amount mismatch")
        return note
    raise ValueError("unexplained legacy history balance mismatch")


def import_sqlite(source, output, exclude_file=None, corrections_file=None, on_reconcile=None):
    """Never open the supplied original with SQLite; copy its main file and WAL/SHM first."""
    source, output = Path(source), Path(output)
    files = [Path(str(source) + suffix) for suffix in ("", "-wal", "-shm")]
    if output.resolve() in [file.resolve() for file in files]:
        raise ValueError("output must differ from the legacy source")
    def fingerprints():
        return [hashlib.sha256(file.read_bytes()).digest() if file.exists() else None for file in files]
    before = fingerprints()
    with tempfile.TemporaryDirectory(prefix="economy-legacy-") as temp:
        for file in files:
            if file.exists():
                shutil.copyfile(file, Path(temp) / file.name)
        if before != fingerprints():
            raise ValueError("legacy source changed while copying")
        old = sqlite3.connect((Path(temp) / source.name).as_uri() + "?mode=ro", uri=True)
        try:
            old.execute("PRAGMA query_only=ON")
            if old.execute("PRAGMA integrity_check").fetchone() != ("ok",):
                raise ValueError("legacy integrity check failed")
            names, corrections = load_policy(exclude_file, corrections_file)
            all_accounts = list(old.execute("SELECT uuid,name,balance,created_at,updated_at FROM token_balances ORDER BY uuid"))
            reject_negative(all_accounts)
            accounts, excluded = exclude_accounts(all_accounts, names)
            history = [row for row in old.execute("SELECT id,uuid,delta,balance_after,reason,actor_uuid,created_at FROM token_transactions ORDER BY id") if row[1] not in excluded]
            tables = {row[0] for row in old.execute("SELECT name FROM sqlite_master WHERE type='table'")}
            metadata = dict(old.execute("SELECT key,value FROM schema_meta")) if "schema_meta" in tables else {}
            outbox = [row for row in old.execute("SELECT id,transaction_id,target_uuid,notification_type,delta,balance_after,created_at,delivered_at FROM token_notification_outbox ORDER BY id") if row[2] not in excluded] if "token_notification_outbox" in tables else []
            return _import_rows(accounts, history, outbox, metadata, output, corrections, lambda: before == fingerprints(), on_reconcile)
        finally:
            old.close()


def _import_rows(accounts, history, outbox, metadata, output, corrections, unchanged, on_reconcile):
    existed = output.exists()
    db = sqlite3.connect(output)
    try:
        begin_empty_import(db)
        expected = {}
        for account_id, name, balance, created, updated in accounts:
            if str(uuid.UUID(account_id)) != account_id or type(balance) is not int or not 0 <= balance <= MAX_TOKEN or account_id in expected:
                raise ValueError("invalid legacy account")
            expected[account_id] = balance
            db.execute("INSERT INTO accounts VALUES('token',?,?,?,?,?,?)", (account_id, name, name.lower() if name else None, balance, created, updated))
        unused = dict(corrections)
        if not unused.keys() <= expected.keys():
            raise ValueError("correction account is absent or excluded")
        running, mapping, expected_history = {}, {}, []
        reconciliations = 0
        def insert_tx(at, account_id, delta, after, reason, actor, source=None, note=None):
            values = ("token", at, account_id, delta, after, reason, source, actor, None, note)
            cursor = db.execute("INSERT INTO transactions(currency,created_at,uuid,delta,balance_after,reason,source,actor_uuid,transfer_id,note) VALUES(?,?,?,?,?,?,?,?,?,?)", values)
            expected_history.append((cursor.lastrowid,) + values)
            return cursor.lastrowid
        def reconcile(at, account_id, amount, after, note):
            nonlocal reconciliations
            if not 0 <= after <= MAX_TOKEN:
                raise ValueError("correction balance violates currency limits")
            insert_tx(at, account_id, amount, after, "legacy_opening_reconciliation", None, "legacy-import", note)
            reconciliations += 1
            if on_reconcile:
                on_reconcile()
        for original_id, account_id, delta, after, reason, actor, at in history:
            if account_id not in expected or original_id in mapping:
                raise ValueError("invalid legacy history reference")
            if type(delta) is not int or type(after) is not int or not 0 <= after <= MAX_TOKEN:
                raise ValueError("invalid legacy history amount")
            previous = running.get(account_id, 0)
            if previous + delta != after:
                note = reconciliation_note(account_id not in running, previous, delta, after, reason, original_id, account_id, unused)
                difference = after - (previous + delta)
                reconcile(at, account_id, difference, previous + difference, note)
            running[account_id] = after
            mapping[original_id] = insert_tx(at, account_id, delta, after, reason, actor)
        if unused:
            raise ValueError("unused explicit correction")
        for account_id, _, balance, created, _ in accounts:
            if account_id not in running and balance != 0:
                if metadata.get("migration_source") != "mariadb:token.tokenmanager":
                    raise ValueError("legacy account has no opening history")
                reconcile(created, account_id, balance, balance, "Legacy MariaDB exporter stored opening account without history")
                running[account_id] = balance
            if running.get(account_id, 0) != balance:
                raise ValueError("legacy account differs from its history")
        originals = {row[0]: row for row in history}
        expected_outbox = []
        for original_id, tx_id, target, kind, delta, after, at, delivered in outbox:
            original = originals.get(tx_id)
            if original is None or (target, delta, after) != (original[1], original[2], original[3]):
                raise ValueError("legacy outbox differs from transaction")
            row = (original_id, mapping[tx_id], target, "token", kind, delta, after, at, delivered)
            db.execute("INSERT INTO notification_outbox(id,transaction_id,target_uuid,currency,notification_type,delta,balance_after,created_at,delivered_at) VALUES(?,?,?,?,?,?,?,?,?)", row)
            expected_outbox.append(row)
        meta = {f"legacy.token.{key}": value for key, value in metadata.items()}
        if "tokenmanager_data_yml_imported_at" in metadata:
            meta["tokenmanager_data_yml_imported_at"] = metadata["tokenmanager_data_yml_imported_at"]
        meta["legacy_databases_imported_at"] = str(int(time.time() * 1000))
        db.executemany("INSERT INTO schema_meta VALUES(?,?)", meta.items())
        actual_accounts = list(db.execute("SELECT uuid,name,balance,created_at,updated_at FROM accounts WHERE currency='token' ORDER BY uuid"))
        if actual_accounts != accounts or dict(db.execute("SELECT uuid,balance FROM accounts")) != expected:
            raise ValueError("account UUID/count/balance verification failed")
        if list(db.execute("SELECT id,currency,created_at,uuid,delta,balance_after,reason,source,actor_uuid,transfer_id,note FROM transactions ORDER BY id")) != expected_history:
            raise ValueError("history verification failed")
        if list(db.execute("SELECT id,transaction_id,target_uuid,currency,notification_type,delta,balance_after,created_at,delivered_at FROM notification_outbox ORDER BY id")) != expected_outbox or dict(db.execute("SELECT key,value FROM schema_meta")) != meta:
            raise ValueError("outbox/metadata verification failed")
        sums = {account_id: 0 for account_id in expected}
        for account_id, delta in db.execute("SELECT uuid,delta FROM transactions"):
            sums[account_id] += delta
        if sums != expected or sum(row[2] for row in actual_accounts) != sum(expected.values()):
            raise ValueError("ledger or balance total mismatch")
        if not unchanged():
            raise ValueError("legacy source changed during import")
        complete_accounts(db)
        db.commit()
        return len(accounts), sum(expected.values()), len(history), reconciliations
    except Exception:
        db.rollback()
        db.close()
        if not existed:
            for suffix in ("", "-wal", "-shm"):
                Path(str(output) + suffix).unlink(missing_ok=True)
        raise
    finally:
        db.close()
