package icu.oyasai.games

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue
import org.bukkit.configuration.file.YamlConfiguration

class GamesConfigurationTest {
  private fun resource(name: String): YamlConfiguration =
      YamlConfiguration().apply {
        loadFromString(javaClass.classLoader.getResource(name)!!.readText())
      }

  @Test
  fun `merged configuration enables all game modules by default`() {
    val config = resource("config.yml")
    assertFalse(
        config.getBoolean("games.bedwars.enabled"),
        "Legacy replacement must be explicitly enabled",
    )
    for (module in listOf("slot", "weapons", "pvp", "tntrun", "headhunt", "roulette")) {
      assertTrue(config.getBoolean("games.$module.enabled"), module)
    }
  }

  @Test
  fun `merged commands dependencies and default slot access remain registered`() {
    val plugin = resource("plugin.yml")
    for (command in
        listOf(
            "oslot",
            "shot",
            "pa",
            "tntrun",
            "oyasaigames",
            "roulette",
            "headhunt",
            "bw",
            "bwparty",
            "shout",
        )) {
      assertTrue(plugin.isConfigurationSection("commands.$command"), command)
    }
    assertTrue(
        plugin
            .getStringList("softdepend")
            .containsAll(
                listOf(
                    "SlotMachine",
                    "CrackShot",
                    "pvparena",
                    "Vault",
                    "BedWars",
                    "SBA",
                    "TNTRun_reloaded",
                    "Multiverse-Core",
                )
            )
    )
    assertEquals(true, plugin.get("permissions.slotmachine.access.default.default"))
  }
}
