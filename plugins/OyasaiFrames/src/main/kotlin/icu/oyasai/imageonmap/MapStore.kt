package icu.oyasai.imageonmap

import icu.oyasai.frames.FrameStore
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
    val placedAt: Long,
    val legacy: Boolean,
    /** /tomap の設置や置き換えではなく、コピーなどを後から見つけて記録したもの */
    val detected: Boolean = false,
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

internal data class Animation(
    val imageId: Long,
    val columns: Int,
    val rows: Int,
    val ids: List<Int>,
    val slots: List<Int>,
    val delays: List<Int>,
) {
  val tiles: Int
    get() = columns * rows

  val frames: Int
    get() = delays.size

  fun frameAt(tick: Long): Int {
    var offset = (tick % delays.sum()).toInt()
    for (i in delays.indices) {
      if (offset < delays[i]) return i
      offset -= delays[i]
    }
    return 0
  }
}

internal data class AnimationTile(val imageId: Long, val tile: Int, val frame: Int, val baseId: Int)

internal class AnimationIndex {
  val animations = mutableMapOf<Long, Animation>()
  private val byMap = mutableMapOf<Int, AnimationTile>()

  fun add(animation: Animation) {
    animations[animation.imageId] = animation
    animation.slots.forEachIndexed { i, id ->
      byMap.putIfAbsent(
          id,
          AnimationTile(
              animation.imageId,
              i % animation.tiles,
              i / animation.tiles,
              animation.slots[i % animation.tiles],
          ),
      )
    }
  }

  fun remove(imageId: Long) {
    animations.remove(imageId)?.ids?.forEach(byMap::remove)
  }

  fun tile(mapId: Int): AnimationTile? = byMap[mapId]

  fun base(mapId: Int): Int = byMap[mapId]?.baseId ?: mapId
}

/** All methods are called on the plugin's single database thread. */
internal class MapStore(private val file: File) : AutoCloseable {
  private lateinit var db: Connection
  private lateinit var frames: FrameStore

  fun open() {
    frames = FrameStore(file.parentFile.resolve("frames.db"))
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
                "CREATE TABLE canvases (id INTEGER PRIMARY KEY, png BLOB, locked INTEGER NOT NULL DEFAULT 0, registered INTEGER NOT NULL DEFAULT 1)"
            )
            s.execute(
                "CREATE TABLE canvas_meta (id INTEGER PRIMARY KEY CHECK(id=1), last_id INTEGER NOT NULL)"
            )
            s.execute("INSERT INTO canvas_meta(id,last_id) VALUES(1,0)")
            s.execute(
                "CREATE TABLE animations (image_id INTEGER PRIMARY KEY REFERENCES images(id), frames INTEGER NOT NULL, delays TEXT NOT NULL, slots TEXT NOT NULL)"
            )
            s.execute("PRAGMA user_version = 2")
          }
        }
      }
      1,
      2 -> {
        db.createStatement().use { s ->
          s.executeQuery(
                  "SELECT id, owner, name, columns, rows, created_at, hidden FROM images LIMIT 1"
              )
              .close()
          s.executeQuery("SELECT map_id, image_id, idx, png FROM maps LIMIT 1").close()
          s.executeQuery("SELECT id,png,locked,registered FROM canvases LIMIT 1").close()
          s.executeQuery("SELECT last_id FROM canvas_meta WHERE id=1").use { r -> check(r.next()) }
        }
        if (version == 1)
            transaction {
              db.createStatement().use { s ->
                s.execute(
                    "CREATE TABLE animations (image_id INTEGER PRIMARY KEY REFERENCES images(id), frames INTEGER NOT NULL, delays TEXT NOT NULL, slots TEXT NOT NULL)"
                )
                s.execute("PRAGMA user_version = 2")
              }
            }
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

  fun animations(): List<Animation> =
      db.createStatement().use { s ->
        s.executeQuery(
                "SELECT a.image_id,i.columns,i.rows,a.frames,a.delays,a.slots FROM animations a JOIN images i ON i.id=a.image_id ORDER BY a.image_id"
            )
            .use { r ->
              buildList {
                while (r.next()) {
                  val id = r.getLong(1)
                  val columns = r.getInt(2)
                  val rows = r.getInt(3)
                  val count = r.getInt(4)
                  val delays = r.getString(5).split(',').map(String::toInt)
                  val slots = r.getString(6).split(',').map(String::toInt)
                  val maps =
                      db.prepareStatement(
                              "SELECT map_id,idx FROM maps WHERE image_id=? ORDER BY idx"
                          )
                          .use { m ->
                            m.setLong(1, id)
                            m.executeQuery().use { maps ->
                              buildMap { while (maps.next()) put(maps.getInt(1), maps.getInt(2)) }
                            }
                          }
                  val firstSlots = mutableMapOf<Int, Int>()
                  slots.forEachIndexed { slot, mapId -> firstSlots.putIfAbsent(mapId, slot) }
                  check(
                      columns > 0 &&
                          rows > 0 &&
                          count > 0 &&
                          count == delays.size &&
                          delays.all { it > 0 } &&
                          slots.size.toLong() == count.toLong() * columns * rows &&
                          maps == firstSlots &&
                          slots.withIndex().all { (slot, mapId) ->
                            val first = maps[mapId]
                            first != null && first % (columns * rows) == slot % (columns * rows)
                          } &&
                          slots.take(columns * rows).withIndex().all { (slot, mapId) ->
                            maps[mapId] == slot
                          }
                  ) {
                    "invalid animation $id"
                  }
                  add(Animation(id, columns, rows, maps.keys.toList(), slots, delays))
                }
              }
            }
      }

  fun saveFrames(records: List<FrameRecord>) = frames.saveFrames(records)

  fun frame(uuid: UUID): FrameRecord? = frames.frame(uuid)

  fun framesForMaps(ids: List<Int>): List<FrameRecord> = frames.framesForMaps(ids)

  fun allFrames(): List<FrameRecord> = frames.allFrames()

  fun deleteFrames(ids: List<UUID>) = frames.deleteFrames(ids)

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

  fun create(
      owner: UUID,
      columns: Int,
      rows: Int,
      ids: List<Int>,
      pngs: List<ByteArray>,
      delays: List<Int> = emptyList(),
      firstSlots: List<Int> = ids.indices.toList(),
      slots: List<Int> = emptyList(),
  ): Long {
    val firstById = mutableMapOf<Int, Int>()
    slots.forEachIndexed { slot, mapId -> firstById.putIfAbsent(mapId, slot) }
    require(
        columns > 0 &&
            rows > 0 &&
            ids.size == pngs.size &&
            ids.size == firstSlots.size &&
            (if (delays.isEmpty()) ids.size == columns * rows && slots.isEmpty()
            else
                slots.size.toLong() == delays.size.toLong() * columns * rows &&
                    firstSlots.all { it in slots.indices } &&
                    slots.take(columns * rows) == ids.take(columns * rows) &&
                    firstById.size == ids.size &&
                    ids.indices.all { i -> firstById[ids[i]] == firstSlots[i] } &&
                    slots.withIndex().all { (slot, mapId) ->
                      firstById[mapId]!! % (columns * rows) == slot % (columns * rows)
                    })
    )
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
          s.setInt(3, firstSlots[i])
          s.setBytes(4, pngs[i])
          s.executeUpdate()
        }
      }
      if (delays.isNotEmpty())
          db.prepareStatement(
                  "INSERT INTO animations(image_id,frames,delays,slots) VALUES(?,?,?,?)"
              )
              .use { s ->
                s.setLong(1, imageId)
                s.setInt(2, delays.size)
                s.setString(3, delays.joinToString(","))
                s.setString(4, slots.joinToString(","))
                s.executeUpdate()
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
        db.prepareStatement("SELECT idx,map_id FROM maps WHERE image_id=? AND idx < ? ORDER BY idx")
            .use { s ->
              s.setLong(1, id)
              s.setInt(2, image.second * image.third)
              s.executeQuery().use { r ->
                buildList {
                  while (r.next()) {
                    if (r.getInt(1) != size) break
                    add(r.getInt(2))
                  }
                }
              }
            }
    return runCatching { Poster(id, image.first, image.second, image.third, ids) }.getOrNull()
  }

  fun mapIndex(mapId: Int): Pair<Poster, Int>? =
      db.prepareStatement(
              "SELECT m.image_id,m.idx % (i.columns*i.rows) FROM maps m JOIN images i ON i.id=m.image_id WHERE m.map_id=?"
          )
          .use { s ->
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
    db.prepareStatement("DELETE FROM animations WHERE image_id=?").use { s ->
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
    if (::frames.isInitialized) frames.close()
  }
}
