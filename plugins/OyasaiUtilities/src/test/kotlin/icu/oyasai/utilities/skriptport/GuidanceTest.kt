package icu.oyasai.utilities.skriptport

import java.nio.file.Path
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

  @Test
  fun `mode checks default and excludes chukyu but sign only checks default`() {
    assertTrue(canGuide { it == "group.default" })
    assertFalse(canGuide { false })
    assertFalse(canGuide { it in setOf("group.default", "group.chukyu") })
  }

  @Test
  fun `persistent records survive reopening`() {
    val millis = 1700000000123L
    val db = directory.resolve("guidance.db").toFile()
    GuidanceStore(db).use {
      it.open()
      it.complete(novice, "area,\"test\"", guide, "案内Test", millis)
      assertEquals(GuidanceRecord(guide.toString(), "案内Test", millis), it.record(novice))
    }
    GuidanceStore(db).use {
      it.open()
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
}
