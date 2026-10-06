package icu.oyasai.utilities.workstation

import java.util.Base64
import kotlin.test.*
import org.bukkit.plugin.PluginDescriptionFile

class WorkstationRulesTest {
  @Test
  fun `plugin descriptor preserves exactly the approved aliases and permissions`() {
    val description =
        javaClass.getResourceAsStream("/plugin.yml")!!.use { PluginDescriptionFile(it) }
    val expected =
        mapOf(
            "workbench" to listOf("craft", "wb"),
            "enderchest" to listOf("ec"),
            "disposal" to listOf("trash"),
            "anvil" to emptyList(),
            "loom" to emptyList(),
            "grindstone" to emptyList(),
            "stonecutter" to emptyList(),
            "smithingtable" to emptyList(),
            "hat" to listOf("head"),
            "skull" to listOf("eskull", "playerskull"),
        )
    assertEquals(expected, WorkstationRules.aliases)
    expected.forEach { (name, aliases) ->
      val command = description.commands.getValue(name)
      assertEquals(aliases, command["aliases"] ?: emptyList<String>(), name)
      assertEquals("essentials.$name", command["permission"], name)
      assertEquals(
          org.bukkit.permissions.PermissionDefault.OP,
          description.permissions.first { it.name == "essentials.$name" }.default,
      )
    }
    assertEquals(listOf("head"), WorkstationRules.aliases.getValue("hat"))
    assertFalse(WorkstationRules.aliases.getValue("skull").contains("head"))
    val permissions = description.permissions.map { it.name }.toSet()
    listOf(
            "enderchest.others",
            "enderchest.modify",
            "hat.ignore-binding",
            "hat.prevent-type.<item-name>",
            "skull.others",
            "skull.modify",
            "skull.spawn",
            "skull.spawn.others",
        )
        .forEach { assertContains(permissions, "essentials.$it") }
  }

  @Test
  fun `skull uses recipient permission and exactly two arguments`() {
    assertEquals("recipient", WorkstationRules.skullRecipient(arrayOf("owner", "recipient")))
    assertNull(WorkstationRules.skullRecipient(arrayOf("owner", "recipient", "extra")))
    assertEquals("sender", WorkstationRules.skullOwner("invalid!", "sender", false))
    assertEquals("owner", WorkstationRules.skullOwner("owner", "sender", true))
    assertEquals("sender", WorkstationRules.skullOwner(null, "sender", true))
    assertFailsWith<IllegalArgumentException> {
      WorkstationRules.skullOwner("invalid!", "sender", true)
    }
    val hash = "a".repeat(64)
    val encoded =
        Base64.getEncoder()
            .encodeToString(
                """{"textures":{"SKIN":{"url":"http://textures.minecraft.net/texture/$hash"}}}"""
                    .toByteArray()
            )
    assertEquals(180, encoded.length)
    assertEquals(hash, WorkstationRules.skullOwner(encoded, "sender", true))
    assertEquals(hash, WorkstationRules.skullOwner(hash, "sender", true))
    assertFailsWith<IllegalArgumentException> {
      WorkstationRules.skullOwner("=".repeat(180), "sender", true)
    }
  }

  @Test
  fun `hat prevention honors explicit material exceptions and removal is case sensitive`() {
    assertTrue(WorkstationRules.preventHat(true, null))
    assertFalse(WorkstationRules.preventHat(true, false))
    assertTrue(WorkstationRules.preventHat(null, true))
    assertFalse(WorkstationRules.preventHat(null, null))
    assertTrue(WorkstationRules.removeHat("remove"))
    assertTrue(WorkstationRules.removeHat("off"))
    assertTrue(WorkstationRules.removeHat("0"))
    assertFalse(WorkstationRules.removeHat("REMOVE"))
    assertFalse(WorkstationRules.removeHat("wear"))
  }
}
