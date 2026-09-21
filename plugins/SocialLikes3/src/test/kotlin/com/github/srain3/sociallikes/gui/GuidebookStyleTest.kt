package com.github.srain3.sociallikes.gui

import kotlin.test.Test
import kotlin.test.assertEquals
import net.kyori.adventure.text.format.TextColor
import org.bukkit.configuration.file.YamlConfiguration

class GuidebookStyleTest {
  @Test
  fun `partial section falls back to defaults and substitutes placeholders`() {
    val yaml =
        YamlConfiguration.loadConfiguration(
            """
            options: { brackets: false }
            roles:
              title: { color: "#123456", underline: true }
              author: { color: "red" }
            texts:
              progress: "{n} of {m} ({x})"
            """
                .trimIndent()
                .reader()
        )
    val warnings = mutableListOf<String>()
    val style = GuidebookStyle(yaml, warnings::add)

    assertEquals(GuidebookStyle.Role(TextColor.color(0x123456), true, true), style.role("title"))
    assertEquals(GuidebookStyle.DEFAULT_ROLES["author"], style.role("author"))
    assertEquals(GuidebookStyle.DEFAULT_ROLES["entry"], style.role("entry"))
    assertEquals(1, warnings.size)
    assertEquals("3 of 5 ({x})", style.text("progress", mapOf("n" to 3, "m" to 5)))
    assertEquals("作者: なじ", style.text("author", mapOf("author" to "なじ")))
    assertEquals("建築追加", style.button("bAdd"))

    val empty = GuidebookStyle(null)
    assertEquals("[建築追加]", empty.button("bAdd"))
    assertEquals("", empty.text("hAdd"))
  }
}
