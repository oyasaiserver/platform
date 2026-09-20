package icu.oyasai.utilities.veinminer

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotEquals
import kotlin.test.assertNull
import org.bukkit.Material

class VeinminerEventTest {
  @Test
  fun `resolves configured material groups and ignores unknown names`() {
    val warnings = mutableListOf<String>()
    val groups =
        buildMaterialGroups(
            linkedMapOf(
                "overworld" to listOf("coal_ore", "DEEPSLATE_COAL_ORE", "not_an_ore"),
                "nether" to listOf("nether_quartz_ore"),
            ),
            warnings::add,
        )

    assertEquals("overworld", groups[Material.COAL_ORE])
    assertEquals(groups[Material.COAL_ORE], groups[Material.DEEPSLATE_COAL_ORE])
    assertEquals("nether", groups[Material.NETHER_QUARTZ_ORE])
    assertNotEquals(groups[Material.COAL_ORE], groups[Material.NETHER_QUARTZ_ORE])
    assertNull(groups[Material.STONE])
    assertEquals(3, groups.size)
    assertEquals(1, warnings.size)
  }

  @Test
  fun `duplicate material keeps first group and warns`() {
    val warnings = mutableListOf<String>()
    val groups =
        buildMaterialGroups(
            linkedMapOf(
                "first" to listOf("iron_ore"),
                "second" to listOf("IRON_ORE"),
            ),
            warnings::add,
        )

    assertEquals("first", groups[Material.IRON_ORE])
    assertEquals(1, warnings.size)
  }

  @Test
  fun `invalid numeric config values fall back and warn`() {
    var warnings = 0
    val warn: () -> Unit = { warnings++ }

    assertEquals(64, intAtLeast(0, 1, 64, warn))
    assertEquals(20, intAtLeast(-1, 0, 20, warn))
    assertEquals(2, warnings)
  }
}
