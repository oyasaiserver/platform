package icu.oyasai.utilities.fart

import icu.oyasai.utilities.fart.FartFeature.Mode
import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

class FartFeatureTest {
  @Test
  fun normalTogglesOffAndOn() {
    val id = UUID.randomUUID()
    assertFalse(FartFeature.isOn(id))
    assertEquals(Mode.NORMAL, FartFeature.toggle(id))
    assertTrue(FartFeature.isOn(id))
    assertNull(FartFeature.toggle(id))
    assertFalse(FartFeature.isOn(id))
  }

  @Test
  fun modesSwitchAndDefaultTurnsAnyModeOff() {
    val id = UUID.randomUUID()
    assertEquals(Mode.NORMAL, FartFeature.toggle(id))
    assertEquals(Mode.STAY, FartFeature.toggle(id, Mode.STAY))
    assertEquals(Mode.FLY, FartFeature.toggle(id, Mode.FLY))
    assertNull(FartFeature.toggle(id))
    assertEquals(Mode.STAY, FartFeature.toggle(id, Mode.STAY))
    assertNull(FartFeature.toggle(id))
    assertFalse(FartFeature.isOn(id))
  }

  @Test
  fun repeatingEachModeTurnsItOff() {
    for (mode in Mode.entries) {
      val id = UUID.randomUUID()
      assertEquals(mode, FartFeature.toggle(id, mode))
      assertNull(FartFeature.toggle(id, mode))
      assertFalse(FartFeature.isOn(id))
    }
  }

  @Test
  fun playersHaveIndependentModes() {
    val a = UUID.randomUUID()
    val b = UUID.randomUUID()
    assertEquals(Mode.STAY, FartFeature.toggle(a, Mode.STAY))
    assertFalse(FartFeature.isOn(b))
    assertEquals(Mode.FLY, FartFeature.toggle(b, Mode.FLY))
    assertNull(FartFeature.toggle(a, Mode.STAY))
    assertFalse(FartFeature.isOn(a))
    assertTrue(FartFeature.isOn(b))
    assertNull(FartFeature.toggle(b, Mode.FLY))
  }

  @Test
  fun liftAddsSpeedUpToTheCap() {
    assertEquals(0.3, FartFeature.lifted(0.0), 1e-9)
    assertEquals(-0.2, FartFeature.lifted(-0.5), 1e-9)
    assertEquals(0.5, FartFeature.lifted(0.2), 1e-9)
    assertEquals(0.6, FartFeature.lifted(0.3), 1e-9)
    assertEquals(0.6, FartFeature.lifted(0.5), 1e-9)
    assertEquals(0.6, FartFeature.lifted(1.0), 1e-9)
  }
}
