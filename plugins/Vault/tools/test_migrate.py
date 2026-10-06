import importlib.util
from pathlib import Path
import sqlite3
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


class MigrationTest(unittest.TestCase):
    def test_rounding_reconciliation_and_restore(self):
        with tempfile.TemporaryDirectory() as temp:
            directory = Path(temp)
            userdata = directory / "userdata"
            userdata.mkdir()
            values = ["1E+3", None, "-93712.9999999991", "123.1234567890123456789012345678", "0.5"]
            ids = [str(uuid.uuid4()) for _ in values]
            for account_id, value in zip(ids, values):
                (userdata / f"{account_id}.yml").write_text(f"last-account-name: Alice\n" + (f"money: {value}\n" if value else ""))
            database = directory / "economy.db"
            migrate.migrate(userdata, database)
            with sqlite3.connect(database) as db:
                self.assertIn("5 accounts", migrate.verify(userdata, db))
                balances = dict(db.execute("SELECT uuid, balance FROM accounts"))
                self.assertEqual([balances[u] for u in ids], [1000, 10240, -93713, 123, 1])
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
            with sqlite3.connect(database) as db:
                tables = {name for (name,) in db.execute("SELECT name FROM sqlite_master WHERE type='table'")}
                if "accounts" in tables:
                    self.assertEqual(db.execute("SELECT COUNT(*) FROM accounts").fetchone()[0], 0)
                if "transactions" in tables:
                    self.assertEqual(db.execute("SELECT COUNT(*) FROM transactions").fetchone()[0], 0)
                if "schema_meta" in tables:
                    self.assertEqual(db.execute("SELECT COUNT(*) FROM schema_meta").fetchone()[0], 0)
            migrate.migrate(userdata, database)


if __name__ == "__main__":
    unittest.main()
