package com.github.srain3.sociallikes.gui

import com.github.srain3.sociallikes.GuidebookService
import com.github.srain3.sociallikes.datas.SLData
import java.time.LocalDateTime
import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue
import org.bukkit.Location

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
  fun `entry state shows validity before like status`() {
    assertEquals("いいね済み", GuidebookBookRules.entryState(true, true))
    assertEquals("未発見", GuidebookBookRules.entryState(true, false))
    assertEquals("案内不可（進捗対象外）", GuidebookBookRules.entryState(false, true))
  }

  @Test
  fun `home selects next available build or terminal state`() {
    val entries =
        listOf(
            entry(1, "いいね済み", valid = true, liked = true),
            entry(2, null, valid = true, liked = false),
            entry(3, "案内不可", valid = false, liked = false),
            entry(4, "次の建築", valid = true, liked = false),
            entry(5, "その次", valid = true, liked = false),
        )

    assertEquals(
        GuidebookBookRules.NextLine("Next: 次の建築", buildId = 4),
        GuidebookBookRules.nextLine(entries, complete = false),
    )
    assertEquals(
        GuidebookBookRules.NextLine("コンプリート！"),
        GuidebookBookRules.nextLine(entries, complete = true),
    )
    assertEquals(
        GuidebookBookRules.NextLine("Next: なし"),
        GuidebookBookRules.nextLine(entries.take(3), complete = false),
    )
  }

  @Test
  fun `delete confirmation must match and remain unexpired`() {
    assertTrue(GuidebookBookRules.canConfirmDelete(10, 1_100, requestedId = 10, now = 1_000))
    assertFalse(GuidebookBookRules.canConfirmDelete(11, 1_100, requestedId = 10, now = 1_000))
    assertFalse(GuidebookBookRules.canConfirmDelete(10, 999, requestedId = 10, now = 1_000))
    assertFalse(GuidebookBookRules.canConfirmDelete(null, null, requestedId = 10, now = 1_000))
  }

  private fun entry(id: Int, title: String?, valid: Boolean, liked: Boolean) =
      GuidebookService.EntryView(
          id,
          title?.let {
            SLData(
                id,
                Location(null, 0.0, 0.0, 0.0),
                LocalDateTime.MIN,
                UUID(0, id.toLong()),
                it,
                mutableListOf(),
                check = true,
                comment = "",
                worldName = "world",
                discordTextID = 0,
            )
          },
          valid,
          liked,
      )
}
