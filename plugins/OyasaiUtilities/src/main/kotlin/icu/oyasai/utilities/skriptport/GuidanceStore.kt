package icu.oyasai.utilities.skriptport

import icu.oyasai.utilities.storage.transaction
import java.io.File
import java.sql.Connection
import java.sql.DriverManager
import java.util.Locale
import java.util.UUID

internal data class GuidanceRecord(val guide: String?, val name: String?, val at: Long?)

internal class GuidanceStore(private val file: File) : AutoCloseable {
  private lateinit var connection: Connection

  fun open() {
    Class.forName("org.sqlite.JDBC")
    file.parentFile?.mkdirs()
    connection = DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}")
    connection.createStatement().use {
      it.execute("PRAGMA busy_timeout=5000")
      it.execute(
          "CREATE TABLE IF NOT EXISTS guide_clicked (uuid TEXT NOT NULL, sign_id TEXT NOT NULL, PRIMARY KEY(uuid, sign_id))"
      )
      it.execute(
          "CREATE TABLE IF NOT EXISTS guide_records (uuid TEXT PRIMARY KEY, guide TEXT, name TEXT, at INTEGER)"
      )
      it.execute("CREATE TABLE IF NOT EXISTS guide_import (done INTEGER NOT NULL)")
    }
  }

  // Skript の変数名は小文字化されるため、看板 ID も同じキーにする。
  fun clicked(uuid: UUID, sign: String): Boolean =
      connection
          .prepareStatement("SELECT 1 FROM guide_clicked WHERE uuid = ? AND sign_id = ?")
          .use {
            it.setString(1, uuid.toString())
            it.setString(2, sign.lowercase(Locale.ENGLISH))
            it.executeQuery().use { rows -> rows.next() }
          }

  fun record(uuid: UUID): GuidanceRecord? =
      connection.prepareStatement("SELECT guide, name, at FROM guide_records WHERE uuid = ?").use {
        it.setString(1, uuid.toString())
        it.executeQuery().use { rows ->
          if (!rows.next()) null
          else {
            val at = rows.getLong(3).let { value -> if (rows.wasNull()) null else value }
            GuidanceRecord(rows.getString(1), rows.getString(2), at)
          }
        }
      }

  fun complete(uuid: UUID, sign: String, guide: UUID, name: String, at: Long) =
      connection.transaction {
        saveClicked(uuid, sign)
        saveRecord(uuid, GuidanceRecord(guide.toString(), name, at))
      }

  private fun saveClicked(uuid: UUID, sign: String) {
    connection.prepareStatement("INSERT INTO guide_clicked(uuid, sign_id) VALUES (?, ?)").use {
      it.setString(1, uuid.toString())
      it.setString(2, sign.lowercase(Locale.ENGLISH))
      it.executeUpdate()
    }
  }

  private fun saveRecord(uuid: UUID, record: GuidanceRecord) {
    connection
        .prepareStatement(
            "INSERT INTO guide_records(uuid, guide, name, at) VALUES (?, ?, ?, ?) ON CONFLICT(uuid) DO UPDATE SET guide = excluded.guide, name = excluded.name, at = excluded.at"
        )
        .use {
          it.setString(1, uuid.toString())
          it.setString(2, record.guide)
          it.setString(3, record.name)
          if (record.at == null) it.setNull(4, java.sql.Types.BIGINT) else it.setLong(4, record.at)
          it.executeUpdate()
        }
  }

  override fun close() {
    if (::connection.isInitialized) connection.close()
  }
}
