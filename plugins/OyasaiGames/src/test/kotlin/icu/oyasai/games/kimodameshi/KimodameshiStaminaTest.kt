package icu.oyasai.games.kimodameshi

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class KimodameshiStaminaTest {
  @Test
  fun `runner sprint drains half a Skript food unit and delay lasts twelve updates`() {
    val stamina = KimodameshiStamina()
    assertEquals(19, stamina.tick(20, true).food)
    repeat(12) { assertEquals(19, stamina.tick(19, false).food) }
    assertEquals(20, stamina.tick(19, false).food)
  }

  @Test
  fun `hunter jump costs two Skript food units and runner costs one`() {
    assertEquals(16, KimodameshiStamina().jump(20, true).food)
    assertEquals(18, KimodameshiStamina().jump(20, false).food)
    assertEquals(6, KimodameshiStamina().jump(6, false).food)
  }

  @Test
  fun `exhaustion locks food for twenty updates then recovers fully before spending again`() {
    val stamina = KimodameshiStamina()
    assertEquals(StaminaNotice.EXHAUSTED, stamina.tick(7, true).notice)
    assertTrue(stamina.exhausted)
    repeat(19) { assertEquals(StaminaChange(6), stamina.tick(20, false)) }
    assertEquals(StaminaChange(6, StaminaNotice.RECOVERING), stamina.tick(20, false))
    assertEquals(6, stamina.jump(6, true).food)
    var food = 6
    repeat(6) {
      food = stamina.tick(food, true).food
      assertTrue(stamina.exhausted)
      assertEquals(food, stamina.jump(food, true).food)
    }
    assertEquals(StaminaChange(20, StaminaNotice.FULL), stamina.tick(food, true))
    assertFalse(stamina.exhausted)
    assertEquals(19, stamina.tick(20, true).food)
  }

  @Test
  fun `hunter jump crossing threshold locks then resets food to three Skript units`() {
    val stamina = KimodameshiStamina()
    assertEquals(StaminaChange(4, StaminaNotice.EXHAUSTED), stamina.jump(8, true))
    assertEquals(StaminaChange(6), stamina.tick(4, false))
    assertEquals(12, KimodameshiStamina().tick(11, false).food)
  }
}
