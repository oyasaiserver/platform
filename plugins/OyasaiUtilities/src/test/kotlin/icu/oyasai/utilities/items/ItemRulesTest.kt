package icu.oyasai.utilities.items

import kotlin.test.*

class ItemRulesTest {
  @Test
  fun `numbers must be positive integers`() {
    assertEquals(1, ItemRules.parseNumber("1"))
    assertEquals(Int.MAX_VALUE, ItemRules.parseNumber(Int.MAX_VALUE.toString()))
    for (bad in listOf(null, "", "0", "-1", "1.5", "one", "1 2", " 1 ", "2147483648")) {
      assertNull(ItemRules.parseNumber(bad), bad)
    }
  }

  @Test
  fun `name search requires every word ignoring case`() {
    assertTrue(ItemRules.matchesName("Golden Magic Carrot", "  CARROT   gold\t"))
    assertFalse(ItemRules.matchesName("Golden Magic Carrot", "gold apple"))
    assertFalse(ItemRules.matchesName("Golden Magic Carrot", " \t\n"))
    assertFalse(ItemRules.matchesName("カタカナ", "かたかな"))
    assertFalse(ItemRules.matchesName("ＡＢＣ", "ABC"))
  }

  @Test
  fun `free items are always claimable`() {
    assertNull(ItemRules.denial(ClaimRule.FREE, staff = false, alreadyClaimed = true))
  }

  @Test
  fun `staff items are for staff only and hidden from players`() {
    assertNotNull(ItemRules.denial(ClaimRule.STAFF, staff = false, alreadyClaimed = false))
    assertFalse(ItemRules.visibleTo(ClaimRule.STAFF, staff = false))
    assertNull(ItemRules.denial(ClaimRule.STAFF, staff = true, alreadyClaimed = false))
    assertTrue(ItemRules.visibleTo(ClaimRule.STAFF, staff = true))
  }

  @Test
  fun `once items refuse a second claim except for staff`() {
    assertNull(ItemRules.denial(ClaimRule.ONCE, staff = false, alreadyClaimed = false))
    assertNotNull(ItemRules.denial(ClaimRule.ONCE, staff = false, alreadyClaimed = true))
    assertNull(ItemRules.denial(ClaimRule.ONCE, staff = true, alreadyClaimed = true))
  }

  @Test
  fun `rules parse by key`() {
    assertEquals(ClaimRule.ONCE, ClaimRule.parse("ONCE"))
    assertNull(ClaimRule.parse("説明文"))
  }
}
