package icu.oyasai.games.bedwars

import kotlin.test.*

class BedWarsExplosionTest {
  @Test
  fun `impulse normalizes direction then scales vertical and all components`() {
    val impulse = explosionImpulse(3.0, 4.5, 0.0, .5, 2.0, 2.0)
    assertEquals(1.2, impulse.x, 1e-10)
    assertEquals(.8, impulse.y, 1e-10)
    assertEquals(0.0, impulse.z)
  }

  @Test
  fun `coincident position and huge finite displacement do not create NaN velocities`() {
    assertEquals(BwImpulse(0.0, 0.0, 0.0), explosionImpulse(0.0, .5, 0.0, .5, 2.0, 2.0))
    assertEquals(
        BwImpulse(0.0, 0.0, 0.0),
        explosionImpulse(Double.MAX_VALUE, 0.0, 0.0, 0.0, 2.0, 2.0),
    )
    assertFails { explosionImpulse(1.0, 1.0, 1.0, .5, 0.0, 2.0) }
    assertFails { explosionImpulse(Double.NaN, 0.0, 0.0, .5, 2.0, 2.0) }
  }
}
