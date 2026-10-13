package io.oyasai.chat

import io.oyasai.chat.common.japanize.*
import io.oyasai.chat.common.protocol.MessageType
import io.oyasai.chat.common.protocol.NetworkEnvelope
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
      val body =
          engine.prepareForeignMarker(ChatMessage("hello world", input = "hello world")).join()
      val foreign = language == "en" && confidence >= 0.9
      assertEquals(foreign, body.foreign)
      val marker = RecentSpeech().indicator(body, setOf(reader))
      assertEquals(
          if (foreign) " [?]" else "",
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
            ChatMessage("カタカナ hello world"),
            ChatMessage("ｶﾀｶﾅ hello world"),
            ChatMessage("日", original = "hi", input = "hi"),
            ChatMessage("日 hi", original = "hi hi"),
            ChatMessage("shown words", input = "raw words"),
            ChatMessage("good"),
        )
        .forEach { message ->
          var requests = 0
          val engine =
              LanguageEngine(
                  JapanizeSettings(),
                  { _, _ ->
                    requests++
                    error("ineligible speech must not request detection")
                  },
                  { error("fixture") },
              )
          val preparation = engine.prepareForeignMarker(message)
          assertTrue(preparation.isDone)
          val prepared = preparation.join()
          assertFalse(prepared.foreign)
          val marker = RecentSpeech().indicator(prepared, setOf(reader))
          assertEquals(0, requests)
          assertEquals(Component.empty(), marker)
          assertEquals(
              plain.serialize(message.component()),
              plain.serialize(message.component().append(marker)),
          )
        }
  }

  @Test
  fun preparationWaitsForDetectionBeforeCreatingTheSentMessage() {
    val detection = CompletableFuture<Translation?>()
    val engine = LanguageEngine(JapanizeSettings(), { _, _ -> detection }, { error("fixture") })
    val original = ChatMessage("hello world", input = "hello world")
    val preparation = engine.prepareForeignMarker(original)
    assertFalse(detection.isDone)
    assertFalse(preparation.isDone)
    detection.complete(Translation("unused", "en", 1.0))
    val prepared = preparation.get(1, TimeUnit.SECONDS)
    assertTrue(prepared.foreign)
    assertFalse(original.foreign)
    assertEquals("hello world", prepared.input)
    assertEquals(" [?]", plain.serialize(RecentSpeech().indicator(prepared, setOf(reader))))
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
      val prepared = engine.prepareForeignMarker(ChatMessage("hello world")).join()
      assertFalse(prepared.foreign)
      assertEquals(
          Component.empty(),
          RecentSpeech().indicator(prepared, setOf(reader)),
      )
    }
  }

  @Test
  fun detectionUsesTheExistingTimeout() {
    val detection = CompletableFuture<Translation?>()
    val engine =
        LanguageEngine(
            JapanizeSettings(timeoutMillis = 20),
            { _, _ -> detection },
            { error("fixture") },
        )
    val prepared = engine.prepareForeignMarker(ChatMessage("hello world")).get(1, TimeUnit.SECONDS)
    assertFalse(prepared.foreign)
    val marker = RecentSpeech().indicator(prepared, setOf(reader))
    assertEquals(Component.empty(), marker)
    detection.complete(Translation("unused", "en", 1.0))
    assertFalse(prepared.foreign)
    assertEquals(Component.empty(), marker)
  }

  @Test
  fun indicatorOnlyReadsThePreparedFlagWithoutRequestingDetection() {
    var requests = 0
    val engine =
        LanguageEngine(
            JapanizeSettings(),
            { _, _ ->
              requests++
              CompletableFuture.completedFuture(Translation("unused", "en", 0.9))
            },
            { error("fixture") },
        )
    val original = ChatMessage("hello world")
    val recent = RecentSpeech()
    assertEquals(Component.empty(), recent.indicator(original, setOf(reader)))
    assertEquals(0, requests)
    val prepared = engine.prepareForeignMarker(original).join()
    assertEquals(1, requests)
    repeat(2) { assertEquals(" [?]", plain.serialize(recent.indicator(prepared, setOf(reader)))) }
    assertEquals(Component.empty(), recent.indicator(prepared.copy(foreign = false), setOf(reader)))
    assertEquals(1, requests)
  }

  @Test
  fun orderedPreparationHoldsLaterMessagesUntilDetectionAndDeliveryFinish() {
    val detection = CompletableFuture<Translation?>()
    val engine = LanguageEngine(JapanizeSettings(), { _, _ -> detection }, { error("fixture") })
    val queue = OrderedSourceQueue()
    val delivered = mutableListOf<ChatMessage>()
    val committed = CompletableFuture<Void>()
    assertTrue(
        queue.enqueue(reader) {
          engine
              .prepare("hello world", "off", emptyList(), emptyMap())
              .thenCompose { engine.prepareForeignMarker(it.copy(input = "hello world")) }
              .thenCompose { prepared ->
                delivered += prepared
                committed
              }
        }
    )
    assertTrue(
        queue.enqueue(reader) {
          engine
              .prepare("good", "off", emptyList(), emptyMap())
              .thenCompose { engine.prepareForeignMarker(it.copy(input = "good")) }
              .thenAccept { delivered += it }
        }
    )
    assertTrue(delivered.isEmpty())
    assertFalse(queue.isIdle())
    detection.complete(Translation("unused", "en", 0.9))
    assertEquals(listOf("hello world"), delivered.map { it.text })
    assertTrue(delivered.single().foreign)
    assertFalse(queue.isIdle())
    committed.complete(null)
    assertEquals(listOf("hello world", "good"), delivered.map { it.text })
    assertFalse(delivered.last().foreign)
    assertTrue(queue.isIdle())
  }

  @Test
  fun remoteMessagesHaveNoVerdictAndRemainUnmarked() {
    val envelope =
        NetworkEnvelope.backend(
            type = MessageType.CHANNEL_MESSAGE,
            backendId = "source",
            senderName = "sender",
            content = "hello world",
        )
    val message = ChatMessage.from(envelope)
    assertFalse(message.foreign)
    assertEquals(Component.empty(), RecentSpeech().indicator(message, setOf(reader)))
  }
}
