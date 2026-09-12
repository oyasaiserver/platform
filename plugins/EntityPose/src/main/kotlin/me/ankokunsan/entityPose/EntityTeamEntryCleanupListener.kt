package me.ankokunsan.entityPose

import org.bukkit.Bukkit
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.entity.EntityRemoveEvent

internal fun shouldRemoveNameHidingEntry(cause: EntityRemoveEvent.Cause) =
    cause != EntityRemoveEvent.Cause.UNLOAD

class EntityTeamEntryCleanupListener : Listener {
  @EventHandler
  fun onEntityRemove(event: EntityRemoveEvent) {
    if (!shouldRemoveNameHidingEntry(event.cause)) return

    Bukkit.getScoreboardManager()
        .mainScoreboard
        .getTeam("animal_things_hide_name")
        ?.removeEntry(event.entity.uniqueId.toString())
  }
}
