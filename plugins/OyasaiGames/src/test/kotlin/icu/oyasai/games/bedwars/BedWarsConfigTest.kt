package icu.oyasai.games.bedwars

import java.io.File
import java.util.logging.Logger
import kotlin.test.*
import org.bukkit.configuration.file.YamlConfiguration
import org.junit.jupiter.api.io.TempDir

class BedWarsConfigTest {
  private val fixture =
      """
      name: Example
      world: example_world
      pos1: 0;0;0
      pos2: 20;30;20
      lobbySpawn: 2;5;2;10;20
      lobbySpawnWorld: example_lobby
      specSpawn: 5;20;5
      minPlayers: 2
      pauseCountdown: 5
      teams:
        Red:
          color: RED
          maxPlayers: 2
          bed: 2;2;2
          spawn: 2;3;2
        Blue:
          color: BLUE
          maxPlayers: 2
          bed: 15;2;15
          spawn: 15;3;15
      spawners:
      - location: 3;3;3
        type: iron
        startLevel: 1.0
        maxSpawnedResources: -1
        hologramEnabled: true
      stores:
      - loc: 4;3;4
        type: VILLAGER
        shop: shop-example.yml
      """
          .trimIndent()

  @Test
  fun `completed games use configured main lobby while interruption keeps original destination`() {
    val config =
        YamlConfiguration().apply {
          set("mainlobby.enabled", true)
          set("mainlobby.world", "fictional-lobby")
          set("mainlobby.location", "10;70;20;45;5")
        }
    assertEquals(
        BwPoint("fictional-lobby", 10.0, 70.0, 20.0, 45f, 5f),
        mainLobbyPoint(config, true),
    )
    assertNull(mainLobbyPoint(config, false))
    config.set("mainlobby.enabled", false)
    assertNull(mainLobbyPoint(config, true))
    config.set("mainlobby.enabled", true)
    config.set("mainlobby.location", "invalid")
    assertFails { mainLobbyPoint(config, true) }
  }

  @Test
  fun `semicolon parser validates finite coordinates and preserves rotation`() {
    assertEquals(BwPoint("test", 1.0, 2.0, 3.0, 40f, 50f), BwPoint.parse("1;2;3;40;50", "test"))
    assertFails { BwPoint.parse("NaN;2;3", "test") }
    assertFails { BwPoint.parse("1;2", "test") }
    assertFails { BwPoint.parse("1;2;3", "") }
    assertFails { BwPoint.parse("1;2;3;1e100;0", "test") }
  }

  @Test
  fun `arena loading separates lobby world and rejects unsafe shop paths`(@TempDir folder: File) {
    val f = File(folder, "example.yml").apply { writeText(fixture) }
    val arena = BwArena.load(f)
    assertEquals("example_lobby", arena.lobby.world)
    assertEquals("double", arena.mode)
    assertEquals(4, arena.maxPlayers)
    assertEquals("iron", arena.generators.single().type)
    assertTrue(arena.contains(BwPoint("example_world", 20.5, 30.5, 20.5)))
    assertFalse(arena.contains(BwPoint("example_world", 21.0, 30.0, 20.0)))
    assertFalse(arena.contains(BwPoint("other", 1.0, 1.0, 1.0)))
    f.writeText(fixture.replace("name: Example", "name: ../invalid"))
    assertFails { BwArena.load(f) }
    f.writeText(fixture.replace("color: BLUE", "color: RED"))
    assertFails { BwArena.load(f) }
    f.writeText(fixture.replace("color: RED", "color: INVALID"))
    assertFails { BwArena.load(f) }
    f.writeText(fixture.replace("location: 3;3;3", "location: 50;3;3"))
    assertFails { BwArena.load(f) }
    f.writeText(fixture.replace("shop-example.yml", "../outside.yml"))
    assertFails { BwArena.load(f) }
  }

  @Test
  fun `import isolates bad arenas is atomic and runs once without changing sources`(
      @TempDir folder: File
  ) {
    val old = File(folder, "legacy")
    File(old, "arenas").mkdirs()
    val source = File(old, "arenas/example.yml").apply { writeText(fixture) }
    File(old, "arenas/bad.yml").writeText("world: missing")
    File(old, "shop-example.yml").writeText("shop: []")
    File(old, "shop_old.yml").writeText("backup: true")
    File(old, "shop-extra.yml").writeText("shop: []")
    File(old, "database").mkdirs()
    File(old, "database/bw_stats_players.yml").writeText("data: {}")
    if (!System.getProperty("os.name").lowercase().contains("win")) {
      File(old, ":w").writeText("")
    } else {
      File(old, "vim_w").writeText("")
    }
    val sba = File(folder, "addon").apply { mkdirs() }
    File(sba, "sbaconfig.yml").writeText("game-scoreboard:\n  enabled: true")
    File(sba, "quickbuy").mkdirs()
    File(sba, "quickbuy/example.yml").writeText("items: []")
    val dest = File(folder, "bedwars")
    assertEquals(1, importLegacy(dest, old, sba, Logger.getAnonymousLogger()))
    assertEquals(fixture, source.readText())
    assertEquals(0, importLegacy(dest, old, sba, Logger.getAnonymousLogger()))
    assertFalse(File(dest, "arenas/bad.yml").exists())
    assertFalse(File(dest, "shop_old.yml").exists())
    assertTrue(File(dest, "shop-example.yml").exists())
    assertTrue(File(dest, "shop-extra.yml").exists())
    assertEquals("data: {}", File(dest, "database/bw_stats_players.yml").readText())
    assertTrue(File(dest, "SBA/quickbuy/example.yml").exists())
    assertTrue(
        BedWarsFiles(dest, Logger.getAnonymousLogger()).sba.getBoolean("game-scoreboard.enabled")
    )
  }

  @Test
  fun `block boundaries use floor for negative fractional points`() {
    assertTrue(bwBlockInside(-1.95, -1.1, 3.5))
    assertFalse(bwBlockInside(-2.01, -1.1, 3.5))
    assertTrue(bwBlockInside(3.99, 3.5, -1.1))
    assertFalse(bwBlockInside(4.0, 3.5, -1.1))
    assertFalse(bwBlockInside(Double.NaN, 0.0, 1.0))
  }

  @Test
  fun `unsupported settings list only leaf paths and never values`() {
    val y =
        org.bukkit.configuration.file.YamlConfiguration().also {
          it.loadFromString("known: true\nnested:\n  other: private\n  supported: 5")
        }
    assertEquals(
        listOf("nested.other"),
        BedWarsSettings.unsupported(y, setOf("known", "nested.supported")),
    )
    assertTrue("vault.reward.final-kill" in BedWarsSettings.configKeys)
    assertTrue("upgrades.time.Diamond-II" in BedWarsSettings.sbaKeys)
    assertTrue("party.enabled" in BedWarsSettings.sbaKeys)
  }

  @Test
  fun `wholly invalid import publishes no destination`(@TempDir folder: File) {
    val old = File(folder, "legacy")
    File(old, "arenas").mkdirs()
    File(old, "arenas/bad.yml").writeText("name: invalid")
    val dest = File(folder, "bedwars")
    assertFails { importLegacy(dest, old, File(folder, "none"), Logger.getAnonymousLogger()) }
    assertFalse(dest.exists())
    assertFalse(File(folder, "bedwars-import").exists())
  }
}
