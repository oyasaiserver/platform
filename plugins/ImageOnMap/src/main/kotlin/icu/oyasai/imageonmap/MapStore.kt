package icu.oyasai.imageonmap

import java.io.File
import java.sql.Connection
import java.sql.DriverManager
import java.util.UUID

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
    val firstMap: Int,
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
              s.executeQuery(
                      "SELECT COUNT(*) FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%'"
                  )
                  .use { r ->
                    r.next()
                    r.getInt(1)
                  }
            }
        check(existing == 0) { "unversioned database contains tables" }
        transaction {
          db.createStatement().use { s ->
            s.execute(
                "CREATE TABLE images (id INTEGER PRIMARY KEY, owner TEXT NOT NULL, name TEXT, columns INTEGER NOT NULL, rows INTEGER NOT NULL, created_at INTEGER, hidden INTEGER NOT NULL DEFAULT 0)"
            )
            s.execute(
                "CREATE TABLE maps (map_id INTEGER PRIMARY KEY, image_id INTEGER REFERENCES images(id), idx INTEGER, png BLOB NOT NULL, UNIQUE(image_id, idx))"
            )
            s.execute("CREATE INDEX images_owner ON images(owner, hidden)")
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

  fun png(mapId: Int): ByteArray? =
      db.prepareStatement("SELECT png FROM maps WHERE map_id=?").use { s ->
        s.setInt(1, mapId)
        s.executeQuery().use { r -> if (r.next()) r.getBytes(1) else null }
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

  fun list(owner: UUID, offset: Int): List<Listing> =
      db.prepareStatement(
              "SELECT i.id,i.name,i.columns,i.rows,m.map_id FROM images i JOIN maps m ON m.image_id=i.id AND m.idx=0 WHERE i.owner=? AND i.hidden=0 ORDER BY i.id DESC LIMIT 45 OFFSET ?"
          )
          .use { s ->
            s.setString(1, owner.toString())
            s.setInt(2, offset)
            s.executeQuery().use { r ->
              buildList {
                while (r.next()) add(
                    Listing(r.getLong(1), r.getString(2), r.getInt(3), r.getInt(4), r.getInt(5))
                )
              }
            }
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
