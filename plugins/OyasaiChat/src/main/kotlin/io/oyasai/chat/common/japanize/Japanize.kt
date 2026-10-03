package io.oyasai.chat.common.japanize

import com.google.gson.JsonParser
import java.net.URI
import java.net.URLEncoder
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.time.Duration
import java.util.concurrent.CompletableFuture

/** Plain text plus optional source-owned display metadata, transported without recipient I/O. */
data class ChatMessage(val text: String, val original: String? = null, val format: String? = null) {
  companion object {
    fun from(envelope: io.oyasai.chat.common.protocol.NetworkEnvelope) =
        ChatMessage(envelope.content, envelope.japanizeOriginal, envelope.japanizeFormat)
  }

  fun component(): net.kyori.adventure.text.Component =
      if (original == null) net.kyori.adventure.text.Component.text(text)
      else
          net.kyori.adventure.text.minimessage.MiniMessage.miniMessage()
              .deserialize(
                  format ?: "<converted> <gray><original></gray>",
                  net.kyori.adventure.text.minimessage.tag.resolver.Placeholder.unparsed(
                      "converted",
                      text,
                  ),
                  net.kyori.adventure.text.minimessage.tag.resolver.Placeholder.unparsed(
                      "original",
                      original,
                  ),
              )

  fun isBlank(): Boolean = text.isBlank()
}

data class JapanizeSettings(
    val enabled: Boolean = false,
    val playerDefault: Boolean = true,
    val marker: String = "#",
    val stripMarker: Boolean = true,
    val timeoutMillis: Long = 2000,
    val format: String = "<converted> <gray><original></gray>",
    val dictionary: Map<String, String> = emptyMap(),
)

data class TextPart(val text: String, val protected: Boolean)

object JapanizePreparation {
  private val url = Regex("https?://[^\\s]+", RegexOption.IGNORE_CASE)

  private fun word(c: Char): Boolean = c.isLetterOrDigit() || c == '_' || c == '\''

  fun eligible(text: String, settings: JapanizeSettings, playerEnabled: Boolean): Boolean =
      settings.enabled &&
          playerEnabled &&
          text.all { it.code < 128 } &&
          text.any { it in 'a'..'z' || it in 'A'..'Z' } &&
          (settings.marker.isEmpty() || !text.startsWith(settings.marker))

  /** URL first, then whole dictionary keys / player names. Protected runs never reach Google. */
  fun parts(
      text: String,
      dictionary: Map<String, String>,
      names: Collection<String>,
  ): List<TextPart> {
    val keys =
        (dictionary.keys + names)
            .filter { it.isNotEmpty() }
            .distinct()
            .sortedByDescending(String::length)
    val result = mutableListOf<TextPart>()
    val pending = StringBuilder()
    fun flush() {
      if (pending.isNotEmpty()) {
        result += TextPart(Romaji.convert(pending.toString()), false)
        pending.setLength(0)
      }
    }
    var i = 0
    while (i < text.length) {
      val link = url.matchAt(text, i)?.value
      val key =
          if (link == null)
              keys.firstOrNull { key ->
                text.regionMatches(i, key, 0, key.length, ignoreCase = true) &&
                    (i == 0 || !word(text[i - 1])) &&
                    (i + key.length == text.length || !word(text[i + key.length]))
              }
          else null
      if (link != null || key != null) {
        flush()
        val literal = link ?: text.substring(i, i + key!!.length)
        val replacement =
            if (link != null) link
            else dictionary.entries.firstOrNull { it.key.equals(key, true) }?.value ?: literal
        result += TextPart(replacement, true)
        i += literal.length
      } else {
        pending.append(text[i])
        i++
      }
    }
    flush()
    return result
  }
}

object GoogleResponse {
  fun parse(json: String): String {
    val root = JsonParser.parseString(json)
    require(root.isJsonArray && root.asJsonArray.size() > 0) { "Invalid transliteration response" }
    return root.asJsonArray.joinToString("") { item ->
      require(item.isJsonArray && item.asJsonArray.size() == 2)
      val segment = item.asJsonArray
      require(segment[0].isJsonPrimitive && segment[0].asJsonPrimitive.isString)
      require(segment[1].isJsonArray && segment[1].asJsonArray.size() > 0)
      val first = segment[1].asJsonArray[0]
      require(first.isJsonPrimitive && first.asJsonPrimitive.isString)
      first.asString
    }
  }
}

class GoogleTransliterator(private val timeoutMillis: Long) {
  private val client =
      HttpClient.newBuilder().connectTimeout(Duration.ofMillis(timeoutMillis)).build()

  fun convert(hiragana: String): CompletableFuture<String> {
    if (hiragana.none { it in '\u3041'..'\u3096' })
        return CompletableFuture.completedFuture(hiragana)
    val request =
        HttpRequest.newBuilder(
                URI.create(
                    "https://www.google.com/transliterate?langpair=ja-Hira%7Cja&text=" +
                        URLEncoder.encode(hiragana, Charsets.UTF_8)
                )
            )
            .timeout(Duration.ofMillis(timeoutMillis))
            .GET()
            .build()
    return client
        .sendAsync(request, HttpResponse.BodyHandlers.ofString(Charsets.UTF_8))
        .thenApply { response ->
          require(response.statusCode() == 200)
          GoogleResponse.parse(response.body())
        }
        .orTimeout(timeoutMillis, java.util.concurrent.TimeUnit.MILLISECONDS)
        .exceptionally { hiragana }
  }
}

/** Injectable network boundary for deterministic unit tests. */
class Japanizer(
    private val settings: JapanizeSettings,
    private val convert: (String) -> CompletableFuture<String>,
) {
  fun prepare(
      text: String,
      playerEnabled: Boolean,
      names: Collection<String>,
  ): CompletableFuture<ChatMessage> {
    if (!JapanizePreparation.eligible(text, settings, playerEnabled)) {
      val visible =
          if (
              settings.enabled &&
                  settings.stripMarker &&
                  settings.marker.isNotEmpty() &&
                  text.startsWith(settings.marker)
          )
              text.removePrefix(settings.marker)
          else text
      return CompletableFuture.completedFuture(ChatMessage(visible))
    }
    val parts = JapanizePreparation.parts(text, settings.dictionary, names)
    val futures =
        parts.map { part ->
          if (part.protected) CompletableFuture.completedFuture(part.text)
          else
              runCatching { convert(part.text) }
                  .getOrElse { CompletableFuture.completedFuture(part.text) }
                  .exceptionally { part.text }
        }
    return CompletableFuture.allOf(*futures.toTypedArray()).thenApply {
      val result = futures.joinToString("") { it.getNow("") }
      // Protocol bounds include both strings; never truncate Unicode or drop the original silently.
      if (
          result == text ||
              result.isBlank() ||
              result.length + text.length + settings.format.length > 4096
      )
          ChatMessage(text)
      else ChatMessage(result, text, settings.format)
    }
  }
}
