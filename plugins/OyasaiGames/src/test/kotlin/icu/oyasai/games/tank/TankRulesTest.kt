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
  fun `splash power grows with caliber and stays below tnt for 75mm`() {
    assertEquals(2.0f, TankRules.splashPower(75.0))
    assertTrue(TankRules.splashPower(88.0) > TankRules.splashPower(75.0))
  }

  @Test
  fun `wheels turn at the set rpm at top speed and backwards in reverse`() {
    val top = TankRules.maxSpeed(medium)
    assertEquals((2 * Math.PI / 20).toFloat(), TankRules.spinStep(medium, top, 60.0), 1e-6f)
    assertEquals(
        -TankRules.spinStep(medium, top / 4, 60.0),
        TankRules.spinStep(medium, -top / 4, 60.0),
    )
  }

  @Test
  fun `rotated rectangle overlaps blocks only where its corners reach`() {
    // 幅 2・長さ 6 の箱（半分 1・3）を原点に置く。
    assertTrue(TankRules.overlapsXZ(0.0, 0.0, 1.0, 3.0, 0.0, 0.5, 2.0, 1.5, 3.0))
    assertFalse(TankRules.overlapsXZ(0.0, 0.0, 1.0, 3.0, 0.0, 1.0, 0.0, 2.0, 1.0)) // 接しているだけ
    // 横向き（90 度）なら長い辺が x に沿うので、x = 2.5 のブロックに届く。
    assertTrue(TankRules.overlapsXZ(0.0, 0.0, 1.0, 3.0, Math.PI / 2, 2.0, 0.0, 3.0, 0.5))
    // 45 度では、軸に平行な外接箱の角（2.5, 2.5）付近には届かない。
    assertFalse(TankRules.overlapsXZ(0.0, 0.0, 1.0, 3.0, Math.PI / 4, 2.4, 2.4, 3.0, 3.0))
  }

  @Test
  fun `hit boxes cover the hull width and put the turret on the deck`() {
    for (spec in TankRules.SPECS) {
      val boxes = TankRules.hitBoxes(spec, 1.7)
      assertEquals(4, boxes.size)
      val hull = boxes.filter { !it.turret }
      assertEquals(
          spec.width,
          hull.maxOf { it.x + it.width / 2 } - hull.minOf { it.x - it.width / 2 },
          1e-9,
      )
      assertTrue(boxes.single { it.turret }.height > 0.0)
    }
  }

  @Test
  fun `top speed converts km per hour to blocks per tick`() {
    // パンター 46 km/h = 12.78 m/s = 0.639 ブロック/tick
    assertEquals(0.6389, TankRules.maxSpeed(medium), 1e-3)
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
    assertEquals(0.9, TankRules.nextYaw(medium, 0.0, left = false, right = true), 1e-9)
    assertEquals(-179.25, TankRules.nextYaw(heavy, 180.0, left = false, right = true), 1e-9)
    assertEquals(10.0, TankRules.nextYaw(light, 10.0, left = true, right = true))
  }

  @Test
  fun `turret traverses the short way at the spec rate`() {
    // パンター 24 度/秒 = 1.2 度/tick。170 度から -170 度へは右回りに 20 度が近い。
    assertEquals(171.2, TankRules.traverse(medium, 170.0, -170.0), 1e-9)
    assertEquals(-179.2, TankRules.traverse(medium, -178.0, 175.0), 1e-9)
    assertEquals(30.5, TankRules.traverse(medium, 30.0, 30.5), 1e-9)
  }

  @Test
  fun `gun pitch is limited to the mount's elevation and depression`() {
    assertEquals(-20.0, TankRules.clampGunPitch(medium, -80.0))
    assertEquals(8.0, TankRules.clampGunPitch(heavy, 60.0))
  }

  @Test
  fun `penetration falls linearly from 100 m to 1000 m`() {
    assertEquals(159.0, TankRules.penetration(medium, 10.0))
    assertEquals(143.5, TankRules.penetration(medium, 550.0), 1e-9)
    assertEquals(128.0, TankRules.penetration(medium, 1000.0), 1e-9)
  }

  @Test
  fun `sloped front plate is thicker in line of sight`() {
    val armor = medium.armor
    // 正面から水平に当たると 80mm / cos55 = 約 139.5mm。
    val cos = TankRules.impactCos(0.0, 0.0, -1.0, TankRules.normal(armor, ArmorFace.FRONT))
    assertEquals(139.5, armor.front / cos, 0.1)
    // 側面に 60 度斜めに当たると 50 / cos60 = 100mm。
    val side =
        TankRules.impactCos(
            -Math.cos(Math.toRadians(60.0)),
            0.0,
            Math.sin(Math.toRadians(60.0)),
            TankRules.normal(armor, ArmorFace.SIDE),
        )
    assertEquals(100.0, armor.side / side, 0.1)
  }

  @Test
  fun `the panther gun pierces the tiger front but the tiger gun cannot pierce the sloped panther front`() {
    assertTrue(TankRules.penetration(medium, 1000.0) > heavy.armor.front)
    assertTrue(TankRules.penetration(heavy, 100.0) > 139.5)
    assertTrue(TankRules.penetration(heavy, 1000.0) < 139.5)
  }
}
