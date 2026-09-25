package icu.oyasai.imageonmap

import com.twelvemonkeys.imageio.plugins.webp.WebPImageReaderSpi
import java.awt.RenderingHints
import java.awt.image.BufferedImage
import java.io.ByteArrayInputStream
import java.io.ByteArrayOutputStream
import java.net.InetAddress
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.time.Duration
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import javax.imageio.ImageIO
import javax.imageio.spi.IIORegistry
import kotlin.math.ceil
import kotlin.math.min
import kotlin.math.sqrt

internal object ImageSource {
  private const val MAX_BYTES = 16 * 1024 * 1024
  private var webp: WebPImageReaderSpi? = null
  private val watchdog =
      Executors.newSingleThreadScheduledExecutor { r ->
        Thread(r, "imageonmap-timeout").apply { isDaemon = true }
      }
  private val client =
      HttpClient.newBuilder()
          .followRedirects(HttpClient.Redirect.NEVER)
          .proxy(HttpClient.Builder.NO_PROXY)
          .connectTimeout(Duration.ofSeconds(5))
          .build()

  fun registerWebp() {
    if (webp == null) {
      webp =
          WebPImageReaderSpi().also { IIORegistry.getDefaultInstance().registerServiceProvider(it) }
    }
  }

  fun close() {
    watchdog.shutdownNow()
    client.close()
    webp?.let { IIORegistry.getDefaultInstance().deregisterServiceProvider(it) }
    webp = null
  }

  fun forbidden(address: InetAddress): Boolean {
    val b = address.address
    if (
        b.size == 16 &&
            b.take(10).all { it == 0.toByte() } &&
            b[10].toInt() == -1 &&
            b[11].toInt() == -1
    ) {
      return forbidden(InetAddress.getByAddress(b.copyOfRange(12, 16)))
    }
    if (
        address.isAnyLocalAddress ||
            address.isLoopbackAddress ||
            address.isSiteLocalAddress ||
            address.isLinkLocalAddress ||
            address.isMulticastAddress
    )
        return true
    if (b.size == 4) {
      val a = b[0].toInt() and 255
      val c = b[1].toInt() and 255
      return a == 0 || (a == 100 && c in 64..127) || (a == 169 && c == 254)
    }
    return b.size == 16 && (b[0].toInt() and 0xfe) == 0xfc
  }

  private fun validate(uri: URI) {
    require(
        uri.scheme?.lowercase() in setOf("http", "https") &&
            uri.host != null &&
            uri.rawUserInfo == null
    ) {
      "HTTP(S) の直接リンクを指定してください"
    }
    val default = if (uri.scheme.equals("https", true)) 443 else 80
    require(uri.port == -1 || uri.port == default) { "標準以外のポートは使えません" }
    // ponytail: JDK の名前解決キャッシュ内では検査と接続が同じ IP になる前提。失効境界の差は許容し、接続先 IP の固定が必要なら OkHttp の Dns フックを使う。
    require(InetAddress.getAllByName(uri.host).all { !forbidden(it) }) { "接続できないアドレスです" }
  }

  private fun candidates(url: String): List<URI> {
    val uri = URI(url)
    validate(uri)
    if (uri.host.equals("imgur.com", true)) {
      if (uri.path.startsWith("/gallery/")) error("直接の画像リンクを使ってください")
      val id = uri.path.removePrefix("/")
      if (id.matches(Regex("[A-Za-z0-9]+")))
          return listOf("png", "jpg", "gif").map { URI("https://i.imgur.com/$id.$it") }
    }
    return listOf(uri)
  }

  fun fetch(url: String): BufferedImage {
    val deadline = System.nanoTime() + Duration.ofSeconds(20).toNanos()
    var last: Exception? = null
    for (start in candidates(url)) {
      try {
        var uri = start
        repeat(4) { hop ->
          validate(uri)
          val left = deadline - System.nanoTime()
          require(left > 0) { "取得がタイムアウトしました" }
          val request = HttpRequest.newBuilder(uri).timeout(Duration.ofNanos(left)).GET().build()
          val response = client.send(request, HttpResponse.BodyHandlers.ofInputStream())
          response.body().use { body ->
            val timeout =
                watchdog.schedule(
                    { body.close() },
                    (deadline - System.nanoTime()).coerceAtLeast(1),
                    TimeUnit.NANOSECONDS,
                )
            try {
              if (response.statusCode() in 300..399) {
                require(hop < 3) { "転送回数が多すぎます" }
                uri =
                    uri.resolve(
                        response.headers().firstValue("location").orElseThrow {
                          IllegalArgumentException("転送先がありません")
                        }
                    )
              } else {
                require(response.statusCode() == 200) { "画像を取得できませんでした (${response.statusCode()})" }
                val out = ByteArrayOutputStream()
                val buf = ByteArray(8192)
                while (true) {
                  require(System.nanoTime() < deadline) { "取得がタイムアウトしました" }
                  val n = body.read(buf)
                  if (n < 0) break
                  require(out.size() + n <= MAX_BYTES) { "画像が大きすぎます" }
                  out.write(buf, 0, n)
                }
                require(System.nanoTime() < deadline) { "取得がタイムアウトしました" }
                return decode(out.toByteArray())
              }
            } finally {
              timeout.cancel(false)
            }
          }
        }
      } catch (e: Exception) {
        last = e
      }
    }
    throw last ?: IllegalArgumentException("画像を取得できませんでした")
  }

  fun decode(bytes: ByteArray): BufferedImage {
    ImageIO.createImageInputStream(ByteArrayInputStream(bytes)).use { input ->
      val readers = ImageIO.getImageReaders(input)
      require(readers.hasNext()) { "対応していない画像形式です" }
      val reader = readers.next()
      try {
        reader.input = input
        val width = reader.getWidth(0)
        val height = reader.getHeight(0)
        require(width in 1..8192 && height in 1..8192 && width.toLong() * height <= 25_000_000) {
          "画像の寸法が大きすぎます"
        }
        return reader.read(0)
      } finally {
        reader.dispose()
      }
    }
  }

  data class Tiles(val columns: Int, val rows: Int, val pngs: List<ByteArray>)

  fun dimensions(
      width: Int,
      height: Int,
      resize: Pair<Int, Int>?,
      bypass: Boolean,
  ): Pair<Int, Int> {
    require(width > 0 && height > 0)
    if (resize != null) {
      require(resize.first > 0 && resize.second > 0) { "枚数は正の数にしてください" }
      require(bypass || resize.first.toLong() * resize.second <= 100) { "100 枚を超えています" }
      return resize
    }
    var scale = 1.0
    if (!bypass && ceil(width / 128.0) * ceil(height / 128.0) > 100) {
      scale = min(1.0, sqrt(100.0 * 128 * 128 / (width.toDouble() * height)))
      var low = 0.0
      var high = scale
      repeat(48) {
        val mid = (low + high) / 2
        if (ceil(width * mid / 128.0) * ceil(height * mid / 128.0) <= 100) low = mid else high = mid
      }
      scale = low
    }
    return ceil(width * scale / 128.0).toInt() to ceil(height * scale / 128.0).toInt()
  }

  fun tiles(source: BufferedImage, resize: Pair<Int, Int>?, bypass: Boolean): Tiles {
    val (cols, rows) = dimensions(source.width, source.height, resize, bypass)
    val maxWidth = cols * 128
    val maxHeight = rows * 128
    val scale =
        min(1.0, min(maxWidth.toDouble() / source.width, maxHeight.toDouble() / source.height))
    val width = (source.width * scale).toInt().coerceAtLeast(1)
    val height = (source.height * scale).toInt().coerceAtLeast(1)
    val canvas = BufferedImage(maxWidth, maxHeight, BufferedImage.TYPE_INT_ARGB)
    val g = canvas.createGraphics()
    g.setRenderingHint(RenderingHints.KEY_INTERPOLATION, RenderingHints.VALUE_INTERPOLATION_BICUBIC)
    val x = if (resize == null) 0 else (maxWidth - width) / 2
    val y = if (resize == null) 0 else (maxHeight - height) / 2
    g.drawImage(source, x, y, width, height, null)
    g.dispose()
    val pngs = buildList {
      for (row in 0 until rows) for (col in 0 until cols) {
        val tile = canvas.getSubimage(col * 128, row * 128, 128, 128)
        add(ByteArrayOutputStream().also { ImageIO.write(tile, "png", it) }.toByteArray())
      }
    }
    return Tiles(cols, rows, pngs)
  }
}
