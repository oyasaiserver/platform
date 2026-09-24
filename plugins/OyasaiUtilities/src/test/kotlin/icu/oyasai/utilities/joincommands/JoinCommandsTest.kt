package icu.oyasai.utilities.joincommands

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue
import org.bukkit.configuration.file.YamlConfiguration
import org.bukkit.permissions.PermissionDefault

class JoinCommandsTest {
  @Test
  fun `keeps definition order and applies defaults`() {
    val yaml =
        YamlConfiguration().apply {
          loadFromString(
              """
              ignored:
                command-list: [wrong]
              server-join-commands:
                second:
                  command-list: ["say two"]
                first:
                  command-list: ["say one"]
                  permission: voxelsniper.brush
                  first-join-only: true
                  delay: 40
              """
                  .trimIndent()
          )
        }
    val warnings = mutableListOf<String>()

    val definitions =
        parseJoinCommands(yaml.getConfigurationSection("server-join-commands"), warnings::add)

    assertEquals(listOf("second", "first"), definitions.map { it.id })
    assertEquals(listOf("say two"), definitions[0].commands)
    assertNull(definitions[0].permission)
    assertFalse(definitions[0].firstJoinOnly)
    assertEquals(0L, definitions[0].delay)
    assertEquals("voxelsniper.brush", definitions[1].permission?.name)
    assertEquals(PermissionDefault.FALSE, definitions[1].permission?.default)
    assertTrue(definitions[1].firstJoinOnly)
    assertEquals(40L, definitions[1].delay)
    assertTrue(warnings.isEmpty())
  }

  @Test
  fun `skips empty lists and negative delays with one warning each`() {
    val yaml =
        YamlConfiguration().apply {
          loadFromString(
              """
              server-join-commands:
                empty:
                  command-list: []
                negative:
                  command-list: ["say no"]
                  delay: -1
                valid:
                  command-list: ["say yes"]
                  permission: ""
              """
                  .trimIndent()
          )
        }
    val warnings = mutableListOf<String>()

    val definitions =
        parseJoinCommands(yaml.getConfigurationSection("server-join-commands"), warnings::add)

    assertEquals(listOf("valid"), definitions.map { it.id })
    assertNull(definitions[0].permission)
    assertEquals(2, warnings.size)
    assertTrue(warnings[0].contains("empty"))
    assertTrue(warnings[1].contains("negative"))
  }

  @Test
  fun `prepares player and console commands and skips blanks`() {
    assertEquals(
        JoinCommand(true, "msg Alex Alex"),
        prepareJoinCommand("[PLAYER]msg {player} {player}", "Alex"),
    )
    assertEquals(
        JoinCommand(false, "tellraw Alex Alex"),
        prepareJoinCommand("tellraw {player} {player}", "Alex"),
    )
    assertNull(prepareJoinCommand("[PLAYER]", "Alex"))
    assertNull(prepareJoinCommand("[PLAYER]  ", "Alex"))
    assertNull(prepareJoinCommand("", "Alex"))
  }
}
