package icu.oyasai.games.weapons

import kotlin.test.assertEquals
import kotlin.test.assertNull
import kotlin.test.assertTrue
import org.bukkit.util.Vector
import org.junit.jupiter.api.Test

class WeaponCombatTest {
  @Test
  fun `returning to original weapon slot does not resume a cancelled firing sequence`() {
    assertTrue(sameFiringSequence(2, 2, 4, 4))
    assertTrue(!sameFiringSequence(2, 2, 4, 5))
    assertTrue(!sameFiringSequence(2, 4, 4, 4))
    assertTrue(!sameFiringSequence(2, 3, 4, 4))
  }

  @Test
  fun `pump reload inserts shells without adding an opening duration`() {
    assertEquals("", reloadActionType("pump"))
    assertEquals("", reloadActionType(""))
    for (action in listOf("bolt", "break", "revolver", "slide")) {
      assertEquals(action, reloadActionType(action))
    }
  }

  @Test
  fun `automatic cadence preserves the documented RPM without rounding every shot`() {
    for (rate in 1..16) {
      val rounds = 240 + 60 * rate
      assertEquals(1200, automaticShotTick(rounds, rate))
      val times = (0..rounds).map { automaticShotTick(it, rate) }
      assertTrue(times.zipWithNext().all { (before, after) -> after > before })
    }
    assertEquals(1, automaticShotTick(1, 16))
    assertEquals(4, automaticShotTick(1, 1))
  }

  @Test
  fun `bolt action replaces firing delay but an accessory and dual wield ignore firearm actions`() {
    assertEquals(16, firearmShotDelay("bolt", 40, 5, 7, 4, false))
    assertEquals(40, firearmShotDelay("slide", 40, 5, 7, 4, false))
    assertEquals(40, firearmShotDelay("bolt", 40, 5, 7, 4, true))
  }

  @Test
  fun `energy cuboid excludes targets behind beam beyond range and outside radius`() {
    val direction = Vector(0.0, 0.0, 1.0)
    val half = Vector(.3, .9, .3)
    assertEquals(3.7, energyIntersection(Vector(0.0, 0.0, 4.0), half, direction, 1.0, 8.0))
    assertNull(energyIntersection(Vector(0.0, 0.0, -4.0), half, direction, 1.0, 8.0))
    assertNull(energyIntersection(Vector(0.0, 0.0, 10.0), half, direction, 1.0, 8.0))
    assertNull(energyIntersection(Vector(2.0, 0.0, 4.0), half, direction, 1.0, 8.0))
    assertEquals(
        1.7,
        energyIntersection(
            Vector(0.0, 2.0, 0.0),
            Vector(.3, .3, .3),
            Vector(0.0, 1.0, 0.0),
            1.0,
            8.0,
        ),
    )
  }

  @Test
  fun `fireballs explode on terrain while ordinary bullet impact depends on target`() {
    assertTrue(projectileImpactTriggers("fireball", false))
    assertTrue(projectileImpactTriggers("SNOWBALL", true))
    assertTrue(!projectileImpactTriggers("snowball", false))
  }

  @Test
  fun `loaded rounds remain usable after consuming the last physical reload item`() {
    assertTrue(!requiresInventoryAmmo(true, true, true))
    assertTrue(requiresInventoryAmmo(true, true, false))
    assertTrue(requiresInventoryAmmo(true, false, false))
    assertTrue(!requiresInventoryAmmo(false, false, false))
  }

  @Test
  fun `reload respects remaining physical ammunition and magazine capacity`() {
    assertEquals(3, reloadTransfer(8, 3, false, false))
    assertEquals(1, reloadTransfer(8, 3, false, true))
    assertEquals(8, reloadTransfer(8, 1, true, false))
    assertEquals(0, reloadTransfer(8, 0, true, false))
    assertEquals(0, reloadTransfer(0, 8, false, false))
  }

  @Test
  fun `reload names retain ammunition and measured open marker`() {
    assertEquals("▪", reloadOpenSymbol("slide", "▪"))
    assertEquals("□", reloadOpenSymbol("slide", "□"))
    assertEquals("▫", reloadOpenSymbol("revolver", "▪"))
    assertEquals("_", reloadOpenSymbol("bolt", "▪"))
    assertEquals("Example ▫ «4»ᴿ", weaponAmmoName("Example", "▫", 4, reloading = true))
    assertEquals("Example ▪ «5»", weaponAmmoName("Example", "▪", 5))
    assertEquals("Example «3 | 7»ᴿ", weaponAmmoName("Example", null, 7, 3, 7, true))
    assertEquals("Example", WeaponNames.base(weaponAmmoName("Example", "▫", 4, reloading = true)))
    assertEquals(4, WeaponNames.rounds(weaponAmmoName("Example", "▫", 4, reloading = true)))
  }
}
