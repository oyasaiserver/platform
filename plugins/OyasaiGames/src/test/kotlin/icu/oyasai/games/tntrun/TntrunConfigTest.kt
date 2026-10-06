package icu.oyasai.games.tntrun

import java.io.File
import java.util.logging.Logger
import kotlin.test.*
import org.bukkit.configuration.file.YamlConfiguration
import org.junit.jupiter.api.io.TempDir

internal fun fictionalArena() =
    YamlConfiguration().apply {
      loadFromString(
          """
world: fictional_world
p1: {x: 0, y: 0, z: 0}
p2: {x: 9, y: 12, z: 9}
loselevel:
  p1: {x: 0, y: 0, z: 0}
spawnpoint:
  p1: {x: 4.5, y: 10, z: 4.5}
spectatorspawn:
  p1: {x: 4.5, y: 10, z: 4.5}
finished: true
minPlayers: 2
maxPlayers: 8
countdown: 5
regenerationdelay: 60
teleportto: PREVIOUS
reward: {money: 25, xp: 10, minPlayers: 2}
"""
      )
    }

class TntrunConfigTest {
  @Test
  fun `Bukkit serialized Vector shape loads with no server`() {
    val y = fictionalArena()
    for (path in listOf("p1", "p2", "loselevel.p1", "spawnpoint.p1", "spectatorspawn.p1")) y.set(
        path,
        vector(y, path),
    )
    val decoded = YamlConfiguration().also { it.loadFromString(y.saveToString()) }
    assertNotNull(decoded.getVector("spawnpoint.p1"))
    assertEquals(8, RunArena("Example", decoded).maximum)
    assertTrue(unreadKeys(decoded, ::supportedArenaKey).isEmpty())
  }

  @Test
  fun `deployed arena shape imports without sensitive fixture values`() {
    val arena = RunArena("Example", fictionalArena())
    assertEquals(1300, arena.bounds.volume)
    assertEquals(8, arena.maximum)
    assertEquals(8, arena.delay)
    assertTrue(arena.enabled)
  }

  @Test
  fun `invalid or unsupported active rules reject the arena`() {
    for ((key, value) in
        listOf(
            "minPlayers" to 1,
            "maxPlayers" to 1,
            "countdown" to -1,
            "votePercent" to Double.NaN,
            "joinfee" to 1.0,
            "kits.enabled" to true,
            "reward.money" to -1,
            "reward.xp" to -1,
            "spawnpoint.p1.y" to -5,
            "p2.x" to 1_000_000,
            "testmode" to true,
            "teleportto" to "OTHER",
        )) {
      assertFails(key) { RunArena("Example", fictionalArena().also { it.set(key, value) }) }
    }
  }

  @Test
  fun `unread key detection includes inactive and future keys`() {
    val y =
        fictionalArena().also {
          it.set("future.mode", true)
          it.set("kits.linked", emptyList<String>())
        }
    assertEquals(
        listOf("future.mode", "kits.linked").toSet(),
        unreadKeys(y, ::supportedArenaKey).toSet(),
    )
  }

  @Test
  fun `import copies once preserves original files and includes legacy stats`(@TempDir dir: File) {
    val source = File(dir, "legacy").also { it.mkdirs() }
    File(source, "arenas").mkdir()
    File(source, "arenas/Example.yml").writeText(fictionalArena().saveToString())
    File(source, "stats.yml").writeText("stats: {fictional: {played: 3, wins: 1}}\n")
    val original = File(source, "arenas/Example.yml").readBytes()
    val dest = File(dir, "tntrun")
    assertTrue(importTntrun(dest, source, Logger.getAnonymousLogger()))
    File(dest, "stats.yml").writeText("edited: true\n")
    assertFalse(importTntrun(dest, source, Logger.getAnonymousLogger()))
    assertEquals("edited: true\n", File(dest, "stats.yml").readText())
    assertContentEquals(original, File(source, "arenas/Example.yml").readBytes())
    assertEquals(2, readYaml(File(dest, "import.yml")).getInt("files"))
  }

  @Test
  fun `malformed imports never publish partially copied data`(@TempDir dir: File) {
    val source = File(dir, "legacy").also { it.mkdirs() }
    File(source, "config.yml").writeText("broken: [unterminated")
    val dest = File(dir, "tntrun")
    assertFails { importTntrun(dest, source, Logger.getAnonymousLogger()) }
    assertFalse(dest.exists())
    assertFalse(File(dir, "tntrun-import.tmp").exists())
  }
}
