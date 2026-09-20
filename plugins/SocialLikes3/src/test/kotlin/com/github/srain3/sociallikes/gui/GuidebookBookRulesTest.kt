package com.github.srain3.sociallikes.gui

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class GuidebookBookRulesTest {
  @Test
  fun `pagination keeps an empty page and preserves item order`() {
    assertEquals(listOf(emptyList()), GuidebookBookRules.paginate(emptyList<Int>(), 2))
    assertEquals(
        listOf(listOf(1, 2), listOf(3, 4), listOf(5)),
        GuidebookBookRules.paginate((1..5).toList(), 2),
    )
  }

  @Test
  fun `delete confirmation must match and remain unexpired`() {
    assertTrue(GuidebookBookRules.canConfirmDelete(10, 1_100, requestedId = 10, now = 1_000))
    assertFalse(GuidebookBookRules.canConfirmDelete(11, 1_100, requestedId = 10, now = 1_000))
    assertFalse(GuidebookBookRules.canConfirmDelete(10, 999, requestedId = 10, now = 1_000))
    assertFalse(GuidebookBookRules.canConfirmDelete(null, null, requestedId = 10, now = 1_000))
  }
}
