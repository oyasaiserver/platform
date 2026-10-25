"""SQLite schema shared by the offline OyasaiEconomy migration tools."""

MIN_YEN = -999999114514
MAX_YEN = 10000000000000
MAX_TOKEN = 9223372036854775807
DATA_TABLES = ("accounts", "transactions", "notification_outbox", "schema_meta")
SCHEMA = [
    f"""CREATE TABLE IF NOT EXISTS accounts (
        currency TEXT NOT NULL, uuid TEXT NOT NULL, name TEXT, name_lower TEXT,
        balance INTEGER NOT NULL CHECK(typeof(balance)='integer' AND
          balance>=0),
        created_at INTEGER NOT NULL, updated_at INTEGER NOT NULL,
        PRIMARY KEY(currency,uuid))""",
    "CREATE INDEX IF NOT EXISTS idx_accounts_name ON accounts(currency,name_lower)",
    "CREATE INDEX IF NOT EXISTS idx_accounts_top ON accounts(currency,balance DESC)",
    """CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT, currency TEXT NOT NULL,
        created_at INTEGER NOT NULL, uuid TEXT NOT NULL,
        delta INTEGER NOT NULL CHECK(typeof(delta)='integer'), balance_after INTEGER NOT NULL,
        reason TEXT, source TEXT, actor_uuid TEXT, transfer_id TEXT, note TEXT,
        FOREIGN KEY(currency,uuid) REFERENCES accounts(currency,uuid))""",
    "CREATE INDEX IF NOT EXISTS idx_tx_uuid ON transactions(currency,uuid,id)",
    "CREATE TABLE IF NOT EXISTS schema_meta(key TEXT PRIMARY KEY,value TEXT NOT NULL)",
    """CREATE TABLE IF NOT EXISTS notification_outbox (
        id INTEGER PRIMARY KEY AUTOINCREMENT, transaction_id INTEGER NOT NULL UNIQUE,
        target_uuid TEXT NOT NULL, currency TEXT NOT NULL,
        sender_uuid TEXT, sender_name TEXT, notification_type TEXT NOT NULL, delta INTEGER NOT NULL,
        balance_after INTEGER NOT NULL, created_at INTEGER NOT NULL, delivered_at INTEGER,
        FOREIGN KEY(transaction_id) REFERENCES transactions(id))""",
    "CREATE INDEX IF NOT EXISTS idx_notification_outbox_pending ON notification_outbox(target_uuid,delivered_at,id)",

]

LEGACY_VAULT_SCHEMA = [
    f"""CREATE TABLE accounts (
        uuid TEXT PRIMARY KEY, name TEXT, name_lower TEXT,
        balance INTEGER NOT NULL CHECK(typeof(balance)='integer' AND
          balance BETWEEN {MIN_YEN} AND {MAX_YEN}),
        created_at INTEGER NOT NULL, updated_at INTEGER NOT NULL)""",
    "CREATE INDEX idx_accounts_name ON accounts(name_lower)",
    "CREATE INDEX idx_accounts_top ON accounts(balance DESC)",
    """CREATE TABLE transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT, created_at INTEGER NOT NULL,
        uuid TEXT NOT NULL, delta INTEGER NOT NULL CHECK(typeof(delta)='integer'),
        balance_after INTEGER NOT NULL, reason TEXT, source TEXT, actor_uuid TEXT,
        transfer_id INTEGER, note TEXT, FOREIGN KEY(uuid) REFERENCES accounts(uuid))""",
    "CREATE INDEX idx_tx_uuid ON transactions(uuid,id)",
    "CREATE TABLE schema_meta(key TEXT PRIMARY KEY,value TEXT NOT NULL)",
]


def begin_empty_import(db, schema=SCHEMA):
    """Keep refusal, schema creation, and all imported rows in one transaction."""
    db.execute("PRAGMA journal_mode=WAL")
    db.execute("PRAGMA synchronous=NORMAL")
    db.execute("PRAGMA foreign_keys=ON")
    db.execute("BEGIN IMMEDIATE")
    for table in DATA_TABLES:
        exists = db.execute("SELECT 1 FROM sqlite_master WHERE type='table' AND name=?", (table,)).fetchone()
        if exists and db.execute(f"SELECT 1 FROM {table} LIMIT 1").fetchone():
            raise ValueError(f"output DB already contains {table}")
    for statement in schema:
        db.execute(statement)

# Historical source defaults are data; the runtime loads its policies from config.yml.
IMPORT_CURRENCIES = {"yen": 10240, "token": 25}


def reject_negative(accounts):
    negative = [row[0] for row in accounts if row[2] < 0]
    if negative:
        raise ValueError(f"負残高の口座 {len(negative)} 件: {', '.join(negative)}")


def complete_accounts(db, currencies=IMPORT_CURRENCIES):
    """Fill every missing currency/UUID pair and verify all history sums before committing."""
    import time
    now = int(time.time() * 1000)
    accounts = list(db.execute("SELECT uuid,MAX(name) FROM accounts GROUP BY uuid"))
    for currency, initial in currencies.items():
        for account_id, name in accounts:
            if db.execute("SELECT 1 FROM accounts WHERE currency=? AND uuid=?", (currency, account_id)).fetchone():
                continue
            db.execute("INSERT INTO accounts VALUES(?,?,?,?,?,?,?)", (currency, account_id, name, name.lower() if name else None, initial, now, now))
            db.execute("INSERT INTO transactions(currency,created_at,uuid,delta,balance_after,reason) VALUES(?,?,?,?,?,'initial')", (currency, now, account_id, initial, initial))
    totals = {}
    for currency, account_id, delta in db.execute("SELECT currency,uuid,delta FROM transactions"):
        key = (currency, account_id)
        totals[key] = totals.get(key, 0) + delta
    for currency, account_id, balance in db.execute("SELECT currency,uuid,balance FROM accounts"):
        if totals.pop((currency, account_id), 0) != balance:
            raise ValueError("残高と履歴の合計が一致しません")
    if totals or db.execute("PRAGMA foreign_key_check").fetchone():
        raise ValueError("口座のない履歴があります")
