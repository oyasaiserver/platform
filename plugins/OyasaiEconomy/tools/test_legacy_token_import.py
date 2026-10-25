import json
from pathlib import Path
import sqlite3
import tempfile
import unittest
from contextlib import closing
from unittest.mock import patch
from legacy_token_import import import_sqlite, load_policy
import migrate_tokenmanager_to_sqlite as token

ALICE = "00000000-0000-4000-8000-000000000001"
BOB = "00000000-0000-4000-8000-000000000002"


class LegacyTokenImportTest(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.folder = Path(self.temp.name)
        self.source = self.folder / "tokens.db"
        self.output = self.folder / "economy.db"

    def seed(self, difference=25, second=None):
        after = 2 + difference
        final = after if second is None else after + 1 + second
        with closing(sqlite3.connect(self.source)) as db, db:
            db.execute("CREATE TABLE token_balances(uuid TEXT PRIMARY KEY,name TEXT,balance INTEGER,created_at INTEGER,updated_at INTEGER)")
            db.execute("CREATE TABLE token_transactions(id INTEGER PRIMARY KEY,uuid TEXT,delta INTEGER,balance_after INTEGER,reason TEXT,actor_uuid TEXT,created_at INTEGER)")
            db.execute("CREATE TABLE token_notification_outbox(id INTEGER PRIMARY KEY,transaction_id INTEGER,target_uuid TEXT,notification_type TEXT,delta INTEGER,balance_after INTEGER,created_at INTEGER,delivered_at INTEGER)")
            db.execute("CREATE TABLE schema_meta(key TEXT PRIMARY KEY,value TEXT)")
            db.execute("INSERT INTO token_balances VALUES(?,?,?,1,2)", (ALICE, "Alice", final))
            db.execute("INSERT INTO token_transactions VALUES(1,?,2,?,'add',NULL,1)", (ALICE, after))
            if second is not None:
                db.execute("INSERT INTO token_transactions VALUES(2,?,1,?,'add',NULL,2)", (ALICE, final))

    def policy(self, key, entries):
        path = self.folder / (key + ".json")
        path.write_text(json.dumps({key: entries}))
        return path

    def correction(self, amount=5):
        return self.policy("corrections", [{"uuid": ALICE, "amount": amount, "reason": "Approved synthetic discrepancy"}])

    def assert_rollback(self, **kwargs):
        with self.assertRaises(ValueError):
            import_sqlite(self.source, self.output, **kwargs)
        for suffix in ("", "-wal", "-shm"):
            self.assertFalse(Path(str(self.output) + suffix).exists())

    def test_first_add_missing25_preserves_balance_and_original(self):
        self.seed()
        self.assertEqual(import_sqlite(self.source, self.output), (1, 27, 1, 1))
        with closing(sqlite3.connect(self.output)) as db:
            self.assertEqual(db.execute("SELECT delta,balance_after FROM transactions WHERE reason='add'").fetchone(), (2, 27))
            self.assertEqual(db.execute("SELECT delta,balance_after,note FROM transactions WHERE reason='legacy_opening_reconciliation'").fetchone(), (25, 25, "旧履歴に初期残高が無かったため補正（元の行 id: 1）"))
            self.assertEqual(db.execute("SELECT balance FROM accounts").fetchone(), (27,))

    def test_first_difference26_rolls_back(self):
        self.seed(26)
        self.assert_rollback()

    def test_second_difference25_rolls_back(self):
        self.seed(25, 25)
        self.assert_rollback()

    def test_exclusion_filters_account_history_and_outbox_before_verification(self):
        self.seed(5)
        with closing(sqlite3.connect(self.source)) as db, db:
            db.execute("INSERT INTO token_balances VALUES(?, 'Bob', 9,1,1)", (BOB,))
            db.execute("INSERT INTO token_transactions VALUES(3,?,9,9,'add',NULL,1)", (BOB,))
            db.execute("INSERT INTO token_notification_outbox VALUES(7,1,?,'ADD',2,7,1,NULL)", (ALICE,))
        path = self.policy("exclude", [{"name": "Alice"}])
        self.assertEqual(import_sqlite(self.source, self.output, exclude_file=path), (1, 9, 1, 0))
        with closing(sqlite3.connect(self.output)) as db:
            self.assertEqual(db.execute("SELECT uuid,balance FROM accounts WHERE currency='token'").fetchall(), [(BOB, 9)])
            self.assertEqual(db.execute("SELECT count(*) FROM notification_outbox").fetchone(), (0,))

    def test_duplicate_name_rejected(self):
        self.seed()
        with closing(sqlite3.connect(self.source)) as db, db:
            db.execute("INSERT INTO token_balances VALUES(?, 'Alice', 0,1,1)", (BOB,))
        self.assert_rollback(exclude_file=self.policy("exclude", [{"name": "Alice"}]))

    def test_absent_and_wrong_case_name_rejected(self):
        self.seed()
        for name in ("Missing", "alice"):
            self.assert_rollback(exclude_file=self.policy("exclude", [{"name": name}]))

    def test_explicit_correction_records_reason_and_preserves_original(self):
        self.seed(5)
        self.assertEqual(import_sqlite(self.source, self.output, corrections_file=self.correction()), (1, 7, 1, 1))
        with closing(sqlite3.connect(self.output)) as db:
            self.assertEqual(db.execute("SELECT note FROM transactions WHERE reason='legacy_opening_reconciliation'").fetchone(), ("Approved synthetic discrepancy",))
            self.assertEqual(db.execute("SELECT delta,balance_after FROM transactions WHERE reason='add'").fetchone(), (2, 7))

    def test_correction_mismatch_rolls_back(self):
        self.seed(5)
        self.assert_rollback(corrections_file=self.correction(6))

    def test_unknown_difference_without_policy_rolls_back(self):
        self.seed(5)
        self.assert_rollback()

    def test_unused_correction_rejected(self):
        self.seed(0)
        self.assert_rollback(corrections_file=self.correction())

    def test_correction_cannot_be_reused(self):
        self.seed(5, 5)
        self.assert_rollback(corrections_file=self.correction())

    def test_policy_rejects_duplicates_and_invalid_amounts(self):
        path = self.policy("exclude", [{"name": "Alice"}, {"name": "Alice"}])
        with self.assertRaises(ValueError):
            load_policy(path)
        for amount in (True, 5.5, 0, 2**63):
            with self.assertRaises(ValueError):
                load_policy(corrections_file=self.correction(amount))
        entry = {"uuid": ALICE, "amount": 5, "reason": "Synthetic"}
        with self.assertRaises(ValueError):
            load_policy(corrections_file=self.policy("corrections", [entry, entry]))

    def test_tsv_exclusion_verifies_post_exclusion_totals(self):
        path = self.policy("exclude", [{"name": "Alice"}])
        self.assertEqual(token.migrate([(ALICE, "Alice", 27), (BOB, "Bob", 9)], self.output, exclude_file=path), (1, 9, 9))
        with closing(sqlite3.connect(self.output)) as db:
            self.assertEqual(db.execute("SELECT uuid,balance FROM accounts WHERE currency='token'").fetchall(), [(BOB, 9)])

    def test_tsv_exclusion_rejects_duplicate_or_absent_name(self):
        path = self.policy("exclude", [{"name": "Alice"}])
        for rows in ([(ALICE, "Alice", 27), (BOB, "Alice", 9)], [(BOB, "Bob", 9)]):
            with self.assertRaises(ValueError):
                token.migrate(rows, self.output, exclude_file=path)
        self.assertFalse(self.output.exists())

    def test_negative_policy_reports_uuid_before_exclusion(self):
        source = self.folder / "export.tsv"
        source.write_text(f"{ALICE}\t-5\n{BOB}\t9\n")
        with self.assertRaisesRegex(ValueError, f"1 件: {ALICE}"):
            token.load_rows(source, {ALICE: "Alice", BOB: "Bob"}, "fail", {"Alice"})

    def test_tsv_rejects_unused_correction(self):
        with self.assertRaises(ValueError):
            token.migrate([(ALICE, "Alice", 27)], self.output, corrections_file=self.correction())
        self.assertFalse(self.output.exists())

    def test_sqlite_cli_accepts_policy_paths(self):
        self.seed(5)
        with patch("sys.argv", ["migrate", "--input-format", "sqlite", "--input", str(self.source), "--output", str(self.output), "--corrections-file", str(self.correction())]):
            token.main()
        self.assertTrue(self.output.exists())

    def test_wal_snapshot_preserves_committed_rows_and_source_bytes(self):
        import hashlib
        self.seed()
        with closing(sqlite3.connect(self.source)) as db:
            db.execute("PRAGMA journal_mode=WAL")
            db.execute("PRAGMA wal_autocheckpoint=0")
            db.execute("INSERT INTO token_balances VALUES(?, 'Bob', 0,1,1)", (BOB,))
            db.commit()
            files = [Path(str(self.source) + suffix) for suffix in ("", "-wal", "-shm")]
            before = [hashlib.sha256(file.read_bytes()).digest() for file in files]
            self.assertEqual(import_sqlite(self.source, self.output), (2, 27, 1, 1))
            self.assertEqual(before, [hashlib.sha256(file.read_bytes()).digest() for file in files])

    def test_populated_destination_is_preserved(self):
        self.seed()
        import_sqlite(self.source, self.output)
        self.assert_rollback_existing()

    def assert_rollback_existing(self):
        with self.assertRaises(ValueError):
            import_sqlite(self.source, self.output)
        with closing(sqlite3.connect(self.output)) as db:
            self.assertEqual(db.execute("SELECT count(*) FROM accounts").fetchone(), (2,))


if __name__ == "__main__":
    unittest.main()
