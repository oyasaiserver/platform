package io.oyasai.chat

import io.oyasai.chat.common.japanize.ChatMessage
import io.oyasai.chat.paper.config.PaperConfigLoader
import kotlin.test.*
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.configuration.file.YamlConfiguration
import org.junit.jupiter.api.Test

class JapanizeConfigTest {
  @Test
  fun backendConfigurationAndDefaults() {
    val yaml = YamlConfiguration()
    yaml.loadFromString(javaClass.classLoader.getResource("config.yml")!!.readText())
    for (backend in listOf("main", "lobby", "axiom")) {
      yaml.set("network.backend-id", backend)
      assertTrue(PaperConfigLoader.load(yaml).japanize.enabled)
      assertTrue(PaperConfigLoader.load(yaml).japanize.playerDefault)
    }
    yaml.set("japanize.enabled", null)
    assertTrue(PaperConfigLoader.load(yaml).japanize.enabled)
    yaml.set("japanize.enabled", false)
    assertFalse(PaperConfigLoader.load(yaml).japanize.enabled)
    yaml.set("japanize.backends.axiom", true)
    assertFalse(PaperConfigLoader.load(yaml).japanize.enabled)
    yaml.set("japanize.timeout-millis", 0)
    assertFails { PaperConfigLoader.load(yaml) }
    yaml.set("japanize.timeout-millis", 2000)
    yaml.set("japanize.format", "<converted> <converted> <original>")
    assertFails { PaperConfigLoader.load(yaml) }
  }

  @Test
  fun bodyPlaceholdersAreLiteralAndOriginalIsGray() {
    val text =
        ChatMessage(
            "日本語 <red>literal",
            "<click:run_command:'/op test'>original",
            "<converted> <gray><original></gray>",
        )
    val component = text.component()
    assertEquals(
        "日本語 <red>literal <click:run_command:'/op test'>original",
        PlainTextComponentSerializer.plainText().serialize(component),
    )
    fun noClick(c: net.kyori.adventure.text.Component): Boolean =
        c.clickEvent() == null && c.children().all(::noClick)
    assertTrue(noClick(component))
    fun hasGray(c: net.kyori.adventure.text.Component): Boolean =
        c.color() == NamedTextColor.GRAY || c.children().any(::hasGray)
    assertTrue(hasGray(component))
  }
}
