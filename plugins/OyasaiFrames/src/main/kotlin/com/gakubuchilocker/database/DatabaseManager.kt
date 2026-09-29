package com.gakubuchilocker.database

import com.gakubuchilocker.GakubuchiLockerPlugin
import java.io.File
import java.sql.Connection
import java.sql.DriverManager
import java.sql.SQLException
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import org.bukkit.Bukkit
import org.bukkit.entity.ItemFrame
import org.bukkit.persistence.PersistentDataType

class DatabaseManager(
    private val plugin: GakubuchiLockerPlugin,
) {
  private val connection: Connection

  // 起動時にSQLiteから全ロックデータをメモリに展開する
  // entity_uuid → owner_uuid のマッピング
  private val cache = ConcurrentHashMap<UUID, UUID>()

  init {
    val dataFolder = plugin.dataFolder
    dataFolder.mkdirs()
    val dbFile = File(dataFolder, "gakubuchi.db")
    Class.forName("org.sqlite.JDBC")
    connection = DriverManager.getConnection("jdbc:sqlite:${dbFile.absolutePath}")
    enableWalMode()
    createTable()
    loadCache()
  }

  private fun enableWalMode() {
    try {
      connection.createStatement().use { stmt ->
        stmt.execute("PRAGMA journal_mode=WAL;")
        stmt.execute("PRAGMA synchronous=NORMAL;")
      }
    } catch (e: SQLException) {
      plugin.logger.severe("Failed to enable WAL mode: ${e.message}")
    }
  }

  private fun createTable() {
    try {
      connection.createStatement().use { stmt ->
        stmt.execute(
            """
            CREATE TABLE IF NOT EXISTS locked_frames (
                entity_uuid TEXT PRIMARY KEY,
                world       TEXT    NOT NULL,
                x           INTEGER NOT NULL,
                y           INTEGER NOT NULL,
                z           INTEGER NOT NULL,
                owner_uuid  TEXT    NOT NULL,
                locked_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
            """
                .trimIndent(),
        )
      }
    } catch (e: SQLException) {
      plugin.logger.severe("Failed to create locked_frames table: ${e.message}")
    }
  }

  // サーバー起動・再起動のたびに全ロックデータをSQLiteから読み込む
  private fun loadCache() {
    try {
      connection.createStatement().use { stmt ->
        val rs = stmt.executeQuery("SELECT entity_uuid, owner_uuid FROM locked_frames")
        while (rs.next()) {
          val entityUuid = UUID.fromString(rs.getString("entity_uuid"))
          val ownerUuid = UUID.fromString(rs.getString("owner_uuid"))
          cache[entityUuid] = ownerUuid
        }
      }
    } catch (e: SQLException) {
      plugin.logger.severe("Failed to load cache from SQLite: ${e.message}")
    }
  }

  fun lockFrame(
      frame: ItemFrame,
      ownerUuid: UUID,
  ) {
    val loc = frame.location
    try {
      connection
          .prepareStatement(
              "INSERT OR REPLACE INTO locked_frames (entity_uuid, world, x, y, z, owner_uuid) VALUES (?, ?, ?, ?, ?, ?)",
          )
          .use { stmt ->
            stmt.setString(1, frame.uniqueId.toString())
            stmt.setString(2, loc.world?.name ?: "world")
            stmt.setInt(3, loc.blockX)
            stmt.setInt(4, loc.blockY)
            stmt.setInt(5, loc.blockZ)
            stmt.setString(6, ownerUuid.toString())
            stmt.executeUpdate()
          }
    } catch (e: SQLException) {
      plugin.logger.severe("Failed to lock frame ${frame.uniqueId} in SQLite: ${e.message}")
    }
    cache[frame.uniqueId] = ownerUuid
    frame.persistentDataContainer.set(
        plugin.ownerKey,
        PersistentDataType.STRING,
        ownerUuid.toString(),
    )
  }

  fun unlockFrame(frame: ItemFrame) {
    frame.persistentDataContainer.remove(plugin.ownerKey)
    unlockFrame(frame.uniqueId)
  }

  fun unlockFrame(entityUuid: UUID) {
    (Bukkit.getEntity(entityUuid) as? ItemFrame)?.persistentDataContainer?.remove(plugin.ownerKey)
    try {
      connection
          .prepareStatement(
              "DELETE FROM locked_frames WHERE entity_uuid = ?",
          )
          .use { stmt ->
            stmt.setString(1, entityUuid.toString())
            stmt.executeUpdate()
          }
    } catch (e: SQLException) {
      plugin.logger.severe("Failed to unlock frame $entityUuid in SQLite: ${e.message}")
    }
    cache.remove(entityUuid)
  }

  // キャッシュから O(1) で判定 — DB問い合わせ不要
  fun isLocked(entityUuid: UUID): Boolean = cache.containsKey(entityUuid)

  fun getOwner(entityUuid: UUID): UUID? = cache[entityUuid]

  fun close() {
    try {
      if (!connection.isClosed) connection.close()
    } catch (e: SQLException) {
      plugin.logger.severe("Failed to close SQLite connection: ${e.message}")
    }
  }
}
