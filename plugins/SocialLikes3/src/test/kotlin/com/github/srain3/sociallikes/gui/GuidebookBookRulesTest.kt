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
  fun `entry mark prefers liked then invalid`() {
    assertEquals("☑", GuidebookBookRules.entryMark(valid = false, liked = true))
    assertEquals("！", GuidebookBookRules.entryMark(valid = false, liked = false))
    assertEquals("☐", GuidebookBookRules.entryMark(valid = true, liked = false))
  }

  @Test
  fun `comment keeps three lines and ends with an ellipsis`() {
    assertEquals(emptyList(), GuidebookBookRules.commentLines("No comment"))
    assertEquals(listOf("短い"), GuidebookBookRules.commentLines("短い,二行目"))

    val lines = GuidebookBookRules.commentLines("あ".repeat(40))

    assertEquals(listOf("あ".repeat(12), "あ".repeat(12), "あ".repeat(12) + "…"), lines)
    // 3行目が満杯なら … が入るまで削る
    assertEquals(
        "a".repeat(18) + "…",
        GuidebookBookRules.commentLines("あ".repeat(24) + "a".repeat(21)).last(),
    )
  }

  @Test
  fun `entry pages fill fourteen lines`() {
    val long = listOf("a", "b", "c")
    fun row(sub: List<String>) = GuidebookBookRules.EntryRow("☐", "名前", sub, 1)
    // 見出し1 + 5 + 5 = 11、3件目の5行（末尾空行を除き4行）で15 > 14
    val rows = listOf(row(long), row(long), row(long))
    assertEquals(listOf(2, 1), GuidebookBookRules.paginateByLines(rows).map { it.size })
    // コメントなし（2行）: 1 + 2*7 - 1 = 14 で7件、8件目は次ページ
    val short = List(8) { row(emptyList()) }
    assertEquals(listOf(7, 1), GuidebookBookRules.paginateByLines(short).map { it.size })
    assertEquals(emptyList(), GuidebookBookRules.paginateByLines(emptyList()))
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
