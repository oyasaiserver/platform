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
import java.util.concurrent.CompletableFuture
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import java.util.concurrent.TimeoutException
import javax.imageio.ImageIO
import javax.imageio.metadata.IIOMetadataNode
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

  private fun validateUri(uri: URI) {
    require(
        uri.scheme?.lowercase() in setOf("http", "https") &&
            uri.host != null &&
            uri.rawUserInfo == null
    ) {
      "HTTP(S) の直接リンクを指定してください"
    }
    val default = if (uri.scheme.equals("https", true)) 443 else 80
    require(uri.port == -1 || uri.port == default) { "標準以外のポートは使えません" }
  }

  private fun validate(uri: URI) {
    validateUri(uri)
    // ponytail: JDK の名前解決キャッシュ（既定30秒）で検査と接続は同じ IP とみなす。失効境界の差は許容し、画像として読めない応答は捨てる。接続 IP を固定するなら
    // OkHttp の Dns フック。
    require(InetAddress.getAllByName(uri.host).all { !forbidden(it) }) { "接続できないアドレスです" }
  }

  private fun candidates(url: String): List<URI> {
    val uri = URI(url)
    validateUri(uri)
    if (uri.host.equals("imgur.com", true)) {
      if (uri.path.startsWith("/gallery/")) error("直接の画像リンクを使ってください")
      val id = uri.path.removePrefix("/")
      if (id.matches(Regex("[A-Za-z0-9]+")))
          return listOf("png", "jpg", "gif").map { URI("https://i.imgur.com/$id.$it") }
    }
    return listOf(uri)
  }

  fun fetch(url: String): ByteArray {
    val deadline = System.nanoTime() + Duration.ofSeconds(20).toNanos()
    var last: Exception? = null
    for (start in candidates(url)) {
      try {
        var uri = start
        repeat(4) { hop ->
          val target = uri
          val left = deadline - System.nanoTime()
          require(left > 0) { "取得がタイムアウトしました" }
          val resolved = CompletableFuture.runAsync { validate(target) }
          try {
            resolved.get(left, TimeUnit.NANOSECONDS)
          } catch (e: TimeoutException) {
            resolved.cancel(true)
            throw IllegalArgumentException("取得がタイムアウトしました")
          }
          val remaining = deadline - System.nanoTime()
          require(remaining > 0) { "取得がタイムアウトしました" }
          val request =
              HttpRequest.newBuilder(target)
                  .timeout(Duration.ofNanos(remaining))
                  // Wikimedia などは Java 既定の User-Agent を 403 で断る
                  .header("User-Agent", "OyasaiFrames/6.0 (Minecraft server image import)")
                  .GET()
                  .build()
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
                return out.toByteArray()
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

  data class Prepared(
      val columns: Int,
      val rows: Int,
      val pngs: List<ByteArray>,
      val delays: List<Int>,
      val firstSlots: List<Int> = pngs.indices.toList(),
      val slots: List<Int> = emptyList(),
  ) {
    val frames: Int
      get() = if (delays.isEmpty()) 1 else delays.size
  }

  private fun node(root: IIOMetadataNode, name: String): IIOMetadataNode? =
      (0 until root.length)
          .asSequence()
          .map { root.item(it) as IIOMetadataNode }
          .firstOrNull { it.nodeName == name }

  private fun attr(node: IIOMetadataNode, name: String): Int = node.getAttribute(name).toInt()

  fun prepare(
      bytes: ByteArray,
      resize: Pair<Int, Int>?,
      bypass: Boolean,
      maxTiles: Int,
      maxFrames: Int,
      minDelayTicks: Int,
  ): Prepared {
    ImageIO.createImageInputStream(ByteArrayInputStream(bytes)).use { input ->
      val readers = ImageIO.getImageReaders(input)
      require(readers.hasNext()) { "対応していない画像形式です" }
      val reader = readers.next()
      try {
        reader.input = input
        val count = if (reader.formatName.equals("gif", true)) reader.getNumImages(true) else 1
        if (count < 2) {
          val picture = decode(bytes)
          val result = tiles(picture, resize, bypass)
          return Prepared(result.columns, result.rows, result.pngs, emptyList())
        }
        require(count <= maxFrames) { "コマ数が多すぎます（$count コマ、上限 $maxFrames）" }
        val screen =
            reader.streamMetadata.getAsTree("javax_imageio_gif_stream_1.0") as IIOMetadataNode
        val logical = node(screen, "LogicalScreenDescriptor") ?: error("GIF の画面サイズがありません")
        val width = attr(logical, "logicalScreenWidth")
        val height = attr(logical, "logicalScreenHeight")
        val palette = node(screen, "GlobalColorTable")
        val backgroundIndex = palette?.getAttribute("backgroundColorIndex")?.toIntOrNull()
        val background =
            (0 until (palette?.length ?: 0))
                .asSequence()
                .map { palette!!.item(it) as IIOMetadataNode }
                .firstOrNull {
                  it.nodeName == "ColorTableEntry" &&
                      it.getAttribute("index").toIntOrNull() == backgroundIndex
                }
                ?.let { java.awt.Color(attr(it, "red"), attr(it, "green"), attr(it, "blue")) }
        require(width in 1..8192 && height in 1..8192 && width.toLong() * height <= 25_000_000) {
          "画像の寸法が大きすぎます"
        }
        val (cols, rows) = dimensions(width, height, resize, false, maxTiles)
        val canvas = BufferedImage(width, height, BufferedImage.TYPE_INT_ARGB)
        val pngs = ArrayList<ByteArray>()
        val firstSlots = ArrayList<Int>()
        val slots = ArrayList<Int>(count * cols * rows)
        val seen = List(cols * rows) { mutableMapOf<Int, MutableList<Int>>() }
        val delays = ArrayList<Int>(count)
        var previous: BufferedImage? = null
        for (i in 0 until count) {
          val metadata =
              reader.getImageMetadata(i).getAsTree("javax_imageio_gif_image_1.0") as IIOMetadataNode
          val descriptor = node(metadata, "ImageDescriptor") ?: error("GIF のコマ情報がありません")
          val control = node(metadata, "GraphicControlExtension") ?: error("GIF の遅延がありません")
          val x = attr(descriptor, "imageLeftPosition")
          val y = attr(descriptor, "imageTopPosition")
          val w = attr(descriptor, "imageWidth")
          val h = attr(descriptor, "imageHeight")
          require(
              x >= 0 &&
                  y >= 0 &&
                  w > 0 &&
                  h > 0 &&
                  x.toLong() + w <= width &&
                  y.toLong() + h <= height
          ) {
            "GIF のコマが画面外です"
          }
          val disposal = control.getAttribute("disposalMethod")
          if (disposal == "restoreToPrevious") {
            previous = BufferedImage(width, height, BufferedImage.TYPE_INT_ARGB)
            previous.createGraphics().apply {
              drawImage(canvas, 0, 0, null)
              dispose()
            }
          }
          val frame = reader.read(i)
          canvas.createGraphics().apply {
            drawImage(frame, x, y, null)
            dispose()
          }
          tiles(canvas, resize, false, maxTiles).pngs.forEachIndexed { tile, png ->
            val candidates = seen[tile].getOrPut(png.contentHashCode()) { mutableListOf() }
            val existing = candidates.firstOrNull { pngs[it].contentEquals(png) }
            val index =
                existing
                    ?: pngs.size.also {
                      pngs.add(png)
                      firstSlots.add(slots.size)
                      candidates.add(it)
                    }
            slots.add(index)
          }
          val hundredths = attr(control, "delayTime").let { if (it <= 1) 10 else it }
          delays.add(((hundredths + 2) / 5).coerceAtLeast(minDelayTicks))
          when (disposal) {
            "restoreToBackgroundColor" ->
                canvas.createGraphics().apply {
                  val transparentBackground =
                      control.getAttribute("transparentColorFlag").equals("true", true)
                  composite =
                      if (background == null || transparentBackground) java.awt.AlphaComposite.Clear
                      else java.awt.AlphaComposite.Src
                  if (background != null && !transparentBackground) color = background
                  fillRect(x, y, w, h)
                  dispose()
                }
            "restoreToPrevious" ->
                if (previous != null) {
                  canvas.createGraphics().apply {
                    composite = java.awt.AlphaComposite.Src
                    drawImage(previous, 0, 0, null)
                    dispose()
                  }
                  previous = null
                }
          }
        }
        return Prepared(cols, rows, pngs, delays, firstSlots, slots)
      } finally {
        reader.dispose()
      }
    }
  }

  fun dimensions(
      width: Int,
      height: Int,
      resize: Pair<Int, Int>?,
      bypass: Boolean,
      limit: Int = 100,
  ): Pair<Int, Int> {
    require(width > 0 && height > 0)
    if (resize != null) {
      require(resize.first > 0 && resize.second > 0) { "枚数は正の数にしてください" }
      require(bypass || resize.first.toLong() * resize.second <= limit) { "$limit 枚を超えています" }
      return resize
    }
    var scale = 1.0
    if (!bypass && ceil(width / 128.0) * ceil(height / 128.0) > limit) {
      scale = min(1.0, sqrt(limit.toDouble() * 128 * 128 / (width.toDouble() * height)))
      var low = 0.0
      var high = scale
      repeat(48) {
        val mid = (low + high) / 2
        if (ceil(width * mid / 128.0) * ceil(height * mid / 128.0) <= limit) low = mid
        else high = mid
      }
      scale = low
    }
    return ceil(width * scale / 128.0).toInt() to ceil(height * scale / 128.0).toInt()
  }

  fun tiles(
      source: BufferedImage,
      resize: Pair<Int, Int>?,
      bypass: Boolean,
      limit: Int = 100,
  ): Tiles {
    val (cols, rows) = dimensions(source.width, source.height, resize, bypass, limit)
    val maxWidth = cols * 128
    val maxHeight = rows * 128
    val fit = min(maxWidth.toDouble() / source.width, maxHeight.toDouble() / source.height)
    val scale = if (resize == null) min(1.0, fit) else fit
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
