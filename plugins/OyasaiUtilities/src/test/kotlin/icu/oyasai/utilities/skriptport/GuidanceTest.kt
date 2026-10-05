package icu.oyasai.utilities.skriptport

import java.nio.ByteBuffer
import java.nio.file.Path
import java.util.HexFormat
import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.junit.jupiter.api.io.TempDir

class GuidanceTest {
  @TempDir lateinit var directory: Path
  private val novice = UUID.fromString("00000000-0000-0000-0000-000000000001")
  private val guide = UUID.fromString("00000000-0000-0000-0000-000000000002")
  private val hex = HexFormat.of()

  @Test
  fun `mode checks default and excludes chukyu but sign only checks default`() {
    assertTrue(canGuide { it == "group.default" })
    assertFalse(canGuide { false })
    assertFalse(canGuide { it in setOf("group.default", "group.chukyu") })
  }

  @Test
  fun `CSV decodes all persistent types skips transient state and survives reopening`() {
    val csv = directory.resolve("guide_data.csv").toFile()
    val millis = 1700000000123L
    val date =
        hex.parseHex("810974696d657374616d7004") + ByteBuffer.allocate(8).putLong(millis).array()
    csv.writeText(
        listOf(
                "# Skript variables",
                "\"guide::clicked::$novice::area,\"\"test\"\"\", boolean, 01",
                "guide::guidedby::$novice, string, ${stringHex(guide.toString())}",
                "guide::guidedbyname::$novice, string, ${stringHex("案内Test")}",
                "guide::guidedat::$novice, date, ${hex.formatHex(date)}",
                "guide::pair::$novice, unsupported, ignored",
                "guide::guiding::$guide, unsupported, ignored",
                "annaimode::$guide, boolean, 01",
            )
            .joinToString("\n")
    )
    val data = readGuidanceCsv(csv)
    assertEquals(setOf(novice to "area,\"test\""), data.clicked)
    assertEquals(mapOf(novice to guide.toString()), data.guides)
    assertEquals(mapOf(novice to "案内Test"), data.names)
    assertEquals(mapOf(novice to millis), data.dates)
    val db = directory.resolve("guidance.db").toFile()
    GuidanceStore(db).use {
      it.open()
      assertTrue(it.canImport())
      assertTrue(it.importLegacy(data))
      assertFalse(it.importLegacy(data))
      assertEquals(GuidanceRecord(guide.toString(), "案内Test", millis), it.record(novice))
    }
    GuidanceStore(db).use {
      it.open()
      assertFalse(it.canImport())
      assertTrue(it.clicked(novice, "area,\"test\""))
      assertFalse(it.clicked(guide, "area,\"test\""))
      assertNull(it.record(guide))
      it.complete(novice, "second", guide, "OtherGuide", millis + 1)
      assertTrue(it.clicked(novice, "area,\"test\""))
      assertTrue(it.clicked(novice, "second"))
      assertTrue(it.clicked(novice, "SECOND"))
      assertEquals(GuidanceRecord(guide.toString(), "OtherGuide", millis + 1), it.record(novice))
      assertFailsWith<Exception> { it.complete(novice, "second", guide, "Wrong", 0) }
      assertEquals("OtherGuide", it.record(novice)?.name)
    }
  }

  @Test
  fun `nonempty tables and completed empty import cannot be reimported`() {
    GuidanceStore(directory.resolve("nonempty.db").toFile()).use {
      it.open()
      it.complete(novice, "one", guide, "GuideTest", 0)
      assertFalse(it.importLegacy(GuidanceImport(emptySet(), emptyMap(), emptyMap(), emptyMap())))
    }
    GuidanceStore(directory.resolve("empty.db").toFile()).use {
      it.open()
      assertTrue(it.importLegacy(GuidanceImport(emptySet(), emptyMap(), emptyMap(), emptyMap())))
      assertFalse(it.canImport())
    }
  }

  @Test
  fun `malformed date and truncated UTF8 string are rejected`() {
    val csv = directory.resolve("invalid.csv").toFile()
    csv.writeText("guide::guidedat::$novice, date, ${"00".repeat(20)}")
    assertFailsWith<IllegalArgumentException> { readGuidanceCsv(csv) }
    csv.writeText("guide::guidedbyname::$novice, string, 80036162")
    assertFailsWith<IllegalArgumentException> { readGuidanceCsv(csv) }
    csv.writeText("guide::guidedbyname::$novice, string, 8001ff")
    assertFailsWith<java.nio.charset.CharacterCodingException> { readGuidanceCsv(csv) }
  }

  @Test
  fun `menu keeps command clicks prefixes punctuation and exact suggestion`() {
    val japanese =
        GuidanceMessages.component(GuidanceMessages.menus.getValue("annai").getValue("")[1])
    assertEquals("[① はじめまして]", PlainTextComponentSerializer.plainText().serialize(japanese))
    assertEquals(ClickEvent.runCommand("/annai start"), japanese.children().last().clickEvent())
    val english =
        GuidanceMessages.component(GuidanceMessages.menus.getValue("annai-en").getValue("")[1])
    assertEquals(ClickEvent.runCommand("/annai-en start"), english.children().last().clickEvent())
    val spawn =
        GuidanceMessages.component(GuidanceMessages.menus.getValue("annai").getValue("spawn")[1])
    assertEquals(
        "#/spawnコマンドを打ってみてください。これでいつでもロビーに戻ってこれます",
        PlainTextComponentSerializer.plainText().serialize(spawn),
    )
    assertEquals(
        ClickEvent.suggestCommand("#/spawnコマンドを打ってみてください。これでいつでもロビーに戻ってこれます"),
        spawn.children().last().clickEvent(),
    )
    val trailing =
        GuidanceMessages.component(
            GuidanceMessages.menus.getValue("annai-en").getValue("shigen").last()
        )
    assertEquals(
        ClickEvent.suggestCommand(
            "When you start feeling laggy, press this button to clear all drops. "
        ),
        trailing.children().last().clickEvent(),
    )
  }

  private fun stringHex(value: String): String {
    val bytes = value.toByteArray(Charsets.UTF_8)
    return hex.formatHex(
        ByteBuffer.allocate(2).putShort((0x8000 or bytes.size).toShort()).array() + bytes
    )
  }
}
