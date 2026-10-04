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
    const val PIXELS = 128 * 128
    private val PNG_SIGNATURE = byteArrayOf(-119, 80, 78, 71, 13, 10, 26, 10)

    // maps.png に PNG 署名があれば v2 の PNG、空でなければ従来の単独 zlib。
    // 空なら map_books.zlib の連結 zlib を maps.idx のタイル位置・順番から読む。
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

    fun compressBook(pixels: List<ByteArray>): ByteArray {
      require(pixels.isNotEmpty() && pixels.all { it.size == PIXELS })
      return ByteArrayOutputStream()
          .also { output ->
            DeflaterOutputStream(output).use { stream -> pixels.forEach(stream::write) }
          }
          .toByteArray()
    }

    // readNBytes は指定枚数で止まる。後続のコマを展開しない。
    fun fromBook(bytes: ByteArray, position: Int): MapTile {
      require(position >= 0)
      InflaterInputStream(ByteArrayInputStream(bytes)).use { stream ->
        for (i in 0..position) {
          val pixels = stream.readNBytes(PIXELS)
          require(pixels.size == PIXELS) { "地図の本が途中で終わりました" }
          if (i == position) return Colors(pixels)
        }
      }
      error("地図の本に位置がありません")
    }

    fun allFromBook(bytes: ByteArray, count: Int): List<MapTile> {
      require(count > 0)
      return InflaterInputStream(ByteArrayInputStream(bytes)).use { stream ->
        List(count) {
              val pixels = stream.readNBytes(PIXELS)
              require(pixels.size == PIXELS) { "地図の本が途中で終わりました" }
              Colors(pixels)
            }
            .also { require(stream.read() == -1) { "地図の本に余分なデータがあります" } }
      }
    }
  }
}
