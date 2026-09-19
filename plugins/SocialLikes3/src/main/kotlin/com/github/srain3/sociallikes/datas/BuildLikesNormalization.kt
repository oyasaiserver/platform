package com.github.srain3.sociallikes.datas

import java.sql.Connection

/** One-time normalization of UUID-heavy build likes into the shared players dictionary. */
object BuildLikesNormalization {
  const val MARKER_KEY = "build_likes_player_id_normalization_complete"

  enum class Status {
    CREATED,
    MIGRATED,
    ALREADY_CURRENT,
  }

  data class Counts(
      val totalLikes: Int,
      val timestampedLikes: Int,
      val distinctPlayers: Int,
  )

  data class Report(val status: Status, val before: Counts, val after: Counts)

  fun migrate(connection: Connection): Report {
    check(connection.autoCommit) { "Build likes normalization requires auto-commit mode" }
    connection.createStatement().use { it.execute("PRAGMA foreign_keys = ON") }

    val buildLikeColumns = columns(connection, "build_likes")
    val playerColumns = columns(connection, "players")
    val currentSchema =
        buildLikeColumns.containsAll(setOf("build_id", "player_id", "liked_at")) &&
            playerColumns.containsAll(setOf("id", "uuid", "last_known_name", "last_seen_at"))
    val legacySchema =
        buildLikeColumns.containsAll(setOf("build_id", "player_uuid", "liked_at")) &&
            playerColumns.containsAll(setOf("uuid", "last_known_name", "last_seen_at")) &&
            "id" !in playerColumns

    if (markerPresent(connection)) {
      check(currentSchema) { "Build likes normalization marker exists but schema is not current" }
      val counts = currentCounts(connection)
      return Report(Status.ALREADY_CURRENT, counts, counts)
    }

    val freshSchema = buildLikeColumns.isEmpty() && playerColumns.isEmpty()
    check(freshSchema || currentSchema || legacySchema) {
      "Unsupported players/build_likes schema; refusing partial normalization"
    }

    val before =
        when {
          legacySchema -> legacyCounts(connection)
          currentSchema -> currentCounts(connection)
          else -> Counts(0, 0, 0)
        }
    val expectedPlayerRows =
        if (legacySchema) {
          scalar(
              connection,
              "SELECT COUNT(*) FROM (SELECT uuid FROM players UNION SELECT player_uuid FROM build_likes)",
          )
        } else {
          null
        }

    connection.autoCommit = false
    try {
      if (legacySchema) {
        connection.createStatement().use { statement ->
          statement.execute("ALTER TABLE build_likes RENAME TO build_likes_legacy")
          statement.execute("ALTER TABLE players RENAME TO players_legacy")
          createPlayers(statement)
          statement.execute(
              """
              INSERT INTO players (uuid, last_known_name, last_seen_at)
              SELECT uuid, last_known_name, last_seen_at
              FROM players_legacy
              ORDER BY uuid
              """
                  .trimIndent()
          )
          statement.execute(
              """
              INSERT INTO players (uuid)
              SELECT DISTINCT legacy.player_uuid
              FROM build_likes_legacy legacy
              LEFT JOIN players current ON current.uuid = legacy.player_uuid
              WHERE current.id IS NULL
              ORDER BY legacy.player_uuid
              """
                  .trimIndent()
          )
          createBuildLikes(statement)
          statement.execute(
              """
              INSERT INTO build_likes (build_id, player_id, liked_at)
              SELECT legacy.build_id, players.id, legacy.liked_at
              FROM build_likes_legacy legacy
              JOIN players ON players.uuid = legacy.player_uuid
              """
                  .trimIndent()
          )
          statement.execute("DROP TABLE build_likes_legacy")
          statement.execute("DROP TABLE players_legacy")
        }
      } else if (freshSchema) {
        connection.createStatement().use { statement ->
          createPlayers(statement)
          createBuildLikes(statement)
        }
      }

      connection.createStatement().use { statement ->
        createIndexes(statement)
        statement.execute(
            """
            INSERT INTO migration_state (key, value)
            VALUES ('$MARKER_KEY', 'true')
            ON CONFLICT(key) DO UPDATE SET value = excluded.value
            """
                .trimIndent()
        )
      }

      val after = currentCounts(connection)
      check(before == after) { "Build likes count mismatch: before=$before after=$after" }
      if (expectedPlayerRows != null) {
        check(scalar(connection, "SELECT COUNT(*) FROM players") == expectedPlayerRows) {
          "Player dictionary count mismatch"
        }
      }
      requireNoForeignKeyViolations(connection)
      connection.commit()
      return Report(
          if (legacySchema) Status.MIGRATED else Status.CREATED,
          before,
          after,
      )
    } catch (error: Throwable) {
      connection.rollback()
      throw error
    } finally {
      connection.autoCommit = true
    }
  }

  private fun createPlayers(statement: java.sql.Statement) {
    statement.execute(
        """
        CREATE TABLE players (
          id INTEGER PRIMARY KEY,
          uuid VARCHAR(36) NOT NULL UNIQUE,
          last_known_name TEXT NULL,
          last_seen_at BIGINT NULL
        )
        """
            .trimIndent()
    )
  }

  private fun createBuildLikes(statement: java.sql.Statement) {
    statement.execute(
        """
        CREATE TABLE build_likes (
          build_id INT NOT NULL,
          player_id INT NOT NULL REFERENCES players(id),
          liked_at BIGINT NULL,
          PRIMARY KEY(build_id, player_id),
          FOREIGN KEY(build_id) REFERENCES builds(id) ON DELETE CASCADE ON UPDATE RESTRICT
        ) WITHOUT ROWID
        """
            .trimIndent()
    )
  }

  private fun createIndexes(statement: java.sql.Statement) {
    statement.execute(
        "CREATE INDEX IF NOT EXISTS idx_build_likes_player_liked_at ON build_likes(player_id, liked_at)"
    )
    statement.execute(
        "CREATE INDEX IF NOT EXISTS idx_build_likes_liked_at ON build_likes(liked_at) WHERE liked_at IS NOT NULL"
    )
  }

  private fun markerPresent(connection: Connection): Boolean =
      connection.prepareStatement("SELECT value FROM migration_state WHERE key = ?").use { statement
        ->
        statement.setString(1, MARKER_KEY)
        statement.executeQuery().use { rows -> rows.next() && rows.getString(1) == "true" }
      }

  private fun legacyCounts(connection: Connection): Counts = counts(connection, "player_uuid")

  private fun currentCounts(connection: Connection): Counts = counts(connection, "player_id")

  private fun counts(connection: Connection, playerColumn: String): Counts =
      connection.createStatement().use { statement ->
        statement
            .executeQuery(
                "SELECT COUNT(*), COUNT(liked_at), COUNT(DISTINCT $playerColumn) FROM build_likes"
            )
            .use { rows ->
              check(rows.next()) { "Could not count build likes" }
              Counts(rows.getInt(1), rows.getInt(2), rows.getInt(3))
            }
      }

  private fun columns(connection: Connection, table: String): Set<String> =
      connection.createStatement().use { statement ->
        statement.executeQuery("PRAGMA table_info($table)").use { rows ->
          buildSet { while (rows.next()) add(rows.getString("name")) }
        }
      }

  private fun scalar(connection: Connection, sql: String): Int =
      connection.createStatement().use { statement ->
        statement.executeQuery(sql).use { rows ->
          check(rows.next()) { "Query returned no rows: $sql" }
          rows.getInt(1)
        }
      }

  private fun requireNoForeignKeyViolations(connection: Connection) {
    connection.createStatement().use { statement ->
      statement.executeQuery("PRAGMA foreign_key_check").use { rows ->
        check(!rows.next()) { "Foreign key violation after build likes normalization" }
      }
    }
  }
}
