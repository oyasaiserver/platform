package icu.oyasai.imageonmap

import java.awt.Color
import java.awt.image.BufferedImage
import java.io.ByteArrayOutputStream
import java.net.InetAddress
import java.nio.file.Files
import java.security.MessageDigest
import java.sql.DriverManager
import java.util.UUID
import javax.imageio.IIOImage
import javax.imageio.ImageIO
import javax.imageio.ImageTypeSpecifier
import javax.imageio.metadata.IIOMetadataNode
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFails
import kotlin.test.assertFalse
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertTrue
import org.bukkit.block.BlockFace
import org.bukkit.map.MapPalette

class ImageOnMapTest {
  @Test
  fun removedFrameDecision() {
    val gone = UUID.randomUUID()
    val unloaded = UUID.randomUUID()
    val returned = UUID.randomUUID()
    assertEquals(
        setOf(gone),
        removedFrames(setOf(gone, unloaded, returned), setOf(unloaded)) { it == returned },
    )
  }

  private fun png(): ByteArray =
      ByteArrayOutputStream()
          .also { ImageIO.write(BufferedImage(128, 128, BufferedImage.TYPE_INT_ARGB), "png", it) }
          .toByteArray()

  private fun legacyDatabase(file: java.io.File, version: Int, oldBookColumn: Boolean = false) {
    DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}").use { db ->
      db.createStatement().use { s ->
        s.execute(
            "CREATE TABLE images (id INTEGER PRIMARY KEY, owner TEXT NOT NULL, name TEXT, columns INTEGER NOT NULL, rows INTEGER NOT NULL, created_at INTEGER, hidden INTEGER NOT NULL DEFAULT 0)"
        )
        s.execute(
            "CREATE TABLE maps (map_id INTEGER PRIMARY KEY, image_id INTEGER REFERENCES images(id), idx INTEGER, png BLOB NOT NULL, UNIQUE(image_id, idx))"
        )
        s.execute(
            "CREATE TABLE canvases (id INTEGER PRIMARY KEY, png BLOB, locked INTEGER NOT NULL DEFAULT 0, registered INTEGER NOT NULL DEFAULT 1)"
        )
        s.execute(
            "CREATE TABLE canvas_meta (id INTEGER PRIMARY KEY CHECK(id=1), last_id INTEGER NOT NULL)"
        )
        s.execute("INSERT INTO canvas_meta(id,last_id) VALUES(1,0)")
        if (version == 2) {
          s.execute(
              "CREATE TABLE animations (image_id INTEGER PRIMARY KEY REFERENCES images(id), frames INTEGER NOT NULL, delays TEXT NOT NULL, slots TEXT NOT NULL)"
          )
          s.execute(
              "CREATE TABLE map_books (image_id INTEGER NOT NULL REFERENCES images(id), tile INTEGER NOT NULL, ${if (oldBookColumn) "zlib" else "data"} BLOB NOT NULL, PRIMARY KEY(image_id,tile))"
          )
        }
        s.execute("PRAGMA user_version=$version")
      }
    }
  }

  @Test
  fun animatedMapLimits() {
    assertTrue(exceedsLimit(0, 501, 500, false))
    assertFalse(exceedsLimit(0, 500, 500, false))
    assertFalse(exceedsLimit(0, 501, 500, true))
    assertTrue(exceedsLimit(1501, 500, 2000, false))
    assertFalse(exceedsLimit(1500, 500, 2000, false))
    assertFalse(exceedsLimit(2000, 500, 2000, true))
  }

  @Test
  fun viewerMapBudgetAdmitsNearbyImagesAndResets() {
    val budget = ViewerMapBudget()
    assertEquals(
        listOf(2L, 3L),
        budget.admitNearby(
            listOf(
                NearbyImage(1, 4, 30.0),
                NearbyImage(2, 3, 1.0),
                NearbyImage(3, 2, 10.0),
            ),
            5,
        ),
    )
    budget.delivered()
    assertEquals(1, budget.received)
    assertEquals(emptyList(), budget.admitNearby(listOf(NearbyImage(4, 1, 0.0)), 5))
    budget.reset()
    assertEquals(0, budget.received)
    assertEquals(listOf(4L), budget.admitNearby(listOf(NearbyImage(4, 5, 0.0)), 5))
    assertEquals(emptyList(), budget.admitNearby(listOf(NearbyImage(5, 1, 0.0)), 5))
  }

  @Test
  fun gifBypassRemovesTileAndFrameLimits() {
    val bytes = gif("none")
    assertFails { ImageSource.prepare(bytes, 2 to 1, false, 1, 1, 2) }
    val prepared = ImageSource.prepare(bytes, 2 to 1, true, 1, 1, 2)
    assertEquals(2 to 1, prepared.columns to prepared.rows)
    assertEquals(3, prepared.frames)
  }

  @Test
  fun animatedMapCountIncludesHiddenButNotStaticOrDeleted() {
    val file = Files.createTempDirectory("imageonmap-count").resolve("pictures.db").toFile()
    val owner = UUID.randomUUID()
    val other = UUID.randomUUID()
    val bytes = png()
    MapStore(file).use { store ->
      store.open()
      val animated =
          store.create(
              owner,
              1,
              1,
              listOf(1, 2),
              listOf(bytes, bytes),
              listOf(2, 2),
              listOf(0, 1),
              listOf(1, 2),
          )
      assertEquals(2, store.animatedMapCount(owner))
      store.hide(owner, animated)
      store.create(owner, listOf(3), listOf(bytes))
      store.create(
          other,
          1,
          1,
          listOf(4, 5),
          listOf(bytes, bytes),
          listOf(2, 2),
          listOf(0, 1),
          listOf(4, 5),
      )
      assertEquals(2, store.animatedMapCount(owner))
      store.delete(animated)
      assertEquals(0, store.animatedMapCount(owner))
    }
  }

  @Test
  fun commandRouting() {
    assertEquals(TomapAction.CREATE, tomapAction(listOf("https://")))
    assertEquals(
        TomapAction.CREATE,
        tomapAction(listOf("http://", "resize")),
    )
    assertEquals(TomapAction.LIST, tomapAction(listOf("list")))
    assertEquals(TomapAction.ALL, tomapAction(listOf("all")))
    assertEquals(TomapAction.INFO, tomapAction(listOf("info")))
    assertEquals(TomapAction.GIVE, tomapAction(listOf("give")))
    assertEquals(TomapAction.DELETE, tomapAction(listOf("delete")))
    assertEquals(TomapAction.RECOMPRESS, tomapAction(listOf("recompress", "all")))
    assertEquals(TomapAction.DEDUPE, tomapAction(listOf("dedupe")))
    assertEquals(TomapAction.REMOVE, tomapAction(listOf("remove")))
    assertEquals(TomapAction.WHERE, tomapAction(listOf("where")))
    assertEquals(TomapAction.USAGE, tomapAction(listOf("unknown")))
    assertEquals(TomapAction.USAGE, tomapAction(emptyList()))
  }

  @Test
  fun adminListingsAndDelete() {
    val file = Files.createTempDirectory("imageonmap-admin-test").resolve("image.db").toFile()
    val owner = UUID.randomUUID()
    val other = UUID.randomUUID()
    val bytes = png()
    MapStore(file).use { store ->
      store.open()
      val first = store.create(owner, 2, 1, listOf(1, 2), listOf(bytes, bytes))
      store.hide(owner, first)
      val later = (3..48).map { id -> store.create(other, listOf(id), listOf(bytes)) }
      assertTrue(store.list(owner, 0).isEmpty())
      assertEquals(listOf(first), store.listings(owner, 0).map { it.id })
      assertTrue(store.listings(owner, 0).single().hidden)
      assertEquals(later.last(), store.listings(null, 0).first().id)
      assertEquals(45, store.listings(null, 0).size)
      assertEquals(listOf(later.first(), first), store.listings(null, 45).map { it.id })
      assertEquals(listOf(1, 2), store.delete(first)?.mapIds)
      assertNull(store.poster(first))
      assertNull(store.png(1))
      assertNull(store.png(2))
      assertNotNull(store.png(3))
      assertNull(store.delete(first))
    }
  }

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
      assertTrue(store.tile(99) is MapTile.Png)
      assertNull(store.posterByMap(99))
    }
  }

  @Test
  fun frameRecordsAndMapIds() {
    val file = Files.createTempDirectory("imageonmap-frames").resolve("image.db").toFile()
    val owner = UUID.randomUUID()
    val frameId = UUID.randomUUID()
    val world = UUID.randomUUID()
    val bytes = png()
    MapStore(file).use { store ->
      store.open()
      val image = store.create(owner, 2, 1, listOf(4, 150000), listOf(bytes, bytes))
      assertTrue(store.mapIds()[4])
      assertTrue(store.mapIds()[150000])
      assertFalse(store.mapIds()[5])
      val frame = FrameRecord(frameId, 4, world, 1, 2, 3, "NORTH", 42, false)
      store.saveFrames(listOf(frame))
      val moved = frame.copy(mapId = 150000, x = 9)
      store.saveFrames(listOf(moved))
      assertEquals(moved, store.frame(frameId))
      assertEquals(listOf(moved), store.allFrames())
      assertEquals(listOf(moved), store.framesForMaps(listOf(4, 150000)))
      store.delete(image)
      assertEquals(moved, store.frame(frameId))
      store.deleteFrames(listOf(frameId))
      assertNull(store.frame(frameId))
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
    assertEquals(4 to 4, ImageSource.dimensions(498, 498, null, false))
    assertEquals(4 to 4, ImageSource.dimensions(512, 512, null, false))
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
    assertEquals(Triple(-1, 1, 0), PosterFrames.offset(BlockFace.NORTH, BlockFace.SOUTH, 1, 1))
    assertEquals(Triple(1, 0, -1), PosterFrames.offset(BlockFace.UP, BlockFace.NORTH, 1, 1))
    assertEquals(Triple(-1, 0, 1), PosterFrames.offset(BlockFace.DOWN, BlockFace.SOUTH, 1, 1))
  }

  @Test
  fun webpReader() {
    ImageSource.registerWebp()
    val bytes = javaClass.getResourceAsStream("/sample.webp")!!.readBytes()
    val picture = ImageSource.decode(bytes)
    assertEquals(2, picture.width)
    assertEquals(3, picture.height)
  }

  private fun gif(disposal: String): ByteArray {
    val writer = ImageIO.getImageWritersByFormatName("gif").next()
    val output = ByteArrayOutputStream()
    ImageIO.createImageOutputStream(output).use { stream ->
      writer.output = stream
      writer.prepareWriteSequence(null)
      val colors = listOf(0xffff0000.toInt(), 0xff0000ff.toInt(), 0xff00ff00.toInt())
      colors.forEachIndexed { i, color ->
        val image =
            BufferedImage(if (i == 0) 3 else if (i == 1) 2 else 1, 1, BufferedImage.TYPE_INT_ARGB)
        image.setRGB(if (i == 0) 0 else 0, 0, color)
        val metadata =
            writer.getDefaultImageMetadata(ImageTypeSpecifier.createFromRenderedImage(image), null)
        val root = metadata.getAsTree("javax_imageio_gif_image_1.0") as IIOMetadataNode
        val descriptor = root.getElementsByTagName("ImageDescriptor").item(0) as IIOMetadataNode
        descriptor.setAttribute("imageLeftPosition", i.toString())
        val control =
            root.getElementsByTagName("GraphicControlExtension").item(0) as IIOMetadataNode
        control.setAttribute("delayTime", if (i == 0) "1" else "5")
        control.setAttribute("disposalMethod", if (i == 1) disposal else "doNotDispose")
        control.setAttribute("transparentColorFlag", "TRUE")
        metadata.setFromTree("javax_imageio_gif_image_1.0", root)
        writer.writeToSequence(IIOImage(image, null, metadata), null)
      }
      writer.endWriteSequence()
    }
    writer.dispose()
    return output.toByteArray()
  }

  @Test
  fun gifCompositionAndDelays() {
    for (disposal in listOf("restoreToBackgroundColor", "restoreToPrevious")) {
      val result = ImageSource.prepare(gif(disposal), null, false, 16, 30, 2)
      assertEquals(1 to 1, result.columns to result.rows)
      assertEquals(listOf(2, 2, 2), result.delays)
      val second = (MapTile.fromStored(result.storedTiles[1]) as MapTile.Colors).pixels
      val third = (MapTile.fromStored(result.storedTiles[2]) as MapTile.Colors).pixels
      assertEquals(MapPalette.matchColor(Color.BLUE), second[1])
      assertEquals(MapPalette.matchColor(Color.RED), third[0])
      assertEquals(0, third[1].toInt(), disposal)
      assertEquals(MapPalette.matchColor(Color.GREEN), third[2])
    }
  }

  @Test
  fun animationTimingAndBaseIds() {
    val animation =
        Animation(
            8,
            2,
            1,
            listOf(10, 11, 20, 21, 30, 31),
            listOf(10, 11, 20, 21, 30, 31),
            listOf(2, 3, 2),
        )
    assertEquals(listOf(0, 0, 1, 1, 1, 2, 2, 0), (0L..7L).map(animation::frameAt))
    val index = AnimationIndex()
    index.add(animation)
    assertEquals(11, index.base(31))
    assertEquals(AnimationTile(8, 1, 2, 11), index.tile(31))
    index.remove(8)
    assertEquals(31, index.base(31))
  }

  @Test
  fun animationWaitsForEveryNearbyViewer() {
    val first = UUID.randomUUID()
    val second = UUID.randomUUID()
    val imageId = 8L
    val viewers = listOf(first, second)
    assertTrue(
        allNearbyReceived(
            imageId,
            viewers,
            mapOf(first to setOf(imageId), second to setOf(imageId)),
        )
    )
    assertFalse(allNearbyReceived(imageId, viewers, mapOf(first to setOf(imageId))))
  }

  @Test
  fun gifReusesTilesOnlyAtTheSamePositionAndPersistsSlots() {
    val writer = ImageIO.getImageWritersByFormatName("gif").next()
    val output = ByteArrayOutputStream()
    ImageIO.createImageOutputStream(output).use { stream ->
      writer.output = stream
      writer.prepareWriteSequence(null)
      listOf(
              0xffff0000.toInt() to 0xff0000ff.toInt(),
              0xffff0000.toInt() to 0xff00ff00.toInt(),
              0xff0000ff.toInt() to 0xff00ff00.toInt(),
          )
          .forEach { (left, right) ->
            val image = BufferedImage(256, 1, BufferedImage.TYPE_INT_ARGB)
            for (x in 0 until 256) image.setRGB(x, 0, if (x < 128) left else right)
            val metadata =
                writer.getDefaultImageMetadata(
                    ImageTypeSpecifier.createFromRenderedImage(image),
                    null,
                )
            val root = metadata.getAsTree("javax_imageio_gif_image_1.0") as IIOMetadataNode
            (root.getElementsByTagName("GraphicControlExtension").item(0) as IIOMetadataNode)
                .setAttribute("delayTime", "5")
            metadata.setFromTree("javax_imageio_gif_image_1.0", root)
            writer.writeToSequence(IIOImage(image, null, metadata), null)
          }
      writer.endWriteSequence()
    }
    writer.dispose()
    val prepared = ImageSource.prepare(output.toByteArray(), null, false, 16, 30, 2)
    assertEquals(2 to 1, prepared.columns to prepared.rows)
    assertEquals(listOf(0, 1, 3, 4), prepared.firstSlots)
    assertEquals(listOf(0, 1, 0, 2, 3, 2), prepared.slots)
    assertEquals(4, prepared.storedTiles.size)
    assertTrue(prepared.storedTiles[1].contentEquals(prepared.storedTiles[3]))

    val file = Files.createTempDirectory("imageonmap-slots").resolve("pictures.db").toFile()
    val owner = UUID.randomUUID()
    val ids = listOf(10, 11, 20, 21)
    val slots = prepared.slots.map(ids::get)
    val imageId =
        MapStore(file).use { store ->
          store.open()
          store.create(
              owner,
              2,
              1,
              ids,
              prepared.storedTiles,
              prepared.delays,
              prepared.firstSlots,
              slots,
          )
        }
    MapStore(file).use { store ->
      store.open()
      assertContentEquals(
          (MapTile.fromStored(prepared.storedTiles[0]) as MapTile.Colors).pixels,
          (store.tile(10) as MapTile.Colors).pixels,
      )
      val pushed = store.tilesForPush(imageId)
      assertEquals(ids.toSet(), pushed.keys)
      ids.forEachIndexed { index, mapId ->
        assertContentEquals(
            (MapTile.fromStored(prepared.storedTiles[index]) as MapTile.Colors).pixels,
            (pushed.getValue(mapId) as MapTile.Colors).pixels,
        )
      }
      val animation = store.animations().single()
      assertEquals(ids, animation.ids)
      assertEquals(slots, animation.slots)
      assertEquals(listOf(10, 11), store.poster(imageId)?.ids)
      assertEquals(1, store.mapIndex(20)?.second)
      val index = AnimationIndex()
      index.add(animation)
      assertEquals(11, index.base(20))
      assertEquals(10, index.base(21))
      assertEquals(AnimationTile(imageId, 1, 1, 11), index.tile(20))
      assertEquals(ids, store.delete(imageId)?.mapIds)
      assertNull(store.tile(10))
    }
    DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}").use { db ->
      db.createStatement().executeQuery("SELECT COUNT(*) FROM map_books").use {
        assertTrue(it.next())
        assertEquals(0, it.getInt(1))
      }
    }
  }

  @Test
  fun bookReadsFirstMiddleAndLastAndKeepsLegacyFormats() {
    val file = Files.createTempDirectory("imageonmap-books").resolve("pictures.db").toFile()
    val owner = UUID.randomUUID()
    val colors = List(3) { frame -> ByteArray(MapTile.PIXELS) { (it + frame).toByte() } }
    val png = png()
    legacyDatabase(file, 2, oldBookColumn = true)
    MapStore(file).use { store ->
      store.open()
      val id =
          store.create(
              owner,
              1,
              1,
              listOf(100, 101, 102),
              colors.map(MapTile::compress),
              listOf(2, 2, 2),
              slots = listOf(100, 101, 102),
          )
      colors.forEachIndexed { index, expected ->
        assertContentEquals(expected, (store.tile(100 + index) as MapTile.Colors).pixels)
      }
      assertEquals(setOf(100, 101, 102), store.tilesForPush(id).keys)
      assertTrue(store.storedBytes(id) > 0)
      assertContentEquals(byteArrayOf(), store.png(101))
      store.create(owner, listOf(200), listOf(png))
      store.create(owner, listOf(201), listOf(MapTile.compress(colors[0])))
      assertTrue(store.tile(200) is MapTile.Png)
      assertContentEquals(colors[0], (store.tile(201) as MapTile.Colors).pixels)
      assertEquals(listOf(100), store.poster(id)?.ids)
      assertEquals(listOf(100, 101, 102), store.delete(id)?.mapIds)
      assertNull(store.tile(101))
      assertFalse(store.mapIds()[100])
    }
    DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}").use { db ->
      db.createStatement().executeQuery("SELECT COUNT(*) FROM map_books").use {
        assertTrue(it.next())
        assertEquals(0, it.getInt(1))
      }
      db.createStatement().executeQuery("PRAGMA user_version").use {
        assertTrue(it.next())
        assertEquals(3, it.getInt(1))
      }
    }
  }

  @Test
  fun recompressLegacyAnimationPreservesMapColorsAndSkipsConvertedImages() {
    val file = Files.createTempDirectory("imageonmap-recompress").resolve("pictures.db").toFile()
    val ids = listOf(10, 11, 20, 21, 30, 31)
    val stored =
        ids.mapIndexed { index, _ ->
          if (index == 3) MapTile.compress(ByteArray(MapTile.PIXELS) { 42 })
          else
              ByteArrayOutputStream()
                  .also { output ->
                    val image = BufferedImage(128, 128, BufferedImage.TYPE_INT_ARGB)
                    image.setRGB(0, 0, Color(index * 30, 50, 100).rgb)
                    ImageIO.write(image, "png", output)
                  }
                  .toByteArray()
        }
    val expected =
        stored.map {
          when (val tile = MapTile.fromStored(it)) {
            is MapTile.Png -> MapTile.colors(tile.image)
            is MapTile.Colors -> tile.pixels
          }
        }
    MapStore(file).use { store ->
      store.open()
      val imageId = store.create(UUID.randomUUID(), 2, 1, ids.take(2), stored.take(2))
      DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}").use { db ->
        db.prepareStatement("INSERT INTO maps(map_id,image_id,idx,png) VALUES(?,?,?,?)").use { s ->
          (2 until ids.size).forEach { index ->
            s.setInt(1, ids[index])
            s.setLong(2, imageId)
            s.setInt(3, index)
            s.setBytes(4, stored[index])
            s.executeUpdate()
          }
        }
        db.prepareStatement("INSERT INTO animations(image_id,frames,delays,slots) VALUES(?,?,?,?)")
            .use { s ->
              s.setLong(1, imageId)
              s.setInt(2, 3)
              s.setString(3, "2,3,4")
              s.setString(4, ids.joinToString(","))
              s.executeUpdate()
            }
      }
      assertEquals(listOf(imageId), store.recompressCandidates())
      val originalAnimation = store.animations().single()
      val before = store.storedBytes(imageId)
      val result = store.recompressImage(imageId)
      assertNotNull(result)
      assertEquals(ids.size, result.maps)
      assertEquals(before, result.before)
      val pushed = store.tilesForPush(imageId)
      assertEquals(ids.size, pushed.size)
      ids.forEachIndexed { index, mapId ->
        assertContentEquals(expected[index], (store.tile(mapId) as MapTile.Colors).pixels)
        assertContentEquals(
            expected[index],
            (pushed.getValue(mapId) as MapTile.Colors).pixels,
        )
        assertContentEquals(byteArrayOf(), store.png(mapId))
      }
      assertEquals(originalAnimation, store.animations().single())
      assertEquals(emptyList(), store.recompressCandidates())
      assertNull(store.recompressImage(imageId))
      DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}").use { db ->
        db.createStatement()
            .executeQuery("SELECT COUNT(*) FROM map_books WHERE image_id=$imageId")
            .use { r ->
              assertTrue(r.next())
              assertEquals(2, r.getInt(1))
            }
      }
    }
  }

  @Test
  fun recompressVerificationFailureLeavesLegacyDataUntouched() {
    val file =
        Files.createTempDirectory("imageonmap-recompress-failure").resolve("pictures.db").toFile()
    val bytes = png()
    MapStore(file).use { store ->
      store.open()
      val imageId = store.create(UUID.randomUUID(), listOf(10), listOf(bytes))
      assertNull(store.recompressImage(imageId))
      DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}").use { db ->
        db.createStatement()
            .execute(
                "INSERT INTO animations(image_id,frames,delays,slots) VALUES($imageId,1,'2','10')"
            )
      }
      assertFails {
        store.recompressImage(imageId) { originals ->
          MapTile.compressBook(originals.map { ByteArray(MapTile.PIXELS) { 1 } })
        }
      }
      assertContentEquals(bytes, store.png(10))
      assertEquals(listOf(imageId), store.recompressCandidates())
      DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}").use { db ->
        db.createStatement()
            .executeQuery("SELECT COUNT(*) FROM map_books WHERE image_id=$imageId")
            .use { r ->
              assertTrue(r.next())
              assertEquals(0, r.getInt(1))
            }
      }
    }
  }

  @Test
  fun invalidAnimationSlotsAreRejected() {
    val file = Files.createTempDirectory("imageonmap-invalid-slots").resolve("pictures.db").toFile()
    val owner = UUID.randomUUID()
    val bytes = png()
    MapStore(file).use { store ->
      store.open()
      store.create(
          owner,
          2,
          1,
          listOf(10, 11, 20),
          listOf(bytes, bytes, bytes),
          listOf(2, 2),
          listOf(0, 1, 3),
          listOf(10, 11, 10, 20),
      )
      store.create(owner, listOf(30), listOf(bytes))
    }
    for (bad in listOf("10,11,20", "10,11,20,10", "10,11,10,30")) {
      DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}").use { db ->
        db.prepareStatement("UPDATE animations SET slots=? WHERE image_id=1").use {
          it.setString(1, bad)
          it.executeUpdate()
        }
      }
      MapStore(file).use { store ->
        store.open()
        assertFails { store.animations() }
      }
    }
  }

  @Test
  fun versionOneUpgradesAndKeepsPosters() {
    val file = Files.createTempDirectory("imageonmap-v1").resolve("pictures.db").toFile()
    val owner = UUID.randomUUID()
    val bytes = png()
    legacyDatabase(file, 1)
    DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}").use { db ->
      db.prepareStatement("INSERT INTO images(id,owner,columns,rows) VALUES(1,?,1,1)").use {
        it.setString(1, owner.toString())
        it.executeUpdate()
      }
      db.prepareStatement("INSERT INTO maps(map_id,image_id,idx,png) VALUES(10,1,0,?)").use {
        it.setBytes(1, bytes)
        it.executeUpdate()
      }
    }
    MapStore(file).use { store ->
      store.open()
      assertEquals(listOf(10), store.poster(1)?.ids)
      val id =
          store.create(
              owner,
              1,
              1,
              listOf(20, 30),
              listOf(bytes, bytes),
              listOf(2, 3),
              slots = listOf(20, 30),
          )
      assertEquals(listOf(20), store.poster(id)?.ids)
      assertEquals(listOf(20, 30), store.animations().single().ids)
      assertEquals(0, store.mapIndex(30)?.second)
      assertEquals(listOf(20, 30), store.delete(id)?.mapIds)
      assertTrue(store.animations().isEmpty())
    }
    DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}").use { db ->
      db.createStatement().executeQuery("PRAGMA user_version").use {
        assertTrue(it.next())
        assertEquals(3, it.getInt(1))
      }
    }
  }

  @Test
  fun newStaticMapsShareOneBlobAndDeleteOnlyWhenUnreferenced() {
    val file = Files.createTempDirectory("imageonmap-blobs").resolve("pictures.db").toFile()
    val bytes = png()
    MapStore(file).use { store ->
      store.open()
      val first = store.create(UUID.randomUUID(), listOf(10), listOf(bytes))
      val second = store.create(UUID.randomUUID(), listOf(11), listOf(bytes))
      fun state(): Pair<Int, Int> =
          DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}").use { db ->
            db.createStatement().use { s ->
              val blobs =
                  s.executeQuery("SELECT COUNT(*) FROM blobs").use {
                    it.next()
                    it.getInt(1)
                  }
              val refs =
                  s.executeQuery(
                          "SELECT COUNT(*) FROM maps WHERE length(png)=0 AND blob_hash IS NOT NULL"
                      )
                      .use {
                        it.next()
                        it.getInt(1)
                      }
              blobs to refs
            }
          }
      assertEquals(1 to 2, state())
      assertContentEquals(bytes, store.png(10))
      assertContentEquals(bytes, store.png(11))
      assertTrue(store.tile(10) is MapTile.Png)
      assertEquals(setOf(10), store.tilesForPush(first).keys)
      assertTrue(store.mapIds()[10] && store.mapIds()[11])
      store.delete(first)
      assertEquals(1 to 1, state())
      assertContentEquals(bytes, store.png(11))
      store.delete(second)
      assertEquals(0 to 0, state())
    }
  }

  @Test
  fun dedupeResumesAfterReopenAndKeepsBothLegacyFormats() {
    val file = Files.createTempDirectory("imageonmap-dedupe").resolve("pictures.db").toFile()
    val bytes = png()
    val colors = ByteArray(MapTile.PIXELS) { 7 }
    val compressed = MapTile.compress(colors)
    legacyDatabase(file, 2)
    DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}").use { db ->
      db.prepareStatement("INSERT INTO maps(map_id,png) VALUES(?,?)").use { s ->
        listOf(bytes, bytes, compressed).forEachIndexed { index, data ->
          s.setInt(1, index + 1)
          s.setBytes(2, data)
          s.executeUpdate()
        }
      }
    }
    MapStore(file).use { store ->
      store.open()
      assertEquals(DedupeBatch(1, bytes.size.toLong(), bytes.size.toLong()), store.dedupeBatch(1))
    }
    MapStore(file).use { store ->
      store.open()
      assertEquals(DedupeBatch(1, bytes.size.toLong(), 0), store.dedupeBatch(1))
      assertEquals(
          DedupeBatch(1, compressed.size.toLong(), compressed.size.toLong()),
          store.dedupeBatch(1),
      )
      assertEquals(DedupeBatch(0, 0, 0), store.dedupeBatch(1))
      assertContentEquals(bytes, store.png(1))
      assertContentEquals(bytes, store.png(2))
      assertContentEquals(colors, (store.tile(3) as MapTile.Colors).pixels)
      assertTrue(store.mapIds()[1] && store.mapIds()[2] && store.mapIds()[3])
    }
    DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}").use { db ->
      db.createStatement().use { s ->
        s.executeQuery("PRAGMA user_version").use {
          it.next()
          assertEquals(3, it.getInt(1))
        }
        s.executeQuery("SELECT COUNT(*),SUM(length(data)) FROM blobs").use {
          it.next()
          assertEquals(2, it.getInt(1))
          assertEquals(bytes.size + compressed.size, it.getInt(2))
        }
      }
    }
  }

  @Test
  fun dedupeBeforeRecompressConvertsAnimationAndReleasesBlob() {
    val file =
        Files.createTempDirectory("imageonmap-dedupe-animation").resolve("pictures.db").toFile()
    val bytes = png()
    legacyDatabase(file, 2)
    DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}").use { db ->
      db.createStatement()
          .execute("INSERT INTO images(id,owner,columns,rows) VALUES(1,'${UUID.randomUUID()}',1,1)")
      db.createStatement()
          .execute("INSERT INTO animations(image_id,frames,delays,slots) VALUES(1,1,'2','10')")
      db.prepareStatement("INSERT INTO maps(map_id,image_id,idx,png) VALUES(10,1,0,?)").use {
        it.setBytes(1, bytes)
        it.executeUpdate()
      }
    }
    MapStore(file).use { store ->
      store.open()
      assertEquals(1, store.dedupeBatch(1).maps)
      assertEquals(listOf(1L), store.recompressCandidates())
      assertNotNull(store.recompressImage(1))
      assertTrue(store.tile(10) is MapTile.Colors)
      assertContentEquals(byteArrayOf(), store.png(10))
      assertEquals(emptyList(), store.recompressCandidates())
    }
    DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}").use { db ->
      db.createStatement().executeQuery("SELECT COUNT(*) FROM blobs").use {
        it.next()
        assertEquals(0, it.getInt(1))
      }
    }
  }

  @Test
  fun mismatchedBlobDataRollsBackDedupeBatch() {
    val file = Files.createTempDirectory("imageonmap-collision").resolve("pictures.db").toFile()
    val bytes = png()
    MapStore(file).use { it.open() }
    DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}").use { db ->
      db.prepareStatement("INSERT INTO maps(map_id,png) VALUES(1,?)").use {
        it.setBytes(1, bytes)
        it.executeUpdate()
      }
      db.prepareStatement("INSERT INTO blobs(hash,data) VALUES(?,?)").use {
        it.setBytes(1, MessageDigest.getInstance("SHA-256").digest(bytes))
        it.setBytes(2, byteArrayOf(1, 2, 3))
        it.executeUpdate()
      }
    }
    MapStore(file).use { store ->
      store.open()
      assertFails { store.dedupeBatch(1) }
      assertContentEquals(bytes, store.png(1))
    }
    DriverManager.getConnection("jdbc:sqlite:${file.absolutePath}").use { db ->
      db.createStatement().executeQuery("SELECT blob_hash FROM maps WHERE map_id=1").use {
        it.next()
        assertNull(it.getBytes(1))
      }
    }
  }
}
