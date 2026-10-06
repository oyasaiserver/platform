package io.oyasai.chat

import io.oyasai.chat.common.japanize.*
import io.oyasai.chat.common.protocol.*
import io.oyasai.chat.paper.japanize.LunaImport
import io.oyasai.chat.paper.state.PlayerStateFileCodec
import java.io.File
import java.util.UUID
import java.util.concurrent.CompletableFuture
import kotlin.test.*
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.io.TempDir

class JapanizeTest {
  @TempDir lateinit var directory: File
  private val settings = JapanizeSettings(enabled = true)

  @Test
  fun romanization() {
    mapOf(
            "saikinotiyasui" to "さいきのちやすい",
            "saikinnotiyasui" to "さいきんおちやすい",
            "n'" to "ん",
            "kanpai" to "かんぱい",
            "kin" to "きん",
            "nana" to "なな",
            "nya" to "にゃ",
            "kitte" to "きって",
            "gakkou" to "がっこう",
            "xtu" to "っ",
            "ltu" to "っ",
            "ltsu" to "っ",
            "xa" to "ぁ",
            "li" to "ぃ",
            "xya" to "ゃ",
            "ko-hi-" to "こーひー",
            "shi chi tsu ti tu fu ja jya" to "し ち つ ち つ ふ じゃ じゃ",
            "KAN" to "かん",
        )
        .forEach { (input, expected) -> assertEquals(expected, Romaji.convert(input), input) }
  }

  @Test
  fun protectedWordsAreNeverSentToProvider() {
    val requests = mutableListOf<String>()
    val engine =
        Japanizer(
            settings.copy(
                dictionary =
                    mapOf(
                        "kakezumou" to "賭け相撲",
                        ":good:" to "👍",
                        "./spawn" to "/spawn",
                        "pvp" to "PVP",
                        "spawn" to "spawn",
                    )
            )
        ) {
          requests += it
          CompletableFuture.completedFuture(it)
        }
    val prepared =
        engine
            .prepare(
                "kakezumou :good: ./spawn pvp spawn Player_1 https://example.org/spawn?a=1 kon'nichiha",
                true,
                listOf("Player_1"),
            )
            .join()
    assertEquals(
        "賭け相撲 👍 /spawn PVP spawn Player_1 https://example.org/spawn?a=1 こんにちは",
        prepared.text,
    )
    assertTrue(
        requests.none {
          it.contains("spawn") ||
              it.contains("Player_1") ||
              it.contains("https:") ||
              it.contains("賭け相撲") ||
              it.contains("👍")
        }
    )
    assertEquals("original", engine.prepare("#original", true, emptyList()).join().text)
    assertFalse(
        JapanizePreparation.parts("spawner", mapOf("spawn" to "protected"), emptyList()).any {
          it.protected
        }
    )
  }

  @Test
  fun skippedInputsNeverCallProvider() {
    val engine = Japanizer(settings) { error("Must not call network") }
    listOf("日本語 kon'nichiha", "123 !", "#kon'nichiha").forEach {
      assertNull(engine.prepare(it, true, emptyList()).join().original)
    }
    assertEquals("kon'nichiha", engine.prepare("kon'nichiha", false, emptyList()).join().text)
    assertEquals(
        "#kon'nichiha",
        Japanizer(settings.copy(enabled = false)) { error("network") }
            .prepare("#kon'nichiha", true, emptyList())
            .join()
            .text,
    )
  }

  @Test
  fun googleFirstCandidateAndMalformedResponses() {
    assertEquals("最近落ちやすい", GoogleResponse.parse("""[["さいきん",["最近","細菌"]],["おちやすい",["落ちやすい"]]]"""))
    listOf("null", "[]", "{}", "[[\"よみ\",[]]]", "[[\"よみ\",[2]]]").forEach { invalid ->
      assertFails { GoogleResponse.parse(invalid) }
    }
  }

  @Test
  fun failuresFallBackToHiragana() {
    val engine =
        Japanizer(settings) {
          CompletableFuture.failedFuture(java.net.http.HttpTimeoutException("fixture"))
        }
    val prepared = engine.prepare("kon'nichiha", true, emptyList()).join()
    assertEquals("こんにちは", prepared.text)
    assertEquals("kon'nichiha", prepared.original)
    val throwing = Japanizer(settings) { error("fixture failure") }
    assertEquals("こんにちは", throwing.prepare("kon'nichiha", true, emptyList()).join().text)
  }

  @Test
  fun conversionWaitsWithoutBlockingCaller() {
    val response = CompletableFuture<String>()
    val result = Japanizer(settings) { response }.prepare("kon'nichiha", true, emptyList())
    assertFalse(result.isDone)
    response.complete("今日は")
    assertEquals("今日は", result.join().text)
  }

  @Test
  fun protocolRoundTripAndLengthLimits() {
    val id = UUID.randomUUID()
    val envelope =
        NetworkEnvelope.backend(
            type = MessageType.PRIVATE_MESSAGE,
            backendId = "fixture",
            senderName = "Player",
            content = "こんにちは",
            japanizeOriginal = "kon'nichiha",
            japanizeFormat = settings.format,
            originPlayerId = id,
            targetPlayerId = UUID.randomUUID(),
        )
    val decoded = EnvelopeCodec.decode(EnvelopeCodec.encode(envelope))
    assertEquals(ChatMessage("こんにちは", "kon'nichiha", settings.format), ChatMessage.from(decoded))
    assertFailsWith<IllegalArgumentException> {
      EnvelopeCodec.decode(EnvelopeCodec.encode(envelope.copy(content = "あ".repeat(4096))))
    }
    assertFailsWith<IllegalArgumentException> {
      EnvelopeCodec.decode(EnvelopeCodec.encode(envelope.copy(japanizeOriginal = null)))
    }
    assertFailsWith<IllegalArgumentException> {
      EnvelopeCodec.decode(EnvelopeCodec.encode(envelope.copy(japanizeFormat = "x".repeat(513))))
    }
    val oversized =
        Japanizer(settings) { CompletableFuture.completedFuture("あ".repeat(4096)) }
            .prepare("a", true, emptyList())
            .join()
    assertEquals(ChatMessage("a"), oversized)
  }

  @Test
  fun importParsesBothFlatDirectionsAndReportsMissing() {
    val id = UUID.randomUUID()
    val preferences = mapOf("PLAYER" to false, "Missing" to true)
    val dictionary = mapOf("./spawn" to "/spawn", ":good:" to "👍")
    val a = LunaImport.parse(preferences, mapOf("Player" to id.toString()), dictionary)
    val b = LunaImport.parse(preferences, mapOf(id.toString() to "Player"), dictionary)
    assertEquals(a, b)
    assertEquals(mapOf(id to false), a.players)
    assertEquals(1, a.unresolved)
    assertFails {
      LunaImport.parse(mapOf("Player" to "false"), mapOf("Player" to id.toString()), dictionary)
    }
    assertFails {
      LunaImport.parse(preferences, mapOf("Player" to mapOf("uuid" to id.toString())), dictionary)
    }
  }

  @Test
  fun importFilesAndPersistenceAreIdempotentAndKeepLiteralKeys() {
    val id = UUID.randomUUID()
    File(directory, "japanize.yml").writeText("Player: false\nMissing: true\n")
    File(directory, "uuidcache.yml").writeText("Player: '$id'\n")
    File(directory, "dictionary.yml").writeText("'./spawn': /spawn\n':good:': 👍\nspawn: spawn\n")
    val first = LunaImport.load(directory)
    assertEquals(first, LunaImport.load(directory))
    val imported = File(directory, "imported.yml")
    LunaImport.saveDictionary(imported, first.dictionary)
    val dictionaryBytes = imported.readBytes()
    LunaImport.saveDictionary(imported, LunaImport.dictionary(imported) + first.dictionary)
    assertContentEquals(dictionaryBytes, imported.readBytes())
    assertEquals(first.dictionary, LunaImport.dictionary(imported))
    val player = File(directory, "$id.yml")
    repeat(2) {
      PlayerStateFileCodec.saveAtomic(
          player,
          "global",
          listOf("global"),
          true,
          first.players.getValue(id),
      )
    }
    val state = PlayerStateFileCodec.load(player, true)
    assertFalse(state.japanizeEnabled)
    assertEquals("global", state.activeChannel)
    assertTrue(state.privateMessagesEnabled)
    assertFalse(PlayerStateFileCodec.load(player, true).japanizeEnabled)
    assertFalse(
        PlayerStateFileCodec.load(File(directory, "absent.yml"), true, false).japanizeEnabled
    )
  }

  @Test
  fun markerRetentionCanBeConfigured() {
    val retained = Japanizer(settings.copy(stripMarker = false)) { error("must not convert") }
    assertEquals(ChatMessage("#abc"), retained.prepare("#abc", true, emptyList()).join())
  }

  @Test
  fun oldPlayerFilesNeedAnExplicitImportedPreference() {
    val file = File(directory, "old-player.yml")
    file.writeText(
        "active-channel: global\njoined-channels: [global]\nprivate-messages-enabled: false\n"
    )
    assertFalse(PlayerStateFileCodec.hasJapanizeSetting(file))
    val old = PlayerStateFileCodec.load(file, true, true)
    PlayerStateFileCodec.saveAtomic(
        file,
        old.activeChannel,
        old.joinedChannels.toList(),
        old.privateMessagesEnabled,
        true,
    )
    assertTrue(PlayerStateFileCodec.hasJapanizeSetting(file))
    assertTrue(PlayerStateFileCodec.load(file, true, false).japanizeEnabled)
    assertFalse(PlayerStateFileCodec.load(file, true, false).privateMessagesEnabled)
  }
}
