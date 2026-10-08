package io.oyasai.chat.common.japanize

import com.google.gson.JsonParser
import java.net.URI
import java.net.URLEncoder
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.text.Normalizer
import java.time.Duration
import java.util.concurrent.CompletableFuture

/** Plain text plus optional source-owned display metadata, transported without recipient I/O. */
data class ChatMessage(
    val text: String,
    val original: String? = null,
    val format: String? = null,
    val input: String? = null,
) {
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
    val enabled: Boolean = true,
    val playerDefault: Boolean = true,
    val marker: String = "#",
    val stripMarker: Boolean = true,
    val timeoutMillis: Long = 2000,
    val format: String = "<converted> <gray><original></gray>",
    val dictionary: Map<String, String> = emptyMap(),
)

data class TextPart(
    val text: String,
    val protected: Boolean,
    val blocksTranslation: Boolean = protected,
)

object JapanizePreparation {
  private val url = Regex("https?://[^\\s]+", RegexOption.IGNORE_CASE)

  private fun word(c: Char): Boolean = c.isLetterOrDigit() || c == '_' || c == '\''

  fun eligible(text: String, settings: JapanizeSettings, playerEnabled: Boolean): Boolean =
      settings.enabled &&
          playerEnabled &&
          text.all { it.code < 128 } &&
          text.isNotBlank() &&
          (settings.marker.isEmpty() || !text.startsWith(settings.marker))

  /** URL first, then whole dictionary keys / player names. Protected runs skip transliteration. */
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
        val entry =
            if (link == null) dictionary.entries.firstOrNull { it.key.equals(key, true) } else null
        val replacement = link ?: entry?.value ?: literal
        val blocksTranslation =
            link != null ||
                names.any { it.equals(key, true) } ||
                entry == null ||
                !entry.key.equals(entry.value, true)
        result += TextPart(replacement, true, blocksTranslation)
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

data class LanguageCandidate(
    val language: String,
    val confidence: Double,
    val detail: String = language,
)

data class Translation(
    val text: String,
    val language: String,
    val confidence: Double,
    val candidates: List<LanguageCandidate> = emptyList(),
)

object GoogleTranslationResponse {
  fun parse(json: String): Translation {
    val root = JsonParser.parseString(json)
    require(root.isJsonArray && root.asJsonArray.size() > 6) { "Invalid translation response" }
    val response = root.asJsonArray
    require(response[0].isJsonArray && response[0].asJsonArray.size() > 0)
    val text =
        response[0].asJsonArray.joinToString("") { item ->
          require(item.isJsonArray && item.asJsonArray.size() > 0)
          val translated = item.asJsonArray[0]
          require(translated.isJsonPrimitive && translated.asJsonPrimitive.isString)
          translated.asString
        }
    require(text.isNotBlank())
    require(response[2].isJsonPrimitive && response[2].asJsonPrimitive.isString)
    require(response[6].isJsonPrimitive && response[6].asJsonPrimitive.isNumber)
    val confidence = response[6].asDouble
    require(confidence.isFinite() && confidence in 0.0..1.0)
    val candidates = if (response.size() > 8) parseCandidates(response[8]) else emptyList()
    return Translation(text, response[2].asString, confidence, candidates)
  }

  private fun parseCandidates(value: com.google.gson.JsonElement): List<LanguageCandidate> {
    // Optional detection metadata must never invalidate an otherwise usable translation.
    return runCatching {
          if (!value.isJsonArray || value.asJsonArray.size() < 4) return emptyList()
          val detection = value.asJsonArray
          if (!detection[0].isJsonArray || !detection[2].isJsonArray || !detection[3].isJsonArray)
              return emptyList()
          val languages = detection[0].asJsonArray
          val scores = detection[2].asJsonArray
          val details = detection[3].asJsonArray
          languages
              .mapIndexedNotNull { index, language ->
                val score = if (index < scores.size()) scores[index] else null
                val detail = if (index < details.size()) details[index] else null
                if (
                    !language.isJsonPrimitive ||
                        !language.asJsonPrimitive.isString ||
                        score == null ||
                        !score.isJsonPrimitive ||
                        !score.asJsonPrimitive.isNumber
                )
                    null
                else {
                  val confidence = score.asDouble
                  if (
                      !confidence.isFinite() ||
                          confidence !in 0.0..1.0 ||
                          LanguageMode.code(language.asString) == null
                  )
                      null
                  else
                      LanguageCandidate(
                          language.asString,
                          confidence,
                          if (
                              detail != null &&
                                  detail.isJsonPrimitive &&
                                  detail.asJsonPrimitive.isString
                          )
                              detail.asString
                          else language.asString,
                      )
                }
              }
              .sortedByDescending { it.confidence }
              .take(3)
        }
        .getOrDefault(emptyList())
  }
}

class GoogleTranslator(private val timeoutMillis: Long) {
  private val client =
      HttpClient.newBuilder().connectTimeout(Duration.ofMillis(timeoutMillis)).build()

  fun translate(text: String, target: String = "ja"): CompletableFuture<Translation?> {
    require(LanguageMode.code(target) != null)
    val request =
        HttpRequest.newBuilder(
                URI.create(
                    "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=$target&dt=t&dt=ld&q=" +
                        URLEncoder.encode(text, Charsets.UTF_8)
                )
            )
            .timeout(Duration.ofMillis(timeoutMillis))
            .GET()
            .build()
    return client
        .sendAsync(request, HttpResponse.BodyHandlers.ofString(Charsets.UTF_8))
        .thenApply<Translation?> { response ->
          require(response.statusCode() == 200)
          GoogleTranslationResponse.parse(response.body())
        }
        .orTimeout(timeoutMillis, java.util.concurrent.TimeUnit.MILLISECONDS)
        .exceptionally { null }
  }
}

class GoogleTransliterator(private val timeoutMillis: Long) {
  private val client =
      HttpClient.newBuilder().connectTimeout(Duration.ofMillis(timeoutMillis)).build()

  fun convert(hiragana: String): CompletableFuture<String> {
    if (
        hiragana.none { it in '\u3041'..'\u3096' } &&
            (hiragana.none { it in '0'..'9' } || hiragana.any { it in 'a'..'z' || it in 'A'..'Z' })
    )
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
    private val translate: (String) -> CompletableFuture<Translation?> = {
      CompletableFuture.completedFuture(null)
    },
    private val convert: (String) -> CompletableFuture<String>,
) {
  fun prepare(
      text: String,
      playerEnabled: Boolean,
      names: Collection<String>,
      dictionary: Map<String, String> = settings.dictionary,
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
    val parts = JapanizePreparation.parts(text, dictionary, names)
    // Identity dictionary entries allow translation; URLs, names and replacements still block it.
    val translationEligible =
        parts.none { it.blocksTranslation } &&
            text.split(Regex("\\s+")).count { word ->
              word.any { it in 'a'..'z' || it in 'A'..'Z' } && !word.all { it == 'w' || it == 'W' }
            } >= 2
    if (!translationEligible) return transliterate(text, parts)
    return runCatching { translate(text) }
        .getOrElse { CompletableFuture.completedFuture(null) }
        .orTimeout(settings.timeoutMillis, java.util.concurrent.TimeUnit.MILLISECONDS)
        .exceptionally { null }
        .thenCompose { translation ->
          if (
              translation != null &&
                  translation.language == "en" &&
                  translation.confidence in 0.9..1.0 &&
                  translation.text.isNotBlank()
          )
              CompletableFuture.completedFuture(display(text, translation.text))
          else transliterate(text, parts)
        }
  }

  fun transliterate(text: String, parts: List<TextPart>): CompletableFuture<ChatMessage> {
    val hasLetters = text.any { it in 'a'..'z' || it in 'A'..'Z' }
    val futures =
        parts.map { part ->
          // Resolve dictionary keys first, but do not send punctuation-only runs to Google.
          if (part.protected || (!hasLetters && part.text.none { it in '0'..'9' }))
              CompletableFuture.completedFuture(part.text)
          else
              runCatching { convert(part.text) }
                  .getOrElse { CompletableFuture.completedFuture(part.text) }
                  .orTimeout(settings.timeoutMillis, java.util.concurrent.TimeUnit.MILLISECONDS)
                  .exceptionally { part.text }
        }
    return CompletableFuture.allOf(*futures.toTypedArray()).thenApply {
      val result = futures.joinToString("") { it.getNow("") }
      display(text, result)
    }
  }

  private fun display(text: String, result: String): ChatMessage {
    val hasLetters = text.any { it in 'a'..'z' || it in 'A'..'Z' }
    // Protocol bounds include both strings; never truncate Unicode or drop the original silently.
    return if (
        result == text ||
            (!hasLetters && Normalizer.normalize(result, Normalizer.Form.NFKC) == text) ||
            result.isBlank() ||
            result.length + text.length + settings.format.length > 4096
    )
        ChatMessage(text)
    else ChatMessage(result, text, settings.format)
  }
}
