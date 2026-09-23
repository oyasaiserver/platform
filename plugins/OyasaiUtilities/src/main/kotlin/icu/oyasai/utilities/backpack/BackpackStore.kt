package icu.oyasai.utilities.backpack

import java.io.File
import java.sql.Connection
import java.sql.DriverManager
import java.util.UUID

internal class BackpackStore(private val databaseFile: File) : AutoCloseable {
  private lateinit var connection: Connection

  fun open() {
    Class.forName("org.sqlite.JDBC")
    databaseFile.parentFile?.mkdirs()
    connection = DriverManager.getConnection("jdbc:sqlite:${databaseFile.absolutePath}")
    connection.createStatement().use { statement ->
      statement.execute("PRAGMA journal_mode=WAL")
      statement.execute("PRAGMA synchronous=FULL")
      statement.execute("PRAGMA busy_timeout=5000")
    }

    val version = schemaVersion()
    when (version) {
      0 -> createSchema()
      SCHEMA_VERSION -> validateSchema()
      else -> error("unsupported backpack schema version $version")
    }
  }

  fun load(playerUuid: UUID): ByteArray? {
    connection
        .prepareStatement("SELECT data_version, contents FROM backpacks WHERE player_uuid = ?")
        .use { statement ->
          statement.setString(1, playerUuid.toString())
          statement.executeQuery().use { rows ->
            if (!rows.next()) return null
            val version = rows.getInt("data_version")
            require(version == DATA_VERSION) {
              "unsupported backpack data version $version for $playerUuid"
            }
            return rows.getBytes("contents")
                ?: error("backpack contents are missing for $playerUuid")
          }
        }
  }

  fun save(playerUuid: UUID, contents: ByteArray) {
    connection.autoCommit = false
    try {
      connection
          .prepareStatement(
              """
              INSERT INTO backpacks(player_uuid, data_version, contents, updated_at)
              VALUES (?, ?, ?, ?)
              ON CONFLICT(player_uuid) DO UPDATE SET
                data_version = excluded.data_version,
                contents = excluded.contents,
                updated_at = excluded.updated_at
              """
                  .trimIndent()
          )
          .use { statement ->
            statement.setString(1, playerUuid.toString())
            statement.setInt(2, DATA_VERSION)
            statement.setBytes(3, contents)
            statement.setLong(4, System.currentTimeMillis())
            statement.executeUpdate()
          }
      connection.commit()
    } catch (failure: Exception) {
      connection.rollback()
      throw failure
    } finally {
      connection.autoCommit = true
    }
  }

  fun insertIfAbsent(playerUuid: UUID, contents: ByteArray): Boolean =
      connection
          .prepareStatement(
              """
              INSERT INTO backpacks(player_uuid, data_version, contents, updated_at)
              VALUES (?, ?, ?, ?)
              ON CONFLICT(player_uuid) DO NOTHING
              """
                  .trimIndent()
          )
          .use { statement ->
            statement.setString(1, playerUuid.toString())
            statement.setInt(2, DATA_VERSION)
            statement.setBytes(3, contents)
            statement.setLong(4, System.currentTimeMillis())
            statement.executeUpdate() == 1
          }

  fun delete(playerUuid: UUID) {
    connection.prepareStatement("DELETE FROM backpacks WHERE player_uuid = ?").use { statement ->
      statement.setString(1, playerUuid.toString())
      statement.executeUpdate()
    }
  }

  override fun close() {
    if (::connection.isInitialized) connection.close()
  }

  private fun schemaVersion(): Int =
      connection.createStatement().use { statement ->
        statement.executeQuery("PRAGMA user_version").use { rows ->
          check(rows.next()) { "SQLite did not return user_version" }
          rows.getInt(1)
        }
      }

  private fun createSchema() {
    check(!tableExists()) {
      "backpacks table exists without a supported schema version; refusing to claim it"
    }
    connection.autoCommit = false
    try {
      connection.createStatement().use { statement ->
        statement.execute(
            """
            CREATE TABLE backpacks (
              player_uuid TEXT PRIMARY KEY,
              data_version INTEGER NOT NULL CHECK(data_version = $DATA_VERSION),
              contents BLOB NOT NULL,
              updated_at INTEGER NOT NULL
            )
            """
                .trimIndent()
        )
        statement.execute("PRAGMA user_version = $SCHEMA_VERSION")
      }
      connection.commit()
    } catch (failure: Exception) {
      connection.rollback()
      throw failure
    } finally {
      connection.autoCommit = true
    }
  }

  private fun validateSchema() {
    connection.createStatement().use { statement ->
      statement
          .executeQuery(
              "SELECT player_uuid, data_version, contents, updated_at FROM backpacks LIMIT 1"
          )
          .close()
      statement
          .executeQuery("SELECT COUNT(*) FROM backpacks WHERE data_version != $DATA_VERSION")
          .use { rows ->
            check(rows.next() && rows.getLong(1) == 0L) {
              "backpacks contains unsupported data versions"
            }
          }
    }
  }

  private fun tableExists(): Boolean =
      connection
          .prepareStatement("SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = ?")
          .use { statement ->
            statement.setString(1, "backpacks")
            statement.executeQuery().use { it.next() }
          }

  companion object {
    const val SCHEMA_VERSION = 1
    const val DATA_VERSION = 1
  }
}
