package icu.oyasai.utilities.spawn

import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertNull

class RespawnTargetTest {
  private fun target(
      jailed: Boolean = false,
      respawnAtHome: Boolean = true,
      respawnAtBed: Boolean = true,
      anchorSpawn: Boolean = false,
      respawnAtAnchor: Boolean = false,
      bed: String? = "bed",
      home: String? = "home",
      spawn: String? = "spawn",
  ): String? =
      respawnTarget(
          jailed,
          respawnAtHome,
          respawnAtBed,
          anchorSpawn,
          respawnAtAnchor,
          { bed },
          { home },
          spawn,
      )

  @Test
  fun `jailed players are left to vanilla`() {
    assertNull(target(jailed = true))
  }

  @Test
  fun `respawn at home prefers bed then home then spawn`() {
    assertEquals("bed", target())
    assertEquals("home", target(bed = null))
    assertEquals("home", target(respawnAtBed = false))
    assertEquals("spawn", target(bed = null, home = null))
  }

  @Test
  fun `anchor respawn uses home unless anchors are allowed`() {
    assertEquals("home", target(anchorSpawn = true))
    assertEquals("bed", target(anchorSpawn = true, respawnAtAnchor = true))
  }

  @Test
  fun `without respawn at home always goes to spawn`() {
    assertEquals("spawn", target(respawnAtHome = false))
    assertNull(target(respawnAtHome = false, spawn = null))
  }
}
