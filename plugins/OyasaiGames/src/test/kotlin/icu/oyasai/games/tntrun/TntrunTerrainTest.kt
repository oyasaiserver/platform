package icu.oyasai.games.tntrun

import icu.oyasai.games.pvp.saveYaml
import java.io.File
import kotlin.test.*
import org.bukkit.configuration.file.YamlConfiguration
import org.junit.jupiter.api.io.TempDir

class TntrunTerrainTest {
  private fun journal(file: File) =
      saveYaml(
          file,
          YamlConfiguration().apply {
            set("world", "fictional_world")
            set("blocks.1,2,3", "minecraft:sand")
            set("blocks.1,1,3", "minecraft:tnt")
          },
      )

  @Test
  fun `world flush completes before journal deletion and failure is replayable`(
      @TempDir dir: File
  ) {
    val file = File(dir, "floor.yml")
    journal(file)
    val terrain = mutableMapOf<Cell, String>()
    assertFails {
      restoreTerrainFile(
          file,
          { _, c, data -> terrain[c] = data },
          {
            assertTrue(file.exists())
            error("simulated save failure")
          },
      )
    }
    assertTrue(file.exists())
    assertEquals(2, terrain.size)
    restoreTerrainFile(file, { _, c, data -> terrain[c] = data }, { assertTrue(file.exists()) })
    assertFalse(file.exists())
    assertEquals(2, terrain.size)
    restoreTerrainFile(file, { _, _, _ -> fail("replayed retired terrain") }, {})
  }

  @Test
  fun `all coordinates validate before any block is replaced`(@TempDir dir: File) {
    val file = File(dir, "floor.yml")
    journal(file)
    val y = readYaml(file).also { it.set("blocks.invalid", "minecraft:sand") }
    saveYaml(file, y)
    var changed = false
    assertFails { restoreTerrainFile(file, { _, _, _ -> changed = true }, {}) }
    assertFalse(changed)
    assertTrue(file.exists())
  }
}
