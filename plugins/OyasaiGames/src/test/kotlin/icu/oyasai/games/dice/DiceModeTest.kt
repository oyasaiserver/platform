package icu.oyasai.games.dice

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.Test

class DiceModeTest {

  @Test
  fun testBaseModesCountAndTypes() {
    assertEquals(8, DiceMode.BASE_MODES.size)
    assertEquals(80, DiceMode.allIds.size)
    assertEquals(80, DiceMode.allIds.toSet().size, "All generated mode IDs must be unique")
  }

  @Test
  fun testFromIdStandard() {
    assertEquals(DiceMode.D2, DiceMode.fromId("d2"))
    assertEquals(DiceMode.D4, DiceMode.fromId("d4"))
    assertEquals(DiceMode.ONE_D6, DiceMode.fromId("d6"))
    assertEquals(DiceMode.D8, DiceMode.fromId("d8"))
    assertEquals(DiceMode.D10, DiceMode.fromId("d10"))
    assertEquals(DiceMode.D12, DiceMode.fromId("d12"))
    assertEquals(DiceMode.D20, DiceMode.fromId("d20"))
    assertEquals(DiceMode.D100, DiceMode.fromId("d100"))
  }

  @Test
  fun testFromIdAliases() {
    assertEquals(DiceMode.ONE_D6, DiceMode.fromId("dice"))
    assertEquals(DiceMode.ONE_D6, DiceMode.fromId("saikoro"))
    assertEquals(DiceMode.D2, DiceMode.fromId("coin"))
    assertEquals(DiceMode.D2, DiceMode.fromId("cointoss"))
    assertEquals(DiceMode.D2, DiceMode.fromId("flip"))
  }

  @Test
  fun testFromIdMultiDice() {
    val threeD6 = DiceMode.fromId("3d6")
    assertEquals(DiceType.D6, threeD6.type)
    assertEquals(3, threeD6.diceCount)
    assertEquals("3d6", threeD6.id)

    val fiveD20 = DiceMode.fromId("5d20")
    assertEquals(DiceType.D20, fiveD20.type)
    assertEquals(5, fiveD20.diceCount)
    assertEquals("5d20", fiveD20.id)
  }

  @Test
  fun testFromIdFallback() {
    assertEquals(DiceMode.ONE_D6, DiceMode.fromId(null))
    assertEquals(DiceMode.ONE_D6, DiceMode.fromId(""))
    assertEquals(DiceMode.ONE_D6, DiceMode.fromId("unknown_dice_xyz"))
  }

  @Test
  fun testWithCountClamping() {
    val base = DiceMode.ONE_D6
    assertEquals(1, base.withCount(0).diceCount, "Count < 1 must clamp to 1")
    assertEquals(1, base.withCount(-5).diceCount, "Negative count must clamp to 1")
    assertEquals(10, base.withCount(15).diceCount, "Count > 10 must clamp to 10")
    assertEquals(5, base.withCount(5).diceCount)
  }

  @Test
  fun testDisplayDescriptions() {
    val singleD6 = DiceMode.ONE_D6
    assertTrue(singleD6.displayName.contains("1D6"))

    val multiD6 = singleD6.withCount(3)
    assertTrue(multiD6.displayName.contains("3D6"))
    assertTrue(multiD6.description.contains("3〜18"), "3D6 description should describe 3~18 range")

    val coin = DiceMode.D2
    assertTrue(coin.displayName.contains("コイントス"))
  }

  @Test
  fun testBaseType() {
    val threeD20 = DiceMode(DiceType.D20, 3)
    val base = threeD20.baseType()
    assertEquals(1, base.diceCount)
    assertEquals(DiceType.D20, base.type)
    assertEquals("1d20", base.id)
  }
}
