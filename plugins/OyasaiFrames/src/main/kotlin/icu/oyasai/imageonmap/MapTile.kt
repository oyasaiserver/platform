package icu.oyasai.imageonmap

import java.awt.image.BufferedImage
import java.io.ByteArrayInputStream
import java.io.ByteArrayOutputStream
import java.util.zip.DeflaterOutputStream
import java.util.zip.InflaterInputStream
import javax.imageio.ImageIO
import org.bukkit.map.MapCanvas
import org.bukkit.map.MapPalette

internal sealed interface MapTile {
  fun draw(canvas: MapCanvas)

  data class Png(val image: BufferedImage) : MapTile {
    override fun draw(canvas: MapCanvas) = canvas.drawImage(0, 0, image)
  }

  data class Colors(val pixels: ByteArray) : MapTile {
    override fun draw(canvas: MapCanvas) {
      for (index in pixels.indices) canvas.setPixel(index % 128, index / 128, pixels[index])
    }
  }

  companion object {
    private const val PIXELS = 128 * 128
    private val PNG_SIGNATURE = byteArrayOf(-119, 80, 78, 71, 13, 10, 26, 10)

    // ponytail: maps.png は PNG 署名なら従来の画像、それ以外なら zlib 圧縮した地図の色番号。
    fun fromStored(bytes: ByteArray): MapTile {
      if (
          bytes.size >= PNG_SIGNATURE.size &&
              bytes.copyOfRange(0, PNG_SIGNATURE.size).contentEquals(PNG_SIGNATURE)
      ) {
        val image = ImageIO.read(ByteArrayInputStream(bytes)) ?: error("PNG を読めません")
        require(image.width == 128 && image.height == 128) { "地図の寸法が不正です" }
        return Png(image)
      }
      val pixels =
          InflaterInputStream(ByteArrayInputStream(bytes)).use { it.readNBytes(PIXELS + 1) }
      require(pixels.size == PIXELS) { "地図の色番号の長さが不正です" }
      return Colors(pixels)
    }

    // CraftMapCanvas.drawImage も 128×128 の画像にこの変換を使う。
    fun colors(image: BufferedImage): ByteArray = MapPalette.imageToBytes(image)

    fun compress(pixels: ByteArray): ByteArray {
      require(pixels.size == PIXELS) { "地図の色番号の長さが不正です" }
      return ByteArrayOutputStream()
          .also { output -> DeflaterOutputStream(output).use { it.write(pixels) } }
          .toByteArray()
    }
  }
}
