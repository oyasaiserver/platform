package icu.oyasai.games.tank

import kotlin.test.*

class TankRulesTest {
  @Test
  fun `speed accelerates to the limit and then holds`() {
    var speed = 0.0
    repeat(40) { speed = TankRules.nextSpeed(speed, forward = true, backward = false) }
    assertEquals(TankRules.MAX_SPEED, speed)
    var reverse = 0.0
    repeat(40) { reverse = TankRules.nextSpeed(reverse, forward = false, backward = true) }
    assertEquals(-TankRules.MAX_REVERSE, reverse)
  }

  @Test
  fun `braking stops at zero instead of reversing in one tick`() {
    assertEquals(0.0, TankRules.nextSpeed(0.03, forward = false, backward = true))
    assertEquals(0.0, TankRules.nextSpeed(-0.03, forward = true, backward = false))
  }

  @Test
  fun `coasting loses speed and rests at exactly zero`() {
    assertEquals(
        0.3 - TankRules.FRICTION,
        TankRules.nextSpeed(0.3, forward = false, backward = false),
    )
    assertEquals(0.0, TankRules.nextSpeed(TankRules.FRICTION, forward = false, backward = false))
    assertEquals(0.0, TankRules.nextSpeed(-0.01, forward = true, backward = true))
  }

  @Test
  fun `right turn increases yaw and wraps at the half circle`() {
    assertEquals(3.0, TankRules.nextYaw(0.0, left = false, right = true))
    assertEquals(-178.0, TankRules.nextYaw(179.0, left = false, right = true))
    assertEquals(177.0, TankRules.nextYaw(-180.0, left = true, right = false))
    assertEquals(10.0, TankRules.nextYaw(10.0, left = true, right = true))
  }

  @Test
  fun `forward vector follows the minecraft yaw convention`() {
    assertEquals(0.0, TankRules.forwardX(0.0), 1e-9)
    assertEquals(1.0, TankRules.forwardZ(0.0), 1e-9)
    assertEquals(-1.0, TankRules.forwardX(90.0), 1e-9)
    assertEquals(1.0, TankRules.forwardX(-90.0), 1e-9)
  }

  @Test
  fun `armor is strongest at the front and weakest at the rear`() {
    // 車体が南向き（yaw 0）のとき、北へ飛ぶ砲弾は正面、南へ飛ぶ砲弾は背面に当たる。
    assertEquals(0.5, TankRules.armorMultiplier(0.0, -1.0, 0.0))
    assertEquals(1.5, TankRules.armorMultiplier(0.0, 1.0, 0.0))
    assertEquals(1.0, TankRules.armorMultiplier(1.0, 0.0, 0.0))
    assertEquals(0.5, TankRules.armorMultiplier(1.0, 0.0, 90.0))
    assertEquals(1.0, TankRules.armorMultiplier(0.0, 0.0, 0.0))
  }

  @Test
  fun `gun pitch is limited to the elevation range`() {
    assertEquals(TankRules.GUN_PITCH_UP, TankRules.clampGunPitch(-80.0))
    assertEquals(TankRules.GUN_PITCH_DOWN, TankRules.clampGunPitch(60.0))
    assertEquals(-5.0, TankRules.clampGunPitch(-5.0))
  }
}
