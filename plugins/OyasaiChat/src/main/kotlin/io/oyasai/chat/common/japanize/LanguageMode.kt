package io.oyasai.chat.common.japanize

import java.util.Locale
import java.util.UUID
import java.util.concurrent.CompletableFuture
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicLong
import kotlin.math.roundToInt

object LanguageMode {
  private val names =
      linkedMapOf(
          "pt" to "Portuguese",
          "en" to "English",
          "ko" to "Korean",
          "ja" to "Japanese",
          "es" to "Spanish",
          "de" to "German",
          "id" to "Indonesian",
          "fr" to "French",
          "zh-CN" to "Chinese-Simplified",
          "zh-TW" to "Chinese-Traditional",
          "ru" to "Russian",
          "th" to "Thai",
          "vi" to "Vietnamese",
      )
  private val codePattern = Regex("[A-Za-z]{2,8}(?:-[A-Za-z]{2,8}){0,2}")

  val suggestions = listOf("auto", "off") + names.values

  /** Command input uses names; language codes remain the internal and persisted representation. */
  fun code(value: String): String? = names.entries.firstOrNull { it.value.equals(value, true) }?.key

  fun languageName(code: String): String =
      names.entries.firstOrNull { it.key.equals(code, true) }?.value ?: code

  fun validCode(value: String): Boolean = value.length in 2..20 && codePattern.matches(value)

  fun storedMode(value: String): String? =
      parse(value)
          ?: value
              .takeIf { !it.equals("check", true) && validCode(it) }
              ?.let { saved ->
                names.keys.firstOrNull { it.equals(saved, true) } ?: saved.lowercase(Locale.ROOT)
              }

  fun parse(value: String): String? =
      when (value.lowercase(Locale.ROOT)) {
        "auto" -> "auto"
        "off" -> "off"
        "check" -> null
        else -> code(value)
      }

  fun same(source: String, target: String): Boolean =
      source.equals(target, true) || (source.equals("ja-Latn", true) && target.equals("ja", true))
}

sealed interface LanguageArgument {
  data object Show : LanguageArgument

  data class Set(val mode: String) : LanguageArgument

  data class Check(val id: Long) : LanguageArgument
}

fun languageArgument(args: List<String>): LanguageArgument? =
    when {
      args.isEmpty() -> LanguageArgument.Show
      args.size == 1 -> LanguageMode.parse(args[0])?.let(LanguageArgument::Set)
      args.size == 2 && args[0].equals("check", true) ->
          args[1]
              .takeIf { it.all(Char::isDigit) }
              ?.toLongOrNull()
              ?.takeIf { it > 0 }
              ?.let(LanguageArgument::Check)
      else -> null
    }

/** Both network boundaries are injectable; each stage has a finite timeout. */
class LanguageEngine(
    private val settings: JapanizeSettings,
    private val translate: (String, String) -> CompletableFuture<Translation?>,
    convert: (String) -> CompletableFuture<String>,
) {
  private val japanizer =
      Japanizer(settings, translate = { translate(it, "ja") }, convert = convert)

  private fun request(text: String, target: String): CompletableFuture<Translation?> =
      runCatching { translate(text, target) }
          .getOrElse { CompletableFuture.completedFuture<Translation?>(null) }
          .orTimeout(settings.timeoutMillis, TimeUnit.MILLISECONDS)
          .exceptionally { null }

  private fun romanize(
      text: String,
      names: Collection<String>,
      dictionary: Map<String, String>,
  ): CompletableFuture<ChatMessage> =
      japanizer.transliterate(text, JapanizePreparation.parts(text, dictionary, names))

  fun prepare(
      text: String,
      mode: String,
      names: Collection<String>,
      dictionary: Map<String, String>,
  ): CompletableFuture<ChatMessage> {
    fun auto() = japanizer.prepare(text, mode != "off", names, dictionary)
    if (mode == "auto" || mode == "off" || !settings.enabled) return auto()
    val source =
        if (mode != "ja" && JapanizePreparation.eligible(text, settings, true))
            romanize(text, names, dictionary)
        else CompletableFuture.completedFuture(ChatMessage(text))
    return source.thenCompose { prepared ->
      request(prepared.text, mode).thenCompose { result ->
        if (result == null || result.text.isBlank()) auto()
        else if (LanguageMode.same(result.language, mode)) {
          // ja explicitly opts out of romaji conversion, including already-Japanese detection.
          if (mode == "ja") CompletableFuture.completedFuture(ChatMessage(text)) else auto()
        } else CompletableFuture.completedFuture(display(prepared.text, result.text))
      }
    }
  }

  fun check(text: String): CompletableFuture<String> =
      request(text, "ja").thenApply { result ->
        if (result == null) "[判定] 判定できませんでした。時間を空けて再試行してください"
        else {
          val candidates =
              result.candidates.ifEmpty {
                listOf(LanguageCandidate(result.language, result.confidence))
              }
          val labels =
              candidates.take(3).joinToString("、") { candidate ->
                val language =
                    if (candidate.detail.equals("ja-Latn", true)) "ja" else candidate.language
                LanguageMode.languageName(language) +
                    " " +
                    (candidate.confidence * 100).roundToInt() +
                    "%"
              }
          "[判定] $labels"
        }
      }

  private fun display(original: String, translated: String): ChatMessage =
      if (
          original == translated ||
              translated.isBlank() ||
              original.length + translated.length + settings.format.length > 4096
      )
          ChatMessage(original)
      else ChatMessage(translated, original, settings.format)
}

/** Main-thread memory only. Recipient membership prevents guessing private/channel message IDs. */
class RecentSpeech(
    private val capacity: Int = 500,
    private val intervalNanos: Long = TimeUnit.SECONDS.toNanos(3),
) {
  private data class Entry(val text: String, val readers: Set<UUID>)

  private val entries = linkedMapOf<Long, Entry>()
  private val lastChecks = mutableMapOf<UUID, Long>()

  companion object {
    // Keep old click actions from resolving to new messages after reload/restart.
    private val ids = AtomicLong(System.currentTimeMillis() * 1000)
  }

  fun remember(text: String, readers: Set<UUID>): Long {
    val id = ids.incrementAndGet()
    entries[id] = Entry(text, readers.toSet())
    if (entries.size > capacity) entries.remove(entries.keys.first())
    return id
  }

  fun indicator(text: String, readers: Set<UUID>): net.kyori.adventure.text.Component {
    val id = remember(text, readers)
    return net.kyori.adventure.text.Component.text(
            " [?]",
            net.kyori.adventure.text.format.NamedTextColor.GRAY,
        )
        .hoverEvent(net.kyori.adventure.text.Component.text("この発言の言語を判定"))
        .clickEvent(net.kyori.adventure.text.event.ClickEvent.runCommand("/lang check $id"))
  }

  fun text(id: Long, reader: UUID): String? = entries[id]?.takeIf { reader in it.readers }?.text

  fun allow(reader: UUID, now: Long = System.nanoTime()): Boolean {
    lastChecks[reader]?.let { if (now - it < intervalNanos) return false }
    lastChecks[reader] = now
    return true
  }

  fun forget(reader: UUID) {
    lastChecks.remove(reader)
  }
}
