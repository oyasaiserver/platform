package com.github.srain3.sociallikes

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertTrue
import org.bukkit.configuration.file.YamlConfiguration

class GuidebookTeleportRulesTest {
  @Test
  fun `cooldown applies only between undiscovered builds`() {
    val last = GuideTeleportRecord(buildId = 10, atMillis = 1_000)

    assertTrue(canGuideTeleport(true, last, 2_000, 30_000))
    assertTrue(canGuideTeleport(false, null, 2_000, 30_000))
    assertFalse(canGuideTeleport(false, last, 30_999, 30_000))
    assertTrue(canGuideTeleport(false, last, 31_000, 30_000))
  }

  @Test
  fun `configured cooldown accepts zero and clamps negative values`() {
    val config = YamlConfiguration()
    assertEquals(
        30_000L,
        guidebookCooldownMillis(config.getInt("guidebook.teleportCooldownSeconds", 30)),
    )
    assertEquals(0L, guidebookCooldownMillis(0))
    assertEquals(0L, guidebookCooldownMillis(-10))
    assertEquals(2_000L, guidebookCooldownMillis(2))
    assertTrue(
        canGuideTeleport(false, GuideTeleportRecord(10, 1_000), 1_000, guidebookCooldownMillis(0))
    )
  }
}
