package icu.oyasai.imageonmap

import java.awt.image.BufferedImage
import java.io.ByteArrayOutputStream
import java.net.InetAddress
import java.nio.file.Files
import java.sql.DriverManager
import java.util.UUID
import javax.imageio.ImageIO
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFails
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertTrue
import org.bukkit.block.BlockFace

class ImageOnMapTest {
  private fun png(): ByteArray =
      ByteArrayOutputStream()
          .also { ImageIO.write(BufferedImage(128, 128, BufferedImage.TYPE_INT_ARGB), "png", it) }
          .toByteArray()

  @Test
  fun storePersistsAndRollsBack() {
    val dir = Files.createTempDirectory("imageonmap-test")
    val file = dir.resolve("image.db").toFile()
    val owner = UUID.randomUUID()
    val bytes = png()
    MapStore(file).use { store ->
      store.open()
      val id = store.create(owner, 2, 1, listOf(10, 11), listOf(bytes, bytes))
      assertEquals(listOf(10, 11), store.poster(id)?.ids)
      assertFails { store.create(owner, 2, 1, listOf(12, 10), listOf(bytes, bytes)) }
      assertNull(store.png(12))
      assertNotNull(store.png(10))
    }
    DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}").use { db ->
      db.prepareStatement("INSERT INTO maps(map_id,png) VALUES(?,?)").use { statement ->
        statement.setInt(1, 99)
        statement.setBytes(2, bytes)
        statement.executeUpdate()
      }
    }
    MapStore(file).use { store ->
      store.open()
      assertEquals(1, store.list(owner, 0).size)
      assertEquals(2, store.posterByMap(11)?.ids?.size)
      assertNotNull(store.png(99))
      assertNull(store.posterByMap(99))
    }
  }

  @Test
  fun unknownVersionIsRejected() {
    val file = Files.createTempFile("imageonmap-version", ".db").toFile()
    DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}").use {
      it.createStatement().execute("PRAGMA user_version=7")
    }
    MapStore(file).use { assertFails { it.open() } }
  }

  @Test
  fun addressRanges() {
    fun v4(a: Int, b: Int, c: Int, d: Int) =
        InetAddress.getByAddress(byteArrayOf(a.toByte(), b.toByte(), c.toByte(), d.toByte()))
    fun v6(vararg parts: Int) =
        InetAddress.getByAddress(
            ByteArray(16).also { bytes ->
              parts.forEachIndexed { i, value ->
                bytes[2 * i] = (value shr 8).toByte()
                bytes[2 * i + 1] = value.toByte()
              }
            }
        )
    val blocked =
        listOf(
            v4(127, 0, 0, 1),
            v4(0, 2, 3, 4),
            v4(10, 1, 2, 3),
            v4(172, 16, 1, 1),
            v4(192, 168, 1, 1),
            v4(169, 254, 5, 1),
            v4(100, 64, 0, 1),
            v4(100, 127, 255, 255),
            v4(224, 0, 0, 1),
            v6(0, 0, 0, 0, 0, 0, 0, 1),
            v6(0, 0, 0, 0, 0, 0, 0, 0),
            v6(0xfc00, 0, 0, 0, 0, 0, 0, 1),
            v6(0xfec0, 0, 0, 0, 0, 0, 0, 1),
            v6(0xfe80, 0, 0, 0, 0, 0, 0, 1),
            v6(0xff00, 0, 0, 0, 0, 0, 0, 1),
            v6(0, 0, 0, 0, 0, 0xffff, 0x7f00, 1),
            v6(0, 0, 0, 0, 0, 0xffff, 0x6440, 1),
        )
    blocked.forEach { assertTrue(ImageSource.forbidden(it)) }
    listOf(
            v4(8, 8, 8, 8),
            v4(1, 1, 1, 1),
            v4(100, 128, 0, 1),
            v6(0x2001, 0x4860, 0x4860, 0, 0, 0, 0, 0x8888),
        )
        .forEach { assertFalse(ImageSource.forbidden(it)) }
  }

  @Test
  fun sizingAndTiles() {
    assertEquals(2 to 3, ImageSource.dimensions(129, 257, null, false))
    val sized = ImageSource.dimensions(8192, 8192, null, false)
    assertTrue(sized.first * sized.second <= 100)
    assertEquals(3 to 2, ImageSource.dimensions(500, 100, 3 to 2, false))
    assertEquals(11 to 10, ImageSource.dimensions(100, 100, 11 to 10, true))
    val tiles =
        ImageSource.tiles(BufferedImage(500, 100, BufferedImage.TYPE_INT_ARGB), 3 to 2, false)
    assertEquals(6, tiles.pngs.size)
    assertEquals(128, ImageIO.read(tiles.pngs[0].inputStream()).width)
    val small = BufferedImage(2, 1, BufferedImage.TYPE_INT_ARGB)
    small.setRGB(0, 0, 0xffff0000.toInt())
    small.setRGB(1, 0, 0xffff0000.toInt())
    val resized = ImageIO.read(ImageSource.tiles(small, 1 to 1, false).pngs[0].inputStream())
    assertEquals(0, resized.getRGB(64, 0) ushr 24)
    assertEquals(255, resized.getRGB(64, 64) ushr 24)
    assertFails { ImageSource.dimensions(100, 100, 11 to 10, false) }
  }

  @Test
  fun posterOrder() {
    assertEquals(4, PosterFrames.mapIndex(3, 2, BlockFace.NORTH, 1, 0))
    assertEquals(1, PosterFrames.mapIndex(3, 2, BlockFace.NORTH, 1, 1))
    assertEquals(5, PosterFrames.mapIndex(3, 2, BlockFace.DOWN, 0, 0))
    assertEquals(2, PosterFrames.mapIndex(3, 2, BlockFace.DOWN, 0, 1))
  }

  @Test
  fun webpReader() {
    ImageSource.registerWebp()
    val bytes = javaClass.getResourceAsStream("/sample.webp")!!.readBytes()
    val picture = ImageSource.decode(bytes)
    assertEquals(2, picture.width)
    assertEquals(3, picture.height)
  }
}
