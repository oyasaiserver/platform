package com.github.srain3.sociallikes.datas

import java.nio.file.Path
import java.sql.Connection
import java.sql.DriverManager
import java.time.LocalDateTime
import java.time.ZoneId
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.io.TempDir

class TimestampEpochMigrationTest {
  @TempDir lateinit var tempDir: Path

  @Test
  fun `dry-run converts every timestamp and rolls the transaction back`() {
    openDatabase("dry-run.db").use { connection ->
      createLegacySchema(connection)
      insertLegacyRows(connection)

      val report = TimestampEpochMigration.migrate(connection, dryRun = true, "test-release")

      assertEquals(5, report.convertedCount)
      assertEquals("2022-12-23T14:00:00", value(connection, "builds", "created_at", 1))
      assertEquals(0, userVersion(connection))
      assertFalse(tableExists(connection, "schema_migrations"))
    }
  }

  @Test
  fun `apply stores epoch millis records the schema and is idempotent`() {
    openDatabase("apply.db").use { connection ->
      createLegacySchema(connection)
      insertLegacyRows(connection)

      val applied = TimestampEpochMigration.migrate(connection, dryRun = false, "abc123")

      assertEquals(5, applied.convertedCount)
      assertEquals(
          epoch("2022-12-23T14:00:00", "America/New_York"),
          value(connection, "builds", "created_at", 1),
      )
      assertEquals(
          epoch("2025-07-22T14:00:00", "Asia/Tokyo"),
          value(connection, "builds", "deleted_at", 1),
      )
      assertEquals(
          epoch("2025-07-25T14:00:00", "UTC"),
          value(connection, "publicity_history", "timestamp", 1),
      )
      assertEquals(1, userVersion(connection))
      assertTrue(TimestampEpochMigration.verify(connection).ready)

      val repeated = TimestampEpochMigration.migrate(connection, dryRun = false, "abc123")
      assertEquals(0, repeated.convertedCount)
      assertTrue(repeated.ready)
    }
  }

  @Test
  fun `malformed input rolls back every converted row`() {
    openDatabase("rollback.db").use { connection ->
      createLegacySchema(connection)
      insertLegacyRows(connection)
      connection.createStatement().use {
        it.execute("UPDATE sl_event_log SET occurred_at = 'not-a-time' WHERE id = 1")
      }

      val failure =
          runCatching { TimestampEpochMigration.migrate(connection, dryRun = false, "abc123") }
              .exceptionOrNull()

      assertTrue(failure != null, "migration must reject malformed timestamps")
      assertEquals("2022-12-23T14:00:00", value(connection, "builds", "created_at", 1))
      assertEquals(0, userVersion(connection))
      assertFalse(tableExists(connection, "schema_migrations"))
    }
  }

  @Test
  fun `an empty database is initialized without a destructive startup migration`() {
    openDatabase("empty.db").use { connection ->
      createLegacySchema(connection)

      val report = TimestampEpochMigration.initializeEmptyDatabaseOrRequireMigration(connection)

      assertTrue(report.ready)
      assertEquals(0, report.valueCount)
      assertEquals(1, userVersion(connection))
    }
  }

  private fun openDatabase(name: String): Connection {
    Class.forName("org.sqlite.JDBC")
    return DriverManager.getConnection("jdbc:sqlite:${tempDir.resolve(name)}").apply {
      createStatement().use { it.execute("PRAGMA foreign_keys = ON") }
    }
  }

  private fun createLegacySchema(connection: Connection) {
    connection.createStatement().use { statement ->
      statement.execute(
          "CREATE TABLE builds (id INTEGER PRIMARY KEY, created_at VARCHAR(64) NOT NULL, deleted_at VARCHAR(64))"
      )
      statement.execute(
          "CREATE TABLE publicity_history (id INTEGER PRIMARY KEY, timestamp VARCHAR(64) NOT NULL)"
      )
      statement.execute(
          "CREATE TABLE sl_event_log (id INTEGER PRIMARY KEY, occurred_at VARCHAR(64) NOT NULL)"
      )
    }
  }

  private fun insertLegacyRows(connection: Connection) {
    connection.createStatement().use { statement ->
      statement.execute(
          "INSERT INTO builds (id, created_at, deleted_at) VALUES " +
              "(1, '2022-12-23T14:00:00', '2025-07-22T14:00:00'), " +
              "(2, '2025-07-25T14:00:00', NULL)"
      )
      statement.execute(
          "INSERT INTO publicity_history (id, timestamp) VALUES (1, '2025-07-25T14:00:00')"
      )
      statement.execute(
          "INSERT INTO sl_event_log (id, occurred_at) VALUES (1, '2026-09-07T12:00:00')"
      )
    }
  }

  private fun value(
      connection: Connection,
      table: String,
      column: String,
      id: Int,
  ): String =
      connection.prepareStatement("SELECT $column FROM $table WHERE id = ?").use { statement ->
        statement.setInt(1, id)
        statement.executeQuery().use { rows ->
          check(rows.next())
          rows.getString(1)
        }
      }

  private fun epoch(raw: String, zone: String): String =
      LocalDateTime.parse(raw).atZone(ZoneId.of(zone)).toInstant().toEpochMilli().toString()

  private fun userVersion(connection: Connection): Int =
      connection.createStatement().use { statement ->
        statement.executeQuery("PRAGMA user_version").use { rows ->
          check(rows.next())
          rows.getInt(1)
        }
      }

  private fun tableExists(connection: Connection, name: String): Boolean =
      connection
          .prepareStatement("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?")
          .use { statement ->
            statement.setString(1, name)
            statement.executeQuery().use { it.next() }
          }
}
