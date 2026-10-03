package com.github.srain3.painttools.tools.configs

import java.awt.Color
import java.awt.image.BufferedImage
import java.io.ByteArrayInputStream
import java.io.ByteArrayOutputStream
import java.io.File
import java.sql.Connection
import java.sql.DriverManager
import java.util.concurrent.CompletableFuture
import java.util.concurrent.Executors
import javax.imageio.ImageIO

internal data class CanvasMetadata(
    val ids: Set<Int>,
    val existing: Set<Int>,
    val locked: Set<Int>,
    val lastId: Int,
)

/** Every method touching the connection runs on this one worker. */
internal class CanvasStore(private val file: File, private val blank: ByteArray) {
  private val worker = Executors.newSingleThreadExecutor { r -> Thread(r, "oyasai-frames-canvas") }
  private lateinit var db: Connection

  fun <T> submit(block: () -> T): CompletableFuture<T> =
      CompletableFuture.supplyAsync(block, worker)

  fun open(): CanvasMetadata {
    Class.forName("org.sqlite.JDBC")
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
    // v2 は ImageOnMap の animations 表を足しただけで、canvases は変わらない
    check(version in 1..2) { "unsupported pictures database version $version" }
    val ids = mutableSetOf<Int>()
    val existing = mutableSetOf<Int>()
    val locked = mutableSetOf<Int>()
    db.createStatement().use { s ->
      s.executeQuery("SELECT id,locked,registered FROM canvases").use { r ->
        while (r.next()) {
          existing.add(r.getInt(1))
          if (r.getInt(3) != 0) ids.add(r.getInt(1))
          if (r.getInt(2) != 0) locked.add(r.getInt(1))
        }
      }
    }
    val last =
        db.createStatement().use { s ->
          s.executeQuery("SELECT last_id FROM canvas_meta WHERE id=1").use { r ->
            check(r.next()) { "missing canvas metadata" }
            r.getInt(1)
          }
        }
    return CanvasMetadata(ids, existing, locked, last)
  }

  fun register(id: Int, lastId: Int) {
    db.autoCommit = false
    try {
      db.prepareStatement(
              "INSERT INTO canvases(id,registered) VALUES(?,1) ON CONFLICT(id) DO UPDATE SET registered=1"
          )
          .use { s ->
            s.setInt(1, id)
            s.executeUpdate()
          }
      db.prepareStatement("UPDATE canvas_meta SET last_id=? WHERE id=1").use { s ->
        s.setInt(1, lastId)
        s.executeUpdate()
      }
      db.commit()
    } catch (e: Exception) {
      db.rollback()
      throw e
    } finally {
      db.autoCommit = true
    }
  }

  fun setLocked(id: Int, locked: Boolean) {
    db.prepareStatement("UPDATE canvases SET locked=? WHERE id=?").use { s ->
      s.setInt(1, if (locked) 1 else 0)
      s.setInt(2, id)
      s.executeUpdate()
    }
  }

  fun load(id: Int): MutableMap<Int, Color> {
    val png =
        db.prepareStatement("SELECT png FROM canvases WHERE id=?").use { s ->
          s.setInt(1, id)
          s.executeQuery().use { r -> if (r.next()) r.getBytes(1) else null }
        } ?: blank
    val image = ImageIO.read(ByteArrayInputStream(png))
    check(image != null && image.width == 128 && image.height == 128) { "invalid canvas $id" }
    return buildMap {
          for (y in 0 until 128) for (x in 0 until 128) {
            val color = Color(image.getRGB(x, y), true)
            put(
                (x + 1) + y * 128,
                if (color.red == 1 && color.green == 1 && color.blue == 1) Color(1, 1, 1, 0)
                else color,
            )
          }
        }
        .toMutableMap()
  }

  fun save(id: Int, colors: Map<Int, Color>) {
    val image = BufferedImage(128, 128, BufferedImage.TYPE_INT_ARGB)
    for (y in 0 until 128) for (x in 0 until 128) {
      image.setRGB(x, y, colors[(x + 1) + y * 128]?.rgb ?: 0)
    }
    val out = ByteArrayOutputStream()
    check(ImageIO.write(image, "PNG", out))
    db.prepareStatement("UPDATE canvases SET png=? WHERE id=?").use { s ->
      s.setBytes(1, out.toByteArray())
      s.setInt(2, id)
      check(s.executeUpdate() == 1) { "unregistered canvas $id" }
    }
  }

  fun close() {
    submit { if (::db.isInitialized) db.close() }.join()
    worker.shutdown()
  }
}
