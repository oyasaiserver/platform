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
  fun `description keeps only the first eight lines`() {
    val result = GuidebookRules.description((1..10).joinToString("\n") { "line$it" })

    assertEquals((1..8).joinToString("\n") { "line$it" }, result.text)
    assertTrue(result.truncated)
    assertFalse(GuidebookRules.description("one\ntwo").truncated)
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
