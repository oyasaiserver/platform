import sqlite3
import tempfile
import unittest
from pathlib import Path

from export_sqlite_to_sellers import export, read_yaml


class ExportTest(unittest.TestCase):
    def test_round_trip_and_unresolved_guard(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory)
            db_path = path / "shops.db"
            db = sqlite3.connect(db_path)
            db.executescript("""
                CREATE TABLE schema_meta(key TEXT PRIMARY KEY, value TEXT NOT NULL);
                CREATE TABLE shops(section TEXT, shop_key TEXT, record_yaml TEXT);
                CREATE TABLE shop_transactions(status TEXT, reviewed_at INTEGER);
            """)
            db.executemany("INSERT INTO schema_meta VALUES(?,?)", [
                ("schema_version", "1"), ("source_root_yaml", "DataVersion: 8\nroot_unknown: kept\n")
            ])
            db.executemany("INSERT INTO shops VALUES(?,?,?)", [
                ("sellers", "one/shop", "owner: example\nitems: ['YAML:YWJj']\nunknown: kept\n"),
                ("deferred_sellers", "later/shop", "owner: example2\nitems: []\n"),
                ("invalid_sellers", "bad/shop", "owner: example3\nitems: []\nunknown: still-here\n"),
            ])
            db.commit()
            output = path / "sellers-export.yml"
            assert export(db_path, output) == {"sellers": 1, "deferred_sellers": 1, "invalid_sellers": 1}
            data = read_yaml(output.read_text())
            assert data["DataVersion"] == 8
            assert data["root_unknown"] == "kept"
            assert set(data["sellers"]) == {"one/shop"}
            assert data["sellers"]["one/shop"]["items"] == ["YAML:YWJj"]
            assert data["sellers"]["one/shop"]["unknown"] == "kept"
            assert data["invalid_sellers"]["bad/shop"]["unknown"] == "still-here"
            with self.assertRaises(FileExistsError):
                export(db_path, output)
            db.execute("INSERT INTO shop_transactions VALUES('pending',NULL)")
            db.commit()
            with self.assertRaises(ValueError):
                export(db_path, path / "another.yml")
            db.close()

    def test_duplicate_key_rejected(self):
        with self.assertRaises(ValueError):
            read_yaml("a: 1\na: 2\n")
        with self.assertRaises(ValueError):
            read_yaml("a: &item value\nb: *item\n")
        with self.assertRaises(ValueError):
            read_yaml("a: !!str value\n")


if __name__ == "__main__":
    unittest.main()
