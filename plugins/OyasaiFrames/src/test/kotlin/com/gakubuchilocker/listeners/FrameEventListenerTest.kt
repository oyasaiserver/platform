package com.gakubuchilocker.listeners

import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue
import org.bukkit.inventory.EquipmentSlot

class FrameEventListenerTest {
  @Test
  fun `entity interaction handles only the main hand`() {
    assertTrue(isPrimaryHandInteraction(EquipmentSlot.HAND))
    assertFalse(isPrimaryHandInteraction(EquipmentSlot.OFF_HAND))
  }
}
