package icu.oyasai.frames

import icu.oyasai.imageonmap.FrameRecord
import java.io.File
import java.sql.Connection
import java.sql.DriverManager
import java.util.UUID

/** One connection per caller: the locker uses the main thread, posters use the database thread. */
internal class FrameStore(file: File) : AutoCloseable {
  private val db: Connection

  init {
    Class.forName("org.sqlite.JDBC")
    file.parentFile?.mkdirs()
    db = DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}")
    db.createStatement().use {
      it.execute("PRAGMA journal_mode=WAL")
      it.execute("PRAGMA synchronous=FULL")
      it.execute("PRAGMA busy_timeout=5000")
    }
    val version =
        db.createStatement().use { s ->
          s.executeQuery("PRAGMA user_version").use { r ->
            r.next()
            r.getInt(1)
          }
        }
    when (version) {
      0 -> {
        val existing =
            db.createStatement().use { s ->
              s.executeQuery("SELECT COUNT(*) FROM sqlite_master WHERE name NOT LIKE 'sqlite_%'")
                  .use { r ->
                    r.next()
                    r.getInt(1)
                  }
            }
        check(existing == 0) { "unversioned frames database is not empty" }
        transaction {
          db.createStatement().use { s ->
            s.execute(
                "CREATE TABLE frames (frame_uuid TEXT PRIMARY KEY, world TEXT, world_name TEXT, x INTEGER NOT NULL, y INTEGER NOT NULL, z INTEGER NOT NULL, owner_uuid TEXT, map_id INTEGER, facing TEXT, placed_at INTEGER, legacy INTEGER NOT NULL DEFAULT 0, detected INTEGER NOT NULL DEFAULT 0, locked_at TEXT, CHECK(owner_uuid IS NOT NULL OR map_id IS NOT NULL))"
            )
            s.execute("CREATE INDEX frames_map ON frames(map_id)")
            s.execute("PRAGMA user_version = 1")
          }
        }
      }
      1 ->
          db.createStatement().use { s ->
            val columns =
                s.executeQuery("PRAGMA table_info(frames)").use { r ->
                  buildList { while (r.next()) add(r.getString("name")) }
                }
            check(
                columns ==
                    listOf(
                        "frame_uuid",
                        "world",
                        "world_name",
                        "x",
                        "y",
                        "z",
                        "owner_uuid",
                        "map_id",
                        "facing",
                        "placed_at",
                        "legacy",
                        "detected",
                        "locked_at",
                    )
            ) {
              "frames schema mismatch"
            }
          }
      else -> error("unsupported frames database version $version")
    }
  }

  private fun transaction(block: () -> Unit) {
    db.autoCommit = false
    try {
      block()
      db.commit()
    } catch (e: Exception) {
      db.rollback()
      throw e
    } finally {
      db.autoCommit = true
    }
  }

  fun lockedOwners(): Map<UUID, UUID> =
      db.createStatement().use { s ->
        s.executeQuery("SELECT frame_uuid, owner_uuid FROM frames WHERE owner_uuid IS NOT NULL")
            .use { r ->
              buildMap {
                while (r.next()) put(
                    UUID.fromString(r.getString(1)),
                    UUID.fromString(r.getString(2)),
                )
              }
            }
      }

  fun lock(uuid: UUID, owner: UUID, world: UUID, worldName: String, x: Int, y: Int, z: Int) {
    db.prepareStatement(
            "INSERT INTO frames(frame_uuid,world,world_name,x,y,z,owner_uuid,locked_at) VALUES(?,?,?,?,?,?,?,CURRENT_TIMESTAMP) ON CONFLICT(frame_uuid) DO UPDATE SET world=excluded.world,world_name=excluded.world_name,x=excluded.x,y=excluded.y,z=excluded.z,owner_uuid=excluded.owner_uuid,locked_at=CURRENT_TIMESTAMP"
        )
        .use { s ->
          s.setString(1, uuid.toString())
          s.setString(2, world.toString())
          s.setString(3, worldName)
          s.setInt(4, x)
          s.setInt(5, y)
          s.setInt(6, z)
          s.setString(7, owner.toString())
          s.executeUpdate()
        }
  }

  fun unlock(uuid: UUID) = transaction {
    db.prepareStatement("DELETE FROM frames WHERE frame_uuid=? AND map_id IS NULL").use { s ->
      s.setString(1, uuid.toString())
      s.executeUpdate()
    }
    db.prepareStatement("UPDATE frames SET owner_uuid=NULL,locked_at=NULL WHERE frame_uuid=?")
        .use { s ->
          s.setString(1, uuid.toString())
          s.executeUpdate()
        }
  }

  fun saveFrames(frames: List<FrameRecord>) = transaction {
    db.prepareStatement(
            "INSERT INTO frames(frame_uuid,world,x,y,z,map_id,facing,placed_at,legacy,detected) VALUES(?,?,?,?,?,?,?,?,?,?) ON CONFLICT(frame_uuid) DO UPDATE SET world=excluded.world,x=excluded.x,y=excluded.y,z=excluded.z,map_id=excluded.map_id,facing=excluded.facing,placed_at=excluded.placed_at,legacy=excluded.legacy,detected=excluded.detected"
        )
        .use { s ->
          frames.forEach { f ->
            s.setString(1, f.uuid.toString())
            s.setString(2, f.world.toString())
            s.setInt(3, f.x)
            s.setInt(4, f.y)
            s.setInt(5, f.z)
            s.setInt(6, f.mapId)
            s.setString(7, f.facing)
            s.setLong(8, f.placedAt)
            s.setInt(9, if (f.legacy) 1 else 0)
            s.setInt(10, if (f.detected) 1 else 0)
            s.addBatch()
          }
          s.executeBatch()
        }
  }

  private val selection =
      "SELECT frame_uuid,map_id,world,x,y,z,facing,placed_at,legacy,detected FROM frames WHERE map_id IS NOT NULL"

  fun frame(uuid: UUID): FrameRecord? =
      db.prepareStatement("$selection AND frame_uuid=?").use { s ->
        s.setString(1, uuid.toString())
        s.executeQuery().use { r -> if (r.next()) readFrame(r) else null }
      }

  fun framesForMaps(ids: List<Int>): List<FrameRecord> {
    if (ids.isEmpty()) return emptyList()
    val placeholders = ids.joinToString(",") { "?" }
    return db.prepareStatement("$selection AND map_id IN ($placeholders) ORDER BY placed_at").use {
        s ->
      ids.forEachIndexed { i, id -> s.setInt(i + 1, id) }
      s.executeQuery().use { r -> buildList { while (r.next()) add(readFrame(r)) } }
    }
  }

  fun allFrames(): List<FrameRecord> =
      db.createStatement().use { s ->
        s.executeQuery(selection).use { r -> buildList { while (r.next()) add(readFrame(r)) } }
      }

  private fun readFrame(r: java.sql.ResultSet) =
      FrameRecord(
          UUID.fromString(r.getString(1)),
          r.getInt(2),
          UUID.fromString(r.getString(3)),
          r.getInt(4),
          r.getInt(5),
          r.getInt(6),
          r.getString(7),
          r.getLong(8),
          r.getInt(9) != 0,
          r.getInt(10) != 0,
      )

  fun deleteFrames(ids: List<UUID>) = transaction {
    db.prepareStatement("DELETE FROM frames WHERE frame_uuid=? AND owner_uuid IS NULL").use { s ->
      ids.forEach {
        s.setString(1, it.toString())
        s.addBatch()
      }
      s.executeBatch()
    }
    db.prepareStatement(
            "UPDATE frames SET map_id=NULL,facing=NULL,placed_at=NULL,legacy=0,detected=0 WHERE frame_uuid=?"
        )
        .use { s ->
          ids.forEach {
            s.setString(1, it.toString())
            s.addBatch()
          }
          s.executeBatch()
        }
  }

  override fun close() = db.close()
}
