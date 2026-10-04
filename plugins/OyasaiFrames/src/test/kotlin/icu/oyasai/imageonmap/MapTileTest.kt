package icu.oyasai.imageonmap

import java.awt.Color
import java.awt.Image
import java.awt.image.BufferedImage
import java.io.ByteArrayOutputStream
import java.lang.reflect.Proxy
import javax.imageio.IIOImage
import javax.imageio.ImageIO
import kotlin.test.Test
import kotlin.test.assertContentEquals
import kotlin.test.assertEquals
import kotlin.test.assertFails
import kotlin.test.assertIs
import kotlin.test.assertTrue
import kotlin.time.measureTimedValue
import org.bukkit.map.MapCanvas
import org.bukkit.map.MapPalette

class MapTileTest {
  private fun png(image: BufferedImage): ByteArray =
      ByteArrayOutputStream().also { ImageIO.write(image, "png", it) }.toByteArray()

  @Test
  fun compressedColorsAndPngAreDistinguished() {
    val pixels = ByteArray(128 * 128) { (it % 248).toByte() }
    val stored = MapTile.compress(pixels)
    assertContentEquals(pixels, assertIs<MapTile.Colors>(MapTile.fromStored(stored)).pixels)
    assertIs<MapTile.Png>(
        MapTile.fromStored(png(BufferedImage(128, 128, BufferedImage.TYPE_INT_ARGB)))
    )
    assertFails { MapTile.compress(byteArrayOf(0)) }
    assertFails { MapTile.fromStored(MapTile.compress(ByteArray(128 * 128)).copyOf(4)) }
  }

  @Test
  fun xzBooksMeasure396SlowlyChangingMaps() {
    val books =
        List(9) { tile ->
          val first =
              ByteArray(MapTile.PIXELS) { i ->
                val x = i % 128
                val y = i / 128
                ((x * 17 + y * 29 + x * y / 3 + (x * x + y * y) / 11 + tile * 13) % 128).toByte()
              }
          List(44) { frame ->
            first.copyOf().also { pixels ->
              for (change in 0 until frame * 32) {
                val index = (change * 131 + tile * 17) % pixels.size
                pixels[index] = (pixels[index] + 1).toByte()
              }
            }
          }
        }
    val (compressed, compressionTime) = measureTimedValue { books.map(MapTile::compressBook) }
    val (expanded, expansionTime) =
        measureTimedValue { compressed.map { MapTile.allFromBook(it, 44) } }
    books.zip(expanded).forEach { (expected, actual) ->
      expected.zip(actual).forEach { (pixels, tile) ->
        assertContentEquals(pixels, (tile as MapTile.Colors).pixels)
      }
    }
    println(
        "XZ books 396 maps: compressedBytes=${compressed.sumOf { it.size }}, compressionMs=${compressionTime.inWholeMilliseconds}, expansionMs=${expansionTime.inWholeMilliseconds}"
    )
  }

  @Test
  fun xzBookChecksTailWhenFullyReadButAllowsEarlyTileRead() {
    val first = ByteArray(MapTile.PIXELS) { (it % 128).toByte() }
    val packed = MapTile.compressBook(listOf(first, first))
    val corrupted = packed.copyOf().also { it[it.lastIndex] = (it.last() + 1).toByte() }
    assertContentEquals(first, (MapTile.fromBook(corrupted, 0) as MapTile.Colors).pixels)
    assertFails { MapTile.allFromBook(corrupted, 2) }
  }

  private fun drawnPixels(tile: MapTile): ByteArray {
    val pixels = ByteArray(128 * 128)
    val canvas =
        Proxy.newProxyInstance(MapCanvas::class.java.classLoader, arrayOf(MapCanvas::class.java)) {
            _,
            method,
            args ->
          when (method.name) {
            "drawImage" -> {
              val colors = MapPalette.imageToBytes(args[2] as Image)
              for (y in 0 until 128) for (x in 0 until 128) pixels[y * 128 + x] =
                  colors[y * 128 + x]
            }
            "setPixel" -> {
              pixels[(args[1] as Int) * 128 + (args[0] as Int)] = args[2] as Byte
            }
            else -> error("Unexpected canvas call: ${method.name}")
          }
          null
        } as MapCanvas
    tile.draw(canvas)
    return pixels
  }

  @Test
  fun pngAndColorsDrawTheSamePixelsIncludingTransparency() {
    val image = BufferedImage(128, 128, BufferedImage.TYPE_INT_ARGB)
    for (y in 0 until 128) for (x in 0 until 128) {
      image.setRGB(x, y, Color(x * 2, y * 2, (x + y) % 256, 255).rgb)
    }
    image.setRGB(0, 0, 0x00ff0000)
    image.setRGB(1, 0, 0x7fff0000)
    image.setRGB(2, 0, 0x80ff0000.toInt())
    val png = png(image)
    val colors = MapTile.colors(image)
    val compressed = MapTile.compress(colors)
    val fromPng = drawnPixels(MapTile.fromStored(png))
    val fromColors = drawnPixels(MapTile.fromStored(compressed))
    assertContentEquals(fromPng, fromColors)
    assertEquals(0, fromColors[0].toInt())
    assertEquals(0, fromColors[1].toInt())
    assertTrue(fromColors[2].toInt() != 0)
    println("MapTile sample: pngBytes=${png.size} storedBytes=${compressed.size}")
  }

  @Test
  fun gifReusesDifferentRgbTilesWithTheSameMapColors() {
    val shades = listOf(0xfff00000.toInt(), 0xfff10000.toInt())
    assertEquals(MapPalette.matchColor(Color(shades[0])), MapPalette.matchColor(Color(shades[1])))
    val writer = ImageIO.getImageWritersByFormatName("gif").next()
    val output = ByteArrayOutputStream()
    ImageIO.createImageOutputStream(output).use { stream ->
      writer.output = stream
      writer.prepareWriteSequence(null)
      shades.forEach { shade ->
        val image = BufferedImage(1, 1, BufferedImage.TYPE_INT_ARGB)
        image.setRGB(0, 0, shade)
        writer.writeToSequence(IIOImage(image, null, null), null)
      }
      writer.endWriteSequence()
    }
    writer.dispose()
    val prepared = ImageSource.prepare(output.toByteArray(), null, false, 16, 30, 2)
    assertEquals(2, prepared.frames)
    assertEquals(1, prepared.storedTiles.size)
    assertEquals(listOf(0, 0), prepared.slots)
  }
}
