package icu.oyasai.utilities.items

import kotlin.test.*

class ItemRulesTest {
  @Test
  fun `ids are short half-width names`() {
    assertTrue(ItemRules.isValidId("golden-carrot_2"))
    for (bad in listOf("", "Upper", "全角", "a b", "x".repeat(33))) assertFalse(
        ItemRules.isValidId(bad),
        bad,
    )
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
