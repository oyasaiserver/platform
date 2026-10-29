package icu.oyasai.games.tank

import kotlin.test.*

class TankRulesTest {
  private val light = TankRules.spec("light")!!
  private val medium = TankRules.spec("medium")!!
  private val heavy = TankRules.spec("heavy")!!

  @Test
  fun `spec defaults to medium and rejects unknown keys`() {
    assertSame(medium, TankRules.spec(null))
    assertNull(TankRules.spec("tiny"))
  }

  @Test
  fun `top speed converts km per hour to blocks per tick`() {
    // シャーマン 42 km/h = 11.67 m/s = 0.583 ブロック/tick
    assertEquals(0.5833, TankRules.maxSpeed(medium), 1e-3)
    var speed = 0.0
    repeat(2000) { speed = TankRules.nextSpeed(medium, speed, forward = true, backward = false) }
    assertEquals(TankRules.maxSpeed(medium), speed)
    var reverse = 0.0
    repeat(2000) {
      reverse = TankRules.nextSpeed(medium, reverse, forward = false, backward = true)
    }
    assertEquals(-TankRules.maxReverse(medium), reverse)
  }

  @Test
  fun `braking stops at zero and coasting rests at exactly zero`() {
    assertEquals(0.0, TankRules.nextSpeed(heavy, 0.001, forward = false, backward = true))
    assertEquals(0.0, TankRules.nextSpeed(heavy, -0.001, forward = true, backward = false))
    assertEquals(0.0, TankRules.nextSpeed(heavy, 0.0001, forward = true, backward = true))
  }

  @Test
  fun `hull turns at the spec rate and wraps at the half circle`() {
    assertEquals(1.0, TankRules.nextYaw(medium, 0.0, left = false, right = true))
    assertEquals(-179.25, TankRules.nextYaw(heavy, 180.0, left = false, right = true), 1e-9)
    assertEquals(10.0, TankRules.nextYaw(light, 10.0, left = true, right = true))
  }

  @Test
  fun `turret traverses the short way at the spec rate`() {
    // シャーマン 24 度/秒 = 1.2 度/tick。170 度から -170 度へは右回りに 20 度が近い。
    assertEquals(171.2, TankRules.traverse(medium, 170.0, -170.0), 1e-9)
    assertEquals(-179.2, TankRules.traverse(medium, -178.0, 175.0), 1e-9)
    assertEquals(30.5, TankRules.traverse(medium, 30.0, 30.5), 1e-9)
  }

  @Test
  fun `gun pitch is limited to the mount's elevation and depression`() {
    assertEquals(-25.0, TankRules.clampGunPitch(medium, -80.0))
    assertEquals(8.0, TankRules.clampGunPitch(heavy, 60.0))
  }

  @Test
  fun `penetration falls linearly from 100 m to 1000 m`() {
    assertEquals(88.0, TankRules.penetration(medium, 10.0))
    assertEquals(80.5, TankRules.penetration(medium, 550.0), 1e-9)
    assertEquals(73.0, TankRules.penetration(medium, 1000.0), 1e-9)
  }

  @Test
  fun `sloped front plate is thicker in line of sight`() {
    val armor = medium.armor
    // 正面から水平に当たると 63.5mm / cos47 = 約 93mm。
    val cos = TankRules.impactCos(0.0, 0.0, -1.0, TankRules.normal(armor, ArmorFace.FRONT))
    assertEquals(93.1, armor.front / cos, 0.1)
    // 側面に 60 度斜めに当たると 38.1 / cos60 = 76.2mm。
    val side =
        TankRules.impactCos(
            -Math.cos(Math.toRadians(60.0)),
            0.0,
            Math.sin(Math.toRadians(60.0)),
            TankRules.normal(armor, ArmorFace.SIDE),
        )
    assertEquals(76.2, armor.side / side, 0.1)
  }

  @Test
  fun `the sherman gun cannot pierce the tiger front but pierces its side up close`() {
    val front = heavy.armor.front
    assertTrue(TankRules.penetration(medium, 100.0) < front)
    assertTrue(TankRules.penetration(medium, 300.0) > heavy.armor.side)
    assertTrue(TankRules.penetration(medium, 1000.0) < heavy.armor.side)
    assertTrue(TankRules.penetration(heavy, 1000.0) > 93.1)
  }
}
