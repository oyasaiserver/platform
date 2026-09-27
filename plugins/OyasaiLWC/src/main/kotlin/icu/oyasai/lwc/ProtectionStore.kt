package icu.oyasai.lwc

import java.io.File
import java.sql.Connection
import java.sql.DriverManager
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.UUID
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import org.bukkit.Material
import org.bukkit.plugin.java.JavaPlugin

internal class ProtectionStore(private val plugin: JavaPlugin) {
  private val connection: Connection
  private val writer = Executors.newSingleThreadExecutor { task -> Thread(task, "LWC-SQLite") }
  private val cache = mutableMapOf<BlockKey, Protection>()
  private val dateFormat = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS")
  var ignoredTypes = 0
    private set

  init {
    val file = File(plugin.dataFolder, "lwc.db")
    val existing = file.exists()
    if (!existing) plugin.dataFolder.mkdirs()
    Class.forName("org.sqlite.JDBC")
    connection = DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}")
    try {
      if (existing) {
        val version =
            connection.createStatement().use { statement ->
              statement.executeQuery("SELECT value FROM lwc_internal WHERE name = 'version'").use {
                if (it.next()) it.getString(1) else null
              }
            }
        require(version == "6") { "LWC データベースの version が 6 ではありません: $version" }
      } else {
        connection.createStatement().use { statement ->
          statement.executeUpdate(
              "CREATE TABLE lwc_protections(id INTEGER PRIMARY KEY, owner VARCHAR(36), type INTEGER, x INTEGER, y INTEGER, z INTEGER, data TEXT, blockId INTEGER, world VARCHAR(32), password VARCHAR(40), date VARCHAR(32), last_accessed INTEGER, rights TEXT)"
          )
          statement.executeUpdate("CREATE TABLE lwc_blocks(id INTEGER PRIMARY KEY, name TEXT)")
          statement.executeUpdate("CREATE TABLE lwc_internal(name TEXT PRIMARY KEY, value TEXT)")
          statement.executeUpdate("INSERT INTO lwc_internal(name, value) VALUES ('version', '6')")
        }
      }
      connection.createStatement().use { statement ->
        statement
            .executeQuery("SELECT id, owner, type, x, y, z, data, world FROM lwc_protections")
            .use { rows ->
              while (rows.next()) {
                val type = rows.getInt("type")
                if (type != 2 && type != 6) {
                  ignoredTypes++
                  continue
                }
                val key =
                    BlockKey(
                        rows.getString("world"),
                        rows.getInt("x"),
                        rows.getInt("y"),
                        rows.getInt("z"),
                    )
                val protection =
                    Protection.read(
                        rows.getInt("id"),
                        key,
                        UUID.fromString(rows.getString("owner")),
                        type,
                        rows.getString("data") ?: "",
                    )
                require(cache.putIfAbsent(key, protection) == null) { "保護座標が重複しています: $key" }
              }
            }
      }
    } catch (error: Exception) {
      connection.close()
      writer.shutdown()
      throw error
    }
  }

  fun get(key: BlockKey): Protection? = cache[key]

  fun count(): Int = cache.size

  fun add(protection: Protection, material: Material) {
    cache[protection.key] = protection
    val json = protection.json()
    write {
      val blockName = material.key.toString()
      var blockId =
          connection.prepareStatement("SELECT id FROM lwc_blocks WHERE name = ?").use { statement ->
            statement.setString(1, blockName)
            statement.executeQuery().use { if (it.next()) it.getInt(1) else null }
          }
      if (blockId == null) {
        blockId =
            connection.createStatement().use { statement ->
              statement.executeQuery("SELECT COALESCE(MAX(id), 0) + 1 FROM lwc_blocks").use {
                it.next()
                it.getInt(1)
              }
            }
        connection.prepareStatement("INSERT INTO lwc_blocks(id, name) VALUES (?, ?)").use {
            statement ->
          statement.setInt(1, blockId)
          statement.setString(2, blockName)
          statement.executeUpdate()
        }
      }
      connection
          .prepareStatement(
              "INSERT INTO lwc_protections(owner, type, x, y, z, data, blockId, world, password, date, last_accessed, rights) VALUES (?, ?, ?, ?, ?, ?, ?, ?, '', ?, ?, '')"
          )
          .use { statement ->
            statement.setString(1, protection.owner.toString())
            statement.setInt(2, protection.type)
            statement.setInt(3, protection.key.x)
            statement.setInt(4, protection.key.y)
            statement.setInt(5, protection.key.z)
            statement.setString(6, json)
            statement.setInt(7, blockId)
            statement.setString(8, protection.key.world)
            statement.setString(9, LocalDateTime.now().format(dateFormat))
            statement.setLong(10, System.currentTimeMillis() / 1000)
            statement.executeUpdate()
          }
      protection.id =
          connection.createStatement().use { statement ->
            statement.executeQuery("SELECT last_insert_rowid()").use {
              it.next()
              it.getInt(1)
            }
          }
    }
  }

  fun remove(protection: Protection) {
    cache.remove(protection.key)
    write {
      connection.prepareStatement("DELETE FROM lwc_protections WHERE id = ?").use { statement ->
        statement.setInt(1, protection.id)
        statement.executeUpdate()
      }
    }
  }

  fun update(protection: Protection) {
    val json = protection.json()
    write {
      connection.prepareStatement("UPDATE lwc_protections SET data = ? WHERE id = ?").use {
          statement ->
        statement.setString(1, json)
        statement.setInt(2, protection.id)
        statement.executeUpdate()
      }
    }
  }

  private fun write(action: () -> Unit) {
    writer.execute {
      try {
        action()
      } catch (error: Exception) {
        plugin.logger.severe("LWC データベースの書き込みに失敗しました: ${error.message}")
      }
    }
  }

  fun close() {
    writer.shutdown()
    writer.awaitTermination(Long.MAX_VALUE, TimeUnit.NANOSECONDS)
    connection.close()
  }
}
