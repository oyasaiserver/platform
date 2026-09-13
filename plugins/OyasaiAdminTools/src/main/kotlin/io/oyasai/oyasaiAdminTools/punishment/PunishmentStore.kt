package io.oyasai.oyasaiAdminTools.punishment

import java.io.File
import java.sql.Connection
import java.sql.DriverManager
import java.sql.ResultSet
import java.sql.Types
import java.util.UUID

class PunishmentStore(private val dbFile: File) {
  private val lock = Any()
  private lateinit var connection: Connection

  fun open() {
    synchronized(lock) {
      dbFile.parentFile?.mkdirs()
      Class.forName("org.sqlite.JDBC")
      connection = DriverManager.getConnection("jdbc:sqlite:${dbFile.absolutePath}")
      connection.createStatement().use { st ->
        st.execute("PRAGMA journal_mode=WAL;")
        st.execute("PRAGMA synchronous=NORMAL;")
        st.execute("PRAGMA foreign_keys=ON;")
      }
      createSchema()
    }
  }

  fun close() {
    synchronized(lock) {
      if (::connection.isInitialized && !connection.isClosed) {
        connection.close()
      }
    }
  }

  private fun createSchema() {
    connection.createStatement().use { st ->
      st.executeUpdate(
          """
          CREATE TABLE IF NOT EXISTS punishments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            uuid TEXT NOT NULL,
            name TEXT NOT NULL,
            type TEXT NOT NULL,
            reason TEXT NOT NULL,
            operator TEXT NOT NULL,
            start INTEGER NOT NULL,
            end INTEGER,
            active INTEGER NOT NULL DEFAULT 1
          )
          """
              .trimIndent()
      )
      st.executeUpdate(
          "CREATE INDEX IF NOT EXISTS idx_punishments_uuid_active ON punishments(uuid, active)"
      )
      st.executeUpdate(
          "CREATE INDEX IF NOT EXISTS idx_punishments_name ON punishments(name COLLATE NOCASE)"
      )
      st.executeUpdate(
          """
          CREATE TABLE IF NOT EXISTS meta (
            key TEXT PRIMARY KEY,
            value TEXT NOT NULL
          )
          """
              .trimIndent()
      )
    }
  }

  fun insertImported(record: PunishmentRecord) {
    synchronized(lock) { insertRow(record) }
  }

  fun insert(record: PunishmentRecord): PunishmentRecord {
    return synchronized(lock) {
      expireDue()
      if (record.active && record.type in BAN_TYPES) {
        deactivateUnlocked(record.uuid, BAN_TYPES)
      }
      if (record.active && record.type == PunishmentType.MUTE) {
        deactivateUnlocked(record.uuid, setOf(PunishmentType.MUTE))
      }
      insertRow(record)
      val id =
          connection.prepareStatement("SELECT last_insert_rowid()").use { ps ->
            ps.executeQuery().use { rs ->
              rs.next()
              rs.getLong(1)
            }
          }
      record.copy(id = id)
    }
  }

  fun deactivate(uuid: UUID, types: Set<PunishmentType>): Int {
    return synchronized(lock) { deactivateUnlocked(uuid, types) }
  }

  fun deactivateByName(name: String, types: Set<PunishmentType>): Int {
    return synchronized(lock) {
      expireDue()
      val placeholders = types.joinToString(",") { "?" }
      connection
          .prepareStatement(
              """
              UPDATE punishments
              SET active = 0
              WHERE active = 1
                AND type IN ($placeholders)
                AND LOWER(name) = LOWER(?)
              """
                  .trimIndent()
          )
          .use { ps ->
            types.forEachIndexed { index, type -> ps.setString(index + 1, type.name) }
            ps.setString(types.size + 1, name)
            ps.executeUpdate()
          }
    }
  }

  fun findActive(uuid: UUID, types: Set<PunishmentType>): PunishmentRecord? {
    return synchronized(lock) {
      expireDue()
      val placeholders = types.joinToString(",") { "?" }
      connection
          .prepareStatement(
              """
              SELECT * FROM punishments
              WHERE active = 1 AND uuid = ? AND type IN ($placeholders)
              ORDER BY start DESC
              LIMIT 1
              """
                  .trimIndent()
          )
          .use { ps ->
            ps.setString(1, uuid.toString())
            types.forEachIndexed { index, type -> ps.setString(index + 2, type.name) }
            ps.executeQuery().use { rs -> if (rs.next()) readRecord(rs) else null }
          }
    }
  }

  fun history(name: String, uuid: UUID?, limit: Int = 20): List<PunishmentRecord> {
    return synchronized(lock) {
      expireDue()
      connection
          .prepareStatement(
              """
              SELECT * FROM punishments
              WHERE LOWER(name) = LOWER(?) OR (? IS NOT NULL AND uuid = ?)
              ORDER BY start DESC
              LIMIT ?
              """
                  .trimIndent()
          )
          .use { ps ->
            ps.setString(1, name)
            if (uuid == null) {
              ps.setObject(2, null)
              ps.setObject(3, null)
            } else {
              ps.setString(2, uuid.toString())
              ps.setString(3, uuid.toString())
            }
            ps.setInt(4, limit)
            ps.executeQuery().use { rs ->
              val rows = mutableListOf<PunishmentRecord>()
              while (rs.next()) rows.add(readRecord(rs))
              rows
            }
          }
    }
  }

  fun countByType(uuid: UUID, type: PunishmentType): Int {
    return synchronized(lock) {
      connection
          .prepareStatement("SELECT COUNT(*) FROM punishments WHERE uuid = ? AND type = ?")
          .use { ps ->
            ps.setString(1, uuid.toString())
            ps.setString(2, type.name)
            ps.executeQuery().use { rs ->
              rs.next()
              rs.getInt(1)
            }
          }
    }
  }

  fun getMeta(key: String): String? {
    return synchronized(lock) {
      connection.prepareStatement("SELECT value FROM meta WHERE key = ?").use { ps ->
        ps.setString(1, key)
        ps.executeQuery().use { rs -> if (rs.next()) rs.getString(1) else null }
      }
    }
  }

  fun setMeta(key: String, value: String) {
    synchronized(lock) {
      connection.prepareStatement("INSERT OR REPLACE INTO meta(key, value) VALUES (?, ?)").use { ps
        ->
        ps.setString(1, key)
        ps.setString(2, value)
        ps.executeUpdate()
      }
    }
  }

  private fun insertRow(record: PunishmentRecord) {
    connection
        .prepareStatement(
            """
            INSERT INTO punishments(uuid, name, type, reason, operator, start, end, active)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """
                .trimIndent()
        )
        .use { ps ->
          ps.setString(1, record.uuid.toString())
          ps.setString(2, record.name)
          ps.setString(3, record.type.name)
          ps.setString(4, record.reason)
          ps.setString(5, record.operator)
          ps.setLong(6, record.start)
          if (record.end == null) ps.setNull(7, Types.BIGINT) else ps.setLong(7, record.end)
          ps.setInt(8, if (record.active) 1 else 0)
          ps.executeUpdate()
        }
  }

  private fun deactivateUnlocked(uuid: UUID, types: Set<PunishmentType>): Int {
    val placeholders = types.joinToString(",") { "?" }
    return connection
        .prepareStatement(
            """
            UPDATE punishments
            SET active = 0
            WHERE active = 1 AND uuid = ? AND type IN ($placeholders)
            """
                .trimIndent()
        )
        .use { ps ->
          ps.setString(1, uuid.toString())
          types.forEachIndexed { index, type -> ps.setString(index + 2, type.name) }
          ps.executeUpdate()
        }
  }

  private fun expireDue() {
    val now = System.currentTimeMillis()
    connection
        .prepareStatement(
            "UPDATE punishments SET active = 0 WHERE active = 1 AND end IS NOT NULL AND end <= ?"
        )
        .use { ps ->
          ps.setLong(1, now)
          ps.executeUpdate()
        }
  }

  private fun readRecord(rs: ResultSet): PunishmentRecord {
    val endRaw = rs.getLong("end")
    val end = if (rs.wasNull()) null else endRaw
    return PunishmentRecord(
        id = rs.getLong("id"),
        uuid = UUID.fromString(rs.getString("uuid")),
        name = rs.getString("name"),
        type = PunishmentType.valueOf(rs.getString("type")),
        reason = rs.getString("reason"),
        operator = rs.getString("operator"),
        start = rs.getLong("start"),
        end = end,
        active = rs.getInt("active") != 0,
    )
  }

  companion object {
    val BAN_TYPES = setOf(PunishmentType.BAN, PunishmentType.TEMPBAN)
  }
}
