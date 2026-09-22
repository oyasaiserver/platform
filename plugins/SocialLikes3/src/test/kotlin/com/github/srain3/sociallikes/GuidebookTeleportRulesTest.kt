package com.github.srain3.sociallikes

import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue

class GuidebookTeleportRulesTest {
  @Test
  fun `cooldown applies only between undiscovered builds`() {
    val last = GuideTeleportRecord(buildId = 10, atMillis = 1_000)

    assertTrue(canGuideTeleport(true, last, 2_000, 30_000))
    assertTrue(canGuideTeleport(false, null, 2_000, 30_000))
    assertFalse(canGuideTeleport(false, last, 30_999, 30_000))
    assertTrue(canGuideTeleport(false, last, 31_000, 30_000))
  }
}
