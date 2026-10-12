package io.oyasai.chat

import io.oyasai.chat.common.japanize.*
import java.util.UUID
import java.util.concurrent.CompletableFuture
import java.util.concurrent.TimeUnit
import kotlin.test.*
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.junit.jupiter.api.Test

class ForeignMarkerTest {
  private val reader = UUID.randomUUID()
  private val plain = PlainTextComponentSerializer.plainText()

  @Test
  fun kanaExcludesEvenMultipleEnglishWords() {
    listOf("こんにちは", "こんにちは hello world", "カタカナ hello world", "ｶﾀｶﾅ hello world").forEach {
      assertFalse(needsForeignMarker(it, it), it)
    }
  }

  @Test
  fun changedDisplayExcludesRomajiAndTranslations() {
    listOf("hi" to "日", "usu" to "臼", "hi hi" to "日 hi", "hello world" to "こんにちは").forEach {
        (original, displayed) ->
      assertFalse(needsForeignMarker(original, displayed), "$original -> $displayed")
    }
  }

  @Test
  fun singleWordsAndNonTranslationWordsAreExcluded() {
    listOf("good", " good ", "", "  ", "good www", "good 123", "日 hi").forEach {
      assertFalse(needsForeignMarker(it, it), it)
    }
  }

  @Test
  fun multipleWordsUseTheExistingTranslationCriterion() {
    listOf("hello world", "boa noite", "  hello   world  ", "hello\tworld", "hello\nworld")
        .forEach {
          assertTrue(JapanizePreparation.hasMultipleTranslationWords(it), it)
          assertTrue(needsForeignMarker(it, it), it)
        }
  }

  @Test
  fun foreignConfidenceMustMeetTheThreshold() {
    listOf(0.9, 1.0).forEach {
      assertTrue(isConfidentForeignLanguage(Translation("unused", "en", it)))
    }
    listOf(0.8999, 0.0, Double.NaN, Double.POSITIVE_INFINITY, 1.1).forEach {
      assertFalse(isConfidentForeignLanguage(Translation("unused", "en", it)))
    }
    assertFalse(isConfidentForeignLanguage(null))
  }

  @Test
  fun japaneseLanguageAndLatinDetailAreExcluded() {
    listOf("ja", "ja-Latn", "JA", "JA-latn").forEach { language ->
      assertFalse(isConfidentForeignLanguage(Translation("unused", language, 1.0)))
      assertFalse(
          isConfidentForeignLanguage(
              Translation("unused", "en", 1.0, listOf(LanguageCandidate("en", 1.0, language)))
          )
      )
    }
  }

  @Test
  fun detectionUsesTheMostConfidentCandidate() {
    assertFalse(
        isConfidentForeignLanguage(
            Translation("unused", "en", 1.0, listOf(LanguageCandidate("en", 0.89)))
        )
    )
    assertFalse(
        isConfidentForeignLanguage(
            Translation(
                "unused",
                "en",
                1.0,
                listOf(LanguageCandidate("en", 0.1), LanguageCandidate("ja", 0.9)),
            )
        )
    )
    assertTrue(
        isConfidentForeignLanguage(
            Translation("unused", "ja", 0.1, listOf(LanguageCandidate("en", 0.9)))
        )
    )
  }

  @Test
  fun eligibleSpeechShowsMarkerOnlyForConfidentForeignDetection() {
    listOf("en" to 0.9, "ja" to 1.0, "ja-Latn" to 1.0, "en" to 0.89).forEach {
        (language, confidence) ->
      val requests = mutableListOf<Pair<String, String>>()
      val engine =
          LanguageEngine(
              JapanizeSettings(),
              { text, target ->
                requests += text to target
                CompletableFuture.completedFuture(Translation("unused", language, confidence))
              },
              { error("detection must not romanize") },
          )
      val body = ChatMessage("hello world", input = "hello world")
      val marker = RecentSpeech().indicator(body, setOf(reader), engine::foreignMarker)
      assertEquals(
          if (language == "en" && confidence >= 0.9) " [?]" else "",
          plain.serialize(marker),
      )
      assertEquals(listOf("hello world" to "ja"), requests)
      assertEquals(
          "hello world" + plain.serialize(marker),
          plain.serialize(body.component().append(marker)),
      )
    }
  }

  @Test
  fun ineligibleSpeechNeverRequestsDetectionOrAppendsText() {
    listOf(
            ChatMessage("こんにちは hello world"),
            ChatMessage("日", original = "hi", input = "hi"),
            ChatMessage("日 hi", original = "hi hi"),
            ChatMessage("shown words", input = "raw words"),
            ChatMessage("good"),
        )
        .forEach { message ->
          var requests = 0
          val marker =
              RecentSpeech().indicator(message, setOf(reader)) {
                requests++
                error("ineligible speech must not request detection")
              }
          assertEquals(0, requests)
          assertEquals(Component.empty(), marker)
          assertEquals(
              plain.serialize(message.component()),
              plain.serialize(message.component().append(marker)),
          )
        }
  }

  @Test
  fun pendingDetectionDoesNotWaitOrUpdateTheSentMessage() {
    val detection = CompletableFuture<Translation?>()
    val engine = LanguageEngine(JapanizeSettings(), { _, _ -> detection }, { error("fixture") })
    val marker =
        RecentSpeech().indicator(ChatMessage("hello world"), setOf(reader), engine::foreignMarker)
    assertFalse(detection.isDone)
    assertEquals(Component.empty(), marker)
    detection.complete(Translation("unused", "en", 1.0))
    assertEquals(Component.empty(), marker)
  }

  @Test
  fun detectionFailuresDefaultToNoMarker() {
    val translators: List<(String, String) -> CompletableFuture<Translation?>> =
        listOf(
            { _, _ -> CompletableFuture.completedFuture(null) },
            { _, _ -> CompletableFuture.failedFuture(IllegalStateException("fixture")) },
            { _, _ -> error("fixture") },
        )
    translators.forEach { translate ->
      val engine = LanguageEngine(JapanizeSettings(), translate, { error("fixture") })
      assertEquals(
          Component.empty(),
          RecentSpeech()
              .indicator(ChatMessage("hello world"), setOf(reader), engine::foreignMarker),
      )
    }
  }

  @Test
  fun detectionUsesTheExistingTimeout() {
    val engine =
        LanguageEngine(
            JapanizeSettings(timeoutMillis = 20),
            { _, _ -> CompletableFuture<Translation?>() },
            { error("fixture") },
        )
    assertFalse(engine.foreignMarker("hello world").get(1, TimeUnit.SECONDS))
  }
}
