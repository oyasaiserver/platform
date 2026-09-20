package icu.oyasai.utilities.veinminer

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotEquals
import kotlin.test.assertNull
import org.bukkit.Material

class VeinminerEventTest {
  @Test
  fun `classifies ore families`() {
    val taggedFamilies =
        listOf(
            OreFamily.COAL to setOf(Material.COAL_ORE, Material.DEEPSLATE_COAL_ORE),
            OreFamily.IRON to setOf(Material.IRON_ORE, Material.DEEPSLATE_IRON_ORE),
        )
    fun family(material: Material) =
        oreFamily(material, taggedFamilies) { tag, candidate -> candidate in tag }

    assertEquals(family(Material.COAL_ORE), family(Material.DEEPSLATE_COAL_ORE))
    assertNotEquals(family(Material.COAL_ORE), family(Material.IRON_ORE))
    assertEquals(OreFamily.NETHER_GOLD, family(Material.NETHER_GOLD_ORE))
    assertEquals(OreFamily.NETHER_QUARTZ, family(Material.NETHER_QUARTZ_ORE))
    assertEquals(OreFamily.ANCIENT_DEBRIS, family(Material.ANCIENT_DEBRIS))
    assertNull(family(Material.STONE))
  }

  @Test
  fun `invalid config values fall back and warn`() {
    var warnings = 0
    val warn: () -> Unit = { warnings++ }

    assertEquals(64, intAtLeast(0, 1, 64, warn))
    assertEquals(20, intAtLeast(-1, 0, 20, warn))
    assertEquals(ChainScope.FAMILY, parseChainScope("invalid", warn))
    assertEquals(3, warnings)
  }
}
