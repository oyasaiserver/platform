package com.github.srain3.sociallikes.datas

import java.nio.file.Files
import java.sql.Connection
import java.sql.DriverManager
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertNull
import kotlin.test.assertTrue

class BuildLikesNormalizationTest {
  @Test
  fun migratesCountsNamesAndMissingPlayers() = withDatabase { connection ->
    createBaseSchema(connection)
    createLegacySchema(connection)
    connection.createStatement().use { statement ->
      statement.execute("INSERT INTO builds(id) VALUES (1), (2)")
      statement.execute(
          "INSERT INTO players VALUES ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'Known', 1234)"
      )
      statement.execute(
          """
          INSERT INTO build_likes VALUES
            (1, 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', NULL),
            (1, 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 100),
            (2, 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 200)
          """
              .trimIndent()
      )
    }

    val report = BuildLikesNormalization.migrate(connection)

    assertEquals(BuildLikesNormalization.Status.MIGRATED, report.status)
    assertEquals(BuildLikesNormalization.Counts(3, 2, 2), report.before)
    assertEquals(report.before, report.after)
    connection.createStatement().use { statement ->
      statement.executeQuery("SELECT COUNT(*) FROM players").use { rows ->
        assertTrue(rows.next() && rows.getInt(1) == 2)
      }
      statement
          .executeQuery(
              "SELECT last_known_name, last_seen_at FROM players WHERE uuid = 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb'"
          )
          .use { rows ->
            assertTrue(rows.next())
            assertEquals("Known", rows.getString(1))
            assertEquals(1234, rows.getLong(2))
          }
      statement
          .executeQuery(
              "SELECT last_known_name, last_seen_at FROM players WHERE uuid = 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa'"
          )
          .use { rows ->
            assertTrue(rows.next())
            assertNull(rows.getString(1))
            assertNull(rows.getObject(2))
          }
      statement.executeQuery("SELECT sql FROM sqlite_master WHERE name = 'build_likes'").use { rows
        ->
        assertTrue(rows.next() && "WITHOUT ROWID" in rows.getString(1))
      }
      assertTrue(
          explainDetails(
                  connection,
                  "SELECT liked_at FROM build_likes WHERE liked_at IS NOT NULL AND liked_at >= 0",
              )
              .any { "idx_build_likes_liked_at" in it }
      )
      statement.execute(
          """
          CREATE VIEW build_likes_with_uuid AS
          SELECT bl.build_id, bl.player_id, p.uuid AS player_uuid, bl.liked_at
          FROM build_likes bl
          JOIN players p ON p.id = bl.player_id
          """
              .trimIndent()
      )
      assertTrue(
          explainDetails(
                  connection,
                  "SELECT build_id FROM build_likes_with_uuid WHERE player_uuid = 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa' AND liked_at IS NOT NULL AND liked_at >= 0",
              )
              .any { "idx_build_likes_player_liked_at" in it }
      )
    }
  }

  @Test
  fun secondRunDoesNothing() = withDatabase { connection ->
    createBaseSchema(connection)
    val first = BuildLikesNormalization.migrate(connection)
    val second = BuildLikesNormalization.migrate(connection)

    assertEquals(BuildLikesNormalization.Status.CREATED, first.status)
    assertEquals(BuildLikesNormalization.Status.ALREADY_CURRENT, second.status)
  }

  @Test
  fun createsCurrentSchemaForEmptyDatabase() = withDatabase { connection ->
    createBaseSchema(connection)

    val report = BuildLikesNormalization.migrate(connection)

    assertEquals(BuildLikesNormalization.Status.CREATED, report.status)
    assertEquals(BuildLikesNormalization.Counts(0, 0, 0), report.after)
    connection.createStatement().use { statement ->
      statement
          .executeQuery(
              "SELECT sql FROM sqlite_master WHERE type = 'index' AND name = 'idx_build_likes_liked_at'"
          )
          .use { rows ->
            assertTrue(rows.next() && "WHERE liked_at IS NOT NULL" in rows.getString(1))
          }
    }
  }

  @Test
  fun preservesBothForeignKeys() = withDatabase { connection ->
    createBaseSchema(connection)
    BuildLikesNormalization.migrate(connection)
    connection.createStatement().use { it.execute("INSERT INTO builds(id) VALUES (1)") }
    connection.prepareStatement("INSERT INTO players(uuid) VALUES (?)").use { statement ->
      statement.setString(1, "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa")
      statement.executeUpdate()
    }
    val playerId =
        connection.createStatement().use { statement ->
          statement.executeQuery("SELECT id FROM players").use { rows ->
            assertTrue(rows.next())
            rows.getInt(1)
          }
        }
    connection.createStatement().use {
      it.execute("INSERT INTO build_likes VALUES (1, $playerId, NULL)")
      it.execute("DELETE FROM builds WHERE id = 1")
      it.executeQuery("SELECT COUNT(*) FROM build_likes").use { rows ->
        assertTrue(rows.next() && rows.getInt(1) == 0)
      }
    }
    assertFailsWith<java.sql.SQLException> {
      connection.createStatement().use {
        it.execute("INSERT INTO build_likes VALUES (999, $playerId, NULL)")
      }
    }
    assertFailsWith<java.sql.SQLException> {
      connection.createStatement().use {
        it.execute("INSERT INTO build_likes VALUES (1, 999, NULL)")
      }
    }
  }

  @Test
  fun rollsBackOnForeignKeyViolation() = withDatabase { connection ->
    createBaseSchema(connection)
    createLegacySchema(connection)
    connection.createStatement().use {
      it.execute("PRAGMA foreign_keys = OFF")
      it.execute(
          "INSERT INTO build_likes VALUES (999, 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', NULL)"
      )
    }

    assertFailsWith<java.sql.SQLException> { BuildLikesNormalization.migrate(connection) }

    connection.createStatement().use { statement ->
      statement.executeQuery("PRAGMA table_info(build_likes)").use { rows ->
        val columns = buildSet { while (rows.next()) add(rows.getString("name")) }
        assertTrue("player_uuid" in columns)
        assertTrue("player_id" !in columns)
      }
      statement
          .executeQuery(
              "SELECT COUNT(*) FROM migration_state WHERE key = '${BuildLikesNormalization.MARKER_KEY}'"
          )
          .use { rows -> assertTrue(rows.next() && rows.getInt(1) == 0) }
    }
  }

  private fun withDatabase(block: (Connection) -> Unit) {
    val path = Files.createTempFile("sl3-build-likes-", ".db")
    try {
      DriverManager.getConnection("jdbc:sqlite:$path").use { connection ->
        connection.createStatement().use { it.execute("PRAGMA foreign_keys = ON") }
        block(connection)
      }
    } finally {
      Files.deleteIfExists(path)
    }
  }

  private fun createBaseSchema(connection: Connection) {
    connection.createStatement().use { statement ->
      statement.execute("CREATE TABLE builds (id INTEGER PRIMARY KEY)")
      statement.execute(
          "CREATE TABLE migration_state (key VARCHAR(128) PRIMARY KEY, value VARCHAR(128) NOT NULL)"
      )
    }
  }

  private fun createLegacySchema(connection: Connection) {
    connection.createStatement().use { statement ->
      statement.execute(
          """
          CREATE TABLE players (
            uuid VARCHAR(36) NOT NULL PRIMARY KEY,
            last_known_name TEXT NOT NULL,
            last_seen_at BIGINT NOT NULL
          )
          """
              .trimIndent()
      )
      statement.execute(
          """
          CREATE TABLE build_likes (
            build_id INT NOT NULL REFERENCES builds(id) ON DELETE CASCADE ON UPDATE RESTRICT,
            player_uuid VARCHAR(36) NOT NULL,
            liked_at BIGINT NULL,
            PRIMARY KEY(build_id, player_uuid)
          )
          """
              .trimIndent()
      )
    }
  }

  private fun explainDetails(connection: Connection, sql: String): List<String> =
      connection.createStatement().use { statement ->
        statement.executeQuery("EXPLAIN QUERY PLAN $sql").use { rows ->
          buildList { while (rows.next()) add(rows.getString("detail")) }
        }
      }
}
