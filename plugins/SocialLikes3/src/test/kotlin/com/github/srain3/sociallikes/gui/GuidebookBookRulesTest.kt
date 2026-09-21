package com.github.srain3.sociallikes.gui

import java.time.Instant
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class GuidebookBookRulesTest {
  @Test
  fun `book pages keep three entries in order`() {
    assertEquals(listOf(emptyList()), GuidebookBookRules.paginate(emptyList<Int>(), 3))
    assertEquals(
        listOf(listOf(1, 2, 3), listOf(4, 5, 6), listOf(7)),
        GuidebookBookRules.paginate((1..7).toList(), 3),
    )
  }

  @Test
  fun `liked state includes a Japan date only when timestamp exists`() {
    val likedAt = Instant.parse("2026-09-20T15:00:00Z").toEpochMilli()

    assertEquals("いいね済み 2026/9/21", GuidebookBookRules.entryState(true, true, likedAt))
    assertEquals("いいね済み", GuidebookBookRules.entryState(true, true, null))
    assertEquals("未発見", GuidebookBookRules.entryState(true, false, likedAt))
    assertEquals("案内不可（進捗対象外）", GuidebookBookRules.entryState(false, true, likedAt))
  }

  @Test
  fun `delete confirmation must match and remain unexpired`() {
    assertTrue(GuidebookBookRules.canConfirmDelete(10, 1_100, requestedId = 10, now = 1_000))
    assertFalse(GuidebookBookRules.canConfirmDelete(11, 1_100, requestedId = 10, now = 1_000))
    assertFalse(GuidebookBookRules.canConfirmDelete(10, 999, requestedId = 10, now = 1_000))
    assertFalse(GuidebookBookRules.canConfirmDelete(null, null, requestedId = 10, now = 1_000))
  }
}
