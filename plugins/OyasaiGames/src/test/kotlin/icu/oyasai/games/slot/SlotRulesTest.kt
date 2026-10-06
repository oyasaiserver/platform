package icu.oyasai.games.slot

import java.util.UUID
import kotlin.test.*

class SlotRulesTest {
  @Test
  fun `chance is a fraction and luck conversion is percent per level`() {
    assertEquals(0.65, winChance(0.4, 2, 0, 12.5, -12.5))
    assertEquals(0.275, winChance(0.4, 0, 1, 12.5, -12.5))
    assertEquals(1.0, winChance(0.9, 2, 0, 12.5, -12.5))
    assertEquals(0.0, winChance(0.1, 0, 2, 12.5, -12.5))
    assertFailsWith<IllegalArgumentException> { winChance(Double.NaN, 0, 0, 12.5, -12.5) }
  }

  @Test
  fun `weighted draw respects zero weights exact boundaries and large totals`() {
    val weights = listOf(0L, 1L, 3L, 0L)
    assertEquals(1, weightedIndex(weights, 0.0))
    assertEquals(1, weightedIndex(weights, 0.249999))
    assertEquals(2, weightedIndex(weights, 0.25))
    assertEquals(2, weightedIndex(weights, 0.999999))
    assertEquals(2, weightedIndex(List(3) { 2_000_000_000L }, 0.9))
    assertFailsWith<IllegalArgumentException> { weightedIndex(listOf(0L), 0.1) }
    assertFailsWith<IllegalArgumentException> { weightedIndex(listOf(-1L), 0.1) }
    assertFailsWith<IllegalArgumentException> { weightedIndex(listOf(1L), 1.0) }
  }

  @Test
  fun `cooldown preserves epoch milliseconds and seconds and tolerates clock reversal`() {
    assertEquals(86_399_000, remainingCooldown(1_000, 86_400, 2_000))
    assertEquals(0, remainingCooldown(1_000, 1, 2_000))
    assertEquals(1_000, remainingCooldown(1_000, 1, 500))
    assertFailsWith<IllegalArgumentException> { remainingCooldown(0, Long.MAX_VALUE, 0) }
  }

  @Test
  fun `links resolve chains and reject cycles`() {
    val a = UUID(0, 1)
    val b = UUID(0, 2)
    val c = UUID(0, 3)
    assertEquals(c, resolveSlotLink(a, mapOf(a to b, b to c)))
    assertFailsWith<IllegalArgumentException> { resolveSlotLink(a, mapOf(a to b, b to a)) }
    assertEquals(c, resolveSlotLink(c, emptyMap()))
  }

  @Test
  fun `exact UUID wins and duplicate names remain ambiguous`() {
    val a = UUID(0, 1)
    val b = UUID(0, 2)
    assertEquals(a, matchingSlot("Example", mapOf(a to "example")))
    assertNull(matchingSlot("example", mapOf(a to "example", b to "EXAMPLE")))
    assertEquals(a, matchingSlot(a.toString(), mapOf(a to "example", b to "example")))
    assertNull(matchingSlot("exa", mapOf(a to "example")))
  }

  @Test
  fun `placeholders work before Japanese suffixes and replacement text is literal`() {
    assertEquals(
        "25円でDemoを回す\nBalance 50 / Guest",
        slotText(
            "\$price円で\$machineNameを回す\$newlineBalance \$balance / \$player",
            mapOf(
                "price" to "25",
                "machineName" to "Demo",
                "newline" to "\n",
                "balance" to "50",
                "player" to "Guest",
            ),
        ),
    )
    assertEquals("\$player", slotText("\$machineName", mapOf("machineName" to "\$player")))
  }

  @Test
  fun `all layouts have valid distinct cells and winners are in reels`() {
    for (visual in listOf("SLOTMACHINE", "CSGOWHEEL", "CSGOWHEEL_VERTICAL")) {
      val slots = reelSlots(visual)
      assertEquals(slots.size, slots.distinct().size)
      assertTrue(slots.all { it in 0..53 })
      assertTrue(slots.containsAll(winningSlots(visual)))
      assertEquals(slots.toSet(), reelColumns(visual).flatten().toSet())
      assertTrue(leverSlot(visual) !in slots && leverSlot(visual) < slotSize(visual))
      assertTrue(previewSlot(visual) !in slots && previewSlot(visual) < slotSize(visual))
    }
    assertEquals(3, winningSlots("SLOTMACHINE").size)
    assertFailsWith<IllegalStateException> { reelSlots("OTHER") }
  }

  @Test
  fun `legacy cooldown conversion uses measured default units and loses no precision`() {
    assertEquals(1000L to 86400L, convertLegacyCooldown(1000, 86400, "milliseconds", "seconds"))
    assertEquals(1000L to 86400L, convertLegacyCooldown(1, 86400000, "seconds", "milliseconds"))
    assertEquals(1000L to 86400L, convertLegacyCooldown(1000, 86400, "", "seconds"))
    assertEquals(1000L to 86400L, convertLegacyCooldown(1000, 86400))
    assertEquals(1000L to 86400L, convertLegacyCooldown(1000, 86400, "milliseconds", ""))
    assertFailsWith<IllegalArgumentException> {
      convertLegacyCooldown(1000, 1001, "milliseconds", "milliseconds")
    }
    assertFailsWith<ArithmeticException> {
      convertLegacyCooldown(Long.MAX_VALUE, 1, "seconds", "seconds")
    }
  }

  @Test
  fun `measured layouts match regular horizontal and vertical machines`() {
    assertEquals(45, slotSize("SLOTMACHINE"))
    assertEquals(25, leverSlot("SLOTMACHINE"))
    assertEquals(45, slotSize("CSGOWHEEL_VERTICAL"))
    assertEquals(listOf(2, 11, 20, 29, 38), reelSlots("CSGOWHEEL_VERTICAL"))
    assertEquals(listOf(19, 21), emphasisSlots("CSGOWHEEL_VERTICAL"))
    assertEquals(33, leverSlot("CSGOWHEEL_VERTICAL"))
    assertEquals(15, previewSlot("CSGOWHEEL_VERTICAL"))
    assertEquals(54, slotSize("CSGOWHEEL"))
    assertEquals(43, leverSlot("CSGOWHEEL"))
  }

  @Test
  fun `disabled result messages never fall back to default text`() {
    assertNull(resultMessage(false, "winner"))
    assertNull(resultMessage(false, "loser"))
    assertNull(resultMessage(true, ""))
    assertEquals("winner", resultMessage(true, "winner"))
  }

  @Test
  fun `wheel slowdown keeps a repeat click inside the observed spin`() {
    for (visual in listOf("CSGOWHEEL", "CSGOWHEEL_VERTICAL")) {
      assertEquals(20, slotAnimationFrames(visual, 2).size)
      assertEquals(82, slotResultTick(visual, 2))
      assertEquals(10, slotAnimationFrames(visual, 1).size)
      assertEquals(62, slotResultTick(visual, 1))
      assertTrue(slotResultTick(visual, 2) > 46)
      assertEquals(
          listOf(3, 4, 5, 5, 6, 7, 8, 8),
          slotAnimationFrames(visual, 2).zipWithNext { a, b -> b - a }.takeLast(8),
      )
    }
    assertEquals(80, slotResultTick("SLOTMACHINE", 4))
  }
}
