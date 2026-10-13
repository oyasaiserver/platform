package icu.oyasai.utilities.fart

import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class FartFeatureTest {
  @Test
  fun toggleFlipsOnlyThatPlayer() {
    val a = UUID.randomUUID()
    val b = UUID.randomUUID()

    assertTrue(FartFeature.toggle(a))
    assertTrue(FartFeature.isOn(a))
    assertFalse(FartFeature.isOn(b))

    assertFalse(FartFeature.toggle(a))
    assertFalse(FartFeature.isOn(a))
  }
}
