import importlib.util
from contextlib import closing, redirect_stdout
from decimal import Decimal
import hashlib
import io
from pathlib import Path
import sqlite3
import subprocess
import sys
import tempfile
import unittest
from unittest.mock import patch
import uuid

HERE = Path(__file__).parent
spec = importlib.util.spec_from_file_location("migrate", HERE / "migrate_essentials_to_sqlite.py")
migrate = importlib.util.module_from_spec(spec)
spec.loader.exec_module(migrate)
spec = importlib.util.spec_from_file_location("restore", HERE / "restore_sqlite_to_essentials.py")
restore = importlib.util.module_from_spec(spec)
spec.loader.exec_module(restore)
spec = importlib.util.spec_from_file_location("token_migrate", HERE / "migrate_tokenmanager_to_sqlite.py")
token = importlib.util.module_from_spec(spec)
spec.loader.exec_module(token)


class MigrationTest(unittest.TestCase):
    def test_rounding_reconciliation_and_restore(self):
        with tempfile.TemporaryDirectory() as temp:
            directory = Path(temp)
            userdata = directory / "userdata"
            userdata.mkdir()
            values = ["1E+3", None, "93712.9999999991", "123.1234567890123456789012345678", "0.5"]
            ids = [str(uuid.uuid4()) for _ in values]
            for account_id, value in zip(ids, values):
                (userdata / f"{account_id}.yml").write_text(f"last-account-name: Alice\n" + (f"money: {value}\n" if value else ""))
            database = directory / "economy.db"
            migrate.migrate(userdata, database)
            with closing(sqlite3.connect(database)) as db, db:
                self.assertIn("5 accounts", migrate.verify(userdata, db))
                balances = dict(db.execute("SELECT uuid, balance FROM accounts WHERE currency='yen'"))
                self.assertEqual([balances[u] for u in ids], [1000, 10240, 93713, 123, 1])
                self.assertEqual(db.execute("SELECT COUNT(*) FROM transactions WHERE reason='migrate'").fetchone()[0], 5)
                self.assertEqual(db.execute("SELECT COUNT(*) FROM schema_meta WHERE key='migrated_at'").fetchone()[0], 1)
            with self.assertRaises(ValueError):
                migrate.migrate(userdata, database)
            (userdata / f"{ids[-1]}.yml").unlink()
            before = (userdata / f"{ids[0]}.yml").read_text()
            with self.assertRaises(ValueError):
                restore.restore(database, userdata)
            self.assertEqual((userdata / f"{ids[0]}.yml").read_text(), before)
            (userdata / f"{ids[-1]}.yml").write_text("last-account-name: Alice\n")
            restore.restore(database, userdata)
            self.assertIn("money: 1000", (userdata / f"{ids[0]}.yml").read_text())
            self.assertIn("money: 1", (userdata / f"{ids[-1]}.yml").read_text())

    def test_failed_reconciliation_leaves_empty_database(self):
        with tempfile.TemporaryDirectory() as temp:
            directory = Path(temp)
            userdata = directory / "userdata"
            userdata.mkdir()
            (userdata / f"{uuid.uuid4()}.yml").write_text("money: 1.5\n")
            database = directory / "economy.db"
            with patch.object(migrate, "verify", side_effect=ValueError("reconciliation mismatch")):
                with self.assertRaisesRegex(ValueError, "reconciliation mismatch"):
                    migrate.migrate(userdata, database)
            with closing(sqlite3.connect(database)) as db, db:
                tables = {name for (name,) in db.execute("SELECT name FROM sqlite_master WHERE type='table'")}
                if "accounts" in tables:
                    self.assertEqual(db.execute("SELECT COUNT(*) FROM accounts").fetchone()[0], 0)
                if "transactions" in tables:
                    self.assertEqual(db.execute("SELECT COUNT(*) FROM transactions").fetchone()[0], 0)
                if "schema_meta" in tables:
                    self.assertEqual(db.execute("SELECT COUNT(*) FROM schema_meta").fetchone()[0], 0)
            migrate.migrate(userdata, database)

    def test_shared_database_restore_filters_yen_and_keeps_token_data(self):
        with tempfile.TemporaryDirectory() as temp:
            directory = Path(temp)
            userdata = directory / "userdata"
            userdata.mkdir()
            account_id = str(uuid.uuid4())
            token_only = str(uuid.uuid4())
            (userdata / f"{account_id}.yml").write_text("money: 1.5\n")
            database = directory / "economy.db"
            migrate.migrate(userdata, database)
            with closing(sqlite3.connect(database)) as db, db:
                db.executemany("INSERT INTO accounts VALUES ('token',?,NULL,NULL,500,1,1) ON CONFLICT(currency,uuid) DO UPDATE SET balance=500", [(account_id,), (token_only,)])
                db.executemany("INSERT INTO transactions(currency,created_at,uuid,delta,balance_after,reason) VALUES ('token',1,?,500,500,'default')", [(account_id,), (token_only,)])
                self.assertIn("1 accounts", migrate.verify(userdata, db))
            restore.restore(database, userdata)
            self.assertIn("money: 2", (userdata / f"{account_id}.yml").read_text())
            self.assertFalse((userdata / f"{token_only}.yml").exists())
            with closing(sqlite3.connect(database)) as db, db:
                self.assertEqual(dict(db.execute("SELECT uuid,balance FROM accounts WHERE currency='token'")), {account_id: 500, token_only: 500})
            with self.assertRaises(ValueError):
                migrate.migrate(userdata, database)
            with self.assertRaises(ValueError):
                token.migrate([(account_id, None, 1)], database)

    def test_restore_supports_old_currencyless_vault_database(self):
        with tempfile.TemporaryDirectory() as temp:
            directory = Path(temp)
            account_id = str(uuid.uuid4())
            database = directory / "legacy.db"
            with closing(sqlite3.connect(database)) as db, db:
                db.execute("CREATE TABLE accounts(uuid TEXT,balance INTEGER)")
                db.execute("INSERT INTO accounts VALUES (?,42)", (account_id,))
            (directory / f"{account_id}.yml").write_text("money: 1\n")
            restore.restore(database, directory)
            self.assertIn("money: 42", (directory / f"{account_id}.yml").read_text())


class LegacyVaultMigrationTest(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.directory = Path(self.temp.name)
        self.userdata = self.directory / "userdata"
        self.userdata.mkdir()
        self.values = ["1E+3", "123.5", None, "-1.5", "0"]
        self.ids = [str(uuid.uuid4()) for _ in self.values]
        for index, (account_id, value) in enumerate(zip(self.ids, self.values)):
            (self.userdata / f"{account_id}.yml").write_text(
                f"last-account-name: Fixture{index}\n" + (f"money: '{value}'\n" if value is not None else ""))
        self.output = self.directory / "economy.db"

    def migrate(self):
        return migrate.migrate(self.userdata, self.output, "legacy-vault")

    def test_schema_rounding_notes_and_one_opening_row_per_account(self):
        report = self.migrate()
        with closing(sqlite3.connect(self.output)) as db:
            columns = lambda table: [row[1] for row in db.execute(f"PRAGMA table_info({table})")]
            self.assertEqual(columns("accounts"), ["uuid", "name", "name_lower", "balance", "created_at", "updated_at"])
            self.assertEqual(columns("transactions"), ["id", "created_at", "uuid", "delta", "balance_after", "reason", "source", "actor_uuid", "transfer_id", "note"])
            actual = dict(db.execute("SELECT uuid,balance FROM accounts"))
            self.assertEqual([actual[u] for u in self.ids], [1000, 124, 10240, -2, 0])
            self.assertEqual(dict(db.execute("SELECT uuid,name_lower FROM accounts")),
                             {u: f"fixture{i}" for i, u in enumerate(self.ids)})
            rows = {u: (delta, after, reason, note, source, actor, transfer) for u, delta, after, reason, note, source, actor, transfer in db.execute(
                "SELECT uuid,delta,balance_after,reason,note,source,actor_uuid,transfer_id FROM transactions")}
            self.assertEqual(len(rows), len(self.ids))
            for u, raw in zip(self.ids, self.values):
                self.assertEqual(rows[u], (actual[u], actual[u], "migrate", raw if raw is not None else "(missing: 10240)", None, None, None))
            self.assertEqual(db.execute("SELECT count(*) FROM schema_meta WHERE key='migrated_at'").fetchone()[0], 1)
            self.assertEqual(db.execute("SELECT count(*) FROM schema_meta WHERE key='legacy_databases_imported_at'").fetchone()[0], 0)
            self.assertEqual(migrate.verify(self.userdata, db, "legacy-vault"), report)
        originals = sum((Decimal(v) if v is not None else migrate.START for v in self.values), Decimal(0))
        self.assertIn(f"rounding difference={originals - sum(actual.values())}", report)
        self.assertEqual(list(self.directory.glob(".essentials-export-*")), [])
        self.assertFalse(Path(str(self.output) + "-wal").exists())

    def test_failed_verification_leaves_no_output_and_can_retry(self):
        with patch.object(migrate, "verify", side_effect=ValueError("reconciliation mismatch")):
            with self.assertRaisesRegex(ValueError, "reconciliation mismatch"), redirect_stdout(io.StringIO()) as printed:
                self.migrate()
            self.assertEqual(printed.getvalue(), "")
        self.assertFalse(self.output.exists())
        self.assertEqual(list(self.directory.glob(".essentials-export-*")), [])
        self.migrate()

    def test_verification_rejects_count_balance_ledger_after_and_note_corruption(self):
        self.migrate()
        alterations = ["DELETE FROM accounts", "UPDATE accounts SET balance=balance+1",
                       "DELETE FROM transactions", "UPDATE transactions SET delta=delta+1",
                       "UPDATE transactions SET balance_after=balance_after+1",
                       "UPDATE transactions SET note='changed'", "UPDATE transactions SET reason='changed'"]
        with closing(sqlite3.connect(self.output)) as db:
            for sql in alterations:
                with self.subTest(sql=sql):
                    db.execute("BEGIN")
                    db.execute(sql)
                    with self.assertRaises(ValueError):
                        migrate.verify(self.userdata, db, "legacy-vault")
                    db.rollback()

    def test_corrupt_history_is_rolled_back_before_publication(self):
        original_verify = migrate.verify
        def corrupt(source, db, output_format):
            db.execute("UPDATE transactions SET delta=delta+1")
            return original_verify(source, db, output_format)
        with patch.object(migrate, "verify", side_effect=corrupt):
            with self.assertRaisesRegex(ValueError, "ledger mismatch"):
                self.migrate()
        self.assertFalse(self.output.exists())
        self.assertEqual(list(self.directory.glob(".essentials-export-*")), [])

    def test_populated_destination_is_refused_byte_for_byte(self):
        (self.userdata / f"{self.ids[3]}.yml").write_text("money: 1.5\n")
        for output_format in ("unified", "legacy-vault"):
            with self.subTest(output_format=output_format):
                migrate.migrate(self.userdata, self.output, output_format)
                before = hashlib.sha256(self.output.read_bytes()).digest()
                with self.assertRaisesRegex(ValueError, "already exists"):
                    self.migrate()
                self.assertEqual(hashlib.sha256(self.output.read_bytes()).digest(), before)
                self.output.unlink()

    def test_existing_empty_file_is_also_refused(self):
        self.output.touch()
        with self.assertRaisesRegex(ValueError, "already exists"):
            self.migrate()
        self.assertEqual(self.output.read_bytes(), b"")

    def test_concurrent_destination_is_not_overwritten(self):
        original_link = migrate.os.link
        def competing_output(source, target):
            Path(target).write_bytes(b"other export")
            original_link(source, target)
        with patch.object(migrate.os, "link", side_effect=competing_output):
            with self.assertRaisesRegex(ValueError, "already exists"):
                self.migrate()
        self.assertEqual(self.output.read_bytes(), b"other export")
        self.assertEqual(list(self.directory.glob(".essentials-export-*")), [])

    def test_cli_legacy_vault_format(self):
        result = subprocess.run([sys.executable, str(HERE / "migrate_essentials_to_sqlite.py"),
                                 "--input", str(self.userdata), "--output", str(self.output),
                                 "--format", "legacy-vault"], capture_output=True, text=True)
        self.assertEqual(result.returncode, 0, result.stderr)
        with closing(sqlite3.connect(self.output)) as db:
            self.assertNotIn("currency", [row[1] for row in db.execute("PRAGMA table_info(accounts)")])
            self.assertIn("5 accounts", migrate.verify(self.userdata, db, "legacy-vault"))


class TokenMigrationTest(unittest.TestCase):
    def test_negative_accounts_are_reported_without_clamping_or_exclusion(self):
        with tempfile.TemporaryDirectory() as temp:
            source = Path(temp) / "export.tsv"
            alice, bob = str(uuid.uuid4()), str(uuid.uuid4())
            source.write_text(f"{alice}\t5\n{bob}\t-10\n{alice}\t99\n")
            for mode in ("clamp", "skip", "fail"):
                with self.assertRaisesRegex(ValueError, f"1 件: {bob}"):
                    token.load_rows(source, {}, mode)
            source.write_text(f"{alice}\t5\n{bob}\t0\n{alice}\t99\n")
            rows, negatives, zero, duplicates, count = token.load_rows(source, {alice: "Alice"}, "fail")
            self.assertEqual(rows, [(alice,"Alice",5),(bob,None,0)])
            self.assertEqual((len(negatives),zero,duplicates,count),(0,1,1,2))
            for value in ("invalid-uuid\t5\n", f"{alice}\t{2**63}\n"):
                source.write_text(value)
                with self.assertRaises(ValueError): token.load_rows(source, {}, "fail")

    def test_account_history_counts_totals_and_overflowing_aggregate(self):
        with tempfile.TemporaryDirectory() as temp:
            database = Path(temp) / "economy.db"
            ids = [str(uuid.uuid4()) for _ in range(3)]
            rows = [(ids[0], "Alice", 2**63 - 1), (ids[1], "Bob", 2**63 - 1), (ids[2], None, 0)]
            self.assertEqual(token.migrate(rows, database), (3, 2 * (2**63 - 1), 2**63 - 1))
            with closing(sqlite3.connect(database)) as db, db:
                self.assertEqual(token.verify(rows, db), (3, 2 * (2**63 - 1), 2**63 - 1))
                self.assertEqual(dict(db.execute("SELECT uuid,delta FROM transactions WHERE currency='token'")), {account_id: balance for account_id, _, balance in rows})
                self.assertEqual(db.execute("SELECT count(*) FROM accounts WHERE currency='yen'").fetchone()[0], 3)
                self.assertEqual(db.execute("SELECT count(*) FROM schema_meta WHERE key='tokenmanager_data_yml_imported_at'").fetchone()[0], 1)
                self.assertEqual(db.execute("SELECT count(*) FROM schema_meta WHERE key='legacy_databases_imported_at'").fetchone()[0], 0)
                self.assertEqual(db.execute("SELECT value FROM schema_meta WHERE key='last_applied_tx_id'").fetchone()[0], "3")
            with self.assertRaises(ValueError):
                token.migrate(rows, database)

    def test_reconciliation_failure_rolls_back_accounts_history_and_metadata(self):
        with tempfile.TemporaryDirectory() as temp:
            database = Path(temp) / "economy.db"
            rows = [(str(uuid.uuid4()), "Alice", 50)]
            with patch.object(token, "verify", side_effect=ValueError("verification failed")):
                with self.assertRaises(ValueError):
                    token.migrate(rows, database)
            with closing(sqlite3.connect(database)) as db, db:
                tables = {name for (name,) in db.execute("SELECT name FROM sqlite_master WHERE type='table'")}
                for table in ("accounts", "transactions", "schema_meta"):
                    if table in tables:
                        self.assertEqual(db.execute(f"SELECT count(*) FROM {table}").fetchone()[0], 0)
            self.assertEqual(token.migrate(rows, database), (1, 50, 50))

    def test_corrupt_history_is_rejected_before_commit(self):
        with tempfile.TemporaryDirectory() as temp:
            database = Path(temp) / "economy.db"
            rows = [(str(uuid.uuid4()), "Alice", 50)]
            with closing(sqlite3.connect(database)) as db, db:
                for statement in token.SCHEMA:
                    db.execute(statement)
                db.execute("CREATE TRIGGER corrupt_history AFTER INSERT ON transactions BEGIN UPDATE transactions SET delta=delta+1 WHERE id=NEW.id; END")
            with self.assertRaises(ValueError):
                token.migrate(rows, database)
            with closing(sqlite3.connect(database)) as db, db:
                self.assertEqual(db.execute("SELECT count(*) FROM accounts").fetchone()[0], 0)
                self.assertEqual(db.execute("SELECT count(*) FROM transactions").fetchone()[0], 0)
                self.assertEqual(db.execute("SELECT count(*) FROM schema_meta").fetchone()[0], 0)

    def test_cli_dry_run_creates_no_database(self):
        with tempfile.TemporaryDirectory() as temp:
            source = Path(temp) / "export.tsv"
            database = Path(temp) / "economy.db"
            source.write_text(f"{uuid.uuid4()}\t25\n")
            with patch("sys.argv", ["migrate", "--input", str(source), "--output", str(database), "--dry-run"]):
                token.main()
            self.assertFalse(database.exists())


if __name__ == "__main__":
    unittest.main()
