package io.oyasai.oyasaiAdminTools.assistant

import java.io.File
import kotlin.test.*
import org.bukkit.configuration.file.YamlConfiguration

class AssistantRulesTest {
  @Test
  fun commandBoundariesAndForcedPromotionAreChecked() {
    val config = YamlConfiguration().apply { load(File("src/main/resources/config.yml")) }
    val allowed = config.getStringList("assistant.allowed-commands")
    listOf(
            "/syokaku promote Steve",
            "syokaku promote Steve 通常昇格",
            "SYOKAKU  iscandidate Steve",
            "tp Steve Alex",
            "gamemode creative Steve",
            "kick Steve 理由",
        )
        .forEach { assertTrue(AssistantRules.allows(it, allowed), it) }
    listOf(
            "op Steve",
            "syokaku promoteAll Steve",
            "syokaku seeplayerinfoX Steve",
            "minecraft:tp Steve Alex",
            "tp Steve\nkick Alex",
            "tp\tSteve Alex",
            "syokaku promote Steve GOOD",
            "syokaku promote Steve 備考GOOD付き",
            "syokaku promote Steve good",
            "syokaku promote Steve §aGOOD",
            "//tp Steve Alex",
            "",
        )
        .forEach { assertFalse(AssistantRules.allows(it, allowed), it) }
    assertTrue(AssistantRules.allows("syokaku promote GOOD_Player", allowed))
    assertFalse(AssistantRules.allows("syokaku promote Steve GOOD", listOf("syokaku")))
    assertFalse(AssistantRules.allows("kick Steve", emptyList()))
    val reads = config.getStringList("assistant.read-only-commands")
    assertTrue(AssistantRules.allowsQuery("/syokaku iscandidate Steve", reads))
    assertTrue(AssistantRules.allowsQuery("syokaku seeplayerinfo Steve_123", reads))
    listOf(
            "syokaku promote Steve",
            "syokaku seeplayerinfo Steve gui",
            "syokaku seeplayerinfo Steve 1",
            "tp Steve Alex",
            "syokaku iscandidate @a",
            "syokaku iscandidate Steve!",
        )
        .forEach {
          assertFalse(AssistantRules.allowsQuery(it, allowed + listOf("*", "syokaku")), it)
        }
    assertFalse(AssistantRules.allowsQuery("syokaku iscandidate Steve", emptyList()))
    assertFalse(config.getBoolean("assistant.enabled"))
    assertEquals("OYASAI_ASSISTANT_API_KEY", config.getString("assistant.api-key-env"))
  }
}
