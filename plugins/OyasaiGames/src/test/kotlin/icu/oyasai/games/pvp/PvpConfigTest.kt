package icu.oyasai.games.pvp

import java.io.File
import java.math.BigDecimal
import java.util.logging.Logger
import kotlin.test.*
import org.bukkit.configuration.file.YamlConfiguration
import org.junit.jupiter.api.io.TempDir

class PvpConfigTest {
  private val fixture =
      """
      general:
        goal: TeamLives
        enabled: true
      goal:
        teamlives:
          tlives: 4
      teams:
        red: RED
        blue: BLUE
      spawns:
        red_fight: arena,1,2,3,0,0
        blue_fight: arena,4,5,6,0,0
        red_lounge: arena,1,2,3,0,0
        blue_lounge: arena,4,5,6,0,0
      classitems:
        Example:
          items:
          - type: STONE_SWORD
      arenaregion:
        field:
          coords: arena,0,0,0,10,10,10
          shape: cuboid
          type: BATTLE
          protections: [BREAK, PLACE]
      """
          .trimIndent()

  @Test
  fun `economy settings require integers and reject retired module names`(@TempDir folder: File) {
    val file = File(folder, "arena.yml")
    file.writeText(
        fixture + "\nmods: [Economy]\nmodules: {economy: {conditions: {entryFee: 10}}}\n"
    )
    assertEquals(10, ArenaConfig.load(file).yaml.getLong("modules.economy.conditions.entryFee"))
    file.writeText(file.readText().replace("entryFee: 10", "entryFee: 1.5"))
    assertFailsWith<IllegalArgumentException> { ArenaConfig.load(file) }
    file.writeText(fixture + "\nmods: [Vault]\n")
    assertFailsWith<IllegalArgumentException> { ArenaConfig.load(file) }
  }

  @Test
  fun `bet factor accepts nonnegative YAML numbers and defaults to one`(@TempDir folder: File) {
    val file = File(folder, "arena.yml")
    for (value in listOf("1.4", "2", "2147483648", "0")) {
      file.writeText(fixture + "\nmodules: {economy: {bet: {winFactor: $value}}}\n")
      assertEquals(BigDecimal(value), ArenaConfig.load(file).betWinFactor, value)
    }
    file.writeText(fixture)
    assertEquals(BigDecimal.ONE, ArenaConfig.load(file).betWinFactor)
  }

  @Test
  fun `bet factor rejects negative nonfinite and nonnumeric YAML values`(@TempDir folder: File) {
    val file = File(folder, "arena.yml")
    for (value in
        listOf("-1", "-1.4", ".NaN", ".inf", "-.inf", "NaN", "Infinity", "'1.4'", "true")) {
      file.writeText(fixture + "\nmodules: {economy: {bet: {winFactor: $value}}}\n")
      assertFailsWith<IllegalArgumentException>(value) { ArenaConfig.load(file) }
    }
  }

  @Test
  fun `other economy amounts still require integer types`(@TempDir folder: File) {
    val file = File(folder, "arena.yml")
    for (key in listOf("conditions.entryFee", "bet.minAmount", "bet.maxAmount", "reward.win")) {
      val yaml = YamlConfiguration().also { it.loadFromString(fixture) }
      yaml.set("modules.economy.$key", 1.4)
      file.writeText(yaml.saveToString())
      assertFailsWith<IllegalArgumentException>(key) { ArenaConfig.load(file) }
    }
  }

  @Test
  fun `ordered spawning cycles only through the selected team fight points`() {
    val y = YamlConfiguration().also { it.loadFromString(fixture) }
    val first = Point("arena", 1.0, 2.0, 3.0)
    val second = Point("arena", 4.0, 5.0, 6.0)
    val c =
        ArenaConfig(
            "example",
            y,
            Goal.TeamLives,
            mapOf("red_fight1" to first, "red_fight2" to second, "blue_fight1" to second),
            emptyList(),
        )
    assertEquals(first, c.spawn("red", "fight", 0))
    assertEquals(second, c.spawn("red", "fight", 1))
    assertEquals(first, c.spawn("red", "fight", 2))
    assertFails { c.spawn("missing", "fight", 0) }
  }

  @Test
  fun `import copies only selected arenas once and never changes source`(@TempDir folder: File) {
    val source = File(folder, "legacy")
    File(source, "arenas").mkdirs()
    val arena = File(source, "arenas/sumo.yml").also { it.writeText(fixture) }
    File(source, "arenas/unused.yml").writeText(fixture)
    val target = File(folder, "pvp")
    assertEquals(1, importLegacy(target, source, Logger.getAnonymousLogger()))
    assertEquals(fixture, arena.readText())
    assertFalse(File(target, "arenas/unused.yml").exists())
    assertEquals(0, importLegacy(target, source, Logger.getAnonymousLogger()))
    assertEquals(4, ArenaConfig.load(File(target, "arenas/sumo.yml")).limit)
  }

  @Test
  fun `invalid import cannot publish half a data folder`(@TempDir folder: File) {
    val source = File(folder, "legacy")
    File(source, "arenas").mkdirs()
    File(source, "arenas/sumo.yml").writeText("general: invalid")
    val target = File(folder, "pvp")
    assertFails { importLegacy(target, source, Logger.getAnonymousLogger()) }
    assertFalse(target.exists())
    assertFalse(File(folder, "pvp-import").exists())
  }

  @Test
  fun `spawns validate numbers and regions accept both schemas`() {
    assertEquals(Point("arena", 1.0, 2.0, 3.0, 40f, 50f), Point.parse("arena,1,2,3,40,50"))
    assertFails { Point.parse("arena,NaN,2,3") }
    assertFails { Point.parse("arena,1,2") }
    val old = Region.parse("field", "arena,0,0,0,10,10,10,cuboid,8,16383,BATTLE")
    assertEquals(setOf("LOSE"), old.flags)
    assertEquals(14, old.protections.size)
    val y = YamlConfiguration().also { it.loadFromString(fixture) }
    val current = Region.parse("field", y.get("arenaregion.field")!!)
    assertEquals(old.bounds, current.bounds)
    assertEquals(setOf("BREAK", "PLACE"), current.protections)
  }

  @Test
  fun `bad selected arena does not prevent valid arenas from importing`(@TempDir folder: File) {
    val source = File(folder, "legacy")
    File(source, "arenas").mkdirs()
    File(source, "arenas/sumo.yml").writeText(fixture)
    File(source, "arenas/classicpvp.yml").writeText("general: invalid")
    val target = File(folder, "pvp")
    assertEquals(1, importLegacy(target, source, Logger.getAnonymousLogger()))
    assertTrue(File(target, "arenas/sumo.yml").isFile)
    assertFalse(File(target, "arenas/classicpvp.yml").exists())
  }

  @Test
  fun `every selected arena retains legacy battle regions`(@TempDir folder: File) {
    for ((i, name) in legacyArenas.withIndex()) {
      val yaml = YamlConfiguration().apply { loadFromString(fixture) }
      yaml.set("arenaregion.field", "arena,$i,0,0,${i + 10},10,10,cuboid,8,16383,BATTLE")
      val file = File(folder, "$name.yml").apply { writeText(yaml.saveToString()) }
      val arena = ArenaConfig.load(file)
      assertEquals(1, arena.regions.size, name)
      assertEquals("BATTLE", arena.regions.single().type, name)
      assertEquals(listOf(i, 0, 0, i + 10, 10, 10), arena.regions.single().bounds, name)
    }
    assertFails { Region.parse("broken", "arena,0,0,0,1,1,1,sphere,0,0,BATTLE") }
  }
}
