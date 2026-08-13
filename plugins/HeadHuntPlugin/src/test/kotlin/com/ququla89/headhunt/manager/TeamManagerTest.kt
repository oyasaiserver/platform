package com.ququla89.headhunt.manager

import java.util.UUID
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertTrue

class TeamManagerTest {
  @Test
  fun `a player cannot join more than one team`() {
    val manager = TeamManager()
    val player = UUID.randomUUID()
    manager.create("alpha")
    manager.create("beta")

    assertTrue(manager.addMember("alpha", player))
    assertFalse(manager.addMember("beta", player))
    assertEquals("alpha", manager.teamOf(player)?.name)
  }

  @Test
  fun `removing and deleting teams update membership`() {
    val manager = TeamManager()
    val player = UUID.randomUUID()
    manager.create("alpha")
    manager.addMember("alpha", player)

    assertTrue(manager.removeMember(player))
    assertNull(manager.teamOf(player))
    assertTrue(manager.delete("alpha"))
    assertFalse(manager.delete("alpha"))
  }
}
