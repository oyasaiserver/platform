package icu.oyasai.imageonmap

import java.io.File
import java.sql.Connection
import java.sql.DriverManager
import java.util.BitSet
import java.util.UUID

internal data class FrameRecord(
    val uuid: UUID,
    val mapId: Int,
    val world: UUID,
    val x: Int,
    val y: Int,
    val z: Int,
    val facing: String,
    val owner: UUID?,
    val placedAt: Long,
    val legacy: Boolean,
)

internal data class Poster(
    val id: Long,
    val name: String?,
    val columns: Int,
    val rows: Int,
    val ids: List<Int>,
) {
  init {
    require(columns > 0 && rows > 0 && ids.size == columns * rows)
  }
}

internal data class Listing(
    val id: Long,
    val name: String?,
    val columns: Int,
    val rows: Int,
    val firstMap: Int?,
    val owner: UUID,
    val hidden: Boolean,
)

internal data class ImageDetails(
    val id: Long,
    val owner: UUID,
    val columns: Int,
    val rows: Int,
    val createdAt: Long?,
    val hidden: Boolean,
    val mapIds: List<Int>,
)

/** All methods are called on the plugin's single database thread. */
internal class MapStore(private val file: File) : AutoCloseable {
  private lateinit var db: Connection

  fun open() {
    Class.forName("org.sqlite.JDBC")
    file.parentFile?.mkdirs()
    db = DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}")
    db.createStatement().use {
      it.execute("PRAGMA journal_mode=WAL")
      it.execute("PRAGMA synchronous=FULL")
      it.execute("PRAGMA busy_timeout=5000")
      it.execute("PRAGMA foreign_keys=ON")
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
        check(existing == 0) { "unversioned database is not empty" }
        transaction {
          db.createStatement().use { s ->
            s.execute(
                "CREATE TABLE images (id INTEGER PRIMARY KEY, owner TEXT NOT NULL, name TEXT, columns INTEGER NOT NULL, rows INTEGER NOT NULL, created_at INTEGER, hidden INTEGER NOT NULL DEFAULT 0)"
            )
            s.execute(
                "CREATE TABLE maps (map_id INTEGER PRIMARY KEY, image_id INTEGER REFERENCES images(id), idx INTEGER, png BLOB NOT NULL, UNIQUE(image_id, idx))"
            )
            s.execute("CREATE INDEX images_owner ON images(owner, hidden)")
            s.execute(
                "CREATE TABLE frames (frame_uuid TEXT PRIMARY KEY, map_id INTEGER NOT NULL, world TEXT NOT NULL, x INTEGER NOT NULL, y INTEGER NOT NULL, z INTEGER NOT NULL, facing TEXT NOT NULL, owner TEXT, placed_at INTEGER NOT NULL, legacy INTEGER NOT NULL DEFAULT 0)"
            )
            s.execute("CREATE INDEX frames_map ON frames(map_id)")
            s.execute("PRAGMA user_version = 1")
          }
        }
      }
      1 ->
          db.createStatement().use { s ->
            s.executeQuery(
                    "SELECT id, owner, name, columns, rows, created_at, hidden FROM images LIMIT 1"
                )
                .close()
            s.executeQuery("SELECT map_id, image_id, idx, png FROM maps LIMIT 1").close()
            s.executeQuery(
                    "SELECT frame_uuid,map_id,world,x,y,z,facing,owner,placed_at,legacy FROM frames LIMIT 1"
                )
                .close()
          }
      else -> error("unsupported image database version $version")
    }
  }

  private fun <T> transaction(block: () -> T): T {
    db.autoCommit = false
    try {
      val value = block()
      db.commit()
      return value
    } catch (e: Exception) {
      db.rollback()
      throw e
    } finally {
      db.autoCommit = true
    }
  }

  fun mapIds(): BitSet =
      BitSet().also { ids ->
        db.createStatement().use { s ->
          s.executeQuery("SELECT map_id FROM maps").use { r ->
            while (r.next()) ids.set(r.getInt(1))
          }
        }
      }

  fun saveFrames(frames: List<FrameRecord>) = transaction {
    db.prepareStatement(
            "INSERT OR IGNORE INTO frames(frame_uuid,map_id,world,x,y,z,facing,owner,placed_at,legacy) VALUES(?,?,?,?,?,?,?,?,?,?)"
        )
        .use { s ->
          frames.forEach { f ->
            s.setString(1, f.uuid.toString())
            s.setInt(2, f.mapId)
            s.setString(3, f.world.toString())
            s.setInt(4, f.x)
            s.setInt(5, f.y)
            s.setInt(6, f.z)
            s.setString(7, f.facing)
            s.setString(8, f.owner?.toString())
            s.setLong(9, f.placedAt)
            s.setInt(10, if (f.legacy) 1 else 0)
            s.addBatch()
          }
          s.executeBatch()
        }
  }

  fun frame(uuid: UUID): FrameRecord? =
      db.prepareStatement(
              "SELECT frame_uuid,map_id,world,x,y,z,facing,owner,placed_at,legacy FROM frames WHERE frame_uuid=?"
          )
          .use { s ->
            s.setString(1, uuid.toString())
            s.executeQuery().use { r -> if (r.next()) readFrame(r) else null }
          }

  fun framesForMaps(ids: List<Int>): List<FrameRecord> {
    if (ids.isEmpty()) return emptyList()
    val placeholders = ids.joinToString(",") { "?" }
    return db.prepareStatement(
            "SELECT frame_uuid,map_id,world,x,y,z,facing,owner,placed_at,legacy FROM frames WHERE map_id IN ($placeholders) ORDER BY placed_at"
        )
        .use { s ->
          ids.forEachIndexed { i, id -> s.setInt(i + 1, id) }
          s.executeQuery().use { r -> buildList { while (r.next()) add(readFrame(r)) } }
        }
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
          r.getString(8)?.let(UUID::fromString),
          r.getLong(9),
          r.getInt(10) != 0,
      )

  fun deleteFrames(ids: List<UUID>) = transaction {
    db.prepareStatement("DELETE FROM frames WHERE frame_uuid=?").use { s ->
      ids.forEach {
        s.setString(1, it.toString())
        s.addBatch()
      }
      s.executeBatch()
    }
  }

  fun png(mapId: Int): ByteArray? =
      db.prepareStatement("SELECT png FROM maps WHERE map_id=?").use { s ->
        s.setInt(1, mapId)
        s.executeQuery().use { r -> if (r.next()) r.getBytes(1) else null }
      }

  fun ownerByMap(mapId: Int): UUID? =
      db.prepareStatement(
              "SELECT i.owner FROM maps m JOIN images i ON i.id=m.image_id WHERE m.map_id=?"
          )
          .use { s ->
            s.setInt(1, mapId)
            s.executeQuery().use { r -> if (r.next()) UUID.fromString(r.getString(1)) else null }
          }

  fun create(owner: UUID, ids: List<Int>, pngs: List<ByteArray>): Long {
    require(ids.isNotEmpty() && ids.size == pngs.size)
    return create(owner, ids.size, 1, ids, pngs)
  }

  fun create(owner: UUID, columns: Int, rows: Int, ids: List<Int>, pngs: List<ByteArray>): Long {
    require(columns > 0 && rows > 0 && ids.size == columns * rows && ids.size == pngs.size)
    return transaction {
      val imageId =
          db.prepareStatement(
                  "INSERT INTO images(owner,columns,rows,created_at) VALUES(?,?,?,?)",
                  java.sql.Statement.RETURN_GENERATED_KEYS,
              )
              .use { s ->
                s.setString(1, owner.toString())
                s.setInt(2, columns)
                s.setInt(3, rows)
                s.setLong(4, System.currentTimeMillis())
                s.executeUpdate()
                s.generatedKeys.use { r ->
                  check(r.next())
                  r.getLong(1)
                }
              }
      db.prepareStatement("INSERT INTO maps(map_id,image_id,idx,png) VALUES(?,?,?,?)").use { s ->
        ids.forEachIndexed { i, id ->
          s.setInt(1, id)
          s.setLong(2, imageId)
          s.setInt(3, i)
          s.setBytes(4, pngs[i])
          s.executeUpdate()
        }
      }
      imageId
    }
  }

  fun posterByMap(mapId: Int): Poster? =
      db.prepareStatement("SELECT image_id FROM maps WHERE map_id=?").use { s ->
        s.setInt(1, mapId)
        s.executeQuery().use { r ->
          if (r.next()) r.getLong(1).takeUnless { r.wasNull() }?.let(::poster) else null
        }
      }

  fun poster(id: Long): Poster? {
    val image =
        db.prepareStatement("SELECT name,columns,rows FROM images WHERE id=?").use { s ->
          s.setLong(1, id)
          s.executeQuery().use { r ->
            if (r.next()) Triple(r.getString(1), r.getInt(2), r.getInt(3)) else null
          }
        } ?: return null
    val ids =
        db.prepareStatement("SELECT idx,map_id FROM maps WHERE image_id=? ORDER BY idx").use { s ->
          s.setLong(1, id)
          s.executeQuery().use { r ->
            buildList {
              while (r.next()) {
                if (r.getInt(1) != size) return null
                add(r.getInt(2))
              }
            }
          }
        }
    return runCatching { Poster(id, image.first, image.second, image.third, ids) }.getOrNull()
  }

  fun mapIndex(mapId: Int): Pair<Poster, Int>? =
      db.prepareStatement("SELECT image_id,idx FROM maps WHERE map_id=?").use { s ->
        s.setInt(1, mapId)
        s.executeQuery().use { r ->
          if (!r.next()) null
          else {
            val id = r.getLong(1)
            if (r.wasNull()) null else poster(id)?.let { it to r.getInt(2) }
          }
        }
      }

  fun list(owner: UUID, offset: Int): List<Listing> = listings(owner, offset, false)

  fun listings(owner: UUID?, offset: Int, includeHidden: Boolean = true): List<Listing> =
      db.prepareStatement(
              "SELECT i.id,i.name,i.columns,i.rows,m.map_id,i.owner,i.hidden FROM images i LEFT JOIN maps m ON m.image_id=i.id AND m.idx=0 WHERE (? IS NULL OR i.owner=?) AND (?=1 OR i.hidden=0) AND (?=1 OR m.map_id IS NOT NULL) ORDER BY i.id DESC LIMIT 45 OFFSET ?"
          )
          .use { s ->
            s.setString(1, owner?.toString())
            s.setString(2, owner?.toString())
            s.setInt(3, if (includeHidden) 1 else 0)
            s.setInt(4, if (includeHidden) 1 else 0)
            s.setInt(5, offset)
            s.executeQuery().use { r ->
              buildList {
                while (r.next()) add(
                    Listing(
                        r.getLong(1),
                        r.getString(2),
                        r.getInt(3),
                        r.getInt(4),
                        r.getInt(5).takeUnless { r.wasNull() },
                        UUID.fromString(r.getString(6)),
                        r.getInt(7) != 0,
                    )
                )
              }
            }
          }

  fun details(id: Long): ImageDetails? {
    val image =
        db.prepareStatement("SELECT owner,columns,rows,created_at,hidden FROM images WHERE id=?")
            .use { s ->
              s.setLong(1, id)
              s.executeQuery().use { r ->
                if (!r.next()) null
                else
                    ImageDetails(
                        id,
                        UUID.fromString(r.getString(1)),
                        r.getInt(2),
                        r.getInt(3),
                        r.getLong(4).takeUnless { r.wasNull() },
                        r.getInt(5) != 0,
                        emptyList(),
                    )
              }
            } ?: return null
    val ids =
        db.prepareStatement("SELECT map_id FROM maps WHERE image_id=? ORDER BY idx").use { s ->
          s.setLong(1, id)
          s.executeQuery().use { r -> buildList { while (r.next()) add(r.getInt(1)) } }
        }
    return image.copy(mapIds = ids)
  }

  fun detailsByMap(mapId: Int): Pair<ImageDetails, Int>? =
      db.prepareStatement("SELECT image_id,idx FROM maps WHERE map_id=?").use { s ->
        s.setInt(1, mapId)
        s.executeQuery().use { r ->
          if (!r.next()) null
          else
              r.getLong(1)
                  .takeUnless { r.wasNull() }
                  ?.let { id -> details(id)?.let { it to r.getInt(2) } }
        }
      }

  fun delete(id: Long): ImageDetails? = transaction {
    val image = details(id) ?: return@transaction null
    db.prepareStatement("DELETE FROM maps WHERE image_id=?").use { s ->
      s.setLong(1, id)
      s.executeUpdate()
    }
    db.prepareStatement("DELETE FROM images WHERE id=?").use { s ->
      s.setLong(1, id)
      s.executeUpdate()
    }
    image
  }

  fun hide(owner: UUID, id: Long) {
    db.prepareStatement("UPDATE images SET hidden=1 WHERE id=? AND owner=?").use { s ->
      s.setLong(1, id)
      s.setString(2, owner.toString())
      s.executeUpdate()
    }
  }

  override fun close() {
    if (::db.isInitialized) db.close()
  }
}
