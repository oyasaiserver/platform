package icu.oyasai.frames

import java.io.File
import java.sql.Connection
import java.sql.DriverManager

internal class ItemTemplateStore(private val file: File) : AutoCloseable {
  private lateinit var connection: Connection

  fun open() {
    Class.forName("org.sqlite.JDBC")
    file.parentFile?.mkdirs()
    connection = DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}")
    connection.createStatement().use {
      it.execute("PRAGMA busy_timeout=5000")
      it.execute(
          "CREATE TABLE IF NOT EXISTS command_items (name TEXT PRIMARY KEY, item BLOB NOT NULL)"
      )
    }
  }

  fun load(name: String): ByteArray? =
      connection.prepareStatement("SELECT item FROM command_items WHERE name = ?").use {
        it.setString(1, name)
        it.executeQuery().use { rows -> if (rows.next()) rows.getBytes(1) else null }
      }

  fun save(name: String, item: ByteArray) {
    connection
        .prepareStatement(
            "INSERT INTO command_items(name, item) VALUES (?, ?) ON CONFLICT(name) DO UPDATE SET item = excluded.item"
        )
        .use {
          it.setString(1, name)
          it.setBytes(2, item)
          it.executeUpdate()
        }
  }

  override fun close() {
    if (::connection.isInitialized) connection.close()
  }
}
