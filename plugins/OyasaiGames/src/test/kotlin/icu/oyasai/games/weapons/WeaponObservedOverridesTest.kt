package icu.oyasai.games.weapons

import kotlin.test.assertEquals
import kotlin.test.assertNull
import kotlin.test.assertTrue
import org.bukkit.util.Vector
import org.junit.jupiter.api.Test

class WeaponObservedOverridesTest {
  @Test
  fun `only the three exact weapon ids receive pins`() {
    for (id in listOf("CHAINSAW", "AK-47", "RITTAIKIDOU")) {
      assertEquals(
          WeaponObservedOverrides.forWeapon(id.lowercase()),
          WeaponObservedOverrides.forWeapon(id),
      )
    }
    for (id in
        listOf(
            "RAILGUN",
            "OSAKANA",
            "ACCELERATOR",
            "Intel",
            "Flashbang",
            "CHAINSAW_B",
            "RITTAIKIDOU_B",
            "CHAINSAW-copy",
        )) {
      assertNull(WeaponObservedOverrides.forWeapon(id))
    }
  }

  @Test
  fun `each input window consumes the measured number of individual rounds`() {
    val cases = listOf("CHAINSAW" to 4..5, "AK-47" to 2..3, "RITTAIKIDOU" to 4..4)
    for ((id, expected) in cases) {
      val pin = WeaponObservedOverrides.forWeapon(id)!!
      assertEquals(1L, pin.firstShotDelay)
      assertEquals(1, pin.ammoPerShot)
      for (input in 0..39) {
        val shots = ((input + 1)..(input + pin.inputHoldTicks)).count(pin::shotDue)
        assertTrue(shots in expected, "$id phase $input: $shots")
      }
    }
  }

  @Test
  fun `three separated inputs retain measured phase variation rather than force a final total`() {
    val cases =
        listOf(
            Triple("CHAINSAW", 200, 185..188),
            Triple("AK-47", 30, 21..24),
            Triple("RITTAIKIDOU", 60, 48..48),
        )
    for ((id, initial, expected) in cases) {
      val pin = WeaponObservedOverrides.forWeapon(id)!!
      for (phase in 0..39) {
        val consumed =
            listOf(phase, phase + 14, phase + 29).sumOf { input ->
              ((input + 1)..(input + pin.inputHoldTicks)).count(pin::shotDue) * pin.ammoPerShot
            }
        assertTrue(initial - consumed in expected)
      }
    }
  }

  @Test
  fun `pinned reset clears immunity only after a hit is accepted`() {
    for (id in listOf("CHAINSAW", "AK-47", "RITTAIKIDOU")) {
      val pin = WeaponObservedOverrides.forWeapon(id)!!
      assertEquals(0, pin.immunityAfterHit(20, true, true))
      assertEquals(17, pin.immunityAfterHit(17, true, false))
      assertEquals(20, pin.immunityAfterHit(20, false, true))
    }
  }

  @Test
  fun `damage pins are per hit and dash replaces velocity without changing direction`() {
    assertEquals(3.0, WeaponObservedOverrides.forWeapon("CHAINSAW")!!.projectileDamage)
    assertEquals(4.0, WeaponObservedOverrides.forWeapon("AK-47")!!.projectileDamage)
    val pin = WeaponObservedOverrides.forWeapon("RITTAIKIDOU")!!
    assertEquals(0.0, pin.projectileDamage)
    val direction = Vector(0.0, .6, .8)
    assertEquals(Vector(0.0, .96, 1.28), pin.recoil(direction))
    assertEquals(Vector(0.0, .6, .8), direction)
    assertEquals(1.456, pin.recoil(Vector(0.0, 0.0, 1.0))!!.z * .91, 1e-6)
    assertNull(WeaponObservedOverrides.forWeapon("AK-47")!!.recoil(direction))
  }

  @Test
  fun `chainsaw block beam covers measured front and sides while excluding touching edges`() {
    val direction = Vector(0.0, 0.0, 1.0)
    val half = Vector(.25, .5, .25)
    assertTrue(WeaponObservedOverrides.forWeapon("CHAINSAW")!!.blockEnergy)
    assertEquals(
        1.0,
        WeaponObservedOverrides.energyIntersection(
            Vector(1.5, 0.0, 2.5),
            half,
            direction,
            1.0,
            1.0,
        ),
    )
    assertNull(
        WeaponObservedOverrides.energyIntersection(
            Vector(1.75, 0.0, 1.0),
            half,
            direction,
            1.0,
            1.0,
        )
    )
    assertNull(
        WeaponObservedOverrides.energyIntersection(
            Vector(0.0, 0.0, 2.75),
            half,
            direction,
            1.0,
            1.0,
        )
    )
    assertNull(
        WeaponObservedOverrides.energyIntersection(
            Vector(0.0, 0.0, -2.0),
            half,
            direction,
            1.0,
            1.0,
        )
    )
    for (id in listOf("AK-47", "RITTAIKIDOU")) assertTrue(
        !WeaponObservedOverrides.forWeapon(id)!!.blockEnergy
    )
  }
}
