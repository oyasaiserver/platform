package icu.oyasai.utilities.playerstate

import kotlin.test.*
import org.bukkit.GameMode
import org.bukkit.permissions.PermissionDefault
import org.bukkit.plugin.PluginDescriptionFile

class PlayerStateRulesTest {
  @Test
  fun `descriptor registers exactly approved aliases with Essentials permission names`() {
    val expected =
        mapOf(
            "gamemode" to
                listOf(
                    "gm",
                    "gmc",
                    "gms",
                    "gmsp",
                    "gma",
                    "sp",
                    "spec",
                    "spectator",
                    "survival",
                    "creative",
                ),
            "fly" to emptyList(),
            "speed" to listOf("flyspeed"),
            "jump" to listOf("j", "jumpto"),
            "time" to listOf("day", "night"),
            "weather" to listOf("sun", "rain"),
            "ptime" to listOf("playertime"),
            "heal" to emptyList(),
            "afk" to emptyList(),
            "nick" to emptyList(),
            "realname" to emptyList(),
        )
    val description =
        javaClass.getResourceAsStream("/plugin.yml")!!.use { PluginDescriptionFile(it) }
    assertEquals(expected, PlayerStateRules.aliases)
    expected.forEach { (name, aliases) ->
      val command = description.commands.getValue(name)
      assertEquals(aliases, command["aliases"] ?: emptyList<String>(), name)
      assertEquals("essentials.$name", command["permission"], name)
      assertEquals(
          PermissionDefault.OP,
          description.permissions.first { it.name == "essentials.$name" }.default,
          name,
      )
    }
    listOf("keepinv", "keepxp", "afk.auto").forEach { permission ->
      assertEquals(
          PermissionDefault.FALSE,
          description.permissions.first { it.name == "essentials.$permission" }.default,
          permission,
      )
    }
  }

  @Test
  fun `game mode permissions accept all or specific but not base command permission`() {
    GameMode.values().forEach { mode ->
      assertTrue(PlayerStateRules.canChangeMode({ it == "essentials.gamemode.all" }, mode))
      assertTrue(
          PlayerStateRules.canChangeMode(
              { it == "essentials.gamemode.${mode.name.lowercase()}" },
              mode,
          )
      )
      assertFalse(PlayerStateRules.canChangeMode({ it == "essentials.gamemode" }, mode))
    }
    mapOf(
            "gmc" to GameMode.CREATIVE,
            "gms" to GameMode.SURVIVAL,
            "gma" to GameMode.ADVENTURE,
            "gmsp" to GameMode.SPECTATOR,
            "sp" to GameMode.SPECTATOR,
        )
        .forEach { (alias, mode) -> assertEquals(mode, PlayerStateRules.mode(alias)) }
  }

  @Test
  fun `death permissions retain inventory and experience independently`() {
    assertFalse(PlayerStateRules.keepInventory { false })
    assertFalse(PlayerStateRules.keepExperience { false })
    assertTrue(PlayerStateRules.keepInventory { it == "essentials.keepinv" })
    assertFalse(PlayerStateRules.keepExperience { it == "essentials.keepinv" })
    assertTrue(PlayerStateRules.keepExperience { it == "essentials.keepxp" })
    assertFalse(PlayerStateRules.keepInventory { it == "essentials.keepxp" })
  }

  @Test
  fun `curse policies handle both curses without a keep policy masking the other curse`() {
    assertEquals("keep", PlayerStateRules.cursePolicy(true, true, "keep", "keep"))
    assertEquals("drop", PlayerStateRules.cursePolicy(true, true, "keep", "drop"))
    assertEquals("delete", PlayerStateRules.cursePolicy(true, true, "keep", "delete"))
    assertEquals("drop", PlayerStateRules.cursePolicy(true, true, "drop", "delete"))
    assertEquals("keep", PlayerStateRules.cursePolicy(false, false, "delete", "drop"))
  }

  @Test
  fun `speed interpolates around Bukkit defaults and respects type permissions`() {
    assertEquals(0.1f, PlayerStateRules.speed(1f, true, false, 0.8f), 0.00001f)
    assertEquals(0.2f, PlayerStateRules.speed(1f, false, false, 0.8f), 0.00001f)
    assertEquals(0.05f, PlayerStateRules.speed(0.5f, true, false, 0.8f), 0.00001f)
    assertEquals(0.45f, PlayerStateRules.speed(5.5f, true, false, 0.8f), 0.00001f)
    assertEquals(0.8f, PlayerStateRules.speed(10f, false, false, 0.8f), 0.00001f)
    assertEquals(1f, PlayerStateRules.speed(10f, true, true, 0.8f), 0.00001f)
    assertFailsWith<IllegalArgumentException> {
      PlayerStateRules.speed(Float.NaN, true, false, 0.8f)
    }
    assertFailsWith<IllegalArgumentException> {
      PlayerStateRules.speed(Float.POSITIVE_INFINITY, false, false, 0.8f)
    }
    assertFalse(PlayerStateRules.speedType(true) { it == "essentials.speed.walk" })
    assertTrue(PlayerStateRules.speedType(false) { it == "essentials.speed.fly" })
    assertTrue(PlayerStateRules.speedType(true) { false })
    assertFalse(PlayerStateRules.speedType(false) { false })
  }

  @Test
  fun `world time accepts ticks while player time requires names clock or explicit suffix`() {
    assertEquals(0L, PlayerStateRules.ticks("day"))
    assertEquals(14000L, PlayerStateRules.ticks("night"))
    assertEquals(6000L, PlayerStateRules.ticks("12pm"))
    assertEquals(100L, PlayerStateRules.ticks("100ticks"))
    assertEquals(100L, PlayerStateRules.ticks("100", bareTicks = true))
    assertFailsWith<IllegalArgumentException> { PlayerStateRules.ticks("100") }
  }

  @Test
  fun `nickname formatting honors individual denies and separate color format rgb permissions`() {
    assertEquals("&aName", PlayerStateRules.formatNick("&aName", { false }, { null }))
    assertEquals(
        "§aName&l!",
        PlayerStateRules.formatNick("&aName&l!", { it == "essentials.nick.color" }, { null }),
    )
    assertEquals(
        "&aName",
        PlayerStateRules.formatNick(
            "&aName",
            { it == "essentials.nick.color" },
            { if (it == "essentials.nick.green") false else null },
        ),
    )
    assertEquals(
        "§lName",
        PlayerStateRules.formatNick(
            "&lName",
            { false },
            { if (it == "essentials.nick.bold") true else null },
        ),
    )
    assertEquals(
        "&aName",
        PlayerStateRules.formatNick("&&aName", { it == "essentials.nick.color" }, { null }),
    )
    assertEquals(
        "§x§1§2§a§b§c§dName",
        PlayerStateRules.formatNick("&#12abcdName", { it == "essentials.nick.rgb" }, { null }),
    )
    assertEquals("Name", PlayerStateRules.formatNick("§aName", { false }, { null }))
  }
}
