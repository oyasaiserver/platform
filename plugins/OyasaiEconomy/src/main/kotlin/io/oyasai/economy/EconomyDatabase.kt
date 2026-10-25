package io.oyasai.economy

import java.io.File
import java.math.BigInteger
import java.sql.Connection
import java.sql.DriverManager
import java.util.Locale
import java.util.UUID
import java.util.concurrent.ArrayBlockingQueue
import java.util.concurrent.CompletableFuture
import java.util.concurrent.TimeUnit

/**
 * Shared storage: API operations only touch memory and enqueue; this worker alone writes SQLite.
 */
internal class EconomyDatabase(
    path: String,
    policies: List<CurrencyPolicy>,
    queueSize: Int = 4096,
    legacyPlugins: File? = null,
    startWorker: Boolean = true,
    legacyImportOptions: LegacyImportOptions = LegacyImportOptions(),
    private val onFailure: (Throwable) -> Unit = {},
    private val onNotifications: (List<PendingNotification>) -> Unit = {},
) : AutoCloseable {
  val connection: Connection = DriverManager.getConnection("jdbc:sqlite:$path")
  val lock = Any() // DB lock, never held by API calls
  val memoryLock = Any()
  @Volatile
  var healthy = true
    private set

  @Volatile private var accepting = true
  @Volatile private var closing = false
  private val queue = ArrayBlockingQueue<Work>(queueSize)
  private var nextId = 1L
  private var started = false
  val ledgers =
      policies
          .associate { it.id to CurrencyLedger(it, persist = ::enqueue, lock = memoryLock) }
          .toMutableMap()
  private val worker = Thread(::work, "OyasaiEconomy-DB-Writer").apply { isDaemon = false }
  val migrationReports: List<MigrationReport>

  init {
    try {
      schema()
      check(queryLong("SELECT COUNT(*) FROM accounts WHERE balance < 0") == 0L) { "負残高の口座があります" }
      migrationReports =
          if (legacyPlugins != null && meta("legacy_databases_imported_at") == null)
              importLegacyDatabases(
                  connection,
                  legacyPlugins,
                  legacyImportOptions,
                  policies = policies,
              )
          else emptyList()
      check(invariant()) { "残高と履歴の合計が一致しません" }
      reloadLedgers()
      nextId =
          maxOf(
              meta("last_applied_tx_id")?.toLongOrNull() ?: 0,
              queryLong("SELECT COALESCE(MAX(id),0) FROM transactions"),
          ) + 1
      if (startWorker) start()
    } catch (e: Exception) {
      connection.close()
      throw e
    }
  }

  private fun schema() {
    connection.createStatement().use { s ->
      s.execute("PRAGMA journal_mode=WAL")
      s.execute("PRAGMA synchronous=NORMAL")
      s.execute("PRAGMA foreign_keys=ON")
      s.execute("PRAGMA busy_timeout=5000")
      s.execute(
          """CREATE TABLE IF NOT EXISTS accounts (
        currency TEXT NOT NULL,uuid TEXT NOT NULL,name TEXT,name_lower TEXT,
        balance INTEGER NOT NULL CHECK(typeof(balance)='integer' AND balance>=0),
        created_at INTEGER NOT NULL,updated_at INTEGER NOT NULL,PRIMARY KEY(currency,uuid))"""
      )
      s.execute("CREATE INDEX IF NOT EXISTS idx_accounts_name ON accounts(currency,name_lower)")
      s.execute("CREATE INDEX IF NOT EXISTS idx_accounts_top ON accounts(currency,balance DESC)")
      s.execute(
          """CREATE TABLE IF NOT EXISTS transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,currency TEXT NOT NULL,created_at INTEGER NOT NULL,
        uuid TEXT NOT NULL,delta INTEGER NOT NULL CHECK(typeof(delta)='integer'),balance_after INTEGER NOT NULL,
        reason TEXT,source TEXT,actor_uuid TEXT,transfer_id TEXT,note TEXT,
        FOREIGN KEY(currency,uuid) REFERENCES accounts(currency,uuid))"""
      )
      s.execute("CREATE INDEX IF NOT EXISTS idx_tx_uuid ON transactions(currency,uuid,id)")
      s.execute("CREATE TABLE IF NOT EXISTS schema_meta (key TEXT PRIMARY KEY,value TEXT NOT NULL)")
      s.execute(
          """CREATE TABLE IF NOT EXISTS notification_outbox (
        id INTEGER PRIMARY KEY AUTOINCREMENT,transaction_id INTEGER NOT NULL UNIQUE,target_uuid TEXT NOT NULL,
        currency TEXT NOT NULL,sender_uuid TEXT,sender_name TEXT,
        notification_type TEXT NOT NULL,delta INTEGER NOT NULL,balance_after INTEGER NOT NULL,
        created_at INTEGER NOT NULL,delivered_at INTEGER,FOREIGN KEY(transaction_id) REFERENCES transactions(id))"""
      )
      s.execute(
          "CREATE INDEX IF NOT EXISTS idx_notification_outbox_pending ON notification_outbox(target_uuid,delivered_at,id)"
      )
    }
  }

  fun start() {
    check(!started && !closing)
    started = true
    worker.start()
  }

  fun enqueue(writes: List<BalanceWrite>, completion: CompletableFuture<Boolean>?): Boolean =
      synchronized(memoryLock) {
        if (!healthy || !accepting || writes.isEmpty()) {
          completion?.complete(false)
          return@synchronized false
        }
        val entries = writes.map { Entry(nextId++, it) }
        val accepted = queue.offer(Work.Writes(entries, completion))
        if (!accepted) completion?.complete(false)
        accepted
      }

  fun submit(task: () -> Unit): Boolean =
      synchronized(memoryLock) { healthy && accepting && queue.offer(Work.Task(task = task)) }

  fun drain(): Boolean {
    if (!started) return queue.isEmpty()
    val done = CompletableFuture<Boolean>()
    val deadline = System.nanoTime() + TimeUnit.SECONDS.toNanos(30)
    while (
        !synchronized(memoryLock) {
          accepting && queue.offer(Work.Task(true) { done.complete(healthy) })
        }
    ) {
      if (closing) return false
      check(System.nanoTime() < deadline) { "Timed out enqueueing economy drain barrier" }
      Thread.sleep(1)
    }
    return done.get(30, TimeUnit.SECONDS)
  }

  private fun work() {
    while (!closing || queue.isNotEmpty()) {
      val first = queue.poll(10, TimeUnit.MILLISECONDS) ?: continue
      if (first is Work.Task) {
        if (!healthy && !first.runAfterFailure) {
          continue
        }
        runCatching { first.task() }.onFailure(::fail)
        continue
      }
      val jobs = mutableListOf(first as Work.Writes)
      // Briefly collect FIFO writes; tasks/barriers never cross a batch boundary.
      Thread.sleep(2)
      while (jobs.size < 256 && queue.peek() is Work.Writes) jobs += queue.poll() as Work.Writes
      if (!healthy) {
        jobs.forEach { it.completion?.complete(false) }
        continue
      }
      val result = runCatching {
        transaction {
          val pending = mutableListOf<PendingNotification>()
          jobs.forEach { job ->
            val checkpoint = meta("last_applied_tx_id")?.toLongOrNull() ?: 0L
            val existing = job.entries.count { it.id <= checkpoint }
            if (existing == job.entries.size) return@forEach
            check(existing == 0) { "Partially duplicated economy job" }
            job.entries.forEach { entry ->
              write(entry.id, entry.write)
              entry.write.notificationType?.let { type ->
                pending +=
                    PendingNotification(
                        entry.id,
                        entry.write.uuid,
                        type,
                        entry.write.delta,
                        entry.write.balance,
                        entry.write.currency,
                        entry.write.senderName,
                    )
              }
            }
            setMeta("last_applied_tx_id", job.entries.last().id.toString())
          }
          pending
        }
      }
      result.onFailure(::fail)
      if (result.isSuccess)
          runCatching { onNotifications(result.getOrThrow()) }
              .onFailure { runCatching { onFailure(it) } }
      jobs.forEach { it.completion?.complete(result.isSuccess) }
    }
  }

  private fun fail(error: Throwable) {
    healthy = false
    runCatching { onFailure(error) }
  }

  fun write(id: Long, w: BalanceWrite) {
    val now = System.currentTimeMillis()
    connection
        .prepareStatement(
            """INSERT INTO accounts(currency,uuid,name,name_lower,balance,created_at,updated_at) VALUES(?,?,?,?,?,?,?)
      ON CONFLICT(currency,uuid) DO UPDATE SET name=excluded.name,name_lower=excluded.name_lower,balance=excluded.balance,updated_at=excluded.updated_at"""
        )
        .use { s ->
          s.setString(1, w.currency)
          s.setString(2, w.uuid.toString())
          s.setString(3, w.name)
          s.setString(4, w.name?.lowercase(Locale.ROOT))
          s.setLong(5, w.balance)
          s.setLong(6, now)
          s.setLong(7, now)
          s.executeUpdate()
        }
    // Name changes share FIFO ordering but never create monetary history.
    if (w.reason == "name-update") return
    connection
        .prepareStatement(
            "INSERT INTO transactions(id,currency,created_at,uuid,delta,balance_after,reason,source,actor_uuid,transfer_id,note) VALUES(?,?,?,?,?,?,?,?,?,?,?)"
        )
        .use { s ->
          s.setLong(1, id)
          s.setString(2, w.currency)
          s.setLong(3, now)
          s.setString(4, w.uuid.toString())
          s.setLong(5, w.delta)
          s.setLong(6, w.balance)
          s.setString(7, w.reason)
          s.setString(8, w.source)
          s.setString(9, w.actorUuid?.toString())
          s.setString(10, w.transferId)
          s.setString(11, w.note)
          s.executeUpdate()
        }
    w.notificationType?.let { type ->
      connection
          .prepareStatement(
              "INSERT INTO notification_outbox(transaction_id,target_uuid,notification_type,delta,balance_after,created_at,currency,sender_uuid,sender_name) VALUES(?,?,?,?,?,?,?,?,?)"
          )
          .use { s ->
            s.setLong(1, id)
            s.setString(2, w.uuid.toString())
            s.setString(3, type.name)
            s.setLong(4, w.delta)
            s.setLong(5, w.balance)
            s.setLong(6, now)
            s.setString(7, w.currency)
            s.setString(8, w.actorUuid?.toString())
            s.setString(9, w.senderName)
            s.executeUpdate()
          }
    }
  }

  fun reloadLedgers() {
    val loaded = mutableMapOf<String, MutableMap<UUID, BalanceRecord>>()
    synchronized(lock) {
      connection.createStatement().use { s ->
        s.executeQuery("SELECT currency,uuid,name,balance FROM accounts").use { r ->
          while (r.next()) loaded
              .getOrPut(r.getString(1)) { mutableMapOf() }[UUID.fromString(r.getString(2))] =
              BalanceRecord(r.getString(3), r.getLong(4))
        }
      }
    }
    synchronized(memoryLock) {
      ledgers.forEach { (id, ledger) -> ledger.replaceAll(loaded[id].orEmpty()) }
    }
  }

  fun invariant(): Boolean =
      synchronized(lock) {
        val totals = mutableMapOf<Pair<String, UUID>, BigInteger>()
        connection.createStatement().use { s ->
          s.executeQuery("SELECT currency,uuid,delta FROM transactions").use { r ->
            while (r.next()) {
              val key = r.getString(1) to UUID.fromString(r.getString(2))
              totals[key] = (totals[key] ?: BigInteger.ZERO) + BigInteger.valueOf(r.getLong(3))
            }
          }
          s.executeQuery("SELECT currency,uuid,balance FROM accounts").use { r ->
            while (r.next()) {
              val key = r.getString(1) to UUID.fromString(r.getString(2))
              val policy = ledgers[key.first]?.policy ?: return@synchronized false
              val balance = r.getLong(3)
              if (
                  balance !in 0..policy.maximum ||
                      (totals.remove(key) ?: BigInteger.ZERO) != BigInteger.valueOf(balance)
              )
                  return@synchronized false
            }
          }
          s.executeQuery("PRAGMA foreign_key_check").use {
            if (it.next()) return@synchronized false
          }
        }
        totals.isEmpty()
      }

  fun queryLong(sql: String): Long =
      connection.createStatement().use { s ->
        s.executeQuery(sql).use { r ->
          check(r.next())
          r.getLong(1)
        }
      }

  fun meta(key: String): String? =
      synchronized(lock) {
        connection.prepareStatement("SELECT value FROM schema_meta WHERE key=?").use { s ->
          s.setString(1, key)
          s.executeQuery().use { if (it.next()) it.getString(1) else null }
        }
      }

  fun setMeta(key: String, value: String) {
    connection
        .prepareStatement(
            "INSERT INTO schema_meta(key,value) VALUES(?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value"
        )
        .use { s ->
          s.setString(1, key)
          s.setString(2, value)
          s.executeUpdate()
        }
  }

  fun <T> transaction(block: () -> T): T =
      synchronized(lock) {
        check(healthy) { "Economy stopped after a storage error" }
        connection.autoCommit = false
        try {
          val result = block()
          connection.commit()
          result
        } catch (e: Throwable) {
          runCatching { connection.rollback() }.onFailure { e.addSuppressed(it) }
          throw e
        } finally {
          connection.autoCommit = true
        }
      }

  override fun close() {
    synchronized(memoryLock) {
      accepting = false
      closing = true
    }
    if (started) worker.join()
    else {
      check(queue.isEmpty()) { "Cannot close an unstarted writer with pending jobs" }
    }
    synchronized(lock) {
      try {
        connection.createStatement().use { it.execute("PRAGMA wal_checkpoint(TRUNCATE)") }
      } finally {
        connection.close()
      }
    }
  }

  private data class Entry(val id: Long, val write: BalanceWrite)

  private sealed class Work {
    data class Writes(val entries: List<Entry>, val completion: CompletableFuture<Boolean>?) :
        Work()

    data class Task(val runAfterFailure: Boolean = false, val task: () -> Unit) : Work()
  }
}
