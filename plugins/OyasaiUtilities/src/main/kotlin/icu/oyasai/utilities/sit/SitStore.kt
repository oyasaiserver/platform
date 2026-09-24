package icu.oyasai.utilities.sit

import java.io.File
import java.sql.Connection
import java.sql.DriverManager
import java.util.UUID

internal class SitStore(private val file: File) : AutoCloseable {
  private lateinit var connection: Connection

  fun open() {
    Class.forName("org.sqlite.JDBC")
    connection = DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}")
    connection.createStatement().use {
      it.execute("PRAGMA journal_mode=WAL")
      it.execute("PRAGMA synchronous=FULL")
      it.execute("PRAGMA busy_timeout=5000")
    }
    val version =
        connection.createStatement().use { statement ->
          statement.executeQuery("PRAGMA user_version").use { rows ->
            check(rows.next())
            rows.getInt(1)
          }
        }
    when (version) {
      0 -> {
        check(!tableExists()) { "click_sit_off exists without a schema version" }
        connection.autoCommit = false
        try {
          connection.createStatement().use {
            it.execute("CREATE TABLE click_sit_off (uuid TEXT PRIMARY KEY NOT NULL)")
            it.execute("PRAGMA user_version = 1")
          }
          connection.commit()
        } catch (failure: Exception) {
          connection.rollback()
          throw failure
        } finally {
          connection.autoCommit = true
        }
      }
      1 -> check(tableExists()) { "click_sit_off is missing" }
      else -> error("unsupported sit schema version $version")
    }
  }

  fun loadOff(): Set<UUID> =
      connection.createStatement().use { statement ->
        statement.executeQuery("SELECT uuid FROM click_sit_off").use { rows ->
          buildSet { while (rows.next()) add(UUID.fromString(rows.getString(1))) }
        }
      }

  fun setOff(uuid: UUID, off: Boolean) {
    val sql =
        if (off) "INSERT INTO click_sit_off (uuid) VALUES (?)"
        else "DELETE FROM click_sit_off WHERE uuid = ?"
    connection.prepareStatement(sql).use {
      it.setString(1, uuid.toString())
      it.executeUpdate()
    }
  }

  private fun tableExists(): Boolean =
      connection
          .prepareStatement(
              "SELECT 1 FROM sqlite_master WHERE type = 'table' AND name = 'click_sit_off'"
          )
          .use { it.executeQuery().use { rows -> rows.next() } }

  override fun close() {
    if (::connection.isInitialized) connection.close()
  }
}
