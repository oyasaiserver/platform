package io.oyasai.chat

import io.oyasai.chat.common.japanize.*
import java.net.http.HttpTimeoutException
import java.util.concurrent.CompletableFuture
import java.util.concurrent.TimeUnit
import kotlin.test.*
import org.junit.jupiter.api.Test

class JapanizeTranslationTest {
  private val settings = JapanizeSettings(format = "<converted> <gray>(<original>)</gray>")

  @Test
  fun confidentEnglishUsesTranslationAndExistingDisplayFormat() {
    val requests = mutableListOf<String>()
    val engine =
        Japanizer(
            settings,
            translate = {
              requests += it
              CompletableFuture.completedFuture(Translation("素敵な造り", "en", 0.97))
            },
        ) {
          error("Accepted translation must skip transliteration")
        }
    val prepared = engine.prepare("nice build", true, emptyList()).join()
    assertEquals(ChatMessage("素敵な造り", "nice build", settings.format), prepared)
    assertEquals(listOf("nice build"), requests)
    val component = prepared.component()
    assertEquals(
        "素敵な造り (nice build)",
        net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer.plainText()
            .serialize(component),
    )
    assertEquals(
        net.kyori.adventure.text.format.NamedTextColor.GRAY,
        component.children().single().color(),
    )
  }

  @Test
  fun identityDictionaryEntriesAllowWholeMessageTranslationIgnoringCase() {
    val requests = mutableListOf<String>()
    val engine =
        Japanizer(
            settings,
            translate = {
              requests += it
              CompletableFuture.completedFuture(Translation("素敵な造り", "en", 0.97))
            },
        ) {
          error("Accepted translation must skip transliteration")
        }
    listOf(mapOf("nice" to "nice"), mapOf("NICE" to "nice"), mapOf("nice" to "NICE")).forEach {
        dictionary ->
      val prepared = engine.prepare("nice build", true, emptyList(), dictionary).join()
      assertEquals(ChatMessage("素敵な造り", "nice build", settings.format), prepared)
    }
    assertEquals(List(3) { "nice build" }, requests)
  }

  @Test
  fun identityDictionaryEntriesDoNotOverrideOtherTranslationProtection() {
    val requests = mutableListOf<String>()
    val engine =
        Japanizer(
            settings,
            translate = {
              requests += it
              CompletableFuture.completedFuture(Translation("不採用", "en", 0.97))
            },
        ) {
          CompletableFuture.completedFuture(it)
        }
    val dictionary = mapOf("nice" to "nice", "kakezumou" to "賭け相撲")
    assertEquals(
        "nice ぶいld 賭け相撲",
        engine.prepare("nice build kakezumou", true, emptyList(), dictionary).join().text,
    )
    assertEquals(
        "nice ぶいld https:///fixture",
        engine.prepare("nice build https:///fixture", true, emptyList(), dictionary).join().text,
    )
    assertEquals(
        "nice ぶいld Player_1",
        engine.prepare("nice build Player_1", true, listOf("Player_1"), dictionary).join().text,
    )
    // A name remains protected even when it also matches an identity dictionary entry.
    assertEquals(
        "nice ぶいld",
        engine.prepare("nice build", true, listOf("NICE"), dictionary).join().text,
    )
    assertTrue(requests.isEmpty())
  }

  @Test
  fun identityDictionaryEntriesRemainProtectedDuringTranslationFallback() {
    val translations = mutableListOf<String>()
    val conversions = mutableListOf<String>()
    val engine =
        Japanizer(
            settings,
            translate = {
              translations += it
              CompletableFuture.completedFuture(Translation("不採用", "en", 0.85))
            },
        ) {
          conversions += it
          CompletableFuture.completedFuture(it)
        }
    assertEquals(
        ChatMessage("nice ぶいld", "nice build", settings.format),
        engine.prepare("nice build", true, emptyList(), mapOf("nice" to "nice")).join(),
    )
    assertEquals(listOf("nice build"), translations)
    assertEquals(listOf(" ぶいld"), conversions)
  }

  @Test
  fun lowConfidenceAndNonEnglishFallBackToRomanization() {
    listOf(Translation("不採用", "en", 0.85), Translation("不採用", "ja", 0.99)).forEach { response ->
      val requests = mutableListOf<String>()
      val engine =
          Japanizer(settings, translate = { CompletableFuture.completedFuture(response) }) {
            requests += it
            CompletableFuture.completedFuture("感謝 こんにちは")
          }
      val prepared = engine.prepare("arigatou kon'nichiha", true, emptyList()).join()
      assertEquals(ChatMessage("感謝 こんにちは", "arigatou kon'nichiha", settings.format), prepared)
      assertEquals(listOf("ありがとう こんにちは"), requests)
    }
  }

  @Test
  fun singleWordsAndLaughterDoNotCallTranslation() {
    val requests = mutableListOf<String>()
    val translate: (String) -> CompletableFuture<Translation?> = {
      requests += it
      CompletableFuture.completedFuture(null)
    }
    val engine =
        Japanizer(settings, translate = translate) { CompletableFuture.completedFuture(it) }
    listOf("oka", "ome", "nice", "www souwww", "WwW souwww", "123 nice !", "  nice\twww  ")
        .forEach {
          assertEquals(Romaji.convert(it), engine.prepare(it, true, emptyList()).join().text)
        }
    assertTrue(requests.isEmpty())
  }

  @Test
  fun whitespaceSeparatesWordsAndConfidenceBoundaryIsAccepted() {
    val requests = mutableListOf<String>()
    val engine =
        Japanizer(
            settings,
            translate = {
              requests += it
              CompletableFuture.completedFuture(Translation("素敵な造り", "en", 0.9))
            },
        ) {
          error("Must translate")
        }
    val input = "  nice\tbuild\nwww  "
    assertEquals("素敵な造り", engine.prepare(input, true, emptyList()).join().text)
    assertEquals(listOf(input), requests)
  }

  @Test
  fun protectedAndIneligibleMessagesDoNotCallTranslation() {
    val requests = mutableListOf<String>()
    val translate: (String) -> CompletableFuture<Translation?> = {
      requests += it
      CompletableFuture.completedFuture(null)
    }
    val engine =
        Japanizer(settings, translate = translate) { CompletableFuture.completedFuture(it) }
    assertEquals(
        "にcえ ぶいld https:///fixture",
        engine.prepare("nice build https:///fixture", true, emptyList()).join().text,
    )
    assertEquals(
        "にcえ ぶいld Player_1",
        engine.prepare("nice build Player_1", true, listOf("Player_1")).join().text,
    )
    assertEquals(
        "にcえ ぶいld 賭け相撲",
        engine
            .prepare("nice build kakezumou", true, emptyList(), mapOf("kakezumou" to "賭け相撲"))
            .join()
            .text,
    )
    assertEquals(ChatMessage("nice build"), engine.prepare("#nice build", true, emptyList()).join())
    assertEquals(ChatMessage("nice build"), engine.prepare("nice build", false, emptyList()).join())
    assertEquals(
        ChatMessage("日本語 nice build"),
        engine.prepare("日本語 nice build", true, emptyList()).join(),
    )
    val disabled =
        Japanizer(settings.copy(enabled = false), translate = translate) {
          error("Must not convert")
        }
    assertEquals(
        ChatMessage("nice build"),
        disabled.prepare("nice build", true, emptyList()).join(),
    )
    assertTrue(requests.isEmpty())
  }

  @Test
  fun failedAndThrowingTranslationFallBack() {
    val providers: List<(String) -> CompletableFuture<Translation?>> =
        listOf(
            { CompletableFuture.failedFuture(HttpTimeoutException("fixture")) },
            { error("fixture failure") },
            { CompletableFuture.completedFuture(null) },
            { CompletableFuture.completedFuture(GoogleTranslationResponse.parse("[]")) },
        )
    providers.forEach { provider ->
      val engine =
          Japanizer(settings, translate = provider) { CompletableFuture.completedFuture(it) }
      assertEquals(
          ChatMessage("ありがとう こんにちは", "arigatou kon'nichiha", settings.format),
          engine.prepare("arigatou kon'nichiha", true, emptyList()).join(),
      )
    }
  }

  @Test
  fun pendingTranslationIsAsynchronousAndTimesOutToRomanization() {
    val response = CompletableFuture<Translation?>()
    val engine =
        Japanizer(settings.copy(timeoutMillis = 100), translate = { response }) {
          CompletableFuture.completedFuture(it)
        }
    val result = engine.prepare("arigatou kon'nichiha", true, emptyList())
    assertFalse(result.isDone)
    assertEquals("ありがとう こんにちは", result.get(3, TimeUnit.SECONDS).text)
  }

  @Test
  fun translationPreservesProtocolLengthLimit() {
    val engine =
        Japanizer(
            settings,
            translate = {
              CompletableFuture.completedFuture(Translation("あ".repeat(4096), "en", 1.0))
            },
        ) {
          error("Accepted translation")
        }
    assertEquals(ChatMessage("nice build"), engine.prepare("nice build", true, emptyList()).join())
  }

  @Test
  fun translationResponseConcatenatesFragmentsAndReadsDetection() {
    assertEquals(
        Translation("素敵な造り", "en", 0.974797),
        GoogleTranslationResponse.parse(
            """[[["素敵な","nice",null,null],["造り","build"]],null,"en",null,null,null,0.974797]"""
        ),
    )
    assertEquals(
        Translation("訳", "ja", 0.85),
        GoogleTranslationResponse.parse(
            """[[["訳"]],null,"ja",null,null,null,0.85,{"ignored":true}]"""
        ),
    )
  }

  @Test
  fun malformedTranslationResponsesAreRejected() {
    listOf(
            "not json",
            "null",
            "{}",
            "[]",
            "[[],null,\"en\",null,null,null,1]",
            """[[["訳"]],null,"en"]""",
            """[null,null,"en",null,null,null,1]""",
            """[[null],null,"en",null,null,null,1]""",
            """[[[]],null,"en",null,null,null,1]""",
            """[[[7]],null,"en",null,null,null,1]""",
            """[[[" "]],null,"en",null,null,null,1]""",
            """[[["訳"]],null,null,null,null,null,1]""",
            """[[["訳"]],null,7,null,null,null,1]""",
            """[[["訳"]],null,"en",null,null,null,null]""",
            """[[["訳"]],null,"en",null,null,null,"0.97"]""",
            """[[["訳"]],null,"en",null,null,null,1.1]""",
            """[[["訳"]],null,"en",null,null,null,-0.1]""",
            """[[["訳"]],null,"en",null,null,null,1e999]""",
        )
        .forEach { invalid -> assertFails(invalid) { GoogleTranslationResponse.parse(invalid) } }
  }
}
