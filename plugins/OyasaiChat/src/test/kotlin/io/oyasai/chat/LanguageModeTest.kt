package io.oyasai.chat

import io.oyasai.chat.common.japanize.*
import io.oyasai.chat.paper.state.PlayerChatState
import io.oyasai.chat.paper.state.PlayerStateFileCodec
import java.io.File
import java.util.UUID
import java.util.concurrent.CompletableFuture
import java.util.concurrent.TimeUnit
import kotlin.test.*
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.io.TempDir

class LanguageModeTest {
  private val settings = JapanizeSettings()

  @Test
  fun portugueseRomanizesBeforeTranslationAndShowsJapaneseOriginal() {
    val requests = mutableListOf<Pair<String, String>>()
    val converted = mutableListOf<String>()
    val input = "konbanha Player_1 kakezumou https:///fixture"
    // All protected pieces are handled separately by the existing romanizer.
    val preserving =
        LanguageEngine(
            settings,
            { text, target ->
              requests += text to target
              CompletableFuture.completedFuture(Translation("Boa noite", "ja", 1.0))
            },
            {
              converted += it
              CompletableFuture.completedFuture(it.replace("こんばんは", "今晩は"))
            },
        )
    val result =
        preserving.prepare(input, "pt", listOf("Player_1"), mapOf("kakezumou" to "賭け相撲")).join()
    assertEquals(
        ChatMessage("Boa noite", "今晩は Player_1 賭け相撲 https:///fixture", settings.format),
        result,
    )
    assertEquals(listOf(result.original!! to "pt"), requests)
    assertTrue(converted.none { "Player_1" in it || "賭け相撲" in it || "https" in it })
  }

  @Test
  fun judgmentUsesTheSameKanaForHiraganaAndRomanizedTranslation() {
    val engine =
        LanguageEngine(
            settings,
            { _, _ -> CompletableFuture.completedFuture(Translation("Olá", "ja", 1.0)) },
            { CompletableFuture.completedFuture(it) },
        )
    val hiragana = engine.prepare("こんにちは", "pt", emptyList(), emptyMap()).join()
    val romanized = engine.prepare("kon'nichiha", "pt", emptyList(), emptyMap()).join()
    assertEquals("こんにちは", hiragana.original)
    assertEquals("こんにちは", romanized.original)
    assertEquals("こんにちは", judgmentSource(hiragana.copy(input = "こんにちは")))
    assertEquals("こんにちは", judgmentSource(romanized.copy(input = "kon'nichiha")))
    assertEquals("raw", judgmentSource(ChatMessage("shown", input = "raw")))
    assertEquals("shown", judgmentSource(ChatMessage("shown")))
  }

  @Test
  fun japaneseModeTranslatesRawRomajiWithoutTransliteration() {
    val requests = mutableListOf<Pair<String, String>>()
    val engine =
        LanguageEngine(
            settings,
            { text, target ->
              requests += text to target
              CompletableFuture.completedFuture(Translation("こんばんは", "pt", 1.0))
            },
            { error("ja mode must not romanize") },
        )
    assertEquals(
        ChatMessage("こんばんは", "boa noite", settings.format),
        engine.prepare("boa noite", "ja", emptyList(), emptyMap()).join(),
    )
    assertEquals(listOf("boa noite" to "ja"), requests)
  }

  @Test
  fun japaneseModeNeverRomanizesAlreadyJapaneseDetection() {
    val engine =
        LanguageEngine(
            settings,
            { _, _ ->
              CompletableFuture.completedFuture(
                  Translation("unused", "ja", 1.0, listOf(LanguageCandidate("ja", 1.0, "ja-Latn")))
              )
            },
            { error("ja mode must not romanize") },
        )
    assertEquals(
        ChatMessage("konbanha"),
        engine.prepare("konbanha", "ja", emptyList(), emptyMap()).join(),
    )
  }

  @Test
  fun nonAsciiGoesStraightToTargetAndSameLanguageUsesAuto() {
    val requests = mutableListOf<Pair<String, String>>()
    val engine =
        LanguageEngine(
            settings,
            { text, target ->
              requests += text to target
              CompletableFuture.completedFuture(
                  Translation("Hello", if (text == "Hello") "en" else "ja", 1.0)
              )
            },
            { CompletableFuture.completedFuture(it) },
        )
    assertEquals(
        ChatMessage("Hello", "こんにちは", settings.format),
        engine.prepare("こんにちは", "en", emptyList(), emptyMap()).join(),
    )
    val same =
        LanguageEngine(
            settings,
            { _, _ -> CompletableFuture.completedFuture(Translation("採用しない", "pt", 1.0)) },
            { CompletableFuture.completedFuture(it) },
        )
    assertEquals(
        ChatMessage("ポルトガル語の文"),
        same.prepare("ポルトガル語の文", "pt", emptyList(), emptyMap()).join(),
    )
    assertTrue(LanguageMode.same("ZH-cn", "zh-CN"))
    assertFalse(LanguageMode.same("zh-CN", "zh-TW"))
    assertEquals(listOf("こんにちは" to "en"), requests)
  }

  @Test
  fun sameLanguageOnEligibleInputBehavesExactlyLikeAuto() {
    val translate: (String, String) -> CompletableFuture<Translation?> = { _, _ ->
      CompletableFuture.completedFuture(Translation("不採用", "pt", 1.0))
    }
    val engine = LanguageEngine(settings, translate, { CompletableFuture.completedFuture(it) })
    assertEquals(
        engine.prepare("boa noite", "auto", emptyList(), emptyMap()).join(),
        engine.prepare("boa noite", "pt", emptyList(), emptyMap()).join(),
    )
  }

  @Test
  fun offAndDisabledNeverCallNetworkAndAutoStillTranslatesEnglish() {
    val engine =
        LanguageEngine(
            settings,
            { _, _ -> CompletableFuture.completedFuture(Translation("素敵な造り", "en", 1.0)) },
            { error("English uses translation") },
        )
    assertEquals(
        ChatMessage("nice build"),
        engine.prepare("nice build", "off", emptyList(), emptyMap()).join(),
    )
    assertEquals(
        ChatMessage("素敵な造り", "nice build", settings.format),
        engine.prepare("nice build", "auto", emptyList(), emptyMap()).join(),
    )
    val disabled =
        LanguageEngine(
            settings.copy(enabled = false),
            { _, _ -> error("disabled") },
            { error("disabled") },
        )
    assertEquals(
        ChatMessage("nice build"),
        disabled.prepare("nice build", "pt", emptyList(), emptyMap()).join(),
    )
  }

  @Test
  fun failedThrowingAndPendingTargetRequestsFallBackToAuto() {
    val providers: List<(String, String) -> CompletableFuture<Translation?>> =
        listOf(
            { _, _ -> CompletableFuture.failedFuture(IllegalStateException("fixture")) },
            { _, _ -> error("fixture") },
            { _, _ -> CompletableFuture.completedFuture(null) },
            { _, _ -> CompletableFuture<Translation?>() },
        )
    providers.forEach { provider ->
      val engine =
          LanguageEngine(
              settings.copy(timeoutMillis = 25),
              provider,
              { CompletableFuture.completedFuture(it) },
          )
      assertEquals(
          ChatMessage("こんばんは", "konbanha", settings.format),
          engine.prepare("konbanha", "pt", emptyList(), emptyMap()).get(2, TimeUnit.SECONDS),
      )
    }
  }

  @Test
  fun translationFailureFallsBackAndConversionCannotStallQueue() {
    val engine =
        LanguageEngine(
            settings.copy(timeoutMillis = 25),
            { text, target ->
              CompletableFuture.completedFuture(
                  if (target == "pt" && text == "konbanha") Translation("unused", "ja", 1.0)
                  else null
              )
            },
            { CompletableFuture<String>() },
        )
    assertEquals(
        ChatMessage("こんばんは", "konbanha", settings.format),
        engine.prepare("konbanha", "pt", emptyList(), emptyMap()).get(2, TimeUnit.SECONDS),
    )
  }

  @Test
  fun parsesDetectionCandidatesAndOptionalMalformedMetadata() {
    fun parse(metadata: String) =
        GoogleTranslationResponse.parse("""[[["訳"]],null,"pt",null,null,null,1,null,$metadata]""")
    assertEquals(
        listOf(LanguageCandidate("pt", 1.0)),
        parse("""[["pt"],null,[1],["pt"]]""").candidates,
    )
    assertEquals(
        listOf(LanguageCandidate("ja", 1.0, "ja-Latn")),
        parse("""[["ja"],null,[1],["ja-Latn"]]""").candidates,
    )
    assertEquals(
        listOf("en", "pt", "ja"),
        parse("""[["ja","pt","en","de"],null,[0.1,0.2,0.5,0.05],["ja","pt","en","de"]]""")
            .candidates
            .map { it.language },
    )
    listOf(
            "null",
            "{}",
            "[]",
            """["pt",null,[1],["pt"]]""",
            """[["pt"],null,["bad"],["pt"]]""",
            """[[7],null,[1],["pt"]]""",
            """[["pt"],null,[2],["pt"]]""",
            """[["pt"],null,[],[]]""",
        )
        .forEach { assertTrue(parse(it).candidates.isEmpty(), it) }
    assertTrue(
        GoogleTranslationResponse.parse("""[[["訳"]],null,"pt",null,null,null,1]""")
            .candidates
            .isEmpty()
    )
  }

  @Test
  fun checkShowsJapaneseLatinAsJapaneseWithoutRomanization() {
    val requests = mutableListOf<Pair<String, String>>()
    val engine =
        LanguageEngine(
            settings,
            { text, target ->
              requests += text to target
              CompletableFuture.completedFuture(
                  Translation("unused", "ja", 1.0, listOf(LanguageCandidate("ja", 1.0, "ja-Latn")))
              )
            },
            { error("judgment must not romanize") },
        )
    assertEquals("[判定] Japanese 100%", engine.check("konbanha").join())
    assertEquals(listOf("konbanha" to "ja"), requests)
    val noCandidates =
        LanguageEngine(
            settings,
            { _, _ -> CompletableFuture.completedFuture(Translation("こんばんは", "pt", 1.0)) },
            { error("not romaji") },
        )
    assertEquals("[判定] Portuguese 100%", noCandidates.check("boa noite").join())
    val failed = LanguageEngine(settings, { _, _ -> error("fixture") }, { error("fixture") })
    assertTrue(failed.check("boa noite").join().contains("判定できませんでした"))
  }

  @Test
  fun checkShowsSingleJapaneseCandidateWithoutTranslation() {
    val engine =
        LanguageEngine(
            settings,
            { _, _ ->
              CompletableFuture.completedFuture(
                  Translation("Hello", "ja", 1.0, listOf(LanguageCandidate("ja", 1.0)))
              )
            },
            { error("judgment must not convert") },
        )
    assertEquals("[判定] Japanese 100%", engine.check("こんにちは").join())
  }

  @Test
  fun checkShowsTopThreeCandidatesSeparatedByJapaneseCommas() {
    val result =
        GoogleTranslationResponse.parse(
            """[[["Hello"]],null,"ja",null,null,null,0.7,null,[["ko","en","ja","de"],null,[0.05,0.2,0.7,0.03],["ko","en","ja","de"]]]"""
        )
    val engine =
        LanguageEngine(
            settings,
            { _, _ -> CompletableFuture.completedFuture(result) },
            { error("judgment must not convert") },
        )
    assertEquals("[判定] Japanese 70%、English 20%、Korean 5%", engine.check("fixture").join())
  }

  @Test
  fun checkNormalizesJapaneseLatinDetailForEveryCandidate() {
    val engine =
        LanguageEngine(
            settings,
            { _, _ ->
              CompletableFuture.completedFuture(
                  Translation(
                      "unused",
                      "en",
                      0.7,
                      listOf(
                          LanguageCandidate("en", 0.7),
                          LanguageCandidate("ja-Latn", 0.3, "JA-latn"),
                      ),
                  )
              )
            },
            { error("judgment must not romanize") },
        )
    assertEquals("[判定] English 70%、Japanese 30%", engine.check("fixture").join())
  }

  @Test
  fun checkReturnsTheSameJudgmentForHiraganaAndConvertedKana() {
    val requests = mutableListOf<Pair<String, String>>()
    val engine =
        LanguageEngine(
            settings,
            { text, target ->
              requests += text to target
              CompletableFuture.completedFuture(
                  if (target == "pt") Translation("Olá", "ja", 1.0)
                  else if (text == "こんにちは") Translation("unused", "ja", 1.0)
                  else Translation("unused", "en", 0.5)
              )
            },
            { CompletableFuture.completedFuture(it) },
        )
    val hiragana = engine.prepare("こんにちは", "pt", emptyList(), emptyMap()).join()
    val romanized = engine.prepare("kon'nichiha", "pt", emptyList(), emptyMap()).join()
    requests.clear()
    val hiraganaJudgment = engine.check(judgmentSource(hiragana.copy(input = "こんにちは"))).join()
    val romanizedJudgment =
        engine.check(judgmentSource(romanized.copy(input = "kon'nichiha"))).join()
    assertEquals("[判定] Japanese 100%", hiraganaJudgment)
    assertEquals(hiraganaJudgment, romanizedJudgment)
    assertEquals(listOf("こんにちは" to "ja", "こんにちは" to "ja"), requests)
  }

  @Test
  fun checkLimitsLabelsToThreeAndUnknownLanguageUsesCode() {
    val engine =
        LanguageEngine(
            settings,
            { _, _ ->
              CompletableFuture.completedFuture(
                  Translation(
                      "訳",
                      "xx",
                      0.5,
                      listOf(
                          LanguageCandidate("xx", 0.5),
                          LanguageCandidate("pt", 0.3),
                          LanguageCandidate("en", 0.1),
                          LanguageCandidate("ja", 0.1),
                      ),
                  )
              )
            },
            { error("fixture") },
        )
    assertEquals(
        "[判定] xx 50%、Portuguese 30%、English 10%",
        engine.check("fixture").join(),
    )
  }

  @Test
  fun recentSpeechEvictsRestrictsReadersAndThrottlesIndependently() {
    val reader = UUID.randomUUID()
    val stranger = UUID.randomUUID()
    val recent = RecentSpeech(capacity = 2, intervalNanos = 3)
    val old = recent.remember("old", setOf(reader))
    val current = recent.remember("current", setOf(reader))
    recent.remember("new", setOf(reader))
    assertNull(recent.text(old, reader))
    val afterReload = RecentSpeech(capacity = 2)
    val fresh = afterReload.remember("fresh", setOf(reader))
    assertNotEquals(old, fresh)
    assertNull(afterReload.text(old, reader))
    assertNull(recent.text(current, stranger))
    assertEquals("current", recent.text(current, reader))
    assertTrue(recent.allow(reader, 0))
    assertFalse(recent.allow(reader, 2))
    assertTrue(recent.allow(stranger, 2))
    assertTrue(recent.allow(reader, 3))
    recent.forget(reader)
    assertTrue(recent.allow(reader, 4))
  }

  @Test
  fun indicatorHasGrayHoverAndRunCommandWithoutChangingMessageBody() {
    val reader = UUID.randomUUID()
    val recent = RecentSpeech()
    val indicator = recent.indicator("boa noite", setOf(reader))
    val plain = PlainTextComponentSerializer.plainText()
    assertEquals(" [?]", plain.serialize(indicator))
    assertEquals(NamedTextColor.GRAY, indicator.color())
    assertEquals(ClickEvent.Action.RUN_COMMAND, indicator.clickEvent()!!.action())
    val argument =
        assertIs<LanguageArgument.Check>(
            languageArgument(
                assertIs<ClickEvent.Payload.Text>(indicator.clickEvent()!!.payload())
                    .value()
                    .removePrefix("/lang ")
                    .split(" ")
            )
        )
    assertEquals(
        "この発言の言語を判定",
        plain.serialize(indicator.hoverEvent()!!.value() as net.kyori.adventure.text.Component),
    )
    assertEquals("boa noite", recent.text(argument.id, reader))
    assertEquals("boa noite", plain.serialize(ChatMessage("boa noite").component()))
  }

  @Test
  fun validatesArgumentsAndOnlyAcceptsLanguageNames() {
    assertEquals(LanguageArgument.Show, languageArgument(emptyList()))
    assertEquals(
        listOf(
            "auto",
            "off",
            "Portuguese",
            "English",
            "Korean",
            "Japanese",
            "Spanish",
            "German",
            "Indonesian",
            "French",
            "Chinese-Simplified",
            "Chinese-Traditional",
            "Russian",
            "Thai",
            "Vietnamese",
        ),
        LanguageMode.suggestions,
    )
    val languages =
        mapOf(
            "Portuguese" to "pt",
            "English" to "en",
            "Korean" to "ko",
            "Japanese" to "ja",
            "Spanish" to "es",
            "German" to "de",
            "Indonesian" to "id",
            "French" to "fr",
            "Chinese-Simplified" to "zh-CN",
            "Chinese-Traditional" to "zh-TW",
            "Russian" to "ru",
            "Thai" to "th",
            "Vietnamese" to "vi",
        )
    languages.forEach { (name, code) ->
      assertEquals(code, LanguageMode.code(name))
      assertEquals(code, LanguageMode.parse(name))
      assertEquals(LanguageArgument.Set(code), languageArgument(listOf(name)))
      assertEquals(code, LanguageMode.code(name.lowercase()))
      assertEquals(code, LanguageMode.parse(name.lowercase()))
      assertEquals(LanguageArgument.Set(code), languageArgument(listOf(name.lowercase())))
      assertEquals(code, LanguageMode.parse(name.uppercase()))
      assertEquals(name, LanguageMode.languageName(code))
      assertFalse(' ' in name)
    }
    assertEquals(LanguageArgument.Set("auto"), languageArgument(listOf("auto")))
    assertEquals(LanguageArgument.Set("auto"), languageArgument(listOf("AUTO")))
    assertEquals(LanguageArgument.Set("off"), languageArgument(listOf("off")))
    assertEquals(LanguageArgument.Set("off"), languageArgument(listOf("OFF")))
    assertEquals(LanguageArgument.Check(12), languageArgument(listOf("check", "12")))
    assertEquals(LanguageArgument.Check(12), languageArgument(listOf("CHECK", "12")))
    assertNull(LanguageMode.code("pt"))
    assertNull(LanguageMode.parse("pt"))
    listOf(
            "pt",
            "ja",
            "en",
            "ko",
            "es",
            "de",
            "id",
            "fr",
            "zh-CN",
            "zh-TW",
            "ru",
            "th",
            "vi",
            "fil",
            "sr-Latn",
        )
        .forEach {
          assertNull(LanguageMode.code(it), it)
          assertNull(LanguageMode.parse(it), it)
          assertNull(languageArgument(listOf(it)), it)
        }
    listOf(
            "ポルトガル語",
            "日本語",
            "英語",
            "韓国語",
            "スペイン語",
            "ドイツ語",
            "インドネシア語",
            "フランス語",
            "中国語（簡体字）",
            "中国語（繁体字）",
            "ロシア語",
            "タイ語",
            "ベトナム語",
        )
        .forEach {
          assertNull(LanguageMode.code(it), it)
          assertNull(LanguageMode.parse(it), it)
          assertNull(languageArgument(listOf(it)), it)
        }
    listOf(
            listOf("a"),
            listOf("ja_XX"),
            listOf("pt&x"),
            listOf("-en"),
            listOf("en-"),
            listOf("a".repeat(21)),
            listOf("check"),
            listOf("check", "-1"),
            listOf("check", "0"),
            listOf("check", ""),
            listOf("check", "999999999999999999999"),
            listOf("ポルトガル語", "英語"),
            listOf("check", "1", "extra"),
        )
        .forEach { assertNull(languageArgument(it), it.toString()) }
  }

  @Test
  fun persistsModesAndReadsOldFilesAndLegacyToggle(@TempDir directory: File) {
    val file = File(directory, "player.yml")
    assertEquals("auto", PlayerStateFileCodec.load(file, true).languageMode)
    assertEquals("off", PlayerStateFileCodec.load(file, true, false).languageMode)
    file.writeText(
        "active-channel: global\njoined-channels: [global]\nprivate-messages-enabled: false\n"
    )
    assertEquals("auto", PlayerStateFileCodec.load(file, true).languageMode)
    file.appendText("japanize-enabled: false\n")
    assertEquals("off", PlayerStateFileCodec.load(file, true).languageMode)
    listOf("auto", "off", "pt", "zh-TW").forEach { mode ->
      PlayerStateFileCodec.saveAtomic(file, "global", listOf("global"), false, mode != "off", mode)
      val loaded = PlayerStateFileCodec.load(file, true)
      assertEquals(mode, loaded.languageMode)
      assertEquals(mode != "off", loaded.japanizeEnabled)
      assertFalse(loaded.privateMessagesEnabled)
      assertEquals(setOf("global"), loaded.joinedChannels)
    }
    file.writeText("japanize-enabled: true\nlanguage-mode: pt\n")
    assertEquals("pt", PlayerStateFileCodec.load(file, true).languageMode)
    assertEquals(
        "Portuguese",
        LanguageMode.languageName(PlayerStateFileCodec.load(file, true).languageMode),
    )
    file.writeText("japanize-enabled: true\nlanguage-mode: sr-Latn\n")
    assertEquals("sr-latn", PlayerStateFileCodec.load(file, true).languageMode)
    file.writeText("japanize-enabled: true\nlanguage-mode: invalid_XX\n")
    assertEquals("auto", PlayerStateFileCodec.load(file, true).languageMode)
    file.writeText("japanize-enabled: false\nlanguage-mode: pt\n")
    assertEquals("off", PlayerStateFileCodec.load(file, true).languageMode)
    val state = PlayerChatState("global", mutableSetOf(), languageMode = "pt")
    state.japanizeEnabled = false
    assertEquals("off", state.languageMode)
    state.japanizeEnabled = true
    assertEquals("auto", state.languageMode)
  }
}
