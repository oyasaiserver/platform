package com.gakubuchilocker.database

import org.bukkit.entity.ItemFrame
import java.io.File
import java.sql.Connection
import java.sql.DriverManager
import java.util.UUID

class DatabaseManager(dataFolder: File) {

    private val connection: Connection

    // 起動時にSQLiteから全ロックデータをメモリに展開する
    // entity_uuid → owner_uuid のマッピング
    private val cache = HashMap<UUID, UUID>()

    init {
        dataFolder.mkdirs()
        val dbFile = File(dataFolder, "gakubuchi.db")
        Class.forName("org.sqlite.JDBC")
        connection = DriverManager.getConnection("jdbc:sqlite:${dbFile.absolutePath}")
        createTable()
        loadCache()
    }

    private fun createTable() {
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
                """.trimIndent()
            )
        }
    }

    // サーバー起動・再起動のたびに全ロックデータをSQLiteから読み込む
    private fun loadCache() {
        connection.createStatement().use { stmt ->
            val rs = stmt.executeQuery("SELECT entity_uuid, owner_uuid FROM locked_frames")
            while (rs.next()) {
                val entityUuid = UUID.fromString(rs.getString("entity_uuid"))
                val ownerUuid  = UUID.fromString(rs.getString("owner_uuid"))
                cache[entityUuid] = ownerUuid
            }
        }
    }

    fun lockFrame(frame: ItemFrame, ownerUuid: UUID) {
        val loc = frame.location
        connection.prepareStatement(
            "INSERT OR REPLACE INTO locked_frames (entity_uuid, world, x, y, z, owner_uuid) VALUES (?, ?, ?, ?, ?, ?)"
        ).use { stmt ->
            stmt.setString(1, frame.uniqueId.toString())
            stmt.setString(2, loc.world?.name ?: "world")
            stmt.setInt(3, loc.blockX)
            stmt.setInt(4, loc.blockY)
            stmt.setInt(5, loc.blockZ)
            stmt.setString(6, ownerUuid.toString())
            stmt.executeUpdate()
        }
        cache[frame.uniqueId] = ownerUuid
    }

    fun unlockFrame(entityUuid: UUID) {
        connection.prepareStatement(
            "DELETE FROM locked_frames WHERE entity_uuid = ?"
        ).use { stmt ->
            stmt.setString(1, entityUuid.toString())
            stmt.executeUpdate()
        }
        cache.remove(entityUuid)
    }

    // キャッシュから O(1) で判定 — DB問い合わせ不要
    fun isLocked(entityUuid: UUID): Boolean = entityUuid in cache

    fun getOwner(entityUuid: UUID): UUID? = cache[entityUuid]

    fun close() {
        if (!connection.isClosed) connection.close()
    }
}
