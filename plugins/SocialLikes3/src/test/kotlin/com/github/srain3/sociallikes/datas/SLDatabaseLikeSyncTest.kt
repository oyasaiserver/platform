package com.github.srain3.sociallikes.datas

import java.nio.file.Files
import java.sql.Connection
import java.sql.DriverManager
import kotlin.test.Test
import kotlin.test.assertEquals

class SLDatabaseLikeSyncTest {
  @Test
  fun addsOnlyMissingLikes() = withDatabase { connection ->
    seed(connection, "00000000-0000-0000-0000-000000000001" to 10L)

    val desired =
        listOf(
            "00000000-0000-0000-0000-000000000001" to 10L,
            "00000000-0000-0000-0000-000000000002" to 20L,
        )
    SLDatabase.syncBuildLikes(connection, BUILD_ID, desired)

    assertSync(connection, desired, expectedWrites = 1)
  }

  @Test
  fun deletesOnlyMissingLikes() = withDatabase { connection ->
    seed(
        connection,
        "00000000-0000-0000-0000-000000000001" to 10L,
        "00000000-0000-0000-0000-000000000002" to 20L,
    )

    val desired = listOf("00000000-0000-0000-0000-000000000001" to 10L)
    SLDatabase.syncBuildLikes(connection, BUILD_ID, desired)

    assertSync(connection, desired, expectedWrites = 1)
  }

  @Test
  fun updatesChangedTimestamp() = withDatabase { connection ->
    val uuid = "00000000-0000-0000-0000-000000000001"
    seed(connection, uuid to 10L)

    val desired = listOf(uuid to 20L)
    SLDatabase.syncBuildLikes(connection, BUILD_ID, desired)

    assertSync(connection, desired, expectedWrites = 1)
  }

  @Test
  fun handlesEveryNullTimestampTransition() = withDatabase { connection ->
    val nullToValue = "00000000-0000-0000-0000-000000000001"
    val valueToNull = "00000000-0000-0000-0000-000000000002"
    val nullToNull = "00000000-0000-0000-0000-000000000003"
    seed(connection, nullToValue to null, valueToNull to 20L, nullToNull to null)

    val desired = listOf(nullToValue to 10L, valueToNull to null, nullToNull to null)
    SLDatabase.syncBuildLikes(connection, BUILD_ID, desired)

    assertSync(connection, desired, expectedWrites = 2)
  }

  @Test
  fun unchangedLikesWriteNothing() = withDatabase { connection ->
    val uuid = "00000000-0000-0000-0000-000000000001"
    seed(connection, uuid to null)

    val desired = listOf(uuid to null, uuid to 999L)
    SLDatabase.syncBuildLikes(connection, BUILD_ID, desired)

    assertSync(connection, listOf(uuid to null), expectedWrites = 0)
  }

  @Test
  fun oneAdditionToThousandLikesWritesOneRow() = withDatabase { connection ->
    val existing = (1..1000).map { uuid(it) to it.toLong() }
    seed(connection, *existing.toTypedArray())

    val desired = existing + (uuid(1001) to 1001L)
    SLDatabase.syncBuildLikes(connection, BUILD_ID, desired)

    assertSync(connection, desired, expectedWrites = 1)
  }

  private fun withDatabase(block: (Connection) -> Unit) {
    val path = Files.createTempFile("sl3-like-sync-", ".db")
    try {
      DriverManager.getConnection("jdbc:sqlite:$path").use { connection ->
        connection.createStatement().use { statement ->
          statement.execute("PRAGMA foreign_keys = ON")
          statement.execute("CREATE TABLE builds (id INTEGER PRIMARY KEY)")
          statement.execute(
              "CREATE TABLE players (id INTEGER PRIMARY KEY, uuid VARCHAR(36) NOT NULL UNIQUE)"
          )
          statement.execute(
              "CREATE TABLE build_likes (build_id INTEGER NOT NULL REFERENCES builds(id) ON DELETE CASCADE, player_id INTEGER NOT NULL REFERENCES players(id), liked_at BIGINT, PRIMARY KEY(build_id, player_id)) WITHOUT ROWID"
          )
          statement.execute(
              "CREATE VIEW build_likes_with_uuid AS SELECT bl.build_id, bl.player_id, p.uuid player_uuid, bl.liked_at FROM build_likes bl JOIN players p ON p.id = bl.player_id"
          )
          statement.execute("INSERT INTO builds(id) VALUES ($BUILD_ID)")
          statement.execute("CREATE TABLE build_like_writes (action TEXT NOT NULL)")
          listOf("INSERT", "UPDATE", "DELETE").forEach { action ->
            statement.execute(
                "CREATE TRIGGER count_${action.lowercase()} AFTER $action ON build_likes BEGIN INSERT INTO build_like_writes VALUES ('$action'); END"
            )
          }
        }
        block(connection)
      }
    } finally {
      Files.deleteIfExists(path)
    }
  }

  private fun seed(connection: Connection, vararg likes: Pair<String, Long?>) {
    connection.prepareStatement("INSERT INTO players(uuid) VALUES (?)").use { players ->
      likes.forEach { (uuid) ->
        players.setString(1, uuid)
        players.addBatch()
      }
      players.executeBatch()
    }
    connection
        .prepareStatement(
            "INSERT INTO build_likes(build_id, player_id, liked_at) SELECT ?, id, ? FROM players WHERE uuid = ?"
        )
        .use { statement ->
          likes.forEach { (uuid, likedAt) ->
            statement.setInt(1, BUILD_ID)
            statement.setObject(2, likedAt)
            statement.setString(3, uuid)
            statement.addBatch()
          }
          statement.executeBatch()
        }
    connection.createStatement().use { it.execute("DELETE FROM build_like_writes") }
  }

  private fun assertSync(
      connection: Connection,
      expected: List<Pair<String, Long?>>,
      expectedWrites: Int,
  ) {
    val actual =
        connection.createStatement().use { statement ->
          statement
              .executeQuery(
                  "SELECT player_uuid, liked_at FROM build_likes_with_uuid WHERE build_id = $BUILD_ID ORDER BY player_uuid"
              )
              .use { rows ->
                buildList {
                  while (rows.next()) {
                    add(
                        rows.getString("player_uuid") to
                            rows.getLong("liked_at").let { if (rows.wasNull()) null else it }
                    )
                  }
                }
              }
        }
    assertEquals(expected.distinctBy { it.first }.sortedBy { it.first }, actual)
    assertEquals(
        expectedWrites,
        connection.createStatement().use { statement ->
          statement.executeQuery("SELECT COUNT(*) FROM build_like_writes").use { rows ->
            rows.next()
            rows.getInt(1)
          }
        },
    )
  }

  private fun uuid(value: Int): String =
      "00000000-0000-0000-0000-${value.toString().padStart(12, '0')}"

  private companion object {
    const val BUILD_ID = 1
  }
}
