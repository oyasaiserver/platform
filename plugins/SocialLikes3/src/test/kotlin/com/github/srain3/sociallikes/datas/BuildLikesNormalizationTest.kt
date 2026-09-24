package com.github.srain3.sociallikes.datas

import java.nio.file.Files
import java.sql.Connection
import java.sql.DriverManager
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertTrue

class BuildLikesNormalizationTest {
  @Test
  fun createsCurrentSchemaForEmptyDatabase() = withDatabase { connection ->
    createBaseSchema(connection)

    SLDatabase.createPlayersAndBuildLikesSchema(connection)

    connection.createStatement().use { statement ->
      statement.executeQuery("SELECT COUNT(*) FROM build_likes").use { rows ->
        assertTrue(rows.next() && rows.getInt(1) == 0)
      }
      statement.executeQuery("SELECT COUNT(*) FROM players").use { rows ->
        assertTrue(rows.next() && rows.getInt(1) == 0)
      }
      statement.executeQuery("PRAGMA table_info(players)").use { rows ->
        val columns = buildSet { while (rows.next()) add(rows.getString("name")) }
        assertEquals(setOf("id", "uuid", "last_known_name", "last_seen_at"), columns)
      }
      statement.executeQuery("PRAGMA table_info(build_likes)").use { rows ->
        val columns = buildSet { while (rows.next()) add(rows.getString("name")) }
        assertEquals(setOf("build_id", "player_id", "liked_at"), columns)
      }
      statement.executeQuery("SELECT sql FROM sqlite_master WHERE name = 'build_likes'").use { rows
        ->
        assertTrue(rows.next() && "WITHOUT ROWID" in rows.getString(1))
      }
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
    SLDatabase.createPlayersAndBuildLikesSchema(connection)
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
    }
  }
}
