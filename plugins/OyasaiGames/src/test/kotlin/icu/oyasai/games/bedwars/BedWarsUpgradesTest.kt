package icu.oyasai.games.bedwars

import kotlin.test.*
import org.bukkit.configuration.file.YamlConfiguration

class BedWarsUpgradesTest {
  @Test
  fun `tier quotes use configured pricing and stop at the team limit`() {
    val settings =
        YamlConfiguration().apply {
          set("upgrades.prices.Prot-I", 3)
          set("upgrades.prices.Prot-II", 7)
          set("upgrades.limit.Protection", 2)
        }
    val base = BedWarsPrice("diamond", 1)
    assertEquals(BedWarsPrice("diamond", 3), upgradePrice("protection", 0, base, settings))
    assertEquals(BedWarsPrice("diamond", 7), upgradePrice("protection", 1, base, settings))
    assertNull(upgradePrice("protection", 2, base, settings))
    assertEquals(base, upgradePrice("blindtrap", 0, base, settings))
    assertFails { upgradePrice("protection", -1, base, settings) }
    settings.set("upgrades.prices.Prot-I", 0)
    assertNull(upgradePrice("protection", 0, base, settings))
  }

  @Test
  fun `forge accepts the last exact increment and never exceeds configured maximum`() {
    assertTrue(forgeAvailable(4, .2, 2.0))
    assertFalse(forgeAvailable(5, .2, 2.0))
    assertFalse(forgeAvailable(0, .5, 2.0))
    assertFails { forgeAvailable(0, Double.NaN, 2.0) }
  }

  @Test
  fun `splitter uses the documented axis cube including corners rather than a sphere`() {
    assertTrue(withinSplitterCube(3.0, 3.0, -3.0))
    assertFalse(withinSplitterCube(3.01, 0.0, 0.0))
    assertFalse(withinSplitterCube(0.0, Double.NaN, 0.0))
  }
}
