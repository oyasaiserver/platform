package io.oyasai.vault

import java.math.BigDecimal
import java.math.RoundingMode
import java.sql.Connection
import java.sql.DriverManager
import java.util.Locale
import java.util.UUID

internal object Money {
  const val START = 10_240L
  const val MAX = 10_000_000_000_000L
  const val MIN = -999_999_114_514L

  fun round(value: Double): Long? {
    if (!value.isFinite() || value < 0) return null
    return try {
      val rounded = BigDecimal.valueOf(value).setScale(0, RoundingMode.HALF_UP).longValueExact()
      rounded.takeIf { value == 0.0 || it > 0 }
    } catch (_: ArithmeticException) {
      null
    }
  }

  fun payInput(raw: String): String? = if ('-' in raw) null else raw.replace(Regex("[^0-9.]"), "")
}

internal class Ledger(path: String) : AutoCloseable {
  private val db: Connection = DriverManager.getConnection("jdbc:sqlite:$path")

  init {
    try {
      db.createStatement().use {
        it.execute("PRAGMA journal_mode=WAL")
        it.execute("PRAGMA synchronous=FULL")
        it.execute("PRAGMA busy_timeout=5000")
        it.execute(
            "CREATE TABLE IF NOT EXISTS accounts (uuid TEXT PRIMARY KEY, name TEXT, name_lower TEXT, balance INTEGER NOT NULL CHECK (balance BETWEEN ${Money.MIN} AND ${Money.MAX}), created_at INTEGER NOT NULL, updated_at INTEGER NOT NULL)"
        )
        it.execute("CREATE INDEX IF NOT EXISTS idx_accounts_name ON accounts(name_lower)")
        it.execute("CREATE INDEX IF NOT EXISTS idx_accounts_top ON accounts(balance DESC)")
        it.execute(
            "CREATE TABLE IF NOT EXISTS transactions (id INTEGER PRIMARY KEY AUTOINCREMENT, created_at INTEGER NOT NULL, uuid TEXT NOT NULL, delta INTEGER NOT NULL, balance_after INTEGER NOT NULL, reason TEXT NOT NULL, source TEXT, actor_uuid TEXT, transfer_id INTEGER, note TEXT)"
        )
        it.execute("CREATE INDEX IF NOT EXISTS idx_tx_uuid ON transactions(uuid, id)")
        it.execute(
            "CREATE TABLE IF NOT EXISTS schema_meta (key TEXT PRIMARY KEY, value TEXT NOT NULL)"
        )
      }
      check(invariant()) { "残高と履歴の合計が一致しません" }
    } catch (e: Exception) {
      db.close()
      throw e
    }
  }

  @Synchronized
  fun invariant(): Boolean =
      db.createStatement().use { s ->
        s.executeQuery(
                "SELECT COUNT(*) FROM (SELECT a.uuid FROM accounts a LEFT JOIN (SELECT uuid, SUM(delta) total FROM transactions GROUP BY uuid) t ON t.uuid=a.uuid WHERE a.balance != COALESCE(t.total, 0) UNION ALL SELECT t.uuid FROM transactions t LEFT JOIN accounts a ON a.uuid=t.uuid WHERE a.uuid IS NULL)"
            )
            .use { r -> r.next() && r.getInt(1) == 0 }
      }

  @Synchronized
  fun balance(uuid: UUID): Long? =
      db.prepareStatement("SELECT balance FROM accounts WHERE uuid=?").use { s ->
        s.setString(1, uuid.toString())
        s.executeQuery().use { if (it.next()) it.getLong(1) else null }
      }

  @Synchronized
  fun has(uuid: UUID, amount: Long): Boolean = balance(uuid)?.let { it >= amount } ?: false

  @Synchronized
  fun resolve(name: String): UUID? =
      db.prepareStatement("SELECT uuid FROM accounts WHERE name_lower=? LIMIT 2").use { s ->
        s.setString(1, name.lowercase(Locale.ROOT))
        s.executeQuery().use { r ->
          if (!r.next()) return@use null
          val uuid = UUID.fromString(r.getString(1))
          if (r.next()) throw IllegalStateException("同じ名前の口座が複数あります: $name")
          uuid
        }
      }

  @Synchronized
  fun join(uuid: UUID, name: String): Boolean = transaction {
    val now = System.currentTimeMillis()
    db.prepareStatement(
            "UPDATE accounts SET name=NULL, name_lower=NULL, updated_at=? WHERE name_lower=? AND uuid<>?"
        )
        .use {
          it.setLong(1, now)
          it.setString(2, name.lowercase(Locale.ROOT))
          it.setString(3, uuid.toString())
          it.executeUpdate()
        }
    if (balance(uuid) == null) {
      db.prepareStatement("INSERT INTO accounts VALUES (?, ?, ?, ?, ?, ?)").use {
        it.setString(1, uuid.toString())
        it.setString(2, name)
        it.setString(3, name.lowercase(Locale.ROOT))
        it.setLong(4, Money.START)
        it.setLong(5, now)
        it.setLong(6, now)
        it.executeUpdate()
      }
      record(uuid, Money.START, Money.START, "initial", null, null, null)
    } else {
      db.prepareStatement("UPDATE accounts SET name=?, name_lower=?, updated_at=? WHERE uuid=?")
          .use {
            it.setString(1, name)
            it.setString(2, name.lowercase(Locale.ROOT))
            it.setLong(3, now)
            it.setString(4, uuid.toString())
            it.executeUpdate()
          }
    }
    true
  }

  @Synchronized
  fun change(
      uuid: UUID,
      amount: Long,
      kind: String,
      loan: Boolean = false,
      source: String? = null,
      actor: UUID? = null,
  ): Long? = transaction {
    val old = balance(uuid) ?: return@transaction null
    val next =
        when (kind) {
          "deposit",
          "eco_give" ->
              runCatching { Math.addExact(old, amount) }.getOrNull() ?: return@transaction null
          "withdraw",
          "eco_take" ->
              runCatching { Math.subtractExact(old, amount) }.getOrNull() ?: return@transaction null
          "eco_set",
          "eco_reset" -> amount
          else -> error("Unknown change: $kind")
        }
    if (next > Money.MAX || next < (if (kind == "withdraw" && !loan) 0L else Money.MIN))
        return@transaction null
    if (next != old) {
      update(uuid, next)
      record(uuid, next - old, next, kind, source, actor, null)
    }
    next
  }

  @Synchronized
  fun pay(from: UUID, to: UUID, amount: Long, loan: Boolean, actor: UUID?): Boolean = transaction {
    if (from == to || amount < 1) return@transaction false
    val a = balance(from) ?: return@transaction false
    val b = balance(to) ?: return@transaction false
    val debit =
        runCatching { Math.subtractExact(a, amount) }.getOrNull() ?: return@transaction false
    val credit = runCatching { Math.addExact(b, amount) }.getOrNull() ?: return@transaction false
    if (debit < (if (loan) Money.MIN else 0L) || credit > Money.MAX) return@transaction false
    val transferId =
        db.createStatement().use { s ->
          s.executeQuery("SELECT COALESCE(MAX(transfer_id), 0) + 1 FROM transactions").use {
            it.next()
            it.getLong(1)
          }
        }
    update(from, debit)
    update(to, credit)
    record(from, -amount, debit, "pay", "pay", actor, transferId)
    record(to, amount, credit, "pay", "pay", actor, transferId)
    true
  }

  @Synchronized
  fun top(page: Int): List<Pair<String, Long>> =
      db.prepareStatement(
              "SELECT COALESCE(name, uuid), balance FROM accounts ORDER BY balance DESC, uuid LIMIT 10 OFFSET ?"
          )
          .use { s ->
            s.setInt(1, Math.multiplyExact(page - 1, 10))
            s.executeQuery().use { r ->
              buildList { while (r.next()) add(r.getString(1) to r.getLong(2)) }
            }
          }

  private fun update(uuid: UUID, balance: Long) {
    db.prepareStatement("UPDATE accounts SET balance=?, updated_at=? WHERE uuid=?").use {
      it.setLong(1, balance)
      it.setLong(2, System.currentTimeMillis())
      it.setString(3, uuid.toString())
      it.executeUpdate()
    }
  }

  private fun record(
      uuid: UUID,
      delta: Long,
      balance: Long,
      reason: String,
      source: String?,
      actor: UUID?,
      transfer: Long?,
  ) {
    db.prepareStatement(
            "INSERT INTO transactions (created_at, uuid, delta, balance_after, reason, source, actor_uuid, transfer_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
        )
        .use {
          it.setLong(1, System.currentTimeMillis())
          it.setString(2, uuid.toString())
          it.setLong(3, delta)
          it.setLong(4, balance)
          it.setString(5, reason)
          it.setString(6, source)
          it.setString(7, actor?.toString())
          if (transfer == null) it.setNull(8, java.sql.Types.BIGINT) else it.setLong(8, transfer)
          it.executeUpdate()
        }
  }

  private inline fun <T> transaction(block: () -> T): T {
    db.autoCommit = false
    try {
      val result = block()
      db.commit()
      return result
    } catch (e: Exception) {
      db.rollback()
      throw e
    } finally {
      db.autoCommit = true
    }
  }

  @Synchronized
  override fun close() {
    try {
      db.createStatement().use { it.execute("PRAGMA wal_checkpoint(TRUNCATE)") }
    } finally {
      db.close()
    }
  }
}
