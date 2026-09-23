package io.oyasai.oyasaiban

import java.nio.file.Files
import java.nio.file.Path
import java.sql.Connection
import java.sql.DriverManager
import java.sql.ResultSet
import java.sql.Types
import java.util.UUID
import java.util.concurrent.CompletableFuture
import java.util.concurrent.Executors

data class LoginLookup(val punishment: PunishmentRecord?)

sealed interface CreateBanResult {
  data object Created : CreateBanResult

  data object AlreadyBanned : CreateBanResult
}

data class ImportResult(
    val batch: ImportBatch,
    val activeNew: Int,
    val historyNew: Int,
)

class PunishmentDatabase(databasePath: Path) {
  private val executor =
      Executors.newSingleThreadExecutor { task -> Thread(task, "OyasaiBan-Database") }
  private val ready =
      CompletableFuture.supplyAsync(
          {
            Files.createDirectories(databasePath.parent)
            Class.forName("org.sqlite.JDBC")
            DriverManager.getConnection("jdbc:sqlite:$databasePath").also(::initialize)
          },
          executor,
      )

  fun login(uuid: UUID, name: String, now: Long): CompletableFuture<LoginLookup> =
      submit { connection ->
        upsertSeen(connection, uuid, name, now)
        expire(connection, now)
        LoginLookup(findActive(connection, uuid))
      }

  fun findSeenUuid(name: String): CompletableFuture<UUID?> = submit { connection ->
    connection
        .prepareStatement(
            "SELECT uuid FROM seen_names WHERE name = ? COLLATE NOCASE ORDER BY last_seen DESC LIMIT 1"
        )
        .use { statement ->
          statement.setString(1, name)
          statement.executeQuery().use { result ->
            if (result.next()) UUID.fromString(result.getString(1)) else null
          }
        }
  }

  fun createBan(record: PunishmentRecord): CompletableFuture<CreateBanResult> =
      submit { connection ->
        transaction(connection) {
          expire(connection, record.start)
          if (findActive(connection, record.uuid) != null)
              return@transaction CreateBanResult.AlreadyBanned
          insertActive(connection, record)
          insertHistory(connection, record)
          upsertSeen(connection, record.uuid, record.name, record.start)
          CreateBanResult.Created
        }
      }

  fun unban(uuid: UUID): CompletableFuture<Boolean> = submit { connection ->
    connection.prepareStatement("DELETE FROM active_punishments WHERE uuid = ?").use {
      it.setString(1, uuid.toString())
      it.executeUpdate() > 0
    }
  }

  fun check(uuid: UUID, now: Long): CompletableFuture<PunishmentRecord?> = submit { connection ->
    expire(connection, now)
    findActive(connection, uuid)
  }

  fun history(uuid: UUID): CompletableFuture<List<PunishmentRecord>> = submit { connection ->
    connection
        .prepareStatement(
            "SELECT * FROM punishment_history WHERE uuid = ? ORDER BY start_at DESC, id DESC"
        )
        .use { statement ->
          statement.setString(1, uuid.toString())
          statement.executeQuery().use { result -> result.readAll() }
        }
  }

  fun banList(now: Long): CompletableFuture<List<PunishmentRecord>> = submit { connection ->
    expire(connection, now)
    connection.prepareStatement("SELECT * FROM active_punishments ORDER BY start_at DESC").use {
        statement ->
      statement.executeQuery().use { result -> result.readAll() }
    }
  }

  fun importAdvancedBan(
      scriptPath: Path,
      logPath: Path?,
      apply: Boolean,
      resolveName: (String) -> UUID?,
      now: Long = System.currentTimeMillis(),
  ): CompletableFuture<ImportResult> = submit { connection ->
    val batch =
        AdvancedBanImporter.parse(
            Files.readString(scriptPath),
            logPath?.takeIf(Files::exists)?.let(Files::readString).orEmpty(),
            resolveName,
        )
    transaction(connection) {
      if (apply) expire(connection, now)
      val activeUuids = activeUuids(connection, now)
      val historyKeys = historyKeys(connection)
      val activeNew = batch.active.filter { it.isActiveAt(now) && activeUuids.add(it.uuid) }
      val historyNew = batch.history.filter { historyKeys.add(HistoryKey(it)) }
      if (apply) {
        activeNew.forEach { insertActive(connection, it) }
        historyNew.forEach { insertHistory(connection, it) }
        val importedAt = System.currentTimeMillis()
        (historyNew + activeNew)
            .groupBy { it.uuid }
            .mapValues { (_, records) -> records.maxBy { it.start } }
            .values
            .forEach { upsertSeen(connection, it.uuid, it.name, importedAt) }
      }
      ImportResult(batch, activeNew.size, historyNew.size)
    }
  }

  fun close() {
    ready.handleAsync({ connection, _ -> connection?.close() }, executor).join()
    executor.shutdown()
  }

  private fun <T> submit(block: (Connection) -> T): CompletableFuture<T> =
      ready.thenApplyAsync(block, executor)

  private fun initialize(connection: Connection) {
    connection.createStatement().use { statement ->
      statement.execute("PRAGMA journal_mode=WAL")
      statement.execute("PRAGMA synchronous=NORMAL")
      statement.execute("PRAGMA foreign_keys=ON")
      statement.execute("PRAGMA busy_timeout=5000")
      statement.executeUpdate(
          """
          CREATE TABLE IF NOT EXISTS active_punishments (
            uuid TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            type TEXT NOT NULL CHECK(type IN ('BAN', 'TEMP_BAN')),
            reason TEXT NOT NULL,
            operator TEXT NOT NULL,
            start_at INTEGER NOT NULL,
            end_at INTEGER
          )
          """
              .trimIndent()
      )
      statement.executeUpdate(
          """
          CREATE TABLE IF NOT EXISTS punishment_history (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            uuid TEXT NOT NULL,
            name TEXT NOT NULL,
            type TEXT NOT NULL CHECK(type IN ('BAN', 'TEMP_BAN')),
            reason TEXT NOT NULL,
            operator TEXT NOT NULL,
            start_at INTEGER NOT NULL,
            end_at INTEGER
          )
          """
              .trimIndent()
      )
      statement.executeUpdate(
          "CREATE INDEX IF NOT EXISTS idx_punishment_history_uuid ON punishment_history(uuid, start_at DESC)"
      )
      statement.executeUpdate(
          """
          CREATE TABLE IF NOT EXISTS seen_names (
            uuid TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            last_seen INTEGER NOT NULL
          )
          """
              .trimIndent()
      )
      statement.executeUpdate(
          "CREATE INDEX IF NOT EXISTS idx_seen_names_name ON seen_names(name COLLATE NOCASE, last_seen DESC)"
      )
    }
  }

  private fun findActive(connection: Connection, uuid: UUID): PunishmentRecord? =
      connection.prepareStatement("SELECT * FROM active_punishments WHERE uuid = ?").use {
        it.setString(1, uuid.toString())
        it.executeQuery().use { result -> if (result.next()) result.readRecord() else null }
      }

  private fun expire(connection: Connection, now: Long) {
    connection
        .prepareStatement("DELETE FROM active_punishments WHERE end_at IS NOT NULL AND end_at <= ?")
        .use {
          it.setLong(1, now)
          it.executeUpdate()
        }
  }

  private fun insertActive(connection: Connection, record: PunishmentRecord) {
    connection
        .prepareStatement(
            "INSERT INTO active_punishments(uuid, name, type, reason, operator, start_at, end_at) VALUES (?, ?, ?, ?, ?, ?, ?)"
        )
        .use { it.bind(record).executeUpdate() }
  }

  private fun insertHistory(connection: Connection, record: PunishmentRecord) {
    connection
        .prepareStatement(
            "INSERT INTO punishment_history(uuid, name, type, reason, operator, start_at, end_at) VALUES (?, ?, ?, ?, ?, ?, ?)"
        )
        .use { it.bind(record).executeUpdate() }
  }

  private fun java.sql.PreparedStatement.bind(
      record: PunishmentRecord
  ): java.sql.PreparedStatement {
    setString(1, record.uuid.toString())
    setString(2, record.name)
    setString(3, record.type.name)
    setString(4, record.reason)
    setString(5, record.operator)
    setLong(6, record.start)
    if (record.end == null) setNull(7, Types.BIGINT) else setLong(7, record.end)
    return this
  }

  private fun upsertSeen(
      connection: Connection,
      uuid: UUID,
      name: String,
      lastSeen: Long,
  ) {
    connection
        .prepareStatement(
            """
            INSERT INTO seen_names(uuid, name, last_seen) VALUES (?, ?, ?)
            ON CONFLICT(uuid) DO UPDATE SET name = excluded.name, last_seen = excluded.last_seen
            """
                .trimIndent()
        )
        .use {
          it.setString(1, uuid.toString())
          it.setString(2, name)
          it.setLong(3, lastSeen)
          it.executeUpdate()
        }
  }

  private fun ResultSet.readAll(): List<PunishmentRecord> = buildList {
    while (next()) add(readRecord())
  }

  private fun ResultSet.readRecord(): PunishmentRecord {
    val endValue = getLong("end_at")
    val endIsNull = wasNull()
    return PunishmentRecord(
        id = runCatching { getLong("id") }.getOrDefault(0),
        uuid = UUID.fromString(getString("uuid")),
        name = getString("name"),
        type = PunishmentType.valueOf(getString("type")),
        reason = getString("reason"),
        operator = getString("operator"),
        start = getLong("start_at"),
        end = if (endIsNull) null else endValue,
    )
  }

  private fun activeUuids(connection: Connection, now: Long): MutableSet<UUID> =
      connection
          .prepareStatement(
              "SELECT uuid FROM active_punishments WHERE end_at IS NULL OR end_at > ?"
          )
          .use { statement ->
            statement.setLong(1, now)
            statement.executeQuery().use { result ->
              buildSet { while (result.next()) add(UUID.fromString(result.getString(1))) }
                  .toMutableSet()
            }
          }

  private fun historyKeys(connection: Connection): MutableSet<HistoryKey> =
      connection.prepareStatement("SELECT uuid, type, start_at FROM punishment_history").use {
          statement ->
        statement.executeQuery().use { result ->
          buildSet {
                while (result.next()) {
                  add(
                      HistoryKey(
                          UUID.fromString(result.getString("uuid")),
                          PunishmentType.valueOf(result.getString("type")),
                          result.getLong("start_at"),
                      )
                  )
                }
              }
              .toMutableSet()
        }
      }

  private data class HistoryKey(
      val uuid: UUID,
      val type: PunishmentType,
      val start: Long,
  ) {
    constructor(record: PunishmentRecord) : this(record.uuid, record.type, record.start)
  }

  private fun <T> transaction(connection: Connection, block: () -> T): T {
    connection.autoCommit = false
    return try {
      block().also { connection.commit() }
    } catch (error: Throwable) {
      connection.rollback()
      throw error
    } finally {
      connection.autoCommit = true
    }
  }
}
