package com.github.srain3.sociallikes.datas

import java.sql.Connection

/** Offline, versioned conversion of persisted wall-clock strings to epoch milliseconds. */
object TimestampEpochMigration {
  const val VERSION = 1
  const val NAME = "timestamp-epoch-millis"
  const val CHECKSUM = "sha256:8b978594ea96ee4b6ff19d33bc7f56e4e8ed408aa04b193c29ad9f448f33f240"

  private data class ColumnSpec(
      val table: String,
      val keyColumn: String,
      val valueColumn: String,
  )

  data class ColumnReport(
      val table: String,
      val column: String,
      val valueCount: Int,
      val legacyCount: Int,
  )

  data class Report(
      val userVersion: Int,
      val markerPresent: Boolean,
      val columns: List<ColumnReport>,
      val convertedCount: Int = 0,
  ) {
    val valueCount: Int
      get() = columns.sumOf { it.valueCount }

    val legacyCount: Int
      get() = columns.sumOf { it.legacyCount }

    val ready: Boolean
      get() =
          userVersion == VERSION &&
              markerPresent &&
              legacyCount == 0 &&
              columns.size == COLUMN_SPECS.size

    fun summary(): String =
        "version=$userVersion marker=$markerPresent values=$valueCount legacy=$legacyCount converted=$convertedCount"
  }

  private val COLUMN_SPECS =
      listOf(
          ColumnSpec("builds", "id", "created_at"),
          ColumnSpec("builds", "id", "deleted_at"),
          ColumnSpec("publicity_history", "id", "timestamp"),
          ColumnSpec("sl_event_log", "id", "occurred_at"),
      )

  fun preflight(connection: Connection): Report {
    requireIntegrity(connection)
    requireForeignKeys(connection)
    return inspect(connection)
  }

  fun inspect(connection: Connection): Report {
    COLUMN_SPECS.forEach { requireColumn(connection, it.table, it.keyColumn, it.valueColumn) }
    val reports =
        COLUMN_SPECS.map { spec ->
          var values = 0
          var legacy = 0
          connection
              .prepareStatement(
                  "SELECT ${spec.valueColumn} FROM ${spec.table} WHERE ${spec.valueColumn} IS NOT NULL"
              )
              .use { statement ->
                statement.executeQuery().use { rows ->
                  while (rows.next()) {
                    values++
                    if (!BuildTimestamps.isEpochMillis(rows.getString(1))) legacy++
                  }
                }
              }
          ColumnReport(spec.table, spec.valueColumn, values, legacy)
        }
    return Report(
        userVersion = readUserVersion(connection),
        markerPresent = readMarkerChecksum(connection)?.let { it == CHECKSUM } ?: false,
        columns = reports,
    )
  }

  /** Initializes only a genuinely empty database. Existing data is never rewritten at startup. */
  fun initializeEmptyDatabaseOrRequireMigration(connection: Connection): Report {
    val before = inspect(connection)
    if (before.ready) return before
    if (before.valueCount != 0) {
      error(
          "Timestamp storage is not migrated (${before.summary()}). " +
              "Stop the server and run the offline timestamp release workflow."
      )
    }
    if (before.userVersion !in setOf(0, VERSION)) {
      error("Unsupported SQLite user_version=${before.userVersion}; expected 0 or $VERSION")
    }

    createMigrationTable(connection)
    val marker = readMarkerChecksum(connection)
    if (marker != null && marker != CHECKSUM) {
      error("Timestamp migration checksum mismatch: expected $CHECKSUM, found $marker")
    }
    if (marker == null) insertMarker(connection, "fresh-install")
    setUserVersion(connection)
    return inspect(connection).also { check(it.ready) { "Fresh timestamp schema was not ready" } }
  }

  /** Runs the complete conversion in one SQLite transaction. Dry-run always rolls it back. */
  fun migrate(connection: Connection, dryRun: Boolean, releaseId: String): Report {
    require(releaseId.isNotBlank()) { "releaseId must not be blank" }
    requireIntegrity(connection)
    requireForeignKeys(connection)

    val previousAutoCommit = connection.autoCommit
    connection.autoCommit = false
    try {
      createMigrationTable(connection)
      val existingChecksum = readMarkerChecksum(connection)
      if (existingChecksum != null && existingChecksum != CHECKSUM) {
        error("Timestamp migration checksum mismatch: expected $CHECKSUM, found $existingChecksum")
      }

      var converted = 0
      COLUMN_SPECS.forEach { spec -> converted += normalizeColumn(connection, spec) }

      val convertedInspection = inspect(connection)
      check(convertedInspection.legacyCount == 0) {
        "Migration left ${convertedInspection.legacyCount} legacy timestamp values"
      }
      if (existingChecksum == null) insertMarker(connection, releaseId)
      setUserVersion(connection)
      requireForeignKeys(connection)

      val completed = inspect(connection).copy(convertedCount = converted)
      check(completed.ready) { "Timestamp migration did not reach the ready state" }

      if (dryRun) connection.rollback() else connection.commit()
      return completed
    } catch (error: Throwable) {
      connection.rollback()
      throw error
    } finally {
      connection.autoCommit = previousAutoCommit
    }
  }

  fun verify(connection: Connection): Report {
    requireIntegrity(connection)
    requireForeignKeys(connection)
    return inspect(connection).also { report ->
      check(report.ready) { "Timestamp storage is not ready (${report.summary()})" }
    }
  }

  fun checkpoint(connection: Connection) {
    connection.createStatement().use { statement ->
      statement.executeQuery("PRAGMA wal_checkpoint(TRUNCATE)").use { rows ->
        check(rows.next()) { "wal_checkpoint returned no result" }
        check(rows.getInt(1) == 0) { "wal_checkpoint was busy" }
      }
    }
  }

  private fun normalizeColumn(connection: Connection, spec: ColumnSpec): Int {
    val pending = mutableListOf<Pair<Long, String>>()
    connection
        .prepareStatement(
            "SELECT ${spec.keyColumn}, ${spec.valueColumn} FROM ${spec.table} " +
                "WHERE ${spec.valueColumn} IS NOT NULL"
        )
        .use { statement ->
          statement.executeQuery().use { rows ->
            while (rows.next()) {
              val key = rows.getLong(1)
              val raw = rows.getString(2)
              if (!BuildTimestamps.isEpochMillis(raw)) {
                val normalized =
                    BuildTimestamps.normalizeStored(raw)
                        ?: error(
                            "Could not parse ${spec.table}.${spec.valueColumn} for key=$key: $raw"
                        )
                pending += key to normalized
              }
            }
          }
        }

    connection
        .prepareStatement(
            "UPDATE ${spec.table} SET ${spec.valueColumn} = ? " +
                "WHERE ${spec.keyColumn} = ? AND ${spec.valueColumn} = ?"
        )
        .use { statement ->
          pending.forEach { (key, normalized) ->
            val current = readValue(connection, spec, key)
            check(current != null) {
              "Timestamp disappeared during migration: ${spec.table} key=$key"
            }
            if (BuildTimestamps.isEpochMillis(current)) return@forEach
            statement.setString(1, normalized)
            statement.setLong(2, key)
            statement.setString(3, current)
            check(statement.executeUpdate() == 1) {
              "Concurrent timestamp update detected: ${spec.table}.${spec.valueColumn} key=$key"
            }
          }
        }
    return pending.size
  }

  private fun readValue(connection: Connection, spec: ColumnSpec, key: Long): String? =
      connection
          .prepareStatement(
              "SELECT ${spec.valueColumn} FROM ${spec.table} WHERE ${spec.keyColumn} = ?"
          )
          .use { statement ->
            statement.setLong(1, key)
            statement.executeQuery().use { rows -> if (rows.next()) rows.getString(1) else null }
          }

  private fun requireColumn(
      connection: Connection,
      table: String,
      keyColumn: String,
      valueColumn: String,
  ) {
    val columns = mutableSetOf<String>()
    connection.createStatement().use { statement ->
      statement.executeQuery("PRAGMA table_info($table)").use { rows ->
        while (rows.next()) columns += rows.getString("name")
      }
    }
    check(keyColumn in columns && valueColumn in columns) {
      "Missing required SQLite column: $table.$keyColumn or $table.$valueColumn"
    }
  }

  private fun createMigrationTable(connection: Connection) {
    connection.createStatement().use { statement ->
      statement.execute(
          """
          CREATE TABLE IF NOT EXISTS schema_migrations (
            version INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            checksum TEXT NOT NULL,
            applied_at_ms INTEGER NOT NULL,
            release_id TEXT NOT NULL
          )
          """
              .trimIndent()
      )
    }
  }

  private fun readMarkerChecksum(connection: Connection): String? {
    val tableExists =
        connection
            .prepareStatement(
                "SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = 'schema_migrations'"
            )
            .use { statement -> statement.executeQuery().use { it.next() } }
    if (!tableExists) return null

    return connection
        .prepareStatement("SELECT checksum FROM schema_migrations WHERE version = ?")
        .use { statement ->
          statement.setInt(1, VERSION)
          statement.executeQuery().use { rows -> if (rows.next()) rows.getString(1) else null }
        }
  }

  private fun insertMarker(connection: Connection, releaseId: String) {
    connection
        .prepareStatement(
            "INSERT INTO schema_migrations " +
                "(version, name, checksum, applied_at_ms, release_id) VALUES (?, ?, ?, ?, ?)"
        )
        .use { statement ->
          statement.setInt(1, VERSION)
          statement.setString(2, NAME)
          statement.setString(3, CHECKSUM)
          statement.setLong(4, System.currentTimeMillis())
          statement.setString(5, releaseId)
          check(statement.executeUpdate() == 1) { "Could not record timestamp migration" }
        }
  }

  private fun readUserVersion(connection: Connection): Int =
      connection.createStatement().use { statement ->
        statement.executeQuery("PRAGMA user_version").use { rows ->
          check(rows.next()) { "PRAGMA user_version returned no result" }
          rows.getInt(1)
        }
      }

  private fun setUserVersion(connection: Connection) {
    connection.createStatement().use { it.execute("PRAGMA user_version = $VERSION") }
  }

  private fun requireIntegrity(connection: Connection) {
    connection.createStatement().use { statement ->
      statement.executeQuery("PRAGMA integrity_check").use { rows ->
        check(rows.next() && rows.getString(1) == "ok") { "SQLite integrity_check failed" }
      }
    }
  }

  private fun requireForeignKeys(connection: Connection) {
    connection.createStatement().use { statement ->
      statement.executeQuery("PRAGMA foreign_key_check").use { rows ->
        check(!rows.next()) { "SQLite foreign_key_check failed for table ${rows.getString(1)}" }
      }
    }
  }
}
