package me.ankokunsan.entityPose

import kotlin.test.Test
import kotlin.test.assertFalse
import kotlin.test.assertTrue
import org.bukkit.event.entity.EntityRemoveEvent

class EntityTeamEntryCleanupListenerTest {
  @Test
  fun `only chunk unload keeps the scoreboard entry`() {
    assertFalse(shouldRemoveNameHidingEntry(EntityRemoveEvent.Cause.UNLOAD))
    assertTrue(shouldRemoveNameHidingEntry(EntityRemoveEvent.Cause.PLUGIN))
  }
}
