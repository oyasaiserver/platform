package com.github.srain3.sociallikes.datas

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class GuidebookRulesTest {
  @Test
  fun `progress counts only valid builds and current likes`() {
    assertEquals(
        GuidebookProgress(discovered = 2, total = 3),
        GuidebookRules.progress(listOf(10, 20, 30), setOf(10, 30, 99)),
    )
  }

  @Test
  fun `invalid build exclusion alone does not produce a completion event`() {
    val progress = GuidebookRules.progress(listOf(10), setOf(10))

    assertTrue(progress.complete)
    assertEquals(
        GuidebookCompletion.NONE,
        GuidebookRules.completion(progress, alreadyCompleted = false, causedByLike = false),
    )
  }

  @Test
  fun `full progress distinguishes first and repeat completion`() {
    val progress = GuidebookProgress(discovered = 2, total = 2)

    assertEquals(GuidebookCompletion.FIRST, GuidebookRules.completion(progress, false))
    assertEquals(GuidebookCompletion.REPEAT, GuidebookRules.completion(progress, true))
  }

  @Test
  fun `announcement fires on first publish and on republish after edits only`() {
    assertEquals(GuidebookAnnouncement.NEW, GuidebookRules.announcement(false, false))
    assertEquals(GuidebookAnnouncement.NEW, GuidebookRules.announcement(false, true))
    assertEquals(GuidebookAnnouncement.UPDATE, GuidebookRules.announcement(true, true))
    assertEquals(GuidebookAnnouncement.NONE, GuidebookRules.announcement(true, false))
  }

  @Test
  fun `creation and entry limits reject only exhausted or duplicate cases`() {
    assertTrue(GuidebookRules.canCreatePersonal(4, 5))
    assertFalse(GuidebookRules.canCreatePersonal(5, 5))
    assertTrue(GuidebookRules.canAddEntry(29, 30, alreadyIncluded = false))
    assertFalse(GuidebookRules.canAddEntry(30, 30, alreadyIncluded = false))
    assertFalse(GuidebookRules.canAddEntry(1, 30, alreadyIncluded = true))
  }

  @Test
  fun `title validation rejects formatting and control characters`() {
    assertTrue(GuidebookRules.isValidTitle("海辺の建築めぐり", 32))
    assertFalse(GuidebookRules.isValidTitle("&c偽の色", 32))
    assertFalse(GuidebookRules.isValidTitle("改行\nタイトル", 32))
  }

  @Test
  fun `description wraps full width characters at the book width`() {
    assertFalse(GuidebookRules.description("あ".repeat(12), maxLines = 1).truncated)
    assertFalse(GuidebookRules.description("あ".repeat(13), maxLines = 2).truncated)

    val result = GuidebookRules.description("あ".repeat(13), maxLines = 1)

    assertEquals("あ".repeat(12), result.text)
    assertTrue(result.truncated)
  }

  @Test
  fun `description uses measured ASCII advances with full width text`() {
    assertFalse(GuidebookRules.description("あ".repeat(12) + "iii", maxLines = 1).truncated)

    val result = GuidebookRules.description("あ".repeat(12) + "iiii", maxLines = 1)

    assertEquals("あ".repeat(12) + "iii", result.text)
    assertTrue(result.truncated)
  }

  @Test
  fun `description counts explicit newlines`() {
    val result = GuidebookRules.description("one\ntwo\nthree", maxLines = 2)

    assertEquals("one\ntwo", result.text)
    assertTrue(result.truncated)
    assertFalse(GuidebookRules.description("one\ntwo").truncated)
  }

  @Test
  fun `description keeps only eight displayed lines`() {
    val result = GuidebookRules.description("あ".repeat(12 * 8 + 1))

    assertEquals("あ".repeat(12 * 8), result.text)
    assertTrue(result.truncated)
  }

  @Test
  fun `safe destination requires space solid support and no hazard`() {
    assertTrue(
        GuidebookRules.isSafeDestination(
            signValid = true,
            worldLoaded = true,
            feetPassable = true,
            headPassable = true,
            supportSolid = true,
            dangerous = false,
        )
    )
    assertFalse(
        GuidebookRules.isSafeDestination(
            signValid = true,
            worldLoaded = true,
            feetPassable = true,
            headPassable = true,
            supportSolid = true,
            dangerous = true,
        )
    )
  }
}
